from django.db import models
import uuid
from django.contrib.auth import get_user_model
User = get_user_model()

# Create your models here.
class Labels(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(max_length=100)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    page = models.ManyToManyField('pages.Pages', related_name='labels')
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name