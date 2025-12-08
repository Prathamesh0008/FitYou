"use client";

import { IoClose } from "react-icons/io5";
import { useState, useEffect, useRef } from "react";
import { useAuth } from "@/components/AuthProvider";
import { useRouter } from "next/navigation";

export default function OtpModal({ open, onClose }) {
  if (!open) return null;

  const { login } = useAuth();
  const router = useRouter();

  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [timer, setTimer] = useState(30);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const inputRefs = useRef([]);

  useEffect(() => {
    if (timer === 0) return;
    const id = setInterval(() => setTimer((t) => t - 1), 1000);
    return () => clearInterval(id);
  }, [timer]);

  const handleChange = (value, index) => {
    if (!/^\d*$/.test(value)) return;

    const next = [...otp];
    next[index] = value.slice(-1);
    setOtp(next);

    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleBackspace = (value, index) => {
    if (value === "" && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleResend = async () => {
    setTimer(30);
    const email = sessionStorage.getItem("fityou_pending_email");

    if (!email) {
      setError("Email not found. Please try again.");
      return;
    }

    try {
      await fetch("/api/send-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
    } catch (err) {
      console.error("Resend error:", err);
    }
  };

  const verifyOtp = async () => {
    const code = otp.join("");

    if (code.length !== 6) {
      setError("Please enter your 6-digit OTP");
      return;
    }

    const email = sessionStorage.getItem("fityou_pending_email");
    if (!email) {
      setError("Email not found. Please try again.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/verify-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, otp: code }),
      });

      const data = await res.json();

      if (!data.success) {
        setError(data.error || "Invalid or expired OTP");
        return;
      }

      login({ email });
      sessionStorage.removeItem("fityou_pending_email");

      onClose();

      window.dispatchEvent(new Event("otp-success"));
    } catch (err) {
      console.error("Verify error:", err);
      setError("Failed to verify OTP");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* BACKDROP */}
      <div
        className="fixed inset-0 bg-black/30 backdrop-blur-[2px] z-40"
        onClick={onClose}
      />

      {/* MODAL */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div
          className="
            bg-white rounded-[18px] shadow-[0_4px_30px_rgba(0,0,0,0.12)]
            w-full max-w-[460px] 
            p-6 sm:p-10 
            relative
          "
        >
          {/* CLOSE */}
          <button
  className="
    absolute 
    top-4 right-4    
    sm:top-5 sm:right-5   /* tablets */
    md:top-5 md:right-5   /* laptops + desktops */
    text-[#0D4F8B] hover:text-[#062a50]
  "
  onClick={onClose}
>
  <IoClose className="w-6 h-6 sm:w-7 sm:h-7" /> 
</button>


          {/* TITLE */}
          <h2 className="text-center text-[24px] sm:text-[28px] font-semibold text-[#0D4F8B]">
            Enter passcode
          </h2>

          <p className="text-center text-[14px] sm:text-[15px] text-[#4d4d4d] mt-3 leading-relaxed">
            We&apos;ve sent a 6-digit passcode to your email.
          </p>

          {/* OTP BOXES */}
         {/* OTP BOXES */}
<div className="flex justify-center gap-2 xs:gap-3 sm:gap-4 mt-7 flex-nowrap">
  {otp.map((digit, index) => (
    <input
      key={index}
      ref={(el) => (inputRefs.current[index] = el)}
      type="text"
      maxLength="1"
      value={digit}
      onChange={(e) => handleChange(e.target.value, index)}
      onKeyDown={(e) => {
        if (e.key === "Backspace") {
          handleBackspace(e.currentTarget.value, index);
        }
      }}
      className="
        w-10 h-10 
        xs:w-11 xs:h-11 
        sm:w-12 sm:h-12
        text-center text-xl sm:text-2xl font-bold
        border-2 border-[#D0D7E2] rounded-lg
        focus:outline-none focus:border-[#0D4F8B]
      "
    />
  ))}
</div>


          {/* ERROR */}
          {error && (
            <p className="text-red-500 text-[12px] mt-3 text-center">
              {error}
            </p>
          )}

          {/* TIMER */}
          <div className="text-center mt-6 text-sm text-[#7A8BA4]">
            {timer > 0 ? (
              <p>Resend code in {timer}s</p>
            ) : (
              <button
                onClick={handleResend}
                className="text-[#0D4F8B] font-semibold hover:underline"
              >
                Resend code
              </button>
            )}
          </div>

          {/* VERIFY BUTTON */}
          <button
            disabled={loading || otp.join("").length !== 6}
            onClick={verifyOtp}
            className="
              w-full mt-8 py-3.5 rounded-[10px]
              bg-[#8DBFC9] hover:bg-[#7EB4C0] disabled:opacity-50
              text-[#0B2340] text-[15px] sm:text-[16px] font-medium
              transition
            "
          >
            {loading ? "Verifying..." : "Verify"}
          </button>
        </div>
      </div>
    </>
  );
}
