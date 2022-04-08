from django.http import JsonResponse
from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response

from .serializers import TaskSerializer
from .models import Task
#from .tasks import tasks

# Create your views here.

@api_view(['GET'])
def getRoutes(request):
    tasks = Task.objects.all()
    serializer = TaskSerializer(tasks, many=True)
    return Response(serializer.data)
    #return Response(tasks)

@api_view(['GET'])
def getTasks(request):
    tasks = Task.objects.all()
    serializer = TaskSerializer(tasks, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def getTask(request, pk):
    task = Task.objects.get(_id=pk)
    serializer = TaskSerializer(task, many=False)
    return Response(serializer.data)



#    task = None
#    for i in tasks:
#        if i['_id'] == pk:
#            task = i
#            break


    #return Response(task)