from django.shortcuts import render, get_object_or_404
from django.core.paginator import Paginator

from .models import Entry


def entry_list(request):
    entries = Entry.objects.all()
    paginator = Paginator(entries, 3)
    pages = request.GET.get('page', 1)
    try: 
        entries = paginator.page(pages)
    except PageIsNotAnInteger:
        entries = paginator.page(1)
    context = {
        "entries": entries,
    }
    return render(request, 'blog/entry_list.html', context)


def entry(request, id):
    entry = get_object_or_404(Entry, pk=id)
    context = {
        "entry": entry,
    }
    return render(request, 'blog/entry.html', context)