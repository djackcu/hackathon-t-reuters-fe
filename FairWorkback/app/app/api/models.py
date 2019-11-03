from django.db import models
from django.contrib.auth import get_user_model

User = get_user_model()


# Create your models here.

class UserProfile(models.Model):
    user = models.ForeignKey(to=User, related_name="user_profile", on_delete=models.CASCADE)
    about = models.CharField(verbose_name="about", max_length=500)
    age = models.IntegerField(verbose_name="age")
    avatar = models.CharField(verbose_name="avatar", max_length=200)
    country = models.CharField(verbose_name="country", max_length=100)
    language = models.CharField(verbose_name="language", max_length=100)
    # location = models.CharField(verbose_name="location", max_length=50)
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now_add=True)


class Employer(models.Model):
    address = models.CharField(verbose_name="address", max_length=200)
    city = models.CharField(verbose_name="city", max_length=50)
    country = models.CharField(verbose_name="country", max_length=40)
    email = models.CharField(verbose_name="email", max_length=100)
    language = models.CharField(verbose_name="language", max_length=100)
    name = models.CharField(verbose_name="name", max_length=100)
    phone = models.CharField(verbose_name="phone", max_length=100)
    pics = models.CharField(verbose_name="pics", max_length=1000)
    # created = models.DateTimeField(auto_now_add=True)
    # updated = models.DateTimeField(auto_now_add=True)


class Review (models.Model):
    title = models.CharField(verbose_name="review-title", max_length=100)
    rating = models.IntegerField(verbose_name="rating")
    year = models.IntegerField(verbose_name="year")
    season = models.CharField(verbose_name="season", max_length=100)
    language = models.CharField(verbose_name="language", max_length=100)
    tasks = models.CharField(verbose_name="tasks", max_length=1000)
    liked = models.CharField(verbose_name="liked", max_length=1000)
    not_liked = models.CharField(verbose_name="not_liked", max_length=1000)
    recommend = models.BooleanField(verbose_name="recommend")

    user = models.ForeignKey(verbose_name="user", to=User, related_name="reviews", on_delete=models.CASCADE)
    employer = models.ForeignKey(verbose_name="employer", to=Employer, related_name="emp_reviews", on_delete=models.CASCADE)

    found = models.CharField(verbose_name="found", max_length=200)
    acco_onsite = models.CharField(verbose_name="acco_onsite", max_length=200)
    acco_privacy = models.CharField(verbose_name="acco_privacy", max_length=200)
    acco_pics = models.CharField(verbose_name="acco_pics", max_length=200)
    acco_wifi = models.CharField(verbose_name="acco_wifi", max_length=200)
    feel_danger = models.BooleanField(verbose_name="feel_danger")
    feel_happy = models.BooleanField(verbose_name="feel_happy")
    feel_safe = models.BooleanField(verbose_name="feel_safe")
    feel_scared = models.BooleanField(verbose_name="feel_scared")
    pay_on_time = models.CharField(verbose_name="pay_on_time", max_length=300)
    pay_in_full = models.BooleanField(verbose_name="pay_in_full")
    pay_promised = models.BooleanField(verbose_name="pay_promised")
    work_as_promised = models.BooleanField(verbose_name="work_as_promised")
    work_cond_safe = models.BooleanField(verbose_name="work_cond_safe")
    work_contract = models.BooleanField(verbose_name="work_contract")
    work_hours = models.CharField(verbose_name="work_hours", max_length=100)
    work_other_ppl = models.IntegerField(verbose_name="work_other_ppl")
    work_pics = models.CharField(verbose_name="work_pics", max_length=100)
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now_add=True)
    # useful = models.BooleanField(verbose_name="useful")

