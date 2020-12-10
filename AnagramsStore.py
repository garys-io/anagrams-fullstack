from typing import List


class AnagramsStore:

    def __init__(self):
        self._anagrams = {}

    def add(self, anagram: str) -> None:
        # sort the word before storing
        anagram = ''.join(sorted([c for c in anagram]))
        if not anagram in self._anagrams:
            self._anagrams[anagram] = 1
        else:
            self._anagrams[anagram] += 1

    def get_top10(self) -> List[dict]:
        anagram_list = [{'anagram': key, 'count': val}
                        for key, val in self._anagrams.items()]


        anagram_list.sort(key=lambda x: x['count'], reverse=True)

        return anagram_list[:10]
