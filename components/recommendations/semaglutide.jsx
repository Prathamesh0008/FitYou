//components\recommendations\semaglutide.jsx

"use client";

import { Laila } from "next/font/google";
import { ArrowUp } from "lucide-react";

const laila = Laila({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const Semaglutide = ({ type }) => {
  const isTablet = type?.toLowerCase().includes("tablet");

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // 🔵 TABLET CONTENT -----------------------------------------
  const tabletHeading = (
    <>
      <span className="relative inline-block border-b border-[#8ea2c8] pb-1">
        Semaglutide,
      </span>
      <br />
      <span className="inline mt-3 block md:inline whitespace-normal md:whitespace-nowrap">
        the new groundbreaking weight loss medicine
      </span>
    </>
  );

  const tabletPara1 =
    "Semaglutide is the famous weight loss medication. Internationally popular as injection, under the brand names Ozempic and Wegovy.";

  const tabletPara2 =
    "In India, the injection is not yet available, but we offer you the Semaglutide tablets. Same unique powers, just in a daily tablet.";

  // 🟣 INJECTION CONTENT (Mounjaro) ------------------------------
  const injectionHeading = (
    <>
      <span className="relative inline-block border-b border-[#8ea2c8] pb-1">
        Mounjaro,
      </span>
      <br />
      <span className="inline mt-3 block md:inline whitespace-normal md:whitespace-nowrap">
        the weekly injection transforming weight loss results
      </span>
    </>
  );

  const injectionPara1 =
    "Mounjaro (Tirzepatide) is a once-weekly injection that supports significant weight loss and regulates blood sugar through dual GIP + GLP-1 action.";

  const injectionPara2 =
    "It slows digestion, reduces appetite, improves insulin response, and helps you stay full longer — leading to powerful, sustainable weight loss.";

  return (
    <div className={`w-full bg-[#F4F7FB] flex items-start justify-start px-6 py-16 ${laila.className}`}>

      <div className="max-w-4xl w-full space-y-10 pl-0 ml-0 md:ml-14 lg:ml-24">

        {/* Headings */}
        <div className="space-y-3 pl-0">
          <h1 className="text-3xl md:text-4xl lg:text-5xl text-[#051E64] leading-tight font-normal">
            {isTablet ? tabletHeading : injectionHeading}
          </h1>
        </div>

        {/* Text Content + Buttons */}
        <div className="pl-0">
          <div className="inline-block">

            <p className="mb-3 whitespace-normal md:whitespace-nowrap">
              {isTablet ? tabletPara1 : injectionPara1}
            </p>

            <p className="whitespace-normal md:whitespace-nowrap">
              {isTablet ? tabletPara2 : injectionPara2}
            </p>

            {/* Arrow Scroll Button */}
            <div className="flex justify-center mt-4">
              <button
                onClick={scrollToTop}
                className="group flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-sm hover:shadow-md transition-all duration-300 border border-[#E2E8F0]"
              >
                <ArrowUp className="w-5 h-5 text-[#051E64] group-hover:-translate-y-1 transition-transform duration-300" />
              </button>
            </div>

            {/* Start Now Link */}
            <div className="flex justify-center mt-3">
              <button
                onClick={scrollToTop}
                className="text-[#051E64] underline decoration-[#375683] underline-offset-4 hover:text-[#375683] transition-colors"
              >
                Start now
              </button>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default Semaglutide;
