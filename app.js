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
  isPrepEnabled: true,
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
  
  // Speech Transcription & Analysis State
  speechRecognition: null,
  liveTranscript: '',
  recordingStartTime: null,
  
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
  prepTimeToggle: document.getElementById('prepTimeToggle'),
  prepTimeLabel: document.getElementById('prepTimeLabel'),
  
  // Scenario Image & Lightbox
  scenarioImageContainer: document.getElementById('scenarioImageContainer'),
  scenarioImg: document.getElementById('scenarioImg'),
  copyImgBtn: document.getElementById('copyImgBtn'),
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
  waveformContainer: document.getElementById('waveformContainer'),
  waveformCanvas: document.getElementById('waveformCanvas'),
  startTimerBtn: document.getElementById('startTimerBtn'),
  skipPrepBtn: document.getElementById('skipPrepBtn'),
  stopRecordBtn: document.getElementById('stopRecordBtn'),
  resetBtn: document.getElementById('resetBtn'),
  
  // Speech Transcription & Analysis Elements
  liveCaptionBox: document.getElementById('liveCaptionBox'),
  liveCaptionText: document.getElementById('liveCaptionText'),
  transcriptAnalysisCard: document.getElementById('transcriptAnalysisCard'),
  metricWpm: document.getElementById('metricWpm'),
  metricWordCount: document.getElementById('metricWordCount'),
  metricFillers: document.getElementById('metricFillers'),
  highlightedTranscriptText: document.getElementById('highlightedTranscriptText'),

  // Strategy Modal Elements
  openStrategyModalBtn: document.getElementById('openStrategyModalBtn'),
  strategyModal: document.getElementById('strategyModal'),
  strategyModalCloseBtn: document.getElementById('strategyModalCloseBtn'),
  strategyModalContent: document.getElementById('strategyModalContent'),
  strategyTabBtns: document.querySelectorAll('.strategy-tab-btn'),

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

