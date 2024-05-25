from django.contrib.auth.forms import UserCreationForm
from django.urls import reverse_lazy
from django.views.generic import CreateView
from django.contrib.auth import logout
from django.shortcuts import render, redirect

class SignUpView(CreateView):
    form_class = UserCreationForm
    success_url = reverse_lazy("login")
    template_name = "registration/signup.html"

def logout_view(request):
    """
    Logout view.
    """
    logout(request)
    # Redirect to a page indicating successful logout
    return render(request, 'registration/logout.html')