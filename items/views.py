from .models import Item
from .serializers import ItemSerializer

from rest_framework import permissions, authentication
from rest_framework.decorators import api_view, permission_classes, authentication_classes
from rest_framework.response import Response
from rest_framework.authtoken.models import Token

from django.contrib.auth.hashers import make_password, check_password
from django.contrib.auth.models import User
from django.contrib.auth import get_user_model
from django.http import Http404


@api_view(["GET","POST", "PUT", "DELETE"])
@authentication_classes([
  authentication.SessionAuthentication,
  authentication.TokenAuthentication,
])
@permission_classes([permissions.IsAuthenticated])
def functional_Items_view(request, pk=None, *arg, **kwargs):
  method = request.method

  if method == "GET":
    if pk is not None:
      # single pk or (id) view
      queryset = Item.objects.filter(pk=pk)
      if not queryset:
        raise Http404
      data = ItemSerializer(queryset, many=True).data
      return Response(data)
      
    # else:
    #   # list view
    #   queryset = Item.objects.all()
    #   data = ItemSerializer(queryset, many=True).data
    #   return Response(data)
      

  elif method == "POST":
    # find the user with the username
    # create the data passed with the username
  
    serializer = ItemSerializer(data=request.data)

    if serializer.is_valid(raise_exception=True):
      instance = serializer.save()
      data = serializer.data
      return Response(data)
    
  elif method == "PUT":
    # try to get the element with the specific pk
    try:
      queryset = Item.objects.get(pk=pk)
    except Item.DoesNotExist:
      raise Http404

    # if the body is incorrect
    if (not 'completed' in request.data.keys() or
        not 'title' in request.data.keys() or
        not 'content' in request.data.keys() or
        not 'dueDate' in request.data.keys()):
      raise Http404
    
    queryset.completed = request.data['completed']
    queryset.title = request.data['title']
    queryset.content = request.data['content']
    queryset.dueDate = request.data['dueDate']

    queryset.save()
    return Response("Data is Updated")

  
  elif method == "DELETE":
    try:
      queryset = Item.objects.get(pk=pk)
    except Item.DoesNotExist:
      raise Http404
    queryset.delete()
    return Response("Data is Deleted")
    
    

    
@api_view(["POST"])
def functional_newUser_view(request, pk=None, *arg, **kwargs):
  method = request.method
  if method == "POST":
    user = User.objects.create_user(
      username = request.data['username'],
      password = request.data['password'],
    )
    return Response({
      "Create" : "Account Create successfully"
    })
    


@api_view(["POST"])
def functional_login_view(request, pk=None, *arg, **kwargs):
  method = request.method
  
  # check if the required field is entered
  if (not 'password' in request.data.keys() or 
      not 'username' in request.data.keys()):
      raise Http404
  
  # check if the password is correct
  queryset = get_user_model().objects.get(username=request.data['username'])
  if not check_password(request.data['password'], queryset.password):
    raise Http404
  
  # at this point, the password is correct, we can go ahead get the token
  
  token = Token.objects.get_or_create(user=queryset)[0].key

  # return the username and accesstoken to user
  return Response({
    "userid" : queryset.id,
    "accessToken" : token
  })


@api_view(["GET"])
@authentication_classes([
  authentication.SessionAuthentication,
  authentication.TokenAuthentication,
])
@permission_classes([permissions.IsAuthenticated])
def functional_getItems_view(request, pk=None, *arg, **kwargs):
  queryset = Item.objects.filter(userid=pk)
  if not queryset:
    return Response({})
  data = ItemSerializer(queryset, many=True).data
  return Response(data)