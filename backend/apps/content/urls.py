from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import (
    HeroSlideViewSet,
    ProgramOfferViewSet,
    AboutSectionView,
    TestimonialViewSet,
)

router = DefaultRouter()
router.register(r"slides", HeroSlideViewSet, basename="slides")
router.register(r"programs", ProgramOfferViewSet, basename="programs")
router.register(r"testimonials", TestimonialViewSet, basename="testimonials")

urlpatterns = [
    path("about/", AboutSectionView.as_view(), name="about-section"),
    path("", include(router.urls)),
]
