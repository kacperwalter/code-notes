from django.urls import path

from . import views


urlpatterns = [
    path('/', views.entry_list, name='entry_list')
]