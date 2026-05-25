import uuid
import random
from django.db import models
from django.conf import settings
from apps.catalog.models import Product, ProductInstance

class Order(models.Model):
    """High-value transactional database matrix."""
    class OrderStatus(models.TextChoices):
        AWAITING_PAYMENT = 'AWAITING_PAYMENT', 'Pending Payment Clearance'
        PAID_PROCESSING = 'PAID_PROCESSING', 'Paid - Warehouse Preparing System Assembly'
        DISPATCHED = 'DISPATCHED', 'In Transit via Fleet Courier'
        DELIVERED = 'DELIVERED', 'Delivered and Secure Handshake Confirmed'
        FRAUD_BLOCKED = 'FRAUD_BLOCKED', 'Cancelled by Internal Risk Engine'

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.PROTECT, related_name='orders')
    status = models.CharField(max_length=25, choices=OrderStatus.choices, default=AWAITING_PAYMENT, db_index=True)
    
    # Financial Sub-Ledger Calculations
    subtotal = models.DecimalField(max_digits=12, decimal_places=2)
    tax_amount = models.DecimalField(max_digits=12, decimal_places=2)
    shipping_cost = models.DecimalField(max_digits=10, decimal_places=2)
    total_amount = models.DecimalField(max_digits=12, decimal_places=2)
    
    # Security Token Delivery Handshake
    secure_delivery_pin = models.CharField(
        max_length=6, 
        editable=False, 
        help_text="Randomized token texted to client. Driver requests this token at site location to prevent claim spoofing or theft."
    )
    tracking_number = models.CharField(max_length=100, unique=True, null=True, blank=True)
    shipping_address_raw = models.TextField()
    
    created_at = models.DateTimeField(auto_now_add=True, db_index=True)
    updated_at = models.DateTimeField(auto_now=True)

    def save(self, *args, **kwargs):
        if not self.secure_delivery_pin:
            self.secure_delivery_pin = str(random.randint(100000, 999999))
        super().save(*args, **kwargs)

    def __str__(self):
        return f"SteadyGrid Order #{self.id} -> Status: {self.status}"

class OrderItem(models.Model):
    """Line items connecting order forms to actual unique units."""
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    order = models.ForeignKey(Order, on_delete=models.CASCADE, related_name='items')
    product = models.ForeignKey(Product, on_delete=models.PROTECT)
    quantity = models.PositiveIntegerField(default=1)
    price_at_purchase = models.DecimalField(max_digits=12, decimal_places=2)
    
    # Exact item serialization logging configuration links
    allocated_serial_units = models.ManyToManyField(ProductInstance, blank=True, help_text="Binds exact physical components to shipment footprint")

    def __str__(self):
        return f"{self.quantity} unit(s) x {self.product.name}"

    class Meta:
        verbose_name = "Customer Order Ledger"
        verbose_name_plural = "Customer Order Ledgers"
        indexes = [
            # Speeds up the customer profile dashboard order history list
            models.Index(fields=['user', '-created_at'], name='idx_user_historical_orders'),
            
            # Optimizes real-time courier dashboard queues filtering operational states
            models.Index(fields=['status'], name='idx_order_fulfillment_status'),
            
            # Speeds up public lookups on the tracking path search input field
            models.Index(fields=['tracking_number'], name='idx_order_tracking_ref'),
        ]
