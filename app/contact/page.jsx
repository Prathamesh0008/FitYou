"use client";

import { useState } from "react";

export default function ContactPage() {
  const [status, setStatus] = useState("idle");

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");

    setTimeout(() => {
      setStatus("sent");
      setTimeout(() => setStatus("idle"), 2500);
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-[#F7FAFF] text-[#0D4F8B] font-laila pb-20">
      
      {/* PAGE HEADER */}
      <section className="mx-auto max-w-6xl px-4 pt-12 pb-6">
        <h1 className="text-3xl md:text-4xl font-bold text-[#0D4F8B]">
          Contact the Fityou team
        </h1>
        <p className="mt-3 max-w-2xl text-sm md:text-base text-[#375C7A]">
          Questions about eligibility, routines, or how Fityou works alongside 
          professional care? Our team responds within 1–2 working days.
        </p>
      </section>

      {/* MAIN GRID */}
      <section className="mx-auto max-w-6xl px-4 grid gap-10 md:grid-cols-[1.2fr,0.8fr] items-start">

        {/* FORM CARD */}
        <form
          onSubmit={handleSubmit}
          className="rounded-3xl border border-[#D3E1F4] bg-white p-8 shadow-sm"
        >
          {/* NAME + EMAIL */}
          <div className="grid gap-5 md:grid-cols-2">
            <div>
              <label className="block text-xs font-semibold text-[#0D4F8B]">
                Name
              </label>
              <input
                type="text"
                required
                className="
                  mt-1 w-full rounded-xl border border-[#D3E1F4] bg-[#F8FAFF]
                  px-3 py-2 text-xs text-[#0D4F8B] outline-none
                  focus:border-[#3A86FF]
                "
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#0D4F8B]">
                Email
              </label>
              <input
                type="email"
                required
                className="
                  mt-1 w-full rounded-xl border border-[#D3E1F4] bg-[#F8FAFF]
                  px-3 py-2 text-xs text-[#0D4F8B] outline-none
                  focus:border-[#3A86FF]
                "
              />
            </div>
          </div>

          {/* SUBJECT */}
          <div className="mt-5">
            <label className="block text-xs font-semibold text-[#0D4F8B]">
              What do you want to talk about?
            </label>
            <select
              className="
                mt-1 w-full rounded-xl border border-[#D3E1F4] bg-[#F8FAFF] 
                px-3 py-2 text-xs text-[#0D4F8B] outline-none
                focus:border-[#3A86FF]
              "
              defaultValue="general"
            >
              <option value="general">General question</option>
              <option value="eligibility">Eligibility or safety</option>
              <option value="billing">Billing or plan change</option>
            </select>
          </div>

          {/* MESSAGE */}
          <div className="mt-5">
            <label className="block text-xs font-semibold text-[#0D4F8B]">
              Message
            </label>
            <textarea
              required
              rows={5}
              className="
                mt-1 w-full rounded-xl border border-[#D3E1F4] bg-[#F8FAFF]
                px-3 py-2 text-xs text-[#0D4F8B] outline-none
                focus:border-[#3A86FF]
              "
              placeholder="Share details you're comfortable with. Avoid sensitive medical info."
            />
          </div>

          {/* SEND BUTTON */}
          <button
            type="submit"
            disabled={status !== "idle"}
            className="
              mt-6 inline-flex items-center justify-center rounded-full 
              bg-[#0D4F8B] px-6 py-2 text-xs font-semibold text-white 
              hover:bg-[#0A3E70] transition disabled:opacity-60
            "
          >
            {status === "idle" && "Send message"}
            {status === "sending" && "Sending…"}
            {status === "sent" && "Message sent ✔"}
          </button>

          <p className="mt-4 text-[11px] text-[#60738C]">
            Fityou is not an emergency service. For urgent medical or mental
            health needs, contact your local emergency services immediately.
          </p>
        </form>

        {/* RIGHT SIDE INFO CARDS */}
        <div className="space-y-5 text-sm">

          <div className="rounded-3xl border border-[#D3E1F4] bg-[#F8FAFF] p-6 shadow-sm">
            <h2 className="text-sm font-semibold text-[#0D4F8B]">
              Response times
            </h2>
            <p className="mt-2 text-xs text-[#375C7A]">
              We normally reply within 1–2 business days.
            </p>
          </div>

          <div className="rounded-3xl border border-[#D3E1F4] bg-[#F8FAFF] p-6 shadow-sm">
            <h2 className="text-sm font-semibold text-[#0D4F8B]">
              What we can help with
            </h2>

            <ul className="mt-2 space-y-2 text-xs text-[#375C7A]">
              <li>✓ How the programme works</li>
              <li>✓ Eligibility & safety boundaries</li>
              <li>✓ Billing and plan changes</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
