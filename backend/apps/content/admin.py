from django.contrib import admin
from .models import HeroSlide, ProgramOffer, AboutSection, Testimonial


@admin.register(HeroSlide)
class HeroSlideAdmin(admin.ModelAdmin):
    list_display = ("id", "title", "subtitle", "order", "is_active")
    list_display_links = ("id", "title")
    list_editable = ("order", "is_active")
    search_fields = ("title", "subtitle", "description")


@admin.register(ProgramOffer)
class ProgramOfferAdmin(admin.ModelAdmin):
    list_display = ("id", "title", "icon_name", "order", "is_featured")
    list_display_links = ("id", "title")
    list_editable = ("order", "is_featured")
    search_fields = ("title", "description")


@admin.register(AboutSection)
class AboutSectionAdmin(admin.ModelAdmin):
    list_display = ("title", "button_text", "button_url")

    def has_add_permission(self, request):
        return not AboutSection.objects.exists()


@admin.register(Testimonial)
class TestimonialAdmin(admin.ModelAdmin):
    list_display = ("id", "client_name", "client_role", "order", "is_published")
    list_display_links = ("id", "client_name")
    list_editable = ("order", "is_published")
    search_fields = ("client_name", "quote")
