from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import NewsletterSubscriber
from .serializers import ContactMessageSerializer


class ContactMessageCreateView(APIView):
    """Enregistre un nouveau message de contact."""

    def post(self, request):
        serializer = ContactMessageSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(
                {
                    "success": True,
                    "message": "Votre message a été transmis avec succès. Notre équipe vous recontactera rapidement.",
                    "data": serializer.data,
                },
                status=status.HTTP_201_CREATED,
            )
        return Response(
            {"success": False, "errors": serializer.errors},
            status=status.HTTP_400_BAD_REQUEST,
        )


class NewsletterSubscribeView(APIView):
    """Gère l'inscription à la newsletter avec gestion des doublons."""

    def post(self, request):
        email = request.data.get("email", "").strip().lower()
        if not email:
            return Response(
                {
                    "success": False,
                    "message": "Veuillez fournir une adresse email valide.",
                },
                status=status.HTTP_400_BAD_REQUEST,
            )

        subscriber, created = NewsletterSubscriber.objects.get_or_create(
            email=email, defaults={"is_active": True}
        )

        if not created and not subscriber.is_active:
            subscriber.is_active = True
            subscriber.save()

        return Response(
            {
                "success": True,
                "message": "Merci pour votre inscription à notre newsletter !",
                "created": created,
            },
            status=status.HTTP_200_OK if not created else status.HTTP_201_CREATED,
        )
