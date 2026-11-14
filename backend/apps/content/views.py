from rest_framework import viewsets, views
from rest_framework.response import Response
from .models import HeroSlide, ProgramOffer, AboutSection, Testimonial
from .serializers import (
    HeroSlideSerializer,
    ProgramOfferSerializer,
    AboutSectionSerializer,
    TestimonialSerializer,
)


class HeroSlideViewSet(viewsets.ReadOnlyModelViewSet):
    """API listant les slides actives du carrousel d'accueil."""

    queryset = HeroSlide.objects.filter(is_active=True).order_by("order", "id")
    serializer_class = HeroSlideSerializer
    pagination_class = None


class ProgramOfferViewSet(viewsets.ReadOnlyModelViewSet):
    """API listant les programmes/offres."""

    queryset = ProgramOffer.objects.all().order_by("order", "id")
    serializer_class = ProgramOfferSerializer
    pagination_class = None

    def get_queryset(self):
        qs = super().get_queryset()
        featured = self.request.query_params.get("featured")
        if featured is not None:
            qs = qs.filter(is_featured=featured.lower() in ("true", "1"))
        return qs


class AboutSectionView(views.APIView):
    """API retournant le contenu de la section À Propos."""

    def get(self, request):
        about = AboutSection.load()
        serializer = AboutSectionSerializer(about)
        return Response(serializer.data)


class TestimonialViewSet(viewsets.ReadOnlyModelViewSet):
    """API listant les témoignages clients publiés."""

    queryset = Testimonial.objects.filter(is_published=True).order_by("order", "id")
    serializer_class = TestimonialSerializer
    pagination_class = None
