from django.shortcuts import render, get_object_or_404

from .models import Meeting, MeetingRoom


def detail(request, id):
    # meeting = Meeting.objects.get(pk=id)
    meeting = get_object_or_404(Meeting, pk=id)

    context = {
        "meeting": meeting,
    }

    return render(request, "meetings/details.html", context)


def rooms(request):
    rooms = MeetingRoom.objects.all()

    context = {
        "rooms": rooms,
    }

    return render(request, "meetings/rooms.html", context)