// components/chatbot/TypingIndicator.jsx

export default function TypingIndicator() {
  return (
    <div className="flex items-center gap-2 text-xs text-slate-400 mb-2">
      <div className="flex items-center gap-1 bg-white border border-slate-200 rounded-full px-2 py-1 shadow-sm">
        <span className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce" />
        <span className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-[bounce_1s_infinite_0.2s]" />
        <span className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-[bounce_1s_infinite_0.4s]" />
      </div>
      <span>FitYou Assistant is typing…</span>
    </div>
  );
}
