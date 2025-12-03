//FitYou\app\order\summary\page.jsx
"use client";

import { useRouter } from "next/navigation";

export default function OrderSummary() {
  const router = useRouter();

  return (
    <section className="min-h-screen bg-white pt-28 pb-20">
      <div className="max-w-2xl mx-auto px-6">

        {/* Back link */}
        <button
          onClick={() => router.back()}
          className="text-sm text-[#0D4F8B] mb-6 flex items-center hover:opacity-70 transition"
        >
          &larr; Step 4 of 4
        </button>

        {/* Heading */}
        <h1 className="text-3xl font-semibold text-[#0D4F8B] mb-10">
          Order summary
        </h1>

        {/* PROGRAM SUMMARY */}
        <div className="mb-8">
          <div className="flex justify-between">
            <h3 className="text-lg font-semibold text-[#0D4F8B]">
              The weight loss programme that works
            </h3>
            <p className="font-semibold text-[#0D4F8B]">₹13,125</p>
          </div>

          <ul className="list-disc pl-6 text-[#375C7A] leading-[1.9] mt-3">
            <li>30 tablets</li>
            <li>3mg starting dose</li>
            <li>GLP-1 medication</li>
            <li>Repeats every month</li>
            <li>Cancel anytime</li>
          </ul>

          <p className="text-[#375C7A] mt-3">Delivery in 3–4 days — <b>Included</b></p>

          <hr className="my-6 border-[#E5EAF1]" />

          <div className="flex justify-between text-lg font-semibold text-[#0D4F8B]">
            <span>Total per month</span>
            <span>₹13,125</span>
          </div>
        </div>

        {/* DISCOUNT CODE */}
        <div className="flex items-center gap-3 mb-10">
          <input
            placeholder="Discount code"
            className="flex-1 border border-[#D6E4F2] rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#A3C7D9]"
          />
          <button className="px-6 py-3 bg-[#E5EEF4] text-[#375C7A] rounded-lg font-semibold">
            Apply
          </button>
        </div>

        {/* ADDRESS BLOCK */}
        <div className="mb-10">
          <h3 className="font-semibold text-[#0D4F8B] mb-2">Delivery address</h3>

          <div className="text-[#375C7A] leading-[1.7] space-y-1">
            <p>manoj chaubey</p>
            <p>vashi</p>
            <p>gandhi nagar</p>
            <p>Akola</p>
            <p>Maharashtra - 444002</p>
          </div>

          <button className="text-sm text-[#0D4F8B] underline mt-2">
            Edit
          </button>
        </div>

        {/* CHECKBOXES */}
        <div className="space-y-4 mb-10 text-[#375C7A]">
          <label className="flex items-center gap-2">
            <input type="checkbox" className="scale-110" />
            Yes, send me promotional text messages.
          </label>

          <label className="flex items-center gap-2">
            <input type="checkbox" className="scale-110" />
            Yes, send me promotional emails.
          </label>

          <label className="flex items-center gap-2">
            <input type="checkbox" className="scale-110" />
            I accept the Terms & Conditions and Privacy Policy.
          </label>
        </div>

        {/* BUTTON */}
            <button
            onClick={() => router.push("/order/payment")}
            className="w-full bg-[#A3C7D9] text-[#0D4F8B] font-semibold py-3 rounded-lg hover:bg-[#8EBAD1]"
            >
            Continue to payment
            </button>

      </div>
    </section>
  );
}
