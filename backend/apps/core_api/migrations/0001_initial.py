from django.db import migrations, models


class Migration(migrations.Migration):
    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name="SiteConfiguration",
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
                ("site_name", models.CharField(default="Brighton", max_length=100)),
                (
                    "tagline",
                    models.CharField(
                        default="A Perfect Learning Center For Your Kids",
                        max_length=255,
                    ),
                ),
                ("phone", models.CharField(default="+01 1234567890", max_length=50)),
                ("email", models.EmailField(default="demo@gmail.com", max_length=254)),
                ("address", models.CharField(default="Location", max_length=255)),
                (
                    "latitude",
                    models.FloatField(
                        default=40.645037, help_text="Latitude pour Google Map"
                    ),
                ),
                (
                    "longitude",
                    models.FloatField(
                        default=-73.880224, help_text="Longitude pour Google Map"
                    ),
                ),
                (
                    "footer_about_text",
                    models.TextField(
                        default="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration."
                    ),
                ),
                (
                    "contact_info_text",
                    models.TextField(
                        default="Donec odio. Quisque volutpat mattis eros. Lorem ipsum dolor sit amet, consectetuer adipiscing elit."
                    ),
                ),
                (
                    "information_text",
                    models.TextField(
                        default="Donec odio. Quisque volutpat mattis eros. Lorem ipsum dolor sit amet, consectetuer adipiscing elit."
                    ),
                ),
                (
                    "account_text",
                    models.TextField(
                        default="Donec odio. Quisque volutpat mattis eros. Lorem ipsum dolor sit amet, consectetuer adipiscing elit."
                    ),
                ),
                (
                    "copyright_text",
                    models.CharField(
                        default="2026 All Rights Reserved By Brighton", max_length=255
                    ),
                ),
            ],
            options={
                "verbose_name": "Configuration du Site",
                "verbose_name_plural": "Configuration du Site",
            },
        ),
    ]
