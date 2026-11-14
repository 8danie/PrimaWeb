from rest_framework import serializers
from .models import HeroSlide, ProgramOffer, AboutSection, Testimonial


class HeroSlideSerializer(serializers.ModelSerializer):
    class Meta:
        model = HeroSlide
        fields = "__all__"


class ProgramOfferSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProgramOffer
        fields = "__all__"


class AboutSectionSerializer(serializers.ModelSerializer):
    class Meta:
        model = AboutSection
        fields = "__all__"


class TestimonialSerializer(serializers.ModelSerializer):
    class Meta:
        model = Testimonial
        fields = "__all__"
