// app/debug-otp/page.js
"use client";

import { useState } from "react";

export default function DebugOTP() {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const checkOTPStatus = async () => {
    setLoading(true);
    setResult(null);
    
    try {
      const res = await fetch("/api/debug-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      
      const data = await res.json();
      setResult(data);
    } catch (error) {
      setResult({ error: error.message });
    } finally {
      setLoading(false);
    }
  };

  const verifyOTP = async () => {
    setLoading(true);
    setResult(null);
    
    try {
      const res = await fetch("/api/verify-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, otp }),
      });
      
      const data = await res.json();
      setResult(data);
    } catch (error) {
      setResult({ error: error.message });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-8 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">OTP Debug Tool</h1>
      
      <div className="space-y-4 mb-6">
        <div>
          <label className="block mb-2">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border rounded"
            placeholder="test@example.com"
          />
        </div>
        
        <div>
          <label className="block mb-2">OTP (for verification)</label>
          <input
            type="text"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            className="w-full p-2 border rounded"
            placeholder="123456"
          />
        </div>
        
        <div className="flex gap-4">
          <button
            onClick={checkOTPStatus}
            disabled={loading || !email}
            className="bg-blue-500 text-white px-4 py-2 rounded disabled:opacity-50"
          >
            Check OTP Status
          </button>
          
          <button
            onClick={verifyOTP}
            disabled={loading || !email || !otp}
            className="bg-green-500 text-white px-4 py-2 rounded disabled:opacity-50"
          >
            Verify OTP
          </button>
          
          <button
            onClick={() => {
              fetch("/api/send-otp", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email }),
              })
              .then(res => res.json())
              .then(data => setResult(data))
              .catch(err => setResult({ error: err.message }));
            }}
            disabled={loading || !email}
            className="bg-purple-500 text-white px-4 py-2 rounded disabled:opacity-50"
          >
            Send OTP
          </button>
        </div>
      </div>
      
      {result && (
        <div className="bg-gray-50 p-4 rounded">
          <h2 className="text-lg font-semibold mb-2">Result:</h2>
          <pre className="whitespace-pre-wrap">{JSON.stringify(result, null, 2)}</pre>
        </div>
      )}
      
      <div className="mt-8 p-4 bg-yellow-50 rounded">
        <h3 className="font-semibold mb-2">Debug Info:</h3>
        <p>Current Time: {new Date().toISOString()}</p>
        <p>Timestamp: {Date.now()}</p>
      </div>
    </div>
  );
}