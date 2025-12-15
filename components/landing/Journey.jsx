"use client";
import React, { useRef, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Laila, Raleway } from "next/font/google";

const laila = Laila({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-laila",
});

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-raleway",
});

const steps = [
  {
    stepNumber: 1,
    title: "The first step",
    heading: "A great start",
    description: "Your weight loss journey with Aktive begins with the package delivery.",
    image: "/landing/step1.png",
  },
  {
    stepNumber: 2,
    title: "The next move",
    heading: "Some minor lifestyle changes",
    description: "You start the programme and tweak your lifestyle according to diet & fitness plans.",
    image: "/landing/step2.png",
  },
  {
    stepNumber: 3,
    title: "A reduced appetite",
    heading: "Not hungry anymore",
    description: "You feel fuller for longer. You are eating less and not craving unhealthy food.",
    image: "/landing/step3.png",
  },
  {
    stepNumber: 4,
    title: "Visible results",
    heading: "Clothes fit better",
    description: "You start noticing changes in your body. Your clothes feel looser.",
    image: "/landing/step4.png",
  },
  {
    stepNumber: 5,
    title: "Long-term success",
    heading: "A healthier you",
    description: "You have reached your goal weight and built healthy habits for life.",
    image: "/landing/fit.svg",
  },
];

export default function Journey() {
  const router = useRouter();
  const scrollRef = useRef(null);
  const [activeStep, setActiveStep] = useState(1);
  
  const handleQuizClick = () => {
    // console.log("Quiz button clicked!");
    router.push("/quiz");
  };

  const scrollToStep = (index) => {
    setActiveStep(index + 1);
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.offsetWidth;
      scrollRef.current.scrollTo({
        left: index * cardWidth,
        behavior: "smooth",
      });
    }
  };

  const handleScroll = () => {
    if (scrollRef.current) {
      const scrollLeft = scrollRef.current.scrollLeft;
      const width = scrollRef.current.offsetWidth;
      const index = Math.round(scrollLeft / width);
      setActiveStep(index + 1);
    }
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (el) {
      el.addEventListener("scroll", handleScroll);
      return () => el.removeEventListener("scroll", handleScroll);
    }
  }, []);

  return (
    <section className={`bg-[#FFFBF3]  py-12 md:py-24 ${laila.variable} ${raleway.variable} font-raleway`}>
      <div className="container mx-auto px-4 md:px-12">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-20">

          {/* LEFT SIDE */}
          <div className="lg:w-10/12 lg:sticky lg:top-32 lg:h-fit text-center lg:text-left 
                px-0 md:px-30 w-full">

            <h2
              className="
                text-[#002074] 
                text-[32px] md:text-[50px] 
                leading-tight font-laila 
                mb-4 md:mb-6 
                w-full 
                px-10 md:px-0
                text-center lg:text-left
              "
            >
              Your 5-step weight loss<br className="hidden md:block" />
              journey
            </h2>

            <p className="text-[#002074] text-base md:text-lg leading-relaxed mb-6 md:mb-8 
              w-full max-w-none text-center lg:text-left">
              Aktive's weight loss programme is designed with precision in mind. Check out what your 5–step weight loss journey will look like.
            </p>

            {/* FIXED DESKTOP BUTTON - ADDED onClick */}
            <div className="hidden lg:flex flex-col items-start gap-6">
              <span className="text-[#002074] text-lg">Take the quiz. It's free.</span>
              <button 
                onClick={handleQuizClick} // ← THIS WAS MISSING!
                className="bg-[#9BCDD2] hover:bg-[#8abfc4] text-[#002074] font-bold text-lg py-3 px-8 rounded-lg shadow-md transition-colors cursor-pointer"
              >
                Do I qualify for treatment?
              </button>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="lg:w-8/12 relative">

            {/* CAROUSEL */}
            <div
              ref={scrollRef}
              className="flex lg:flex-col overflow-x-auto lg:overflow-visible snap-x snap-mandatory scrollbar-hide gap-0 lg:gap-8 pb-4 lg:pb-0"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {steps.map((step) => (
                <div key={step.stepNumber} className="min-w-full lg:min-w-0 snap-center px-2 lg:px-0 flex justify-center">

                  {/* CARD */}
                  <div className="bg-[#F7F5F2] border border-[#E5E0D8] rounded-2xl p-5 md:p-6 h-auto 
                                  lg:max-w-[450px] w-full lg:mx-auto flex flex-col justify-start">

                    {/* Step Header */}
                    <div className="flex items-center gap-4 mb-4 md:mb-5">
                      <div className="w-8 h-8 rounded-full bg-[#002074] text-white flex items-center justify-center font-bold text-sm shrink-0">
                        {step.stepNumber}
                      </div>
                      <h3 className="text-[#002074] text-lg md:text-xl font-bold font-laila">
                        {step.title}
                      </h3>
                    </div>

                    {/* Image */}
                    <div className="rounded-xl overflow-hidden mb-4 md:mb-5 h-48 md:h-64 w-full bg-gray-200">
                      <img src={step.image} alt={step.title} className="w-full h-full object-cover" />
                    </div>

                    {/* Card Content */}
                    <h4 className="text-[#002074] text-xl font-bold mb-2 font-laila">
                      {step.heading}
                    </h4>

                    <p className="text-[#2C3E50] text-base md:text-lg leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* MOBILE BUTTONS */}
            <div className="lg:hidden flex justify-center gap-3 mt-4 mb-6">
              {steps.map((_, index) => (
                <button
                  key={index}
                  onClick={() => scrollToStep(index)}
                  className={`w-10 h-10 rounded-full border border-[#002074] flex items-center justify-center font-bold text-lg transition-colors
                    ${activeStep === index + 1 ? "bg-[#002074] text-white" : "bg-transparent text-[#002074]"}`}
                >
                  {index + 1}
                </button>
              ))}
            </div>

            {/* MOBILE BOTTOM SECTION */}
            <div className="lg:hidden text-center mt-2 px-4">
              <p className="text-[#002074] text-lg mb-4">Take the quiz. It's free.</p>
              <button 
                onClick={handleQuizClick}
                className="w-full bg-[#9BCDD2] text-[#002074] font-bold text-lg py-4 rounded-lg shadow-md cursor-pointer"
              >
                Do I qualify for treatment?
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}