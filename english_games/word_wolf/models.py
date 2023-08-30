from django.db import models

# Create your models here.
class Genre(models.Model):
    genre_en = models.CharField(max_length=100, blank=True, null=True)


class English(models.Model):
    topic_a = models.CharField(max_length=100, blank=True, null=True)
    topic_b = models.CharField(max_length=100, blank=True, null=True)
    genre_id = models.ForeignKey(Genre, on_delete=models.PROTECT)