// Task-Specific CELPIP Strategies Dataset
const taskStrategies = {
  1: {
    title: 'Task 1: Giving Advice (90 Seconds Speaking)',
    timing: [
      { phase: 'Prep Time (30s)', desc: 'Choose 2-3 solid reasons. Jot down key transition words.' },
      { phase: 'Intro (0 - 10s)', desc: 'Friendly greeting + state your recommendation clearly.' },
      { phase: 'Body Advice (10 - 75s)', desc: 'Point 1 + rationale (30s). Point 2 + rationale (30s).' },
      { phase: 'Conclusion (75 - 90s)', desc: 'Warm closing offer ("Hope this helps! Let me know what you decide.").' }
    ],
    formulas: [
      'Opening: "Hi [Name], I heard you are looking for advice on [topic], and I would love to help you out!"',
      'Point 1: "First and foremost, I strongly recommend that you... because..."',
      'Point 2: "Another important thing to consider is... This will help you to..."',
      'Closing: "I hope these suggestions are helpful! Feel free to reach out if you need anything else."'
    ],
    vocab: ['Strongly recommend', 'I suggest that', 'First and foremost', 'Another great option', 'Consider taking into account', 'In the long run'],
    pitfalls: [
      'Avoid giving ordering commands (use polite advice modals like "You might want to" or "I suggest").',
      'Do not stop early—fill the full 90 seconds with clear explanations for each piece of advice.'
    ]
  },
  2: {
    title: 'Task 2: Personal Experience (60 Seconds Speaking)',
    timing: [
      { phase: 'Prep Time (30s)', desc: 'Pick ONE memorable event. Plan beginning, climax, and outcome.' },
      { phase: 'Setting Scene (0 - 10s)', desc: 'State when/where it happened and who you were with.' },
      { phase: 'Story Arc (10 - 50s)', desc: 'Tell the story chronologically (First, suddenly, after that...).' },
      { phase: 'Reflection (50 - 60s)', desc: 'Wrap up with what you learned or why it was memorable.' }
    ],
    formulas: [
      'Opening: "I would like to talk about a memorable time when I..."',
      'Transition: "It all started when... Suddenly, we realized that..."',
      'Climax: "The highlight of the experience was when..."',
      'Closing: "Looking back, that day taught me a valuable lesson about..."'
    ],
    vocab: ['A few years ago', 'It all started when', 'Unexpectedly', 'To my surprise', 'Looking back', 'An unforgettable moment'],
    pitfalls: [
      'Keep your tenses strictly in the Past Tense (e.g. "we went", "I decided", NOT "we go").',
      'Don\'t spend more than 10 seconds setting up the background story.'
    ]
  },
  3: {
    title: 'Task 3: Describing a Scene (60 Seconds Speaking)',
    timing: [
      { phase: 'Prep Time (30s)', desc: 'Scan the picture. Group into Foreground, Left, Right, & Background.' },
      { phase: 'Overview (0 - 8s)', desc: 'State the overall setting ("This picture depicts a busy outdoor park...").' },
      { phase: 'Spatial Details (8 - 50s)', desc: 'Describe 3-4 specific actions using spatial prepositions.' },
      { phase: 'Summary (50 - 60s)', desc: 'Brief overall impression ("Overall, it seems like a lively atmosphere.").' }
    ],
    formulas: [
      'Overview: "This picture shows a detailed scene of a [location]."',
      'Spatial Detail 1: "Right in the foreground, there is a man who is [action -ing]."',
      'Spatial Detail 2: "Moving to the left side of the image, I can see..."',
      'Spatial Detail 3: "In the background, positioned near the trees..."',
      'Closing: "Overall, the atmosphere appears to be very energetic."'
    ],
    vocab: ['In the foreground', 'To the far left', 'In the background', 'Positioned beside', 'Is currently [action -ing]', 'Directly behind'],
    pitfalls: [
      'Always use Present Continuous Tense for actions (e.g. "is riding a bicycle", NOT "rides a bicycle").',
      'Do NOT make predictions about what will happen next—save predictions for Task 4!'
    ]
  },
  4: {
    title: 'Task 4: Making Predictions (60 Seconds Speaking)',
    timing: [
      { phase: 'Prep Time (30s)', desc: 'Re-examine Task 3 picture. Pick 3 specific people/objects to predict.' },
      { phase: 'Re-orient (0 - 5s)', desc: 'Brief connection ("Based on the scene in Task 3, here is what will happen next...").' },
      { phase: 'Predictions (5 - 50s)', desc: 'Make 3 logical predictions with reasons based on visual clues.' },
      { phase: 'Summary (50 - 60s)', desc: 'Quick concluding prediction.' }
    ],
    formulas: [
      'Intro: "Based on what is happening in the picture, several things are likely to occur next."',
      'Prediction 1: "First, the child on the bicycle will probably..."',
      'Prediction 2: "In addition, the man walking his dog is about to..."',
      'Prediction 3: "As for the people sitting on the bench, they will likely..."',
      'Closing: "In summary, the scene will likely wrap up with everyone heading home."'
    ],
    vocab: ['Will likely', 'Is about to', 'It is probable that', 'I predict that', 'In all likelihood', 'Is expected to'],
    pitfalls: [
      'Use Future Modals (e.g. "will probably", "is about to", "might"), NOT past tense.',
      'Make sure your predictions are logically connected to what is visible in the picture.'
    ]
  },
  combo: {
    title: '⚡ Combo Task 3+4: Scene Description + Predictions',
    timing: [
      { phase: 'Task 3 Phase (60s)', desc: 'Focus 100% on spatial prepositions & present continuous actions.' },
      { phase: 'Transition Break', desc: 'Re-orient your mind from current scene description to future events.' },
      { phase: 'Task 4 Phase (60s)', desc: 'Focus 100% on future modals & logical predictions for the same picture.' }
    ],
    formulas: [
      'Task 3 Opener: "This illustration shows a vibrant scene at [location]..."',
      'Task 4 Transition: "Now, looking at what will happen next in this same scene..."'
    ],
    vocab: ['In the foreground', 'Moving to the background', 'Will likely occur next', 'Is about to happen'],
    pitfalls: [
      'Keep Task 3 purely present continuous (-ing) and Task 4 purely future modals (will/going to).'
    ]
  }
};

