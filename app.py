import os
from flask import Flask, request, jsonify, render_template
from flask_cors import CORS
from openai import OpenAI
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)
CORS(app)

client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))

# ── SERVE FRONTEND ──
@app.route('/')
def index():
    return render_template('index.html')

# ── HELPER ──
def ask_ai(system_prompt, user_prompt):
    response = client.chat.completions.create(
        model="gpt-4o-mini",
        max_tokens=1500,
        messages=[
            {"role": "system", "content": system_prompt},
            {"role": "user", "content": user_prompt}
        ]
    )
    return response.choices[0].message.content

# ── SUMMARY ──
@app.route('/api/summary', methods=['POST'])
def summary():
    data = request.json
    notes = data.get('notes', '')
    options = data.get('options', {})

    prompt = f"""Summarize the following study notes clearly.
{'Include key bullet points.' if options.get('bullets') else ''}
{'Include important definitions.' if options.get('defs') else ''}
{'Keep it very brief.' if options.get('short') else ''}

Notes:
{notes}"""

    result = ask_ai("You are an expert study assistant.", prompt)
    return jsonify({"result": result})

# ── MCQ ──
@app.route('/api/mcq', methods=['POST'])
def mcq():
    data = request.json
    notes = data.get('notes', '')
    count = data.get('count', 5)
    difficulty = data.get('difficulty', 'medium')

    prompt = f"""Create exactly {count} multiple-choice questions at {difficulty} difficulty from these notes.
Return ONLY a valid JSON array:
[
  {{
    "q": "question text",
    "options": ["A) option1", "B) option2", "C) option3", "D) option4"],
    "correct": 0,
    "explain": "brief explanation"
  }}
]

Notes:
{notes}"""

    result = ask_ai("You are an exam question creator. Return only valid JSON.", prompt)
    return jsonify({"result": result})

# ── ELI5 ──
@app.route('/api/eli5', methods=['POST'])
def eli5():
    data = request.json
    notes = data.get('notes', '')
    concept = data.get('concept', '')

    prompt = f"""Explain "{concept}" as simply as possible, like explaining to a 5-year-old.
Use a fun analogy, short sentences, and everyday examples.
Base the explanation on these notes if relevant:
{notes}"""

    result = ask_ai("You are a friendly teacher who explains things simply.", prompt)
    return jsonify({"result": result})

# ── EXAM BOOSTER ──
@app.route('/api/booster', methods=['POST'])
def booster():
    data = request.json
    notes = data.get('notes', '')

    prompt = f"""Analyse these study notes as an expert exam coach.
Return ONLY a valid JSON object:
{{
  "hotTopics": ["topic1", "topic2", "topic3", "topic4", "topic5"],
  "twoMark": ["Q1", "Q2", "Q3"],
  "fiveMark": ["Q1", "Q2", "Q3"],
  "tenMark": ["Q1", "Q2"],
  "revisionPoints": ["point1", "point2", "point3", "point4", "point5", "point6"]
}}

Notes:
{notes}"""

    result = ask_ai("You are an expert exam coach. Return only valid JSON.", prompt)
    return jsonify({"result": result})

# ── DOUBT SOLVER ──
@app.route('/api/doubt', methods=['POST'])
def doubt():
    data = request.json
    notes = data.get('notes', '')
    question = data.get('question', '')

    prompt = f"""Answer this student's question based on the notes below.
If the answer is not in the notes, say so and give a brief general answer.

Question: {question}

Notes:
{notes}"""

    result = ask_ai("You are a helpful study tutor. Answer based on the student's notes.", prompt)
    return jsonify({"result": result})

if __name__ == '__main__':
    app.run(debug=True)

