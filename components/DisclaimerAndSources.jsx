"use client";

import Link from "next/link";

export default function DisclaimerAndSources() {
  return (
    <section className="bg-[#F5FAFF] text-[#12355B] px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl font-semibold mb-4 sm:mb-6">
          Disclaimer and sources
        </h2>

        {/* Disclaimer text */}
        <div className="space-y-3 sm:space-y-4 text-sm sm:text-base leading-relaxed">
          <p>
            Our treatment should be taken alongside a healthy diet and lifestyle. Because everybody is different, individual results vary and depend on lifestyle.
          </p>
          <p>
            The information on our website is based on clinical results. You can read the studies below. Because everybody is different, individual results vary and depend on lifestyle.
          </p>
        </div>

        {/* Sources list */}
        <div className="mt-6 sm:mt-8 text-sm sm:text-base space-y-2 sm:space-y-3">
          <p>
            <a
              href="#"
              className="text-[#0D4F8B] underline underline-offset-2 hover:text-[#083862]"
            >
              [1] Diet Failure Statistics 2023 | Why Do Diets Fail? Source: The Journal of Clinical Nutrition.
            </a>
          </p>
          <p>
            <a
              href="#"
              className="text-[#0D4F8B] underline underline-offset-2 hover:text-[#083862]"
            >
              [2] Jastreboff, A. M., Aronne, L. J., Ahmad, N. N., Wharton, S., Connery, L., Alves, B., Kiyosue, A., Zhang,
              S., Liu, B., Bunck, M. C., & Stefanski, A. (2022). Tirzepatide once weekly for the treatment of obesity.
              New England Journal of Medicine, 387(3), 205–216. https://doi.org/10.1056/nejmoa2206038
            </a>
          </p>
        </div>

        {/* CTA text */}
        <p className="mt-10 sm:mt-12 text-center text-sm sm:text-base">
          Start your journey today:
        </p>

        {/* Buttons */}
        <div className="mt-4 sm:mt-6 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
          <Link
            href="#"
            className="w-full sm:w-auto min-w-[240px] text-center rounded-md bg-[#5AAAC4] hover:bg-[#4B93AC] text-white font-semibold py-3 px-6 shadow-md transition-colors"
          >
            Start consultation
          </Link>
          <Link
            href="#"
            className="w-full sm:w-auto min-w-[240px] text-center rounded-md border border-[#F3B88A] bg-[#FFE7CF] hover:bg-[#FFD8B0] text-[#12355B] font-semibold py-3 px-6 shadow-md transition-colors"
          >
            View our programme
          </Link>
        </div>
      </div>
    </section>
  );
}
