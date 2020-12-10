from pydantic import BaseModel


class AnagramCount(BaseModel):
    anagram: str
    count: int
