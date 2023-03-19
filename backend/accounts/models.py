from django.db import models
from django.contrib.auth.models import BaseUserManager, AbstractBaseUser
import uuid

class MyUserManager(BaseUserManager):
  def create_user(self, username, name, password):
    if not username:
      raise ValueError("Users must have an username")

    if not name:
      raise ValueError("Users must have an name")
      
    if not password:
      raise ValueError("Users must have an password")

    user = self.model(
      username = username,
      name = name,
    )

    user.set_password(password)
    user.save(using=self._db)
    
    return user
  
  def create_superuser(self, username, name, password):
    user = self.create_user(
      username,
      name,
      password,
    )

    user.is_superuser = True
    user.save(using=self._db)
    return user


class MyUser(AbstractBaseUser):
  id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
  name = models.CharField(max_length=255)
  username = models.CharField(max_length=255, unique=True)
  password = models.CharField(max_length=255)
  is_active = models.BooleanField(default=True)
  is_superuser = models.BooleanField(default=False)

  objects = MyUserManager()
  
  USERNAME_FIELD = "username"
  REQUIRED_FIELDS = ["password", "name"]
  
  def __str__(self):
    return self.username
  
  def has_perm(self, perm, obj=None):    
    return True

  def has_module_perms(self, app_label):
    return True

  @property
  def is_staff(self):
    return self.is_superuser

