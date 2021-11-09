from django.shortcuts import render
from .models import products
from .serializers import serial
from rest_framework import  viewsets

# Create your views here.
class productsView(viewsets.ModelViewSet):
    queryset=products.objects.all()
    serializer_class=serial

