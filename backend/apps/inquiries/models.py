from django.db import models


class ContactMessage(models.Model):
    """Demande de rappel / message de contact."""

    STATUS_CHOICES = [
        ("NEW", "Nouveau"),
        ("CONTACTED", "Contacté"),
        ("CLOSED", "Clôturé"),
    ]

    name = models.CharField(max_length=150, verbose_name="Nom complet")
    email = models.EmailField(verbose_name="Adresse email")
    phone = models.CharField(
        max_length=50, blank=True, verbose_name="Numéro de téléphone"
    )
    message = models.TextField(blank=True, verbose_name="Message")
    status = models.CharField(
        max_length=20, choices=STATUS_CHOICES, default="NEW", verbose_name="Statut"
    )
    created_at = models.DateTimeField(auto_now_add=True, verbose_name="Reçu le")

    class Meta:
        ordering = ["-created_at"]
        verbose_name = "Message de Contact"
        verbose_name_plural = "Messages de Contact"

    def __str__(self):
        return f"{self.name} ({self.email}) - {self.get_status_display()}"


class NewsletterSubscriber(models.Model):
    """Abonné à la newsletter."""

    email = models.EmailField(unique=True, verbose_name="Adresse email")
    is_active = models.BooleanField(default=True, verbose_name="Actif")
    subscribed_at = models.DateTimeField(
        auto_now_add=True, verbose_name="Date d'inscription"
    )

    class Meta:
        ordering = ["-subscribed_at"]
        verbose_name = "Abonné Newsletter"
        verbose_name_plural = "Abonnés Newsletter"

    def __str__(self):
        return self.email
