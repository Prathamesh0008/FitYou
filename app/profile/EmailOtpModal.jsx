"use client";

import { useState } from "react";

export default function EmailOtpModal({ open, onClose, email }) {
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);

  if (!open) return null;

  const handleVerify = async () => {
    console.log("VERIFY MODAL EMAIL:", email); // DEBUG LINE

    if (!email) {
      alert("Email missing — modal did not receive email prop");
      return;
    }

    if (!otp) {
      alert("Enter OTP");
      return;
    }

    setLoading(true);

    const res = await fetch("/api/email/verify-otp", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: email, // <--- 100% MUST SEND THIS
        otp: otp,
      }),
    });

    const data = await res.json();
    setLoading(false);

    if (data.success) {
      alert("Email updated successfully!");
      onClose();
      window.location.reload();
    } else {
      alert(data.error || "Invalid OTP");
    }
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-6 w-full max-w-sm">
        <h2 className="text-lg font-semibold text-[#0D4F8B] mb-3">
          Verify Email
        </h2>

        <p className="text-sm text-gray-600 mb-3">
          OTP sent to <b>{email}</b>
        </p>

        <input
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          placeholder="Enter OTP"
          className="w-full border border-gray-300 rounded-lg px-3 py-2 mb-4"
        />

        <button
          onClick={handleVerify}
          className="w-full bg-[#0D4F8B] text-white py-2 rounded-lg"
        >
          {loading ? "Verifying..." : "Verify OTP"}
        </button>

        <button
          onClick={onClose}
          className="w-full text-gray-500 mt-3 text-sm"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}
