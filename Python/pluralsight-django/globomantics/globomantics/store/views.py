from django.shortcuts import render
from django.http import HttpResponse
from django.views import View

from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.http import require_http_methods
from django.views.decorators.cache import cache_page
from django.views.generic.base import TemplateView
from django.views.generic.list import ListView


from django.core.paginator import Paginator


def index(request):
    return HttpResponse("Welcome to store!")


def detail(request):
    return HttpResponse("Hello there, this is detailed website")


# FUNCTION BASED VIEW
# decorators and paginators
# @csrf_exempt
# @cache_page(900)
# @require_http_methods(["GET"])
# def electronics(request):
#     items = ("Windows PC", "Apple Mac", "Apple iPhone", "Lenovo", "Samsung", "Google")
#     if request.method == 'GET':
#         paginator = Paginator(items, 2)
#         pages = request.GET.get('page', 1)
#         try:
#             items = paginator.page(pages)
#         except PageNotAnInteger:
#             items = paginator.page(1)
#         return render(request, 'store/list.html', {'items': items})
#     elif request.method == 'POST':
#         return HttpResponseNotFound("POST is not allowed")


# CLASS BASED VIEW - classic way (like a function based)
class ElectronicsView(View):
    def get(self, request):
        items = ("Windows PC", "Apple Mac", "Apple iPhone", "Lenovo", "Samsung", "Google")
        paginator = Paginator(items, 2)
        pages = request.GET.get('page', 1)
        try:
            items = paginator.page(pages)
        except PageNotAnInteger:
            items = paginator.page(1)
        return render(request, 'store/list.html', {'items': items})


# CLASS BASED VIEW - "better way" (more simple)
# TemplateView
class ElectronicsView2(TemplateView):
    template_name = 'store/list.html'
    def get_context_data(self, **kwargs):
        items = ("Windows PC", "Apple Mac", "Apple iPhone", "Lenovo", "Samsung", "Google")
        context = {'items': items}
        return context


# ListView
class ElectronicsView3(ListView):
    template_name = 'store/list-listview.html'
    queryset = ("Windows PC", "Apple Mac", "Apple iPhone", "Lenovo", "Samsung", "Google")
    context_object_name = 'items'
    paginate_by = 2


def additional_pagination(request):
    items = ("Item 1", "Item 2", "Item 3", "Item 4", "Item 5", "Item 6", "Item 7", "Item 8")
    return render(request, 'store/pagination.html', {})