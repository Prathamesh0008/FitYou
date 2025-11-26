"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const router = useRouter();
  const [data, setData] = useState({ name: "", email: "", password: "" });
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    const res = await fetch("/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify(data),
    });

    const result = await res.json();
    setLoading(false);

    if (!res.ok) {
      alert(result.error || "Registration failed");
      return;
    }

    alert("Account created successfully. Please log in.");
    router.push("/login");
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 via-white to-slate-50 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-sm rounded-2xl bg-white shadow-lg border border-slate-100 p-8">
        <div className="text-center mb-6">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-600 text-white font-semibold">
            FY
          </div>
          <h1 className="mt-4 text-xl font-semibold text-slate-900">
            Create Account
          </h1>
          <p className="text-xs text-slate-500 mt-1">
            Join Fityou — safer weight management
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-xs font-medium text-slate-600">
              Full Name
            </label>
            <input
              className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
              placeholder="John Carter"
              value={data.name}
              onChange={(e) => setData({ ...data, name: e.target.value })}
            />
          </div>

          <div>
            <label className="text-xs font-medium text-slate-600">Email</label>
            <input
              className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
              placeholder="you@example.com"
              value={data.email}
              onChange={(e) => setData({ ...data, email: e.target.value })}
            />
          </div>

          <div>
            <label className="text-xs font-medium text-slate-600">
              Password
            </label>
            <input
              type="password"
              className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
              placeholder="••••••••"
              value={data.password}
              onChange={(e) => setData({ ...data, password: e.target.value })}
            />
          </div>

          <button
            disabled={loading}
            className="w-full rounded-lg bg-indigo-600 py-2 text-sm font-semibold text-white hover:bg-indigo-700 transition active:scale-[.98]"
          >
            {loading ? "Creating..." : "Create Account"}
          </button>
        </form>

        <p className="mt-6 text-center text-xs text-slate-600">
          Already have an account?{" "}
          <a href="/login" className="text-indigo-600 font-medium hover:underline">
            Log in
          </a>
        </p>
      </div>
    </div>
  );
}
