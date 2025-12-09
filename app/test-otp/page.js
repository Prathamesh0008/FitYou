// app/test-otp/page.js
"use client";

import { useState } from "react";

export default function TestOTP() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const sendOTP = async () => {
    setLoading(true);
    setResult(null);
    
    try {
      const response = await fetch("/api/send-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      
      const data = await response.json();
      setResult(data);
    } catch (error) {
      setResult({ error: error.message });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Test OTP Endpoint</h1>
      
      <div className="mb-4">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter email"
          className="border p-2 mr-2"
        />
        <button
          onClick={sendOTP}
          disabled={loading || !email}
          className="bg-blue-500 text-white p-2 rounded"
        >
          {loading ? "Sending..." : "Send OTP"}
        </button>
      </div>
      
      {result && (
        <pre className="bg-gray-100 p-4 rounded mt-4">
          {JSON.stringify(result, null, 2)}
        </pre>
      )}
    </div>
  );
}