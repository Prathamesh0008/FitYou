"use client";

import Image from "next/image";

export default function WhyItWorks() {
  const items = [
    {
      icon: "/why/bibimbap.png",
      title: "I love food too much to go on a diet",
      text: "You can still enjoy the foods you love – but you’ll feel full and satisfied just after a small amount.",
    },
    {
      icon: "/why/clock.png",
      title: "I don’t have time to exercise",
      text: "Can you do light exercise, like walking, for 30 minutes a few times a week? Yes? Then that’s all you need!",
    },
    {
      icon: "/why/reach.png",
      title: "It’s too difficult to stay motivated",
      text: "Our injection takes away the struggle of sticking to a diet, and our team is available for support.",
    },
    {
      icon: "/why/weighing-machine.png",
      title: "I've tried everything… nothing works",
      text: "Our injection does the hard work for you. It changes your metabolism and your body’s reaction to food.",
    },
    {
      icon: "/why/think-different.png",
      title: "Why is this different from other weight loss plans?",
      text: `Because it is effective. Clinical trials say so, and so do the best doctors in the world. Plus, our programme is prescribed by renowned doctors.`,
    },
  ];

  return (
    <section className="relative bg-[#1E618A] text-white pb-40 pt-46 overflow-hidden">

      {/* 🔵 DEEP CLEAN WAVE */}
      <svg
        className="absolute top-0 left-0 w-full h-[240px]"
        viewBox="0 0 1440 240"
        preserveAspectRatio="none"
      >
        <path
          fill="#ffffff"
          d="M0,140 C300,260 900,40 1440,160 L1440,0 L0,0 Z"
        />
      </svg>

      {/* CONTENT */}
      <div className="relative max-w-6xl mx-auto px-6">

        {/* TITLE */}
        <h2 className="text-center text-3xl md:text-4xl font-bold leading-snug mb-20">
          Simple, smart, and scientific.
          <br />
          Our weight loss programme works where others fail.
        </h2>

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-20">

          {items.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col ${
                index % 2 === 1 ? "md:items-end text-right" : "text-left"
              }`}
            >
              {/* ICON + BUBBLE CONTAINER */}
              <div className="flex items-start gap-3 relative">

                {/* ICON */}
                <div className="w-16 h-16 relative z-10">
                  <Image
                    src={item.icon}
                    width={64}
                    height={64}
                    alt="icon"
                    className="object-contain"
                  />
                </div>

                {/* COMMENT BUBBLE */}
                <div className="relative bg-white text-[#0D336A] rounded-3xl shadow-lg px-6 py-4 max-w-sm">
                  <p className="font-semibold text-[16px]">
                    {item.title}
                  </p>

                  {/* BUBBLE TAIL */}
                  <div
                    className={`absolute w-4 h-4 bg-white rotate-45 top-6 ${
                      index % 2 === 1 ? "-left-2" : "-left-2"
                    }`}
                  ></div>
                </div>
              </div>

              {/* DESCRIPTION */}
              <p className="mt-4 text-sm italic text-[#D6E6EE] max-w-sm leading-relaxed">
                {item.text}
              </p>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
