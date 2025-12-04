// components/chatbot/ChatPopup.jsx
"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import ChatHeader from "./ChatHeader";
import MessageList from "./MessageList";
import ChatInput from "./ChatInput";

const STORAGE_KEY = "fityou_chat_sessions_v1";
const ACTIVE_KEY = "fityou_chat_active_session";

function loadSessions() {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function saveSessions(sessions) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(sessions));
}

export default function ChatPopup({ onClose }) {
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const sessionIdRef = useRef(null);

  // init / restore session
  useEffect(() => {
    const storedActive = window.localStorage.getItem(ACTIVE_KEY);
    const sessions = loadSessions();

    if (storedActive) {
      const existing = sessions.find((s) => s.id === storedActive);
      if (existing) {
        sessionIdRef.current = existing.id;
        setMessages(existing.messages);
        return;
      }
    }

    const id = crypto.randomUUID();
    sessionIdRef.current = id;
    window.localStorage.setItem(ACTIVE_KEY, id);

    const welcome = {
      id: crypto.randomUUID(),
      role: "assistant",
      senderName: "FitYou Assistant",
      content:
        "Welcome to FitYou 👋 Please share a few details about what you’re looking for, and I’ll do my best to guide you.",
      createdAt: new Date().toISOString(),
      isFile: false,
    };

    const newSession = {
      id,
      title: "New conversation",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      messages: [welcome],
    };

    saveSessions([newSession, ...sessions]);
    setMessages(newSession.messages);
  }, []);

  // title from first user message
  const title = useMemo(() => {
    const firstUser = messages.find((m) => m.role === "user" && !m.isFile);
    return firstUser?.content?.slice(0, 40) || "New conversation";
  }, [messages]);

  const updateSessionStore = (updatedMessages) => {
    const sessions = loadSessions();
    const id = sessionIdRef.current;
    const now = new Date().toISOString();
    const index = sessions.findIndex((s) => s.id === id);

    const updated = {
      id,
      title,
      createdAt: index >= 0 ? sessions[index].createdAt : now,
      updatedAt: now,
      messages: updatedMessages,
    };

    if (index >= 0) {
      sessions[index] = updated;
    } else {
      sessions.unshift(updated);
    }
    saveSessions(sessions);
  };

  // text OR file message handler
  const handleSend = async (payload) => {
    if (!sessionIdRef.current) return;

    // if payload is a file message object
    if (typeof payload !== "string") {
      const updated = [...messages, payload];
      setMessages(updated);
      updateSessionStore(updated);
      // no AI call for pure file upload
      return;
    }

    const trimmed = payload.trim();
    if (!trimmed) return;

    const userMsg = {
      id: crypto.randomUUID(),
      role: "user",
      senderName: "You",
      content: trimmed,
      createdAt: new Date().toISOString(),
      isFile: false,
    };

    const newMessages = [...messages, userMsg];
    setMessages(newMessages);
    updateSessionStore(newMessages);
    setIsLoading(true);

    try {
      const res = await fetch("/api/chatbot", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: trimmed,
          sessionId: sessionIdRef.current,
          history: newMessages,
        }),
      });

      const data = await res.json();

      if (!res.ok || !data?.reply) {
        throw new Error(data?.error || "AI error");
      }

      const aiMsg = data.reply;
      const updated = [...newMessages, aiMsg];
      setMessages(updated);
      updateSessionStore(updated);
    } catch (err) {
      console.error("Client chat error:", err);
      const errorMsg = {
        id: crypto.randomUUID(),
        role: "assistant",
        senderName: "FitYou Assistant",
        content:
          "Sorry, I’m having trouble reaching the assistant right now. Please check your connection or try again in a moment.",
        createdAt: new Date().toISOString(),
        isFile: false,
      };
      const updated = [...messages, errorMsg];
      setMessages(updated);
      updateSessionStore(updated);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      className="
        fixed bottom-24 right-6 z-[9999]
        w-[340px] sm:w-[380px] h-[540px]
        rounded-3xl shadow-2xl shadow-slate-500/25
        border border-slate-200
        overflow-hidden
        bg-white
        flex flex-col
        animate-[fadeIn_0.2s_ease-out]
      "
      style={{ fontFamily: "'Laila', system-ui, sans-serif" }}
    >
      <ChatHeader onClose={onClose} />
      {/* Only THIS area scrolls, header/footer fixed */}
      <MessageList messages={messages} isLoading={isLoading} />
      <ChatInput onSend={handleSend} disabled={isLoading} />
    </div>
  );
}
