from django.contrib import admin

from .models import Category, Entry

@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    pass


@admin.register(Entry)
class EntryAdmin(admin.ModelAdmin):
    list_display = ('title', 'author', 'category', 'publication_date')
    search_fields = ('title',)
    list_filter = ('author', 'publication_date')