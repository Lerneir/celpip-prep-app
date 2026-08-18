/**
 * CELPIP Speaking Simulator Application Engine
 * Handles State, Audio Recording, Timers, IndexedDB, Prompts Bank (Tasks 1, 2, 3, 4), 
 * Scenario Image Lightbox, and AI Evaluation Prompts.
 */

// State Management
const state = {
  currentTask: 1, // 1, 2, 3, 4, or 'combo' (3+4)
  comboSubTask: 3, // 3 or 4 when in combo mode
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
  currentBankTask: 1,
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
  task3Pill: document.getElementById('task3Pill'),
  task4Pill: document.getElementById('task4Pill'),
  taskComboPill: document.getElementById('taskComboPill'),
  modeToggle: document.getElementById('modeToggle'),
  modeLabel: document.getElementById('modeLabel'),
  
  // Scenario Image & Lightbox
  scenarioImageContainer: document.getElementById('scenarioImageContainer'),
  scenarioImg: document.getElementById('scenarioImg'),
  downloadImgBtn: document.getElementById('downloadImgBtn'),
  zoomImgBtn: document.getElementById('zoomImgBtn'),
  lightboxModal: document.getElementById('lightboxModal'),
  lightboxImg: document.getElementById('lightboxImg'),
  lightboxCloseBtn: document.getElementById('lightboxCloseBtn'),

  // Prompt Elements
  categoryTag: document.getElementById('categoryTag'),
  promptIdTag: document.getElementById('promptIdTag'),
  promptTitle: document.getElementById('promptTitle'),
  promptText: document.getElementById('promptText'),
  promptHintsBox: document.getElementById('promptHintsBox'),
  promptHintsTitle: document.getElementById('promptHintsTitle'),
  promptHintsList: document.getElementById('promptHintsList'),
  nextPromptBtn: document.getElementById('nextPromptBtn'),
  randomPromptBtn: document.getElementById('randomPromptBtn'),
  
  // Timer & Controls
  phaseIndicator: document.getElementById('phaseIndicator'),
  timerDisplay: document.getElementById('timerDisplay'),
  timerProgressCircle: document.getElementById('timerProgressCircle'),
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
  bankTask3Tab: document.getElementById('bankTask3Tab'),
  bankTask4Tab: document.getElementById('bankTask4Tab'),
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

  // Task Switch Pills (Tasks 1, 2, 3, 4, Combo 3+4)
  elements.task1Pill.addEventListener('click', () => switchTask(1));
  elements.task2Pill.addEventListener('click', () => switchTask(2));
  elements.task3Pill.addEventListener('click', () => switchTask(3));
  elements.task4Pill.addEventListener('click', () => switchTask(4));
  elements.taskComboPill.addEventListener('click', () => switchTask('combo'));

  // Mode Toggle (Exam vs Practice)
  elements.modeToggle.addEventListener('change', (e) => {
    state.isExamMode = e.target.checked;
    elements.modeLabel.textContent = state.isExamMode ? 'Exam Mode' : 'Practice Mode';
    elements.skipPrepBtn.style.display = state.isExamMode ? 'none' : 'inline-flex';
    
    // Toggle study hints visibility based on Exam Mode
    if (state.currentTask === 3 || state.currentTask === 4 || state.currentTask === 'combo') {
      elements.promptHintsBox.style.display = state.isExamMode ? 'none' : 'block';
    }
    resetTimerState();
  });

  // Image Controls & Lightbox Modal
  elements.zoomImgBtn.addEventListener('click', openLightbox);
  elements.scenarioImg.addEventListener('click', openLightbox);
  elements.lightboxCloseBtn.addEventListener('click', closeLightbox);
  elements.lightboxModal.addEventListener('click', (e) => {
    if (e.target === elements.lightboxModal) closeLightbox();
  });
  elements.downloadImgBtn.addEventListener('click', downloadScenarioImage);

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

  // Prompts Bank Tabs
  elements.bankTask1Tab.addEventListener('click', () => switchBankTab(1));
  elements.bankTask2Tab.addEventListener('click', () => switchBankTab(2));
  elements.bankTask3Tab.addEventListener('click', () => switchBankTab(3));
  elements.bankTask4Tab.addEventListener('click', () => switchBankTab(4));

  elements.bankSearchInput.addEventListener('input', (e) => {
    state.searchQuery = e.target.value.toLowerCase();
    renderPromptsBank();
  });

  elements.bankCategorySelect.addEventListener('change', (e) => {
    state.currentFilterCategory = e.target.value;
    renderPromptsBank();
  });
}

