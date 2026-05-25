import uuid
from django.contrib.auth.models import AbstractUser
from django.db import models

class User(AbstractUser):
    """
    Core identity matrix. Extends abstract user structures to provide
    enterprise-level access mapping variables across administrative panels.
    """
    class Roles(models.TextChoices):
        ADMIN = 'ADMIN', 'System Administrator'
        OPERATIONS = 'OPERATIONS', 'Logistics & Warehouse Operations'
        CUSTOMER = 'CUSTOMER', 'End Consumer / Corporate Client'

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    role = models.CharField(max_length=15, choices=Roles.choices, default=Roles.CUSTOMER, db_index=True)
    phone_number = models.CharField(max_length=15, unique=True, null=True, blank=True, help_text="Format: +254XXXXXXXXX")
    avatar_url = models.URLField(max_length=500, null=True, blank=True)
    
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name = "User Account"
        verbose_name_plural = "User Accounts"

    def __str__(self):
        return f"{self.email} ({self.role})"
