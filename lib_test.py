from lib import are_anagrams

def test_are_anagrams():
    pass
    # True Positive: These words are anagrams: “wolf” and “flow”, “restful” and “fluster”, “knee” and “keen”.
    assert are_anagrams("wolf", "flow")
    assert are_anagrams("restful", "fluster")

    # False Positive: These words are not anagrams: “wolf” and “owl”, "grove" and groove", "grate" and "greater"
    assert not are_anagrams("wolf", "owl")
    assert not are_anagrams("grove", "groove")
    assert not are_anagrams("great", "greater")
    assert not are_anagrams("great", "greet")
