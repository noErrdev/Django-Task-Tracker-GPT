from django.shortcuts import render
from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from .models import Pages
from .serializers import PageSerializer

# Create your views here.

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def all_page(request):
  pages = Pages.objects.filter(user=request.user)
  serializer = PageSerializer(pages, many=True)
  return Response(serializer.data, status=200)


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def create_page(request):
  page = Pages.objects.create(user=request.user, name="Untitled")
  serializer = PageSerializer(page, many=False)
  return Response(serializer.data, status=200)


@api_view(['PUT'])
@permission_classes([IsAuthenticated])
def update_page(request, pk):
  pass