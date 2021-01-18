from django.shortcuts import render
from django.http import HttpResponse


def index(request):
    return HttpResponse("Welcome to store!")


def detail(request):
    return HttpResponse("Hello there, this is detailed website")


def electronics(request):
    return HttpResponse("Hello there, this is subpage for electronics")