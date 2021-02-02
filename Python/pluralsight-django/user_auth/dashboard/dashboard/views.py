from django.http import HttpResponse
from django.shortcuts import render


def index(request):
    return HttpResponse("Hello World!")


def login(request):
    if request.method == 'POST':
        username = request.POST['username']
        return HttpResponse('Your name is: ' + username)
    return render(request, 'login.html')


def dashboard(request):
    # if not request.user.is_authenticated:
    if not request.user.username == 'admin':
        return HttpResponse('Unauthorized')
    return HttpResponse('<h1>Dashboard</h1>') 