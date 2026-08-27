/**
 * CELPIP Speaking Simulator Application Engine
 * Handles State, Audio Recording, Timers, IndexedDB, Prompts Bank (Tasks 1, 2, 3, 4, 5, 6), 
 * Scenario Image Lightbox, and AI Evaluation Prompts.
 */

// State Management
const state = {
  currentTask: 1, // 1, 2, 3, 4, 5, 6, or 'combo' (3+4)
  comboSubTask: 3, // 3 or 4 when in combo mode
  currentPromptIndex: 0,
  isExamMode: true,
  isPrepEnabled: true,
  timerState: 'idle', // 'idle' | 'prep' | 'speaking' | 'finished'
  prepTimeRemaining: 30,
  speakTimeRemaining: 90,
  timerInterval: null,
  
  // Task 5 Interactive State
  t5SelectedOption: null, // 'opt_a' | 'opt_b'
  // Task 6 Interactive State
  t6SelectedChoice: 'choice_a', // 'choice_a' | 'choice_b'

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
  task5Pill: document.getElementById('task5Pill'),
  task6Pill: document.getElementById('task6Pill'),
  taskComboPill: document.getElementById('taskComboPill'),
  modeToggle: document.getElementById('modeToggle'),
  modeLabel: document.getElementById('modeLabel'),
  prepTimeToggle: document.getElementById('prepTimeToggle'),
  prepTimeLabel: document.getElementById('prepTimeLabel'),
  
  // Scenario Image & Lightbox (Tasks 3 & 4)
  scenarioImageContainer: document.getElementById('scenarioImageContainer'),
  scenarioImg: document.getElementById('scenarioImg'),
  copyImgBtn: document.getElementById('copyImgBtn'),
  downloadImgBtn: document.getElementById('downloadImgBtn'),
  zoomImgBtn: document.getElementById('zoomImgBtn'),
  lightboxModal: document.getElementById('lightboxModal'),
  lightboxImg: document.getElementById('lightboxImg'),
  lightboxCloseBtn: document.getElementById('lightboxCloseBtn'),

  // Standard Prompt Elements (Tasks 1, 2, 3, 4)
  promptDetailsColumn: document.getElementById('promptDetailsColumn'),
  categoryTag: document.getElementById('categoryTag'),
  promptIdTag: document.getElementById('promptIdTag'),
  promptTitle: document.getElementById('promptTitle'),
  promptText: document.getElementById('promptText'),
  promptHintsBox: document.getElementById('promptHintsBox'),
  promptHintsTitle: document.getElementById('promptHintsTitle'),
  promptHintsList: document.getElementById('promptHintsList'),
  nextPromptBtn: document.getElementById('nextPromptBtn'),
  randomPromptBtn: document.getElementById('randomPromptBtn'),

  // Task 5 Interactive Elements
  task5Container: document.getElementById('task5Container'),
  t5CategoryTag: document.getElementById('t5CategoryTag'),
  t5PromptIdTag: document.getElementById('t5PromptIdTag'),
  t5Title: document.getElementById('t5Title'),
  t5ContextText: document.getElementById('t5ContextText'),
  t5SelectionStep: document.getElementById('t5SelectionStep'),
  t5OptACard: document.getElementById('t5OptACard'),
  t5OptAName: document.getElementById('t5OptAName'),
  t5OptAPrice: document.getElementById('t5OptAPrice'),
  t5OptALocation: document.getElementById('t5OptALocation'),
  t5OptASpecs: document.getElementById('t5OptASpecs'),
  t5OptAFeatures: document.getElementById('t5OptAFeatures'),
  t5SelectOptABtn: document.getElementById('t5SelectOptABtn'),
  t5OptBCard: document.getElementById('t5OptBCard'),
  t5OptBName: document.getElementById('t5OptBName'),
  t5OptBPrice: document.getElementById('t5OptBPrice'),
  t5OptBLocation: document.getElementById('t5OptBLocation'),
  t5OptBSpecs: document.getElementById('t5OptBSpecs'),
  t5OptBFeatures: document.getElementById('t5OptBFeatures'),
  t5SelectOptBBtn: document.getElementById('t5SelectOptBBtn'),
  t5PersuasionStep: document.getElementById('t5PersuasionStep'),
  t5RechooseBtn: document.getElementById('t5RechooseBtn'),
  t5PartnerCallout: document.getElementById('t5PartnerCallout'),
  t5ChosenCard: document.getElementById('t5ChosenCard'),
  t5ChosenName: document.getElementById('t5ChosenName'),
  t5ChosenPrice: document.getElementById('t5ChosenPrice'),
  t5ChosenLocation: document.getElementById('t5ChosenLocation'),
  t5ChosenSpecs: document.getElementById('t5ChosenSpecs'),
  t5ChosenFeatures: document.getElementById('t5ChosenFeatures'),
  t5PartnerCard: document.getElementById('t5PartnerCard'),
  t5PartnerName: document.getElementById('t5PartnerName'),
  t5PartnerPrice: document.getElementById('t5PartnerPrice'),
  t5PartnerLocation: document.getElementById('t5PartnerLocation'),
  t5PartnerSpecs: document.getElementById('t5PartnerSpecs'),
  t5PartnerFeatures: document.getElementById('t5PartnerFeatures'),
  t5GuidanceBox: document.getElementById('t5GuidanceBox'),
  t5GuidanceList: document.getElementById('t5GuidanceList'),
  t5NextBtn: document.getElementById('t5NextBtn'),
  t5RandomBtn: document.getElementById('t5RandomBtn'),

  // Task 6 Interactive Elements
  task6Container: document.getElementById('task6Container'),
  t6CategoryTag: document.getElementById('t6CategoryTag'),
  t6PromptIdTag: document.getElementById('t6PromptIdTag'),
  t6Title: document.getElementById('t6Title'),
  t6SituationText: document.getElementById('t6SituationText'),
  t6ChoiceACard: document.getElementById('t6ChoiceACard'),
  t6ChoiceARole: document.getElementById('t6ChoiceARole'),
  t6ChoiceALabel: document.getElementById('t6ChoiceALabel'),
  t6ChoiceAObj: document.getElementById('t6ChoiceAObj'),
  t6ChoiceAPoints: document.getElementById('t6ChoiceAPoints'),
  t6ChoiceBCard: document.getElementById('t6ChoiceBCard'),
  t6ChoiceBRole: document.getElementById('t6ChoiceBRole'),
  t6ChoiceBLabel: document.getElementById('t6ChoiceBLabel'),
  t6ChoiceBObj: document.getElementById('t6ChoiceBObj'),
  t6ChoiceBPoints: document.getElementById('t6ChoiceBPoints'),
  t6DiplomaticBox: document.getElementById('t6DiplomaticBox'),
  t6DiplomaticList: document.getElementById('t6DiplomaticList'),
  t6NextBtn: document.getElementById('t6NextBtn'),
  t6RandomBtn: document.getElementById('t6RandomBtn'),
  
  // Task 7 Interactive Elements
  task7Pill: document.getElementById('task7Pill'),
  task7Container: document.getElementById('task7Container'),
  t7CategoryTag: document.getElementById('t7CategoryTag'),
  t7PromptIdTag: document.getElementById('t7PromptIdTag'),
  t7Title: document.getElementById('t7Title'),
  t7PromptText: document.getElementById('t7PromptText'),
  t7SideATitle: document.getElementById('t7SideATitle'),
  t7SideAPoints: document.getElementById('t7SideAPoints'),
  t7SideBTitle: document.getElementById('t7SideBTitle'),
  t7SideBPoints: document.getElementById('t7SideBPoints'),
  t7VocabBox: document.getElementById('t7VocabBox'),
  t7VocabList: document.getElementById('t7VocabList'),
  t7NextBtn: document.getElementById('t7NextBtn'),
  t7RandomBtn: document.getElementById('t7RandomBtn'),
  
  // Timer & Cockpit Controls
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
  
  // Prompts Bank Tabs
  bankTask1Tab: document.getElementById('bankTask1Tab'),
  bankTask2Tab: document.getElementById('bankTask2Tab'),
  bankTask3Tab: document.getElementById('bankTask3Tab'),
  bankTask4Tab: document.getElementById('bankTask4Tab'),
  bankTask5Tab: document.getElementById('bankTask5Tab'),
  bankTask6Tab: document.getElementById('bankTask6Tab'),
  bankTask7Tab: document.getElementById('bankTask7Tab'),
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
  5: {
    title: 'Task 5: Comparing and Persuading (60 Seconds Speaking)',
    timing: [
      { phase: 'Prep Time (60s)', desc: 'Part 1: Pick your option. Part 2: Note 2-3 reasons why your choice beats partner\'s.' },
      { phase: 'Greeting & Acknowledgment (0 - 10s)', desc: 'Address partner by name + validate their choice respectfully.' },
      { phase: 'Comparative Persuasion (10 - 50s)', desc: 'Direct side-by-side comparison: Cost/Specs (20s) + Usability/Value (20s).' },
      { phase: 'Diplomatic Call to Action (50 - 60s)', desc: 'Enthusiastic compromise / invitation to finalize the choice.' }
    ],
    formulas: [
      'Opener: "Hi [Name], I saw that you picked [Partner Option], which is definitely a great choice, but hear me out on [My Option]..."',
      'Cost/Spec Contrast: "While [Partner Option] has [feature], [My Option] offers [better feature] for [lower price/better value]..."',
      'Long-term Benefit: "In the long run, choosing [My Option] will save us significant money and give us far more flexibility."',
      'Closing: "Why don\'t we go ahead and book/choose [My Option]? I really think it\'s our best bet!"'
    ],
    vocab: ['In comparison to', 'Whereas', 'On the other hand', 'Far more cost-effective', 'Substantially greater', 'Outweighs the cost', 'Hands down our best option', 'Superior value'],
    pitfalls: [
      'Do NOT just describe your option in isolation—you MUST explicitly contrast it with your partner\'s option.',
      'Never attack or insult your partner\'s choice; use diplomatic and persuasive language.'
    ]
  },
  6: {
    title: 'Task 6: Dealing with a Difficult Situation (60 Seconds Speaking)',
    timing: [
      { phase: 'Prep Time (60s)', desc: 'Choose Pathway A or B. Determine appropriate formality and 2 actionable solutions.' },
      { phase: 'Empathy & Bad News (0 - 15s)', desc: 'Warm greeting + acknowledge the situation + deliver the difficult news politely.' },
      { phase: 'Explanation & Mitigation (15 - 45s)', desc: 'Explain the unavoidable constraint + present 2 fair solutions/compromises.' },
      { phase: 'Constructive Next Steps (45 - 60s)', desc: 'Polite wrap-up + request for feedback or meeting to finalize.' }
    ],
    formulas: [
      'Opener: "Hi [Name], I\'m calling to discuss an unexpected situation regarding [Topic]..."',
      'Delivering Bad News: "I truly regret having to tell you this, but unfortunately, due to [unforeseen reason], I won\'t be able to..."',
      'Proposing Solution 1: "To make sure this doesn\'t disrupt you, what I would like to offer is..."',
      'Proposing Solution 2: "Alternatively, we could also arrange to..."',
      'Closing: "I really appreciate your understanding, and let\'s connect tomorrow to work out the details."'
    ],
    vocab: ['I truly regret having to inform you', 'Due to unforeseen circumstances', 'An equitable compromise', 'What I propose as an alternative', 'I completely understand your frustration', 'I appreciate your flexibility'],
    pitfalls: [
      'Match your tone to the audience (informal/empathetic for a friend or family member; formal/assertive for a supervisor, landlord, or client).',
      'Never just apologize and leave—always offer concrete solutions or alternatives.'
    ]
  },
  7: {
    title: 'Task 7: Expressing Opinions (90 Seconds Speaking)',
    timing: [
      { phase: 'Prep Time (30s)', desc: 'Pick ONE side decisively. Note 2 main arguments + 1 counter-argument concession.' },
      { phase: 'Position & Thesis (0 - 15s)', desc: 'Clear, direct stance statement with strong opening transition.' },
      { phase: 'Point 1 + Example (15 - 45s)', desc: 'Primary supporting reason elaborated with real-world Canadian/personal example.' },
      { phase: 'Point 2 + Concession (45 - 75s)', desc: 'Second reason + acknowledge counter-argument before refuting it.' },
      { phase: 'Conclusion (75 - 90s)', desc: 'Powerful synthesis summarizing why your viewpoint is paramount.' }
    ],
    formulas: [
      'Opening: "From my perspective, I firmly believe that [Topic/Statement] because..."',
      'Point 1: "First and foremost, a paramount reason is that... For instance, in Canada..."',
      'Point 2 & Concession: "Furthermore, while critics may argue that [Opposing View], in reality [Refutation]..."',
      'Closing: "All things considered, for the reasons outlined above, I am convinced that..."'
    ],
    vocab: ['From my perspective', 'I firmly maintain that', 'A paramount consideration', 'First and foremost', 'Furthermore', 'While proponents argue that', 'Nevertheless', 'On the contrary', 'All things considered', 'In the final analysis'],
    pitfalls: [
      'Never remain neutral or sit on the fence—choose ONE side and defend it persuasively.',
      'Avoid superficial one-sentence points; develop each reason with concrete explanations or examples.',
      'Fill the full 90 seconds evenly; avoid stopping before 80 seconds.'
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

  // Task Switch Pills (Tasks 1, 2, 3, 4, 5, 6, Combo 3+4)
  elements.task1Pill.addEventListener('click', () => switchTask(1));
  elements.task2Pill.addEventListener('click', () => switchTask(2));
  elements.task3Pill.addEventListener('click', () => switchTask(3));
  elements.task4Pill.addEventListener('click', () => switchTask(4));
  if (elements.task5Pill) elements.task5Pill.addEventListener('click', () => switchTask(5));
  if (elements.task6Pill) elements.task6Pill.addEventListener('click', () => switchTask(6));
  elements.taskComboPill.addEventListener('click', () => switchTask('combo'));

  // Mode Toggle (Exam vs Practice)
  elements.modeToggle.addEventListener('change', (e) => {
    state.isExamMode = e.target.checked;
    elements.modeLabel.textContent = state.isExamMode ? 'Exam Mode' : 'Practice Mode';
    elements.skipPrepBtn.style.display = state.isExamMode ? 'none' : 'inline-flex';
    
    // Toggle study hints visibility based on Exam Mode
    if (state.currentTask === 3 || state.currentTask === 4 || state.currentTask === 'combo') {
      elements.promptHintsBox.style.display = state.isExamMode ? 'none' : 'block';
    } else if (state.currentTask === 5) {
      if (elements.t5GuidanceBox) {
        elements.t5GuidanceBox.style.display = (state.isExamMode || state.t5SelectedOption === null) ? 'none' : 'block';
      }
    } else if (state.currentTask === 6) {
      if (elements.t6DiplomaticBox) {
        elements.t6DiplomaticBox.style.display = state.isExamMode ? 'none' : 'block';
      }
    } else if (state.currentTask === 7) {
      if (elements.t7VocabBox) {
        elements.t7VocabBox.style.display = state.isExamMode ? 'none' : 'block';
      }
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

  if (elements.prepTimeToggle) {
    elements.prepTimeToggle.addEventListener('change', (e) => {
      state.isPrepEnabled = e.target.checked;
      resetTimerState();
    });
  }

  // Standard Prompt Buttons
  elements.nextPromptBtn.addEventListener('click', () => nextPrompt());
  elements.randomPromptBtn.addEventListener('click', () => getRandomPrompt());

  // Task 5 Buttons
  if (elements.t5SelectOptABtn) {
    elements.t5SelectOptABtn.addEventListener('click', () => selectT5Option('opt_a'));
  }
  if (elements.t5SelectOptBBtn) {
    elements.t5SelectOptBBtn.addEventListener('click', () => selectT5Option('opt_b'));
  }
  if (elements.t5RechooseBtn) {
    elements.t5RechooseBtn.addEventListener('click', () => resetT5SelectionStep());
  }
  if (elements.t5NextBtn) {
    elements.t5NextBtn.addEventListener('click', () => nextPrompt());
  }
  if (elements.t5RandomBtn) {
    elements.t5RandomBtn.addEventListener('click', () => getRandomPrompt());
  }

  // Task 6 Buttons & Pathway Selection
  if (elements.t6ChoiceACard) {
    elements.t6ChoiceACard.addEventListener('click', () => selectT6Choice('choice_a'));
  }
  if (elements.t6ChoiceBCard) {
    elements.t6ChoiceBCard.addEventListener('click', () => selectT6Choice('choice_b'));
  }
  if (elements.t6NextBtn) {
    elements.t6NextBtn.addEventListener('click', () => nextPrompt());
  }
  if (elements.t6RandomBtn) {
    elements.t6RandomBtn.addEventListener('click', () => getRandomPrompt());
  }

  // Task 7 Buttons & Handlers
  if (elements.task7Pill) {
    elements.task7Pill.addEventListener('click', () => switchTask(7));
  }
  if (elements.t7NextBtn) {
    elements.t7NextBtn.addEventListener('click', () => nextPrompt());
  }
  if (elements.t7RandomBtn) {
    elements.t7RandomBtn.addEventListener('click', () => getRandomPrompt());
  }

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
  if (elements.bankTask5Tab) elements.bankTask5Tab.addEventListener('click', () => switchBankTab(5));
  if (elements.bankTask6Tab) elements.bankTask6Tab.addEventListener('click', () => switchBankTab(6));
  if (elements.bankTask7Tab) elements.bankTask7Tab.addEventListener('click', () => switchBankTab(7));

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
  const tabs = [
    elements.bankTask1Tab, elements.bankTask2Tab, elements.bankTask3Tab, 
    elements.bankTask4Tab, elements.bankTask5Tab, elements.bankTask6Tab,
    elements.bankTask7Tab
  ].filter(Boolean);

  tabs.forEach((tab, idx) => {
    if (idx + 1 === taskId) tab.classList.add('active');
    else tab.classList.remove('active');
  });
  populateCategoryFilter();
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

  const allPills = [
    elements.task1Pill, elements.task2Pill, elements.task3Pill, 
    elements.task4Pill, elements.task5Pill, elements.task6Pill,
    elements.task7Pill, elements.taskComboPill
  ].filter(Boolean);

  allPills.forEach(pill => pill.classList.remove('active'));
  
  if (taskId === 1 && elements.task1Pill) elements.task1Pill.classList.add('active');
  if (taskId === 2 && elements.task2Pill) elements.task2Pill.classList.add('active');
  if (taskId === 3 && elements.task3Pill) elements.task3Pill.classList.add('active');
  if (taskId === 4 && elements.task4Pill) elements.task4Pill.classList.add('active');
  if (taskId === 5 && elements.task5Pill) elements.task5Pill.classList.add('active');
  if (taskId === 6 && elements.task6Pill) elements.task6Pill.classList.add('active');
  if (taskId === 7 && elements.task7Pill) elements.task7Pill.classList.add('active');
  if (taskId === 'combo' && elements.taskComboPill) elements.taskComboPill.classList.add('active');

  loadPrompt(taskId, 0);
  resetTimerState();
}

// Get Prompts Array by Task ID
function getPromptsArray(taskId) {
  if (taskId === 1) return TASK1_PROMPTS;
  if (taskId === 2) return TASK2_PROMPTS;
  if (taskId === 5) return TASK5_PROMPTS;
  if (taskId === 6) return TASK6_PROMPTS;
  if (taskId === 7) return TASK7_PROMPTS;
  return SCENARIO_PROMPTS; // Tasks 3, 4, and Combo
}

// Helper to render feature bullet lists
function renderFeaturesList(containerEl, features) {
  if (!containerEl) return;
  containerEl.innerHTML = (features || []).map(f => `<li>${f}</li>`).join('');
}

// Task 5 Interactive Phase Controllers
function selectT5Option(optKey) {
  state.t5SelectedOption = optKey;
  const p = TASK5_PROMPTS[state.currentPromptIndex];
  if (!p) return;

  const chosenOpt = (optKey === 'opt_a') ? p.optionA : p.optionB;
  const partnerOpt = p.partnerOption;

  // Populate Chosen Option Card
  if (elements.t5ChosenName) elements.t5ChosenName.textContent = chosenOpt.name;
  if (elements.t5ChosenPrice) elements.t5ChosenPrice.textContent = chosenOpt.price;
  if (elements.t5ChosenLocation) elements.t5ChosenLocation.textContent = chosenOpt.location;
  if (elements.t5ChosenSpecs) elements.t5ChosenSpecs.textContent = chosenOpt.specs;
  renderFeaturesList(elements.t5ChosenFeatures, chosenOpt.features);

  // Populate Partner Option Card
  if (elements.t5PartnerName) elements.t5PartnerName.textContent = partnerOpt.name;
  if (elements.t5PartnerPrice) elements.t5PartnerPrice.textContent = partnerOpt.price;
  if (elements.t5PartnerLocation) elements.t5PartnerLocation.textContent = partnerOpt.location;
  if (elements.t5PartnerSpecs) elements.t5PartnerSpecs.textContent = partnerOpt.specs;
  renderFeaturesList(elements.t5PartnerFeatures, partnerOpt.features);

  // Populate Partner Persuasion Callout
  if (elements.t5PartnerCallout) {
    elements.t5PartnerCallout.innerHTML = `
      You chose <strong>${chosenOpt.name}</strong>. ${p.targetAudience} chose <strong>${partnerOpt.name}</strong>. ${p.partnerRationale} Persuade them why your choice is better.
    `;
  }

  // Populate Guidance Points
  if (elements.t5GuidanceList) {
    elements.t5GuidanceList.innerHTML = (p.persuasionGuidance || []).map(g => `<li>${g}</li>`).join('');
  }

  // Transition UI to Part 2
  if (elements.t5SelectionStep) elements.t5SelectionStep.style.display = 'none';
  if (elements.t5PersuasionStep) elements.t5PersuasionStep.style.display = 'block';
  if (elements.t5GuidanceBox) {
    elements.t5GuidanceBox.style.display = state.isExamMode ? 'none' : 'block';
  }

  showToast(`Option selected! Review comparison and start speaking.`);
}

function resetT5SelectionStep() {
  state.t5SelectedOption = null;
  if (elements.t5SelectionStep) elements.t5SelectionStep.style.display = 'block';
  if (elements.t5PersuasionStep) elements.t5PersuasionStep.style.display = 'none';
  if (elements.t5GuidanceBox) elements.t5GuidanceBox.style.display = 'none';
}

// Task 6 Interactive Choice Switcher
function selectT6Choice(choiceKey) {
  state.t6SelectedChoice = choiceKey;
  if (choiceKey === 'choice_a') {
    if (elements.t6ChoiceACard) elements.t6ChoiceACard.classList.add('active');
    if (elements.t6ChoiceBCard) elements.t6ChoiceBCard.classList.remove('active');
  } else {
    if (elements.t6ChoiceBCard) elements.t6ChoiceBCard.classList.add('active');
    if (elements.t6ChoiceACard) elements.t6ChoiceACard.classList.remove('active');
  }
}

// Load Specific Prompt
function loadPrompt(taskId, index) {
  const prompts = getPromptsArray(taskId);
  if (index >= prompts.length) index = 0;
  
  state.currentPromptIndex = index;
  const p = prompts[index];

  // Visibility toggles between Standard (1-4), Task 5, Task 6, and Task 7 containers
  if (elements.promptDetailsColumn) {
    elements.promptDetailsColumn.style.display = (taskId === 5 || taskId === 6 || taskId === 7) ? 'none' : 'flex';
  }
  if (elements.task5Container) {
    elements.task5Container.style.display = (taskId === 5) ? 'flex' : 'none';
  }
  if (elements.task6Container) {
    elements.task6Container.style.display = (taskId === 6) ? 'flex' : 'none';
  }
  if (elements.task7Container) {
    elements.task7Container.style.display = (taskId === 7) ? 'flex' : 'none';
  }

  // TASK 5 RENDERING
  if (taskId === 5) {
    elements.scenarioImageContainer.classList.remove('active');
    state.t5SelectedOption = null;
    resetT5SelectionStep();

    if (elements.t5CategoryTag) elements.t5CategoryTag.textContent = p.category;
    if (elements.t5PromptIdTag) elements.t5PromptIdTag.textContent = `Task 5 #${index + 1} / ${prompts.length}`;
    if (elements.t5Title) elements.t5Title.textContent = p.title;
    if (elements.t5ContextText) elements.t5ContextText.textContent = p.context;

    // Populate Option A
    if (elements.t5OptAName) elements.t5OptAName.textContent = p.optionA.name;
    if (elements.t5OptAPrice) elements.t5OptAPrice.textContent = p.optionA.price;
    if (elements.t5OptALocation) elements.t5OptALocation.textContent = p.optionA.location;
    if (elements.t5OptASpecs) elements.t5OptASpecs.textContent = p.optionA.specs;
    renderFeaturesList(elements.t5OptAFeatures, p.optionA.features);

    // Populate Option B
    if (elements.t5OptBName) elements.t5OptBName.textContent = p.optionB.name;
    if (elements.t5OptBPrice) elements.t5OptBPrice.textContent = p.optionB.price;
    if (elements.t5OptBLocation) elements.t5OptBLocation.textContent = p.optionB.location;
    if (elements.t5OptBSpecs) elements.t5OptBSpecs.textContent = p.optionB.specs;
    renderFeaturesList(elements.t5OptBFeatures, p.optionB.features);

    state.prepTimeRemaining = 60;
    state.speakTimeRemaining = 60;
  }
  // TASK 6 RENDERING
  else if (taskId === 6) {
    elements.scenarioImageContainer.classList.remove('active');
    state.t6SelectedChoice = 'choice_a';
    selectT6Choice('choice_a');

    if (elements.t6CategoryTag) elements.t6CategoryTag.textContent = p.category;
    if (elements.t6PromptIdTag) elements.t6PromptIdTag.textContent = `Task 6 #${index + 1} / ${prompts.length}`;
    if (elements.t6Title) elements.t6Title.textContent = p.title;
    if (elements.t6SituationText) elements.t6SituationText.textContent = p.situation;

    // Choice A
    if (elements.t6ChoiceARole) elements.t6ChoiceARole.textContent = p.choiceA.role;
    if (elements.t6ChoiceALabel) elements.t6ChoiceALabel.textContent = p.choiceA.label;
    if (elements.t6ChoiceAObj) elements.t6ChoiceAObj.textContent = p.choiceA.objective;
    renderFeaturesList(elements.t6ChoiceAPoints, p.choiceA.speakingPoints);

    // Choice B
    if (elements.t6ChoiceBRole) elements.t6ChoiceBRole.textContent = p.choiceB.role;
    if (elements.t6ChoiceBLabel) elements.t6ChoiceBLabel.textContent = p.choiceB.label;
    if (elements.t6ChoiceBObj) elements.t6ChoiceBObj.textContent = p.choiceB.objective;
    renderFeaturesList(elements.t6ChoiceBPoints, p.choiceB.speakingPoints);

    // Diplomatic Phrases
    if (elements.t6DiplomaticList) {
      elements.t6DiplomaticList.innerHTML = (p.diplomaticPhrases || []).map(dp => `<li>"${dp}"</li>`).join('');
    }
    if (elements.t6DiplomaticBox) {
      elements.t6DiplomaticBox.style.display = state.isExamMode ? 'none' : 'block';
    }

    state.prepTimeRemaining = 60;
    state.speakTimeRemaining = 60;
  }
  // TASK 7 RENDERING
  else if (taskId === 7) {
    elements.scenarioImageContainer.classList.remove('active');

    if (elements.t7CategoryTag) elements.t7CategoryTag.textContent = p.category;
    if (elements.t7PromptIdTag) elements.t7PromptIdTag.textContent = `Task 7 #${index + 1} / ${prompts.length}`;
    if (elements.t7Title) elements.t7Title.textContent = p.title;
    if (elements.t7PromptText) elements.t7PromptText.textContent = p.prompt;

    // Side A
    if (elements.t7SideATitle) elements.t7SideATitle.textContent = p.sideA.label;
    renderFeaturesList(elements.t7SideAPoints, p.sideA.points);

    // Side B
    if (elements.t7SideBTitle) elements.t7SideBTitle.textContent = p.sideB.label;
    renderFeaturesList(elements.t7SideBPoints, p.sideB.points);

    // Vocab tags
    if (elements.t7VocabList) {
      elements.t7VocabList.innerHTML = (p.persuasiveVocabulary || []).map(v => `<span class="vocab-tag">${v}</span>`).join('');
    }
    if (elements.t7VocabBox) {
      elements.t7VocabBox.style.display = state.isExamMode ? 'none' : 'block';
    }

    state.prepTimeRemaining = 30;
    state.speakTimeRemaining = 90;
  }
  // TASKS 1 & 2 RENDERING
  else if (taskId === 1 || taskId === 2) {
    elements.categoryTag.textContent = p.category;
    elements.scenarioImageContainer.classList.remove('active');
    elements.promptHintsBox.style.display = 'none';

    elements.promptIdTag.textContent = `Task ${taskId} #${index + 1} / ${prompts.length}`;
    elements.promptTitle.textContent = p.title;
    elements.promptText.textContent = p.prompt;

    state.prepTimeRemaining = 30;
    state.speakTimeRemaining = (taskId === 1) ? 90 : 60;
  }
  // TASKS 3, 4 & COMBO RENDERING
  else {
    elements.categoryTag.textContent = p.category;
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
  const defaultPrep = (state.currentTask === 5 || state.currentTask === 6) ? 60 : 30;
  state.prepTimeRemaining = defaultPrep;
  
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
  state.speakTimeRemaining = (state.currentTask === 1 || state.currentTask === 7) ? 90 : 60;
  
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
  const defaultPrep = (state.currentTask === 5 || state.currentTask === 6) ? 60 : 30;
  state.prepTimeRemaining = defaultPrep;
  state.speakTimeRemaining = (state.currentTask === 1 || state.currentTask === 7) ? 90 : 60;
  
  const defaultDisplaySeconds = state.isPrepEnabled ? defaultPrep : state.speakTimeRemaining;
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
  const compareList = ['whereas', 'compared', 'comparison', 'better', 'prefer', 'however', 'cheaper', 'spacious', 'valuable', 'greater'];
  const diplomacyList = ['regret', 'unfortunately', 'compromise', 'propose', 'alternative', 'understand', 'appreciate', 'solution', 'arrange'];
  const opinionList = ['perspective', 'maintain', 'opinion', 'paramount', 'furthermore', 'nevertheless', 'contrary', 'instance', 'consequently', 'convinced', 'considered', 'analysis', 'evident', 'crucial', 'undeniably', 'fundamentally'];

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

    if (state.currentTask === 5 && compareList.includes(cleanWord)) {
      return `<span class="vocab-word" title="CELPIP Task 5 Comparative Marker">${w}</span>`;
    }

    if (state.currentTask === 6 && diplomacyList.includes(cleanWord)) {
      return `<span class="vocab-word" title="CELPIP Task 6 Diplomatic Marker">${w}</span>`;
    }

    if (state.currentTask === 7 && opinionList.includes(cleanWord)) {
      return `<span class="vocab-word" title="CELPIP Task 7 Opinion Marker">${w}</span>`;
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
    const defaultPrep = (state.currentTask === 5 || state.currentTask === 6) ? 60 : 30;

    if (state.timerState === 'prep') {
      totalSeconds = defaultPrep;
      elements.timerProgressCircle.style.stroke = "url(#timerPrepGrad)";
    } else if (state.timerState === 'speaking') {
      totalSeconds = (state.currentTask === 1 || state.currentTask === 7) ? 90 : 60;
      elements.timerProgressCircle.style.stroke = "url(#timerSpeakGrad)";
    } else {
      totalSeconds = state.isPrepEnabled ? defaultPrep : ((state.currentTask === 1 || state.currentTask === 7) ? 90 : 60);
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
    durationSeconds: (state.currentTask === 1 || state.currentTask === 7) ? 90 : 60,
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

// AI Evaluation Prompt Generator (Tailored for Tasks 1, 2, 3, 4, 5, 6, 7)
function copyAiEvaluationPrompt() {
  const activeTask = state.currentTask === 'combo' ? state.comboSubTask : state.currentTask;
  const prompts = getPromptsArray(activeTask);
  const currentPrompt = prompts[state.currentPromptIndex];

  let taskCriteriaDetails = "";
  let promptContextContent = "";

  if (activeTask === 1) {
    promptContextContent = `Official Prompt Text: "${currentPrompt.prompt}"`;
    taskCriteriaDetails = `SPECIAL CRITERIA FOR TASK 1 (Giving Advice):
- Evaluates clarity and relevance of advice points and justification.
- Evaluates friendly, conversational, and polite tone (avoiding aggressive imperatives).
- Evaluates effective time allocation (filling 90 seconds evenly).`;
  } else if (activeTask === 2) {
    promptContextContent = `Official Prompt Text: "${currentPrompt.prompt}"`;
    taskCriteriaDetails = `SPECIAL CRITERIA FOR TASK 2 (Personal Experience):
- Evaluates accurate past-tense grammar consistency.
- Evaluates narrative story arc (setting, conflict/climax, resolution, reflection).
- Evaluates descriptive vocabulary.`;
  } else if (activeTask === 3) {
    promptContextContent = `Official Prompt Text: "${currentPrompt.task3Prompt}"`;
    taskCriteriaDetails = `SPECIAL CRITERIA FOR TASK 3 (Describing a Scene):
- Evaluates spatial prepositions (e.g. 'in the foreground', 'on the left', 'in the background', 'beside').
- Evaluates present continuous verb tenses ('is riding', 'are talking', 'is standing').
- Evaluates scene completeness and visual detail accuracy.`;
  } else if (activeTask === 4) {
    promptContextContent = `Official Prompt Text: "${currentPrompt.task4Prompt}"`;
    taskCriteriaDetails = `SPECIAL CRITERIA FOR TASK 4 (Making Predictions):
- Evaluates future verb tenses and modal verbs ('will', 'is going to', 'might', 'is about to').
- Evaluates logical reasoning connecting the current picture scene to future outcomes.`;
  } else if (activeTask === 5) {
    const chosenName = state.t5SelectedOption === 'opt_b' ? currentPrompt.optionB.name : currentPrompt.optionA.name;
    promptContextContent = `Context: "${currentPrompt.context}"
Target Audience: "${currentPrompt.targetAudience}"
Candidate Choice: "${chosenName}"
Partner's Competing Choice: "${currentPrompt.partnerChoiceName}" (${currentPrompt.partnerRationale})`;

    taskCriteriaDetails = `SPECIAL CRITERIA FOR TASK 5 (Comparing and Persuading):
- Evaluates comparative language & structures ('in comparison to', 'whereas', 'far more cost-effective', 'outweighs').
- Evaluates direct persuasion and side-by-side contrasting of features rather than isolated descriptions.
- Evaluates respectful acknowledgment of the partner's preference combined with compelling counter-arguments.`;
  } else if (activeTask === 6) {
    const chosenChoice = state.t6SelectedChoice === 'choice_b' ? currentPrompt.choiceB : currentPrompt.choiceA;
    promptContextContent = `Dilemma Situation: "${currentPrompt.situation}"
Chosen Pathway: "${chosenChoice.label}"
Speaking To: "${chosenChoice.role}"
Objective: "${chosenChoice.objective}"`;

    taskCriteriaDetails = `SPECIAL CRITERIA FOR TASK 6 (Dealing with a Difficult Situation):
- Evaluates tone appropriateness and diplomacy tailored specifically to the recipient (${chosenChoice.role}).
- Evaluates clear delivery of difficult news with empathy.
- Evaluates constructive problem-solving: providing 2 actionable solutions, compromises, or alternatives.`;
  } else if (activeTask === 7) {
    promptContextContent = `Official Debate Question: "${currentPrompt.prompt}"`;

    taskCriteriaDetails = `SPECIAL CRITERIA FOR TASK 7 (Expressing Opinions):
- Evaluates clear, immediate statement of position/thesis in the introduction (0-15s).
- Evaluates depth of argumentation: 2 to 3 well-developed points with concrete Canadian or personal examples.
- Evaluates counter-argument acknowledgment and refutation ('While opponents argue that... in reality...').
- Evaluates high-level discourse markers ('From my perspective', 'A paramount factor', 'All things considered').
- Evaluates effective pacing to fill the full 90-second duration without trailing off early.`;
  }

  const taskTypeName = {
    1: 'Task 1 (Giving Advice)',
    2: 'Task 2 (Personal Experience)',
    3: 'Task 3 (Describing a Scene)',
    4: 'Task 4 (Making Predictions)',
    5: 'Task 5 (Comparing and Persuading)',
    6: 'Task 6 (Dealing with a Difficult Situation)',
    7: 'Task 7 (Expressing Opinions)'
  }[activeTask] || `Task ${activeTask}`;

  const evalPromptText = `Act as an expert official CELPIP Speaking Examiner and English Language Coach. Evaluate my response to the following CELPIP Speaking Task:

---
TASK OVERVIEW:
Task Type: CELPIP Speaking ${taskTypeName}
Scenario Title: "${currentPrompt.title}"
Category: ${currentPrompt.category}
${promptContextContent}
Allowed Response Time: ${(activeTask === 1 || activeTask === 7) ? '90 seconds' : '60 seconds'}
---

${taskCriteriaDetails}

Please evaluate my spoken response against the 4 official CELPIP Speaking Criteria:
1. CONTENT & COHERENCE (Score out of 12)
2. VOCABULARY & NATURAL PHRASING (Score out of 12)
3. LISTENABILITY, PRONUNCIATION & GRAMMAR (Score out of 12)
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
  const allPrompts = [...TASK1_PROMPTS, ...TASK2_PROMPTS, ...SCENARIO_PROMPTS, ...TASK5_PROMPTS, ...TASK6_PROMPTS, ...TASK7_PROMPTS];
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
      (p.context && p.context.toLowerCase().includes(state.searchQuery)) ||
      (p.situation && p.situation.toLowerCase().includes(state.searchQuery)) ||
      (p.optionA && p.optionA.name.toLowerCase().includes(state.searchQuery)) ||
      (p.optionB && p.optionB.name.toLowerCase().includes(state.searchQuery)) ||
      (p.choiceA && p.choiceA.label.toLowerCase().includes(state.searchQuery)) ||
      (p.sideA && p.sideA.label.toLowerCase().includes(state.searchQuery)) ||
      (p.sideB && p.sideB.label.toLowerCase().includes(state.searchQuery)) ||
      p.category.toLowerCase().includes(state.searchQuery)
    );
  }

  elements.promptsGrid.innerHTML = prompts.map((p, idx) => {
    let cardContentHtml = '';

    if (taskId === 1 || taskId === 2) {
      cardContentHtml = `<p style="color:var(--text-muted); font-size:0.85rem; line-height:1.4;">${p.prompt}</p>`;
    } else if (taskId === 3) {
      cardContentHtml = `
        <img src="${p.imageFile}" style="width:100%; height:130px; object-fit:cover; border-radius:8px; margin:0.5rem 0;" onerror="this.style.display='none'" />
        <p style="color:var(--text-muted); font-size:0.85rem; line-height:1.4;">${p.task3Prompt}</p>
      `;
    } else if (taskId === 4) {
      cardContentHtml = `
        <img src="${p.imageFile}" style="width:100%; height:130px; object-fit:cover; border-radius:8px; margin:0.5rem 0;" onerror="this.style.display='none'" />
        <p style="color:var(--text-muted); font-size:0.85rem; line-height:1.4;">${p.task4Prompt}</p>
      `;
    } else if (taskId === 5) {
      cardContentHtml = `
        <p style="color:#cbd5e1; font-size:0.85rem; margin-bottom:0.4rem;"><strong>Context:</strong> ${p.context}</p>
        <div style="display:flex; flex-direction:column; gap:0.25rem; font-size:0.8rem; color:var(--text-muted); background:rgba(15,23,42,0.5); padding:0.5rem; border-radius:6px;">
          <div>🔹 Option A: <strong style="color:#e2e8f0;">${p.optionA.name}</strong> (${p.optionA.price})</div>
          <div>🔹 Option B: <strong style="color:#e2e8f0;">${p.optionB.name}</strong> (${p.optionB.price})</div>
          <div>👤 Partner: <strong style="color:#fbbf24;">${p.partnerChoiceName}</strong></div>
        </div>
      `;
    } else if (taskId === 6) {
      cardContentHtml = `
        <p style="color:#cbd5e1; font-size:0.85rem; margin-bottom:0.4rem;"><strong>Dilemma:</strong> ${p.situation}</p>
        <div style="display:flex; flex-direction:column; gap:0.25rem; font-size:0.8rem; color:var(--text-muted); background:rgba(15,23,42,0.5); padding:0.5rem; border-radius:6px;">
          <div>👥 <strong>Pathway 1:</strong> ${p.choiceA.label}</div>
          <div>👥 <strong>Pathway 2:</strong> ${p.choiceB.label}</div>
        </div>
      `;
    } else if (taskId === 7) {
      cardContentHtml = `
        <p style="color:#cbd5e1; font-size:0.85rem; margin-bottom:0.4rem;"><strong>Debate:</strong> ${p.prompt}</p>
        <div style="display:flex; flex-direction:column; gap:0.25rem; font-size:0.8rem; color:var(--text-muted); background:rgba(15,23,42,0.5); padding:0.5rem; border-radius:6px;">
          <div>👍 <strong style="color:#34d399;">Pro:</strong> ${p.sideA.label}</div>
          <div>👎 <strong style="color:#f87171;">Con:</strong> ${p.sideB.label}</div>
        </div>
      `;
    }

    return `
      <div class="prompt-item-card">
        <div>
          <div class="prompt-meta">
            <span class="category-tag">${p.category}</span>
            <span class="prompt-id-tag">Task ${taskId} #${idx + 1}</span>
          </div>
          <h4 style="color:#fff; font-size:1.05rem; font-family:var(--font-heading); margin:0.4rem 0;">${p.title}</h4>
          ${cardContentHtml}
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

