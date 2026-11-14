from django.db import models


class HeroSlide(models.Model):
    """Diapositive du carrousel principal."""

    title = models.CharField(max_length=200, default="A Perfect Learning Center")
    subtitle = models.CharField(max_length=200, default="For Your Kids")
    description = models.TextField()
    primary_btn_text = models.CharField(max_length=50, default="Read More")
    primary_btn_url = models.CharField(max_length=200, default="/about")
    secondary_btn_text = models.CharField(max_length=50, default="Contact us")
    secondary_btn_url = models.CharField(max_length=200, default="/contact")
    order = models.PositiveIntegerField(default=0)
    is_active = models.BooleanField(default=True)

    class Meta:
        ordering = ["order", "id"]
        verbose_name = "Diapositive Hero"
        verbose_name_plural = "Diapositives Hero"

    def __str__(self):
        return f"Slide {self.order}: {self.title} {self.subtitle}"


class ProgramOffer(models.Model):
    """Offre ou programme éducatif."""

    title = models.CharField(max_length=150)
    description = models.TextField()
    icon_name = models.CharField(
        max_length=100,
        help_text="Identifiant d'icône (ex: shield, photo-size, vegan, education, help, planet-earth)",
        default="shield",
    )
    image = models.ImageField(upload_to="programs/", blank=True, null=True)
    order = models.PositiveIntegerField(default=0)
    is_featured = models.BooleanField(default=True)

    class Meta:
        ordering = ["order", "id"]
        verbose_name = "Programme / Offre"
        verbose_name_plural = "Programmes / Offres"

    def __str__(self):
        return self.title


class AboutSection(models.Model):
    """Contenu de la section À Propos (singleton)."""

    title = models.CharField(max_length=200, default="A Few words about us")
    content = models.TextField()
    image = models.ImageField(upload_to="about/", blank=True, null=True)
    button_text = models.CharField(max_length=50, default="Read More")
    button_url = models.CharField(max_length=200, default="/about")

    class Meta:
        verbose_name = "Section À Propos"
        verbose_name_plural = "Section À Propos"

    def __str__(self):
        return self.title

    @classmethod
    def load(cls):
        obj, created = cls.objects.get_or_create(
            pk=1,
            defaults={
                "title": "A Few words about us",
                "content": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web",
                "button_text": "Read More",
                "button_url": "/about",
            },
        )
        return obj


class Testimonial(models.Model):
    """Avis et témoignages clients."""

    client_name = models.CharField(max_length=100)
    client_role = models.CharField(max_length=100, default="customer")
    quote = models.TextField()
    avatar = models.ImageField(upload_to="testimonials/", blank=True, null=True)
    order = models.PositiveIntegerField(default=0)
    is_published = models.BooleanField(default=True)

    class Meta:
        ordering = ["order", "id"]
        verbose_name = "Témoignage Client"
        verbose_name_plural = "Témoignages Clients"

    def __str__(self):
        return f"{self.client_name} ({self.client_role})"
