"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { useAuth } from "@/components/AuthProvider";

export default function OtpModal({ open, onClose }) {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const { login } = useAuth();

  // Get email from localStorage on mount
  useEffect(() => {
    const storedEmail = localStorage.getItem("fityou_email") || "";
    setEmail(storedEmail);
  }, []);

  // Focus first input when modal opens
  useEffect(() => {
    if (open) {
      setTimeout(() => {
        const firstInput = document.getElementById("otp-0");
        if (firstInput) firstInput.focus();
      }, 100);
    }
  }, [open]);

  const handleChange = (index, value) => {
    if (!/^\d?$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    setError("");

    // Auto-focus next
    if (value && index < 5) {
      const nextInput = document.getElementById(`otp-${index + 1}`);
      if (nextInput) nextInput.focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      const prevInput = document.getElementById(`otp-${index - 1}`);
      if (prevInput) prevInput.focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text").slice(0, 6);
    if (/^\d+$/.test(pastedData)) {
      const digits = pastedData.split("");
      const newOtp = [...otp];
      digits.forEach((digit, i) => {
        if (i < 6) newOtp[i] = digit;
      });
      setOtp(newOtp);
    }
  };

  const handleVerify = async () => {
    const otpString = otp.join("");
    if (otpString.length !== 6) {
      setError("Please enter 6-digit OTP");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/verify-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, otp: otpString }),
      });

      const data = await res.json();

      if (data.success) {
        // Call login to update auth state
        await login();
        
        // Close modal first
        onClose();
        
        // Dispatch success event
        window.dispatchEvent(new Event("otp-success"));
        
        // Clear OTP and error
        setOtp(["", "", "", "", "", ""]);
        setError("");
      } else {
        setError(data.error || "Invalid OTP");
      }
    } catch (err) {
      setError("Network error. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleResend = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/send-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();
      if (!data.success) {
        setError("Failed to resend OTP");
      } else {
        setError("OTP resent successfully!");
        setTimeout(() => setError(""), 3000);
      }
    } catch (err) {
      setError("Network error");
    } finally {
      setLoading(false);
    }
  };

  if (!open) return null; // Important: Return null when not open

  return (
    <div className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/50">
      <div className="bg-white rounded-2xl w-full max-w-md mx-4 p-6 relative">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 p-2 hover:bg-gray-100 rounded-full"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold text-[#0D4F8B]">Enter OTP</h3>
          <p className="text-gray-600 mt-2">
            We've sent a 6-digit code to{" "}
            <span className="font-semibold">{email || "your email"}</span>
          </p>
        </div>

        {/* OTP Inputs */}
        <div className="flex justify-center gap-3 mb-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <input
              key={i}
              id={`otp-${i}`}
              type="text"
              inputMode="numeric"
              maxLength={1}
              value={otp[i]}
              onChange={(e) => handleChange(i, e.target.value)}
              onKeyDown={(e) => handleKeyDown(i, e)}
              onPaste={i === 0 ? handlePaste : undefined}
              className="w-12 h-14 text-center text-2xl font-bold border-2 border-gray-300 rounded-xl focus:border-[#0D4F8B] focus:outline-none"
              disabled={loading}
            />
          ))}
        </div>

        {/* Error Message */}
        {error && (
          <p
            className={`text-center mb-4 ${
              error.includes("successfully")
                ? "text-green-600"
                : "text-red-600"
            }`}
          >
            {error}
          </p>
        )}

        {/* Buttons */}
        <div className="space-y-3">
          <button
            onClick={handleVerify}
            disabled={loading}
            className="w-full bg-[#0D4F8B] text-white py-3 rounded-xl font-semibold hover:bg-[#0a3d70] disabled:opacity-50"
          >
            {loading ? "Verifying..." : "Verify OTP"}
          </button>

          <button
            onClick={handleResend}
            disabled={loading}
            className="w-full border border-[#0D4F8B] text-[#0D4F8B] py-3 rounded-xl font-semibold hover:bg-blue-50 disabled:opacity-50"
          >
            Resend OTP
          </button>

          <p className="text-center text-sm text-gray-500">
            Didn't receive code? Check spam folder.
          </p>
        </div>
      </div>
    </div>
  );
}