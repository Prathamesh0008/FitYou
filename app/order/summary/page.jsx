"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function OrderSummary() {
  const router = useRouter();
  const [address, setAddress] = useState(null);

  useEffect(() => {
    window.scrollTo({ top: 0 });

    if (typeof window !== "undefined") {
      const saved = window.localStorage.getItem("fityou-address");
      if (saved) {
        try {
          setAddress(JSON.parse(saved));
        } catch {
          // ignore parse error, keep fallback text
        }
      }
    }
  }, []);

  const fullName = address
    ? `${address.name || ""} ${address.surname || ""}`.trim()
    : "manoj chaubey";

  const lines = address
    ? [
        address.flat,
        address.area,
        address.city,
        `${address.state} - ${address.pincode}`,
      ].filter(Boolean)
    : ["vashi", "gandhi nagar", "Akola", "Maharashtra - 444002"];

  return (
    <section className="min-h-screen bg-white pb-20">
      {/* TOP BLUE HEADER */}
      <div className="w-full bg-[#F0F7FB] py-6 border-b border-[#E4EEF5]">
        <div className="max-w-md mx-auto px-6">
          <button
            onClick={() => router.back()}
            className="text-sm text-[#0D4F8B] mb-3 flex items-center hover:opacity-70 transition"
          >
            ← Step 4 of 4
          </button>

          <h1 className="text-2xl font-semibold text-[#0D4F8B]">
            Order summary
          </h1>
        </div>
      </div>

      {/* MAIN CONTENT – COMPACT */}
      <div className="max-w-md mx-auto px-6 pt-12">
        {/* PROGRAM SUMMARY */}
        <div className="mb-8">
          <div className="flex justify-between items-start">
            <h3 className="text-[16px] font-semibold text-[#0D4F8B] leading-tight">
              The weight loss programme that works
            </h3>
            <p className="font-semibold text-[#0D4F8B]">₹13,125</p>
          </div>

          <ul className="list-disc pl-6 text-[#375C7A] leading-[1.8] mt-3 text-[14px]">
            <li>30 tablets</li>
            <li>3mg starting dose</li>
            <li>GLP-1 medication</li>
            <li>Repeated every month</li>
            <li>Cancel at any time</li>
          </ul>

          <p className="text-[#375C7A] mt-3 text-[14px]">
            Delivery in 3–4 days — <b>Included</b>
          </p>

          <hr className="my-6 border-[#E5EAF1]" />

          <div className="flex justify-between text-[17px] font-semibold text-[#0D4F8B]">
            <span>Total per month</span>
            <span>₹13,125</span>
          </div>
        </div>

        {/* DISCOUNT INPUT */}
        <div className="flex items-center gap-2 mb-10">
          <input
            placeholder="Discount code"
            className="flex-1 border border-[#D6E4F2] rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#A3C7D9]"
          />
          <button className="px-6 py-3 bg-[#E5EEF4] text-[#375C7A] rounded-lg font-semibold text-sm">
            Apply
          </button>
        </div>

        {/* ADDRESS BLOCK USING SAVED DATA */}
        <div className="mb-10">
          <h3 className="font-semibold text-[#0D4F8B] mb-2 text-[15px]">
            Delivery address
          </h3>

          <div className="text-[#375C7A] leading-[1.7] text-[14px] space-y-1">
            <p>{fullName}</p>
            {lines.map((line, idx) => (
              <p key={idx}>{line}</p>
            ))}
          </div>

          <button
            className="text-sm text-[#0D4F8B] underline mt-2"
            onClick={() => router.push("/order/address")}
          >
            Edit
          </button>
        </div>

        <hr className="my-6 border-[#E5EAF1]" />

        {/* CHECKBOXES */}
        <div className="space-y-4 mb-10 text-[#375C7A] text-[14px]">
          <label className="flex items-start gap-3 leading-[1.5]">
            <input
              type="checkbox"
              className="scale-110 accent-[#0D4F8B] mt-1"
            />
            Yes, send me promotional text messages with discounts and news.
          </label>

          <label className="flex items-start gap-3 leading-[1.5]">
            <input
              type="checkbox"
              className="scale-110 accent-[#0D4F8B] mt-1"
            />
            Yes, send me promotional emails with discounts and news.
          </label>

          <label className="flex items-start gap-3 leading-[1.5]">
            <input
              type="checkbox"
              className="scale-110 accent-[#0D4F8B] mt-1"
            />
            I have read and accept the{" "}
            <span className="underline text-[#0D4F8B]">
              Terms & Conditions, Privacy Policy
            </span>
            .
          </label>
        </div>

        {/* CONTINUE BUTTON */}
        <button
onClick={async () => {
  const address = JSON.parse(localStorage.getItem("fityou-address") || "{}");

  const params = new URLSearchParams(window.location.search);
  const quizRaw = params.get("data");
 const quiz = JSON.parse(localStorage.getItem("fityou-quiz") || "{}");

const productType =
  quiz?.injectionPreference === "Yes"
    ? "injection"
    : quiz?.injectionPreference === "No, I prefer a tablet"
    ? "tablet"
    : "unknown";


 const payload = {
  productType,
  address,
  imageUploaded: true,
  confirmations: { confirm1: true, confirm2: true },
  quizData: quiz,
};


  console.log("📦 Sending Payload:", payload);

  try {
    const res = await fetch("/api/order/create", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",   // 🔥 REQUIRED (VERY IMPORTANT)
      body: JSON.stringify(payload),
    });

    const data = await res.json();
    console.log("📥 API Response:", data);
  } catch (err) {
    console.error("❌ Failed to send order:", err);
  }

  router.push("/order/payment");
}}



          className="w-full bg-[#A3C7D9] text-[#0D4F8B] font-semibold py-3 rounded-lg hover:bg-[#8EBAD1]"
        >
          Continue to payment
        </button>
      </div>
    </section>
  );
}
