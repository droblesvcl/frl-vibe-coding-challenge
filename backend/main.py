from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import random

app = FastAPI()
app.add_middleware(CORSMiddleware, allow_origins=["*"],
allow_methods=["*"], allow_headers=["*"])

WORDS = [
    "sunflower", "mountain", "giraffe", "bicycle", "pizza",
    "umbrella", "computer", "airplane", "guitar", "elephant",
    "tree", "rocket", "camera", "book", "apple"
]

@app.get("/word")
async def get_word():
    return {"word": random.choice(WORDS)}