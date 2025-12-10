// components/chatbot/ChatHeader.jsx

export default function ChatHeader({ onClose }) {
  return (
    <header className="bg-[#9DCFDA] text-white px-4 py-3 flex items-center justify-between">
      <div className="flex flex-col">
        <span className="text-lg font-semibold leading-tight">FitYou</span>
        <span className="text-xs">Chat with us</span>
        <span className="text-[10px] text-white/85">
          Currently replying in under 30 minutes
        </span>
      </div>

      <button
        onClick={onClose}
        className="text-white/90 hover:text-white text-xl leading-none"
        aria-label="Close chat"
      >
        ✕
      </button>
    </header>
  );
}
