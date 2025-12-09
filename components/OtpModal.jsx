"use client";

import { useState, useEffect, useRef } from "react";
import { X } from "lucide-react";
import { useAuth } from "@/components/AuthProvider";

export default function OtpModal({ open, onClose }) {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const { login } = useAuth();
  const mounted = useRef(false);
  const inputRefs = useRef([]);

  // Get email when modal opens - FIXED VERSION
  useEffect(() => {
    if (open) {
      console.log("🔓 OtpModal opened - finding email...");
      
      // FIRST: Check localStorage for the email (this is where LoginModal saves it)
      let foundEmail = localStorage.getItem("fityou_email");
      
      console.log("📧 Email from localStorage.fityou_email:", foundEmail);
      
      // If not found, check other possible locations
      if (!foundEmail || !foundEmail.includes('@')) {
        console.log("⚠️ Email not found in localStorage.fityou_email, checking other locations...");
        
        const backupSources = [
          sessionStorage.getItem("fityou_email"),
          localStorage.getItem("email"),
          sessionStorage.getItem("email"),
          localStorage.getItem("user_email")
        ];
        
        for (const source of backupSources) {
          if (source && source.includes('@')) {
            foundEmail = source.trim().toLowerCase();
            console.log("✅ Found email in backup location:", foundEmail);
            // Save it to the standard location for future
            localStorage.setItem("fityou_email", foundEmail);
            break;
          }
        }
      }
      
      // If still no email, check event detail
      if (!foundEmail || !foundEmail.includes('@')) {
        console.log("📡 Checking for email in event system...");
        // Listen for email from event
        const handleEmailEvent = (e) => {
          if (e.detail?.email) {
            const eventEmail = e.detail.email.trim().toLowerCase();
            console.log("📨 Email received from event:", eventEmail);
            setEmail(eventEmail);
            localStorage.setItem("fityou_email", eventEmail);
          }
        };
        
        window.addEventListener("otp-email", handleEmailEvent);
        
        // Cleanup
        return () => window.removeEventListener("otp-email", handleEmailEvent);
      }
      
      // Set the email if found
      if (foundEmail && foundEmail.includes('@')) {
        const cleanEmail = foundEmail.trim().toLowerCase();
        setEmail(cleanEmail);
        console.log("✅ Email set for verification:", cleanEmail);
        
        // Focus first input
        setTimeout(() => {
          if (inputRefs.current[0]) {
            inputRefs.current[0].focus();
          }
        }, 100);
      } else {
        console.error("❌ NO VALID EMAIL FOUND!");
        console.log("Available localStorage:");
        for (let i = 0; i < localStorage.length; i++) {
          const key = localStorage.key(i);
          console.log(`  ${key}: ${localStorage.getItem(key)}`);
        }
        
        setError("Email not found. Please login again.");
        setTimeout(() => {
          onClose();
          // Re-open login modal
          window.dispatchEvent(new Event("open-login"));
        }, 2000);
      }
    }
  }, [open, onClose]);

  // Listen for email updates from Navbar
  useEffect(() => {
    const handleOpenOtp = (e) => {
      if (e.detail?.email) {
        const eventEmail = e.detail.email.trim().toLowerCase();
        console.log("📨 Email received from open-otp event:", eventEmail);
        setEmail(eventEmail);
        localStorage.setItem("fityou_email", eventEmail);
      }
    };
    
    window.addEventListener("open-otp", handleOpenOtp);
    
    return () => {
      window.removeEventListener("open-otp", handleOpenOtp);
    };
  }, []);

  const handleChange = (index, value) => {
    if (!/^\d?$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    setError("");

    if (value && index < 5 && inputRefs.current[index + 1]) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !otp[index] && index > 0 && inputRefs.current[index - 1]) {
      inputRefs.current[index - 1].focus();
    }
    
    // Auto-submit on Enter when last digit is entered
    if (e.key === "Enter" && index === 5 && otp[index]) {
      handleVerify();
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
      setError("");
    }
  };

  const handleVerify = async () => {
    const otpString = otp.join("");
    
    console.log("🔄 OTP Verification Attempt:");
    console.log("- Email:", email);
    console.log("- OTP entered:", otpString);
    console.log("- Email valid?", email && email.includes('@'));
    
    // Validate email
    if (!email || !email.includes('@')) {
      const errorMsg = "Email not found. Please restart login process.";
      console.error("❌", errorMsg);
      setError(errorMsg);
      
      // Try to recover by checking storage again
      const storedEmail = localStorage.getItem("fityou_email");
      if (storedEmail && storedEmail.includes('@')) {
        console.log("🔄 Found email in storage, retrying...");
        setEmail(storedEmail);
        return;
      }
      
      // If still no email, close and reopen login
      setTimeout(() => {
        onClose();
        window.dispatchEvent(new Event("open-login"));
      }, 2000);
      return;
    }

    // Validate OTP
    if (otpString.length !== 6 || !/^\d{6}$/.test(otpString)) {
      setError("Please enter a valid 6-digit OTP");
      return;
    }

    setLoading(true);
    setError("");

    try {
      console.log("📤 Sending to /api/verify-otp:", { 
        email: email.trim().toLowerCase(), 
        otp: otpString 
      });
      
      const res = await fetch("/api/verify-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
          email: email.trim().toLowerCase(),
          otp: otpString
        }),
      });

      console.log("📡 Response status:", res.status);
      
      const data = await res.json();
      console.log("📡 Response data:", data);

      if (data.success) {
        console.log("✅ OTP verification successful!");
        
        // Clear OTP fields
        setOtp(["", "", "", "", "", ""]);
        setError("");
        
        // Update auth state
        await login();
        
        // Clear the stored email (no longer needed)
        localStorage.removeItem("fityou_email");
        sessionStorage.removeItem("fityou_email");
        
        // Dispatch success event
        window.dispatchEvent(new Event("otp-success"));
        
        // Close modal
        onClose();
      } else {
        console.log("❌ Verification failed:", data.error);
        setError(data.error || "Invalid OTP. Please try again.");
        
        // Clear OTP on error
        setOtp(["", "", "", "", "", ""]);
        setTimeout(() => {
          if (inputRefs.current[0]) {
            inputRefs.current[0].focus();
          }
        }, 100);
      }
    } catch (err) {
      console.error("💥 Network error:", err);
      setError("Network error. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleResend = async () => {
    if (!email || !email.includes('@')) {
      setError("Email not found. Please restart login.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/send-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim().toLowerCase() }),
      });

      const data = await res.json();
      if (!data.success) {
        setError("Failed to resend OTP: " + (data.error || "Unknown error"));
      } else {
        setError("✓ New OTP sent successfully!");
        setTimeout(() => setError(""), 3000);
        
        // Clear current OTP
        setOtp(["", "", "", "", "", ""]);
        if (inputRefs.current[0]) {
          inputRefs.current[0].focus();
        }
      }
    } catch (err) {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (!open) return null;

  return (
    <div 
      className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/50"
      data-otp-email={email}
      data-otp-open={open}
    >
      <div className="bg-white rounded-2xl w-full max-w-md mx-4 p-6 relative">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 p-2 hover:bg-gray-100 rounded-full"
          disabled={loading}
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header with email display */}
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold text-[#0D4F8B]">Enter OTP</h3>
          <p className="text-gray-600 mt-2">
            We've sent a 6-digit code to:
          </p>
          <p className="font-semibold text-[#0D4F8B] mt-1 text-lg break-all">
            {email || "No email found"}
          </p>
          {!email && (
            <p className="text-red-500 text-sm mt-2">
              Email missing! Please restart login.
            </p>
          )}
        </div>

        {/* OTP Inputs */}
        <div className="flex justify-center gap-3 mb-6" onPaste={handlePaste}>
          {Array.from({ length: 6 }).map((_, i) => (
            <input
              key={i}
              ref={(el) => (inputRefs.current[i] = el)}
              id={`otp-${i}`}
              type="text"
              inputMode="numeric"
              maxLength={1}
              value={otp[i]}
              onChange={(e) => handleChange(i, e.target.value)}
              onKeyDown={(e) => handleKeyDown(i, e)}
              className="w-12 h-14 text-center text-2xl font-bold border-2 border-gray-300 rounded-xl focus:border-[#0D4F8B] focus:outline-none disabled:opacity-50"
              disabled={loading || !email}
              autoComplete="one-time-code"
            />
          ))}
        </div>

        {/* Error/Success Message */}
        {error && (
          <p className={`text-center mb-4 px-2 ${
            error.includes("✓") || error.includes("successfully") 
              ? "text-green-600" 
              : "text-red-600"
          }`}>
            {error}
          </p>
        )}

        {/* Buttons */}
        <div className="space-y-3">
          <button
            onClick={handleVerify}
            disabled={loading || !email || otp.join("").length !== 6}
            className="w-full bg-[#0D4F8B] text-white py-3 rounded-xl font-semibold hover:bg-[#0a3d70] disabled:opacity-50 transition-colors"
          >
            {loading ? "Verifying..." : "Verify OTP"}
          </button>

          <button
            onClick={handleResend}
            disabled={loading || !email}
            className="w-full border border-[#0D4F8B] text-[#0D4F8B] py-3 rounded-xl font-semibold hover:bg-blue-50 disabled:opacity-50 transition-colors"
          >
            Resend OTP
          </button>

          <p className="text-center text-sm text-gray-500 px-2">
            Didn't receive code? Check spam folder or click "Resend OTP".
          </p>
        </div>

        {/* Debug info (only in development) */}
        {process.env.NODE_ENV === 'development' && (
          <div className="mt-4 p-3 bg-gray-100 rounded text-xs">
            <p>Debug: Email: {email || "empty"}</p>
            <p>OTP: {otp.join("") || "empty"}</p>
            <p>Loading: {loading ? "Yes" : "No"}</p>
          </div>
        )}
      </div>
    </div>
  );
}