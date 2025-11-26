"use client";

import { useState } from "react";

export default function ContactPage() {
  const [status, setStatus] = useState("idle");


  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");

    // fake delay only for UI feel
    setTimeout(() => {
      setStatus("sent");
      setTimeout(() => setStatus("idle"), 2500);
    }, 1200);
  };

  return (
    <div className="min-h-screen transition-colors">
      <section className="mx-auto max-w-6xl px-4 pt-12 pb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-light-primary dark:text-slate-50">
          Contact the Fityou team
        </h1>
        <p className="mt-3 max-w-2xl text-sm md:text-base text-light-primary dark:text-slate-300">
          Questions about eligibility, structure, or how Fityou works next to
          professional care? Reach out we’ll usually respond within 1–2
          working days.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-20 grid gap-8 md:grid-cols-[1.2fr,0.8fr] items-start">
        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="rounded-3xl border border-slate-200 bg-white p-6 text-sm shadow-sm dark:border-slate-800 dark:bg-slate-900"
        >
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label className="block text-xs font-medium text-slate-600 dark:text-slate-300">
                Name
              </label>
              <input
                type="text"
                required
                className="mt-1 w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-xs text-slate-900 outline-none focus:border-sky-500 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-50"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-slate-600 dark:text-slate-300">
                Email
              </label>
              <input
                type="email"
                required
                className="mt-1 w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-xs text-slate-900 outline-none focus:border-sky-500 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-50"
              />
            </div>
          </div>

          <div className="mt-4">
            <label className="block text-xs font-medium text-slate-600 dark:text-slate-300">
              What do you want to talk about?
            </label>
            <select
              className="mt-1 w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-xs text-slate-900 outline-none focus:border-sky-500 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-50"
              defaultValue="general"
            >
              <option value="general">General question</option>
              <option value="eligibility">Eligibility or safety</option>
              <option value="billing">Billing or plan change</option>
            </select>
          </div>

          <div className="mt-4">
            <label className="block text-xs font-medium text-slate-600 dark:text-slate-300">
              Message
            </label>
            <textarea
              required
              rows={5}
              className="mt-1 w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-xs text-slate-900 outline-none focus:border-sky-500 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-50"
              placeholder="Share as much detail as you’re comfortable with. Avoid sharing sensitive medical data."
            />
          </div>

          <button
            type="submit"
            disabled={status !== "idle"}
            className="mt-5 inline-flex items-center justify-center rounded-full bg-sky-600 px-6 py-2 text-xs font-semibold text-white hover:bg-sky-700 disabled:cursor-not-allowed disabled:opacity-75 dark:bg-sky-500 dark:hover:bg-sky-400"
          >
            {status === "idle" && "Send message"}
            {status === "sending" && "Sending…"}
            {status === "sent" && "Message sent ✔"}
          </button>

          <p className="mt-3 text-[11px] text-slate-500 dark:text-slate-400">
            Fityou is not an emergency service. If you are facing an urgent
            health or mental health situation, please contact local emergency or
            crisis services immediately.
          </p>
        </form>

        {/* Info card */}
        <div className="space-y-4 text-sm">
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5 shadow-sm dark:border-slate-800 dark:bg-slate-800">
            <h2 className="text-sm font-semibold  dark:text-slate-50">
              Response times
            </h2>
            <p className="mt-2 text-xs text-slate-600 dark:text-slate-300">
              We usually respond within 1–2 business days, excluding weekends
              and major holidays.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5 shadow-sm dark:border-slate-800 dark:bg-slate-800">
            <h2 className="text-sm font-semibold  dark:text-slate-50">
              What we can help with
            </h2>
            <ul className="mt-2 space-y-1 text-xs text-slate-600 dark:text-slate-300">
              <li>• Clarifying how the structure works</li>
              <li>• Questions about eligibility & boundaries</li>
              <li>• Billing and plan changes</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
