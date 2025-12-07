# Speech-to-Speech Translator 🎙️🌐

A real-time **speech-to-speech translator** built with HTML, CSS and JavaScript.  
The app listens to your voice, converts it to text, translates it between languages  
(English, Tamil, Hindi, Telugu, etc.), and then speaks the translated result out loud.

---

## ✨ Features

- 🎤 **Speech Recognition**  
  Uses the browser’s Web Speech API to convert spoken audio into text.

- 🌍 **Automatic Translation**  
  Text is translated between languages (e.g. English ↔ Tamil, English ↔ Hindi).

- 🔊 **Text-to-Speech Output**  
  The translated text is spoken using Speech Synthesis with a natural-sounding voice.

- 🔁 **Two-Way Conversation Mode**  
  You can switch source and target languages to have back-and-forth conversations.

- 💻 **Runs in the Browser**  
  No installation required – just open `index.html` in a supported browser.

---

## 🧰 Tech Stack

- **Frontend:** HTML5, CSS3, JavaScript (Vanilla)
- **APIs:**
  - Web Speech API – SpeechRecognition (speech → text)
  - Web Speech API – SpeechSynthesis (text → speech)
  - Google Translate (unofficial endpoint) or LibreTranslate (configurable)
- **Tools:** Visual Studio Code, Git, GitHub

---

## 🚀 Getting Started

✅ Frontend (HTML/JS)
## ● Frontend (HTML / JavaScript)

```bash
cd frontend
npm install
npm start
```
✅ Frontend runs on:

http://localhost:3000


✅ How to Use the Application:

1.Select the input language from the From dropdown

2.Select the output language from the To dropdown

3.Click 🎤 Start to begin speaking

4.Speak clearly into your microphone

5.View your speech in the Transcript box

6.See the translation in the Translation box

7.Listen to the translated speech automatically

8.Click ⛔ Stop to end recording

9.Click 🧹 Clear to reset everything
