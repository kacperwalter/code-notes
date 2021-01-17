from django.shortcuts import render, get_object_or_404, redirect
from django.forms import modelform_factory

from .models import Meeting, MeetingRoom
from .forms import MeetingForm


def detail(request, id):
    # meeting = Meeting.objects.get(pk=id)
    meeting = get_object_or_404(Meeting, pk=id)

    context = {
        "meeting": meeting,
    }

    return render(request, "meetings/details.html", context)


def rooms(request):
    context = {
        "rooms": MeetingRoom.objects.all(),
    }

    return render(request, "meetings/rooms.html", context)


# new class (not an instation/object) we can use built in django
# MeetingForm = modelform_factory(Meeting, exclude=[])
# we can build our own forms in forms.py

def new(request):
    if request.method == "POST":
        form = MeetingForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('welcome')
    else:
        form = MeetingForm()

    context = {
        'form': form,
    }

    return render(request, "meetings/new.html", context)
   

   