from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from typing import List

from lib import are_anagrams
from AnagramsStore import AnagramsStore
from AnagramCount import AnagramCount


app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["GET"],
)

anagrams_store = AnagramsStore()


@app.get('/are-anagrams')
def get_are_anagrams(word1: str, word2: str) -> bool:

    if are_anagrams(word1, word2):
        anagrams_store.add(word1)
        return True

    return False


@app.get('/top10-anagrams')
def get_top10_anagrams() -> List[AnagramCount]:

    return anagrams_store.get_top10()
