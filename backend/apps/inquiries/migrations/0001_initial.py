from django.db import migrations, models


class Migration(migrations.Migration):
    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name="ContactMessage",
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
                ("name", models.CharField(max_length=150, verbose_name="Nom complet")),
                (
                    "email",
                    models.EmailField(max_length=254, verbose_name="Adresse email"),
                ),
                (
                    "phone",
                    models.CharField(
                        blank=True, max_length=50, verbose_name="Numéro de téléphone"
                    ),
                ),
                ("message", models.TextField(blank=True, verbose_name="Message")),
                (
                    "status",
                    models.CharField(
                        choices=[
                            ("NEW", "Nouveau"),
                            ("CONTACTED", "Contacté"),
                            ("CLOSED", "Clôturé"),
                        ],
                        default="NEW",
                        max_length=20,
                        verbose_name="Statut",
                    ),
                ),
                (
                    "created_at",
                    models.DateTimeField(auto_now_add=True, verbose_name="Reçu le"),
                ),
            ],
            options={
                "verbose_name": "Message de Contact",
                "verbose_name_plural": "Messages de Contact",
                "ordering": ["-created_at"],
            },
        ),
        migrations.CreateModel(
            name="NewsletterSubscriber",
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
                    "email",
                    models.EmailField(
                        max_length=254, unique=True, verbose_name="Adresse email"
                    ),
                ),
                ("is_active", models.BooleanField(default=True, verbose_name="Actif")),
                (
                    "subscribed_at",
                    models.DateTimeField(
                        auto_now_add=True, verbose_name="Date d'inscription"
                    ),
                ),
            ],
            options={
                "verbose_name": "Abonné Newsletter",
                "verbose_name_plural": "Abonnés Newsletter",
                "ordering": ["-subscribed_at"],
            },
        ),
    ]
