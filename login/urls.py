"""
URL configuration for login project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from django.views.generic.base import TemplateView
from . import views
from accounts.views import logout_view

urlpatterns = [
    path("admin/", admin.site.urls),
    path("accounts/", include("accounts.urls")),  
    path("accounts/", include("django.contrib.auth.urls")),
    path("", TemplateView.as_view(template_name="home.html"), name="home"),
    path("", TemplateView.as_view(template_name="index.html"), name="index"),
    path("faq", TemplateView.as_view(template_name="faq.html"), name="faq"),
    path("bmicalc", TemplateView.as_view(template_name="bmicalc.html"), name="bmicalc"),
    path("caloriecalc", TemplateView.as_view(template_name="caloriecalc.html"), name="caloriecalc"),
    path("exerciseguide", TemplateView.as_view(template_name="exerciseguide.html"), name="exerciseguide"),
    path("workoutplan", TemplateView.as_view(template_name="workoutplan.html"), name="workoutplan"),
    path('logout/', logout_view, name='logout'),
    path("logout_page/", TemplateView.as_view(template_name="logout.html"), name="logout_page"),
    
]