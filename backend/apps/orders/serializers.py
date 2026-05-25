from rest_framework import serializers
from django.db import transaction
from apps.catalog.models import Product, ProductInstance
from apps.orders.models import Order, OrderItem
from apps.payments.models import PaymentTransaction

class OrderItemInputSerializer(serializers.Serializer):
    """Parses incoming shopping cart item elements from frontend JSON payloads."""
    product_id = serializers.UUIDField()
    quantity = serializers.IntegerField(min_value=1)

    def validate(self, data):
        try:
            product = Product.objects.get(id=data['product_id'])
        except Product.DoesNotExist:
            raise serializers.ValidationError({"product_id": "Requested energy product code does not exist."})
        
        # High-Value Safeguard: Check real-time stock levels of physical serials in warehouse
        available_stock_count = ProductInstance.objects.filter(
            product=product,
            status=ProductInstance.StockStatus.AVAILABLE
        ).count()

        if available_stock_count < data['quantity']:
            raise serializers.ValidationError({
                "quantity": f"Insufficient inventory for {product.name}. Requested: {data['quantity']}, Available: {available_stock_count}"
            })
            
        data['product_object'] = product
        return data


class CheckoutSerializer(serializers.ModelSerializer):
    """
    Main business logic machine. Processes inputs, performs tax and shipping math,
    and isolates serialized warehouse items within a database transaction block.
    """
    items = OrderItemInputSerializer(many=True, write_only=True)
    
    class Meta:
        model = Order
        fields = [
            'id', 'status', 'subtotal', 'tax_amount', 
            'shipping_cost', 'total_amount', 'shipping_address_raw', 
            'secure_delivery_pin', 'tracking_number', 'items'
        ]
        read_only_fields = [
            'id', 'status', 'subtotal', 'tax_amount', 
            'shipping_cost', 'total_amount', 'secure_delivery_pin', 'tracking_number'
        ]

    def validate_items(self, value):
        if not value:
            raise serializers.ValidationError("Your checkout shopping cart cannot be empty.")
        return value

    def create(self, validated_data):
        items_data = validated_data.pop('items')
        request = self.context.get('request')
        user = request.user if request else None

        if not user or user.is_anonymous:
            raise serializers.ValidationError("An authenticated user account profile is required to complete checkouts.")

        # Wrap everything in a database transaction block to prevent partial orders if stock runs out concurrently
        with transaction.atomic():
            subtotal = 0
            order_items_to_create = []
            allocation_map = {}

            # 1. Evaluate calculations & reserve physical inventory serial numbers
            for item in items_data:
                product = item['product_object']
                qty = item['quantity']
                
                line_price = product.price * qty
                subtotal += line_price

                # Fetch and lock the specific physical warehouse items to prevent race conditions
                available_units = list(
                    ProductInstance.objects.select_for_update().filter(
                        product=product,
                        status=ProductInstance.StockStatus.AVAILABLE
                    )[:qty]
                )

                # Secondary safety verify check
                if len(available_units) < qty:
                    raise serializers.ValidationError(f"Inventory race condition occurred. {product.name} stock filled up elsewhere.")

                # Temporarily transition status to RESERVED so other customers can't check them out
                for unit in available_units:
                    unit.status = ProductInstance.StockStatus.RESERVED
                    unit.save()

                allocation_map[product.id] = available_units
                order_items_to_create.append((product, qty, product.price))

            # 2. System overhead calculations (VAT & Heavy Freight rules)
            tax_rate = 0.16  # Standard Kenya VAT 16%
            calculated_tax = subtotal * tax_rate
            
            # Simulated shipping cost calculation (e.g., standard baseline logistics fee)
            calculated_shipping = 1500.00 
            calculated_total = subtotal + calculated_tax + calculated_shipping

            # 3. Create structural core master Order ledger instance row entry
            order = Order.objects.create(
                user=user,
                status=Order.OrderStatus.AWAITING_PAYMENT, # STRICT RULE: Locked down until payment clears
                subtotal=subtotal,
                tax_amount=calculated_tax,
                shipping_cost=calculated_shipping,
                total_amount=calculated_total,
                shipping_address_raw=validated_data['shipping_address_raw']
            )

            # 4. Generate line-items and link physical item mappings
            for product, qty, price_paid in order_items_to_create:
                order_item = OrderItem.objects.create(
                    order=order,
                    product=product,
                    quantity=qty,
                    price_at_purchase=price_paid
                )
                # Link the exact physical units assigned to this delivery box
                order_item.allocated_serial_units.add(*allocation_map[product.id])

            return order


class CompletePaymentCallbackSerializer(serializers.Serializer):
    """
    Validates incoming payment confirmation signals. Once cleared,
    it promotes the order status and marks serial numbers as SOLD.
    """
    order_id = serializers.UUIDField()
    provider = serializers.ChoiceField(choices=PaymentTransaction.Provider.choices)
    gateway_reference = serializers.CharField(max_length=255)
    amount_paid = serializers.DecimalField(max_digits=12, decimal_places=2)
    raw_payload = serializers.JSONField()

    def save(self):
        order_id = self.validated_data['order_id']
        
        with transaction.atomic():
            # Lock the target order row to ensure processing stability
            order = Order.objects.select_for_update().get(id=order_id)
            
            if order.total_amount != self.validated_data['amount_paid']:
                order.status = Order.OrderStatus.FRAUD_BLOCKED
                order.save()
                raise serializers.ValidationError("Discrepancy alert: Paid value amount does not equal ledger invoice footprint.")

            # Create immutable successful Payment Transaction record block entry
            transaction_record = PaymentTransaction.objects.create(
                order=order,
                provider=self.validated_data['provider'],
                status=PaymentTransaction.TxStatus.SUCCESS,
                amount_settled=self.validated_data['amount_paid'],
                gateway_reference=self.validated_data['gateway_reference'],
                raw_api_payload=self.validated_data['raw_payload']
            )

            # Payment verified: Safe to transition order and finalize serial bindings
            order.status = Order.OrderStatus.PAID_PROCESSING
            order.save()

            # Mark all linked items as officially SOLD to close inventory lifecycle loop
            for item in order.items.all():
                for unit in item.allocated_serial_units.all():
                    unit.status = ProductInstance.StockStatus.SOLD
                    unit.save()

            return transaction_record
