from django.db import models
from django.db.models import fields
from rest_framework import serializers
from .models import products


class serial(serializers.ModelSerializer):
    class Meta:
        model=products
        fields='__all__'