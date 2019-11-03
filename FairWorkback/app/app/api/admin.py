from django.contrib import admin

# Register your models here.

from app.api.models import Employer, Review, UserProfile


class EmployerAdmin(admin.ModelAdmin):
    list_display = ['name', 'city', 'country']
    search_fields = ['name', 'city', 'country']
    list_filter = ['country']


admin.site.register(Employer, EmployerAdmin)


class ReviewAdmin(admin.ModelAdmin):
    list_display = ['title', 'year', 'rating', 'created']
    search_fields = ['title', 'year', 'rating', 'created']
    list_filter = ['year', 'created']


admin.site.register(Review, ReviewAdmin)


class UserProfileAdmin(admin.ModelAdmin):
    list_display = ['user', 'country','created']
    search_fields = ['user', 'country','created']
    list_filter = ['created']


admin.site.register(UserProfile, UserProfileAdmin)