"use client";

import { useState, useRef, useEffect } from "react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function VoiceChat({
  isOpen,
  onClose,
}: Props) {

  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Hi 👋 I'm DentAssist AI. How can I help you?",
    },
  ]);

  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [listening, setListening] = useState(false);

  // AUTO SCROLL REF
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  // AUTO SCROLL EFFECT
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, loading]);

  const speak = (text: string) => {
    const utterance =
      new SpeechSynthesisUtterance(text);

    utterance.lang = "en-US";

    speechSynthesis.speak(utterance);
  };

  const sendMessage = async (text?: string) => {

    const messageText = text || input;

    if (!messageText) return;

    // USER MESSAGE
    setMessages((prev) => [
      ...prev,
      {
        sender: "user",
        text: messageText,
      },
    ]);

    setInput("");

    setLoading(true);

    try {

      const res = await fetch("/api/voice", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          message: messageText,
        }),
      });

      const data = await res.json();

      // BOT MESSAGE
      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: data.reply,
        },
      ]);

      speak(data.reply);

    } catch (error) {
      console.log(error);
    }

    setLoading(false);
  };

  const startListening = () => {

    const SpeechRecognition =
      (window as any).webkitSpeechRecognition ||
      (window as any).SpeechRecognition;

    if (!SpeechRecognition) {
      alert("Voice recognition not supported.");
      return;
    }

    const recognition = new SpeechRecognition();

    recognition.lang = "en-US";

    recognition.start();

    setListening(true);

    recognition.onresult = (event: any) => {

      const transcript =
        event.results[0][0].transcript;

      setListening(false);

      sendMessage(transcript);
    };

    recognition.onerror = () => {
      setListening(false);
    };
  };

  if (!isOpen) return null;

  return (
    <div className="chat-overlay">

      <div className="chat-box">

        <div className="chat-header">
          <span>DentAssist AI</span>

          <button onClick={onClose}>
            ✖
          </button>
        </div>

        {/* CHAT MESSAGES */}
        <div className="chat-messages">

          {messages.map((msg, i) => (

            <div
              key={i}
              className={`message ${msg.sender}`}
            >
              {msg.text}
            </div>

          ))}

          {/* TYPING */}
          {loading && (
            <div className="message bot typing">
              <span></span>
              <span></span>
              <span></span>
            </div>
          )}

          {/* AUTO SCROLL TARGET */}
          <div ref={messagesEndRef}></div>

        </div>

        {/* INPUT */}
        <div className="chat-input">

          <input
            type="text"
            placeholder="Type your question..."
            value={input}
            onChange={(e) =>
            
              setInput(e.target.value)
            }

            onKeyDown={(e) => {
              if (e.key === "Enter") {
                sendMessage();
              }
            }}
          />

          <button onClick={() => sendMessage()}>
            Send
          </button>

          <button
            onClick={startListening}
            className={
              listening
                ? "mic active"
                : "mic"
            }
          >
            🎤
          </button>

        </div>

      </div>
    </div>
  );
}