// Strategy Modal Manager
function renderStrategyModalContent(taskId) {
  if (!elements.strategyModalContent) return;
  const strat = taskStrategies[taskId] || taskStrategies[1];
  
  let html = `
    <div class="strategy-content-wrapper">
      <h4 class="strategy-task-title">${strat.title}</h4>

      <!-- 1. Timing Strategy Breakdown -->
      <div class="strategy-card">
        <h5>⏱ Time Management Breakdown</h5>
        <div class="strategy-timing-grid">
  `;

  strat.timing.forEach(t => {
    html += `
      <div class="timing-chip">
        <span class="timing-phase">${t.phase}</span>
        <span class="timing-desc">${t.desc}</span>
      </div>
    `;
  });

  html += `
        </div>
      </div>

      <!-- 2. High-Scoring Sentence Formulas -->
      <div class="strategy-card">
        <h5>🗣 High-Scoring Sentence Formulas</h5>
        <ul class="strategy-formula-list">
  `;

  strat.formulas.forEach(f => {
    html += `<li>${f}</li>`;
  });

  html += `
        </ul>
      </div>

      <!-- 3. CELPIP Power Vocabulary & Connectors -->
      <div class="strategy-card">
        <h5>📚 Target Vocabulary & Connectors</h5>
        <div class="strategy-vocab-tags">
  `;

  strat.vocab.forEach(v => {
    html += `<span class="vocab-tag">${v}</span>`;
  });

  html += `
        </div>
      </div>

      <!-- 4. Scoring Pitfalls to Avoid -->
      <div class="strategy-card pitfall-card">
        <h5>⚠️ Critical Scoring Pitfalls to Avoid</h5>
        <ul class="strategy-pitfall-list">
  `;

  strat.pitfalls.forEach(p => {
    html += `<li>${p}</li>`;
  });

  html += `
        </ul>
      </div>
    </div>
  `;

  elements.strategyModalContent.innerHTML = html;
}

function openStrategyModal(taskId) {
  const targetTask = taskId || state.currentTask || 1;
  
  // Set active tab
  elements.strategyTabBtns.forEach(btn => {
    if (btn.dataset.task === String(targetTask)) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  renderStrategyModalContent(targetTask);
  if (elements.strategyModal) elements.strategyModal.classList.add('active');
}

function closeStrategyModal() {
  if (elements.strategyModal) {
    elements.strategyModal.classList.remove('active');
  }
}

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
  elements.downloadImgBtn.addEventListener('click', downloadScenarioImage);
  if (elements.copyImgBtn) {
    elements.copyImgBtn.addEventListener('click', copyScenarioImage);
  }
  elements.lightboxCloseBtn.addEventListener('click', closeLightbox);
  elements.lightboxModal.addEventListener('click', (e) => {
    if (e.target === elements.lightboxModal) closeLightbox();
  });

  // Mode & Prep Time Toggles
  elements.modeToggle.addEventListener('change', (e) => {
    state.isExamMode = e.target.checked;
    elements.modeLabel.textContent = state.isExamMode ? 'Exam Mode' : 'Practice Mode';
    if (state.currentTask === 3 || state.currentTask === 4 || state.currentTask === 'combo') {
      elements.promptHintsBox.style.display = state.isExamMode ? 'none' : 'block';
    }
    resetTimerState();
  });

  if (elements.prepTimeToggle) {
    elements.prepTimeToggle.addEventListener('change', (e) => {
      state.isPrepEnabled = e.target.checked;
      resetTimerState();
    });
  }

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

  // Strategy Modal Controls
  if (elements.openStrategyModalBtn) {
    elements.openStrategyModalBtn.addEventListener('click', () => openStrategyModal(state.currentTask));
  }
  if (elements.strategyModalCloseBtn) {
    elements.strategyModalCloseBtn.addEventListener('click', () => closeStrategyModal());
  }
  if (elements.strategyModal) {
    elements.strategyModal.addEventListener('click', (e) => {
      if (e.target === elements.strategyModal) closeStrategyModal();
    });
  }
  if (elements.strategyTabBtns) {
    elements.strategyTabBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const task = btn.dataset.task;
        elements.strategyTabBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        renderStrategyModalContent(task);
      });
    });
  }

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

