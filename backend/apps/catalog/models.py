import uuid
from django.db import models

class Category(models.Model):
    """Hierarchical organization mapping your structural categories."""
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(max_length=100, unique=True)
    slug = models.SlugField(max_length=100, unique=True)
    description = models.TextField(blank=True, null=True)
    parent = models.ForeignKey('self', on_delete=models.SET_NULL, null=True, blank=True, related_name='subcategories')

    class Meta:
        verbose_name_plural = "Categories"

    def __str__(self):
        return self.name

class Product(models.Model):
    """Master record details sheet specifying global attributes of an energy catalog lineup."""
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    category = models.ForeignKey(Category, on_delete=models.PROTECT, related_name='products')
    name = models.CharField(max_length=255)
    slug = models.SlugField(max_length=255, unique=True)
    sku = models.CharField(max_length=100, unique=True, db_index=True)
    description = models.TextField()
    price = models.DecimalField(max_digits=12, decimal_places=2, help_text="Supports currency pricing scaling to millions")
    weight_kg = models.DecimalField(max_digits=6, decimal_places=2)
    is_serialized = models.BooleanField(default=True, help_text="Enforces strict serial capture workflows if True")
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"[{self.sku}] {self.name}"

class ProductInstance(models.Model):
    """
    CRITICAL SECURITY LAYER: Maps unique single physical products 
    inside the warehouse environment to halt internal stock shrinkage.
    """
    class StockStatus(models.TextChoices):
        AVAILABLE = 'AVAILABLE', 'Available in Warehouse'
        RESERVED = 'RESERVED', 'Reserved in Active Checkout Session'
        SOLD = 'SOLD', 'Sold and Handed Over to Client'
        MAINTENANCE = 'MAINTENANCE', 'In Testing / Engineering Hold'

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    product = models.ForeignKey(Product, on_delete=models.CASCADE, related_name='instances')
    serial_number = models.CharField(max_length=100, unique=True, null=True, blank=True, db_index=True)
    status = models.CharField(max_length=20, choices=StockStatus.choices, default=StockStatus.AVAILABLE, db_index=True)
    warehouse_bin = models.CharField(max_length=50, blank=True, help_text="Exact storage location point")
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.product.name} - S/N: {self.serial_number or 'NON-SERIALIZED'}"

    class Meta:
        verbose_name = "Product Physical Unit Instance"
        verbose_name_plural = "Product Physical Unit Instances"
        indexes = [
            # Speeds up filtering available inventory stock during checkout calculations
            models.Index(fields=['product', 'status'], name='idx_prod_avail_status'),
            
            # Optimizes barcode scanning lookups in the warehouse dashboard
            models.Index(fields=['serial_number'], name='idx_unit_serial_lookup'),
        ]
