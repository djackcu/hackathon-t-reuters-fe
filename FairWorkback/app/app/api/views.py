from django.contrib.auth import get_user_model
from django.core.mail import send_mail
from django.shortcuts import get_object_or_404
from django.utils.crypto import get_random_string

from rest_framework import status
from rest_framework.generics import ListAPIView, RetrieveUpdateDestroyAPIView, CreateAPIView, GenericAPIView, RetrieveUpdateAPIView
from rest_framework.permissions import AllowAny
from rest_framework.response import Response

from app.api.models import Employer, Review, UserProfile
from app.api.serializers import EmployerSerializer, ReviewSerializer, UserProfileSerializer, UserSerializer

# Create your views here.

User = get_user_model()


# ###################
# Registration
# ###################


class RegisterUser(CreateAPIView):
    """
    Register a new user by asking for an email (send email validation code).
    """
    permission_classes = [AllowAny]
    serializer_class = UserSerializer

    def post(self, request, *args, **kwargs):
        user_email = request.data['email']
        user_pw = get_random_string(length=8)
        new_user = User.objects.create(email=user_email, password=user_pw, username=user_pw)
        new_user.save()
        # Send email
        return Response('Thanks - your email captured!', status=status.HTTP_201_CREATED)


class ValidateRegisteredUser(GenericAPIView):
    """
    Validate a new registered user with a validation code sent by email.
    """
    permission_classes = [AllowAny]
    serializer_class = UserSerializer
    queryset = User.objects.all()

    def post(self, request):
        provided_code = request.data['code']
        provided_email = request.data['email']
        db_user = User.objects.get(email=provided_email)
        if provided_code == db_user.password:
            db_user.username = request.data['username']
            db_user.set_password(request.data['password'])
            db_user.save()
            # Send email
            return Response('Account has been activated successfully!', status=status.HTTP_201_CREATED)
        else:
            return Response('Activation code invalid, please request a new one')


# #####################
# Auth
# #####################

class ResetPassword(GenericAPIView):
    """
    Reset users password by sending a validation code in an email
    """
    serializer_class = UserSerializer
    queryset = User.objects.all()

    def post(self, request):
        new_pw = get_random_string(length=8)
        try:
            user = User.objects.get(id=request.user.id)
        except:
            return Response('Password reset did not work, try again.')
        user_email = user.email
        user.password = new_pw
        user.save()
        # Send email
        return Response('Password reset email sent, please check your inbox.', status=status.HTTP_200_OK)


class ResetPasswordValidate(GenericAPIView):
    """
    Validate password reset token and set new password for the user
    """
    permission_classes = [AllowAny]
    serializer_class = UserSerializer
    queryset = User.objects.all()

    def post(self, request):
        provided_code = request.data['code']
        provided_email = request.data['email']
        db_user = User.objects.get(email=provided_email)
        if provided_code == db_user.password:
            db_user.username = request.data['username']
            db_user.set_password(request.data['password'])
            db_user.save()
            # Send email
            return Response('Password has been reset successfully!', status=status.HTTP_201_CREATED)
        else:
            return Response('Activation code invalid, please request a new one')

#########################
# Me
#########################


class MyProfile(RetrieveUpdateAPIView):
    """
    get:
    Get logged in user’s profile (as well private information like email, etc.).

    patch:
    Update the logged in user’s profile public info.
    """
    serializer_class = UserProfileSerializer
    queryset = UserProfile.objects.all()

    def retrieve(self, request, *args, **kwargs):
        myprofile = UserProfile.objects.get(user_id=request.user.id)
        serializer = UserProfileSerializer(myprofile)
        return Response(serializer.data)

    def patch(self, request):
        updated_profile = UserProfile.objects.get(user_id=request.user.id)
        serializer = UserProfileSerializer(updated_profile, data=request.data, partial=True)

        if serializer.is_valid():
            serializer.save()
            return Response("User profile updated.", status=201)


#########################
# Employers
#########################


class GetAllEmployers(ListAPIView):
    """
    List all employers.
    """
    serializer_class = EmployerSerializer

    def get_queryset(self):
        queryset = Employer.objects.filter()
        return queryset


