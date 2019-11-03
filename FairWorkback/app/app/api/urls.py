from django.urls import path
from rest_framework_simplejwt import views as jwt_views

from app.api.views import RegisterUser, ValidateRegisteredUser, ResetPassword, ResetPasswordValidate, MyProfile, \
    GetAllEmployers, CreateEmployer, GetUpdateDeleteEmployer, GetMyReviews, GetAllReviews, CreateReview, \
    GetUpdateDeleteReview

app_name = 'api'

urlpatterns = [
    
    # Profile
    path('me/', MyProfile.as_view(), name='get-update-profile'),

    # Employers
    path('employer/all/', GetAllEmployers.as_view(), name='get-all-employers'),
    path('employer/new-employer/', CreateEmployer.as_view(), name='create-employer'),
    path('employer/<int:employer_id>/', GetUpdateDeleteEmployer.as_view(), name='get-update-delete-employer'),

    # Reviews
    # path(‘employer/reviews/‘, GetEmployerReviews.as_view(), name='get-employer-reviews”),
    path('reviews/all/', GetAllReviews.as_view(), name='get-all-reviews'),
    path('reviews/', GetMyReviews.as_view(), name='get-user-reviews'),
    path('reviews/new-review/', CreateReview.as_view(), name='create-review'),
    path('reviews/<int:review_id>/', GetUpdateDeleteReview.as_view(), name='get-update-delete-review'),

    # Registration
    path('registration/', RegisterUser.as_view(), name='register-user'),
    path('registration/validation/', ValidateRegisteredUser.as_view(), name='validate-registered-user'),

    # Auth
    path('auth/token/', jwt_views.TokenObtainPairView.as_view(), name='token-obtain-pair'),
    path('auth/token/refresh/', jwt_views.TokenRefreshView.as_view(), name='token-refresh'),
    path('auth/token/verify/', jwt_views.TokenVerifyView.as_view(), name='token-verify'),
    path('auth/password-reset/', ResetPassword.as_view(), name='reset-password'),
    path('auth/password-reset/validate/', ResetPasswordValidate.as_view(), name='reset-password-validation'),

]