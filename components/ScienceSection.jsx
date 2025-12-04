"use client";

import Image from "next/image";
import Link from "next/link";
import { Syringe, Dumbbell, Stethoscope } from "lucide-react";


export default function ScienceSection() {
  return (
    <section className="bg-[#F2F7FA] py-10">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT COLUMN */}
        {/* LEFT COLUMN */}
<div className="flex flex-col gap-4">

  {/* TOP IMAGES ROW */}
  <div className="hidden md:flex gap-2">
    <div className="w-1/2">
      <Image
        src="/guide/newlady.jpg"
        alt="FitYou User"
        width={600}
        height={400}
        className="w-full h-auto object-contain rounded-xl"
      />
    </div>

    <div className="w-1/2">
      <Image
        src="/guide/doctorbox.jpg"
        alt="Doctor"
        width={600}
        height={400}
        className="w-full h-auto object-contain rounded-xl"
      />
    </div>
  </div>

  {/* MOBILE IMAGE */}
  <div className="md:hidden w-full">
    <Image
      src="/guide/newlady.jpg"
      alt="FitYou mobile"
      width={600}
      height={400}
      className="w-full h-auto object-contain rounded-xl"
    />
  </div>

  {/* GRAPH — FIXED SIZE, DESKTOP ONLY */}
  <div className="hidden md:flex justify-center">
  <div className="w-full h-[350px] bg-white rounded-3xl ">
    <Image
      src="/sciencesection/graph-section.png"
      alt="Weight loss graph"
      width={500}
      height={250}
      className="w-full h-full object-fill rounded-xl"
    />
  </div>
</div>




</div>

        {/* RIGHT COLUMN */}
        <div className="flex flex-col justify-center">

          <h2 className="text-[42px] md:text-[64px] font-semibold leading-tight text-[#0D4F8B]">
            Let science help<br />
            you lose weight,<br />
            and keep it off
          </h2>

          <p className="mt-4 text-[#375C7A] text-lg leading-relaxed max-w-md">
            Did you know you can lose up to <strong>21% body weight</strong> in 16 months,
            without feeling hungry, counting calories or going to the gym?
          </p>

          <p className="mt-6 text-lg font-semibold text-[#0D4F8B]">
            Our Simple, Smart & Science-Backed Plan:
          </p>

          <ul className="mt-4 space-y-4 text-[#375C7A] text-base leading-relaxed">
  <li className="flex items-start gap-3">
    <Syringe className="w-5 h-5 text-[#0D4F8B] mt-1" />
    Take one injection every week to reduce your food cravings
  </li>

  <li className="flex items-start gap-3">
    <Dumbbell className="w-5 h-5 text-[#0D4F8B] mt-1" />
    Easy-to-follow exercise plans to help you create a healthy lifestyle
  </li>

  <li className="flex items-start gap-3">
    <Stethoscope className="w-5 h-5 text-[#0D4F8B] mt-1" />
    Support from our partner weight-loss specialists and nutritionists
  </li>
</ul>


          <Link
            href="/program"
            className="mt-10 bg-[#8CB7C6] hover:bg-[#7AA5B6] text-white 
            font-semibold text-lg px-10 py-3 rounded-xl transition w-full md:w-fit text-center"
          >
            View our programme
          </Link>

        </div>
      </div>
    </section>
  );
}
