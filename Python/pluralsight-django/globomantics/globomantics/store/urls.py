from django.urls import path, re_path

from . import views


urlpatterns = [
    path('', views.index, name='index'),
    # using regexes to build urls
    re_path(r'^\d+', views.detail, name='detail'),
    re_path(r'^electronics', views.electronics, name='electronics')
]
