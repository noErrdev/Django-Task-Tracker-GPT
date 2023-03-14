from django.contrib import admin
from django.urls import path, include
from django.views.generic import TemplateView


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/accounts/', include('accounts.urls')),
    path('api/', include('items.urls')),
    
    
    # frontend Routes
    path('', TemplateView.as_view(template_name="index.html")),
    path('signup/', TemplateView.as_view(template_name="index.html")),
    path('home/', TemplateView.as_view(template_name="index.html")),
    path('createItems/', TemplateView.as_view(template_name="index.html")),
    path('individualItems/', TemplateView.as_view(template_name="index.html")),
]


