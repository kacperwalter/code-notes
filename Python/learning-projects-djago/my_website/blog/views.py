from django.shortcuts import render


def entry_list(request):
    context = {}
    return render(request, 'blog/entry_list.html', context)


def entry(request):
    context = {}
    return render(request, 'blog/entry.html', context)