// FitYou/components/ambassador/Roles.jsx
"use client";

import {
  FaVideo,
  FaMobileAlt,
  FaCommentDots,
  FaGraduationCap,
  FaLightbulb,
} from "react-icons/fa"; // ← ADDED

export default function Roles({ scrollToForm }) {
  const roles = [
    {
      title: "Creating testimonials & reviews",
      desc: "Share what you think about weight loss medication through pictures or videos. Be real and authentic.",
      icon: <FaVideo className="text-white text-2xl sm:text-3xl" />,
    },
    {
      title: "Posting about us on your social media platforms",
      desc: "Share FitYou content to help others learn about weight loss treatments and healthy living.",
      icon: <FaMobileAlt className="text-white text-2xl sm:text-3xl" />,
    },
    {
      title: "Talking about our brand",
      desc: "Discuss FitYou with friends, family, and online — help spread awareness of healthy living.",
      icon: <FaCommentDots className="text-white text-2xl sm:text-3xl" />,
    },
    {
      title: "Sharing your expertise",
      desc: "If you're a medical or nutrition expert, we'd love to create educational content with you.",
      icon: <FaGraduationCap className="text-white text-2xl sm:text-3xl" />,
    },
    {
      title: "Offering valuable feedback",
      desc: "Help us improve by sharing honest feedback about medications and services.",
      icon: <FaLightbulb className="text-white text-2xl sm:text-3xl" />,
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#F7FBFF] px-4 sm:px-6 font-laila">
      <div className="max-w-6xl mx-auto w-full">

        {/* HEADER */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-block px-5 py-1.5 bg-[#FCE2C6] rounded-full 
               text-[#002060] text-sm mb-4">
            Your Role
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl text-[#002060] font-normal mb-4">
            Your role as a FitYou ambassador
          </h2>

          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Some of the ways you can contribute to our community and make an impact
          </p>
        </div>

        {/* ROLES GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7 sm:gap-8">
          {roles.map((r, i) => (
            <div
              key={i}
              className="bg-white border border-gray-200 rounded-2xl p-7 sm:p-8
                         hover:shadow-lg transition-all duration-300"
            >
              {/* ICON BOX */}
              <div className="inline-flex p-4 bg-[#AAC9D6] rounded-xl mb-5">
                {r.icon}
              </div>

              {/* TITLE */}
              <h3 className="text-lg sm:text-xl text-[#002060] font-normal mb-3">
                {r.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-5">
                {r.desc}
              </p>

              <div className="w-8 h-0.5 bg-gray-300 rounded-full"></div>
            </div>
          ))}
        </div>

        {/* CTA BOX */}
        <div className="mt-14 sm:mt-20 text-center">
          <div className="bg-[#FDF7EF] rounded-3xl p-8 sm:p-12 max-w-4xl mx-auto">
            <h3 className="text-2xl sm:text-3xl text-[#002060] font-normal mb-4">
              Ready to make an impact?
            </h3>

            <p className="text-gray-600 text-base sm:text-lg mb-6 max-w-2xl mx-auto leading-relaxed">
              Join our community of ambassadors and help others on their health journey
            </p>

            <button
              onClick={scrollToForm}
              className="px-9 py-3.5 bg-[#002060] text-white rounded-lg 
                         text-base sm:text-lg font-normal hover:bg-[#001a4d] 
                         transition-all active:scale-95"
            >
              Apply now
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}