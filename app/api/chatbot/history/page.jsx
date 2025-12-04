// app/chatbot/history/page.jsx
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const STORAGE_KEY = "fityou_chat_sessions_v1";

function loadSessions() {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export default function ChatHistoryPage() {
  const [sessions, setSessions] = useState([]);

  useEffect(() => {
    setSessions(loadSessions());
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#F3F7FF] to-white px-4 py-8">
      <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-xl border border-slate-100 p-5">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-lg font-semibold text-slate-900">Chat history</h1>
          <Link
            href="/chatbot"
            className="text-xs text-[#73AEB5] hover:underline"
          >
            Back to chatbot
          </Link>
        </div>

        {sessions.length === 0 ? (
          <p className="text-sm text-slate-500">
            No conversations yet. Start a chat and it will appear here.
          </p>
        ) : (
          <ul className="divide-y divide-slate-100">
            {sessions.map((s) => {
              const last = s.messages[s.messages.length - 1];
              return (
                <li key={s.id}>
                  <Link
                    href={`/chatbot/history/${s.id}`}
                    className="block py-3 group"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-semibold text-slate-900 group-hover:text-[#73AEB5]">
                        {s.title || "Conversation"}
                      </span>
                      <span className="text-[11px] text-slate-400">
                        {new Date(s.updatedAt).toLocaleString()}
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 line-clamp-1">
                      {last?.content}
                    </p>
                  </Link>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </main>
  );
}
