//FitYou\components\recommendations\IncludedBox.jsx
"use client";

import {
  FaPills,
  FaUtensils,
  FaDumbbell,
  FaUserMd,
} from "react-icons/fa";

import { useRouter } from "next/navigation";

export default function IncludedBox({ type }) {
  const router = useRouter();

  // 🔍 Detect tablet choice
  const isTablet = type?.toLowerCase().includes("tablet");

  return (
    <section className="w-full bg-[#E7F3FA] pb-12">
      <div className="max-w-6xl mx-auto px-6">

        <div className="p-6 md:p-10 flex flex-col md:flex-row gap-10">

          {/* LEFT IMAGE */}
          <div className="flex-1 flex justify-center items-start">
            <img
              src={
                isTablet
                  ? "/recommendations/tablet.jpg"
                  : "/recommendations/injection1.jpg"
              }
              className="w-full max-w-[520px] md:max-w-[560px] rounded-xl object-contain"
              alt="FitYou Product"
            />
          </div>

          {/* RIGHT SECTION */}
          <div className="w-full md:w-[420px]">

            <h2 className="text-[22px] font-semibold text-[#0D4F8B] mb-6">
              Included in your box:
            </h2>

            <div className="space-y-4">

              {/* ---------------------------------------
                 🔵 TABLET VERSION
              ---------------------------------------- */}
              {isTablet && (
                <div className="p-4 bg-[#F6FBFF] rounded-lg border border-[#D6E4F2]">
                  <div className="flex gap-3">
                    <FaPills className="text-[#0D4F8B] text-[22px]" />
                    <div>
                      <p className="font-semibold text-sm text-[#0D4F8B]">
                        Semaglutide Tablets (Rybelsus)
                      </p>
                      <ul className="list-disc pl-5 text-[13px] text-[#375C7A] mt-2 space-y-1">
                        <li>30 tablets (1 month)</li>
                        <li>3mg starting dose</li>
                        <li>Take once daily on empty stomach</li>
                        <li>Clinically proven GLP-1 therapy</li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              {/* ---------------------------------------
                 🟣 INJECTION VERSION
              ---------------------------------------- */}
              {!isTablet && (
                <div className="p-4 bg-[#F6FBFF] rounded-lg border border-[#D6E4F2]">
                  <div className="flex gap-3">
                    <FaPills className="text-[#0D4F8B] text-[22px]" />
                    <div>
                      <p className="font-semibold text-sm text-[#0D4F8B]">
                        Semaglutide Weekly Injections
                      </p>
                      <ul className="list-disc pl-5 text-[13px] text-[#375C7A] mt-2 space-y-1">
                        <li>4 prefilled pens</li>
                        <li>Once–weekly dosage</li>
                        <li>Doctor-guided dose escalation</li>
                        <li>Premium medical-grade pens</li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              {/* SAME FOR BOTH OPTIONS */}
              <div className="p-4 bg-[#F6FBFF] rounded-lg border border-[#D6E4F2]">
                <div className="flex gap-3">
                  <FaUtensils className="text-[#0D4F8B] text-[20px]" />
                  <div>
                    <p className="font-semibold text-sm text-[#0D4F8B]">Meal plan</p>
                    <p className="text-[13px] text-[#375C7A]">7-day personalised plan</p>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-[#F6FBFF] rounded-lg border border-[#D6E4F2]">
                <div className="flex gap-3">
                  <FaDumbbell className="text-[#0D4F8B] text-[20px]" />
                  <div>
                    <p className="font-semibold text-sm text-[#0D4F8B]">Fitness plan</p>
                    <p className="text-[13px] text-[#375C7A]">Routine for 3 days/week</p>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-[#F6FBFF] rounded-lg border border-[#D6E4F2]">
                <div className="flex gap-3">
                  <FaUserMd className="text-[#0D4F8B] text-[20px]" />
                  <div>
                    <p className="font-semibold text-sm text-[#0D4F8B]">
                      Exclusive membership benefits
                    </p>
                    <ul className="list-disc pl-5 text-[13px] text-[#375C7A] mt-2 space-y-1">
                      <li>Access to doctors</li>
                      <li>Nutritionist guidance</li>
                      <li>Exclusive discounts</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* PRICE BOX */}
              <div className="p-5 bg-[#F6FBFF] rounded-lg border border-[#D6E4F2]">
                <h3 className="text-lg font-semibold text-[#0D4F8B]">
                  {isTablet ? "₹11,250 per month" : "₹13,125 per month"}
                </h3>

                <div className="text-[13px] text-[#375C7A] mt-3 space-y-1">
                  {isTablet ? (
                    <>
                      <p className="flex justify-between"><span>Treatment</span><span>₹7,500</span></p>
                      <p className="flex justify-between"><span>Consultation</span><span>₹1,000</span></p>
                      <p className="flex justify-between"><span>Membership</span><span>₹2,750</span></p>
                    </>
                  ) : (
                    <>
                      <p className="flex justify-between"><span>Treatment</span><span>₹8,916</span></p>
                      <p className="flex justify-between"><span>Consultation</span><span>₹1,000</span></p>
                      <p className="flex justify-between"><span>Membership</span><span>₹3,209</span></p>
                    </>
                  )}
                </div>

                <button
                  onClick={() => router.push("/order")}
                  className="w-full mt-5 bg-[#A3C7D9] hover:bg-[#8EBAD1] text-[#0D4F8B] font-semibold py-3 rounded-lg text-sm"
                >
                  Order now
                </button>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}