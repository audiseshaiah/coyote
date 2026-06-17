"use client";

import { useState, useCallback, useEffect } from "react";

/* eslint-disable @typescript-eslint/no-explicit-any */

export default function VoiceAssistant() {
  const [enabled, setEnabled] = useState(false);
  const [listening, setListening] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const speak = useCallback((text: string) => {
    if (!enabled || !("speechSynthesis" in window)) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 0.9;
    utterance.pitch = 1;
    window.speechSynthesis.speak(utterance);
  }, [enabled]);

  // Voice commands
  const startListening = useCallback(() => {
    if (!("webkitSpeechRecognition" in window || "SpeechRecognition" in window)) {
      speak("Voice commands are not supported in this browser.");
      return;
    }

    const SpeechRecognitionCtor =
      (window as any).webkitSpeechRecognition ||
      (window as any).SpeechRecognition;
    const recognition = new SpeechRecognitionCtor();
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = "en-US";

    recognition.onstart = () => setListening(true);
    recognition.onend = () => setListening(false);

    recognition.onresult = (event: any) => {
      const transcript = event.results[0][0].transcript.toLowerCase();
      speak(`You said: ${transcript}`);

      // Simple navigation commands
      if (transcript.includes("home") || transcript.includes("go home")) {
        window.location.href = "/";
      } else if (transcript.includes("map") || transcript.includes("campus")) {
        window.location.href = "/campus-map";
      } else if (transcript.includes("contact")) {
        window.location.href = "/contact";
      } else if (transcript.includes("career") || transcript.includes("job")) {
        window.location.href = "/careers";
      } else if (transcript.includes("service")) {
        window.location.href = "/services";
      } else if (transcript.includes("about")) {
        window.location.href = "/about";
      } else {
        speak("Command not recognized. Try saying: go home, open map, contact, careers, services, or about.");
      }
    };

    recognition.onerror = () => {
      setListening(false);
      speak("Sorry, I couldn't hear that. Please try again.");
    };

    recognition.start();
  }, [speak]);

  // Announce page on enable
  useEffect(() => {
    if (enabled) {
      const title = document.title;
      speak(`Voice assistance enabled. You are on ${title}. Say a command or press the microphone to navigate.`);
    } else {
      if ("speechSynthesis" in window) window.speechSynthesis.cancel();
    }
  }, [enabled, speak]);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2">
      {/* Expanded panel */}
      {expanded && (
        <div className="bg-white border border-[var(--color-border)] rounded-xl shadow-xl p-4 w-72 mb-2" role="dialog" aria-label="Voice assistant controls">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-semibold text-sm text-[var(--color-primary)]">Voice Assistant</h3>
            <button onClick={() => setExpanded(false)} className="text-gray-400 hover:text-gray-600" aria-label="Close voice assistant panel">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Toggle */}
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm text-[var(--color-text-light)]">Enable Voice</span>
            <button
              onClick={() => setEnabled(!enabled)}
              className={`relative w-11 h-6 rounded-full transition-colors ${enabled ? "bg-[var(--color-primary)]" : "bg-gray-300"}`}
              role="switch"
              aria-checked={enabled}
              aria-label="Toggle voice assistance"
            >
              <span className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition-transform ${enabled ? "translate-x-5" : ""}`} />
            </button>
          </div>

          {enabled && (
            <>
              <button
                onClick={startListening}
                disabled={listening}
                className={`w-full py-2 px-4 rounded-lg text-sm font-medium transition-colors ${
                  listening
                    ? "bg-red-100 text-red-700 animate-pulse"
                    : "bg-[var(--color-primary)]/10 text-[var(--color-primary)] hover:bg-[var(--color-primary)]/20"
                }`}
              >
                {listening ? "🎙️ Listening..." : "🎤 Speak a Command"}
              </button>
              <div className="mt-3 text-xs text-gray-500 space-y-1">
                <p className="font-medium">Try saying:</p>
                <p>&quot;Go home&quot; &bull; &quot;Open map&quot; &bull; &quot;Contact&quot;</p>
                <p>&quot;Careers&quot; &bull; &quot;Services&quot; &bull; &quot;About&quot;</p>
              </div>
            </>
          )}
        </div>
      )}

      {/* Floating button */}
      <button
        onClick={() => setExpanded(!expanded)}
        className={`w-14 h-14 rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-105 ${
          enabled
            ? "bg-[var(--color-primary)] text-white"
            : "bg-white text-[var(--color-primary)] border border-[var(--color-border)]"
        }`}
        aria-label={expanded ? "Close voice assistant" : "Open voice assistant"}
        aria-expanded={expanded}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
        </svg>
      </button>
    </div>
  );
}
