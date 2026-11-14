from django.urls import path
from .views import SiteConfigurationView

urlpatterns = [
    path("configuration/", SiteConfigurationView.as_view(), name="site-configuration"),
]
