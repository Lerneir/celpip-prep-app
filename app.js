/**
 * CELPIP Speaking Simulator Application Engine
 * Handles State, Audio Recording, Timers, IndexedDB, Prompt Banks, and AI Evaluation Prompts.
 */

// State Management
const state = {
  currentTask: 1, // 1 or 2
  currentPromptIndex: 0,
  isExamMode: true,
  timerState: 'idle', // 'idle' | 'prep' | 'speaking' | 'finished'
  prepTimeRemaining: 30,
  speakTimeRemaining: 90,
  timerInterval: null,
  
  // Audio Recorder State
  mediaRecorder: null,
  audioChunks: [],
  recordedAudioBlob: null,
  recordedAudioUrl: null,
  audioContext: null,
  analyser: null,
  animationFrameId: null,
  
  // History & Filters
  currentFilterCategory: 'all',
  searchQuery: ''
};

// Database Initialization (IndexedDB)
let db = null;
const DB_NAME = 'CELPIP_Speaking_Simulator_DB';
const DB_VERSION = 1;
const STORE_NAME = 'recordings';

function initDB() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION);
    request.onupgradeneeded = (e) => {
      const database = e.target.result;
      if (!database.objectStoreNames.contains(STORE_NAME)) {
        const store = database.createObjectStore(STORE_NAME, { keyPath: 'id', autoIncrement: true });
        store.createIndex('timestamp', 'timestamp', { unique: false });
        store.createIndex('taskId', 'taskId', { unique: false });
      }
    };
    request.onsuccess = (e) => {
      db = e.target.result;
      resolve(db);
    };
    request.onerror = (e) => {
      console.error('IndexedDB Error:', e.target.error);
      reject(e.target.error);
    };
  });
}

// Web Audio API Beep Generator (Sound Cues)
function playBeep(freq = 600, type = 'sine', duration = 0.25) {
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    
    osc.type = type;
    osc.frequency.setValueAtTime(freq, ctx.currentTime);
    gain.gain.setValueAtTime(0.15, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);
    
    osc.connect(gain);
    gain.connect(ctx.destination);
    
    osc.start();
    osc.stop(ctx.currentTime + duration);
  } catch (err) {
    console.warn('Audio Beep unavailable:', err);
  }
}

// DOM Elements Cache
const elements = {
  // Navigation
  navButtons: document.querySelectorAll('.nav-btn'),
  viewSections: document.querySelectorAll('.view-section'),
  
  // Task Pills & Switches
  task1Pill: document.getElementById('task1Pill'),
  task2Pill: document.getElementById('task2Pill'),
  modeToggle: document.getElementById('modeToggle'),
  modeLabel: document.getElementById('modeLabel'),
  
  // Prompt Elements
  categoryTag: document.getElementById('categoryTag'),
  promptIdTag: document.getElementById('promptIdTag'),
  promptTitle: document.getElementById('promptTitle'),
  promptText: document.getElementById('promptText'),
  nextPromptBtn: document.getElementById('nextPromptBtn'),
  randomPromptBtn: document.getElementById('randomPromptBtn'),
  
  // Timer & Controls
  phaseIndicator: document.getElementById('phaseIndicator'),
  timerDisplay: document.getElementById('timerDisplay'),
  waveformCanvas: document.getElementById('waveformCanvas'),
  startTimerBtn: document.getElementById('startTimerBtn'),
  skipPrepBtn: document.getElementById('skipPrepBtn'),
  stopRecordBtn: document.getElementById('stopRecordBtn'),
  resetBtn: document.getElementById('resetBtn'),
  
  // Recording Playback
  playbackCard: document.getElementById('playbackCard'),
  audioPlayback: document.getElementById('audioPlayback'),
  downloadAudioBtn: document.getElementById('downloadAudioBtn'),
  copyAiPromptBtn: document.getElementById('copyAiPromptBtn'),
  
  // Prompts Bank
  bankTask1Tab: document.getElementById('bankTask1Tab'),
  bankTask2Tab: document.getElementById('bankTask2Tab'),
  bankSearchInput: document.getElementById('bankSearchInput'),
  bankCategorySelect: document.getElementById('bankCategorySelect'),
  promptsGrid: document.getElementById('promptsGrid'),
  
  // History View
  historyList: document.getElementById('historyList'),
  historyEmpty: document.getElementById('historyEmpty')
};

