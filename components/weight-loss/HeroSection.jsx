// components/weight-loss/HeroSection.jsx

import React from "react";
import Image from "next/image";
import Link from "next/link";

// generic circular icon wrapper
function IconCircle({ children }) {
  return (
    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#c7e3f4] bg-[#f4fbff]">
      {children}
    </span>
  );
}

// syringe icon
function InjectionIcon() {
  return (
    <IconCircle>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#123c78"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M18 2l4 4" />
        <path d="M11 9l4 4" />
        <path d="M15 5l4 4" />
        <path d="M3 21l6-6" />
        <path d="M7 11l6-6 4 4-6 6H7v-4z" />
        <path d="M3 17l4 4" />
      </svg>
    </IconCircle>
  );
}

// apple icon
function MealIcon() {
  return (
    <IconCircle>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#123c78"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M16.5 4c-.5-1-1.5-1.7-2.6-1.9C12.6 1.9 11.3 2.2 10 3" />
        <path d="M12 6c-2.5-2.1-6.5-1.3-7.3 2.3-.5 2.1-.1 4.8 1.3 6.8.7 1 1.8 1.9 3.2 1.9 1.1 0 1.8-.4 2.8-.4s1.7.4 2.8.4c1.4 0 2.5-.9 3.2-1.9 1.4-2 1.8-4.7 1.3-6.8C18.7 4.7 14.7 3.9 12 6z" />
        <path d="M15.5 3c.3-.9 1-1.6 2-1.9" />
      </svg>
    </IconCircle>
  );
}

// dumbbell icon
function FitnessIcon() {
  return (
    <IconCircle>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#123c78"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M5 7v10" />
        <path d="M19 7v10" />
        <path d="M2 9v6" />
        <path d="M22 9v6" />
        <path d="M7 12h10" />
      </svg>
    </IconCircle>
  );
}

// medal / ribbon icon
function SubscriptionIcon() {
  return (
    <IconCircle>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#123c78"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="9" r="4" />
        <path d="M9.5 13.5L8 22l4-2 4 2-1.5-8.5" />
      </svg>
    </IconCircle>
  );
}

export default function HeroSection() {
  return (
    <section className="bg-[#f3fbff] py-16">
      <div className="mx-auto max-w-6xl px-4">
        {/* heading + subtitle */}
        <div className="max-w-3xl">
          <h1 className="text-[3rem] lg:text-[4rem] leading-[1.1]  text-[#123c78]">
            {/* Mobile / Tablet: single line */}
            <span className="block lg:hidden">
              The weight loss programme that works
            </span>

            {/* Desktop: EXACT 2 lines */}
            <span className="hidden lg:block">
              <span className="whitespace-nowrap">
                The weight loss programme that
              </span>
              <br />
              works
            </span>
          </h1>

          <p className="mt-4 text-[1.05rem] leading-relaxed text-[#234d80]">
            With a modern combination of medication and personalised support,
            your journey to long-lasting results with Fityou starts here.
          </p>
        </div>

        {/* main card */}
        <div className="mt-10 flex justify-center">
          <div className="w-full max-w-6xl rounded-lg bg-white shadow-[0_18px_45px_rgba(15,23,42,0.12)]">
<div className="grid gap-10 px-5 md:pr-10 pt-13 pb-10 md:grid-cols-[1.1fr_1.1fr]">
              <div className="flex items-start justify-start">
                <div className="relative w-full max-w-2xl -mt-4 pl-0 ml-0">
                  <Image
                    src="/images/fityou-kit.jpg"
                    alt="Fityou treatment kit"
                    width={1200}
                    height={800}
                    className="h-auto w-full rounded-md object-cover"
                  />
                </div>
              </div>

              {/* right: text + icons */}
              <div className="flex flex-col justify-center">
                <h2 className="text-[1.60rem] font-semibold text-[#123c78]">
                  What is included?
                </h2>

                {/* ↓↓↓ only this spacing line is changed ↓↓↓ */}
                <div className="mt-6 space-y-4 text-[1.03rem] text-[#144070]">
                  {/* injection */}
                  <div className="flex gap-4">
                    <div className="mt-1">
                      <InjectionIcon />
                    </div>
                    <div>
                      <p className="text-[1.12rem] font-semibold text-[#123c78]">
                        New generation weight loss injection
                      </p>
                      <ul className="mt-1 space-y-1 text-[0.99rem] leading-relaxed">
                        <li className="relative pl-4 before:absolute before:left-0 before:top-0.5 before:text-[#123c78] before:content-['•']">
                          1 month supply
                        </li>
                        <li className="relative pl-4 before:absolute before:left-0 before:top-0.5 before:text-[#123c78] before:content-['•']">
                          Reduces appetite
                        </li>
                        <li className="relative pl-4 before:absolute before:left-0 before:top-0.5 before:text-[#123c78] before:content-['•']">
                          Makes you feel full for longer
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* meal plan */}
                  <div className="flex gap-4">
                    <div className="mt-1">
                      <MealIcon />
                    </div>
                    <div>
                      <p className="text-[1.12rem] font-semibold text-[#123c78]">
                        Meal plan
                      </p>
                      <ul className="mt-1 space-y-1 text-[0.99rem] leading-relaxed">
                        <li className="relative pl-4 before:absolute before:left-0 before:top-0.5 before:text-[#123c78] before:content-['•']">
                          Personalised 7-day plan
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* fitness plan */}
                  <div className="flex gap-4">
                    <div className="mt-1">
                      <FitnessIcon />
                    </div>
                    <div>
                      <p className="text-[1.12rem] font-semibold text-[#123c78]">
                        Fitness plan
                      </p>
                      <ul className="mt-1 space-y-1 text-[0.99rem] leading-relaxed">
                        <li className="relative pl-4 before:absolute before:left-0 before:top-0.5 before:text-[#123c78] before:content-['•']">
                          3 days a week exercise plan
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* subscription */}
                  <div className="flex gap-4">
                    <div className="mt-1">
                      <SubscriptionIcon />
                    </div>
                    <div>
                      <p className="text-[1.12rem] font-semibold text-[#123c78]">
                        Exclusive subscription{" "}
                        <span className="underline">benefits</span>
                      </p>
                      <ul className="mt-1 space-y-1 text-[0.99rem] leading-relaxed">
                        <li className="relative pl-4 before:absolute before:left-0 before:top-0.5 before:text-[#123c78] before:content-['•']">
                          Access to doctors and nutritionists
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA button */}
           {/* CTA button */}
<div className="border-t border-[#e6f0f5] px-4 pb-8 pt-6 md:px-10 md:pb-10">
  <div className="flex justify-center">
    <Link href="/quiz" className="w-full md:max-w-md">
      <button
        type="button"
        className="
          w-full
          rounded-sm
          bg-[#8CC4D2]
          px-6 py-3.5
          text-[1.05rem] font-bold text-[#00468B]
          tracking-[0.01em]
          shadow-[0_8px_18px_rgba(0,0,0,0.08)]
          transition
          hover:bg-[#7BB6C3]
          active:translate-y-[1px]

          md:max-w-md
          md:bg-[#88b9c8]
          md:text-[#0b2650]
          md:font-semibold
          md:hover:bg-[#78a9b8]
        "
      >
        Check if you&apos;re eligible
      </button>
    </Link>
  </div>
</div>

          </div>
        </div>
      </div>
    </section>
  );
}