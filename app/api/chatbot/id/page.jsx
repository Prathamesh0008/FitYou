// app/chatbot/history/[id]/page.jsx
"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import MessageBubble from "@/components/chatbot/MessageBubble";

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

export default function HistoryDetailPage() {
  const { id } = useParams();
  const [session, setSession] = useState(null);

  useEffect(() => {
    const sessions = loadSessions();
    const found = sessions.find((s) => s.id === id);
    setSession(found || null);
  }, [id]);

  if (!session) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#F3F7FF] to-white px-4">
        <div className="bg-white rounded-3xl shadow-lg px-6 py-5 text-center space-y-3 border border-slate-100">
          <p className="text-sm text-slate-600">Conversation not found.</p>
          <Link
            href="/chatbot/history"
            className="text-xs text-[#73AEB5] hover:underline"
          >
            Back to history
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#F3F7FF] to-white px-4 py-8">
      <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-xl border border-slate-100 flex flex-col overflow-hidden">
        <div className="px-4 py-3 border-b border-slate-100 flex items-center justify-between">
          <div>
            <h1 className="text-sm font-semibold text-slate-900">
              {session.title || "Conversation"}
            </h1>
            <p className="text-[11px] text-slate-400">
              Started {new Date(session.createdAt).toLocaleString()}
            </p>
          </div>
          <Link
            href="/chatbot/history"
            className="text-xs text-[#73AEB5] hover:underline"
          >
            All chats
          </Link>
        </div>

        <div className="flex-1 overflow-y-auto px-4 py-3 bg-[#F7FAFF] text-[13px]">
          {session.messages.map((m, index) => {
            const prev = session.messages[index - 1];
            const showAvatar = !prev || prev.role !== m.role;
            const showName = showAvatar && m.role === "assistant";

            return (
              <MessageBubble
                key={m.id}
                message={m}
                showAvatar={showAvatar}
                showName={showName}
              />
            );
          })}
        </div>
      </div>
    </main>
  );
}
