"use client";

import { useAuth } from "@/components/AuthProvider";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Link from "next/link";

export default function DashboardPage() {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (loading) return;
    if (!user) router.replace("/login");
  }, [loading, user, router]);

  if (loading) {
    return (
      <main className="mx-auto max-w-4xl px-4 py-10">
        <p className="text-sm text-slate-600">Loading your dashboard...</p>
      </main>
    );
  }

  if (!user) return null;

  return (
    <main className="bg-gradient-to-b from-slate-50 via-white to-slate-50 min-h-[80vh]">
      <section className="mx-auto max-w-4xl px-4 py-10">
        <h1 className="text-2xl font-bold text-slate-900 md:text-3xl">
          Hi {user?.name || "there"},
        </h1>
        <p className="mt-1 text-sm text-slate-600">
          This is your Fityou dashboard. Over time, this space will show your
          eligibility history and key routines.
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <div className="rounded-3xl border border-slate-100 bg-white p-5 shadow-sm shadow-slate-100">
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-sky-600">
              Account
            </p>
            <p className="mt-2 text-sm font-semibold text-slate-900">
              {user.name}
            </p>
            <p className="mt-1 text-xs text-slate-500">{user.email}</p>
            <p className="mt-3 text-[11px] text-slate-500">
              You&apos;re logged in and ready to continue.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-100 bg-white p-5 shadow-sm shadow-slate-100 md:col-span-2">
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">
              Eligibility
            </p>
            <p className="mt-2 text-sm text-slate-700">
              Your latest eligibility result will appear here once we connect it
              to your quiz history.
            </p>
            <Link
              href="/quiz"
              className="mt-4 inline-flex items-center rounded-full bg-sky-600 px-4 py-1.5 text-xs font-semibold text-white hover:bg-sky-700"
            >
              Take or retake the quiz →
            </Link>
          </div>
        </div>

        <div className="mt-8 rounded-3xl border border-slate-100 bg-white p-5 shadow-sm shadow-slate-100">
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">
            Coming soon
          </p>
          <p className="mt-2 text-sm text-slate-700">
            We’ll be adding progress views here: weekly completion, focus areas
            you’ve chosen, and guidance based on your quiz responses — all in a
            simple, non-overwhelming layout.
          </p>
        </div>
      </section>
    </main>
  );
}
