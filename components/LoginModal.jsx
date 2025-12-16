"use client";

import { IoClose } from "react-icons/io5";
import { useState } from "react";

export default function LoginModal({ open, onClose }) {
  if (!open) return null;

  const [phone, setPhone] = useState("+91");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const sendOtp = async () => {
    // Validate phone number
    const phoneValue = phone.trim();

    if (!phoneValue) {
      setError("Please enter your phone number");
      return;
    }

    // Basic validation for +91 or 10 digit
    const phoneRegex = /^(\+?\d{10,15})$/;

    if (!phoneRegex.test(phoneValue)) {
      setError("Please enter a valid phone number (10–15 digits)");
      return;
    }

    setLoading(true);
    setError("");

    try {
      console.log("📤 Sending OTP to:", phoneValue);

      const res = await fetch("/api/send-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone: phoneValue }),
      });

      const data = await res.json();

      console.log("📩 OTP send response:", data);

      if (!data.success) {
        setError(data.error || "Failed to send OTP");
        return;
      }

      // SAVE PHONE NUMBER FOR OTP VERIFICATION
      console.log("💾 Saving phone for OTP verification:", phoneValue);
      localStorage.setItem("fityou_phone", phoneValue);
      sessionStorage.setItem("fityou_phone", phoneValue);

      const savedPhone = localStorage.getItem("fityou_phone");
      console.log(
        "✅ Phone saved successfully?",
        savedPhone === phoneValue ? "Yes" : "No"
      );
      console.log("📦 Actual saved value:", savedPhone);

      // CLOSE LOGIN MODAL
      onClose();

      // OPEN OTP MODAL (SLIGHT DELAY FOR SAFETY)
      setTimeout(() => {
        console.log("🚀 Dispatching open-otp event with phone:", phoneValue);

        window.dispatchEvent(
          new CustomEvent("open-otp", {
            detail: { phone: phoneValue },
          })
        );
      }, 120);
    } catch (error) {
      console.error("💥 OTP Error:", error);
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") sendOtp();
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
            Enter your phone number to receive
            <br />
            a 6-digit passcode.
          </p>

          {/* INPUT */}
          <div className="mt-7 flex flex-col gap-2 px-1">
           <input
  type="tel"
  value={phone}
  onChange={(e) => {
    let value = e.target.value;

    if (!value.startsWith("+91")) {
      value = "+91" + value.replace(/^\+?91/, "");
    }

    setPhone(value);
    setError("");
  }}
  onKeyPress={handleKeyPress}
  placeholder="Enter Your 10 Digit Number "
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
            <p className="text-red-500 text-[12px] mt-1 pl-1">{error}</p>
          )}

          {/* SEND CODE BUTTON */}
          <button
            disabled={loading || !phone}
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

          {/* Debug */}
          {process.env.NODE_ENV === "development" && (
            <div className="mt-4 text-xs text-gray-500">
              <p>Debug: Will save to localStorage key: "fityou_phone"</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
