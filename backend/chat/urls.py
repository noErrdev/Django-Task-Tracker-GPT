from django.urls import path
from . import views

urlpatterns = [
  path('chatgpt/', views.chat_chatGPT, name="chatgpt"),
]