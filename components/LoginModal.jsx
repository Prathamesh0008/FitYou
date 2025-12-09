"use client";

import { IoClose } from "react-icons/io5";
import { useState } from "react";

export default function LoginModal({ open, onClose }) {
  if (!open) return null;

  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const sendOtp = async () => {
    // Validate email
    const emailValue = email.trim().toLowerCase();
    
    if (!emailValue) {
      setError("Please enter your email");
      return;
    }
    
    if (!emailValue.includes('@')) {
      setError("Please enter a valid email address");
      return;
    }

    setLoading(true);
    setError("");

    try {
      console.log("📤 Sending OTP to:", emailValue);
      
      const res = await fetch("/api/send-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: emailValue }),
      });

      const data = await res.json();

      console.log("📩 OTP send response:", data);

      if (!data.success) {
        setError(data.error || "Failed to send OTP");
        return;
      }

      // ✅ CRITICAL FIX: Save to localStorage with EXACT key that OtpModal expects
      console.log("💾 Saving email for OTP verification:", emailValue);
      localStorage.setItem("fityou_email", emailValue);
      
      // Also save to sessionStorage as backup
      sessionStorage.setItem("fityou_email", emailValue);
      
      // Verify it was saved
      const savedEmail = localStorage.getItem("fityou_email");
      console.log("✅ Email saved successfully?", savedEmail === emailValue ? "Yes" : "No");
      console.log("📦 Actual saved value:", savedEmail);

      // Close this modal
      onClose();

      // Open OTP modal with slight delay (CRITICAL: Give time for state to update)
      setTimeout(() => {
        console.log("🚀 Dispatching open-otp event with email:", emailValue);
        // Pass email in event detail
        window.dispatchEvent(new CustomEvent("open-otp", { 
          detail: { email: emailValue } 
        }));
      }, 100); // Increased delay to ensure storage is ready
      
    } catch (error) {
      console.error("💥 OTP Error:", error);
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      sendOtp();
    }
  };

  return (
    <>
      {/* DARK OVERLAY */}
      <div
        className="fixed inset-0 bg-black/30 backdrop-blur-[1px] z-40"
        onClick={onClose}
      />

      {/* CENTERED MODAL */}
      <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
        <div
          className="
            bg-white 
            rounded-[18px] 
            shadow-[0_4px_30px rgba(0,0,0,0.12)]
            w-full 
            max-w-[500px]
            p-10 
            relative
          "
        >
          {/* CLOSE BUTTON */}
          <button
            className="absolute top-5 right-5 text-[#0D4F8B] hover:text-[#062a50]"
            onClick={onClose}
          >
            <IoClose size={28} />
          </button>

          {/* HEADING */}
          <h2 className="text-center text-[28px] font-semibold text-[#0D4F8B]">
            Login
          </h2>

          {/* DESCRIPTION */}
          <p className="text-center text-[15px] text-[#4d4d4d] mt-3 leading-relaxed">
            Enter your email address to receive<br />a 6-digit passcode.
          </p>

          {/* INPUT */}
          <div className="mt-7 flex flex-col gap-2 px-1">
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setError("");
              }}
              onKeyPress={handleKeyPress}
              placeholder="Email address"
              className="
                w-full
                border 
                border-[#D0D7E2]
                rounded-[8px]
                px-3 
                py-2.5
                text-[14px]
                text-[#1A1A1A]
                focus:outline-none
                focus:ring-2
                focus:ring-[#0D4F8B]/40
              "
              disabled={loading}
            />
          </div>

          {/* ERROR MESSAGE */}
          {error && (
            <p className="text-red-500 text-[12px] mt-1 pl-1">
              {error}
            </p>
          )}

          {/* SEND CODE BUTTON */}
          <button
            disabled={loading || !email}
            className="
              w-full mt-6 py-3.5 
              rounded-[10px]
              bg-[#8DBFC9] hover:bg-[#7EB4C0] disabled:opacity-50
              text-[#0B2340] text-[16px] font-medium
              transition
            "
            onClick={sendOtp}
          >
            {loading ? "Sending..." : "Send code"}
          </button>
          
          {/* Debug info (can remove in production) */}
          {process.env.NODE_ENV === 'development' && (
            <div className="mt-4 text-xs text-gray-500">
              <p>Debug: Will save to localStorage key: "fityou_email"</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}