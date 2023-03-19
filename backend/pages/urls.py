from django.urls import path
from . import views

urlpatterns = [
  path('all_page/', views.all_page, name="all_page"),
  path('create_page/', views.create_page, name="create_page"),
  path('update_page/<str:pk>/', views.update_page, name="update_page")
]