function switchBankTab(taskId) {
  state.currentBankTask = taskId;
  [elements.bankTask1Tab, elements.bankTask2Tab, elements.bankTask3Tab, elements.bankTask4Tab].forEach((tab, idx) => {
    if (idx + 1 === taskId) tab.classList.add('active');
    else tab.classList.remove('active');
  });
  renderPromptsBank(taskId);
}

// Lightbox Modal Controls
function openLightbox() {
  elements.lightboxImg.src = elements.scenarioImg.src;
  elements.lightboxModal.classList.add('active');
}

function closeLightbox() {
  elements.lightboxModal.classList.remove('active');
}

function downloadScenarioImage() {
  const src = elements.scenarioImg.src;
  if (!src) return;
  const ext = '.jpg';
  const a = document.createElement('a');
  a.href = src;
  a.download = `CELPIP_Scenario_${state.currentTask}_${Date.now()}${ext}`;
  a.click();
}

// Switch Task
function switchTask(taskId) {
  state.currentTask = taskId;
  state.comboSubTask = 3;

  [elements.task1Pill, elements.task2Pill, elements.task3Pill, elements.task4Pill, elements.taskComboPill].forEach(pill => pill.classList.remove('active'));
  
  if (taskId === 1) elements.task1Pill.classList.add('active');
  if (taskId === 2) elements.task2Pill.classList.add('active');
  if (taskId === 3) elements.task3Pill.classList.add('active');
  if (taskId === 4) elements.task4Pill.classList.add('active');
  if (taskId === 'combo') elements.taskComboPill.classList.add('active');

  loadPrompt(taskId, 0);
  resetTimerState();
}

// Get Prompts Array by Task ID
function getPromptsArray(taskId) {
  if (taskId === 1) return TASK1_PROMPTS;
  if (taskId === 2) return TASK2_PROMPTS;
  return SCENARIO_PROMPTS; // Tasks 3, 4, and Combo
}

// Load Specific Prompt
function loadPrompt(taskId, index) {
  const prompts = getPromptsArray(taskId);
  if (index >= prompts.length) index = 0;
  
  state.currentPromptIndex = index;
  const p = prompts[index];

  elements.categoryTag.textContent = p.category;

  if (taskId === 1 || taskId === 2) {
    elements.scenarioImageContainer.classList.remove('active');
    elements.promptHintsBox.style.display = 'none';

    elements.promptIdTag.textContent = `Task ${taskId} #${index + 1} / ${prompts.length}`;
    elements.promptTitle.textContent = p.title;
    elements.promptText.textContent = p.prompt;

    state.prepTimeRemaining = 30;
    state.speakTimeRemaining = taskId === 1 ? 90 : 60;
  } else {
    // Tasks 3, 4, or Combo (Image Scenarios)
    elements.scenarioImageContainer.classList.add('active');
    elements.scenarioImg.src = p.imageFile;
    elements.promptHintsBox.style.display = state.isExamMode ? 'none' : 'block';

    if (taskId === 3) {
      elements.promptIdTag.textContent = `Task 3 #${index + 1} / ${prompts.length}`;
      elements.promptTitle.textContent = `Task 3: Describing a Scene - ${p.title}`;
      elements.promptText.textContent = p.task3Prompt;
      elements.promptHintsTitle.textContent = "📍 Study Guidance & Spatial Elements:";
      elements.promptHintsList.innerHTML = p.spatialHints.map(h => `<li>${h}</li>`).join('');
      state.prepTimeRemaining = 30;
      state.speakTimeRemaining = 60;
    } else if (taskId === 4) {
      elements.promptIdTag.textContent = `Task 4 #${index + 1} / ${prompts.length}`;
      elements.promptTitle.textContent = `Task 4: Making Predictions - ${p.title}`;
      elements.promptText.textContent = p.task4Prompt;
      elements.promptHintsTitle.textContent = "🔮 Study Guidance & Logical Predictions:";
      elements.promptHintsList.innerHTML = p.predictionTargets.map(pt => `<li>${pt}</li>`).join('');
      state.prepTimeRemaining = 30;
      state.speakTimeRemaining = 60;
    } else if (taskId === 'combo') {
      const activeSubTask = state.comboSubTask;
      elements.promptIdTag.textContent = `Combo Task 3+4 (#${index + 1}) - Step ${activeSubTask === 3 ? '1 of 2' : '2 of 2'}`;
      elements.promptTitle.textContent = `Combo Exam Flow: ${p.title} (Task ${activeSubTask})`;
      elements.promptText.textContent = activeSubTask === 3 ? p.task3Prompt : p.task4Prompt;
      elements.promptHintsTitle.textContent = activeSubTask === 3 ? "📍 Study Guidance & Spatial Elements:" : "🔮 Study Guidance & Logical Predictions:";
      elements.promptHintsList.innerHTML = (activeSubTask === 3 ? p.spatialHints : p.predictionTargets).map(h => `<li>${h}</li>`).join('');
      state.prepTimeRemaining = 30;
      state.speakTimeRemaining = 60;
    }
  }

  resetTimerState();
}

