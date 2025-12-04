// components/chatbot/MessageBubble.jsx
import clsx from "clsx";

export default function MessageBubble({ message, showAvatar, showName }) {
  const isUser = message.role === "user";

  const time = new Date(message.createdAt).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  const initial = isUser
    ? (message.senderName?.[0] || "Y").toUpperCase()
    : "F";

  return (
    <div
      className={clsx("flex gap-2 mb-3", {
        "justify-end": isUser,
        "justify-start": !isUser,
      })}
    >
      {/* Left avatar for assistant */}
      {!isUser && showAvatar && (
        <div className="w-8 h-8 rounded-full bg-[#9DCFDA33] border border-[#9DCFDA66] flex items-center justify-center text-xs text-[#256A72] font-semibold">
          {initial}
        </div>
      )}

      <div
        className={clsx("max-w-[75%] flex flex-col", {
          "items-end": isUser,
          "items-start": !isUser,
        })}
      >
        {showName && (
          <span className="text-[11px] text-slate-500 mb-0.5">
            {isUser ? "You" : "FitYou Assistant"}
          </span>
        )}

        <div
          className={clsx(
            "px-3 py-2 rounded-2xl text-sm shadow-sm",
            "animate-[fadeInUp_0.18s_ease-out]",
            isUser
              ? "bg-[#7EC8E3] text-white rounded-br-sm"
              : "bg-[#F4F5F7] text-[#374151] border border-[#E1E4EE] rounded-bl-sm"
          )}
        >
          {message.isFile ? (
            <div className="flex flex-col gap-2">
              {message.fileType?.startsWith("image/") ? (
                <img
                  src={message.fileContent}
                  alt={message.fileName}
                  className="rounded-lg max-w-[220px] w-full object-contain border border-slate-200"
                />
              ) : (
                <a
                  href={message.fileContent}
                  download={message.fileName}
                  className="text-sm underline text-[#0D4F8B] break-all flex gap-2 items-center"
                >
                  📄 {message.fileName}
                </a>
              )}
            </div>
          ) : (
            message.content
          )}
        </div>

        <span className="text-[10px] text-slate-400 mt-0.5">{time}</span>
      </div>

      {/* Right avatar for user */}
      {isUser && showAvatar && (
        <div className="w-8 h-8 rounded-full bg-[#9DCFDA33] border border-[#9DCFDA66] flex items-center justify-center text-xs text-[#256A72] font-semibold">
          {(message.senderName?.[0] || "Y").toUpperCase()}
        </div>
      )}
    </div>
  );
}
