from .models import English, Genre

# Create your tests here.
ge = Genre()
ge.id = 2
ge.genre_en = "love"
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