class CreateEmployer(CreateAPIView):
    """
    User can register a new employer by sending the employer data.
    """
    serializer_class = EmployerSerializer
    queryset = Employer.objects.all()

    def post(self, request, *args, **kwargs):
        address = request.data['address']
        city = request.data['city']
        country = request.data['country']
        email = request.data['email']
        language = request.data['language']
        name = request.data['name']
        phone = request.data['phone']
        pics = request.data['pics']
        new_employer = Employer.objects.create(
            address=address,
            city=city,
            country=country,
            email=email,
            language=language,
            name=name,
            phone=phone,
            pics=pics
        )
        new_employer.save()
        return Response(status=status.HTTP_201_CREATED)


class GetUpdateDeleteEmployer(RetrieveUpdateDestroyAPIView):
    """
    get:
    Get a specific employer by ID and display all the information about that employer.

    patch:
    Update a specific employer by ID (only allow owner or admin?).

    delete:
    Delete a specific employer by ID (only allow owner or admin?).
    """
    serializer_class = EmployerSerializer

    def get_object(self, **kwargs):
        obj = get_object_or_404(Employer.objects.all(), id=self.kwargs["employer_id"])
        self.check_object_permissions(self.request, obj)
        return obj


#########################
# Reviews
#########################

class GetMyReviews(ListAPIView):
    """
    List all reviews.
    """
    serializer_class = ReviewSerializer

    def get_queryset(self):
        queryset = Review.objects.filter(user_id=self.request.user.id)
        return queryset


class GetAllReviews(ListAPIView):
    """
    List all reviews of current user.
    """
    serializer_class = ReviewSerializer

    def get_queryset(self):
        queryset = Review.objects.filter()
        return queryset


class CreateReview(CreateAPIView):
    """
    User can create a new employer review.
    """
    serializer_class = ReviewSerializer
    queryset = Review.objects.all()

    def post(self, request, *args, **kwargs):
        title = request.data['title']
        rating = request.data['rating']
        year = request.data['year']
        season = request.data['season']
        language = request.data['language']
        tasks = request.data['tasks']
        liked = request.data['liked']
        not_liked = request.data['not_liked']
        recommend = request.data['recommend']
        found = request.data['found']
        acco_onsite = request.data['acco_onsite']
        acco_privacy = request.data['acco_privacy']
        acco_pics = request.data['acco_pics']
        acco_wifi = request.data['acco_wifi']
        feel_danger = request.data['feel_danger']
        feel_happy = request.data['feel_happy']
        feel_safe = request.data['feel_safe']
        feel_scared = request.data['feel_scared']
        pay_on_time = request.data['pay_on_time']
        pay_in_full = request.data['pay_in_full']
        pay_promised = request.data['pay_promised']
        work_as_promised = request.data['work_as_promised']
        work_cond_safe = request.data['work_cond_safe']
        work_contract = request.data['work_contract']
        work_hours = request.data['work_hours']
        work_other_ppl = request.data['work_other_ppl']
        work_pics = request.data['work_pics']
        employer = Employer.objects.get(name=request.data['employer'])
 
        new_review = Review.objects.create(
            title=title,
            rating=rating,
            year=year,
            season=season,
            language=language,
            tasks=tasks,
            liked=liked,
            not_liked=not_liked,
            recommend=recommend,
            found=found,
            acco_onsite=acco_onsite,
            acco_privacy=acco_privacy,
            acco_pics=acco_pics,
            acco_wifi=acco_wifi,
            feel_danger=feel_danger,
            feel_happy=feel_happy,
            feel_safe=feel_safe,
            feel_scared=feel_scared,
            pay_on_time=pay_on_time,
            pay_in_full=pay_in_full,
            pay_promised=pay_promised,
            work_as_promised=work_as_promised,
            work_cond_safe=work_cond_safe,
            work_contract=work_contract,
            work_hours=work_hours,
            work_other_ppl=work_other_ppl,
            work_pics=work_pics,
            user_id=self.request.user.id,
            employer=employer
        )
        new_review.save()
        return Response(status=status.HTTP_201_CREATED)


class GetUpdateDeleteReview(RetrieveUpdateDestroyAPIView):
    """
    get:
    Get a specific review by ID and display all the information about that review.

    patch:
    Update a specific review by ID (only allow owner or admin).

    delete:
    Delete a specific review by ID (only allow owner or admin).
    """
    serializer_class = ReviewSerializer

    def get_object(self, **kwargs):
        my_reviews = Review.objects.filter(user_id=self.request.user.id)
        obj = get_object_or_404(my_reviews, id=self.kwargs["review_id"])
        return obj