// Lightbox & Image Copy Controls
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

async function copyScenarioImage() {
  const img = elements.scenarioImg;
  if (!img || !img.src) {
    showToast('No scenario image available.');
    return;
  }

  try {
    const canvas = document.createElement('canvas');
    canvas.width = img.naturalWidth || img.width || 800;
    canvas.height = img.naturalHeight || img.height || 600;
    const ctx = canvas.getContext('2d');
    
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

    canvas.toBlob(async (blob) => {
      if (!blob) {
        showToast('Unable to copy image.');
        return;
      }
      try {
        await navigator.clipboard.write([
          new ClipboardItem({ 'image/png': blob })
        ]);
        showToast('📋 Scenario image copied to clipboard!');
      } catch (err) {
        console.warn('Direct clipboard copy failed:', err);
        try {
          await navigator.clipboard.writeText(img.src);
          showToast('📋 Image link copied to clipboard!');
        } catch (e) {
          showToast('Failed to copy image.');
        }
      }
    }, 'image/png');
  } catch (err) {
    console.error('Copy image error:', err);
    showToast('Failed to copy image.');
  }
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
  
  if (!state.isPrepEnabled) {
    startSpeakingPhase();
    return;
  }

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
  elements.startTimerBtn.style.display = 'none';
  elements.skipPrepBtn.style.display = 'none';
  elements.stopRecordBtn.style.display = 'inline-flex';
  elements.resetBtn.style.display = 'inline-flex';

  if (elements.waveformContainer) elements.waveformContainer.style.display = 'block';

  playBeep(880, 'sine', 0.5);

  state.recordingStartTime = Date.now();
  // Start Mic Recording & Live Transcription
  startRecordingMic();
  startSpeechRecognition();

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
  if (elements.waveformContainer) elements.waveformContainer.style.display = 'none';

  stopRecordingMic();
  stopSpeechRecognition();

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

  stopSpeechRecognition();
  if (elements.liveCaptionBox) elements.liveCaptionBox.style.display = 'none';
  if (elements.transcriptAnalysisCard) elements.transcriptAnalysisCard.style.display = 'none';
  if (elements.waveformContainer) elements.waveformContainer.style.display = 'none';

  state.timerState = 'idle';
  state.prepTimeRemaining = 30;
  state.speakTimeRemaining = (state.currentTask === 1) ? 90 : 60;
  
  const defaultDisplaySeconds = state.isPrepEnabled ? 30 : state.speakTimeRemaining;
  updateTimerDisplay(defaultDisplaySeconds);
  
  elements.phaseIndicator.textContent = 'READY TO START';
  elements.phaseIndicator.className = 'phase-indicator';
  elements.startTimerBtn.style.display = 'inline-flex';
  if (!state.isPrepEnabled) {
    elements.startTimerBtn.innerHTML = '<span>🎙</span> Start Speaking';
  } else {
    elements.startTimerBtn.innerHTML = '<span>▶</span> Start Prep Timer';
  }
  elements.skipPrepBtn.style.display = 'none';
  elements.stopRecordBtn.style.display = 'none';
  elements.resetBtn.style.display = 'none';
  elements.playbackCard.classList.remove('active');
  
  clearCanvas();
}