// Initialize App
document.addEventListener('DOMContentLoaded', async () => {
  try {
    await initDB();
  } catch (err) {
    console.warn('Failed to init IndexedDB', err);
  }
  
  setupEventListeners();
  loadPrompt(1, 0);
  populateCategoryFilter();
  renderHistory();
});

// Event Listeners Setup
function setupEventListeners() {
  // Navigation Tabs
  elements.navButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetView = btn.dataset.view;
      elements.navButtons.forEach(b => b.classList.remove('active'));
      elements.viewSections.forEach(s => s.classList.remove('active'));
      
      btn.classList.add('active');
      document.getElementById(targetView).classList.add('active');
      
      if (targetView === 'bankView') renderPromptsBank();
      if (targetView === 'historyView') renderHistory();
    });
  });

  // Task Switch Pills
  elements.task1Pill.addEventListener('click', () => switchTask(1));
  elements.task2Pill.addEventListener('click', () => switchTask(2));

  // Mode Toggle (Exam vs Practice)
  elements.modeToggle.addEventListener('change', (e) => {
    state.isExamMode = e.target.checked;
    elements.modeLabel.textContent = state.isExamMode ? 'Exam Mode' : 'Practice Mode';
    elements.skipPrepBtn.style.display = state.isExamMode ? 'none' : 'inline-flex';
    resetTimerState();
  });

  // Prompt Buttons
  elements.nextPromptBtn.addEventListener('click', () => nextPrompt());
  elements.randomPromptBtn.addEventListener('click', () => getRandomPrompt());

  // Timer Controls
  elements.startTimerBtn.addEventListener('click', () => startPracticeOrExam());
  elements.skipPrepBtn.addEventListener('click', () => startSpeakingPhase());
  elements.stopRecordBtn.addEventListener('click', () => finishRecording());
  elements.resetBtn.addEventListener('click', () => resetTimerState());

  // Audio Playback & AI Eval
  elements.downloadAudioBtn.addEventListener('click', () => downloadAudio());
  elements.copyAiPromptBtn.addEventListener('click', () => copyAiEvaluationPrompt());

  // Prompts Bank Filter Listeners
  elements.bankTask1Tab.addEventListener('click', () => {
    elements.bankTask1Tab.classList.add('active');
    elements.bankTask2Tab.classList.remove('active');
    renderPromptsBank(1);
  });
  elements.bankTask2Tab.addEventListener('click', () => {
    elements.bankTask2Tab.classList.add('active');
    elements.bankTask1Tab.classList.remove('active');
    renderPromptsBank(2);
  });

  elements.bankSearchInput.addEventListener('input', (e) => {
    state.searchQuery = e.target.value.toLowerCase();
    renderPromptsBank();
  });

  elements.bankCategorySelect.addEventListener('change', (e) => {
    state.currentFilterCategory = e.target.value;
    renderPromptsBank();
  });
}

// Switch Task 1 vs Task 2
function switchTask(taskId) {
  state.currentTask = taskId;
  if (taskId === 1) {
    elements.task1Pill.classList.add('active');
    elements.task2Pill.classList.remove('active');
  } else {
    elements.task2Pill.classList.add('active');
    elements.task1Pill.classList.remove('active');
  }
  loadPrompt(taskId, 0);
  resetTimerState();
}

