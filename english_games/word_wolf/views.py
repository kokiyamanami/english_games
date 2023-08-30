from django.shortcuts import render
from .models import English, Genre

# def lang_template(request):
#     return render(request, 'word_wolf/lang.html')

# -------共通関数-------
def get_1_or_int(request, name):
    post_value = request.POST.get(name)
    if post_value is not None:
        # request.POST.get("minority") が値を持っている場合
        value = post_value  # 必要に応じて型変換
    else:
        # request.POST.get("minority") が値を持っていない場合
        value = 1
    return value


def get_2_or_int(request, name):
    post_value = request.POST.get(name)
    if post_value is not None:
        # request.POST.get("minority") が値を持っている場合
        value = post_value  # 必要に応じて型変換
    else:
        # request.POST.get("minority") が値を持っていない場合
        value = 2
    return value


# Create your views here.
def top_template(request):
    params = {'players': get_2_or_int(request, "players"),
                'minority': get_1_or_int(request, "minority")}
    return render(request, 'word_wolf/top.html', params)


def rule_template(request):
    return render(request, 'word_wolf/rule.html')


def player_template(request):
    if request.POST.get("genre") == "":
        # genre選択されていない場合の処理
        params = {'players': get_2_or_int(request, "players"),
                    'minority': get_1_or_int(request, "minority"),
                    'message': "Please select Genere"}
        return render(request, 'word_wolf/top.html', params)
    else:
        # genreが選択されていてplayerページに遷移する場合の処理
        players_num_list = list(range(1, int(get_2_or_int(request, "players")) + 1))
        params = {'players_num_list': ["player_name" + str(item) for item in players_num_list]}
        request.session['players_num'] = get_2_or_int(request, "players")
        return render(request, 'word_wolf/player.html', params)


def check_template(request):
    request.session['player_name1'] = request.POST.get("player_name1")
    print('request.POST.get("player_name1")')
    print(request.POST.get("player_name1"))
    print('request.session[player_name1]')
    print(request.session['player_name1'])
    print("request.session['players_num']")
    print(request.session['players_num'])

    player_data = {}
    for num in range(int(request.session['players_num'])):
        key = f"player_name{num + 1}"
        player_name = request.POST.get(key)
        player_data[key] = player_name
    
    print("player_data")
    print(player_data)
    request.session['player_data'] = player_data
    return render(request, 'word_wolf/check.html')


def topic_template(request):
    return render(request, 'word_wolf/topic.html')


def lang_template(request):
    return render(request, 'word_wolf/lang.html')


def start_template(request):
    return render(request, 'word_wolf/start.html')


def time_template(request):
    return render(request, 'word_wolf/time.html')


def finish_template(request):
    return render(request, 'word_wolf/finish.html')


def result_template(request):
    return render(request, 'word_wolf/result.html')
