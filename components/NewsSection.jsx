//FitYou\components\NewsSection.jsx
"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";

export default function NewsSection() {
  const scrollRef = useRef(null);

  const articles = [
    {
      title: "Ground-breaking weight loss injection gets approved in India",
      date: "15 April 2025",
      logo: "/news/reuters-logo.jpg",
    },
    {
      title: "Revolutionary weight loss injection hits India; good news for obese people",
      date: "15 April 2025",
      logo: "/news/business-standard-logo.jpg",
    },
    {
      title: "Hansal Mehta praises newly-launched weight loss injection",
      date: "1 May 2025",
      logo: "/news/india-today.jpg",
    },
    {
      title: "Has this injection finally cracked the weight loss code?",
      date: "31 March 2025",
      logo: "/news/indian-express.jpg",
    },
    {
      title: "Weight loss injection launches in India: Is it the answer to obesity?",
      date: "21 March 2025",
      logo: "/news/firstpost-logo.jpg",
    },
  ];

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let speed = 0.6;
    let animationFrame;

    function autoScroll() {
      container.scrollLeft += speed;

      // When fully scrolled → reset seamlessly
      if (container.scrollLeft >= container.scrollWidth / 2) {
        container.scrollLeft = 0;
      }

      animationFrame = requestAnimationFrame(autoScroll);
    }

    animationFrame = requestAnimationFrame(autoScroll);

    // Pause on manual scroll
    const stop = () => (speed = 0);
    const start = () => (speed = 0.6);

    container.addEventListener("mouseenter", stop);
    container.addEventListener("mouseleave", start);
    container.addEventListener("touchstart", stop);
    container.addEventListener("touchend", start);

    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <section className="bg-[#FBF6EE] py-20 font-laila">
      <div className="max-w-6xl mx-auto px-4">

        <h2 className="text-[40px] text-[#0D336A] font-bold mb-12 leading-tight">
          The breakthrough in weight loss medication <br />
          has hit the news big time.
        </h2>

        {/* SCROLL CONTAINER */}
        <div
          ref={scrollRef}
          className="
            flex gap-6 
            overflow-x-scroll 
            scrollbar-none 
            pb-4
            whitespace-nowrap 
          "
          style={{ scrollBehavior: "auto" }}
        >
          {/* DOUBLE LIST FOR PERFECT LOOP */}
          {[...articles, ...articles].map((item, i) => (
            <div
              key={i}
              className="
                bg-white 
                inline-block
                align-top
                rounded-2xl 
                border border-[#E4E8EE]
                shadow-sm
                p-6
                w-[300px]
                h-[240px]
              "
            >
              <p className="text-[#0D336A] text-[17px] font-medium leading-snug">
                {item.title}
              </p>

              <p className="text-[13px] text-[#375C7A] mt-4">
                {item.date}
              </p>

              <div className="relative w-[130px] h-[32px] mt-4">
                <Image
                  src={item.logo}
                  alt="Publisher Logo"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
