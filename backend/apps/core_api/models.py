from django.db import models


class SiteConfiguration(models.Model):
    """Configuration globale du site web (modèle singleton)."""

    site_name = models.CharField(max_length=100, default="Brighton")
    tagline = models.CharField(
        max_length=255, default="A Perfect Learning Center For Your Kids"
    )
    phone = models.CharField(max_length=50, default="+01 1234567890")
    email = models.EmailField(default="demo@gmail.com")
    address = models.CharField(max_length=255, default="Location")
    latitude = models.FloatField(
        default=40.645037, help_text="Latitude pour Google Map"
    )
    longitude = models.FloatField(
        default=-73.880224, help_text="Longitude pour Google Map"
    )

    # Textes d'informations du footer
    footer_about_text = models.TextField(
        default="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration."
    )
    contact_info_text = models.TextField(
        default="Donec odio. Quisque volutpat mattis eros. Lorem ipsum dolor sit amet, consectetuer adipiscing elit."
    )
    information_text = models.TextField(
        default="Donec odio. Quisque volutpat mattis eros. Lorem ipsum dolor sit amet, consectetuer adipiscing elit."
    )
    account_text = models.TextField(
        default="Donec odio. Quisque volutpat mattis eros. Lorem ipsum dolor sit amet, consectetuer adipiscing elit."
    )
    copyright_text = models.CharField(
        max_length=255, default="2026 All Rights Reserved By Brighton"
    )

    class Meta:
        verbose_name = "Configuration du Site"
        verbose_name_plural = "Configuration du Site"

    def __str__(self):
        return f"{self.site_name} Configuration"

    @classmethod
    def load(cls):
        obj, created = cls.objects.get_or_create(pk=1)
        return obj
