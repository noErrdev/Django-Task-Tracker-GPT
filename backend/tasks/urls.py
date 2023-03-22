from django.urls import path
from . import views

urlpatterns = [
  path('all-tasks/', views.all_tasks, name="all_tasks"),
  path('create-task/', views.create_task, name="create_task"),
  path('update-task/<str:pk>/', views.update_task, name="update_task"),
  path('delete-task/<str:pk>/', views.delete_task, name="delete_task"),
  path('tasks-by-date/<str:date>/', views.tasks_by_date, name="tasks_by_date"),
  path('tasks-after-date/<str:date>/', views.tasks_after_date, name="tasks_after_date"),
]