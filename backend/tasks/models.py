from django.db import models
import uuid
from django.contrib.auth import get_user_model
User = get_user_model()
        
# Create your models here.
class Tasks(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    # page = models.ManyToManyField('pages.Pages', related_name='tasks')
    name = models.CharField(max_length=100)
    description = models.TextField()
    priority = models.CharField(max_length=100)
    due = models.DateTimeField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title