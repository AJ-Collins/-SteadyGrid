import uuid
from django.db import models
from apps.orders.models import Order

class PaymentTransaction(models.Model):
    """
    Immutable payment verification model. Financial state machine 
    that validates incoming gateway responses before fulfilling orders.
    """
    class Provider(models.TextChoices):
        MPESA = 'MPESA', 'Safaricom M-Pesa Express'
        STRIPE = 'STRIPE', 'Stripe Card Processing'

    class TxStatus(models.TextChoices):
        PENDING = 'PENDING', 'Awaiting Webhook Async Clearance'
        SUCCESS = 'SUCCESS', 'Settled & Funds Confirmed In Ledger'
        FAILED = 'FAILED', 'Transaction Rejected / Card Aborted'
        RISK_REJECTED = 'RISK_REJECTED', 'Blocked by Automated Fraud Screening Engine'

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    order = models.ForeignKey(Order, on_delete=models.PROTECT, related_name='transactions')
    provider = models.CharField(max_length=15, choices=Provider.choices)
    status = models.CharField(max_length=20, choices=TxStatus.choices, default=PENDING, db_index=True)
    amount_settled = models.DecimalField(max_digits=12, decimal_places=2)
    gateway_reference = models.CharField(max_length=255, unique=True, db_index=True, help_text="MpesaReceiptNumber or Stripe Charge ID Token")
    raw_api_payload = models.JSONField(help_text="Immutable original JSON log data preserved for auditing purposes")
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.provider} ({self.status}) - Ref: {self.gateway_reference}"

    class Meta:
        verbose_name = "Financial Transaction Entry"
        verbose_name_plural = "Financial Transaction Entries"
        indexes = [
            # Prevents gateway callback duplicate replay attacks or double-spend exploits
            models.Index(fields=['gateway_reference'], name='idx_payment_network_ref'),
            
            # Speeds up automated dashboard ledger checking algorithms matching statuses
            models.Index(fields=['order', 'status'], name='idx_order_ledger_verify'),
        ]

class MpesaDetails(models.Model):
    """Safaricom Daraja API asynchronous metadata tracking architecture."""
    transaction = models.OneToOneField(PaymentTransaction, on_delete=models.CASCADE, related_name='mpesa_meta')
    merchant_request_id = models.CharField(max_length=100, db_index=True)
    checkout_request_id = models.CharField(max_length=100, db_index=True)
    customer_phone_number = models.CharField(max_length=15)

    class Meta:
        indexes = [
            # Essential for matching async STK Push callback parameters instantly
            models.Index(fields=['checkout_request_id'], name='idx_mpesa_checkout_handshake'),
        ]

class CardDetails(models.Model):
    """
    CARD MITIGATION LAYER: Records strict risk variables from 
    Stripe Radar to flags proxy exploits or cloned identities.
    """
    transaction = models.OneToOneField(PaymentTransaction, on_delete=models.CASCADE, related_name='card_meta')
    card_brand = models.CharField(max_length=30)
    last_four_digits = models.CharField(max_length=4)
    threed_secure_status = models.CharField(max_length=50, help_text="Enforces 3DS2 checking payload markers (Pass / Fail / Required)")
    cvc_check = models.CharField(max_length=20)
    avs_check = models.CharField(max_length=20)
    radar_risk_score = models.IntegerField(help_text="Stripe-calculated risk metric scoring profile from 0 to 100")
