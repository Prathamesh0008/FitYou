// FitYou/components/ambassador/CanBeAmbassador.jsx
"use client";

import { FaPills, FaRunning, FaCarrot } from "react-icons/fa"; // ← ADDED

export default function CanBeAmbassador({ scrollToForm }) {
  const items = [
    {
      title: "Yes, if you're using weight loss medicines",
      text: "Share your real, day-to-day experiences and inspire others.",
      color: "bg-[#F0F6FF]",
      border: "border-[#D4E6F5]",
      icon: <FaPills className="text-[#002060] text-3xl sm:text-4xl" />,
    },
    {
      title: "Yes, if you're promoting healthy living",
      text: "If you create fitness or health content, your audience may benefit.",
      color: "bg-[#E9FDF3]",
      border: "border-[#C9F1DD]",
      icon: <FaRunning className="text-[#002060] text-3xl sm:text-4xl" />,
    },
    {
      title: "Yes, if you're promoting a healthy diet",
      text: "Share recipes, wellness tips, and lifestyle content with us.",
      color: "bg-[#FFF7E8]",
      border: "border-[#F5E2BB]",
      icon: <FaCarrot className="text-[#002060] text-3xl sm:text-4xl" />,
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white px-4 sm:px-6 font-laila">
      <div className="max-w-7xl mx-auto w-full">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal text-[#002060] mb-4 sm:mb-6">
            Can <span className="text-[#34597A]">you</span> be a FitYou ambassador?
          </h2>
          <p className="text-base sm:text-lg text-gray-600">
            Anyone on a health journey is welcome to join our community.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {items.map((item, index) => (
            <div
              key={index}
              className={`${item.color} ${item.border} border rounded-2xl p-6 sm:p-8 hover:shadow-md transition-all duration-300`}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="text-3xl sm:text-4xl">
                  {item.icon}
                </div>

                <div className="text-xs sm:text-sm w-7 h-7 rounded-full bg-white flex items-center justify-center border">
                  {index + 1}
                </div>
              </div>

              <h3 className="text-lg sm:text-xl font-medium text-[#002060] mb-2">
                {item.title}
              </h3>

              <p className="text-gray-600 text-sm sm:text-base">{item.text}</p>
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="text-center mt-12 sm:mt-20">
          <button
            onClick={scrollToForm}
            className="px-8 py-3 sm:px-12 sm:py-4 bg-[#002060] text-white rounded-xl font-normal text-base sm:text-lg hover:bg-[#001a48] transition-all duration-300 active:scale-95"
          >
            Apply now
          </button>
        </div>
      </div>
    </section>
  );
}