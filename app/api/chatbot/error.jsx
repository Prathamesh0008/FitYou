// app/chatbot/error.jsx
"use client";

export default function ChatbotError({ error, reset }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-red-50">
      <div className="bg-white border border-red-100 rounded-3xl shadow-lg px-6 py-5 max-w-md text-center space-y-3">
        <h1 className="text-lg font-semibold text-red-600">
          Chatbot failed to load
        </h1>
        <p className="text-sm text-slate-600">
          {error?.message || "Something went wrong."}
        </p>
        <button
          onClick={reset}
          className="mt-2 inline-flex items-center justify-center px-4 py-2 text-sm font-semibold rounded-full bg-red-600 text-white hover:bg-red-700"
        >
          Try again
        </button>
      </div>
    </div>
  );
}
