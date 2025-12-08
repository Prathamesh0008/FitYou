// components/weight-loss/ExpertsSection.jsx

import React from "react";
import Image from "next/image";

export default function ExpertsSection() {
  return (
    <section className="bg-[#f3fbff] py-16">
      <div className="mx-auto max-w-6xl px-4">
        {/* Heading */}
        <h2 className="text-[2.2rem] font-semibold text-[#123c78]">
          Support from a team of experts
        </h2>

        {/* Cards row */}
        <div className="mt-10 grid gap-10 md:grid-cols-4">
          {/* Card 1 */}
          <div>
            <div className="relative mb-6 h-44 w-full overflow-hidden rounded-xl bg-[#c7e1ee]">
              <Image
                src="/images/expert-doctor.jpg" // your image
                alt="Weight loss specialist"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-[1.2rem] font-semibold text-[#123c78]">
              Weight loss specialists
            </h3>
            <p className="mt-3 text-[0.98rem] leading-relaxed text-[#123456]">
              Specialist partner doctors renowned in weight management provide
              safe, evidence‑based care so you can feel confident in your
              treatment.
            </p>
          </div>

          {/* Card 2 */}
          <div>
            <div className="relative mb-6 h-44 w-full overflow-hidden rounded-xl bg-[#c7e1ee]">
              <Image
                src="/images/expert-nutrition.jpg"
                alt="Nutrition expert"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-[1.2rem] font-semibold text-[#123c78]">
              Nutritional advice
            </h3>
            <p className="mt-3 text-[0.98rem] leading-relaxed text-[#123456]">
              A partner nutritionist offers tailored advice and answers your
              questions so healthy eating fits your daily routine.
            </p>
          </div>

          {/* Card 3 */}
          <div>
            <div className="relative mb-6 h-44 w-full overflow-hidden rounded-xl bg-[#c7e1ee]">
              <Image
                src="/images/expert-coach.jpg"
                alt="Health coach"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-[1.2rem] font-semibold text-[#123c78]">
              Health coaching
            </h3>
            <p className="mt-3 text-[0.98rem] leading-relaxed text-[#123456]">
              Health coaches focused on weight management guide, motivate, and
              encourage you to stay on track.
            </p>
          </div>

          {/* Card 4 */}
          <div>
            <div className="relative mb-6 h-44 w-full overflow-hidden rounded-xl bg-[#c7e1ee]">
              <Image
                src="/images/expert-support.jpg"
                alt="Support team"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-[1.2rem] font-semibold text-[#123c78]">
              Support team
            </h3>
            <p className="mt-3 text-[0.98rem] leading-relaxed text-[#123456]">
              A knowledgeable support team is ready to assist whenever you have
              questions or need help with your programme.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}