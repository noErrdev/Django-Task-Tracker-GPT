from rest_framework import serializers
from .models import Tasks

class TaskSerializer(serializers.ModelSerializer):
  class Meta:
    model = Tasks
    fields = ['id', 'name', 'description', 'priority', 'due', 'created_at', 'updated_at']
