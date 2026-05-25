import uuid
from django.db import models
from django.conf import settings

class ServiceBooking(models.Model):
    """Manages technical site surveys and product installation parameters."""
    class BookingStatus(models.TextChoices):
        PENDING_SCHEDULE = 'PENDING_SCHEDULE', 'Awaiting Date Finalization'
        ASSIGNED = 'ASSIGNED', 'Engineer Assigned to Task'
        COMPLETED = 'COMPLETED', 'Installation Certified by Engineer'
        CANCELLED = 'CANCELLED', 'Booking Forfeited'

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    customer = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.PROTECT, related_name='service_bookings')
    service_name = models.CharField(max_length=255) # e.g., "Full Home Solar Inverter Grid Setup"
    scheduled_date = models.DateTimeField(null=True, blank=True)
    status = models.CharField(max_length=20, choices=BookingStatus.choices, default=PENDING_SCHEDULE)
    installation_address = models.TextField()
    assigned_engineer_name = models.CharField(max_length=150, blank=True, null=True)
    engineering_notes = models.TextField(blank=True, null=True, help_text="Post-installation diagnostic metrics logged by team")
    
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.service_name} for {self.customer.email} ({self.status})"