function nextPrompt() {
  const prompts = getPromptsArray(state.currentTask);
  const nextIdx = (state.currentPromptIndex + 1) % prompts.length;
  loadPrompt(state.currentTask, nextIdx);
}

function getRandomPrompt() {
  const prompts = getPromptsArray(state.currentTask);
  const randIdx = Math.floor(Math.random() * prompts.length);
  loadPrompt(state.currentTask, randIdx);
}

// Timer & Recording Engine
function startPracticeOrExam() {
  if (state.timerState !== 'idle') return;
  
  state.timerState = 'prep';
  state.prepTimeRemaining = 30;
  
  elements.phaseIndicator.textContent = state.currentTask === 'combo' ? `COMBO TASK ${state.comboSubTask}: PREPARATION` : 'PREPARATION TIME';
  elements.phaseIndicator.className = 'phase-indicator prep';
  elements.startTimerBtn.style.display = 'none';
  elements.resetBtn.style.display = 'inline-flex';
  
  if (!state.isExamMode) {
    elements.skipPrepBtn.style.display = 'inline-flex';
  }

  playBeep(523.25, 'sine', 0.3);

  state.timerInterval = setInterval(() => {
    state.prepTimeRemaining--;
    updateTimerDisplay(state.prepTimeRemaining);

    if (state.prepTimeRemaining <= 5 && state.prepTimeRemaining > 0) {
      playBeep(440, 'sine', 0.1);
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
  state.speakTimeRemaining = (state.currentTask === 1) ? 90 : 60;
  
  elements.phaseIndicator.textContent = state.currentTask === 'combo' ? `COMBO TASK ${state.comboSubTask}: SPEAKING & RECORDING...` : 'SPEAKING & RECORDING...';
  elements.phaseIndicator.className = 'phase-indicator speaking';
  elements.skipPrepBtn.style.display = 'none';
  elements.stopRecordBtn.style.display = 'inline-flex';

  playBeep(880, 'sine', 0.5);

  // Start Mic Recording
  startRecordingMic();

  state.timerInterval = setInterval(() => {
    state.speakTimeRemaining--;
    updateTimerDisplay(state.speakTimeRemaining);

    if (state.speakTimeRemaining === 10) {
      playBeep(659.25, 'sine', 0.3);
    }

    if (state.speakTimeRemaining <= 0) {
      finishRecording();
    }
  }, 1000);
}

function finishRecording() {
  if (state.timerInterval) clearInterval(state.timerInterval);
  state.timerState = 'finished';

  playBeep(349.23, 'triangle', 0.6);

  elements.phaseIndicator.textContent = 'TASK COMPLETED';
  elements.phaseIndicator.className = 'phase-indicator finished';
  elements.stopRecordBtn.style.display = 'none';

  stopRecordingMic();

  // If in Combo 3+4 mode and just finished Task 3, prompt for Task 4
  if (state.currentTask === 'combo' && state.comboSubTask === 3) {
    setTimeout(() => {
      showToast('Task 3 complete! Preparing Task 4 (Make Predictions) with the same picture...');
      state.comboSubTask = 4;
      loadPrompt('combo', state.currentPromptIndex);
    }, 2500);
  }
}

function resetTimerState() {
  if (state.timerInterval) clearInterval(state.timerInterval);
  if (state.mediaRecorder && state.mediaRecorder.state !== 'inactive') {
    state.mediaRecorder.stop();
  }

  state.timerState = 'idle';
  state.prepTimeRemaining = 30;
  state.speakTimeRemaining = (state.currentTask === 1) ? 90 : 60;
  
  updateTimerDisplay(state.isExamMode ? 30 : state.speakTimeRemaining);
  
  elements.phaseIndicator.textContent = 'READY TO START';
  elements.phaseIndicator.className = 'phase-indicator';
  elements.startTimerBtn.style.display = 'inline-flex';
  elements.skipPrepBtn.style.display = 'none';
  elements.stopRecordBtn.style.display = 'none';
  elements.resetBtn.style.display = 'none';
  elements.playbackCard.classList.remove('active');
  
  clearCanvas();
}

function updateTimerDisplay(seconds) {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  elements.timerDisplay.textContent = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;

  if (elements.timerProgressCircle) {
    const radius = 52;
    const circumference = 2 * Math.PI * radius;
    elements.timerProgressCircle.style.strokeDasharray = `${circumference}`;

    let totalSeconds = 30;
    if (state.timerState === 'prep') {
      totalSeconds = 30;
      elements.timerProgressCircle.style.stroke = "url(#timerPrepGrad)";
    } else if (state.timerState === 'speaking') {
      totalSeconds = (state.currentTask === 1) ? 90 : 60;
      elements.timerProgressCircle.style.stroke = "url(#timerSpeakGrad)";
    } else {
      totalSeconds = state.isExamMode ? 30 : ((state.currentTask === 1) ? 90 : 60);
      elements.timerProgressCircle.style.stroke = "url(#timerIdleGrad)";
    }

    const progressRatio = Math.max(0, Math.min(1, seconds / totalSeconds));
    const offset = circumference * (1 - progressRatio);
    elements.timerProgressCircle.style.strokeDashoffset = `${offset}`;
  }
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
      
      stream.getTracks().forEach(track => track.stop());

      // Save to IndexedDB
      saveRecordingToDB();
    };

    state.mediaRecorder.start();

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
  
  const prompts = getPromptsArray(state.currentTask);
  const currentPrompt = prompts[state.currentPromptIndex];

  const actualTaskId = state.currentTask === 'combo' ? `Combo (Task ${state.comboSubTask})` : state.currentTask;

  const record = {
    taskId: actualTaskId,
    promptTitle: currentPrompt.title,
    category: currentPrompt.category,
    timestamp: new Date().toISOString(),
    durationSeconds: (state.currentTask === 1) ? 90 : 60,
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

// AI Evaluation Prompt Generator (Tailored for Tasks 1, 2, 3, and 4)
function copyAiEvaluationPrompt() {
  const activeTask = state.currentTask === 'combo' ? state.comboSubTask : state.currentTask;
  const prompts = getPromptsArray(activeTask);
  const currentPrompt = prompts[state.currentPromptIndex];

  let taskCriteriaDetails = "";
  if (activeTask === 3) {
    taskCriteriaDetails = `SPECIAL CRITERIA FOR TASK 3 (Describing a Scene):
- Evaluates spatial location prepositions (e.g., 'in the foreground', 'on the left', 'in the top right corner', 'next to').
- Evaluates present continuous verb tenses ('is riding', 'are talking', 'is standing').
- Evaluates scene completeness and visual detail accuracy.`;
  } else if (activeTask === 4) {
    taskCriteriaDetails = `SPECIAL CRITERIA FOR TASK 4 (Making Predictions):
- Evaluates future verb tenses and modal verbs ('will', 'is going to', 'might', 'is about to').
- Evaluates logical reasoning connecting the current picture scene to future outcomes.`;
  } else {
    taskCriteriaDetails = `SPECIAL CRITERIA FOR TASK ${activeTask}:
- Tone, coherence, and structure appropriate for CELPIP Task ${activeTask}.`;
  }

  const evalPromptText = `Act as an expert official CELPIP Speaking Examiner and English Language Coach. Evaluate my response to the following CELPIP Speaking Task:

---
TASK OVERVIEW:
Task Type: CELPIP Speaking Task ${activeTask} (${activeTask === 1 ? 'Giving Advice' : activeTask === 2 ? 'Personal Experience' : activeTask === 3 ? 'Describing a Scene' : 'Making Predictions'})
Scenario Title: "${currentPrompt.title}"
Category: ${currentPrompt.category}
Official Prompt Text: "${activeTask === 3 ? currentPrompt.task3Prompt : activeTask === 4 ? currentPrompt.task4Prompt : currentPrompt.prompt}"
Allowed Response Time: ${activeTask === 1 ? '90 seconds' : '60 seconds'}
---

${taskCriteriaDetails}

Please evaluate my spoken response against the 4 official CELPIP Speaking Criteria:
1. CONTENT & COHERENCE (Score out of 12)
2. VOCABULARY & SPATIAL PREPOSITIONS (Score out of 12)
3. LISTENABILITY & GRAMMAR (Score out of 12)
4. TASK FULFILLMENT & TIME MANAGEMENT (Score out of 12)

OUTPUT FORMAT REQUIRED:
- Overall Estimated CELPIP Level (1 to 12)
- Score breakdown for each of the 4 criteria
- Key Strengths
- Constructive Feedback & Specific Grammar/Vocabulary Suggestions
- An Improved Sample Spoken Answer tailored to this exact scenario.

[ATTACH YOUR AUDIO FILE OR PASTE YOUR TRANSCRIPT HERE]`;

  navigator.clipboard.writeText(evalPromptText).then(() => {
    showToast('CELPIP Evaluation Prompt copied to clipboard! Paste it into ChatGPT / Gemini / Claude web chat.');
  }).catch(() => {
    showToast('Failed to copy. Please allow clipboard permissions.');
  });
}

// Prompts Bank Render & Filtering
function populateCategoryFilter() {
  const allPrompts = [...TASK1_PROMPTS, ...TASK2_PROMPTS, ...SCENARIO_PROMPTS];
  const categories = [...new Set(allPrompts.map(p => p.category))];
  
  elements.bankCategorySelect.innerHTML = `<option value="all">All Categories</option>` +
    categories.map(c => `<option value="${c}">${c}</option>`).join('');
}

function renderPromptsBank(taskFilter) {
  let taskId = taskFilter || state.currentBankTask;
  let prompts = getPromptsArray(taskId);

  if (state.currentFilterCategory !== 'all') {
    prompts = prompts.filter(p => p.category === state.currentFilterCategory);
  }

  if (state.searchQuery) {
    prompts = prompts.filter(p => 
      p.title.toLowerCase().includes(state.searchQuery) ||
      (p.prompt && p.prompt.toLowerCase().includes(state.searchQuery)) ||
      (p.task3Prompt && p.task3Prompt.toLowerCase().includes(state.searchQuery)) ||
      p.category.toLowerCase().includes(state.searchQuery)
    );
  }

  elements.promptsGrid.innerHTML = prompts.map((p, idx) => {
    const promptText = taskId === 3 ? p.task3Prompt : taskId === 4 ? p.task4Prompt : p.prompt;
    const imgHtml = (taskId === 3 || taskId === 4) ? `<img src="${p.imageFile}" style="width:100%; height:130px; object-fit:cover; border-radius:8px; margin:0.5rem 0;" onerror="this.style.display='none'" />` : '';

    return `
      <div class="prompt-item-card">
        <div>
          <div class="prompt-meta">
            <span class="category-tag">${p.category}</span>
            <span class="prompt-id-tag">Task ${taskId} #${idx + 1}</span>
          </div>
          <h4 style="color:#fff; font-size:1.05rem; font-family:var(--font-heading); margin:0.4rem 0;">${p.title}</h4>
          ${imgHtml}
          <p style="color:var(--text-muted); font-size:0.85rem; line-height:1.4;">${promptText}</p>
        </div>
        <div style="margin-top:1rem;">
          <button class="btn-primary" style="width:100%; justify-content:center; padding:0.55rem;" onclick="selectPromptToPractice(${taskId}, ${idx})">
            🎯 Practice Task ${taskId}
          </button>
        </div>
      </div>
    `;
  }).join('');
}

window.selectPromptToPractice = function(taskId, index) {
  switchTask(taskId);
  loadPrompt(taskId, index);
  
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
