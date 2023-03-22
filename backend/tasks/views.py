from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from .models import Tasks
from .serializers import TaskSerializer

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def all_tasks(request):
  # sort by due date and get
  tasks = Tasks.objects.filter(user=request.user).order_by('due')
  serializer = TaskSerializer(tasks, many=True)
  return Response(serializer.data, status=200)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def tasks_by_date(request, date):
  tasks = Tasks.objects.filter(user=request.user, due=date)
  serializer = TaskSerializer(tasks, many=True)
  return Response(serializer.data, status=200)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def tasks_after_date(request, date):
  tasks = Tasks.objects.filter(user=request.user, due__gt=date).order_by('due')
  serializer = TaskSerializer(tasks, many=True)
  return Response(serializer.data, status=200)

# Create your views here. 
@api_view(['POST'])
@permission_classes([IsAuthenticated])
def create_task(request):
  name, description, priority, due = request.data['name'], request.data['description'], request.data['priority'], request.data['due']
  tasks = Tasks.objects.create(user=request.user, name=name, description=description, priority=priority, due=due)
  serializer = TaskSerializer(tasks, many=False)
  return Response(serializer.data, status=201)
  
@api_view(['PUT'])
@permission_classes([IsAuthenticated])
def update_task(request, pk):
  task = Tasks.objects.get(id=pk)
  serializer = TaskSerializer(instance=task, data=request.data, partial=True)
  if serializer.is_valid():
    serializer.save()
  return Response(serializer.data, status=200)

@api_view(['DELETE'])
@permission_classes([IsAuthenticated])
def delete_task(request, pk):
  try:
    task = Tasks.objects.get(id=pk)
  except Tasks.DoesNotExist:
    return Response(status=404)

  task.delete()
  return Response(status=204)