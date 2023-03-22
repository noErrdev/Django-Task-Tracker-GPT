from rest_framework import serializers
from .models import Pages, PageBlocks

class PageSerializer(serializers.ModelSerializer):
  class Meta:
    model = Pages
    fields = ['id', 'user', 'title']


class PageBlockSerializer(serializers.ModelSerializer):
  class Meta:
    model = PageBlocks
    fields = ['id', 'page', 'block_type', 'block_content', 'order']