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
git clone https://github.com/AnnaKurian06/studysageai.git

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


## Project Documentation

### For Software:

#### Screenshots (Add at least 3)

![Screenshot1](Add screenshot 1 here with proper name)
*Add caption explaining what this shows*

![Screenshot2](Add screenshot 2 here with proper name)
*Add caption explaining what this shows*

![Screenshot3](Add screenshot 3 here with proper name)
*Add caption explaining what this shows*

#### Diagrams

**System Architecture:**

![Architecture Diagram](docs/architecture.png)
*Explain your system architecture - components, data flow, tech stack interaction*

**Application Workflow:**

![Workflow](docs/workflow.png)
*Add caption explaining your workflow*

---

### For Hardware:

#### Schematic & Circuit

![Circuit](Add your circuit diagram here)
*Add caption explaining connections*

![Schematic](Add your schematic diagram here)
*Add caption explaining the schematic*

#### Build Photos

![Team](Add photo of your team here)

![Components](Add photo of your components here)
*List out all components shown*

![Build](Add photos of build process here)
*Explain the build steps*

![Final](Add photo of final product here)
*Explain the final build*

---

## Additional Documentation

### For Web Projects with Backend:

#### API Documentation

**Base URL:** `https://api.yourproject.com`

##### Endpoints

**GET /api/endpoint**
- **Description:** [What it does]
- **Parameters:**
  - `param1` (string): [Description]
  - `param2` (integer): [Description]
- **Response:**
```json
{
  "status": "success",
  "data": {}
}
```

**POST /api/endpoint**
- **Description:** [What it does]
- **Request Body:**
```json
{
  "field1": "value1",
  "field2": "value2"
}
```
- **Response:**
```json
{
  "status": "success",
  "message": "Operation completed"
}
```

[Add more endpoints as needed...]

---

### For Mobile Apps:

#### App Flow Diagram

![App Flow](docs/app-flow.png)
*Explain the user flow through your application*

#### Installation Guide

**For Android (APK):**
1. Download the APK from [Release Link]
2. Enable "Install from Unknown Sources" in your device settings:
   - Go to Settings > Security
   - Enable "Unknown Sources"
3. Open the downloaded APK file
4. Follow the installation prompts
5. Open the app and enjoy!

**For iOS (IPA) - TestFlight:**
1. Download TestFlight from the App Store
2. Open this TestFlight link: [Your TestFlight Link]
3. Click "Install" or "Accept"
4. Wait for the app to install
5. Open the app from your home screen

**Building from Source:**
```bash
# For Android
flutter build apk
# or
./gradlew assembleDebug

# For iOS
flutter build ios
# or
xcodebuild -workspace App.xcworkspace -scheme App -configuration Debug
```

---

### For Hardware Projects:

#### Bill of Materials (BOM)

| Component | Quantity | Specifications | Price | Link/Source |
|-----------|----------|----------------|-------|-------------|
| Arduino Uno | 1 | ATmega328P, 16MHz | ₹450 | [Link] |
| LED | 5 | Red, 5mm, 20mA | ₹5 each | [Link] |
| Resistor | 5 | 220Ω, 1/4W | ₹1 each | [Link] |
| Breadboard | 1 | 830 points | ₹100 | [Link] |
| Jumper Wires | 20 | Male-to-Male | ₹50 | [Link] |
| [Add more...] | | | | |

**Total Estimated Cost:** ₹[Amount]

#### Assembly Instructions

**Step 1: Prepare Components**
1. Gather all components listed in the BOM
2. Check component specifications
3. Prepare your workspace
![Step 1](images/assembly-step1.jpg)
*Caption: All components laid out*

**Step 2: Build the Power Supply**
1. Connect the power rails on the breadboard
2. Connect Arduino 5V to breadboard positive rail
3. Connect Arduino GND to breadboard negative rail
![Step 2](images/assembly-step2.jpg)
*Caption: Power connections completed*

