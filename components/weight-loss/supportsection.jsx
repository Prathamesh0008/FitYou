// components/weight-loss/supportsection.jsx

import React from "react";
import Image from "next/image";

export default function SupportAndServicesSection() {
  return (
    <section className="bg-[#f3fbff] py-16">
      <div className="mx-auto max-w-6xl px-4">
        
        {/* Top heading */}
        <div className="max-w-5xl">
          <h2 className="text-[2.6rem] leading-snug text-[#123c78]">
            With Fityou, it&apos;s simple: access medication, resources, and
            expert support to achieve your goals.
          </h2>
        </div>

        {/* Subheading */}
        <p className="mt-10 text-[1.4rem] font-semibold text-[#123c78]">
          Support from a team of experts
        </p>

        {/* Experts row */}
        <div className="mt-8 -mx-4 md:mx-0">
          <div
            className="
              flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory px-4
              md:grid md:grid-cols-4 md:gap-10 md:overflow-visible md:snap-none
            "
          >
            {/* Card 1 */}
            <div className="snap-center flex-none w-full md:w-auto">
              <div className="relative mb-6 h-56 md:h-40 w-full overflow-hidden rounded-xl bg-[#b9d7e5]">
                <Image
                  src="/images/expert-doctor.jpg"
                  alt="Weight loss specialist"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-[1.2rem] font-semibold text-[#143d82]">
                Weight loss specialists
              </h3>
              <p className="mt-3 text-[0.98rem] leading-relaxed text-[#123456]">
                Specialist partner doctors experienced in weight management help
                ensure you receive safe, evidence-based care at every step.
              </p>
            </div>

            {/* Card 2 */}
            <div className="snap-center flex-none w-full md:w-auto">
              <div className="relative mb-6 h-56 md:h-40 w-full overflow-hidden rounded-xl bg-[#b9d7e5]">
                <Image
                  src="/images/expert-nutrition.jpg"
                  alt="Nutrition expert"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-[1.2rem] font-semibold text-[#143d82]">
                Nutritional advice
              </h3>
              <p className="mt-3 text-[0.98rem] leading-relaxed text-[#123456]">
                Nutrition partners provide practical tips and personalised meal
                guidance that fits into your lifestyle and preferences.
              </p>
            </div>

            {/* Card 3 */}
            <div className="snap-center flex-none w-full md:w-auto">
              <div className="relative mb-6 h-56 md:h-40 w-full overflow-hidden rounded-xl bg-[#b9d7e5]">
                <Image
                  src="/images/expert-coach.jpg"
                  alt="Health coach"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-[1.2rem] font-semibold text-[#143d82]">
                Health coaching
              </h3>
              <p className="mt-3 text-[0.98rem] leading-relaxed text-[#123456]">
                Experienced health coaches focus on motivation, accountability,
                and routines that make lasting weight loss realistic.
              </p>
            </div>

            {/* Card 4 */}
            <div className="snap-center flex-none w-full md:w-auto">
              <div className="relative mb-6 h-56 md:h-40 w-full overflow-hidden rounded-xl bg-[#b9d7e5]">
                <Image
                  src="/images/expert-support.jpg"
                  alt="Support team"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-[1.2rem] font-semibold text-[#143d82]">
                Support team
              </h3>
              <p className="mt-3 text-[0.98rem] leading-relaxed text-[#123456]">
                A friendly support team is available to answer questions and
                help with anything related to your programme.
              </p>
            </div>
          </div>
        </div>

        {/* Services included heading */}
        <p className="mt-16 text-[1.4rem] font-semibold text-[#123c78]">
          Services included in your plan
        </p>

        {/* Services cards row */}
        <div className="mt-8 -mx-4 md:mx-0">
          <div
            className="
              flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory px-4
              md:grid md:grid-cols-3 md:gap-10 md:overflow-visible md:snap-none
            "
          >
            {/* Meal plans */}
            <div className="snap-center flex-none w-full md:w-auto">
              <div className="relative mb-6 h-64 md:h-48 w-full overflow-hidden rounded-xl bg-[#b9d7e5]">
                <Image
                  src="/images/service-meal.jpg"
                  alt="Meal plan"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-[1.2rem] font-semibold text-[#143d82]">
                Meal plans
              </h3>
              <p className="mt-3 text-[0.98rem] leading-relaxed text-[#123456]">
                Simple, structured meal ideas and recipes designed to make
                healthy eating both enjoyable and convenient.
              </p>
            </div>

            {/* Fitness plan */}
            <div className="snap-center flex-none w-full md:w-auto">
              <div className="relative mb-6 h-64 md:h-48 w-full overflow-hidden rounded-xl bg-[#b9d7e5]">
                <Image
                  src="/images/service-fitness.jpg"
                  alt="Fitness plan"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-[1.2rem] font-semibold text-[#143d82]">
                Fitness plan
              </h3>
              <p className="mt-3 text-[0.98rem] leading-relaxed text-[#123456]">
                No gym required. Expert-designed home workouts tailored to your
                fitness level and schedule.
              </p>
            </div>

            {/* Home delivery */}
            <div className="snap-center flex-none w-full md:w-auto">
              <div className="relative mb-6 h-64 md:h-48 w-full overflow-hidden rounded-xl bg-[#b9d7e5]">
                <Image
                  src="/images/service-delivery.jpg"
                  alt="Home delivery"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-[1.2rem] font-semibold text-[#143d82]">
                Home delivery
              </h3>
              <p className="mt-3 text-[0.98rem] leading-relaxed text-[#123456]">
                Hassle-free, on-time deliveries of your treatment directly to
                your doorstep every month.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}