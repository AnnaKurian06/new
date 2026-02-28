<p align="center">
  <img src="./img.png" alt="Project Banner" width="100%">
</p>

# StudySageAI

## StudySageAI is a web-based AI study assistant designed to help students quickly understand and revise academic material by converting uploaded PDF notes into clear, concise summaries. The system extracts text from documents and uses an AI model to generate simplified explanations, key points, and structured study content, reducing the time spent reading lengthy notes. Built using Python (Flask) for the backend and HTML, CSS, and JavaScript for the frontend, StudySageAI provides an easy-to-use interface that supports efficient learning, quick revision, and better exam preparation.

### Team Name: MasalaChaya

### Team Members
- Member 1: Anna Kurian- Model Engineering College
- Member 2: Josna Ann Joshy- Model Engineering College

### Hosted Project Link
study-sage-ai.vercel.app
https://studysageai-2.onrender.com

### Project Description
**StudySageAI** is an AI-powered study assistant that converts PDF notes into clear summaries, key points, and practice questions. It helps students revise faster, understand concepts easily, and prepare effectively for exams through an interactive web interface.

### The Problem statement
Students often struggle to effectively study from large volumes of notes and textbooks, especially when preparing for exams under time pressure. Traditional study methods require manually reading, summarizing, and creating practice questions, which is time-consuming and inefficient. There is a need for an intelligent system that can automatically extract content from study materials (such as PDFs), generate concise summaries, highlight important topics, and create practice questions to enhance understanding and revision. The goal of *StudySageAI* is to provide a smart, AI-driven study assistant that simplifies learning, improves retention, and helps students prepare more efficiently for exams.

### The Solution
*StudySageAI* provides an intelligent, all-in-one study assistant that automates the most time-consuming parts of learning. The system allows students to upload their study materials (PDF notes, class content, etc.), after which the platform extracts the text and uses AI to generate concise summaries, key points, definitions, and important exam topics. It also creates practice MCQs, predicted exam questions, and simple explanations (ELI5) to improve understanding.

By converting long, unstructured notes into structured and exam-ready content, StudySageAI reduces manual effort, improves revision speed, and helps students focus on what matters most for their exams. The platform acts as a personalized revision coach, enabling efficient learning, better retention, and smarter exam preparation.
---
## Technical Details
### Technologies/Components Used

For Software:

Languages used: Python, JavaScript, HTML, CSS

Frameworks used: Flask (backend), Vanilla JS (frontend)

Libraries used:

PyPDF2 (PDF text extraction)

Flask-CORS (cross-origin requests)

python-dotenv (environment variable handling)

Groq SDK (AI model integration)

Tools used: VS Code, Git, GitHub, Postman (API testing), Render / Vercel (deployment)

## Features

PDF Upload & Text Extraction
Users can upload study notes in PDF format and automatically extract readable text.

AI-Powered Smart Summary
Generates clean summaries with optional bullet points, definitions, and short revision notes.

MCQ Generator for Practice
Automatically creates exam-style multiple choice questions with answers and explanations.

ELI5 Concept Explanation
Explains complex topics in simple, easy-to-understand language using real-life analogies.

Exam Booster / Prediction Module
Highlights important topics, expected questions, and last-minute revision points for exams.

Doubt Solver Assistant
Students can ask questions directly from their notes and receive clear AI-generated answers.

---

## Implementation

### For Software:

#### Installation
# Clone the repository
git clone https://github.com/AnnaKurian06/new.git

# Move into the project folder
cd studysageai

# Create virtual environment (recommended)
python -m venv venv

# Activate virtual environment
# Windows
venv\Scripts\activate
# Mac/Linux
source venv/bin/activate

# Install required dependencies
pip install -r requirements.txt
#### Run
py app.py

## Additional Documentation

Additional Documentation
For Web Projects with Backend:
API Documentation

Base URL:

https://studysageai-2.onrender.com

##### Endpoints

##POST /api/upload

Description: Uploads a PDF file and extracts readable text from it.
Request Type: multipart/form-data
Request Body:
file (PDF): The file to be uploaded
Response:
{
  "text": "Extracted text from the uploaded PDF..."
}
POST /api/mcq

Description: Generates multiple-choice questions (MCQs) from the notes.
Request Body:
{
  "notes": "Your notes text",
  "count": 5,
  "difficulty": "medium"
}
Response:
{
  "result": "[JSON string containing MCQ objects]"
}
