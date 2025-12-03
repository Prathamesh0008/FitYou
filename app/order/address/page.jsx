
// FitYou/app/order/address/page.jsx
"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function DeliveryAddress() {
  const router = useRouter();
  const [form, setForm] = useState({
    name: "",
    surname: "",
    pincode: "",
    flat: "",
    area: "",
    landmark: "",
    city: "",
    state: "",
    email: "",
  });

  function update(key, value) {
    setForm({ ...form, [key]: value });
  }

  const inputClass =
    "w-full border border-[#D6E4F2] rounded-lg px-4 py-3 text-[15px] " +
    "focus:outline-none focus:ring-2 focus:ring-[#A3C7D9] bg-white";

  return (
    <section className="min-h-screen bg-white pt-28 pb-20">
      <div className="max-w-xl mx-auto px-6">
        {/* Step indicator */}
        <button
        onClick={() => router.back()}
        className="text-sm text-[#0D4F8B] mb-3 flex items-center hover:opacity-70 transition"
        >
        &larr; Step 1 of 4
        </button>


        {/* Heading */}
        <h1 className="text-3xl font-semibold text-[#0D4F8B] mb-8">
          Delivery address
        </h1>

        {/* Form */}
        <div className="space-y-5">
          {/* Name + Surname */}
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              className={inputClass}
              placeholder="Name*"
              value={form.name}
              onChange={(e) => update("name", e.target.value)}
            />

            <input
              className={inputClass}
              placeholder="Surname*"
              value={form.surname}
              onChange={(e) => update("surname", e.target.value)}
            />
          </div>

          <input
            className={inputClass}
            placeholder="Pincode*"
            value={form.pincode}
            onChange={(e) => update("pincode", e.target.value)}
          />

          <input
            className={inputClass}
            placeholder="Flat, house no., building, apartment*"
            value={form.flat}
            onChange={(e) => update("flat", e.target.value)}
          />

          <input
            className={inputClass}
            placeholder="Area, street, sector, village*"
            value={form.area}
            onChange={(e) => update("area", e.target.value)}
          />

          <input
            className={inputClass}
            placeholder="Landmark (optional)"
            value={form.landmark}
            onChange={(e) => update("landmark", e.target.value)}
          />

          <input
            className={inputClass}
            placeholder="City/town*"
            value={form.city}
            onChange={(e) => update("city", e.target.value)}
          />

          <select
            className={inputClass}
            value={form.state}
            onChange={(e) => update("state", e.target.value)}
          >
            <option value="">State*</option>
            <option>Maharashtra</option>
            <option>Karnataka</option>
            <option>Tamil Nadu</option>
            <option>Delhi</option>
          </select>

          <input
            className={inputClass}
            placeholder="Email*"
            value={form.email}
            onChange={(e) => update("email", e.target.value)}
          />

          <div className="flex items-center gap-2 mt-1">
            <input type="checkbox" className="scale-110" />
            <p className="text-sm text-[#375C7A]">
              This is also my billing address
            </p>
          </div>
        </div>

        {/* Continue button */}
        <button
          onClick={() => router.push("/order/image")}
          className="w-full mt-10 bg-[#A3C7D9] hover:bg-[#8EBAD1] text-[#0D4F8B] font-semibold py-3 rounded-lg"
        >
          Continue
        </button>
      </div>
    </section>
  );
}