// Load Specific Prompt
function loadPrompt(taskId, index) {
  const prompts = taskId === 1 ? TASK1_PROMPTS : TASK2_PROMPTS;
  if (index >= prompts.length) index = 0;
  
  state.currentTask = taskId;
  state.currentPromptIndex = index;
  
  const p = prompts[index];
  elements.categoryTag.textContent = p.category;
  elements.promptIdTag.textContent = `Task ${taskId} #${index + 1} / ${prompts.length}`;
  elements.promptTitle.textContent = p.title;
  elements.promptText.textContent = p.prompt;

  // Set default times according to CELPIP standard
  state.prepTimeRemaining = 30;
  state.speakTimeRemaining = taskId === 1 ? 90 : 60;
  
  resetTimerState();
}

function nextPrompt() {
  const prompts = state.currentTask === 1 ? TASK1_PROMPTS : TASK2_PROMPTS;
  const nextIdx = (state.currentPromptIndex + 1) % prompts.length;
  loadPrompt(state.currentTask, nextIdx);
}

function getRandomPrompt() {
  const prompts = state.currentTask === 1 ? TASK1_PROMPTS : TASK2_PROMPTS;
  const randIdx = Math.floor(Math.random() * prompts.length);
  loadPrompt(state.currentTask, randIdx);
}

// Timer & Recording Engine
function startPracticeOrExam() {
  if (state.timerState !== 'idle') return;
  
  // Phase 1: Preparation
  state.timerState = 'prep';
  state.prepTimeRemaining = 30;
  
  elements.phaseIndicator.textContent = 'PREPARATION TIME';
  elements.phaseIndicator.className = 'phase-indicator prep';
  elements.startTimerBtn.style.display = 'none';
  elements.resetBtn.style.display = 'inline-flex';
  
  if (!state.isExamMode) {
    elements.skipPrepBtn.style.display = 'inline-flex';
  }

  playBeep(523.25, 'sine', 0.3); // High C start prep chime

  state.timerInterval = setInterval(() => {
    state.prepTimeRemaining--;
    updateTimerDisplay(state.prepTimeRemaining);

    if (state.prepTimeRemaining <= 5 && state.prepTimeRemaining > 0) {
      playBeep(440, 'sine', 0.1); // Countdown warning tick
    }

    if (state.prepTimeRemaining <= 0) {
      clearInterval(state.timerInterval);
      startSpeakingPhase();
    }
  }, 1000);
}

function startSpeakingPhase() {
  if (state.timerInterval) clearInterval(state.timerInterval);
  
  state.timerState = 'speaking';
  state.speakTimeRemaining = state.currentTask === 1 ? 90 : 60;
  
  elements.phaseIndicator.textContent = 'SPEAKING & RECORDING...';
  elements.phaseIndicator.className = 'phase-indicator speaking';
  elements.skipPrepBtn.style.display = 'none';
  elements.stopRecordBtn.style.display = 'inline-flex';

  playBeep(880, 'sine', 0.5); // Start speaking beep

  // Start Mic Recording
  startRecordingMic();

  state.timerInterval = setInterval(() => {
    state.speakTimeRemaining--;
    updateTimerDisplay(state.speakTimeRemaining);

    if (state.speakTimeRemaining === 10) {
      playBeep(659.25, 'sine', 0.3); // 10 seconds left alert
    }

    if (state.speakTimeRemaining <= 0) {
      finishRecording();
    }
  }, 1000);
}

function finishRecording() {
  if (state.timerInterval) clearInterval(state.timerInterval);
  state.timerState = 'finished';

  playBeep(349.23, 'triangle', 0.6); // Finish chime

  elements.phaseIndicator.textContent = 'TASK COMPLETED';
  elements.phaseIndicator.className = 'phase-indicator finished';
  elements.stopRecordBtn.style.display = 'none';

  stopRecordingMic();
}

