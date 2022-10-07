from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/items/', include('items.urls')),
]


# total paths: 
# api/items/login (POST to login)
# api/items/newUser (POST to signup)

# api/items/pk/ (GET to get individual items) (Delete to delete individual items) (Put to update)


# api/items/ (GET to all items) Dangerous!


# api/items/ (POST to add items)
# api/items/getItems/<int:pk>/ (get to retrieve items)