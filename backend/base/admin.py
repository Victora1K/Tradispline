from django.contrib import admin
from .models import Plan, PlanItem, Review, Task

# Register your models here.

admin.site.register(Task)
admin.site.register(Review)
admin.site.register(Plan)
admin.site.register(PlanItem)