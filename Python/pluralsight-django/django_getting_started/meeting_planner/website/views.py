from datetime import datetime

from django.shortcuts import render
from django.http import HttpResponse

from meetings.models import Meeting


def welcome(request):
    context = {
        "message": "This data was sent from the view to template",
        "num_meetings": Meeting.objects.count(),
    }
    return render(request, "website/welcome.html", context)


def date(request):
    return HttpResponse("This page was served at " + str(datetime.now()))


def about(request):
    return HttpResponse("Hello, I'm Kacper " + str(request)) 