function resetTimerState() {
  if (state.timerInterval) clearInterval(state.timerInterval);
  if (state.mediaRecorder && state.mediaRecorder.state !== 'inactive') {
    state.mediaRecorder.stop();
  }

  state.timerState = 'idle';
  state.prepTimeRemaining = 30;
  state.speakTimeRemaining = state.currentTask === 1 ? 90 : 60;
  
  updateTimerDisplay(state.isExamMode ? 30 : state.speakTimeRemaining);
  
  elements.phaseIndicator.textContent = 'READY TO START';
  elements.phaseIndicator.className = 'phase-indicator';
  elements.startTimerBtn.style.display = 'inline-flex';
  elements.skipPrepBtn.style.display = 'none';
  elements.stopRecordBtn.style.display = 'none';
  elements.resetBtn.style.display = 'none';
  elements.playbackCard.classList.remove('active');
  
  // Clear Canvas Waveform
  clearCanvas();
}

function updateTimerDisplay(seconds) {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  elements.timerDisplay.textContent = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

// MediaRecorder Audio & Waveform Canvas
async function startRecordingMic() {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    state.audioChunks = [];
    state.mediaRecorder = new MediaRecorder(stream);
    
    state.mediaRecorder.ondataavailable = (e) => {
      if (e.data.size > 0) state.audioChunks.push(e.data);
    };

    state.mediaRecorder.onstop = () => {
      state.recordedAudioBlob = new Blob(state.audioChunks, { type: 'audio/webm' });
      state.recordedAudioUrl = URL.createObjectURL(state.recordedAudioBlob);
      elements.audioPlayback.src = state.recordedAudioUrl;
      elements.playbackCard.classList.add('active');
      
      // Stop all mic audio tracks
      stream.getTracks().forEach(track => track.stop());

      // Save to IndexedDB
      saveRecordingToDB();
    };

    state.mediaRecorder.start();

    // Set up Waveform Canvas Visualization
    visualizeAudio(stream);
  } catch (err) {
    showToast('Microphone access required to record speaking response!');
    console.error('Mic Access Error:', err);
  }
}

function stopRecordingMic() {
  if (state.mediaRecorder && state.mediaRecorder.state !== 'inactive') {
    state.mediaRecorder.stop();
  }
  if (state.animationFrameId) {
    cancelAnimationFrame(state.animationFrameId);
  }
}

function visualizeAudio(stream) {
  const canvas = elements.waveformCanvas;
  const ctx = canvas.getContext('2d');
  
  const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  const source = audioCtx.createMediaStreamSource(stream);
  const analyser = audioCtx.createAnalyser();
  analyser.fftSize = 64;
  source.connect(analyser);
  
  const bufferLength = analyser.frequencyBinCount;
  const dataArray = new Uint8Array(bufferLength);
  
  function draw() {
    state.animationFrameId = requestAnimationFrame(draw);
    analyser.getByteFrequencyData(dataArray);
    
    ctx.fillStyle = 'rgba(15, 23, 42, 0.4)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    const barWidth = (canvas.width / bufferLength) * 2.2;
    let x = 0;
    
    for (let i = 0; i < bufferLength; i++) {
      const barHeight = (dataArray[i] / 255) * canvas.height;
      const gradient = ctx.createLinearGradient(0, canvas.height, 0, 0);
      gradient.addColorStop(0, '#6366f1');
      gradient.addColorStop(1, '#10b981');
      
      ctx.fillStyle = gradient;
      ctx.fillRect(x, canvas.height - barHeight, barWidth - 2, barHeight);
      x += barWidth;
    }
  }
  draw();
}

