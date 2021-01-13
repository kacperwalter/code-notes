from django.contrib import admin

from .models import Meeting, MeetingRoom

admin.site.register(Meeting)
admin.site.register(MeetingRoom)