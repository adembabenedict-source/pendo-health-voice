// Scenario Data for Simulator
const scenarios = {
  cardiology: {
    title: "Cardiology Consult",
    transcript: [
      {
        speaker: "Dr. Sarah Chen",
        class: "clinician",
        text: "Good morning, Arthur. I reviewed your recent ambulatory logs. It looks like your blood pressure is still averaging around <span class=\"medical-term\" data-tooltip=\"Stage 2 Hypertension: BP consistently 140/90 mmHg or higher.\">142 over 90</span> in the mornings, which is elevated.",
        duration: 4000
      },
      {
        speaker: "Arthur Davis (Patient)",
        class: "patient",
        text: "Yes, Doctor. I've been taking the <span class=\"medical-term\" data-tooltip=\"Lisinopril: ACE inhibitor used to treat high blood pressure.\">Lisinopril 10mg</span> daily as prescribed, but I still feel slight morning headaches.",
        duration: 3500
      },
      {
        speaker: "Dr. Sarah Chen",
        class: "clinician",
        text: "Understood. The morning headaches could indeed be related to that systolic spike. We also noticed your HbA1c is slightly elevated at <span class=\"medical-term\" data-tooltip=\"HbA1c 6.8%: Indicates type 2 diabetes range (6.5% or higher).\">6.8%</span>. I'd like to initiate <span class=\"medical-term\" data-tooltip=\"Metformin: First-line medication for type 2 diabetes to improve insulin sensitivity.\">Metformin 500mg</span> twice daily, and increase Lisinopril to 20mg.",
        duration: 5000
      },
      {
        speaker: "Arthur Davis (Patient)",
        class: "patient",
        text: "Okay, I'll start those. Should I monitor my blood sugar at home as well?",
        duration: 2500
      },
      {
        speaker: "Dr. Sarah Chen",
        class: "clinician",
        text: "Yes, check it fasting in the morning and two hours post-meals. We'll do a follow-up panel in <span class=\"medical-term\" data-tooltip=\"6-Week Follow-Up: Standard interval to check therapeutic efficacy of new diabetic medications.\">six weeks</span> to re-check both your blood pressure and HbA1c levels.",
        duration: 3500
      }
    ],
    soap: `
      <div class="soap-title">Subjective (S)</div>
      <div class="soap-text">
        <p><strong>Chief Complaint:</strong> Morning headaches and elevated blood pressure tracking.</p>
        <p>Arthur Davis, a 58-year-old male, presents for hypertension and metabolic follow-up. He reports adherence to Lisinopril 10mg daily. Complains of mild, throbbing morning headaches which subside after 1-2 hours. Denies chest pain, shortness of breath, or palpitations.</p>
      </div>
      
      <div class="soap-title">Objective (O)</div>
      <div class="soap-text">
        <p><strong>Vitals:</strong> BP: 142/90 mmHg, HR: 72 bpm, Temp: 98.6°F, SpO2: 98% on room air.</p>
        <p><strong>Labs:</strong> HbA1c: 6.8% (elevated from 6.4% six months ago), Lipid panel: WNL.</p>
        <p><strong>Physical Exam:</strong> Alert and oriented. Heart: Regular rate and rhythm, no murmurs. Lungs: Clear to auscultation bilaterally.</p>
      </div>
      
      <div class="soap-title">Assessment (A)</div>
      <div class="soap-text">
        <p>1. <strong>Stage 2 Essential Hypertension (I10):</strong> Suboptimally controlled on current Lisinopril dose, likely causing morning headaches.</p>
        <p>2. <strong>Type 2 Diabetes Mellitus (E11.9):</strong> Newly diagnosed based on HbA1c threshold of 6.8%.</p>
      </div>
      
      <div class="soap-title">Plan (P)</div>
      <div class="soap-text">
        <p>1. <strong>Hypertension:</strong> Increase Lisinopril to 20mg orally once daily. Patient educated on morning BP logs.</p>
        <p>2. <strong>Diabetes:</strong> Initiate Metformin 500mg orally twice daily with meals. Referral to diabetes nutrition educator.</p>
        <p>3. <strong>Monitoring:</strong> Check fasting blood glucose daily. Return in 6 weeks for BMP, HbA1c, and BP check.</p>
      </div>
    `
  },
  orthopedics: {
    title: "Orthopedics Visit",
    transcript: [
      {
        speaker: "Dr. Marcus Knight",
        class: "clinician",
        text: "Alright, Liam. We are three weeks post-op from your left knee <span class=\"medical-term\" data-tooltip=\"Arthroscopic Meniscectomy: Minimally invasive surgical procedure to repair or remove a torn meniscus.\">arthroscopic meniscectomy</span>. How has the pain been?",
        duration: 3500
      },
      {
        speaker: "Liam O'Connor (Patient)",
        class: "patient",
        text: "The sharp pain is gone, Doc. It's mostly just a dull ache, maybe a <span class=\"medical-term\" data-tooltip=\"Visual Analog Scale (VAS) 3/10: Mild pain level, expected during early physical rehab post-arthroscopy.\">3 out of 10</span>, especially after physical therapy sessions.",
        duration: 3000
      },
      {
        speaker: "Dr. Marcus Knight",
        class: "clinician",
        text: "That's completely expected at this stage. I'll examine the range of motion. Lie back, please... Looks like you're at <span class=\"medical-term\" data-tooltip=\"Flexion 110 Degrees: Normal target flexion range for 3 weeks post-meniscectomy (full extension 0°).\">110 degrees of flexion</span> and fully extending to zero. Excellent healing at the portal sites.",
        duration: 4500
      },
      {
        speaker: "Liam O'Connor (Patient)",
        class: "patient",
        text: "Great! Can I start doing some light cycling on the stationary bike?",
        duration: 2000
      },
      {
        speaker: "Dr. Marcus Knight",
        class: "clinician",
        text: "Absolutely, light cycling with zero resistance is excellent for active recovery. Continue with <span class=\"medical-term\" data-tooltip=\"Physical Therapy: Twice-weekly sessions focused on quadriceps activation and joint stabilization.\">PT twice weekly</span>. Keep using ice after workouts, and we'll see you back in another four weeks.",
        duration: 4000
      }
    ],
    soap: `
      <div class="soap-title">Subjective (S)</div>
      <div class="soap-text">
        <p><strong>Chief Complaint:</strong> Left knee post-operative follow-up (3 weeks).</p>
        <p>Liam O'Connor, a 34-year-old male, presents for 3-week follow-up after left knee arthroscopic partial meniscectomy. Patient reports significant resolution of preoperative mechanical symptoms. Current pain is 3/10 localized to medial joint line, primarily after PT. Compliant with physical therapy sessions.</p>
      </div>
      
      <div class="soap-title">Objective (O)</div>
      <div class="soap-text">
        <p><strong>Physical Exam (Left Knee):</strong></p>
        <p>- Surgical portals: Well-healed, no erythema, fluctuance, or drainage.</p>
        <p>- Range of Motion: Active flexion to 110 degrees (contralateral 130), full active extension to 0 degrees.</p>
        <p>- Stability: Lachman and anterior drawer tests negative. Joint line tenderness: Mild over medial joint line.</p>
      </div>
      
      <div class="soap-title">Assessment (A)</div>
      <div class="soap-text">
        <p>1. <strong>Encounter for Post-Operative Follow-Up (Z48.811)</strong> status-post left knee arthroscopic partial medial meniscectomy. Healing is progressing as expected, meeting rehab milestones.</p>
      </div>
      
      <div class="soap-title">Plan (P)</div>
      <div class="soap-text">
        <p>1. <strong>Activity:</strong> Approved for stationary cycling with low-to-zero resistance. Avoid high-impact running or twisting.</p>
        <p>2. <strong>Rehabilitation:</strong> Continue outpatient physical therapy twice weekly for 4 more weeks, targeting quadriceps strengthening and hamstring mobility.</p>
        <p>3. <strong>Follow-Up:</strong> Repeat clinical evaluation in 4 weeks.</p>
      </div>
    `
  },
  pediatrics: {
    title: "Pediatric Checkup",
    transcript: [
      {
        speaker: "Dr. Sarah Chen",
        class: "clinician",
        text: "Hi Clara, let's see how baby Maya is doing today at her <span class=\"medical-term\" data-tooltip=\"12-Month Well-Child Visit: Routine developmental, physical, and immunization assessment.\">12-month checkup</span>. Is she eating table foods well?",
        duration: 3500
      },
      {
        speaker: "Clara Vance (Parent)",
        class: "patient",
        text: "Yes, she loves avocado and small pieces of chicken. She is also starting to stand up on her own using the sofa.",
        duration: 3000
      },
      {
        speaker: "Dr. Sarah Chen",
        class: "clinician",
        text: "That is fantastic gross motor development. Her height and weight are tracking right along the <span class=\"medical-term\" data-tooltip=\"65th Growth Percentile: Normal healthy growth curve progression for 1-year-old female.\">65th percentile</span>. Today, she is due for her standard <span class=\"medical-term\" data-tooltip=\"MMR Vaccine: Measles, Mumps, and Rubella immunization administered at 12 months.\">MMR</span> and Varicella immunizations.",
        duration: 4500
      },
      {
        speaker: "Clara Vance (Parent)",
        class: "patient",
        text: "She had a slight fever after her 6-month shots. Is that common?",
        duration: 2500
      },
      {
        speaker: "Dr. Sarah Chen",
        class: "clinician",
        text: "Yes, a low-grade fever is a very common immune response. You can administer <span class=\"medical-term\" data-tooltip=\"Infant Acetaminophen: Pain reliever/fever reducer, dose calculated by weight (approx 10-15 mg/kg).\">acetaminophen</span> based on her weight chart if she becomes fussy tonight. Let's get the measurements and then we will have the nurse administer the vaccines.",
        duration: 4500
      }
    ],
    soap: `
      <div class="soap-title">Subjective (S)</div>
      <div class="soap-text">
        <p><strong>Chief Complaint:</strong> 12-month well-child examination.</p>
        <p>Maya Vance, a 12-month-old female, brought in by mother for routine checkup. Mother reports good appetite, transitioning to table foods (avocado, chicken). No sleep issues. Developmental milestones: Pulling to stand, babbling, responsive to name. History of mild post-vaccine fever at 6 months.</p>
      </div>
      
      <div class="soap-title">Objective (O)</div>
      <div class="soap-text">
        <p><strong>Growth Metrics:</strong> Weight: 21 lbs 4 oz, Length: 29.5 in. Both tracking along the 65th percentile.</p>
        <p><strong>Vitals:</strong> HR: 110 bpm, Temp: 98.4°F rectal.</p>
        <p><strong>Physical Exam:</strong> Healthy, well-nourished infant. HEENT: Normocephalic, tympanic membranes clear. Heart: RRR without murmurs. Abdomen: Soft, non-distended. Neuro/Development: Age-appropriate reflexes, standing with support.</p>
      </div>
      
      <div class="soap-title">Assessment (A)</div>
      <div class="soap-text">
        <p>1. <strong>Healthy Child Exam (Z00.129):</strong> Normal development, healthy growth parameters, vaccinations due.</p>
      </div>
      
      <div class="soap-title">Plan (P)</div>
      <div class="soap-text">
        <p>1. <strong>Immunizations:</strong> Administered MMR (First Dose) and Varicella subcutaneous today. Counseling provided on common vaccine reactions.</p>
        <p>2. <strong>Medication:</strong> Guided mother on weight-based Infant Acetaminophen dosage (1.25 mL as needed for irritability or temp >100.4°F).</p>
        <p>3. <strong>Guidance:</strong> Discussed baby-proofing home, transitioning to whole milk, and introducing cups. Return for 15-month well-child check.</p>
      </div>
    `
  }
};