function clearCanvas() {
  const canvas = elements.waveformCanvas;
  const ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

// IndexedDB Storage Functions
async function saveRecordingToDB() {
  if (!db || !state.recordedAudioBlob) return;
  
  const prompts = state.currentTask === 1 ? TASK1_PROMPTS : TASK2_PROMPTS;
  const currentPrompt = prompts[state.currentPromptIndex];

  const record = {
    taskId: state.currentTask,
    promptTitle: currentPrompt.title,
    category: currentPrompt.category,
    timestamp: new Date().toISOString(),
    durationSeconds: state.currentTask === 1 ? 90 : 60,
    audioBlob: state.recordedAudioBlob
  };

  const tx = db.transaction(STORE_NAME, 'readwrite');
  const store = tx.objectStore(STORE_NAME);
  store.add(record);
  tx.oncomplete = () => {
    showToast('Practice recording saved to local history!');
  };
}

async function renderHistory() {
  if (!db) return;
  const tx = db.transaction(STORE_NAME, 'readonly');
  const store = tx.objectStore(STORE_NAME);
  const request = store.getAll();

  request.onsuccess = () => {
    const items = request.result || [];
    if (items.length === 0) {
      elements.historyEmpty.style.display = 'block';
      elements.historyList.innerHTML = '';
      return;
    }
    
    elements.historyEmpty.style.display = 'none';
    items.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));

    elements.historyList.innerHTML = items.map(item => {
      const dateStr = new Date(item.timestamp).toLocaleString();
      return `
        <div class="history-item">
          <div class="history-info">
            <h4>Task ${item.taskId}: ${item.promptTitle}</h4>
            <p><span class="category-tag">${item.category}</span> • Completed on ${dateStr}</p>
          </div>
          <div class="history-actions">
            <button class="btn-secondary" onclick="playHistoryAudio(${item.id})">▶ Play</button>
            <button class="btn-secondary" onclick="deleteHistoryRecord(${item.id})">🗑 Delete</button>
          </div>
        </div>
      `;
    }).join('');
  };
}

window.playHistoryAudio = function(id) {
  const tx = db.transaction(STORE_NAME, 'readonly');
  const store = tx.objectStore(STORE_NAME);
  const req = store.get(id);
  req.onsuccess = () => {
    const rec = req.result;
    if (rec && rec.audioBlob) {
      const url = URL.createObjectURL(rec.audioBlob);
      const a = new Audio(url);
      a.play();
    }
  };
};

window.deleteHistoryRecord = function(id) {
  const tx = db.transaction(STORE_NAME, 'readwrite');
  const store = tx.objectStore(STORE_NAME);
  store.delete(id);
  tx.oncomplete = () => {
    showToast('Record deleted');
    renderHistory();
  };
};

// Download Recording
function downloadAudio() {
  if (!state.recordedAudioUrl) return;
  const a = document.createElement('a');
  a.href = state.recordedAudioUrl;
  a.download = `CELPIP_Task${state.currentTask}_${Date.now()}.webm`;
  a.click();
}

// AI Evaluation Prompt Generator (Official CELPIP Rubric Criteria)
function copyAiEvaluationPrompt() {
  const prompts = state.currentTask === 1 ? TASK1_PROMPTS : TASK2_PROMPTS;
  const currentPrompt = prompts[state.currentPromptIndex];

  const evalPromptText = `Act as an expert official CELPIP Speaking Examiner and English Language Coach. Evaluate my response to the following CELPIP Speaking Task:

---
TASK OVERVIEW:
Task Type: CELPIP Speaking Task ${state.currentTask} (${state.currentTask === 1 ? 'Giving Advice' : 'Talking about a Personal Experience'})
Prompt Title: "${currentPrompt.title}"
Category: ${currentPrompt.category}
Official Prompt Description: "${currentPrompt.prompt}"
Allowed Response Time: ${state.currentTask === 1 ? '90 seconds' : '60 seconds'}
---

Please evaluate my spoken response (attached audio or transcribed text below) against the 4 official CELPIP Speaking Criteria:

1. CONTENT & COHERENCE (Score out of 12):
   - Were all parts of the prompt fulfilled?
   - Was the structure logical with clear transitions (e.g. intro, body points, conclusion)?
   - Were ideas well-developed with realistic examples and details?

2. VOCABULARY (Score out of 12):
   - Precision, range, and accuracy of words used.
   - Use of natural collocations, idiomatic expressions, and task-appropriate vocabulary.

3. LISTENABILITY (Score out of 12):
   - Pronunciation clarity, rhythm, intonation, and stress patterns.
   - Flow and pacing (minimizing excessive pauses, filler words like 'um', 'ah').
   - Grammatical accuracy and sentence structure variety.

4. TASK FULFILLMENT (Score out of 12):
   - Tone appropriateness (e.g. friendly and advice-oriented for Task 1; narrative/engaging for Task 2).
   - Time management (did the response fit nicely within the time limit?).

OUTPUT FORMAT REQUIRED:
- Overall Estimated CELPIP Level (1 to 12)
- Score breakdown for each of the 4 criteria
- Key Strengths
- Constructive Feedback & Weak Areas
- An Improved Sample Answer tailored to this exact prompt.

[ATTACH YOUR AUDIO FILE OR PASTE YOUR TRANSCRIPT HERE]`;

  navigator.clipboard.writeText(evalPromptText).then(() => {
    showToast('CELPIP Evaluation Prompt copied to clipboard! Paste it into ChatGPT / Gemini / Claude web chat.');
  }).catch(() => {
    showToast('Failed to copy. Please allow clipboard permissions.');
  });
}

