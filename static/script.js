// ── GET NOTES ──
function getNotesText() {
    return document.getElementById('notes-text').value.trim();
}

// ── SHOW/HIDE LOADER ──
function setLoader(id, show) {
    document.getElementById(id).classList.toggle('show', show);
}

// ── SHOW TOAST ──
function showToast(msg) {
    const t = document.getElementById('toast');
    t.textContent = msg;
    t.classList.add('show');
    setTimeout(() => t.classList.remove('show'), 3000);
}

// ── COPY RESULT ──
function copyResult(id) {
    const text = document.getElementById(id)?.innerText || '';
    navigator.clipboard.writeText(text).then(() => showToast('✓ Copied to clipboard!'));
}

// ── SWITCH TABS ──
function switchTab(name, btn) {
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById('panel-' + name).classList.add('active');
}

// ── ANIMATE NUMBERS ──
function animateNum(id, target) {
    const el = document.getElementById(id);
    const start = parseInt(el.textContent) || 0;
    const duration = 600;
    const startTime = Date.now();
    const update = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        el.textContent = Math.round(start + (target - start) * eased);
        if (progress < 1) requestAnimationFrame(update);
    };
    requestAnimationFrame(update);
}

// ── STATS ──
let stats = { words: 0, mcqs: 0, topics: 0, doubts: 0 };

function updateNotesStats(text) {
    const words = text.trim().split(/\s+/).length;
    stats.words = words;
    animateNum('stat-words', words);
}

// ── FILE UPLOAD ──
function handleFile(input) {
    const file = input.files[0];
    if (!file) return;

    document.getElementById('file-name').textContent = file.name;
    document.getElementById('file-indicator').classList.add('show');

    if (file.type === 'text/plain') {
        const reader = new FileReader();
        reader.onload = e => {
            document.getElementById('notes-text').value = e.target.result;
            updateNotesStats(e.target.result);
        };
        reader.readAsText(file);
    } else if (file.type === 'application/pdf') {
        showToast('📄 Extracting PDF text...');
        uploadPDF(file);
    }
}

async function uploadPDF(file) {
    const formData = new FormData();
    formData.append('file', file);
    try {
        const res = await fetch('/api/upload', {
            method: 'POST',
            body: formData
        });
        const data = await res.json();
        if (data.text) {
            document.getElementById('notes-text').value = data.text;
            updateNotesStats(data.text);
            showToast('✓ PDF text extracted!');
        }
    } catch (e) {
        showToast('❌ Failed to extract PDF text.');
    }
}

// ── DRAG AND DROP ──
const dropZone = document.getElementById('drop-zone');
dropZone.addEventListener('dragover', e => { e.preventDefault(); dropZone.classList.add('drag-over'); });
dropZone.addEventListener('dragleave', () => dropZone.classList.remove('drag-over'));
dropZone.addEventListener('drop', e => {
    e.preventDefault();
    dropZone.classList.remove('drag-over');
    const file = e.dataTransfer.files[0];
    if (file) {
        document.getElementById('file-input').files = e.dataTransfer.files;
        handleFile(document.getElementById('file-input'));
    }
});

// ── SAMPLE NOTES ──
function loadSampleNotes() {
    const sample = `CHAPTER 5: PHOTOSYNTHESIS AND CELLULAR RESPIRATION

Photosynthesis is the biological process by which green plants, algae, and some bacteria convert light energy into chemical energy stored in glucose. The process occurs primarily in the chloroplasts of plant cells.

The overall equation for photosynthesis is:
6CO2 + 6H2O + light energy → C6H12O6 + 6O2

STAGES OF PHOTOSYNTHESIS:

1. Light-Dependent Reactions (Thylakoid Membrane)
   - Occurs in the thylakoid membranes of the chloroplast
   - Light energy is absorbed by chlorophyll (green pigment)
   - Water molecules are split (photolysis): 2H2O → 4H+ + 4e- + O2
   - ATP and NADPH are produced
   - Oxygen is released as a by-product

2. Light-Independent Reactions (Calvin Cycle)
   - Occurs in the stroma of the chloroplast
   - CO2 is fixed using ATP and NADPH from light reactions
   - Produces G3P (glyceraldehyde-3-phosphate) which forms glucose
   - Enzyme RuBisCO catalyses the first step

FACTORS AFFECTING PHOTOSYNTHESIS:
- Light intensity: Increases rate until saturation point
- CO2 concentration: Higher CO2 increases rate
- Temperature: Optimal at 25-35°C, denatures enzymes above 40°C
- Water availability: Essential for photolysis

CELLULAR RESPIRATION:
Aerobic Respiration: C6H12O6 + 6O2 → 6CO2 + 6H2O + 38 ATP
Anaerobic Respiration:
  - In yeast: glucose → ethanol + CO2 + 2 ATP
  - In muscle: glucose → lactic acid + 2 ATP

KEY DEFINITIONS:
- Chlorophyll: Green pigment that absorbs light energy
- Stroma: Fluid-filled space inside chloroplast
- ATP: Adenosine triphosphate — cellular energy currency`;

    document.getElementById('notes-text').value = sample;
    updateNotesStats(sample);
    showToast('📖 Sample Biology notes loaded!');
}

