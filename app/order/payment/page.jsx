"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function PaymentPage() {
  const router = useRouter();
  const [showExitPopup, setShowExitPopup] = useState(false);

  return (
    <section className="min-h-screen bg-[#F7FBFF] pt-28 pb-20 relative">

      <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row gap-10">
        
        {/* LEFT – PRICE SUMMARY */}
        <div className="md:w-1/3 bg-white p-6 rounded-xl border border-[#D6E4F2] shadow-sm">
          <h2 className="text-xl font-semibold text-[#0D4F8B] mb-4">
            Price Summary
          </h2>

          <p className="text-3xl font-bold text-[#0D4F8B] mb-4">₹13,125</p>

          <p className="text-[#375C7A] text-[15px]">Using as <b>+91 91566 07486</b></p>

          <p className="text-[#0D4F8B] underline text-sm mt-3 cursor-pointer">
            Offers available
          </p>

          <p className="text-xs text-[#9BB3C7] mt-6">
            Secured by Razorpay
          </p>
        </div>

        {/* RIGHT – PAYMENT OPTIONS */}
        <div className="md:w-2/3 bg-white p-6 rounded-xl border border-[#D6E4F2] shadow-sm relative">

          {/* ❌ CLOSE BUTTON */}
          <button
            onClick={() => setShowExitPopup(true)}
            className="absolute top-4 right-4 text-xl text-[#375C7A] hover:opacity-70"
          >
            ✕
          </button>

          <h2 className="text-xl font-semibold text-[#0D4F8B] mb-4">
            Payment Options
          </h2>

          {/* CUSTOM QR IMAGE YOU PROVIDED */}
          <div className="border border-[#E2E8F0] rounded-xl p-6 mb-8">
            <p className="font-semibold text-[#0D4F8B] mb-4 text-center">
              Scan to Pay (UPI)
            </p>

            <img
              src="/recommendations/payment.png"
              alt="UPI Payment"
              className="w-full max-w-[260px] mx-auto rounded-lg shadow"
            />

            <p className="text-center text-sm text-[#375C7A] mt-3">
              Scan using Google Pay, PhonePe, Paytm, BHIM
            </p>
          </div>

          {/* Recommended Payment Button */}
          <button
            className="w-full bg-[#A3C7D9] hover:bg-[#8EBAD1] 
            text-[#0D4F8B] font-semibold py-3 rounded-lg mb-4"
          >
            Pay using UPI
          </button>

        </div>
      </div>

      {/* EXIT POPUP */}
      {showExitPopup && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center px-4 z-50">
          <div className="bg-white p-8 rounded-xl max-w-md w-full text-center shadow-xl">

            <img
              src="/recommendations/exit.png"
              className="w-28 mx-auto mb-4"
              alt="Exit Illustration"
            />

            <h3 className="text-xl font-semibold text-[#0D4F8B] mb-2">
              Are you sure you want to exit?
            </h3>

            <p className="text-[#375C7A] mb-6">
              You will be taken back to FitYou website.
            </p>

            <button
              onClick={() => setShowExitPopup(false)}
              className="w-full border border-[#0D4F8B] py-3 rounded-lg 
              text-[#0D4F8B] font-semibold mb-3"
            >
              Continue to payment
            </button>

            <button
              onClick={() => router.push('/order/summary')}
              className="w-full bg-black text-white py-3 rounded-lg font-semibold"
            >
              Yes, exit
            </button>

          </div>
        </div>
      )}

    </section>
  );
}
