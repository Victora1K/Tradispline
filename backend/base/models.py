from email.policy import default
from hashlib import blake2b
from logging.handlers import RotatingFileHandler
from django.db import models
from django.contrib.auth.models import User

# Create your models here.


class Task(models.Model):
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    name = models.CharField(max_length=200, null=True, blank=True)
    image = models.ImageField(null=True, blank=True)
    description = models.TextField(null=True,blank=True)
    category = models.CharField(max_length=200, null=True, blank=True)
    rating = models.DecimalField(max_digits=6, decimal_places=2, null=True,blank=True)
    numReviews = models.IntegerField(null=True, blank=True, default=0)
    addedAt = models.DateTimeField(auto_now_add=True)
    _id = models.AutoField(primary_key=True, editable=False)



    def __str__(self):
        return self.name


class Review(models.Model):
    task = models.ForeignKey(Task, on_delete=models.SET_NULL, null=True)
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    name = models.CharField(max_length=200, null=True, blank=True)
    rating = models.IntegerField(null=True, blank=True, default=0)
    comment = models.TextField(null=True,blank=True)
    _id = models.AutoField(primary_key=True, editable=False)

    def __str__(self):
        return str(self.rating)



class Plan(models.Model):
    
    SHORT = 'SH'
    MID = 'MI'
    LONG = 'LO'


    planType_Choices = [
       (SHORT, '1 - 59 minutes'),
        (MID, '1 - 8 hours'),
        (LONG, '1 - 30 days'),
    ]
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    planName = models.CharField(max_length=200, null=True, blank=True)
    planType = models.CharField(max_length=40, choices=planType_Choices, default=MID)
    isMain = models.BooleanField(default=True)
    createdAt = models.DateTimeField(auto_now_add=True)
    _id = models.AutoField(primary_key=True, editable=False)

    def __str__(self):
        return str(self.createdAt)


class PlanItem(models.Model):
    task = models.ForeignKey(Task, on_delete=models.SET_NULL, null=True)
    plan = models.ForeignKey(Plan, on_delete=models.SET_NULL, null=True)
    name = models.CharField(max_length=200, null=True, blank=True)

    def __str__(self):
        return str(self.plan)