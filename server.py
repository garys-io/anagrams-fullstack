from fastapi import FastAPI
from typing import List

from lib import are_anagrams
from AnagramsStore import AnagramsStore


app = FastAPI()
anagrams_store = AnagramsStore()


@app.get('/are_anagrams')
def get_are_anagrams(word1, word2) -> bool:

    if are_anagrams(word1, word2):
        anagrams_store.add(word1)
        return True

    return False


@app.get('/top10-anagrams')
def get_top10_anagrams() -> List[dict]:

    return anagrams_store.get_top10()
