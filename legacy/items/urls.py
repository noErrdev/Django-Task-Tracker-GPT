from django.urls import path
from . import views

urlpatterns = [  
  path('items/', views.get_items),
  path('items/<int:pk>/', views.individual_item),
]