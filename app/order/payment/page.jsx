"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function PaymentPage() {
  const router = useRouter();

  const [phone, setPhone] = useState("");
  const [showExitPopup, setShowExitPopup] = useState(false);

  useEffect(() => {
    const savedPhone = localStorage.getItem("fityou_phone");
    if (savedPhone) setPhone(savedPhone);
  }, []);

  return (
    // 🔥 OVERLAY (popup background)
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center p-4">

      {/* 🔥 POPUP CARD */}
      <section
        className="
          bg-[#F7FBFF]
          w-full 
          max-w-4xl 
          rounded-2xl
          shadow-2xl 
          border border-[#CCE0EC]
          p-6 
          relative
          max-h-[90vh]
          overflow-y-auto
        "
      >

        {/* ---------------- MAIN WRAPPER ---------------- */}
        <div className="w-full flex flex-col md:flex-row gap-6 md:gap-10">

          {/* ---------------- LEFT BLUE PANEL ---------------- */}
          <div
            className="
              md:w-1/3 
              bg-cover bg-center bg-no-repeat 
              rounded-2xl 
              shadow-sm 
              border border-[#CCE0EC]
              relative overflow-hidden
              min-h-[360px]
            "
            style={{
              backgroundImage: "url('/recommendations/paymentcart.jpg')",
            }}
          >
            <div className="absolute inset-0 bg-[#A5CAD7]/70" />

            <div className="relative p-6 text-[#063363]">
              <h2 className="text-xl font-semibold mb-3">Price Summary</h2>

              <p className="text-4xl font-bold mb-4">₹13,125</p>

              {/* Phone Number */}
              <div className="flex items-center gap-2 bg-white/80 px-3 py-2 rounded-lg border border-[#D6E4F2] text-sm mb-3">
                <span>📱</span>
                <span className="font-medium">Using as +91 {phone || "--------"}</span>
              </div>

              <button className="bg-white/80 px-3 py-2 rounded-lg border border-[#D6E4F2] text-sm w-full text-left">
                🎁 Offers on UPI, Card and Wallet
              </button>

              <p className="text-[11px] opacity-70 mt-10">Secured by Razorpay</p>
            </div>
          </div>

          {/* ---------------- RIGHT WHITE PANEL ---------------- */}
          <div
            className="
              md:w-2/3 
              bg-white 
              rounded-2xl 
              border border-[#D6E4F2] 
              shadow-sm 
              p-6 
              relative
            "
          >
            {/* Close Button */}
            <button
              onClick={() => setShowExitPopup(true)}
              className="absolute top-4 right-4 text-xl text-[#375C7A] hover:opacity-60"
            >
              ✕
            </button>

            <h2 className="text-xl font-semibold text-[#063363] mb-6">
              Payment Options
            </h2>

            {/* UPI QR BLOCK */}
            <div className="border border-[#E2E8F0] rounded-xl p-6 mb-6">
              <p className="font-semibold text-[#063363] mb-4">Scan & Pay (UPI)</p>

              <div className="flex flex-col md:flex-row items-center gap-6">
                <img
                  src="/recommendations/payment.png"
                  alt="UPI QR"
                  className="w-40 h-40 rounded-lg shadow"
                />

                <div className="flex flex-col items-center md:items-start">
                  <p className="text-xs text-[#375C7A] mb-2">Scan using any UPI app</p>

                  <div className="flex gap-2 mb-4">
                    <img src="/upi/googlepay.png" className="w-8" />
                    <img src="/upi/phonepe.png" className="w-8" />
                    <img src="/upi/paytm.png" className="w-8" />
                  </div>

                  <button className="bg-[#E6F2FF] text-[#063363] text-xs px-3 py-1 rounded-full border border-[#D0E6FF]">
                    3 Offers
                  </button>
                </div>
              </div>
            </div>

            {/* LIST */}
            <div className="space-y-4">
              <button className="w-full flex items-center justify-between bg-[#F4FAFF] border border-[#D6E4F2] px-4 py-3 rounded-lg text-sm">
                <span className="font-medium text-[#063363]">UPI</span>
                <span>›</span>
              </button>

              <button className="w-full flex items-center justify-between bg-[#F4FAFF] border border-[#D6E4F2] px-4 py-3 rounded-lg text-sm">
                <span className="font-medium text-[#063363]">Cards</span>
                <span>›</span>
              </button>

              <button className="w-full flex items-center justify-between bg-[#F4FAFF] border border-[#D6E4F2] px-4 py-3 rounded-lg text-sm">
                <span className="font-medium text-[#063363]">Netbanking</span>
                <span>›</span>
              </button>

              <button className="w-full flex items-center justify-between bg-[#F4FAFF] border border-[#D6E4F2] px-4 py-3 rounded-lg text-sm">
                <span className="font-medium text-[#063363]">Wallet</span>
                <span>›</span>
              </button>
            </div>

            <button className="mt-6 w-full bg-[#E7F4FF] text-[#063363] font-semibold py-3 rounded-lg border border-[#CCE4F8]">
              Recommended — UPI (Google Pay)
            </button>
          </div>
        </div>

        {/* EXIT POPUP SAME AS BEFORE */}
        {showExitPopup && (
          <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 px-4">
            <div className="bg-white p-8 rounded-xl max-w-md w-full text-center shadow-xl">

              <img src="/recommendations/exit.png" className="w-28 mx-auto mb-4" />

              <h3 className="text-xl font-semibold text-[#063363] mb-2">
                Are you sure you want to exit?
              </h3>

              <p className="text-[#375C7A] mb-6">
                You will be taken back to FitYou website.
              </p>

              <button
                onClick={() => setShowExitPopup(false)}
                className="w-full border border-[#063363] py-3 rounded-lg text-[#063363] font-semibold mb-3"
              >
                Continue to payment
              </button>

              <button
                onClick={() => router.push('/recommendations')}
                className="w-full bg-black text-white py-3 rounded-lg font-semibold"
              >
                Yes, exit
              </button>

            </div>
          </div>
        )}

      </section>
    </div>
  );
}