**Step 3: Add Components**
1. Place LEDs on breadboard
2. Connect resistors in series with LEDs
3. Connect LED cathodes to GND
4. Connect LED anodes to Arduino digital pins (2-6)
![Step 3](images/assembly-step3.jpg)
*Caption: LED circuit assembled*

**Step 4: [Continue for all steps...]**

**Final Assembly:**
![Final Build](images/final-build.jpg)
*Caption: Completed project ready for testing*

---

### For Scripts/CLI Tools:

#### Command Reference

**Basic Usage:**
```bash
python script.py [options] [arguments]
```

**Available Commands:**
- `command1 [args]` - Description of what command1 does
- `command2 [args]` - Description of what command2 does
- `command3 [args]` - Description of what command3 does

**Options:**
- `-h, --help` - Show help message and exit
- `-v, --verbose` - Enable verbose output
- `-o, --output FILE` - Specify output file path
- `-c, --config FILE` - Specify configuration file
- `--version` - Show version information

**Examples:**

```bash
# Example 1: Basic usage
python script.py input.txt

# Example 2: With verbose output
python script.py -v input.txt

# Example 3: Specify output file
python script.py -o output.txt input.txt

# Example 4: Using configuration
python script.py -c config.json --verbose input.txt
```

#### Demo Output

**Example 1: Basic Processing**

**Input:**
```
This is a sample input file
with multiple lines of text
for demonstration purposes
```

**Command:**
```bash
python script.py sample.txt
```

**Output:**
```
Processing: sample.txt
Lines processed: 3
Characters counted: 86
Status: Success
Output saved to: output.txt
```

**Example 2: Advanced Usage**

**Input:**
```json
{
  "name": "test",
  "value": 123
}
```

**Command:**
```bash
python script.py -v --format json data.json
```

**Output:**
```
[VERBOSE] Loading configuration...
[VERBOSE] Parsing JSON input...
[VERBOSE] Processing data...
{
  "status": "success",
  "processed": true,
  "result": {
    "name": "test",
    "value": 123,
    "timestamp": "2024-02-07T10:30:00"
  }
}
[VERBOSE] Operation completed in 0.23s
```

---

## Project Demo

### Video
[Add your demo video link here - YouTube, Google Drive, etc.]

*Explain what the video demonstrates - key features, user flow, technical highlights*

### Additional Demos
[Add any extra demo materials/links - Live site, APK download, online demo, etc.]

---

## AI Tools Used (Optional - For Transparency Bonus)

If you used AI tools during development, document them here for transparency:

**Tool Used:** [e.g., GitHub Copilot, v0.dev, Cursor, ChatGPT, Claude]

**Purpose:** [What you used it for]
- Example: "Generated boilerplate React components"
- Example: "Debugging assistance for async functions"
- Example: "Code review and optimization suggestions"

**Key Prompts Used:**
- "Create a REST API endpoint for user authentication"
- "Debug this async function that's causing race conditions"
- "Optimize this database query for better performance"

**Percentage of AI-generated code:** [Approximately X%]

**Human Contributions:**
- Architecture design and planning
- Custom business logic implementation
- Integration and testing
- UI/UX design decisions

*Note: Proper documentation of AI usage demonstrates transparency and earns bonus points in evaluation!*

---

## Team Contributions

- [Name 1]: [Specific contributions - e.g., Frontend development, API integration, etc.]
- [Name 2]: [Specific contributions - e.g., Backend development, Database design, etc.]
- [Name 3]: [Specific contributions - e.g., UI/UX design, Testing, Documentation, etc.]

---

## License

This project is licensed under the [LICENSE_NAME] License - see the [LICENSE](LICENSE) file for details.

**Common License Options:**
- MIT License (Permissive, widely used)
- Apache 2.0 (Permissive with patent grant)
- GPL v3 (Copyleft, requires derivative works to be open source)

---

Made with ❤️ at TinkerHub
