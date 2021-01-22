from datetime import time

from django.db import models

from django.contrib.auth.models import User


class Author(models.Model):
    name = models.CharField(max_length=50)

    def __str__(self):
        return self.name


class Category(models.Model):
    name = models.CharField(max_length=50)

    def __str__(self):
        return self.name


class Entry(models.Model):
    title = models.CharField(max_length=200)
    author = models.ForeignKey(
        User,
        on_delete=models.CASCADE,
    )
    category = models.ForeignKey(
        Category,
        on_delete=models.CASCADE,
    )
    entry_content = models.TextField()
    publication_date = models.DateField(
        auto_now=False,
    )
    last_edit = models.DateField(
        auto_now_add=True,
    )

    def __str__(self):
        return f'{self.title} | published {self.publication_date}'