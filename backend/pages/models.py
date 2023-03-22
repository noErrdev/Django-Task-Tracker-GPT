from django.db import models
import uuid
from django.contrib.auth import get_user_model
User = get_user_model()

class Pages(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=False, blank=False)
    title = models.CharField(max_length=255, null=False, blank=False)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title
    

class PageBlocks(models.Model):
    id = models.CharField(max_length=255, null=False, blank=False, primary_key=True)
    page = models.ForeignKey(Pages, on_delete=models.CASCADE, null=False, blank=False)
    block_type = models.CharField(max_length=255, null=False, blank=False)
    block_content = models.TextField(null=False, blank=True)
    order = models.IntegerField(null=False, blank=False)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.id