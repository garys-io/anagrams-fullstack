def are_anagrams(word1: str, word2: str) -> bool:
    if len(word1) != len(word2):
        return False

    return set(word1) == set(word2)
