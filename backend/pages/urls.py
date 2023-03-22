from django.urls import path
from . import views

urlpatterns = [
  path('all_page/', views.all_page, name="all_page"),
  path('create_page/', views.create_page, name="create_page"),
  path('delete_page/<str:pk>/', views.delete_page, name="delete_page"),
  path('update_page_title/<str:pk>/', views.update_page_title, name="update_page_title"),

  path('get_page_detail/<str:pk>/', views.get_page_detail, name="get_page_detail"),

  path('create_page_block/<str:pk>/', views.create_page_block, name="create_page_block"),
  path('update_page_block/<str:pageId>/<str:blockId>/', views.update_page_block, name="update_page_block"),
  path('delete_page_block/<str:pageId>/<str:blockId>/', views.delete_page_block, name="delete_page_block"),
]