// Global State
let activeScenario = 'cardiology';
let isPlaying = false;
let playInterval = null;
let currentUtteranceIndex = 0;
let typingTimeout = null;
let waveInterval = null;

// DOM Elements
const hamburger = document.getElementById('hamburger-toggle');
const navbar = document.getElementById('main-navbar');
const header = document.getElementById('main-header');
const tabTranscript = document.getElementById('tab-transcript');
const tabSoap = document.getElementById('tab-soap');
const simulatorScreen = document.getElementById('simulator-screen');
const simulatorPlayBtn = document.getElementById('simulator-play-btn');
const simulatorWaveform = document.getElementById('simulator-waveform');
const simulatorDot = document.getElementById('simulator-dot');
const simulatorStatusText = document.getElementById('simulator-status-text');
const scenarioOptions = document.querySelectorAll('.selector-option');
const playIcon = document.getElementById('play-icon');
const stopIcon = document.getElementById('stop-icon');

// Initialize Waveform Bars
const NUM_WAVEFORM_BARS = 30;
function initWaveform() {
  simulatorWaveform.innerHTML = '';
  for (let i = 0; i < NUM_WAVEFORM_BARS; i++) {
    const bar = document.createElement('div');
    bar.classList.add('waveform-bar');
    simulatorWaveform.appendChild(bar);
  }
}
initWaveform();

