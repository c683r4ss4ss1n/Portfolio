from django.db import models

# Create your models here.
class Education(models.Model):
    school = models.CharField(max_length=255)
    degree = models.CharField(max_length=255)
    years = models.DateField(auto_now=False, auto_now_add=False)
    description = models.TextField()
    ordinal = models.IntegerField()


class Work(models.Model):
    company = models.CharField(max_length=255)
    years = models.CharField(max_length=255)
    description = models.TextField()
    ordinal = models.IntegerField()


class Project(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    image = models.ImageField(upload_to='uploads/')
    url = models.URLField()
    ordinal = models.IntegerField()

class Portfolio(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    image = models.ImageField(upload_to='uploads/')
    url = models.URLField()
    ordinal = models.IntegerField()