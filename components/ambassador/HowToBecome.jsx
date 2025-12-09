// FitYou/components/ambassador/HowToBecome.jsx

"use client";

import { FaWpforms, FaComments, FaHandshake } from "react-icons/fa"; // ← ADDED

export default function HowToBecome() {
  const steps = [
    {
      icon: <FaWpforms className="text-[#002060] text-4xl sm:text-5xl" />,
      title: "Apply to join",
      desc: "Submit your details through our application form. Our team will review and respond soon.",
    },
    {
      icon: <FaComments className="text-[#002060] text-4xl sm:text-5xl" />,
      title: "Let's talk",
      desc: "We'll schedule a call to learn your ideas and discuss collaboration opportunities.",
    },
    {
      icon: <FaHandshake className="text-[#002060] text-4xl sm:text-5xl" />,
      title: "The details",
      desc: "Then we finalize next steps, expectations, and begin working together.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#FDF7EF] px-4 sm:px-6 font-laila">
      <div className="max-w-6xl mx-auto w-full">

        {/* HEADER */}
        <div className="text-center mb-12 sm:mb-20">

          {/* Tag */}
          <div className="inline-block px-5 py-1.5 bg-[#AAC9D6] rounded-full 
                          text-[#002060] text-sm sm:text-base font-normal mb-4">
            Simple Process
          </div>

          {/* Main Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl text-[#002060] font-normal mb-4">
            How do you become an ambassador?
          </h2>

          {/* Subheading */}
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            It only takes three simple steps to join our ambassador program
          </p>
        </div>

        {/* STEPS GRID */}
        <div className="grid lg:grid-cols-3 gap-8 sm:gap-12">
          {steps.map((s, index) => (
            <div key={index} className="relative">

              <div className="bg-white border border-gray-200 rounded-2xl sm:rounded-3xl 
                              p-6 sm:p-8 md:p-10 text-center relative">

                {/* Step Number Badge */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-7 h-7 sm:w-9 sm:h-9 
                                bg-[#002060] rounded-full flex items-center justify-center 
                                text-white text-xs sm:text-sm font-normal shadow-md">
                  {index + 1}
                </div>

                {/* Icon */}
                <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-5 rounded-2xl 
                                bg-[#FCE2C6] flex items-center justify-center">
                  {s.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl text-[#002060] font-normal mb-3">
                  {s.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  {s.desc}
                </p>

              </div>
            </div>
          ))}
        </div>

        {/* Response Time Box */}
        <div className="text-center mt-12 sm:mt-20">
          <p className="px-6 py-3 sm:px-8 sm:py-4 bg-white rounded-xl border border-gray-200 
                        text-[#002060] text-sm sm:text-lg font-normal">
            Average response time:
            <span className="text-[#004080] font-normal"> 24 hours</span>
          </p>
        </div>

      </div>
    </section>
  );
}