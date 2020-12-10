from lib import are_anagrams
from AnagramsStore import AnagramsStore


def test_are_anagrams():
    # True Positive: These words are anagrams: “wolf” and “flow”, “restful” and “fluster”, “knee” and “keen”.
    assert are_anagrams("wolf", "flow")
    assert are_anagrams("restful", "fluster")

    # False Positive: These words are not anagrams: “wolf” and “owl”, "grove" and groove", "grate" and "greater"
    assert not are_anagrams("wolf", "owl")
    assert not are_anagrams("grove", "groove")
    assert not are_anagrams("great", "greater")
    assert not are_anagrams("great", "greet")


def test_AnagramsDB():

    anagrams_store = AnagramsStore()

    anagrams_store.add("great")
    anagrams_store.add("owl")
    anagrams_store.add("owl")
    anagrams_store.add("owl")
    anagrams_store.add("owl")
    anagrams_store.add("owl")
    anagrams_store.add("wolf")
    anagrams_store.add("wolf")
    anagrams_store.add("wolf")
    anagrams_store.add("wolf")
    anagrams_store.add("wolf")
    anagrams_store.add("owlf")
    anagrams_store.add("lfow")

    expected_anagrams_list = [
        { 'anagram': 'flow', 'count': 7 },
        { 'anagram': 'low', 'count': 5 },
        { 'anagram': 'aegrt', 'count': 1 }
    ]

    actual_anagrams_list = anagrams_store.get_top10()

    assert len(expected_anagrams_list) == len(actual_anagrams_list)

    for expected_anagram, actual_anagram in zip(expected_anagrams_list, actual_anagrams_list):
        assert expected_anagram['anagram'] == actual_anagram['anagram']
        assert expected_anagram['count'] == actual_anagram['count']

    anagrams_store.add("owl 1")
    anagrams_store.add("owl 2")
    anagrams_store.add("owl 3")
    anagrams_store.add("owl 4")
    anagrams_store.add("owl 5")
    anagrams_store.add("wolf 6")
    anagrams_store.add("wolf 7")
    anagrams_store.add("wolf 8")
    anagrams_store.add("wolf 9")

    assert len(anagrams_store.get_top10()) == 10
