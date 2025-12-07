const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");
const clearBtn = document.getElementById("clearBtn");
const transcriptEl = document.getElementById("transcript");
const translatedEl = document.getElementById("translated");
const sourceLang = document.getElementById("sourceLang");
const targetLang = document.getElementById("targetLang");

let recognition;

// TRANSLATE API
async function translate(text, sl, tl) {
  const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=${sl}&tl=${tl}&dt=t&q=${encodeURIComponent(
    text
  )}`;
  const res = await fetch(url);
  const data = await res.json();
  return data[0][0][0];
}

// SPEECH RECOGNITION
function setupRecognition() {
  const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SR) {
    alert("Speech Recognition not supported");
    return null;
  }

  const r = new SR();
  r.lang = sourceLang.value;
  r.interimResults = false;

  r.onresult = async (event) => {
    let spokenText = event.results[0][0].transcript;
    transcriptEl.textContent = spokenText;

    // Convert phonetic -> script if necessary
    const realScript = await translate(spokenText, "en", sourceLang.value);
    transcriptEl.textContent = realScript;

    // Translate to target language
    const output = await translate(
      realScript,
      sourceLang.value,
      targetLang.value
    );
    translatedEl.textContent = output;

    speak(output, targetLang.value);
  };

  r.onend = () => {
    startBtn.disabled = false;
    stopBtn.disabled = true;
  };

  return r;
}

// UPDATED TTS — SUPPORTS TAMIL, HINDI, ANY LANGUAGE
function speak(text, lang) {
  let utter = new SpeechSynthesisUtterance(text);

  function loadVoices() {
    let voices = speechSynthesis.getVoices();

    let voice = voices.find((v) =>
      v.lang.toLowerCase().startsWith(lang.toLowerCase())
    );

    if (!voice) {
      voice = voices.find((v) => v.name.includes("Google"));
    }

    if (voice) utter.voice = voice;

    utter.lang = lang;
    speechSynthesis.speak(utter);
  }

  if (speechSynthesis.getVoices().length === 0) {
    speechSynthesis.onvoiceschanged = loadVoices;
  } else {
    loadVoices();
  }
}

// BUTTONS
startBtn.onclick = () => {
  if (!recognition) recognition = setupRecognition();
  recognition.start();
  startBtn.disabled = true;
  stopBtn.disabled = false;
};

stopBtn.onclick = () => recognition?.stop();

clearBtn.onclick = () => {
  transcriptEl.textContent = "";
  translatedEl.textContent = "";
};
