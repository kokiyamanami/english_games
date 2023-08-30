from django.test import TestCase
from english_games.word_wolf.models import English, Genre

# Create your tests here.
ge = Genre()
ge.id = 1
ge.genre_en = "fruit"
ge.save()

en = English()
en.topic_a = "apple"
en.topic_b = "strawberry"
en.genre_id = 1
en.save()

en = English()
en.topic_a = "banana"
en.topic_b = "orange"
en.genre_id = 1
en.save()
