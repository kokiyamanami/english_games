from django.urls import path
from . import views
 
app_name = 'word_wolf'
urlpatterns = [
    path('top/', views.top_template, name='top_template'),
    path('rule/', views.rule_template, name='rule_template'),
    path('player/', views.player_template, name='player_template'),
    path('check/', views.check_template, name='check_template'),
    path('topic/', views.topic_template, name='topic_template'),
    path('start/', views.start_template, name='start_template'),
    path('time/', views.time_template, name='time_template'),
    path('finish/', views.finish_template, name='finish_template'),
    path('result/', views.result_template, name='result_template'),
    path('lang/', views.lang_template, name='lang_template'),
]
