from django.urls import path
from rest_framework_simplejwt.views import (
  TokenRefreshView,
)
from . import views

urlpatterns = [
  path('login/', views.login_view, name="login"),
  path('user-create/', views.user_create, name="user-create"),
  path('user-update/', views.user_update, name="user-update"),
  path('user-delete/', views.user_delete, name="user-delete"),
  path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]
