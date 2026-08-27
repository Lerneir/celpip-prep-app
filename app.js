/**
 * CELPIP Master Prep Suite Application Engine (Speaking & Writing)
 * Handles State, Audio Recording, Writing Simulator, Timers, IndexedDB,
 * Prompts Bank (Speaking Tasks 1-7, Writing Tasks 1-2), AI Evaluation Prompts,
 * Model Answers, and Practice History.
 */

// State Management
const state = {
  currentModule: 'speaking', // 'speaking' | 'writing'
  currentTask: 1, // 1, 2, 3, 4, 5, 6, 7, or 'combo' (3+4)
  comboSubTask: 3,
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
  
  // Writing Module State
  currentWritingTask: 1, // 1 (Email) | 2 (Survey)
  currentWritingPromptIndex: 0,
  writingTimeRemaining: 27 * 60, // 27m for Task 1, 26m for Task 2
  writingTimerInterval: null,
  writingTimerState: 'idle', // 'idle' | 'running' | 'paused' | 'submitted'
  writingSelectedOption: 'A', // 'A' | 'B'
  writingUndoStack: [],
  writingRedoStack: [],
  writingStartTime: null,
  writingTimeSpentSeconds: 0,

  // History & Filters
  currentBankTask: 1,
  currentFilterCategory: 'all',
  searchQuery: '',
  currentHistoryTab: 'speaking' // 'speaking' | 'writing'
};

