from django.http import  HttpResponse
from django.shortcuts import render

def home(request):
    return render(request, 'index.html')

def bmicalc(request):
    return render(request, 'bmicalc.html')

def caloriecalc(request):
    return render(request, 'caloriecalc.html')

def exerciseguide(request):
    return render(request, 'exerciseguide.html')

def faq(request):
    return render(request, 'faq.html')

def logout_view(request):
    logout(request)
    return render(request, 'logout.html')
