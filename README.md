# 🎬 UrduCaption Pro 

![WebGPU](https://img.shields.io/badge/WebGPU-Enabled-00FF88?style=for-the-badge&logo=WebGPU)
![Transformers.js](https://img.shields.io/badge/Transformers.js-v3-FFAA00?style=for-the-badge&logo=huggingface)
![FFmpeg.wasm](https://img.shields.io/badge/FFmpeg.wasm-v0.12-444444?style=for-the-badge&logo=ffmpeg)

**UrduCaption Pro** is a modern, privacy-first, client-side Progressive Web App (PWA) that generates dynamic, highly stylized video captions in Urdu. Inspired by professional editors like CapCut, it runs heavy AI models and video rendering **entirely in your browser**—no backend servers, no cloud costs, and 100% data privacy.

---

## ✨ Features

### 🎙️ AI Transcription (WebGPU)
* Runs **Hugging Face’s Whisper Large v3 Turbo** directly in the browser.
* Hardware-accelerated transcription using **WebGPU** for blazing-fast word-level timestamps.
* Highly optimized for the Urdu language.

### ✍️ Flawless Nastaliq & RTL Support
* Native handling of **Right-to-Left (RTL)** text shaping.
* Specifically optimized for the beautiful but complex **Noto Nastaliq Urdu** font.
* Smart "Resegmentation Engine" allows you to control how many words appear per segment and distributes them elegantly across 1, 2, or 3 lines.

### 🎨 30 Advanced Animation Styles
A custom-built HTML5 Canvas render engine powers 30 mathematical animation styles including:
* **Hormozi Pop:** Active word scales up and turns yellow.
* **Karaoke Slide:** Words slide in from the right.
* **Matrix Rain, Glitch RGB, Cinematic Fade, Particle Burst, and more!**

### 🎵 Audio Beat Sync
* Uses the **Web Audio API** to detect bass frequency peaks (kicks).
* Triggers visual effects (Camera Shake, Screen Flash, Neon Glow, Pulse Scale) on the active text precisely when the beat drops.

### 📦 Professional Export Suite
* **Transparent WebM (VP9 + Alpha):** Export your captions with a transparent background at 2K resolution (2560x1440) for use in Premiere Pro, DaVinci Resolve, or After Effects.
* **Full Video Export (MP4):** Uses **FFmpeg.wasm** to overlay the captions onto your original video directly inside the browser without losing original video quality.

### 📱 Premium CapCut-Style UI/UX
* Dark mode, glassmorphism design.
* Interactive, horizontally scrolling timeline with clickable text segments.
* Real-time text editor to correct AI typos instantly.

---

## 🚀 How to Host on GitHub Pages

Because this app utilizes **WebGPU** and **FFmpeg.wasm**, it strictly requires `SharedArrayBuffer` support. Modern browsers block this unless specific security headers are set. 

This repository includes a custom **Service Worker (`sw.js`)** that automatically intercepts network requests and applies the necessary `COOP/COEP` headers so you can host this directly on GitHub Pages!

1. Fork or Clone this repository.
2. Push the files (`index.html`, `sw.js`, `manifest.json`) to your `main` branch.
3. Go to your repository **Settings > Pages**.
4. Set the source to deploy from the `main` branch.
5. Open your live GitHub Pages link.
6. **Important:** Refresh the page *once* after it loads to allow the Service Worker to activate the security headers.

---

## 💻 Local Development

If you want to run this locally on your machine, you cannot simply double-click the `index.html` file (due to CORS and Web Worker restrictions). 

You must use a local server that injects cross-origin isolation headers. If you use Node.js, you can use `http-server`:

```bash
# Install http-server globally
npm install -g http-server

# Run the server with required security headers
http-server -c-1 --cors -p 8080 -h "Cross-Origin-Embedder-Policy: require-corp" -h "Cross-Origin-Opener-Policy: same-origin"
