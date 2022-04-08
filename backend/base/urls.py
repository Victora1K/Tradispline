from django.urls import path
from . import views


urlpatterns = [
    path('',views.getRoutes, name="routes"),
    path('tasks/',views.getTasks, name="tasks"),
    path('tasks/<str:pk>/',views.getTask, name="task"),
    path('tasks/Scalp/',views.getRoutes, name="Scalp"),
]