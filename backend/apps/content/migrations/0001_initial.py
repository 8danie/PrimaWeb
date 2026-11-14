from django.db import migrations, models


class Migration(migrations.Migration):
    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name="AboutSection",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                (
                    "title",
                    models.CharField(default="A Few words about us", max_length=200),
                ),
                ("content", models.TextField()),
                ("image", models.ImageField(blank=True, null=True, upload_to="about/")),
                ("button_text", models.CharField(default="Read More", max_length=50)),
                ("button_url", models.CharField(default="/about", max_length=200)),
            ],
            options={
                "verbose_name": "Section À Propos",
                "verbose_name_plural": "Section À Propos",
            },
        ),
        migrations.CreateModel(
            name="HeroSlide",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                (
                    "title",
                    models.CharField(
                        default="A Perfect Learning Center", max_length=200
                    ),
                ),
                ("subtitle", models.CharField(default="For Your Kids", max_length=200)),
                ("description", models.TextField()),
                (
                    "primary_btn_text",
                    models.CharField(default="Read More", max_length=50),
                ),
                ("primary_btn_url", models.CharField(default="/about", max_length=200)),
                (
                    "secondary_btn_text",
                    models.CharField(default="Contact us", max_length=50),
                ),
                (
                    "secondary_btn_url",
                    models.CharField(default="/contact", max_length=200),
                ),
                ("order", models.PositiveIntegerField(default=0)),
                ("is_active", models.BooleanField(default=True)),
            ],
            options={
                "verbose_name": "Diapositive Hero",
                "verbose_name_plural": "Diapositives Hero",
                "ordering": ["order", "id"],
            },
        ),
        migrations.CreateModel(
            name="ProgramOffer",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("title", models.CharField(max_length=150)),
                ("description", models.TextField()),
                (
                    "icon_name",
                    models.CharField(
                        default="shield",
                        help_text="Identifiant d'icône",
                        max_length=100,
                    ),
                ),
                (
                    "image",
                    models.ImageField(blank=True, null=True, upload_to="programs/"),
                ),
                ("order", models.PositiveIntegerField(default=0)),
                ("is_featured", models.BooleanField(default=True)),
            ],
            options={
                "verbose_name": "Programme / Offre",
                "verbose_name_plural": "Programmes / Offres",
                "ordering": ["order", "id"],
            },
        ),
        migrations.CreateModel(
            name="Testimonial",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("client_name", models.CharField(max_length=100)),
                ("client_role", models.CharField(default="customer", max_length=100)),
                ("quote", models.TextField()),
                (
                    "avatar",
                    models.ImageField(blank=True, null=True, upload_to="testimonials/"),
                ),
                ("order", models.PositiveIntegerField(default=0)),
                ("is_published", models.BooleanField(default=True)),
            ],
            options={
                "verbose_name": "Témoignage Client",
                "verbose_name_plural": "Témoignages Clients",
                "ordering": ["order", "id"],
            },
        ),
    ]
