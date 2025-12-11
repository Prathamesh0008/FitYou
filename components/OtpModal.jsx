"use client";

import { useState, useEffect, useRef } from "react";
import { X } from "lucide-react";
import { useAuth } from "@/components/AuthProvider";

export default function OtpModal({ open, onClose }) {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [phone, setPhone] = useState("");
  const { login } = useAuth();
  const inputRefs = useRef([]);

  /* ---------------------------------------------------------
     FETCH PHONE WHEN MODAL OPENS
  --------------------------------------------------------- */
  useEffect(() => {
    if (open) {
      console.log("🔓 OtpModal opened - fetching phone...");

      let foundPhone = localStorage.getItem("fityou_phone");

      console.log("📱 Phone from localStorage:", foundPhone);

      // Check backup storage options
      if (!foundPhone) {
        const backupSources = [
          sessionStorage.getItem("fityou_phone"),
          localStorage.getItem("phone"),
          sessionStorage.getItem("phone"),
          localStorage.getItem("user_phone"),
        ];

        for (const src of backupSources) {
          if (src) {
            console.log("✅ Found phone in backup:", src);
            foundPhone = src;
            localStorage.setItem("fityou_phone", src);
            break;
          }
        }
      }

      // Event-based fallback
      if (!foundPhone) {
        console.log("📡 Checking phone from event system…");

        const handlePhoneEvent = (e) => {
          if (e.detail?.phone) {
            console.log("📨 Phone received from event:", e.detail.phone);
            setPhone(e.detail.phone);
            localStorage.setItem("fityou_phone", e.detail.phone);
          }
        };

        window.addEventListener("otp-phone", handlePhoneEvent);
        return () =>
          window.removeEventListener("otp-phone", handlePhoneEvent);
      }

      if (foundPhone) {
        setPhone(foundPhone);
        console.log("✅ Phone set for OTP:", foundPhone);

        setTimeout(() => {
          if (inputRefs.current[0]) inputRefs.current[0].focus();
        }, 100);
      } else {
        console.error("❌ NO PHONE FOUND!");

        setError("Phone number not found. Please login again.");
        setTimeout(() => {
          onClose();
          window.dispatchEvent(new Event("open-login"));
        }, 2000);
      }
    }
  }, [open, onClose]);

  /* ---------------------------------------------------------
     ALSO LISTEN FOR open-otp EVENT
  --------------------------------------------------------- */
  useEffect(() => {
    const handler = (e) => {
      if (e.detail?.phone) {
        console.log("📨 Phone received (event):", e.detail.phone);
        setPhone(e.detail.phone);
        localStorage.setItem("fityou_phone", e.detail.phone);
      }
    };
    window.addEventListener("open-otp", handler);
    return () => window.removeEventListener("open-otp", handler);
  }, []);

  /* ---------------------------------------------------------
     OTP INPUT HANDLER
  --------------------------------------------------------- */
  const handleChange = (index, value) => {
    if (!/^\d?$/.test(value)) return;
    const copy = [...otp];
    copy[index] = value;
    setOtp(copy);
    setError("");

    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
    if (e.key === "Enter" && index === 5 && otp[index]) handleVerify();
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pasted = e.clipboardData.getData("text").slice(0, 6);
    if (/^\d+$/.test(pasted)) {
      const arr = pasted.split("");
      const filled = ["", "", "", "", "", ""];
      arr.forEach((d, i) => (filled[i] = d));
      setOtp(filled);
    }
  };

  /* ---------------------------------------------------------
      VERIFY OTP
  --------------------------------------------------------- */
  const handleVerify = async () => {
    const otpString = otp.join("");

    console.log("🔄 Verifying OTP:");
    console.log("- Phone:", phone);
    console.log("- OTP:", otpString);

    if (!phone) {
      setError("Phone not found. Please login again.");
      return;
    }

    if (otpString.length !== 6) {
      setError("Please enter a valid 6-digit OTP");
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
      console.log("📡 Response:", data);

      if (data.success) {
        console.log("✅ OTP verified!");

        setOtp(["", "", "", "", "", ""]);
        await login();

        localStorage.removeItem("fityou_phone");
        sessionStorage.removeItem("fityou_phone");

        window.dispatchEvent(new Event("otp-success"));
        onClose();
      } else {
        setError(data.error || "Invalid OTP");
        setOtp(["", "", "", "", "", ""]);
        setTimeout(() => inputRefs.current[0]?.focus(), 120);
      }
    } catch (err) {
      console.error("💥 Network error:", err);
      setError("Network error. Try again.");
    } finally {
      setLoading(false);
    }
  };

  /* ---------------------------------------------------------
      RESEND OTP
  --------------------------------------------------------- */
  const handleResend = async () => {
    if (!phone) return setError("Phone missing.");

    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/send-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone }),
      });

      const data = await res.json();

      if (!data.success) {
        setError("Failed to resend OTP");
      } else {
        setError("✓ New OTP sent!");
        setTimeout(() => setError(""), 3000);
        setOtp(["", "", "", "", "", ""]);
        inputRefs.current[0]?.focus();
      }
    } catch (err) {
      setError("Network error.");
    } finally {
      setLoading(false);
    }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/50">
      <div className="bg-white rounded-2xl w-full max-w-md mx-4 p-6 relative">
        {/* CLOSE BUTTON */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 p-2 hover:bg-gray-100 rounded-full"
          disabled={loading}
        >
          <X className="w-5 h-5" />
        </button>

        {/* HEADER */}
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold text-[#0D4F8B]">Enter OTP</h3>
          <p className="text-gray-600 mt-2">We've sent a 6-digit code to:</p>
          <p className="font-semibold text-[#0D4F8B] mt-1 break-all text-lg">
            {phone || "No phone found"}
          </p>
        </div>

        {/* OTP INPUT */}
        <div className="flex justify-center gap-3 mb-6" onPaste={handlePaste}>
          {otp.map((digit, i) => (
            <input
              key={i}
              ref={(el) => (inputRefs.current[i] = el)}
              maxLength={1}
              type="text"
              inputMode="numeric"
              value={digit}
              onChange={(e) => handleChange(i, e.target.value)}
              onKeyDown={(e) => handleKeyDown(i, e)}
              className="w-12 h-14 text-center text-2xl font-bold border-2 border-gray-300 rounded-xl focus:border-[#0D4F8B]"
            />
          ))}
        </div>

        {/* ERROR */}
        {error && (
          <p className={`text-center mb-4 ${error.includes("✓") ? "text-green-600" : "text-red-600"}`}>
            {error}
          </p>
        )}

        {/* BUTTONS */}
        <button
          onClick={handleVerify}
          disabled={loading || otp.join("").length !== 6}
          className="w-full bg-[#0D4F8B] text-white py-3 rounded-xl font-semibold"
        >
          {loading ? "Verifying..." : "Verify OTP"}
        </button>

        <button
          onClick={handleResend}
          disabled={loading}
          className="w-full border border-[#0D4F8B] text-[#0D4F8B] py-3 mt-3 rounded-xl font-semibold"
        >
          Resend OTP
        </button>
      </div>
    </div>
  );
}
