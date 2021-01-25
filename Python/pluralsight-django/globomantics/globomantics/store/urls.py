from django.urls import path, re_path

from . import views
# from .views import ElectronicsView
# from .views import ElectronicsView2
from .views import ElectronicsView3


urlpatterns = [
    path('', views.index, name='index'),
    # using regexes to build urls
    re_path(r'^\d+', views.detail, name='detail'),
    # re_path(r'^electronics', views.electronics, name='electronics'),
    re_path(r'^electronics', ElectronicsView3.as_view(), name='electronics'),
    re_path(r'^pagination', views.additional_pagination, name="pagination"),
]
