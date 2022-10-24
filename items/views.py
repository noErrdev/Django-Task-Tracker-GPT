from .models import Item
from .serializers import ItemSerializer
from django.contrib.auth.models import User
from django.contrib.auth import get_user_model

from rest_framework import permissions, authentication
from rest_framework.decorators import api_view, permission_classes

from rest_framework.response import Response
from django.http import Http404


@api_view(["GET", "POST"])
@permission_classes([permissions.IsAuthenticated])
def get_items(request, pk=None, *arg, **kwargs):
  if (request.method == 'GET'):
    if (request.GET.get('completed') != None):
      items = Item.objects.filter(user=request.user,completed=True)
      if not items:
        return Response([])
    elif (request.GET.get('incompleted') != None):
      items = Item.objects.filter(user=request.user,completed=False)
      if not items:
        return Response([])
    elif (request.GET.get('priority') != None):
      query = request.GET.get('priority')
      items = Item.objects.filter(user=request.user,priority=query)
      if not items:
        return Response([])
    else:
      items = Item.objects.filter(user=request.user)
      if not items:
        return Response([])

    data = ItemSerializer(items, many=True).data
    return Response(data)

  elif (request.method == 'POST'):
    request.data['user'] = request.user.id
    serializer = ItemSerializer(data=request.data)
    # raise_exception will automatically generate error 404
    if serializer.is_valid(raise_exception=True):
      instance = serializer.save()
      return Response('Created Successfully')


@api_view(["GET", "PUT", "DELETE"])
@permission_classes([permissions.IsAuthenticated])
def individual_item(request, pk=None, *arg, **kwargs):
  try:
    item = Item.objects.get(pk=pk)
  except Item.DoesNotExist:
    raise Http404
  
  if (request.method == 'GET'):
    # Get
    data = ItemSerializer(item).data
    return Response(data)
  
  elif (request.method == 'PUT'):
    # Update
    item.title = request.data['title']
    item.content = request.data['content']
    item.dueDate = request.data['dueDate']
    item.completed = request.data['completed']
    item.priority = request.data['priority']
    item.progress = request.data['progress']
    item.save()
    return Response("Data is Updated")
  
  else:
    # delete
    item.delete()
    return Response("Data is Deleted")
