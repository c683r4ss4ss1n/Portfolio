# from django.db import models

# class Education(models.Model):
#     school = models.CharField(max_length=255)
#     degree = models.CharField(max_length=255)
#     years = models.CharField(max_length=25)
#     description = models.TextField()
#     created_at = models.DateTimeField()

# class Work(models.Model):
#     Company = models.CharField(max_length=255)
#     years = models.CharField(max_length=25)
#     description = models.TextField()
#     created_at = models.DateTimeField(auto_now_add=True)

# class Portfolio(models.Model):
#     title = models.CharField(max_length=255)
#     description = models.TextField()
#     url = models.URLField()
#     created_at= models.DateTimeField(auto_now_add=True)

# class Projects(models.Model):
#     title = models.CharField(max_length=255)
#     description = models.TextField()
#     image = models.ImageField(upload_to='uploads/')
#     url = models.URLField()
#     ordinal = models.IntegerField()
#     created_at = models.DateTimeField(auto_now_add=True)