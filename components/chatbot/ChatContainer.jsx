"use client";

import { useEffect, useRef, useState } from "react";
import ChatHeader from "./ChatHeader";
import MessageList from "./MessageList";
import ChatInput from "./ChatInput";
import TypingIndicator from "./TypingIndicator";

const LONG_INFO_MESSAGE = `
Sure, I'll be happy to share the details. Thank you for your interest in Fityou weight loss program! 
We provide subscription-based plans for weight loss. We offer two plans, both designed to support weight loss with medication. One plan includes tablets called Rybelsus, and other features an easy-to-use injectable pen, Mounjaro.

These medications work by suppressing your appetite and cravings which helps you to consume lesser calorie on daily basis. Eventually, this will help your body to burn the stored fat and lose weight.

I would also like to share that our plans are not only for the medication, you also receive Aktive membership benefits and free delivery. You will get following benefits with Aktive membership:-

1. Meal Plan - You will get the meal plan to maintain a healthy diet.
2. Fitness Plan - You will receive a personalized workout program that is easy to follow three times a week.
3. Health Hub - This allows you to access a wealth of information on lifestyle changes, nutrition and unique video training programs.
4. Weight loss support - We’re here for you every step of the way. If you need assistance or have any queries about your weight loss treatment and plan, our customer service team and partner doctors are always available to provide full support.
`.trim();

const CLOSING_MESSAGE = `
Thank you for contacting us at Fityou! Since, we have not received any response, this chat is closed. Please feel free to reach out to us, if you need any further assistance. 

Tel: +91 8767465480 
Email: care@Fityou.co.in 
Web: https://www.fityou.co.in 
Lines are open Mon-Fri 10:30-19:30
`.trim();

export default function ChatContainer({ onClose }) {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [waitingForUser, setWaitingForUser] = useState(false);
  const [noResponseCount, setNoResponseCount] = useState(0);
  const [hasSentInfo, setHasSentInfo] = useState(false);
  const [isClosed, setIsClosed] = useState(false);

  const listRef = useRef(null);

  // Scroll to bottom
  useEffect(() => {
    if (listRef.current) {
      listRef.current.scrollTop = listRef.current.scrollHeight;
    }
  }, [messages]);

  // Default messages
  useEffect(() => {
    if (messages.length === 0) {
      const time = new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      });

      setMessages([
        {
          id: crypto.randomUUID(),
          sender: "bot",
          text: "Welcome to fityou.",
          time,
        },
        {
          id: crypto.randomUUID(),
          sender: "bot",
          text: "Hello, Good Afternoon!",
          time,
        },
        {
          id: crypto.randomUUID(),
          sender: "bot",
          text: "Welcome to fityou. Please provide your full name, email address and contact details. Thank you.",
          time,
        },
        {
          id: crypto.randomUUID(),
          sender: "bot",
          text: "How can we assist you today?",
          time,
        },
      ]);
    }
  }, [messages.length]);

  // Connection check
  useEffect(() => {
    if (!waitingForUser || isClosed) return;

    const interval = setInterval(() => {
      setNoResponseCount((prev) => {
        const next = prev + 1;

        const time = new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        });

        if (next <= 3) {
          setMessages((old) => [
            ...old,
            {
              id: crypto.randomUUID(),
              sender: "bot",
              text: "Are we still connected?",
              time,
            },
          ]);
        }

        if (next === 4) {
          setMessages((old) => [
            ...old,
            {
              id: crypto.randomUUID(),
              sender: "bot",
              text: CLOSING_MESSAGE,
              time,
            },
          ]);
          setIsClosed(true);
          setWaitingForUser(false);
        }

        return next;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, [waitingForUser, isClosed]);

  const handleSend = async () => {
    if (!input.trim() || isClosed) return;

    const text = input.trim();
    const time = new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });

    // Add user message
    setMessages((prev) => [
      ...prev,
      {
        id: crypto.randomUUID(),
        sender: "user",
        text,
        time,
      },
    ]);

    setInput("");
    setIsSending(true);
    setIsTyping(true);
    setWaitingForUser(false);
    setNoResponseCount(0);

    try {
      const apiMessages = [
        {
          role: "system",
          content:
            "You are chatting inside the FitYou website widget. Keep answers short, clear and friendly.",
        },
        ...messages.map((m) => ({
          role: m.sender === "user" ? "user" : "assistant",
          content: m.text,
        })),
        { role: "user", content: text },
      ];

      const res = await fetch("/api/chatbot", {
        method: "POST",
        body: JSON.stringify({ messages: apiMessages }),
      });

      const data = await res.json();
      const botReply = data.reply || "Thank you for your message!";

      const botTime = new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      });

      const newMessages = [
        {
          id: crypto.randomUUID(),
          sender: "bot",
          text: botReply,
          time: botTime,
        },
      ];

      if (!hasSentInfo) {
        newMessages.push({
          id: crypto.randomUUID(),
          sender: "bot",
          text: LONG_INFO_MESSAGE,
          time: botTime,
        });
        setHasSentInfo(true);
      }

      setMessages((prev) => [...prev, ...newMessages]);
      setWaitingForUser(true);
    } catch (err) {
      console.error(err);
      setMessages((prev) => [
        ...prev,
        {
          id: crypto.randomUUID(),
          sender: "bot",
          text:
            "I’m sorry, something went wrong while generating a reply. Please try again or contact us at care@fityou.co.in.",
          time,
        },
      ]);
    } finally {
      setIsSending(false);
      setIsTyping(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="flex h-[550px] flex-col bg-[#F4F8FF]">
      <ChatHeader onClose={onClose} />

      <div
        ref={listRef}
        className="flex-1 overflow-y-auto px-4 py-3 space-y-2 bg-[#F7FBFF]"
      >
        <MessageList messages={messages} />
        {isTyping && <TypingIndicator />}
      </div>

      <ChatInput
        value={input}
        onChange={setInput}
        onSend={handleSend}
        onKeyDown={handleKeyDown}
        disabled={isSending || isClosed}
      />
    </div>
  );
}
