from rest_framework_simplejwt.tokens import RefreshToken

class CustomRefreshToken(RefreshToken):
    def __init__(self, user, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.payload['user_id'] = str(user.id)
        self.payload['name'] = user.name

