import sys, json
from textblob import TextBlob

def read_input():
    text_input = sys.stdin.readlines()
    return json.loads(text_input[0])

text_input = read_input()
testimonial = TextBlob(text_input)
print(testimonial.sentiment.polarity*100)
sys.stdout.flush()