// Database Initialization (IndexedDB - Version 2 with Writing Store)
let db = null;
const DB_NAME = 'CELPIP_Speaking_Simulator_DB';
const DB_VERSION = 2;
const STORE_NAME = 'recordings';
const WRITING_STORE = 'writing_submissions';

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
      if (!database.objectStoreNames.contains(WRITING_STORE)) {
        const wStore = database.createObjectStore(WRITING_STORE, { keyPath: 'id', autoIncrement: true });
        wStore.createIndex('timestamp', 'timestamp', { unique: false });
        wStore.createIndex('taskId', 'taskId', { unique: false });
        wStore.createIndex('promptId', 'promptId', { unique: false });
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



// Task Strategies & Guides (Speaking Tasks 1-7, Combo, and Writing Tasks 1 & 2)
const taskStrategies = {
  1: {
    title: 'Task 1: Giving Advice (90 Seconds Speaking)',
    timing: [
      { phase: '00 - 15s', desc: 'Warm greeting, express empathy, state purpose.' },
      { phase: '15 - 45s', desc: 'Point 1: First clear advice recommendation with reason.' },
      { phase: '45 - 75s', desc: 'Point 2: Second concrete recommendation with real example.' },
      { phase: '75 - 90s', desc: 'Encouraging closing & offer of follow-up support.' }
    ],
    formulas: [
      'If I were in your position, I would strongly consider...',
      'Another essential factor you might want to keep in mind is...',
      'To make the transition smoother, one practical step is...'
    ],
    vocab: ['Highly recommend', 'Prudent decision', 'In the long run', 'Keep in mind'],
    pitfalls: ['Avoid aggressive commands (e.g. "You must do this"). Use polite modals.']
  },
  2: {
    title: 'Task 2: Personal Experience (60 Seconds Speaking)',
    timing: [
      { phase: '00 - 10s', desc: 'Direct topic sentence: When & where event took place.' },
      { phase: '10 - 35s', desc: 'Narrative progression: The conflict or challenge encountered.' },
      { phase: '35 - 50s', desc: 'Climax & resolution: How the situation was resolved.' },
      { phase: '50 - 60s', desc: 'Reflection: What you learned or how it shaped you.' }
    ],
    formulas: [
      'A memorable experience that immediately comes to mind occurred when...',
      'To my surprise, what started as a simple outing quickly turned into...',
      'Looking back on that event, it taught me the importance of...'
    ],
    vocab: ['Unforeseen obstacle', 'Overwhelmed with joy', 'Pivotal moment', 'Looking back'],
    pitfalls: ['Do not switch between present and past tense. Maintain consistent past tense.']
  },
  3: {
    title: 'Task 3: Describing a Scene (60 Seconds Speaking)',
    timing: [
      { phase: '00 - 10s', desc: 'Setting overview: Location, overall atmosphere, crowd.' },
      { phase: '10 - 25s', desc: 'Foreground actions: People in bottom left / bottom right.' },
      { phase: '25 - 45s', desc: 'Middle ground: Key interactions and activities in the center.' },
      { phase: '45 - 60s', desc: 'Background & ambient details: Weather, structures, scenery.' }
    ],
    formulas: [
      'This illustration portrays a lively outdoor scene at a...',
      'Directly in the foreground on the left, a man is...',
      'Moving toward the middle background, we can observe...'
    ],
    vocab: ['In the foreground', 'Adjacent to', 'In the upper right corner', 'Engaged in conversation'],
    pitfalls: ['Always use Present Continuous ("is walking", "are chatting").']
  },
  4: {
    title: 'Task 4: Making Predictions (60 Seconds Speaking)',
    timing: [
      { phase: '00 - 05s', desc: 'Brief transition linking scene context to upcoming events.' },
      { phase: '05 - 25s', desc: 'Prediction 1: Foreseeable action for foreground characters.' },
      { phase: '25 - 45s', desc: 'Prediction 2: Reaction or outcome in middle ground.' },
      { phase: '45 - 60s', desc: 'Prediction 3: Overall conclusion or culmination of the scene.' }
    ],
    formulas: [
      'Judging from the current scene, it appears highly likely that...',
      'The woman carrying the groceries is probably going to...',
      'In the next few moments, I anticipate that...'
    ],
    vocab: ['Is about to', 'Will almost certainly', 'I anticipate that', 'Is bound to happen'],
    pitfalls: ['Do not describe what is happening now. Use future modals ("will", "is going to").']
  },
  5: {
    title: 'Task 5: Comparing and Persuading (60 Seconds Speaking)',
    timing: [
      { phase: '00 - 10s', desc: 'Acknowledge partner choice respectfully & state preference.' },
      { phase: '10 - 30s', desc: 'Direct comparison 1: Price / Value / Size advantage.' },
      { phase: '30 - 50s', desc: 'Direct comparison 2: Location / Amenities / Practicality.' },
      { phase: '50 - 60s', desc: 'Persuasive closing appeal & consensus call.' }
    ],
    formulas: [
      'I understand why you are drawn to [Partner Choice], but hear me out...',
      'When comparing the two, [My Choice] is far more cost-effective because...',
      'Furthermore, while [Partner Choice] offers X, our choice provides Y...'
    ],
    vocab: ['Substantially cheaper', 'Far outweighs', 'In contrast to', 'More practical for our needs'],
    pitfalls: ['Do not just describe your item. You MUST directly contrast both options!']
  },
  6: {
    title: 'Task 6: Dealing with a Difficult Situation (60 Seconds Speaking)',
    timing: [
      { phase: '00 - 10s', desc: 'Appropriate greeting, empathy, and deliver the difficult news.' },
      { phase: '10 - 25s', desc: 'Provide sincere, clear rationale for the conflict.' },
      { phase: '25 - 45s', desc: 'Offer Solution 1 (immediate compromise / coverage).' },
      { phase: '45 - 60s', desc: 'Offer Solution 2 (future compensation) & courteous close.' }
    ],
    formulas: [
      'I am truly sorry to bring this up, but an unexpected conflict has arisen...',
      'To ensure everything runs smoothly, I have already arranged for...',
      'Alternatively, what if we reschedule our celebration to next weekend?'
    ],
    vocab: ['Unforeseen circumstance', 'Sincerely apologize', 'Viable compromise', 'Make it up to you'],
    pitfalls: ['Tailor tone strictly to recipient (Formal for boss, casual/warm for best friend).']
  },
  7: {
    title: 'Task 7: Expressing Opinions (90 Seconds Speaking)',
    timing: [
      { phase: '00 - 15s', desc: 'Clear thesis statement stating firm stance on debate.' },
      { phase: '15 - 45s', desc: 'Argument 1: Primary rationale supported by Canadian example.' },
      { phase: '45 - 75s', desc: 'Argument 2: Secondary point & counter-argument refutation.' },
      { phase: '75 - 90s', desc: 'Reiterate thesis with inspiring concluding remark.' }
    ],
    formulas: [
      'From my perspective, there is no doubt that...',
      'A paramount factor supporting this view is...',
      'While critics argue that X, evidence clearly demonstrates that Y...',
      'All things considered, prioritizing this approach will ensure...'
    ],
    vocab: ['From my perspective', 'A paramount factor', 'Incontestably', 'All things considered'],
    pitfalls: ['State your thesis immediately (within first 15s). Do not remain neutral!']
  },
  combo: {
    title: 'Combo Task 3 + 4: Scene & Prediction (120 Seconds Speaking)',
    timing: [
      { phase: '00 - 60s (Part 1)', desc: 'Describe the scene using present continuous & spatial terms.' },
      { phase: '60 - 120s (Part 2)', desc: 'Predict future developments using modal verbs.' }
    ],
    formulas: [
      'Part 1: In the center of the scene, a group of students is...',
      'Part 2: In the next few moments, the teacher will likely hand out...'
    ],
    vocab: ['In the foreground', 'Moving to the background', 'Will likely occur next', 'Is about to happen'],
    pitfalls: ['Keep Task 3 purely present continuous (-ing) and Task 4 purely future modals.']
  },
  wt1: {
    title: 'CELPIP Writing Task 1: Writing an Email (27 Minutes | 150–200 Words)',
    timing: [
      { phase: '00 - 03 min', desc: 'Planning: Read context, identify recipient/tone, note all 3-4 bullets.' },
      { phase: '03 - 22 min', desc: 'Writing: Salutation → Purpose → 3 body paragraphs covering bullets → Sign-off.' },
      { phase: '22 - 27 min', desc: 'Proofreading: Word count (160-190), punctuation, spelling, subject line.' }
    ],
    formulas: [
      'Formal Opening: "I am writing to formally request / report / inquire regarding [Topic]..."',
      'Bullet 1: "First and foremost, with regard to [Bullet 1], I would like to highlight that..."',
      'Bullet 2: "Furthermore / In addition, concerning [Bullet 2], the main issue is that..."',
      'Call to Action: "I would greatly appreciate your prompt confirmation at your earliest convenience."',
      'Sign-off: "Sincerely / Best regards, [Your Full Name]"'
    ],
    vocab: ['Formally request an adjustment', 'Directly overlap with', 'Essential obligation', 'Operational continuity', 'Deeply committed to'],
    pitfalls: [
      'Never omit any bullet point — missing one bullet drops Task Fulfillment significantly.',
      'Aim for 160–190 words (under 150 is penalized; over 210 risks grammatical drift).'
    ]
  },
  wt2: {
    title: 'CELPIP Writing Task 2: Responding to Survey Questions (26 Minutes | 150–200 Words)',
    timing: [
      { phase: '00 - 03 min', desc: 'Planning: Select Option A or B immediately; brainstorm 2 solid reasons.' },
      { phase: '03 - 21 min', desc: 'Writing: Clear stance in intro → Reason 1 + example → Reason 2 + counter-contrast → Conclusion.' },
      { phase: '21 - 26 min', desc: 'Editing: Verify comparative language, transitions, paragraph breaks, and word count.' }
    ],
    formulas: [
      'Stance: "In my opinion, the [Organization] should strongly prioritize Option [A/B]: [Title]..."',
      'Rationale 1: "First and foremost, [Chosen Option] provides immediate and tangible benefits because..."',
      'Counterbalance: "While advocates of Option [Other] argue that... in reality, [Drawback]..."',
      'Conclusion: "Taking all factors into consideration, selecting Option [A/B] is the most equitable decision."'
    ],
    vocab: ['Firmly support', 'Far superior investment', 'Tangible financial savings', 'In contrast to', 'Prudent and forward-looking'],
    pitfalls: [
      'Do NOT remain neutral; pick ONE option decisively in the very first sentence.',
      'Always contrast your choice against the alternative option to demonstrate comparative depth.'
    ]
  }
};

// DOM Elements Cache
const elements = {
  // Navigation
  navButtons: document.querySelectorAll('.nav-btn'),
  viewSections: document.querySelectorAll('.view-section'),
  
  // Left Navigation Panel Elements
  navSidebarPanel: document.getElementById('navSidebarPanel'),
  sidebarToggleBtn: document.getElementById('sidebarToggleBtn'),
  sidebarToggleIcon: document.getElementById('sidebarToggleIcon'),
  speakingModuleGroup: document.getElementById('speakingModuleGroup'),
  speakingGroupToggle: document.getElementById('speakingGroupToggle'),
  speakingChevron: document.getElementById('speakingChevron'),
  writingModuleGroup: document.getElementById('writingModuleGroup'),
  writingGroupToggle: document.getElementById('writingGroupToggle'),
  writingChevron: document.getElementById('writingChevron'),
  activeModuleLabel: document.getElementById('activeModuleLabel'),
  writingTask1Pill: document.getElementById('writingTask1Pill'),
  writingTask2Pill: document.getElementById('writingTask2Pill'),

  // Speaking Task Pills & Switches
  task1Pill: document.getElementById('task1Pill'),
  task2Pill: document.getElementById('task2Pill'),
  task3Pill: document.getElementById('task3Pill'),
  task4Pill: document.getElementById('task4Pill'),
  task5Pill: document.getElementById('task5Pill'),
  task6Pill: document.getElementById('task6Pill'),
  task7Pill: document.getElementById('task7Pill'),
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

  // Standard Speaking Prompt Elements (Tasks 1, 2, 3, 4)
  promptScenarioBox: document.getElementById('promptScenarioBox'),
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
  
  // Speaking Timer & Cockpit Controls
  phaseIndicator: document.getElementById('phaseIndicator'),
  timerDisplay: document.getElementById('timerDisplay'),
  timerProgressCircle: document.getElementById('timerProgressCircle'),
  waveformContainer: document.getElementById('waveformContainer'),
  waveformCanvas: document.getElementById('waveformCanvas'),
  startTimerBtn: document.getElementById('startTimerBtn'),
  skipPrepBtn: document.getElementById('skipPrepBtn'),
  stopRecordBtn: document.getElementById('stopRecordBtn'),
  resetBtn: document.getElementById('resetBtn'),
  liveCaptionBox: document.getElementById('liveCaptionBox'),
  liveCaptionText: document.getElementById('liveCaptionText'),
  
  // Audio Playback Card
  playbackCard: document.getElementById('playbackCard'),
  audioPlayback: document.getElementById('audioPlayback'),
  downloadAudioBtn: document.getElementById('downloadAudioBtn'),
  copyAiPromptBtn: document.getElementById('copyAiPromptBtn'),
  transcriptAnalysisCard: document.getElementById('transcriptAnalysisCard'),
  metricWpm: document.getElementById('metricWpm'),
  metricWordCount: document.getElementById('metricWordCount'),
  metricFillers: document.getElementById('metricFillers'),
  highlightedTranscriptText: document.getElementById('highlightedTranscriptText'),

  // Writing Simulator Container Elements
  writingScenarioBox: document.getElementById('writingScenarioBox'),
  wtCategoryTag: document.getElementById('wtCategoryTag'),
  wtTaskTypeTag: document.getElementById('wtTaskTypeTag'),
  wtToneTag: document.getElementById('wtToneTag'),
  wtPromptTitle: document.getElementById('wtPromptTitle'),
  wtScenarioText: document.getElementById('wtScenarioText'),
  wt1RequirementsBox: document.getElementById('wt1RequirementsBox'),
  wt1BulletList: document.getElementById('wt1BulletList'),
  wt2SurveyBox: document.getElementById('wt2SurveyBox'),
  wt2QuestionText: document.getElementById('wt2QuestionText'),
  wt2OptACard: document.getElementById('wt2OptACard'),
  wt2OptATitle: document.getElementById('wt2OptATitle'),
  wt2OptADesc: document.getElementById('wt2OptADesc'),
  wt2RadioA: document.getElementById('wt2RadioA'),
  wt2OptBCard: document.getElementById('wt2OptBCard'),
  wt2OptBTitle: document.getElementById('wt2OptBTitle'),
  wt2OptBDesc: document.getElementById('wt2OptBDesc'),
  wt2RadioB: document.getElementById('wt2RadioB'),
  wt2PersuasionBox: document.getElementById('wt2PersuasionBox'),
  wt2PersuasionList: document.getElementById('wt2PersuasionList'),
  wtHintsBox: document.getElementById('wtHintsBox'),
  wtVocabTags: document.getElementById('wtVocabTags'),
  wtNextBtn: document.getElementById('wtNextBtn'),
  wtRandomBtn: document.getElementById('wtRandomBtn'),
  wtViewModelBtn: document.getElementById('wtViewModelBtn'),

  // Writing Editor Elements
  toolCutBtn: document.getElementById('toolCutBtn'),
  toolCopyBtn: document.getElementById('toolCopyBtn'),
  toolPasteBtn: document.getElementById('toolPasteBtn'),
  toolUndoBtn: document.getElementById('toolUndoBtn'),
  toolRedoBtn: document.getElementById('toolRedoBtn'),
  spellcheckToggle: document.getElementById('spellcheckToggle'),
  toolClearBtn: document.getElementById('toolClearBtn'),
  wt1SubjectGroup: document.getElementById('wt1SubjectGroup'),
  wtSubjectInput: document.getElementById('wtSubjectInput'),
  wtEditorTextarea: document.getElementById('wtEditorTextarea'),
  wtWordCountBadge: document.getElementById('wtWordCountBadge'),
  wtWordCountNum: document.getElementById('wtWordCountNum'),
  wtCharCountText: document.getElementById('wtCharCountText'),
  wtWordStatusPill: document.getElementById('wtWordStatusPill'),
  wtTimerDisplay: document.getElementById('wtTimerDisplay'),
  wtTimerStatus: document.getElementById('wtTimerStatus'),
  wtStartTimerBtn: document.getElementById('wtStartTimerBtn'),
  wtPauseTimerBtn: document.getElementById('wtPauseTimerBtn'),
  wtResetTimerBtn: document.getElementById('wtResetTimerBtn'),
  wtSubmitBtn: document.getElementById('wtSubmitBtn'),
  wtResultCard: document.getElementById('wtResultCard'),
  wtSubmissionTimeTag: document.getElementById('wtSubmissionTimeTag'),
  statFinalWords: document.getElementById('statFinalWords'),
  statSentences: document.getElementById('statSentences'),
  statAvgWordsPerSentence: document.getElementById('statAvgWordsPerSentence'),
  statParagraphs: document.getElementById('statParagraphs'),
  wtCopyAiPromptBtn: document.getElementById('wtCopyAiPromptBtn'),
  wtSaveHistoryBtn: document.getElementById('wtSaveHistoryBtn'),

  // Model Answer Modal Elements
  modelAnswerModal: document.getElementById('modelAnswerModal'),
  modelModalCloseBtn: document.getElementById('modelModalCloseBtn'),
  modelModalTitle: document.getElementById('modelModalTitle'),
  modelModalSubtitle: document.getElementById('modelModalSubtitle'),
  modelWordCountTag: document.getElementById('modelWordCountTag'),
  modelEssayText: document.getElementById('modelEssayText'),
  modelAnalysisContent: document.getElementById('modelAnalysisContent'),
  copyModelAnswerBtn: document.getElementById('copyModelAnswerBtn'),
  closeModelAnswerBtn: document.getElementById('closeModelAnswerBtn'),

  // Strategy Modal Elements
  strategyModal: document.getElementById('strategyModal'),
  strategyModalCloseBtn: document.getElementById('strategyModalCloseBtn'),
  strategyModalContent: document.getElementById('strategyModalContent'),
  openStrategyModalBtn: document.getElementById('openStrategyModalBtn'),
  strategyTabBtns: document.querySelectorAll('.strategy-tab-btn'),
  
  // Prompts Bank Elements
  bankTask1Tab: document.getElementById('bankTask1Tab'),
  bankTask2Tab: document.getElementById('bankTask2Tab'),
  bankTask3Tab: document.getElementById('bankTask3Tab'),
  bankTask4Tab: document.getElementById('bankTask4Tab'),
  bankTask5Tab: document.getElementById('bankTask5Tab'),
  bankTask6Tab: document.getElementById('bankTask6Tab'),
  bankTask7Tab: document.getElementById('bankTask7Tab'),
  bankWriting1Tab: document.getElementById('bankWriting1Tab'),
  bankWriting2Tab: document.getElementById('bankWriting2Tab'),
  bankSearchInput: document.getElementById('bankSearchInput'),
  bankCategorySelect: document.getElementById('bankCategorySelect'),
  promptsGrid: document.getElementById('promptsGrid'),
  
  // History Elements
  historySpeakingTab: document.getElementById('historySpeakingTab'),
  historyWritingTab: document.getElementById('historyWritingTab'),
  speakingHistoryContainer: document.getElementById('speakingHistoryContainer'),
  writingHistoryContainer: document.getElementById('writingHistoryContainer'),
  historyList: document.getElementById('historyList'),
  historyEmpty: document.getElementById('historyEmpty'),
  writingHistoryList: document.getElementById('writingHistoryList'),
  writingHistoryEmpty: document.getElementById('writingHistoryEmpty')
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
  const targetTask = taskId || (state.currentModule === 'writing' ? ('wt' + state.currentWritingTask) : state.currentTask) || 1;
  
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
  // Main Navigation Tabs (Simulator, Bank, History)
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

  // Left Sidebar Accordion Toggles
  if (elements.speakingGroupToggle) {
    elements.speakingGroupToggle.addEventListener('click', () => {
      elements.speakingModuleGroup.classList.toggle('open');
    });
  }
  if (elements.writingGroupToggle) {
    elements.writingGroupToggle.addEventListener('click', () => {
      elements.writingModuleGroup.classList.toggle('open');
    });
  }

  // Sidebar Collapse Rail Toggle
  if (elements.sidebarToggleBtn) {
    elements.sidebarToggleBtn.addEventListener('click', () => {
      elements.navSidebarPanel.classList.toggle('collapsed');
      const isCollapsed = elements.navSidebarPanel.classList.contains('collapsed');
      elements.sidebarToggleIcon.textContent = isCollapsed ? '▶' : '◀';
    });
  }

  // Speaking Task Switch Pills
  elements.task1Pill.addEventListener('click', () => switchTask(1));
  elements.task2Pill.addEventListener('click', () => switchTask(2));
  elements.task3Pill.addEventListener('click', () => switchTask(3));
  elements.task4Pill.addEventListener('click', () => switchTask(4));
  if (elements.task5Pill) elements.task5Pill.addEventListener('click', () => switchTask(5));
  if (elements.task6Pill) elements.task6Pill.addEventListener('click', () => switchTask(6));
  if (elements.task7Pill) elements.task7Pill.addEventListener('click', () => switchTask(7));
  elements.taskComboPill.addEventListener('click', () => switchTask('combo'));

  // Writing Task Switch Pills
  if (elements.writingTask1Pill) {
    elements.writingTask1Pill.addEventListener('click', () => switchWritingTask(1));
  }
  if (elements.writingTask2Pill) {
    elements.writingTask2Pill.addEventListener('click', () => switchWritingTask(2));
  }

  // Mode Toggle (Exam vs Practice)
  elements.modeToggle.addEventListener('change', (e) => {
    state.isExamMode = e.target.checked;
    elements.modeLabel.textContent = state.isExamMode ? 'Exam Mode' : 'Practice Mode';
    elements.skipPrepBtn.style.display = state.isExamMode ? 'none' : 'inline-flex';
    
    // Toggle study hints visibility based on Exam Mode
    if (state.currentModule === 'speaking') {
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
    } else {
      if (elements.wtHintsBox) {
        elements.wtHintsBox.style.display = state.isExamMode ? 'none' : 'block';
      }
      if (elements.wt2PersuasionBox && state.currentWritingTask === 2) {
        elements.wt2PersuasionBox.style.display = state.isExamMode ? 'none' : 'block';
      }
    }
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

  // Standard Speaking Prompt Buttons
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
  if (elements.t7NextBtn) {
    elements.t7NextBtn.addEventListener('click', () => nextPrompt());
  }
  if (elements.t7RandomBtn) {
    elements.t7RandomBtn.addEventListener('click', () => getRandomPrompt());
  }

  // Speaking Timer Controls
  elements.startTimerBtn.addEventListener('click', () => startPracticeOrExam());
  elements.skipPrepBtn.addEventListener('click', () => startSpeakingPhase());
  elements.stopRecordBtn.addEventListener('click', () => finishRecording());
  elements.resetBtn.addEventListener('click', () => resetTimerState());

  // Audio Playback & Speaking AI Eval
  elements.downloadAudioBtn.addEventListener('click', () => downloadAudio());
  elements.copyAiPromptBtn.addEventListener('click', () => copyAiEvaluationPrompt());

  // Writing Prompt Buttons
  if (elements.wtNextBtn) {
    elements.wtNextBtn.addEventListener('click', () => nextWritingPrompt());
  }
  if (elements.wtRandomBtn) {
    elements.wtRandomBtn.addEventListener('click', () => getRandomWritingPrompt());
  }
  if (elements.wtViewModelBtn) {
    elements.wtViewModelBtn.addEventListener('click', () => openModelAnswerModal());
  }

  // Writing Task 2 Option Cards
  if (elements.wt2OptACard) {
    elements.wt2OptACard.addEventListener('click', () => selectWritingOption('A'));
  }
  if (elements.wt2OptBCard) {
    elements.wt2OptBCard.addEventListener('click', () => selectWritingOption('B'));
  }

  // Writing Editor Live Input & Toolbar
  if (elements.wtEditorTextarea) {
    elements.wtEditorTextarea.addEventListener('input', () => updateWritingWordCount());
    elements.wtEditorTextarea.addEventListener('keydown', (e) => {
      if (e.key === 'Tab') {
        e.preventDefault();
        const start = elements.wtEditorTextarea.selectionStart;
        const end = elements.wtEditorTextarea.selectionEnd;
        elements.wtEditorTextarea.value = elements.wtEditorTextarea.value.substring(0, start) + '    ' + elements.wtEditorTextarea.value.substring(end);
        elements.wtEditorTextarea.selectionStart = elements.wtEditorTextarea.selectionEnd = start + 4;
        updateWritingWordCount();
      }
    });
  }

  if (elements.toolCutBtn) {
    elements.toolCutBtn.addEventListener('click', () => handleEditorCut());
  }
  if (elements.toolCopyBtn) {
    elements.toolCopyBtn.addEventListener('click', () => handleEditorCopy());
  }
  if (elements.toolPasteBtn) {
    elements.toolPasteBtn.addEventListener('click', () => handleEditorPaste());
  }
  if (elements.toolUndoBtn) {
    elements.toolUndoBtn.addEventListener('click', () => handleEditorUndo());
  }
  if (elements.toolRedoBtn) {
    elements.toolRedoBtn.addEventListener('click', () => handleEditorRedo());
  }
  if (elements.spellcheckToggle) {
    elements.spellcheckToggle.addEventListener('change', (e) => {
      elements.wtEditorTextarea.spellcheck = e.target.checked;
      showToast(e.target.checked ? 'Spell check assistance enabled' : 'Spell check assistance disabled');
    });
  }
  if (elements.toolClearBtn) {
    elements.toolClearBtn.addEventListener('click', () => {
      if (elements.wtEditorTextarea.value.trim().length === 0 || confirm('Are you sure you want to clear your writing draft?')) {
        saveUndoState();
        elements.wtEditorTextarea.value = '';
        updateWritingWordCount();
      }
    });
  }

  // Writing Timers & Actions
  if (elements.wtStartTimerBtn) {
    elements.wtStartTimerBtn.addEventListener('click', () => startWritingTimer());
  }
  if (elements.wtPauseTimerBtn) {
    elements.wtPauseTimerBtn.addEventListener('click', () => pauseWritingTimer());
  }
  if (elements.wtResetTimerBtn) {
    elements.wtResetTimerBtn.addEventListener('click', () => resetWritingTimer());
  }
  if (elements.wtSubmitBtn) {
    elements.wtSubmitBtn.addEventListener('click', () => submitWritingResponse());
  }
  if (elements.wtCopyAiPromptBtn) {
    elements.wtCopyAiPromptBtn.addEventListener('click', () => copyWritingAiEvaluationPrompt());
  }
  if (elements.wtSaveHistoryBtn) {
    elements.wtSaveHistoryBtn.addEventListener('click', () => saveCurrentWritingSubmission());
  }

  // Model Answer Modal Events
  if (elements.modelModalCloseBtn) {
    elements.modelModalCloseBtn.addEventListener('click', () => closeModelAnswerModal());
  }
  if (elements.closeModelAnswerBtn) {
    elements.closeModelAnswerBtn.addEventListener('click', () => closeModelAnswerModal());
  }
  if (elements.copyModelAnswerBtn) {
    elements.copyModelAnswerBtn.addEventListener('click', () => copyModelAnswer());
  }
  if (elements.modelAnswerModal) {
    elements.modelAnswerModal.addEventListener('click', (e) => {
      if (e.target === elements.modelAnswerModal) closeModelAnswerModal();
    });
  }

  // Strategy Modal Controls
  if (elements.openStrategyModalBtn) {
    elements.openStrategyModalBtn.addEventListener('click', () => openStrategyModal());
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
  if (elements.bankWriting1Tab) elements.bankWriting1Tab.addEventListener('click', () => switchBankTab('wt1'));
  if (elements.bankWriting2Tab) elements.bankWriting2Tab.addEventListener('click', () => switchBankTab('wt2'));

  elements.bankSearchInput.addEventListener('input', (e) => {
    state.searchQuery = e.target.value.toLowerCase();
    renderPromptsBank();
  });

  elements.bankCategorySelect.addEventListener('change', (e) => {
    state.currentFilterCategory = e.target.value;
    renderPromptsBank();
  });

  // History Sub-Tabs
  if (elements.historySpeakingTab) {
    elements.historySpeakingTab.addEventListener('click', () => switchHistorySubTab('speaking'));
  }
  if (elements.historyWritingTab) {
    elements.historyWritingTab.addEventListener('click', () => switchHistorySubTab('writing'));
  }
}



// ==========================================
// SPEAKING ENGINE & CONTROLLERS
// ==========================================

function switchTask(taskId) {
  state.currentModule = 'speaking';
  state.currentTask = taskId;
  state.comboSubTask = 3;

  document.querySelector('.simulator-layout').classList.remove('writing-mode-active');
  if (elements.writingScenarioBox) elements.writingScenarioBox.style.display = 'none';
  if (elements.promptScenarioBox) elements.promptScenarioBox.style.display = 'grid';
  if (elements.activeModuleLabel) elements.activeModuleLabel.textContent = 'Speaking Practice';

  const allPills = [
    elements.task1Pill, elements.task2Pill, elements.task3Pill, 
    elements.task4Pill, elements.task5Pill, elements.task6Pill,
    elements.task7Pill, elements.taskComboPill,
    elements.writingTask1Pill, elements.writingTask2Pill
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

function getPromptsArray(taskId) {
  if (taskId === 1) return TASK1_PROMPTS;
  if (taskId === 2) return TASK2_PROMPTS;
  if (taskId === 5) return TASK5_PROMPTS;
  if (taskId === 6) return TASK6_PROMPTS;
  if (taskId === 7) return TASK7_PROMPTS;
  if (taskId === 'wt1') return (typeof WRITING_TASK1_PROMPTS !== 'undefined' ? WRITING_TASK1_PROMPTS : []);
  if (taskId === 'wt2') return (typeof WRITING_TASK2_PROMPTS !== 'undefined' ? WRITING_TASK2_PROMPTS : []);
  return SCENARIO_PROMPTS;
}

function renderFeaturesList(containerEl, features) {
  if (!containerEl) return;
  containerEl.innerHTML = (features || []).map(f => `<li>${f}</li>`).join('');
}

function selectT5Option(optKey) {
  state.t5SelectedOption = optKey;
  const p = TASK5_PROMPTS[state.currentPromptIndex];
  if (!p) return;

  const chosenOpt = (optKey === 'opt_a') ? p.optionA : p.optionB;
  const partnerOpt = p.partnerOption;

  if (elements.t5ChosenName) elements.t5ChosenName.textContent = chosenOpt.name;
  if (elements.t5ChosenPrice) elements.t5ChosenPrice.textContent = chosenOpt.price;
  if (elements.t5ChosenLocation) elements.t5ChosenLocation.textContent = chosenOpt.location;
  if (elements.t5ChosenSpecs) elements.t5ChosenSpecs.textContent = chosenOpt.specs;
  renderFeaturesList(elements.t5ChosenFeatures, chosenOpt.features);

  if (elements.t5PartnerName) elements.t5PartnerName.textContent = partnerOpt.name;
  if (elements.t5PartnerPrice) elements.t5PartnerPrice.textContent = partnerOpt.price;
  if (elements.t5PartnerLocation) elements.t5PartnerLocation.textContent = partnerOpt.location;
  if (elements.t5PartnerSpecs) elements.t5PartnerSpecs.textContent = partnerOpt.specs;
  renderFeaturesList(elements.t5PartnerFeatures, partnerOpt.features);

  if (elements.t5PartnerCallout) {
    elements.t5PartnerCallout.innerHTML = `You chose <strong>${chosenOpt.name}</strong>. Your partner, Chris, chose <strong>${partnerOpt.name}</strong>. Persuade Chris why your choice is better.`;
  }

  if (elements.t5GuidanceList) {
    elements.t5GuidanceList.innerHTML = (p.persuasionGuidance || []).map(g => `<li>${g}</li>`).join('');
  }

  if (elements.t5SelectionStep) elements.t5SelectionStep.style.display = 'none';
  if (elements.t5PersuasionStep) elements.t5PersuasionStep.style.display = 'block';
  if (elements.t5GuidanceBox) elements.t5GuidanceBox.style.display = state.isExamMode ? 'none' : 'block';
}

function resetT5SelectionStep() {
  state.t5SelectedOption = null;
  if (elements.t5SelectionStep) elements.t5SelectionStep.style.display = 'block';
  if (elements.t5PersuasionStep) elements.t5PersuasionStep.style.display = 'none';
  if (elements.t5GuidanceBox) elements.t5GuidanceBox.style.display = 'none';
}

function selectT6Choice(choiceKey) {
  state.t6SelectedChoice = choiceKey;
  if (elements.t6ChoiceACard && elements.t6ChoiceBCard) {
    elements.t6ChoiceACard.classList.toggle('active', choiceKey === 'choice_a');
    elements.t6ChoiceBCard.classList.toggle('active', choiceKey === 'choice_b');
  }
}

function loadPrompt(taskId, index) {
  state.currentPromptIndex = index;
  const prompts = getPromptsArray(taskId);
  if (!prompts || prompts.length === 0) return;
  const p = prompts[index % prompts.length];

  if (elements.playbackCard) elements.playbackCard.style.display = 'none';
  if (elements.transcriptAnalysisCard) elements.transcriptAnalysisCard.style.display = 'none';

  if (taskId === 5) {
    if (elements.promptDetailsColumn) elements.promptDetailsColumn.style.display = 'none';
    if (elements.task6Container) elements.task6Container.style.display = 'none';
    if (elements.task7Container) elements.task7Container.style.display = 'none';
    if (elements.scenarioImageContainer) elements.scenarioImageContainer.style.display = 'none';
    if (elements.task5Container) elements.task5Container.style.display = 'block';

    if (elements.t5CategoryTag) elements.t5CategoryTag.textContent = p.category;
    if (elements.t5PromptIdTag) elements.t5PromptIdTag.textContent = `Task 5 #${index + 1} / ${prompts.length}`;
    if (elements.t5Title) elements.t5Title.textContent = p.title;
    if (elements.t5ContextText) elements.t5ContextText.textContent = p.context;

    if (elements.t5OptAName) elements.t5OptAName.textContent = p.optionA.name;
    if (elements.t5OptAPrice) elements.t5OptAPrice.textContent = p.optionA.price;
    if (elements.t5OptALocation) elements.t5OptALocation.textContent = p.optionA.location;
    if (elements.t5OptASpecs) elements.t5OptASpecs.textContent = p.optionA.specs;
    renderFeaturesList(elements.t5OptAFeatures, p.optionA.features);

    if (elements.t5OptBName) elements.t5OptBName.textContent = p.optionB.name;
    if (elements.t5OptBPrice) elements.t5OptBPrice.textContent = p.optionB.price;
    if (elements.t5OptBLocation) elements.t5OptBLocation.textContent = p.optionB.location;
    if (elements.t5OptBSpecs) elements.t5OptBSpecs.textContent = p.optionB.specs;
    renderFeaturesList(elements.t5OptBFeatures, p.optionB.features);

    resetT5SelectionStep();
    return;
  }

  if (taskId === 6) {
    if (elements.promptDetailsColumn) elements.promptDetailsColumn.style.display = 'none';
    if (elements.task5Container) elements.task5Container.style.display = 'none';
    if (elements.task7Container) elements.task7Container.style.display = 'none';
    if (elements.scenarioImageContainer) elements.scenarioImageContainer.style.display = 'none';
    if (elements.task6Container) elements.task6Container.style.display = 'block';

    if (elements.t6CategoryTag) elements.t6CategoryTag.textContent = p.category;
    if (elements.t6PromptIdTag) elements.t6PromptIdTag.textContent = `Task 6 #${index + 1} / ${prompts.length}`;
    if (elements.t6Title) elements.t6Title.textContent = p.title;
    if (elements.t6SituationText) elements.t6SituationText.textContent = p.situation;

    if (elements.t6ChoiceARole) elements.t6ChoiceARole.textContent = p.choiceA.role;
    if (elements.t6ChoiceALabel) elements.t6ChoiceALabel.textContent = p.choiceA.label;
    if (elements.t6ChoiceAObj) elements.t6ChoiceAObj.textContent = p.choiceA.objective;
    renderFeaturesList(elements.t6ChoiceAPoints, p.choiceA.suggestedPoints);

    if (elements.t6ChoiceBRole) elements.t6ChoiceBRole.textContent = p.choiceB.role;
    if (elements.t6ChoiceBLabel) elements.t6ChoiceBLabel.textContent = p.choiceB.label;
    if (elements.t6ChoiceBObj) elements.t6ChoiceBObj.textContent = p.choiceB.objective;
    renderFeaturesList(elements.t6ChoiceBPoints, p.choiceB.suggestedPoints);

    if (elements.t6DiplomaticList) {
      elements.t6DiplomaticList.innerHTML = (p.diplomaticPhrases || []).map(dp => `<li>${dp}</li>`).join('');
    }
    if (elements.t6DiplomaticBox) {
      elements.t6DiplomaticBox.style.display = state.isExamMode ? 'none' : 'block';
    }

    selectT6Choice('choice_a');
    return;
  }

  if (taskId === 7) {
    if (elements.promptDetailsColumn) elements.promptDetailsColumn.style.display = 'none';
    if (elements.task5Container) elements.task5Container.style.display = 'none';
    if (elements.task6Container) elements.task6Container.style.display = 'none';
    if (elements.scenarioImageContainer) elements.scenarioImageContainer.style.display = 'none';
    if (elements.task7Container) elements.task7Container.style.display = 'block';

    if (elements.t7CategoryTag) elements.t7CategoryTag.textContent = p.category;
    if (elements.t7PromptIdTag) elements.t7PromptIdTag.textContent = `Task 7 #${index + 1} / ${prompts.length}`;
    if (elements.t7Title) elements.t7Title.textContent = p.title;
    if (elements.t7PromptText) elements.t7PromptText.textContent = p.prompt;

    if (elements.t7SideATitle) elements.t7SideATitle.textContent = p.sideA ? p.sideA.label : 'Perspective A (Pro)';
    if (elements.t7SideAPoints) renderFeaturesList(elements.t7SideAPoints, p.sideA ? p.sideA.points : []);
    if (elements.t7SideBTitle) elements.t7SideBTitle.textContent = p.sideB ? p.sideB.label : 'Perspective B (Con)';
    if (elements.t7SideBPoints) renderFeaturesList(elements.t7SideBPoints, p.sideB ? p.sideB.points : []);

    if (elements.t7VocabList && p.opinionVocab) {
      elements.t7VocabList.innerHTML = p.opinionVocab.map(v => `<span class="vocab-tag">${v}</span>`).join('');
    }
    if (elements.t7VocabBox) {
      elements.t7VocabBox.style.display = state.isExamMode ? 'none' : 'block';
    }
    return;
  }

  if (elements.task5Container) elements.task5Container.style.display = 'none';
  if (elements.task6Container) elements.task6Container.style.display = 'none';
  if (elements.task7Container) elements.task7Container.style.display = 'none';
  if (elements.promptDetailsColumn) elements.promptDetailsColumn.style.display = 'block';

  if (elements.categoryTag) elements.categoryTag.textContent = p.category;
  if (elements.promptIdTag) {
    elements.promptIdTag.textContent = (taskId === 'combo') ? `Combo 3+4 #${index + 1} / ${prompts.length}` : `Task ${taskId} #${index + 1} / ${prompts.length}`;
  }
  if (elements.promptTitle) elements.promptTitle.textContent = p.title;

  let promptString = '';
  if (taskId === 1 || taskId === 2) {
    promptString = p.prompt;
    if (elements.scenarioImageContainer) elements.scenarioImageContainer.style.display = 'none';
    if (elements.promptHintsBox) elements.promptHintsBox.style.display = 'none';
  } else if (taskId === 3) {
    promptString = p.task3Prompt;
    if (elements.scenarioImageContainer) elements.scenarioImageContainer.style.display = 'block';
    if (elements.scenarioImg) elements.scenarioImg.src = p.imageFile;
    if (elements.promptHintsList && p.spatialHints) {
      elements.promptHintsTitle.textContent = '📍 Study Guidance & Spatial Locations:';
      elements.promptHintsList.innerHTML = p.spatialHints.map(h => `<li>${h}</li>`).join('');
    }
    if (elements.promptHintsBox) elements.promptHintsBox.style.display = state.isExamMode ? 'none' : 'block';
  } else if (taskId === 4) {
    promptString = p.task4Prompt;
    if (elements.scenarioImageContainer) elements.scenarioImageContainer.style.display = 'block';
    if (elements.scenarioImg) elements.scenarioImg.src = p.imageFile;
    if (elements.promptHintsList && p.predictionClues) {
      elements.promptHintsTitle.textContent = '🔮 Study Guidance & Prediction Clues:';
      elements.promptHintsList.innerHTML = p.predictionClues.map(h => `<li>${h}</li>`).join('');
    }
    if (elements.promptHintsBox) elements.promptHintsBox.style.display = state.isExamMode ? 'none' : 'block';
  } else if (taskId === 'combo') {
    promptString = (state.comboSubTask === 3) ? `<strong>Part 1 (Describe Scene):</strong> ${p.task3Prompt}` : `<strong>Part 2 (Make Predictions):</strong> ${p.task4Prompt}`;
    if (elements.scenarioImageContainer) elements.scenarioImageContainer.style.display = 'block';
    if (elements.scenarioImg) elements.scenarioImg.src = p.imageFile;
    if (elements.promptHintsBox) elements.promptHintsBox.style.display = 'none';
  }

  if (elements.promptText) elements.promptText.innerHTML = promptString;
}

function nextPrompt() {
  const prompts = getPromptsArray(state.currentTask);
  let nextIdx = (state.currentPromptIndex + 1) % prompts.length;
  loadPrompt(state.currentTask, nextIdx);
  resetTimerState();
}

function getRandomPrompt() {
  const prompts = getPromptsArray(state.currentTask);
  let randIdx = Math.floor(Math.random() * prompts.length);
  loadPrompt(state.currentTask, randIdx);
  resetTimerState();
}

function openLightbox() {
  const currentPrompts = getPromptsArray(state.currentTask);
  const p = currentPrompts[state.currentPromptIndex];
  if (p && p.imageFile && elements.lightboxImg && elements.lightboxModal) {
    elements.lightboxImg.src = p.imageFile;
    elements.lightboxModal.classList.add('active');
  }
}

function closeLightbox() {
  if (elements.lightboxModal) elements.lightboxModal.classList.remove('active');
}

function downloadScenarioImage() {
  const currentPrompts = getPromptsArray(state.currentTask);
  const p = currentPrompts[state.currentPromptIndex];
  if (!p || !p.imageFile) return;
  const a = document.createElement('a');
  a.href = p.imageFile;
  a.download = `CELPIP_Scenario_${p.id || 'image'}.jpg`;
  a.click();
}

async function copyScenarioImage() {
  const currentPrompts = getPromptsArray(state.currentTask);
  const p = currentPrompts[state.currentPromptIndex];
  if (!p || !p.imageFile) return;
  try {
    const img = new Image();
    img.src = p.imageFile;
    await img.decode();
    const canvas = document.createElement('canvas');
    canvas.width = img.naturalWidth || 800;
    canvas.height = img.naturalHeight || 500;
    const ctx = canvas.getContext('2d');
    ctx.drawImage(img, 0, 0);
    canvas.toBlob(blob => {
      if (!blob) return showToast('Could not copy image.');
      navigator.clipboard.write([new ClipboardItem({ 'image/png': blob })]).then(() => {
        showToast('Image copied to clipboard!');
      });
    }, 'image/png');
  } catch (err) {
    console.error('Copy image error:', err);
    showToast('Failed to copy image.');
  }
}

function getTaskTimes() {
  if (state.currentTask === 1) return { prep: 30, speak: 90 };
  if (state.currentTask === 2) return { prep: 30, speak: 60 };
  if (state.currentTask === 3) return { prep: 30, speak: 60 };
  if (state.currentTask === 4) return { prep: 30, speak: 60 };
  if (state.currentTask === 5) return { prep: 60, speak: 60 };
  if (state.currentTask === 6) return { prep: 60, speak: 60 };
  if (state.currentTask === 7) return { prep: 30, speak: 90 };
  if (state.currentTask === 'combo') return { prep: 30, speak: 120 };
  return { prep: 30, speak: 60 };
}

function resetTimerState() {
  if (state.timerInterval) clearInterval(state.timerInterval);
  state.timerState = 'idle';
  const times = getTaskTimes();
  state.prepTimeRemaining = times.prep;
  state.speakTimeRemaining = times.speak;

  if (elements.phaseIndicator) {
    elements.phaseIndicator.textContent = 'READY';
    elements.phaseIndicator.className = 'phase-indicator';
  }
  if (elements.timerDisplay) {
    elements.timerDisplay.textContent = formatTime(state.isPrepEnabled ? state.prepTimeRemaining : state.speakTimeRemaining);
  }
  if (elements.timerProgressCircle) {
    elements.timerProgressCircle.style.strokeDashoffset = '0';
    elements.timerProgressCircle.style.stroke = 'url(#timerIdleGrad)';
  }
  if (elements.startTimerBtn) elements.startTimerBtn.style.display = 'inline-flex';
  if (elements.skipPrepBtn) elements.skipPrepBtn.style.display = 'none';
  if (elements.stopRecordBtn) elements.stopRecordBtn.style.display = 'none';
  if (elements.resetBtn) elements.resetBtn.style.display = 'none';
  if (elements.waveformContainer) elements.waveformContainer.style.display = 'none';
  if (elements.liveCaptionBox) elements.liveCaptionBox.style.display = 'none';
}

function startPracticeOrExam() {
  const times = getTaskTimes();
  if (state.isPrepEnabled) {
    state.timerState = 'prep';
    state.prepTimeRemaining = times.prep;
    if (elements.phaseIndicator) {
      elements.phaseIndicator.textContent = 'PREPARATION';
      elements.phaseIndicator.className = 'phase-indicator phase-prep';
    }
    if (elements.timerProgressCircle) elements.timerProgressCircle.style.stroke = 'url(#timerPrepGrad)';
    if (elements.startTimerBtn) elements.startTimerBtn.style.display = 'none';
    if (elements.skipPrepBtn) elements.skipPrepBtn.style.display = state.isExamMode ? 'none' : 'inline-flex';
    if (elements.resetBtn) elements.resetBtn.style.display = 'inline-flex';

    playBeep(440, 'sine', 0.2);
    state.timerInterval = setInterval(timerTick, 1000);
  } else {
    startSpeakingPhase();
  }
}

function startSpeakingPhase() {
  if (state.timerInterval) clearInterval(state.timerInterval);
  state.timerState = 'speaking';
  const times = getTaskTimes();
  state.speakTimeRemaining = times.speak;

  if (elements.phaseIndicator) {
    elements.phaseIndicator.textContent = 'RECORDING';
    elements.phaseIndicator.className = 'phase-indicator phase-speak';
  }
  if (elements.timerProgressCircle) elements.timerProgressCircle.style.stroke = 'url(#timerSpeakGrad)';
  if (elements.skipPrepBtn) elements.skipPrepBtn.style.display = 'none';
  if (elements.startTimerBtn) elements.startTimerBtn.style.display = 'none';
  if (elements.stopRecordBtn) elements.stopRecordBtn.style.display = 'inline-flex';
  if (elements.resetBtn) elements.resetBtn.style.display = 'inline-flex';

  playBeep(880, 'triangle', 0.4);
  startAudioRecording();
  startSpeechRecognition();

  state.timerInterval = setInterval(timerTick, 1000);
}

function timerTick() {
  const times = getTaskTimes();
  const radius = 52;
  const circumference = 2 * Math.PI * radius;

  if (state.timerState === 'prep') {
    state.prepTimeRemaining--;
    if (elements.timerDisplay) elements.timerDisplay.textContent = formatTime(state.prepTimeRemaining);
    const progress = (times.prep - state.prepTimeRemaining) / times.prep;
    if (elements.timerProgressCircle) elements.timerProgressCircle.style.strokeDashoffset = (circumference * progress).toString();

    if (state.prepTimeRemaining <= 0) {
      startSpeakingPhase();
    }
  } else if (state.timerState === 'speaking') {
    state.speakTimeRemaining--;
    if (elements.timerDisplay) elements.timerDisplay.textContent = formatTime(state.speakTimeRemaining);
    const progress = (times.speak - state.speakTimeRemaining) / times.speak;
    if (elements.timerProgressCircle) elements.timerProgressCircle.style.strokeDashoffset = (circumference * progress).toString();

    if (state.speakTimeRemaining <= 0) {
      finishRecording();
    }
  }
}

function formatTime(totalSeconds) {
  const m = Math.floor(Math.max(0, totalSeconds) / 60);
  const s = Math.max(0, totalSeconds) % 60;
  return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
}

async function startAudioRecording() {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    state.mediaRecorder = new MediaRecorder(stream);
    state.audioChunks = [];

    state.audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const source = state.audioContext.createMediaStreamSource(stream);
    state.analyser = state.audioContext.createAnalyser();
    state.analyser.fftSize = 64;
    source.connect(state.analyser);

    if (elements.waveformContainer) elements.waveformContainer.style.display = 'block';
    drawWaveform();

    state.mediaRecorder.ondataavailable = (e) => {
      if (e.data.size > 0) state.audioChunks.push(e.data);
    };

    state.mediaRecorder.onstop = () => {
      state.recordedAudioBlob = new Blob(state.audioChunks, { type: 'audio/webm' });
      state.recordedAudioUrl = URL.createObjectURL(state.recordedAudioBlob);
      if (elements.audioPlayback) elements.audioPlayback.src = state.recordedAudioUrl;
      if (elements.playbackCard) elements.playbackCard.style.display = 'block';
      saveRecordingToIndexedDB();
    };

    state.mediaRecorder.start();
  } catch (err) {
    console.warn('Microphone access unavailable or denied:', err);
    showToast('Microphone access denied. Timer will run without audio recording.');
  }
}

function drawWaveform() {
  if (!state.analyser || !elements.waveformCanvas) return;
  const canvas = elements.waveformCanvas;
  const ctx = canvas.getContext('2d');
  const bufferLength = state.analyser.frequencyBinCount;
  const dataArray = new Uint8Array(bufferLength);

  function render() {
    state.animationFrameId = requestAnimationFrame(render);
    state.analyser.getByteFrequencyData(dataArray);

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const barWidth = (canvas.width / bufferLength) * 1.5;
    let x = 0;

    for (let i = 0; i < bufferLength; i++) {
      const barHeight = (dataArray[i] / 255) * canvas.height;
      ctx.fillStyle = `rgba(99, 102, 241, ${Math.max(0.3, dataArray[i] / 255)})`;
      ctx.fillRect(x, canvas.height - barHeight, barWidth, barHeight);
      x += barWidth + 1;
    }
  }
  render();
}

function stopAudioRecording() {
  if (state.mediaRecorder && state.mediaRecorder.state !== 'inactive') {
    state.mediaRecorder.stop();
    state.mediaRecorder.stream.getTracks().forEach(t => t.stop());
  }
  if (state.animationFrameId) cancelAnimationFrame(state.animationFrameId);
  if (elements.waveformContainer) elements.waveformContainer.style.display = 'none';
}

function finishRecording() {
  if (state.timerInterval) clearInterval(state.timerInterval);
  state.timerState = 'finished';

  if (elements.phaseIndicator) {
    elements.phaseIndicator.textContent = 'DONE';
    elements.phaseIndicator.className = 'phase-indicator';
  }
  if (elements.stopRecordBtn) elements.stopRecordBtn.style.display = 'none';
  if (elements.resetBtn) elements.resetBtn.style.display = 'inline-flex';

  playBeep(440, 'sine', 0.2);
  stopAudioRecording();
  stopSpeechRecognition();
  analyzeSpeechTranscript();
}

function startSpeechRecognition() {
  const SpeechRec = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SpeechRec) return;

  state.speechRecognition = new SpeechRec();
  state.speechRecognition.continuous = true;
  state.speechRecognition.interimResults = true;
  state.speechRecognition.lang = 'en-US';
  state.liveTranscript = '';
  state.recordingStartTime = Date.now();

  if (elements.liveCaptionBox) elements.liveCaptionBox.style.display = 'block';
  if (elements.liveCaptionText) elements.liveCaptionText.textContent = 'Listening to your voice...';

  state.speechRecognition.onresult = (event) => {
    let interim = '';
    let finalStr = '';
    for (let i = event.resultIndex; i < event.results.length; ++i) {
      if (event.results[i].isFinal) {
        finalStr += event.results[i][0].transcript + ' ';
      } else {
        interim += event.results[i][0].transcript;
      }
    }
    state.liveTranscript += finalStr;
    if (elements.liveCaptionText) {
      elements.liveCaptionText.textContent = (state.liveTranscript + interim) || 'Listening...';
    }
  };

  try {
    state.speechRecognition.start();
  } catch (err) {
    console.warn('Speech recognition start failed:', err);
  }
}

function stopSpeechRecognition() {
  if (state.speechRecognition) {
    try { state.speechRecognition.stop(); } catch (e) {}
  }
  if (elements.liveCaptionBox) elements.liveCaptionBox.style.display = 'none';
}

function analyzeSpeechTranscript() {
  if (!state.liveTranscript || state.liveTranscript.trim().length === 0) return;
  const words = state.liveTranscript.trim().split(/\s+/);
  const wordCount = words.length;
  const durationMinutes = (Date.now() - (state.recordingStartTime || Date.now())) / 60000;
  const wpm = durationMinutes > 0 ? Math.round(wordCount / durationMinutes) : 0;

  const fillerRegex = /\b(um|uh|er|ah|like|you know|basically|actually)\b/gi;
  const fillers = (state.liveTranscript.match(fillerRegex) || []).length;

  if (elements.metricWpm) elements.metricWpm.textContent = wpm;
  if (elements.metricWordCount) elements.metricWordCount.textContent = wordCount;
  if (elements.metricFillers) elements.metricFillers.textContent = fillers;

  const highlightedHtml = state.liveTranscript.replace(fillerRegex, match => `<span class="filler-word">${match}</span>`);
  if (elements.highlightedTranscriptText) elements.highlightedTranscriptText.innerHTML = highlightedHtml;
  if (elements.transcriptAnalysisCard) elements.transcriptAnalysisCard.style.display = 'block';
}

function saveRecordingToIndexedDB() {
  if (!db || !state.recordedAudioBlob) return;
  const currentPrompts = getPromptsArray(state.currentTask);
  const p = currentPrompts[state.currentPromptIndex] || {};

  const record = {
    taskId: state.currentTask,
    taskTitle: p.title || `Task ${state.currentTask}`,
    category: p.category || 'General',
    timestamp: Date.now(),
    audioBlob: state.recordedAudioBlob,
    transcript: state.liveTranscript || ''
  };

  const tx = db.transaction(STORE_NAME, 'readwrite');
  const store = tx.objectStore(STORE_NAME);
  store.add(record);
  tx.oncomplete = () => {
    renderHistory();
  };
}



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

function downloadAudio() {
  if (!state.recordedAudioUrl) return;
  const a = document.createElement('a');
  a.href = state.recordedAudioUrl;
  a.download = `CELPIP_Speaking_Task${state.currentTask}_${Date.now()}.webm`;
  a.click();
}



// ==========================================
// WRITING ENGINE & CONTROLLERS (TASKS 1 & 2)
// ==========================================

function switchWritingTask(taskId, index) {
  state.currentModule = 'writing';
  state.currentWritingTask = taskId; // 1 or 2
  state.currentWritingPromptIndex = (typeof index === 'number') ? index : 0;

  // Update layout & visibility
  document.querySelector('.simulator-layout').classList.add('writing-mode-active');
  if (elements.promptScenarioBox) elements.promptScenarioBox.style.display = 'none';
  if (elements.writingScenarioBox) elements.writingScenarioBox.style.display = 'grid';
  if (elements.activeModuleLabel) elements.activeModuleLabel.textContent = `Writing: Task ${taskId}`;

  const allPills = [
    elements.task1Pill, elements.task2Pill, elements.task3Pill, 
    elements.task4Pill, elements.task5Pill, elements.task6Pill,
    elements.task7Pill, elements.taskComboPill,
    elements.writingTask1Pill, elements.writingTask2Pill
  ].filter(Boolean);

  allPills.forEach(pill => pill.classList.remove('active'));
  if (taskId === 1 && elements.writingTask1Pill) elements.writingTask1Pill.classList.add('active');
  if (taskId === 2 && elements.writingTask2Pill) elements.writingTask2Pill.classList.add('active');

  loadWritingPrompt(taskId, state.currentWritingPromptIndex);
  resetWritingTimer();
}

function loadWritingPrompt(taskId, index) {
  const prompts = (taskId === 1) ? (typeof WRITING_TASK1_PROMPTS !== 'undefined' ? WRITING_TASK1_PROMPTS : []) : (typeof WRITING_TASK2_PROMPTS !== 'undefined' ? WRITING_TASK2_PROMPTS : []);
  if (!prompts || prompts.length === 0) return;
  
  state.currentWritingPromptIndex = index % prompts.length;
  const p = prompts[state.currentWritingPromptIndex];

  if (elements.wtCategoryTag) elements.wtCategoryTag.textContent = p.category || 'General';
  if (elements.wtTaskTypeTag) {
    elements.wtTaskTypeTag.textContent = (taskId === 1) ? `Writing Task 1 #${state.currentWritingPromptIndex + 1} / ${prompts.length}` : `Writing Task 2 #${state.currentWritingPromptIndex + 1} / ${prompts.length}`;
  }
  if (elements.wtToneTag) {
    elements.wtToneTag.textContent = p.tone || ((taskId === 1) ? 'Formal / Professional' : 'Civic Opinion');
  }
  if (elements.wtPromptTitle) elements.wtPromptTitle.textContent = p.title;

  if (taskId === 1) {
    // Task 1: Email
    if (elements.wtScenarioText) elements.wtScenarioText.textContent = p.scenario;
    if (elements.wt1RequirementsBox) elements.wt1RequirementsBox.style.display = 'block';
    if (elements.wt2SurveyBox) elements.wt2SurveyBox.style.display = 'none';
    if (elements.wt1SubjectGroup) elements.wt1SubjectGroup.style.display = 'flex';

    if (elements.wt1BulletList) {
      elements.wt1BulletList.innerHTML = (p.bulletPoints || []).map((b, i) => `<li onclick="toggleBulletComplete(this)">${b}</li>`).join('');
    }

    if (elements.wtSubjectInput) {
      elements.wtSubjectInput.value = p.sampleSubject || '';
    }
  } else {
    // Task 2: Survey
    if (elements.wtScenarioText) elements.wtScenarioText.textContent = p.context;
    if (elements.wt1RequirementsBox) elements.wt1RequirementsBox.style.display = 'none';
    if (elements.wt2SurveyBox) elements.wt2SurveyBox.style.display = 'flex';
    if (elements.wt1SubjectGroup) elements.wt1SubjectGroup.style.display = 'none';

    if (elements.wt2QuestionText) elements.wt2QuestionText.textContent = p.surveyQuestion || 'Choose your option and explain your reasons:';
    if (elements.wt2OptATitle) elements.wt2OptATitle.textContent = p.optionA ? p.optionA.title : 'Option A';
    if (elements.wt2OptADesc) elements.wt2OptADesc.textContent = p.optionA ? p.optionA.description : '';
    if (elements.wt2OptBTitle) elements.wt2OptBTitle.textContent = p.optionB ? p.optionB.title : 'Option B';
    if (elements.wt2OptBDesc) elements.wt2OptBDesc.textContent = p.optionB ? p.optionB.description : '';

    selectWritingOption('A');
  }

  // Hints & Vocabulary
  if (elements.wtVocabTags) {
    const vocabList = (taskId === 1) ? p.vocabularyTips : p.argumentationTips;
    if (vocabList && vocabList.length > 0) {
      elements.wtVocabTags.innerHTML = vocabList.map(v => `<span class="vocab-tag">${v}</span>`).join('');
      if (elements.wtHintsBox) elements.wtHintsBox.style.display = state.isExamMode ? 'none' : 'block';
    } else {
      if (elements.wtHintsBox) elements.wtHintsBox.style.display = 'none';
    }
  }

  // Restore Draft if exists in localStorage
  const draftKey = `celpip_writing_draft_t${taskId}_p${state.currentWritingPromptIndex}`;
  const savedDraft = localStorage.getItem(draftKey);
  if (elements.wtEditorTextarea) {
    elements.wtEditorTextarea.value = savedDraft || '';
  }

  state.writingUndoStack = [];
  state.writingRedoStack = [];
  updateWritingWordCount();

  if (elements.wtResultCard) elements.wtResultCard.style.display = 'none';
}

window.toggleBulletComplete = function(el) {
  el.classList.toggle('completed');
};

function nextWritingPrompt() {
  const prompts = (state.currentWritingTask === 1) ? WRITING_TASK1_PROMPTS : WRITING_TASK2_PROMPTS;
  let nextIdx = (state.currentWritingPromptIndex + 1) % prompts.length;
  loadWritingPrompt(state.currentWritingTask, nextIdx);
  resetWritingTimer();
}

function getRandomWritingPrompt() {
  const prompts = (state.currentWritingTask === 1) ? WRITING_TASK1_PROMPTS : WRITING_TASK2_PROMPTS;
  let randIdx = Math.floor(Math.random() * prompts.length);
  loadWritingPrompt(state.currentWritingTask, randIdx);
  resetWritingTimer();
}

function selectWritingOption(optKey) {
  state.writingSelectedOption = optKey; // 'A' or 'B'
  if (elements.wt2OptACard && elements.wt2OptBCard) {
    elements.wt2OptACard.classList.toggle('active', optKey === 'A');
    elements.wt2OptBCard.classList.toggle('active', optKey === 'B');
  }
  if (elements.wt2RadioA && elements.wt2RadioB) {
    elements.wt2RadioA.checked = (optKey === 'A');
    elements.wt2RadioB.checked = (optKey === 'B');
  }

  const p = WRITING_TASK2_PROMPTS[state.currentWritingPromptIndex];
  if (p && elements.wt2PersuasionList) {
    const points = (optKey === 'A') ? p.optionAPoints : p.optionBPoints;
    elements.wt2PersuasionList.innerHTML = (points || []).map(pt => `<li>${pt}</li>`).join('');
    if (elements.wt2PersuasionBox) {
      elements.wt2PersuasionBox.style.display = state.isExamMode ? 'none' : 'block';
    }
  }
}

// Live Dynamic Word Counter & Target HUD
function updateWritingWordCount() {
  if (!elements.wtEditorTextarea) return;
  const text = elements.wtEditorTextarea.value.trim();
  const words = text ? text.split(/\s+/).filter(w => w.length > 0).length : 0;
  const chars = elements.wtEditorTextarea.value.length;

  if (elements.wtWordCountNum) elements.wtWordCountNum.textContent = words;
  if (elements.wtCharCountText) elements.wtCharCountText.textContent = `${chars} characters`;

  if (elements.wtWordStatusPill) {
    elements.wtWordStatusPill.className = 'word-status-pill';
    if (words === 0) {
      elements.wtWordStatusPill.classList.add('status-under');
      elements.wtWordStatusPill.innerHTML = `<span>⚠️ Below Target (0/150 words)</span>`;
    } else if (words < 150) {
      elements.wtWordStatusPill.classList.add('status-under');
      elements.wtWordStatusPill.innerHTML = `<span>⚠️ Below Target (${words}/150 words)</span>`;
    } else if (words <= 200) {
      elements.wtWordStatusPill.classList.add('status-optimal');
      elements.wtWordStatusPill.innerHTML = `<span>✅ Optimal Length (${words}/150–200 words)</span>`;
    } else {
      elements.wtWordStatusPill.classList.add('status-over');
      elements.wtWordStatusPill.innerHTML = `<span>ℹ️ Over Target (${words}/200 words)</span>`;
    }
  }

  // Auto-save draft
  const draftKey = `celpip_writing_draft_t${state.currentWritingTask}_p${state.currentWritingPromptIndex}`;
  localStorage.setItem(draftKey, elements.wtEditorTextarea.value);
}

// Writing Toolbar Actions
function saveUndoState() {
  if (!elements.wtEditorTextarea) return;
  state.writingUndoStack.push(elements.wtEditorTextarea.value);
  if (state.writingUndoStack.length > 50) state.writingUndoStack.shift();
  state.writingRedoStack = [];
}

function handleEditorCut() {
  if (!elements.wtEditorTextarea) return;
  saveUndoState();
  const start = elements.wtEditorTextarea.selectionStart;
  const end = elements.wtEditorTextarea.selectionEnd;
  const selectedText = elements.wtEditorTextarea.value.substring(start, end);
  if (selectedText) {
    navigator.clipboard.writeText(selectedText);
    elements.wtEditorTextarea.value = elements.wtEditorTextarea.value.substring(0, start) + elements.wtEditorTextarea.value.substring(end);
    elements.wtEditorTextarea.selectionStart = elements.wtEditorTextarea.selectionEnd = start;
    updateWritingWordCount();
    showToast('Cut to clipboard');
  }
}

function handleEditorCopy() {
  if (!elements.wtEditorTextarea) return;
  const start = elements.wtEditorTextarea.selectionStart;
  const end = elements.wtEditorTextarea.selectionEnd;
  const selectedText = elements.wtEditorTextarea.value.substring(start, end);
  if (selectedText) {
    navigator.clipboard.writeText(selectedText);
    showToast('Copied to clipboard');
  }
}

async function handleEditorPaste() {
  if (!elements.wtEditorTextarea) return;
  saveUndoState();
  try {
    const text = await navigator.clipboard.readText();
    const start = elements.wtEditorTextarea.selectionStart;
    const end = elements.wtEditorTextarea.selectionEnd;
    elements.wtEditorTextarea.value = elements.wtEditorTextarea.value.substring(0, start) + text + elements.wtEditorTextarea.value.substring(end);
    elements.wtEditorTextarea.selectionStart = elements.wtEditorTextarea.selectionEnd = start + text.length;
    updateWritingWordCount();
    showToast('Pasted from clipboard');
  } catch (err) {
    showToast('Please use Ctrl+V / Cmd+V to paste');
  }
}

function handleEditorUndo() {
  if (!elements.wtEditorTextarea || state.writingUndoStack.length === 0) return;
  state.writingRedoStack.push(elements.wtEditorTextarea.value);
  const prevText = state.writingUndoStack.pop();
  elements.wtEditorTextarea.value = prevText;
  updateWritingWordCount();
}

function handleEditorRedo() {
  if (!elements.wtEditorTextarea || state.writingRedoStack.length === 0) return;
  state.writingUndoStack.push(elements.wtEditorTextarea.value);
  const nextText = state.writingRedoStack.pop();
  elements.wtEditorTextarea.value = nextText;
  updateWritingWordCount();
}



// Writing Exam Timers
function getWritingDefaultSeconds() {
  return (state.currentWritingTask === 1) ? 27 * 60 : 26 * 60;
}

function resetWritingTimer() {
  if (state.writingTimerInterval) clearInterval(state.writingTimerInterval);
  state.writingTimerState = 'idle';
  state.writingTimeRemaining = getWritingDefaultSeconds();
  state.writingStartTime = null;

  if (elements.wtTimerDisplay) elements.wtTimerDisplay.textContent = formatTime(state.writingTimeRemaining);
  if (elements.wtTimerStatus) {
    elements.wtTimerStatus.textContent = 'READY';
    elements.wtTimerStatus.style.background = 'rgba(99, 102, 241, 0.2)';
  }
  if (elements.wtStartTimerBtn) elements.wtStartTimerBtn.style.display = 'inline-flex';
  if (elements.wtPauseTimerBtn) elements.wtPauseTimerBtn.style.display = 'none';
  if (elements.wtResetTimerBtn) elements.wtResetTimerBtn.style.display = 'none';
}

function startWritingTimer() {
  if (state.writingTimerInterval) clearInterval(state.writingTimerInterval);
  state.writingTimerState = 'running';
  if (!state.writingStartTime) state.writingStartTime = Date.now();

  if (elements.wtTimerStatus) {
    elements.wtTimerStatus.textContent = 'EXAM RUNNING';
    elements.wtTimerStatus.style.background = 'rgba(16, 185, 129, 0.25)';
  }
  if (elements.wtStartTimerBtn) elements.wtStartTimerBtn.style.display = 'none';
  if (elements.wtPauseTimerBtn) elements.wtPauseTimerBtn.style.display = 'inline-flex';
  if (elements.wtResetTimerBtn) elements.wtResetTimerBtn.style.display = 'inline-flex';

  playBeep(440, 'sine', 0.2);
  state.writingTimerInterval = setInterval(tickWritingTimer, 1000);
}

function pauseWritingTimer() {
  if (state.writingTimerInterval) clearInterval(state.writingTimerInterval);
  state.writingTimerState = 'paused';

  if (elements.wtTimerStatus) {
    elements.wtTimerStatus.textContent = 'PAUSED';
    elements.wtTimerStatus.style.background = 'rgba(245, 158, 11, 0.25)';
  }
  if (elements.wtStartTimerBtn) {
    elements.wtStartTimerBtn.style.display = 'inline-flex';
    elements.wtStartTimerBtn.innerHTML = '<span>▶</span> Resume Timer';
  }
  if (elements.wtPauseTimerBtn) elements.wtPauseTimerBtn.style.display = 'none';
}

function tickWritingTimer() {
  state.writingTimeRemaining--;
  if (elements.wtTimerDisplay) elements.wtTimerDisplay.textContent = formatTime(state.writingTimeRemaining);

  // Sound warnings
  if (state.writingTimeRemaining === 5 * 60) {
    playBeep(660, 'sine', 0.3);
    showToast('⚠️ 5 Minutes Remaining in Writing Exam!');
  } else if (state.writingTimeRemaining === 60) {
    playBeep(880, 'sine', 0.4);
    showToast('⏰ 1 Minute Remaining! Conclude and check your word count.');
  } else if (state.writingTimeRemaining <= 0) {
    playBeep(440, 'triangle', 0.6);
    submitWritingResponse();
  }
}

function submitWritingResponse() {
  if (state.writingTimerInterval) clearInterval(state.writingTimerInterval);
  state.writingTimerState = 'submitted';

  const defaultSecs = getWritingDefaultSeconds();
  const timeSpentSecs = defaultSecs - Math.max(0, state.writingTimeRemaining);
  state.writingTimeSpentSeconds = timeSpentSecs;

  const text = elements.wtEditorTextarea.value.trim();
  const words = text ? text.split(/\s+/).filter(Boolean).length : 0;
  const sentences = text ? text.split(/[.!?]+/).filter(s => s.trim().length > 0).length : 0;
  const paragraphs = text ? text.split(/\n+/).filter(p => p.trim().length > 0).length : 0;
  const avgWordsPerSentence = sentences > 0 ? (words / sentences).toFixed(1) : 0;

  if (elements.statFinalWords) elements.statFinalWords.textContent = words;
  if (elements.statSentences) elements.statSentences.textContent = sentences;
  if (elements.statAvgWordsPerSentence) elements.statAvgWordsPerSentence.textContent = avgWordsPerSentence;
  if (elements.statParagraphs) elements.statParagraphs.textContent = paragraphs;
  if (elements.wtSubmissionTimeTag) elements.wtSubmissionTimeTag.textContent = `Time: ${formatTime(timeSpentSecs)}`;

  if (elements.wtResultCard) {
    elements.wtResultCard.style.display = 'flex';
    if (typeof elements.wtResultCard.scrollIntoView === 'function') {
      elements.wtResultCard.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }

  saveCurrentWritingSubmission();
  showToast('🎉 Writing submitted & analyzed!');
}

function copyWritingAiEvaluationPrompt() {
  const isTask1 = (state.currentWritingTask === 1);
  const prompts = isTask1 ? WRITING_TASK1_PROMPTS : WRITING_TASK2_PROMPTS;
  const currentPrompt = prompts[state.currentWritingPromptIndex];
  const essayText = elements.wtEditorTextarea.value.trim();
  const subjectText = isTask1 ? (elements.wtSubjectInput ? elements.wtSubjectInput.value.trim() : '') : '';
  const wordCount = essayText ? essayText.split(/\s+/).filter(Boolean).length : 0;
  const chosenOpt = !isTask1 ? (state.writingSelectedOption === 'A' ? currentPrompt.optionA.title : currentPrompt.optionB.title) : 'N/A';

  if (!essayText) {
    showToast('Please type your response before generating AI evaluation.');
    return;
  }

  const promptDetails = isTask1 ? `
Task Type: CELPIP Writing Task 1 (Writing an Email)
Scenario Title: "${currentPrompt.title}"
Category: ${currentPrompt.category}
Tone Required: ${currentPrompt.tone}
Recipient: ${currentPrompt.recipient}
Scenario Context: "${currentPrompt.scenario}"
Required Bullet Points:
${(currentPrompt.bulletPoints || []).map((b, i) => `${i + 1}. ${b}`).join('\n')}
Candidate Subject Line: "${subjectText}"
` : `
Task Type: CELPIP Writing Task 2 (Responding to Survey Questions)
Scenario Title: "${currentPrompt.title}"
Category: ${currentPrompt.category}
Survey Context: "${currentPrompt.context}"
Candidate Chosen Option: "${chosenOpt}"
Option A: "${currentPrompt.optionA.title}" - ${currentPrompt.optionA.description}
Option B: "${currentPrompt.optionB.title}" - ${currentPrompt.optionB.description}
Survey Question: "${currentPrompt.surveyQuestion}"
`;

  const evalPromptText = `Act as an expert official CELPIP Senior Writing Examiner and English Language Assessor. Evaluate my written response for the following CELPIP Writing Task according to the official CELPIP Writing Performance Standards:

---
${promptDetails.trim()}
Time Limit: ${isTask1 ? '27 minutes' : '26 minutes'}
Target Length: 150 – 200 words
Candidate Word Count: ${wordCount} words
---

CANDIDATE WRITTEN SUBMISSION:
"""
${isTask1 ? `Subject: ${subjectText}\n\n` : ''}${essayText}
"""

---
OFFICIAL CELPIP EVALUATION RUBRIC (Evaluate each out of 12 points):

1. CONTENT & COHERENCE (Score out of 12):
   - ${isTask1 ? 'Did the candidate fully and effectively address ALL required bullet points?' : 'Did the candidate clearly state their preferred option and provide well-developed rationales with examples?'}
   - Organization, logical progression of ideas, paragraph structure, and appropriate transitional connectors.

2. VOCABULARY & LEXICAL RESOURCE (Score out of 12):
   - Precision, range of advanced vocabulary, natural collocations, and idiomatic accuracy.
   - Appropriate tone and register (${isTask1 ? currentPrompt.tone : 'Formal/Persuasive civic response'}).

3. READABILITY & GRAMMAR (Score out of 12):
   - Sentence structure complexity and grammatical accuracy (tenses, subject-verb agreement, clause variation).
   - Spelling, capitalization, punctuation, and mechanics.

4. TASK FULFILLMENT & TIME/LENGTH ADHERENCE (Score out of 12):
   - Word count compliance (Target: 150–200 words).
   - Proper email salutation and sign-off (Task 1) or balanced survey argument addressing both options (Task 2).

---
REQUIRED OUTPUT FORMAT:
- Overall Estimated CELPIP Writing Band Score (Level 1 to 12)
- Individual Scores breakdown for each of the 4 criteria (out of 12)
- Detailed Key Strengths
- Detailed Errors & Improvement Suggestions (Line-by-line grammar/vocabulary corrections)
- An Enhanced Band 11–12 Revised Version of my essay tailored to this scenario.`;

  navigator.clipboard.writeText(evalPromptText).then(() => {
    showToast('✨ CELPIP Writing Evaluation Prompt copied! Paste into ChatGPT / Gemini / Claude.');
  }).catch(() => {
    showToast('Failed to copy. Please allow clipboard permissions.');
  });
}

// Model Answer Lightbox / Modal
function openModelAnswerModal() {
  const isTask1 = (state.currentWritingTask === 1);
  const prompts = isTask1 ? WRITING_TASK1_PROMPTS : WRITING_TASK2_PROMPTS;
  const p = prompts[state.currentWritingPromptIndex];
  if (!p) return;

  if (elements.modelModalTitle) elements.modelModalTitle.textContent = `Model Band 10–12: ${p.title}`;
  if (elements.modelModalSubtitle) {
    elements.modelModalSubtitle.textContent = isTask1 ? `Recipient: ${p.recipient} • Tone: ${p.tone}` : `Comparative Survey Response • Option A vs Option B`;
  }

  const answer = p.sampleAnswer || '';
  const wordCount = answer ? answer.split(/\s+/).filter(Boolean).length : 0;
  if (elements.modelWordCountTag) elements.modelWordCountTag.textContent = `${wordCount} Words`;
  if (elements.modelEssayText) elements.modelEssayText.textContent = answer;

  if (elements.modelAnalysisContent) {
    if (isTask1) {
      elements.modelAnalysisContent.innerHTML = `
        <p style="margin-bottom: 0.5rem;"><strong>Structure Guide:</strong> ${p.structureGuide || 'Opening → Body (Bullets) → Call to Action → Sign-off'}</p>
        <p><strong>Power Vocabulary Used:</strong></p>
        <div class="strategy-vocab-tags" style="margin-top: 0.3rem;">
          ${(p.vocabularyTips || []).map(v => `<span class="vocab-tag">${v}</span>`).join('')}
        </div>
      `;
    } else {
      elements.modelAnalysisContent.innerHTML = `
        <p style="margin-bottom: 0.5rem;"><strong>Argumentation Strategy:</strong> Clear preference declared in intro → Reason 1 with Canadian example → Comparative contrast of other option → Synthesis conclusion.</p>
        <p><strong>Transitional Connectors Used:</strong></p>
        <div class="strategy-vocab-tags" style="margin-top: 0.3rem;">
          ${(p.argumentationTips || []).map(v => `<span class="vocab-tag">${v}</span>`).join('')}
        </div>
      `;
    }
  }

  if (elements.modelAnswerModal) elements.modelAnswerModal.classList.add('active');
}

function closeModelAnswerModal() {
  if (elements.modelAnswerModal) elements.modelAnswerModal.classList.remove('active');
}

function copyModelAnswer() {
  const isTask1 = (state.currentWritingTask === 1);
  const prompts = isTask1 ? WRITING_TASK1_PROMPTS : WRITING_TASK2_PROMPTS;
  const p = prompts[state.currentWritingPromptIndex];
  if (p && p.sampleAnswer) {
    navigator.clipboard.writeText(p.sampleAnswer).then(() => {
      showToast('Model Answer copied to clipboard!');
    });
  }
}



// Writing Submissions IndexedDB
function saveCurrentWritingSubmission() {
  if (!db) return;
  const isTask1 = (state.currentWritingTask === 1);
  const prompts = isTask1 ? WRITING_TASK1_PROMPTS : WRITING_TASK2_PROMPTS;
  const p = prompts[state.currentWritingPromptIndex];
  const text = elements.wtEditorTextarea ? elements.wtEditorTextarea.value.trim() : '';
  const subject = isTask1 && elements.wtSubjectInput ? elements.wtSubjectInput.value.trim() : '';
  const wordCount = text ? text.split(/\s+/).filter(Boolean).length : 0;

  if (!text) {
    showToast('Cannot save empty essay.');
    return;
  }

  const record = {
    taskId: isTask1 ? 'wt1' : 'wt2',
    taskName: isTask1 ? 'Writing Task 1 (Email)' : 'Writing Task 2 (Survey)',
    promptId: p.id,
    promptTitle: p.title,
    category: p.category,
    subject: subject,
    chosenOption: !isTask1 ? state.writingSelectedOption : '',
    essayText: text,
    wordCount: wordCount,
    timeSpentSeconds: state.writingTimeSpentSeconds || 0,
    timestamp: Date.now()
  };

  const tx = db.transaction(WRITING_STORE, 'readwrite');
  const store = tx.objectStore(WRITING_STORE);
  store.add(record);
  tx.oncomplete = () => {
    showToast('💾 Essay saved to Practice History!');
    renderWritingHistory();
  };
}

function renderWritingHistory() {
  if (!db || !elements.writingHistoryList) return;
  const tx = db.transaction(WRITING_STORE, 'readonly');
  const store = tx.objectStore(WRITING_STORE);
  const req = store.getAll();

  req.onsuccess = () => {
    const records = req.result || [];
    records.sort((a, b) => b.timestamp - a.timestamp);

    if (records.length === 0) {
      if (elements.writingHistoryEmpty) elements.writingHistoryEmpty.style.display = 'block';
      elements.writingHistoryList.innerHTML = '';
      return;
    }

    if (elements.writingHistoryEmpty) elements.writingHistoryEmpty.style.display = 'none';
    elements.writingHistoryList.innerHTML = records.map(r => {
      const dateStr = new Date(r.timestamp).toLocaleString();
      return `
        <div class="writing-history-item">
          <div class="wh-header">
            <div>
              <div class="prompt-meta" style="margin-bottom: 0.2rem;">
                <span class="category-tag">${r.category || 'General'}</span>
                <span class="prompt-id-tag">${r.taskName}</span>
                <span class="metric-chip" style="color:#34d399;"><strong>${r.wordCount}</strong> Words</span>
              </div>
              <h4 class="wh-title">${r.promptTitle}</h4>
              ${r.subject ? `<p style="font-size:0.85rem; color:#a5b4fc; margin-top:0.2rem;"><strong>Subject:</strong> ${r.subject}</p>` : ''}
            </div>
            <div class="wh-meta">
              <span style="font-size:0.75rem; color:var(--text-dim);">${dateStr}</span>
            </div>
          </div>
          
          <div class="wh-text-preview">${r.essayText}</div>
          
          <div class="wh-actions">
            <button class="btn-secondary btn-sm" onclick="copyHistoryEssay('${r.id}')">
              <span>📋</span> Copy Essay
            </button>
            <button class="btn-danger btn-sm" onclick="deleteWritingSubmission(${r.id})">
              <span>🗑</span> Delete
            </button>
          </div>
        </div>
      `;
    }).join('');
  };
}

window.copyHistoryEssay = function(id) {
  if (!db) return;
  const tx = db.transaction(WRITING_STORE, 'readonly');
  const store = tx.objectStore(WRITING_STORE);
  const req = store.get(Number(id));
  req.onsuccess = () => {
    const r = req.result;
    if (r && r.essayText) {
      navigator.clipboard.writeText(r.essayText).then(() => {
        showToast('Essay copied to clipboard!');
      });
    }
  };
};

window.deleteWritingSubmission = function(id) {
  if (!db) return;
  const tx = db.transaction(WRITING_STORE, 'readwrite');
  const store = tx.objectStore(WRITING_STORE);
  store.delete(Number(id));
  tx.oncomplete = () => {
    showToast('Essay deleted from history.');
    renderWritingHistory();
  };
};

function switchHistorySubTab(tab) {
  state.currentHistoryTab = tab;
  if (elements.historySpeakingTab && elements.historyWritingTab) {
    elements.historySpeakingTab.classList.toggle('active', tab === 'speaking');
    elements.historyWritingTab.classList.toggle('active', tab === 'writing');
  }
  if (elements.speakingHistoryContainer && elements.writingHistoryContainer) {
    elements.speakingHistoryContainer.style.display = (tab === 'speaking') ? 'block' : 'none';
    elements.writingHistoryContainer.style.display = (tab === 'writing') ? 'block' : 'none';
  }
  if (tab === 'speaking') renderHistory();
  if (tab === 'writing') renderWritingHistory();
}

function renderHistory() {
  if (state.currentHistoryTab === 'writing') {
    renderWritingHistory();
    return;
  }
  if (!db || !elements.historyList) return;
  const tx = db.transaction(STORE_NAME, 'readonly');
  const store = tx.objectStore(STORE_NAME);
  const req = store.getAll();

  req.onsuccess = () => {
    const records = req.result || [];
    records.sort((a, b) => b.timestamp - a.timestamp);

    if (records.length === 0) {
      if (elements.historyEmpty) elements.historyEmpty.style.display = 'block';
      elements.historyList.innerHTML = '';
      return;
    }

    if (elements.historyEmpty) elements.historyEmpty.style.display = 'none';
    elements.historyList.innerHTML = records.map(r => {
      const dateStr = new Date(r.timestamp).toLocaleString();
      return `
        <div class="history-item-card">
          <div class="history-item-header">
            <div>
              <div class="prompt-meta" style="margin-bottom: 0.2rem;">
                <span class="category-tag">${r.category || 'General'}</span>
                <span class="prompt-id-tag">Task ${r.taskId}</span>
              </div>
              <h4 style="color:#fff; font-size:1.05rem; font-family:var(--font-heading);">${r.taskTitle}</h4>
            </div>
            <span style="font-size:0.75rem; color:var(--text-dim);">${dateStr}</span>
          </div>
          
          ${r.transcript ? `<p style="font-size:0.85rem; color:#cbd5e1; background:rgba(0,0,0,0.2); padding:0.5rem; border-radius:6px; margin:0.5rem 0;">"${r.transcript}"</p>` : ''}

          <div class="history-item-actions">
            <button class="btn-primary btn-sm" onclick="playHistoryAudio(${r.id})">
              <span>▶</span> Play Recording
            </button>
            <button class="btn-danger btn-sm" onclick="deleteHistoryRecord(${r.id})">
              <span>🗑</span> Delete
            </button>
          </div>
        </div>
      `;
    }).join('');
  };
}

window.playHistoryAudio = function(id) {
  if (!db) return;
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
  if (!db) return;
  const tx = db.transaction(STORE_NAME, 'readwrite');
  const store = tx.objectStore(STORE_NAME);
  store.delete(id);
  tx.oncomplete = () => {
    showToast('Recording deleted.');
    renderHistory();
  };
};

// Prompts Bank & Category Filter
function populateCategoryFilter() {
  const allPrompts = [
    ...TASK1_PROMPTS, ...TASK2_PROMPTS, ...SCENARIO_PROMPTS, 
    ...TASK5_PROMPTS, ...TASK6_PROMPTS, ...TASK7_PROMPTS,
    ...(typeof WRITING_TASK1_PROMPTS !== 'undefined' ? WRITING_TASK1_PROMPTS : []),
    ...(typeof WRITING_TASK2_PROMPTS !== 'undefined' ? WRITING_TASK2_PROMPTS : [])
  ];
  const categories = [...new Set(allPrompts.map(p => p.category).filter(Boolean))];
  
  if (elements.bankCategorySelect) {
    elements.bankCategorySelect.innerHTML = `<option value="all">All Categories</option>` +
      categories.map(c => `<option value="${c}">${c}</option>`).join('');
  }
}

function switchBankTab(tabKey) {
  state.currentBankTask = tabKey;
  const bankTabs = [
    elements.bankTask1Tab, elements.bankTask2Tab, elements.bankTask3Tab,
    elements.bankTask4Tab, elements.bankTask5Tab, elements.bankTask6Tab,
    elements.bankTask7Tab, elements.bankWriting1Tab, elements.bankWriting2Tab
  ].filter(Boolean);

  bankTabs.forEach(tab => tab.classList.remove('active'));

  if (tabKey === 1 && elements.bankTask1Tab) elements.bankTask1Tab.classList.add('active');
  if (tabKey === 2 && elements.bankTask2Tab) elements.bankTask2Tab.classList.add('active');
  if (tabKey === 3 && elements.bankTask3Tab) elements.bankTask3Tab.classList.add('active');
  if (tabKey === 4 && elements.bankTask4Tab) elements.bankTask4Tab.classList.add('active');
  if (tabKey === 5 && elements.bankTask5Tab) elements.bankTask5Tab.classList.add('active');
  if (tabKey === 6 && elements.bankTask6Tab) elements.bankTask6Tab.classList.add('active');
  if (tabKey === 7 && elements.bankTask7Tab) elements.bankTask7Tab.classList.add('active');
  if (tabKey === 'wt1' && elements.bankWriting1Tab) elements.bankWriting1Tab.classList.add('active');
  if (tabKey === 'wt2' && elements.bankWriting2Tab) elements.bankWriting2Tab.classList.add('active');

  renderPromptsBank(tabKey);
}

function renderPromptsBank(taskFilter) {
  let taskId = taskFilter || state.currentBankTask;
  let prompts = getPromptsArray(taskId);

  if (state.currentFilterCategory !== 'all') {
    prompts = prompts.filter(p => p.category === state.currentFilterCategory);
  }

  if (state.searchQuery) {
    prompts = prompts.filter(p => 
      (p.title && p.title.toLowerCase().includes(state.searchQuery)) ||
      (p.prompt && p.prompt.toLowerCase().includes(state.searchQuery)) ||
      (p.scenario && p.scenario.toLowerCase().includes(state.searchQuery)) ||
      (p.context && p.context.toLowerCase().includes(state.searchQuery)) ||
      (p.task3Prompt && p.task3Prompt.toLowerCase().includes(state.searchQuery)) ||
      (p.category && p.category.toLowerCase().includes(state.searchQuery))
    );
  }

  if (!elements.promptsGrid) return;
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
          <div>🔹 Option A: <strong style="color:#e2e8f0;">${p.optionA.name}</strong></div>
          <div>🔹 Option B: <strong style="color:#e2e8f0;">${p.optionB.name}</strong></div>
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
          <div>👍 <strong style="color:#34d399;">Pro:</strong> ${p.sideA ? p.sideA.label : 'Support'}</div>
          <div>👎 <strong style="color:#f87171;">Con:</strong> ${p.sideB ? p.sideB.label : 'Oppose'}</div>
        </div>
      `;
    } else if (taskId === 'wt1') {
      cardContentHtml = `
        <p style="color:#cbd5e1; font-size:0.85rem; margin-bottom:0.4rem;"><strong>Scenario:</strong> ${p.scenario}</p>
        <div style="display:flex; flex-direction:column; gap:0.25rem; font-size:0.8rem; color:var(--text-muted); background:rgba(15,23,42,0.5); padding:0.5rem; border-radius:6px;">
          <div>✉️ <strong>Recipient:</strong> ${p.recipient}</div>
          <div>🎯 <strong>Tone:</strong> ${p.tone}</div>
          <div>⏱ <strong>Time:</strong> 27 min • 150–200 words</div>
        </div>
      `;
    } else if (taskId === 'wt2') {
      cardContentHtml = `
        <p style="color:#cbd5e1; font-size:0.85rem; margin-bottom:0.4rem;"><strong>Context:</strong> ${p.context}</p>
        <div style="display:flex; flex-direction:column; gap:0.25rem; font-size:0.8rem; color:var(--text-muted); background:rgba(15,23,42,0.5); padding:0.5rem; border-radius:6px;">
          <div>📊 <strong>Option A:</strong> ${p.optionA.title}</div>
          <div>📊 <strong>Option B:</strong> ${p.optionB.title}</div>
          <div>⏱ <strong>Time:</strong> 26 min • 150–200 words</div>
        </div>
      `;
    }

    const isWriting = (taskId === 'wt1' || taskId === 'wt2');
    const practiceBtn = isWriting ? `
      <button class="btn-primary" style="width:100%; justify-content:center; padding:0.55rem;" onclick="selectWritingPromptToPractice('${taskId}', ${idx})">
        ✍️ Practice ${taskId === 'wt1' ? 'Task 1 (Email)' : 'Task 2 (Survey)'}
      </button>
    ` : `
      <button class="btn-primary" style="width:100%; justify-content:center; padding:0.55rem;" onclick="selectPromptToPractice(${taskId}, ${idx})">
        🎙 Practice Task ${taskId}
      </button>
    `;

    return `
      <div class="prompt-item-card">
        <div>
          <div class="prompt-meta">
            <span class="category-tag">${p.category}</span>
            <span class="prompt-id-tag">${isWriting ? (taskId === 'wt1' ? 'Writing 1' : 'Writing 2') : 'Task ' + taskId} #${idx + 1}</span>
          </div>
          <h4 style="color:#fff; font-size:1.05rem; font-family:var(--font-heading); margin:0.4rem 0;">${p.title}</h4>
          ${cardContentHtml}
        </div>
        <div style="margin-top:1rem;">
          ${practiceBtn}
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

window.selectWritingPromptToPractice = function(taskIdStr, index) {
  const taskId = (taskIdStr === 'wt1') ? 1 : 2;
  switchWritingTask(taskId, index);
  
  elements.navButtons.forEach(b => b.classList.remove('active'));
  elements.viewSections.forEach(s => s.classList.remove('active'));
  
  elements.navButtons[0].classList.add('active');
  document.getElementById('simulatorView').classList.add('active');
};

function showToast(msg) {
  const container = document.getElementById('toastContainer');
  if (!container) return;
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = msg;
  container.appendChild(toast);

  setTimeout(() => {
    toast.remove();
  }, 4000);
}


