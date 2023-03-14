from rest_framework.decorators import api_view, permission_classes
from django.contrib.auth.models import User
from rest_framework.response import Response


# Create your views here.
@api_view(["POST"])
def create_user(request, pk=None, *arg, **kwargs):
  if (request.data['username'] == '' or request.data['password'] == ''):
    # missing required field
    return Response(status=422)
  else:
    try:
      User.objects.create_user(
        username = request.data['username'],
        password = request.data['password'],
      )
    except:
      # return error if anything goes wrong
      return Response(status=422)
  
    return Response("Account Create successfully")

