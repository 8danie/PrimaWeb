from django.contrib import admin
from .models import SiteConfiguration


@admin.register(SiteConfiguration)
class SiteConfigurationAdmin(admin.ModelAdmin):
    list_display = ("site_name", "phone", "email", "address")

    def has_add_permission(self, request):
        # Permettre un seul objet de configuration
        return not SiteConfiguration.objects.exists()
