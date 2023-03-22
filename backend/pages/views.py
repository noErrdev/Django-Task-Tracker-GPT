from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from .models import Pages, PageBlocks
from .serializers import PageSerializer, PageBlockSerializer

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def all_page(request):
  pages = Pages.objects.filter(user=request.user)
  serializer = PageSerializer(pages, many=True)
  return Response(serializer.data, status=200)


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def create_page(request):
  page = Pages.objects.create(user=request.user, title="Untitled")
  serializer = PageSerializer(page, many=False)
  return Response(serializer.data, status=201)


@api_view(['PUT'])
@permission_classes([IsAuthenticated])
def update_page_title(request, pk):
  page = Pages.objects.get(pk=pk)
  if page.user != request.user:
    return Response(status=400)
    
  # update page title
  serializer = PageSerializer(page, data=request.data, partial=True)
  if serializer.is_valid():
    serializer.save()
    return Response(status=200)
  
  return Response(serializer.errors, status=400)  


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_page_detail(request, pk):
  page = Pages.objects.get(pk=pk)
  if page.user != request.user:
    return Response(status=400)

  allBlocks = PageBlocks.objects.filter(page=page).order_by('order')
  serializer = PageBlockSerializer(allBlocks, many=True)

  return Response({"title": page.title, "blocks": serializer.data}, status=200)


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def create_page_block(request, pk):
  page = Pages.objects.get(pk=pk)
  if page.user != request.user:
    return Response(status=400)

  data = {
    "page": page.id,
    "id": request.data['id'],
    "block_type": request.data['type'],
    "block_content": request.data['content'],
    "order": request.data['order']
  }

  serializer = PageBlockSerializer(data=data)
  if serializer.is_valid():
    tasks_to_update = PageBlocks.objects.filter(page=page.id, order__gte=request.data['order'])
    for task in tasks_to_update:
      task.order += 1
      task.save()

    serializer.save()
    return Response(status=201)

  return Response(serializer.errors, status=400)


@api_view(['PUT'])
@permission_classes([IsAuthenticated])
def  update_page_block(request, pageId, blockId):
  page=Pages.objects.get(pk=pageId)
  if page.user != request.user:
    return Response(status=400)
  
  data = {
    "page": page.id,
    "id": blockId,
    "block_type": request.data['type'],
    "block_content": request.data['content'],
  }
  
  block = PageBlocks.objects.get(page=page, id=blockId)
  serializer = PageBlockSerializer(block, data=data, partial=True)
  if serializer.is_valid():
    serializer.save()
    return Response(status=200)

  return Response(serializer.errors, status=400)


@api_view(['DELETE'])
@permission_classes([IsAuthenticated])
def delete_page_block(request, pageId, blockId):
  page=Pages.objects.get(pk=pageId)
  if page.user != request.user:
    return Response(status=400)

  block = PageBlocks.objects.get(page=page, id=blockId)
  block.delete()
  return Response(status=200)


@api_view(['DELETE'])
@permission_classes([IsAuthenticated])
def delete_page(request, pk):
  page = Pages.objects.get(pk=pk)
  if page.user != request.user:
    return Response(status=400)

  page.delete()
  return Response(status=200)