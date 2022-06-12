from django.urls import path
from . import views
#from rest_framework_simplejwt.views import (
#    TokenObtainPairView,
#)

urlpatterns = [
    path('users/login/', views.MyTokenObtainPairView.as_view(), 
    name='token_obtain_pair'),

    path('users/register/', views.registerUser, name='register'),
    path('',views.getRoutes, name="routes"),

    path('users/profile/',views.getUserProfile, name="user-profile"),
    path('users/profile/update/',views.updateUserProfile, name="user-profile-update"),
    path('users/',views.getUsers, name="users"),

    path('tasks/',views.getTasks, name="tasks"),
    path('tasks/<str:pk>/',views.getTask, name="task"),
    path('tasks/Scalp/',views.getRoutes, name="Scalp"),
]