// Mobile Navigation Toggle
hamburger.addEventListener('click', () => {
  const isExpanded = hamburger.getAttribute('aria-expanded') === 'true';
  hamburger.setAttribute('aria-expanded', !isExpanded);
  navbar.classList.toggle('mobile-active');
  
  // Transform hamburger to X
  const spans = hamburger.querySelectorAll('span');
  if (!isExpanded) {
    spans[0].style.transform = 'rotate(45deg) translate(6px, 6px)';
    spans[1].style.opacity = '0';
    spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
  } else {
    spans[0].style.transform = 'none';
    spans[1].style.opacity = '1';
    spans[2].style.transform = 'none';
  }
});

// Close mobile menu when clicking links
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    navbar.classList.remove('mobile-active');
    hamburger.setAttribute('aria-expanded', 'false');
    hamburger.querySelectorAll('span').forEach(s => s.style.transform = 'none');
    hamburger.querySelectorAll('span')[1].style.opacity = '1';
  });
});

// Scroll Header Background Shift
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// Scenario Selection
scenarioOptions.forEach(option => {
  option.addEventListener('click', () => {
    if (isPlaying) stopSimulation();
    
    scenarioOptions.forEach(opt => opt.classList.remove('active'));
    option.classList.add('active');
    
    activeScenario = option.getAttribute('data-scenario');
    resetSimulatorScreen();
  });
  
  // Support accessibility Enter key
  option.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      option.click();
    }
  });
});

