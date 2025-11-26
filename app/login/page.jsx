"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [data, setData] = useState({ email: "", password: "" });
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify(data),
    });

    const result = await res.json();
    setLoading(false);

    if (!res.ok) {
      alert(result.error || "Login failed");
      return;
    }

    router.push("/dashboard");
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 via-white to-slate-50 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-sm rounded-2xl bg-white shadow-lg border border-slate-100 p-8">
        <div className="text-center mb-6">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-600 text-white font-semibold">
            FY
          </div>
          <h1 className="mt-4 text-xl font-semibold text-slate-900">
            Welcome Back
          </h1>
          <p className="text-xs text-slate-500 mt-1">
            Log in to continue your Fityou journey
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-xs font-medium text-slate-600">Email</label>
            <input
              className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
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
              className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
              placeholder="••••••••"
              value={data.password}
              onChange={(e) => setData({ ...data, password: e.target.value })}
            />
          </div>

          <button
            disabled={loading}
            className="w-full rounded-lg bg-sky-600 py-2 text-sm font-semibold text-white hover:bg-sky-700 transition active:scale-[.98]"
          >
            {loading ? "Logging in..." : "Log in"}
          </button>
        </form>

        <p className="mt-6 text-center text-xs text-slate-600">
          Don’t have an account?{" "}
          <a href="/register" className="text-sky-600 font-medium hover:underline">
            Create one
          </a>
        </p>
      </div>
    </div>
  );
}
