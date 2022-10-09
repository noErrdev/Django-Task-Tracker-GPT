from django.contrib import admin
from django.urls import path, include
from django.views.generic import TemplateView


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/items/', include('items.urls')),
    path('', TemplateView.as_view(template_name="index.html")),
    path('options/', TemplateView.as_view(template_name="index.html")),
    path('signup/', TemplateView.as_view(template_name="index.html")),
    path('home/', TemplateView.as_view(template_name="index.html")),
    path('createItems/', TemplateView.as_view(template_name="index.html")),
    path('individualItems/', TemplateView.as_view(template_name="index.html")),
]



# total paths: 
# api/items/login (POST to login)
# api/items/newUser (POST to signup)

# api/items/pk/ (GET to get individual items) (Delete to delete individual items) (Put to update)


# api/items/ (GET to all items) Dangerous!


# api/items/ (POST to add items)
# api/items/getItems/<int:pk>/ (get to retrieve items)