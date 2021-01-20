from django.shortcuts import render


def index(request):
    context = {}
    return render(request, 'website/index.html', context)


def about(request):
    context = {}
    return render(request, 'website/about.html', context)