// Tabs Switching
tabTranscript.addEventListener('click', () => {
  tabTranscript.classList.add('active');
  tabSoap.classList.remove('active');
  showTranscriptScreen();
});

tabSoap.addEventListener('click', () => {
  // Only allow switching to SOAP note if simulator has run or is idle
  tabSoap.classList.add('active');
  tabTranscript.classList.remove('active');
  showSoapScreen();
});

function resetSimulatorScreen() {
  simulatorScreen.innerHTML = `
    <div style="display:flex; flex-direction:column; align-items:center; justify-content:center; height:100%; color:var(--text-muted); text-align:center;">
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style="margin-bottom:1rem;">
        <circle cx="12" cy="12" r="10"/>
        <line x1="12" y1="8" x2="12" y2="16"/>
        <line x1="8" y1="12" x2="16" y2="12"/>
      </svg>
      <p style="color:var(--text-muted); font-size: 0.95rem;">Click the Play button below to start the simulated live recording and clinical note generation.</p>
    </div>
  `;
  simulatorDot.className = 'status-dot';
  simulatorStatusText.innerText = "SYSTEM READY";
  tabTranscript.classList.add('active');
  tabSoap.classList.remove('active');
}

function showTranscriptScreen() {
  if (!isPlaying && currentUtteranceIndex === 0) {
    resetSimulatorScreen();
    return;
  }
  
  // Render completed transcripts up to the current index
  simulatorScreen.innerHTML = '';
  const utterances = scenarios[activeScenario].transcript;
  for (let i = 0; i < currentUtteranceIndex; i++) {
    const utt = utterances[i];
    const item = document.createElement('div');
    item.style.marginBottom = '1.25rem';
    item.innerHTML = `<div class="transcript-speaker ${utt.class}">${utt.speaker}</div><div>${utt.text}</div>`;
    simulatorScreen.appendChild(item);
  }
  
  // Scroll to bottom
  simulatorScreen.scrollTop = simulatorScreen.scrollHeight;
}

function showSoapScreen() {
  simulatorScreen.innerHTML = scenarios[activeScenario].soap;
}

// Simulator Control Functions
simulatorPlayBtn.addEventListener('click', () => {
  if (isPlaying) {
    stopSimulation();
  } else {
    startSimulation();
  }
});

