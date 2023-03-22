from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
import openai
import os

# OPENAI
openai.api_key = os.getenv("OPENAI_API_KEY")

def generate_text(prompt):
  completion = openai.ChatCompletion.create(model="gpt-3.5-turbo", messages=[{"role": "user", "content": prompt}])
  return completion.choices[0].message.content

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def chat_chatGPT(request):
  result = generate_text(request.data['prompt'])
  return Response({"chat_response" : result}, status=200)