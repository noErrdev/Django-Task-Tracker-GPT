from django.urls import path
from . import views

urlpatterns = [
  path('login/', views.functional_login_view),
  path('newUser/', views.functional_newUser_view),
  path('<int:pk>/', views.functional_Items_view),
  path('', views.functional_Items_view),
  path('getItems/<int:pk>/', views.functional_getItems_view)
]