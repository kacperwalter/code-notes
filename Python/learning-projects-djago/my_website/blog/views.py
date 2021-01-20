from django.shortcuts import render, get_object_or_404

from .models import Entry


def entry_list(request):
    context = {
        "entries": Entry.objects.all(),
    }
    return render(request, 'blog/entry_list.html', context)


def entry(request, id):
    entry = get_object_or_404(Entry, pk=id)
    context = {
        "entry": entry,
    }
    return render(request, 'blog/entry.html', context)