// ── SUMMARY ──
async function generateSummary() {
    const notes = getNotesText();
    if (!notes) { showToast('⚠ Please add your notes first!'); return; }

    const options = {
        bullets: document.getElementById('s-bullets').checked,
        defs: document.getElementById('s-defs').checked,
        short: document.getElementById('s-short').checked
    };

    setLoader('loader-summary', true);

    try {
        const res = await fetch('/api/summary', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ notes, options })
        });
        const data = await res.json();
        document.getElementById('result-content-summary').innerHTML = formatResult(data.result);
        document.getElementById('result-summary').classList.add('show');
        stats.topics = Math.floor(Math.random() * 5) + 3;
        animateNum('stat-topics', stats.topics);
    } catch (e) {
        showToast('❌ Something went wrong. Is Flask running?');
    }

    setLoader('loader-summary', false);
}

// ── MCQ ──
let mcqData = [];
let mcqAnswers = {};

async function generateMCQ() {
    const notes = getNotesText();
    if (!notes) { showToast('⚠ Please add your notes first!'); return; }

    const count = document.getElementById('mcq-count').value;
    const difficulty = document.getElementById('mcq-diff').value;

    setLoader('loader-mcq', true);
    mcqAnswers = {};

    try {
        const res = await fetch('/api/mcq', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ notes, count, difficulty })
        });
        const data = await res.json();
        const clean = data.result.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();
        mcqData = JSON.parse(clean);
        stats.mcqs += mcqData.length;
        animateNum('stat-mcqs', stats.mcqs);
        renderMCQ(mcqData);
        document.getElementById('result-mcq').classList.add('show');
        document.getElementById('score-display').style.display = 'flex';
        updateScore();
    } catch (e) {
        showToast('❌ Failed to generate MCQs. Try again.');
    }

    setLoader('loader-mcq', false);
}

function renderMCQ(questions) {
    const container = document.getElementById('mcq-container');
    container.innerHTML = '';
    questions.forEach((q, qi) => {
        const div = document.createElement('div');
        div.className = 'mcq-item';
        div.innerHTML = `
            <div class="mcq-q"><span>Q${qi + 1}.</span> ${q.q}</div>
            <div class="mcq-options">
                ${q.options.map((opt, oi) => `
                    <div class="mcq-option" id="opt-${qi}-${oi}" onclick="answerMCQ(${qi}, ${oi})">
                        <span class="opt-label">${['A','B','C','D'][oi]}</span>
                        ${opt.replace(/^[A-D]\)\s*/, '')}
                    </div>
                `).join('')}
            </div>
            <div class="mcq-explain" id="explain-${qi}">💡 ${q.explain}</div>
        `;
        container.appendChild(div);
    });
}

function answerMCQ(qi, selected) {
    if (mcqAnswers[qi] !== undefined) return;
    mcqAnswers[qi] = selected;
    const q = mcqData[qi];
    for (let i = 0; i < q.options.length; i++) {
        const el = document.getElementById(`opt-${qi}-${i}`);
        if (i === q.correct) el.classList.add('correct');
        else if (i === selected) el.classList.add('wrong');
        el.style.pointerEvents = 'none';
    }
    document.getElementById(`explain-${qi}`).classList.add('show');
    updateScore();
}

function updateScore() {
    let correct = 0, total = Object.keys(mcqAnswers).length;
    Object.entries(mcqAnswers).forEach(([qi, ans]) => {
        if (mcqData[qi] && ans === mcqData[qi].correct) correct++;
    });
    document.getElementById('score-text').textContent = `${correct}/${total} correct`;
}

// ── ELI5 ──
function setEli5Topic(el) {
    document.getElementById('eli5-input').value = el.textContent;
}

async function generateELI5() {
    const notes = getNotesText();
    const concept = document.getElementById('eli5-input').value.trim();
    if (!concept) { showToast('⚠ Please enter a concept to explain!'); return; }

    setLoader('loader-eli5', true);

    try {
        const res = await fetch('/api/eli5', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ notes, concept })
        });
        const data = await res.json();
        document.getElementById('result-content-eli5').innerHTML = formatResult(data.result);
        document.getElementById('result-eli5').classList.add('show');
    } catch (e) {
        showToast('❌ Something went wrong. Is Flask running?');
    }

    setLoader('loader-eli5', false);
}

