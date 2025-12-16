"use client";

import { useState, useEffect, useRef } from "react";
import { X } from "lucide-react";
import { useAuth } from "@/components/AuthProvider";

export default function OtpModal({ open, onClose }) {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [phone, setPhone] = useState("");

  const inputRefs = useRef([]);
  const { login } = useAuth();

  /* ---------------------------------------------------------
     LOAD PHONE NUMBER
  --------------------------------------------------------- */
  useEffect(() => {
    if (!open) return;

    const stored = localStorage.getItem("fityou_phone");
    if (stored) setPhone(stored);

    setOtp(["", "", "", "", "", ""]);
    setError("");

    setTimeout(() => {
      inputRefs.current[0]?.focus();
    }, 150);
  }, [open]);

  /* ---------------------------------------------------------
     INPUT HANDLERS
  --------------------------------------------------------- */
  const handleChange = (index, value) => {
    if (!/^\d?$/.test(value)) return;

    const next = [...otp];
    next[index] = value;
    setOtp(next);
    setError("");

    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }

    if (e.key === "Enter" && otp.join("").length === 6) {
      handleVerify();
    }
  };

  /* ---------------------------------------------------------
     VERIFY OTP (🔥 FINAL FIXED VERSION)
  --------------------------------------------------------- */
  const handleVerify = async () => {
    const otpString = otp.join("");

    if (otpString.length !== 6) {
      setError("Please enter 6-digit OTP");
      return;
    }

    if (!phone) {
      setError("Phone not found. Please login again.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/verify-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone, otp: otpString }),
      });

      const data = await res.json();
      console.log("💬 OTP VERIFY RESPONSE:", data);

      if (!data.success) {
        setError(data.error || "Invalid OTP");
        setOtp(["", "", "", "", "", ""]);
        return;
      }

      // ✅ LOGIN SUCCESS
      await login();

      // 🔥 VERY IMPORTANT — notify quiz loading page
      window.dispatchEvent(new Event("otp-success"));

      // cleanup
      localStorage.removeItem("fityou_phone");

      onClose();
    } catch (err) {
      console.error("❌ OTP VERIFY ERROR:", err);
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[2000] flex items-center justify-center bg-black/50">
      <div className="bg-white rounded-2xl w-full max-w-md p-6 relative">

        {/* CLOSE */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 p-2 hover:bg-gray-100 rounded-full"
        >
          <X className="w-5 h-5" />
        </button>

        <h2 className="text-2xl font-bold text-center text-[#0D4F8B]">
          Enter OTP
        </h2>

        <p className="text-center text-gray-600 mt-2">
          Sent to <b>{phone}</b>
        </p>

        {/* OTP INPUTS */}
        <div className="flex justify-center gap-3 mt-6">
          {otp.map((digit, index) => (
            <input
              key={index}
              ref={(el) => (inputRefs.current[index] = el)}
              maxLength={1}
              value={digit}
              onChange={(e) => handleChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              className="
                w-12 h-14
                border-2 rounded-xl
                text-2xl font-bold text-center
                border-gray-300
                focus:outline-none focus:border-[#0D4F8B]
              "
            />
          ))}
        </div>

        {error && (
          <p className="text-center text-red-600 mt-3 text-sm">{error}</p>
        )}

        <button
          onClick={handleVerify}
          disabled={loading}
          className="
            w-full mt-6 py-3
            rounded-xl font-semibold
            bg-[#0D4F8B] text-white
            hover:bg-[#0B3F70]
            disabled:opacity-50
          "
        >
          {loading ? "Verifying..." : "Verify OTP"}
        </button>
      </div>
    </div>
  );
}