function startSimulation() {
  isPlaying = true;
  currentUtteranceIndex = 0;
  playIcon.style.display = 'none';
  stopIcon.style.display = 'block';
  
  tabTranscript.classList.add('active');
  tabSoap.classList.remove('active');
  
  simulatorDot.className = 'status-dot active';
  simulatorStatusText.innerText = "TRANSCRIBING LIVE...";
  simulatorScreen.innerHTML = '';
  
  simulatorWaveform.classList.add('playing');
  startWaveformMotion();
  
  playNextUtterance();
}

function stopSimulation() {
  isPlaying = false;
  clearTimeout(typingTimeout);
  clearInterval(waveInterval);
  playIcon.style.display = 'block';
  stopIcon.style.display = 'none';
  
  simulatorDot.className = 'status-dot';
  simulatorStatusText.innerText = "SIMULATION STOPPED";
  simulatorWaveform.classList.remove('playing');
  
  // Flatten waveform bars
  const bars = simulatorWaveform.querySelectorAll('.waveform-bar');
  bars.forEach(bar => bar.style.height = '5px');
}

function startWaveformMotion() {
  clearInterval(waveInterval);
  const bars = simulatorWaveform.querySelectorAll('.waveform-bar');
  waveInterval = setInterval(() => {
    bars.forEach(bar => {
      // Bouncing heights when audio simulation is playing
      const newHeight = Math.floor(Math.random() * 32) + 6;
      bar.style.height = `${newHeight}px`;
    });
  }, 120);
}

function playNextUtterance() {
  const utterances = scenarios[activeScenario].transcript;
  if (currentUtteranceIndex >= utterances.length) {
    // Finished scenario
    finishSimulation();
    return;
  }
  
  const currentUtt = utterances[currentUtteranceIndex];
  
  // Create speaker element
  const item = document.createElement('div');
  item.style.marginBottom = '1.25rem';
  const speakerEl = document.createElement('div');
  speakerEl.className = `transcript-speaker ${currentUtt.class}`;
  speakerEl.innerText = currentUtt.speaker;
  
  const textEl = document.createElement('div');
  item.appendChild(speakerEl);
  item.appendChild(textEl);
  simulatorScreen.appendChild(item);
  
  // Type out the message word by word to make it look clinical and real-time
  const words = currentUtt.text.split(' ');
  let wordIndex = 0;
  
  function typeWord() {
    if (wordIndex < words.length) {
      // Print word and rebuild HTML to ensure we don't break tags
      const currentWords = words.slice(0, wordIndex + 1).join(' ');
      textEl.innerHTML = currentWords;
      wordIndex++;
      simulatorScreen.scrollTop = simulatorScreen.scrollHeight;
      
      const wordDelay = Math.floor(Math.random() * 80) + 120; // 120-200ms per word
      typingTimeout = setTimeout(typeWord, wordDelay);
    } else {
      // Finished typing this utterance, schedule next one
      currentUtteranceIndex++;
      typingTimeout = setTimeout(playNextUtterance, 1500); // 1.5s gap between speaker turn
    }
  }
  
  typeWord();
}

function finishSimulation() {
  isPlaying = false;
  clearInterval(waveInterval);
  playIcon.style.display = 'block';
  stopIcon.style.display = 'none';
  
  simulatorWaveform.classList.remove('playing');
  const bars = simulatorWaveform.querySelectorAll('.waveform-bar');
  bars.forEach(bar => bar.style.height = '5px');
  
  simulatorDot.className = 'status-dot';
  simulatorDot.style.backgroundColor = '#06b6d4'; // teal dot
  simulatorStatusText.innerText = "CLINICAL SOAP NOTE GENERATED";
  
  // Auto-switch to SOAP note tab after 1 second with a subtle transition effect
  setTimeout(() => {
    tabSoap.click();
    // Highlight the SOAP note screen slightly
    simulatorScreen.style.transition = 'background-color 0.5s ease';
    simulatorScreen.style.backgroundColor = '#111e30';
    setTimeout(() => {
      simulatorScreen.style.backgroundColor = 'transparent';
    }, 500);
  }, 1000);
}

// Scroll Triggered Animations (Intersection Observer)
const revealElements = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
      // Once it animates in, no need to track it further
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.15,
  rootMargin: "0px 0px -50px 0px"
});

revealElements.forEach(el => revealObserver.observe(el));