// Prompts Bank Render & Filtering
function populateCategoryFilter() {
  const allPrompts = [...TASK1_PROMPTS, ...TASK2_PROMPTS];
  const categories = [...new Set(allPrompts.map(p => p.category))];
  
  elements.bankCategorySelect.innerHTML = `<option value="all">All Categories</option>` +
    categories.map(c => `<option value="${c}">${c}</option>`).join('');
}

function renderPromptsBank(taskFilter) {
  let taskId = taskFilter || (elements.bankTask1Tab.classList.contains('active') ? 1 : 2);
  let prompts = taskId === 1 ? TASK1_PROMPTS : TASK2_PROMPTS;

  if (state.currentFilterCategory !== 'all') {
    prompts = prompts.filter(p => p.category === state.currentFilterCategory);
  }

  if (state.searchQuery) {
    prompts = prompts.filter(p => 
      p.title.toLowerCase().includes(state.searchQuery) ||
      p.prompt.toLowerCase().includes(state.searchQuery) ||
      p.category.toLowerCase().includes(state.searchQuery)
    );
  }

  elements.promptsGrid.innerHTML = prompts.map((p, idx) => `
    <div class="prompt-item-card">
      <div>
        <div class="prompt-meta">
          <span class="category-tag">${p.category}</span>
          <span class="prompt-id-tag">Task ${taskId} #${idx + 1}</span>
        </div>
        <h4 style="color:#fff; font-size:1.1rem; font-family:var(--font-heading); margin:0.5rem 0;">${p.title}</h4>
        <p style="color:var(--text-muted); font-size:0.9rem; line-height:1.45;">${p.prompt}</p>
      </div>
      <div style="margin-top:1rem;">
        <button class="btn-primary" style="width:100%; justify-content:center; padding:0.6rem;" onclick="selectPromptToPractice(${taskId}, ${TASK1_PROMPTS.indexOf(p) !== -1 ? TASK1_PROMPTS.indexOf(p) : TASK2_PROMPTS.indexOf(p)})">
          🎯 Practice This Prompt
        </button>
      </div>
    </div>
  `).join('');
}

window.selectPromptToPractice = function(taskId, index) {
  switchTask(taskId);
  loadPrompt(taskId, index);
  
  // Switch view to practice simulator
  elements.navButtons.forEach(b => b.classList.remove('active'));
  elements.viewSections.forEach(s => s.classList.remove('active'));
  
  elements.navButtons[0].classList.add('active');
  document.getElementById('simulatorView').classList.add('active');
};

// Toast Notifications Helper
function showToast(msg) {
  const container = document.getElementById('toastContainer');
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = msg;
  container.appendChild(toast);

  setTimeout(() => {
    toast.remove();
  }, 4000);
}
