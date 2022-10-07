from importlib.resources import contents
from django.db import models
from django.conf import settings

# Create your models here.
class Item(models.Model):
  userid = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
  title = models.CharField(max_length=120)
  content = models.TextField()
  completed = models.BooleanField()
  dueDate = models.TextField()
  

