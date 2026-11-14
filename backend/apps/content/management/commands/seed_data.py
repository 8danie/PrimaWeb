from django.core.management.base import BaseCommand
from apps.core_api.models import SiteConfiguration
from apps.content.models import HeroSlide, ProgramOffer, AboutSection, Testimonial


class Command(BaseCommand):
    help = "Initialise la base de données avec le contenu textuel et structurel original de PrimaWeb."

    def handle(self, *args, **options):
        self.stdout.write(self.style.NOTICE("Démarrage du peuplement des données..."))

        # 1. Configuration globale du site
        config, created = SiteConfiguration.objects.get_or_create(
            pk=1,
            defaults={
                "site_name": "Brighton",
                "tagline": "A Perfect Learning Center For Your Kids",
                "phone": "+01 1234567890",
                "email": "demo@gmail.com",
                "address": "Location",
                "latitude": 40.645037,
                "longitude": -73.880224,
                "footer_about_text": "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration",
                "contact_info_text": "Donec odio. Quisque volutpat mattis eros. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros",
                "information_text": "Donec odio. Quisque volutpat mattis eros. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros",
                "account_text": "Donec odio. Quisque volutpat mattis eros. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros",
                "copyright_text": "2026 All Rights Reserved By Brighton",
            },
        )
        self.stdout.write(
            self.style.SUCCESS("✓ Configuration globale du site vérifiée.")
        )

        # 2. Hero Slides
        if not HeroSlide.objects.exists():
            slides_data = [
                {
                    "title": "A Perfect Learning Center",
                    "subtitle": "For Your Kids",
                    "description": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as",
                    "primary_btn_text": "Read More",
                    "primary_btn_url": "/about",
                    "secondary_btn_text": "Contact us",
                    "secondary_btn_url": "/contact",
                    "order": 1,
                    "is_active": True,
                },
                {
                    "title": "A Perfect Learning Center",
                    "subtitle": "For Your Kids",
                    "description": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as",
                    "primary_btn_text": "Read More",
                    "primary_btn_url": "/about",
                    "secondary_btn_text": "Contact us",
                    "secondary_btn_url": "/contact",
                    "order": 2,
                    "is_active": True,
                },
                {
                    "title": "A Perfect Learning Center",
                    "subtitle": "For Your Kids",
                    "description": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as",
                    "primary_btn_text": "Read More",
                    "primary_btn_url": "/about",
                    "secondary_btn_text": "Contact us",
                    "secondary_btn_url": "/contact",
                    "order": 3,
                    "is_active": True,
                },
                {
                    "title": "A Perfect Learning Center",
                    "subtitle": "For Your Kids",
                    "description": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as",
                    "primary_btn_text": "Read More",
                    "primary_btn_url": "/about",
                    "secondary_btn_text": "Contact us",
                    "secondary_btn_url": "/contact",
                    "order": 4,
                    "is_active": True,
                },
                {
                    "title": "A Perfect Learning Center",
                    "subtitle": "For Your Kids",
                    "description": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as",
                    "primary_btn_text": "Read More",
                    "primary_btn_url": "/about",
                    "secondary_btn_text": "Contact us",
                    "secondary_btn_url": "/contact",
                    "order": 5,
                    "is_active": True,
                },
            ]
            for s in slides_data:
                HeroSlide.objects.create(**s)
            self.stdout.write(
                self.style.SUCCESS(f"✓ {len(slides_data)} diapositives Hero créées.")
            )

        # 3. Programmes / Offres
        if not ProgramOffer.objects.exists():
            programs_data = [
                {
                    "title": "safety first",
                    "description": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem",
                    "icon_name": "shield",
                    "order": 1,
                    "is_featured": True,
                },
                {
                    "title": "small class Size",
                    "description": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem",
                    "icon_name": "photo-size",
                    "order": 2,
                    "is_featured": True,
                },
                {
                    "title": "infant care",
                    "description": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem",
                    "icon_name": "vegan",
                    "order": 3,
                    "is_featured": True,
                },
                {
                    "title": "cretive lessons",
                    "description": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem",
                    "icon_name": "education",
                    "order": 4,
                    "is_featured": True,
                },
                {
                    "title": "certified teachers",
                    "description": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem",
                    "icon_name": "help",
                    "order": 5,
                    "is_featured": True,
                },
                {
                    "title": "happy environment",
                    "description": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem",
                    "icon_name": "planet-earth",
                    "order": 6,
                    "is_featured": True,
                },
            ]
            for p in programs_data:
                ProgramOffer.objects.create(**p)
            self.stdout.write(
                self.style.SUCCESS(f"✓ {len(programs_data)} offres/programmes créés.")
            )

        # 4. Section À Propos
        about = AboutSection.load()
        about.title = "A Few words about us"
        about.content = (
            "It is a long established fact that a reader will be distracted by the readable content of a page "
            "when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal "
            "distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. "
            "Many desktop publishing packages and web"
        )
        about.button_text = "Read More"
        about.button_url = "/about"
        about.save()
        self.stdout.write(self.style.SUCCESS("✓ Section À Propos configurée."))

        # 5. Témoignages Clients
        if not Testimonial.objects.exists():
            testimonials_data = [
                {
                    "client_name": "Rohali jonson",
                    "client_role": "customer",
                    "quote": "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined",
                    "order": 1,
                    "is_published": True,
                },
                {
                    "client_name": "Alex Morrison",
                    "client_role": "parent",
                    "quote": "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
                    "order": 2,
                    "is_published": True,
                },
                {
                    "client_name": "Sarah Connor",
                    "client_role": "customer",
                    "quote": "All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures.",
                    "order": 3,
                    "is_published": True,
                },
            ]
            for t in testimonials_data:
                Testimonial.objects.create(**t)
            self.stdout.write(
                self.style.SUCCESS(f"✓ {len(testimonials_data)} témoignages créés.")
            )

        self.stdout.write(
            self.style.SUCCESS("✨ Initialisation complète des données avec succès !")
        )
