<p align="center">
  <img src="./img.png" alt="StudySageAI Banner" width="100%">
</p>

# 📚 StudySageAI

**StudySageAI** is an AI-powered web-based study assistant that helps students quickly understand, revise, and prepare for exams by converting lengthy study materials into structured, easy-to-digest learning content.

The platform extracts text from uploaded PDF notes and uses advanced AI models to generate:
- Clear summaries
- Key points and definitions
- Practice MCQs
- Simple ELI5 explanations
- Predicted exam questions and revision sheets

It significantly reduces manual study effort and improves learning efficiency.

---

## 👥 Team: MasalaChaya

- **Anna Kurian** – Model Engineering College  
- **Josna Ann Joshy** – Model Engineering College  

---

## 🌐 Live Demo

- 🔗 Frontend: https://study-sage-ai.vercel.app  
- 🔗 Backend API: https://studysageai-2.onrender.com  

---

## 📌 Problem Statement

Students often struggle to study efficiently from large volumes of notes, especially during exam preparation. Traditional study methods require:

- Reading long documents
- Manually summarizing
- Identifying key topics
- Creating practice questions

This process is **time-consuming, repetitive, and inefficient**.

There is a need for an **intelligent system** that can automatically extract, organize, and simplify study materials.

---

## 💡 Solution

**StudySageAI** provides an **AI-driven study assistant** that automates the entire revision process.

It allows students to upload their study materials (PDF notes), after which the system:

- Extracts text from documents
- Generates structured summaries
- Highlights important concepts
- Creates MCQs and exam questions
- Provides simple explanations for difficult topics

The platform acts as a **personalized AI revision coach**, enabling:

✔ Faster revision  
✔ Better understanding  
✔ Improved retention  
✔ Smarter exam preparation  

---

## ⚙️ Tech Stack

### 🖥️ Languages
- Python
- JavaScript
- HTML
- CSS

### 🧠 Frameworks
- Flask (Backend)
- Vanilla JavaScript (Frontend)

### 📚 Libraries & Tools
- PyPDF2 – PDF text extraction  
- Flask-CORS – Cross-origin requests  
- python-dotenv – Environment configuration  
- Groq SDK – AI model integration  

### 🛠️ Development Tools
- VS Code  
- Git & GitHub  
- Postman (API testing)  
- Render (Backend Deployment)  
- Vercel (Frontend Deployment)  

---

## 🚀 Features

### 📄 PDF Upload & Text Extraction
Upload study notes in PDF format and automatically extract readable content.

### 🧠 AI-Powered Smart Summary
Generate structured summaries with bullet points, key concepts, and definitions.

### ❓ MCQ Generator
Create exam-style multiple-choice questions with answers and explanations.

### 👶 ELI5 Concept Explainer
Understand complex topics through simple, relatable explanations.

### ⚡ Exam Booster Module
Get predicted questions, hot topics, and last-minute revision sheets.

### 💬 Doubt Solver Assistant
Ask questions directly from your notes and receive AI-powered answers.

---

## 📸 Screenshots

### 🏠 Home Page
![Home](assets/img1.png)

### 📄 PDF Upload & Extraction
![PDF Upload](assets/img2.png)

### 🧠 Summary Generator
![Summary](assets/img3.png)

### ❓ MCQ Generator
![MCQ](assets/img4.png)

### 👶 ELI5 Explanation
![ELI5](assets/img5.png)

### ⚡ Exam Booster
![Booster](assets/img6.png)

---

## 🧩 System Architecture

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


##POST /api/mcq

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