// ── EXAM BOOSTER ──
async function generateBooster() {
    const notes = getNotesText();
    if (!notes) { showToast('⚠ Please add your notes first!'); return; }

    setLoader('loader-booster', true);

    try {
        const res = await fetch('/api/booster', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ notes })
        });
        const data = await res.json();
        const clean = data.result.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();
        const boosterData = JSON.parse(clean);
        renderBooster(boosterData);
        document.getElementById('result-booster').classList.add('show');
    } catch (e) {
        showToast('❌ Failed to generate booster. Try again.');
    }

    setLoader('loader-booster', false);
}

function renderBooster(data) {
    const container = document.getElementById('booster-content');
    container.innerHTML = `
        <div class="booster-grid">
            <div class="booster-card hot">
                <div class="booster-card-header">🔥 Hot Topics</div>
                <div class="booster-card-body">
                    <ul style="padding-left:1rem;display:flex;flex-direction:column;gap:0.4rem">
                        ${data.hotTopics.map(t => `<li style="font-size:0.87rem">${t}</li>`).join('')}
                    </ul>
                </div>
            </div>
            <div class="booster-card rust">
                <div class="booster-card-header">✦ 10-Mark Questions</div>
                <div class="booster-card-body">
                    ${data.tenMark.map((q, i) => `<p style="font-size:0.85rem;margin-bottom:0.6rem"><strong>${i+1}.</strong> ${q}</p>`).join('')}
                </div>
            </div>
            <div class="booster-card blue">
                <div class="booster-card-header">● 5-Mark Questions</div>
                <div class="booster-card-body">
                    ${data.fiveMark.map((q, i) => `<p style="font-size:0.85rem;margin-bottom:0.5rem"><strong>${i+1}.</strong> ${q}</p>`).join('')}
                </div>
            </div>
            <div class="booster-card">
                <div class="booster-card-header" style="background:#f3f0e8;color:var(--ink)">◇ 2-Mark Questions</div>
                <div class="booster-card-body">
                    ${data.twoMark.map((q, i) => `<p style="font-size:0.85rem;margin-bottom:0.5rem"><strong>${i+1}.</strong> ${q}</p>`).join('')}
                </div>
            </div>
        </div>
        <div class="revision-sheet">
            <div class="revision-header">
                <span class="revision-title">⚡ Last-Minute Revision Sheet</span>
                <button class="copy-btn" style="color:#998f82;border-color:#444" onclick="copyRevision()">⎘ Copy</button>
            </div>
            <div class="revision-body">
                <div class="revision-section">
                    <h4>Must-Know Points</h4>
                    <ul>
                        ${data.revisionPoints.slice(0, 3).map(p => `<li>${p}</li>`).join('')}
                    </ul>
                </div>
                <div class="revision-section">
                    <h4>Quick Formulas & Equations</h4>
                    <ul>
                        ${data.revisionPoints.slice(3).map(p => `<li>${p}</li>`).join('')}
                    </ul>
                </div>
            </div>
        </div>
    `;
    stats.topics = data.hotTopics.length;
    animateNum('stat-topics', stats.topics);
}

function copyRevision() {
    const text = document.querySelector('.revision-body').innerText;
    navigator.clipboard.writeText(text).then(() => showToast('✓ Revision sheet copied!'));
}

// ── DOUBT SOLVER ──
async function sendDoubt() {
    const input = document.getElementById('doubt-input');
    const question = input.value.trim();
    if (!question) return;

    const notes = getNotesText();
    input.value = '';

    addChatMessage('user', question);
    const thinkId = addChatMessage('bot', '<div class="typing-dots"><span></span><span></span><span></span></div>', true);

    try {
        const res = await fetch('/api/doubt', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ notes, question })
        });
        const data = await res.json();
        document.getElementById(thinkId)?.remove();
        addChatMessage('bot', data.result);
        stats.doubts++;
        animateNum('stat-doubts', stats.doubts);
    } catch (e) {
        document.getElementById(thinkId)?.remove();
        addChatMessage('bot', '❌ Something went wrong. Is Flask running?');
    }

    const chatArea = document.getElementById('chat-area');
    chatArea.scrollTop = chatArea.scrollHeight;
}

function addChatMessage(role, text, isTemp = false) {
    const chatArea = document.getElementById('chat-area');
    const id = 'msg-' + Date.now();
    const div = document.createElement('div');
    div.className = `chat-message ${role}`;
    div.id = id;
    div.innerHTML = `
        <div class="chat-avatar">${role === 'bot' ? 'S' : '👤'}</div>
        <div class="chat-bubble">${text}</div>
    `;
    chatArea.appendChild(div);
    chatArea.scrollTop = chatArea.scrollHeight;
    return id;
}

// ── FORMAT RESULT ──
function formatResult(text) {
    return text
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        .replace(/\*(.*?)\*/g, '<em>$1</em>')
        .replace(/^### (.*$)/gm, '<h3>$1</h3>')
        .replace(/^## (.*$)/gm, '<h3>$1</h3>')
        .replace(/\n\n/g, '<br><br>');
}