// Web Speech API Live Transcription & Analysis Engine
function startSpeechRecognition() {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SpeechRecognition) {
    console.warn('Web Speech API not supported in this browser.');
    return;
  }

  try {
    state.liveTranscript = '';
    state.speechRecognition = new SpeechRecognition();
    state.speechRecognition.continuous = true;
    state.speechRecognition.interimResults = true;
    state.speechRecognition.lang = 'en-US';

    if (elements.liveCaptionBox) elements.liveCaptionBox.style.display = 'block';
    if (elements.liveCaptionText) elements.liveCaptionText.textContent = 'Listening to your voice...';

    state.speechRecognition.onresult = (e) => {
      let finalTranscript = '';
      let interimTranscript = '';

      for (let i = e.resultIndex; i < e.results.length; ++i) {
        if (e.results[i].isFinal) {
          finalTranscript += e.results[i][0].transcript + ' ';
        } else {
          interimTranscript += e.results[i][0].transcript;
        }
      }

      if (finalTranscript) state.liveTranscript += finalTranscript;
      const currentFullText = (state.liveTranscript + ' ' + interimTranscript).trim();

      if (elements.liveCaptionText && currentFullText) {
        elements.liveCaptionText.textContent = currentFullText;
      }
    };

    state.speechRecognition.onerror = (e) => {
      console.warn('Speech Recognition error:', e.error);
    };

    state.speechRecognition.start();
  } catch (err) {
    console.warn('Failed to start speech recognition:', err);
  }
}

function stopSpeechRecognition() {
  if (state.speechRecognition) {
    try {
      state.speechRecognition.stop();
    } catch (e) {}
    state.speechRecognition = null;
  }

  if (elements.liveCaptionBox) {
    elements.liveCaptionBox.style.display = 'none';
  }

  // Analyze captured speech transcript
  analyzeSpeechTranscript(state.liveTranscript.trim());
}

function analyzeSpeechTranscript(rawTranscript) {
  if (!elements.transcriptAnalysisCard) return;

  if (!rawTranscript) {
    elements.highlightedTranscriptText.innerHTML = '<em>No speech transcript captured. Speak clearly into your microphone during the recording phase.</em>';
    elements.metricWpm.textContent = '0';
    elements.metricWordCount.textContent = '0';
    elements.metricFillers.textContent = '0';
    elements.transcriptAnalysisCard.style.display = 'block';
    return;
  }

  const durationSeconds = Math.max(1, (Date.now() - (state.recordingStartTime || Date.now())) / 1000);
  const words = rawTranscript.split(/\s+/).filter(w => w.length > 0);
  const wordCount = words.length;
  const wpm = Math.round((wordCount / durationSeconds) * 60);

  // Defined Word Lists
  const fillerList = ['um', 'uh', 'er', 'ah', 'like', 'basically', 'so'];
  const spatialList = ['foreground', 'background', 'left', 'right', 'center', 'top', 'bottom', 'next', 'beside', 'near', 'sitting', 'standing', 'walking', 'holding', 'wearing'];
  const futureList = ['will', 'going', 'likely', 'might', 'probably', 'seems', 'expect', 'about'];

  let fillerCount = 0;

  const highlightedWords = words.map(w => {
    const cleanWord = w.toLowerCase().replace(/[^a-z]/g, '');
    
    if (fillerList.includes(cleanWord)) {
      fillerCount++;
      return `<span class="filler-word" title="Filler Word">${w}</span>`;
    }

    if (state.currentTask === 3 && spatialList.includes(cleanWord)) {
      return `<span class="vocab-word" title="CELPIP Task 3 Spatial Vocab">${w}</span>`;
    }

    if (state.currentTask === 4 && futureList.includes(cleanWord)) {
      return `<span class="vocab-word" title="CELPIP Task 4 Prediction Marker">${w}</span>`;
    }

    return w;
  });

  elements.metricWordCount.textContent = wordCount;
  elements.metricWpm.textContent = wpm;
  elements.metricFillers.textContent = fillerCount;

  elements.highlightedTranscriptText.innerHTML = highlightedWords.join(' ');
  elements.transcriptAnalysisCard.style.display = 'block';
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
      totalSeconds = state.isPrepEnabled ? 30 : ((state.currentTask === 1) ? 90 : 60);
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
