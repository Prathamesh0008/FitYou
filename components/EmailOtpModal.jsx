"use client";

import { useState } from "react";

export default function EmailOtpModal({ email, onClose, onVerified }) {
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);

  const verify = async () => {
    if (!otp) return alert("Enter OTP");

    setLoading(true);

    const res = await fetch("/api/email/verify-otp", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, otp }),
    });

    const data = await res.json();
    setLoading(false);

    if (data.success) {
      onVerified(email);
    } else {
      alert(data.error || "Invalid OTP");
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30">
      <div className="bg-white p-6 rounded-xl shadow-xl w-80">
        <h2 className="text-lg font-semibold mb-3 text-[#0D4F8B]">
          Verify your new email
        </h2>

        <p className="text-sm text-gray-600 mb-3">
          OTP sent to <b>{email}</b>
        </p>

        <input
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          placeholder="Enter OTP"
          className="w-full px-3 py-2 border rounded-lg mb-4"
        />

        <button
          onClick={verify}
          className="w-full py-2 bg-[#0D4F8B] text-white rounded-lg"
        >
          {loading ? "Verifying..." : "Verify"}
        </button>

        <button
          onClick={onClose}
          className="w-full mt-2 py-2 bg-gray-200 rounded-lg"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}
