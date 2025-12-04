//FitYou\components\NewsSection.jsx
"use client";

import Image from "next/image";

export default function NewsSection() {
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

  return (
   <section className="bg-[#FBF6EE] py-20 font-laila relative">
      <div className="max-w-6xl mx-auto px-4">

        <h2 className="text-xl md:text-4xl  text-[#0D336A] mb-12 text-left leading-snug">
          The breakthrough in weight loss medication<br />
          has hit the news big time.
        </h2>

        {/* SCROLL WRAPPER */}
        <div className="relative">
          
          {/* Fade Overlays (left & right) */}
          <div className="absolute left-0 top-0 w-12 h-full bg-gradient-to-r from-[#FBF6EE] to-transparent pointer-events-none"></div>
          <div className="absolute right-0 top-0 w-12 h-full bg-gradient-to-l from-[#FBF6EE] to-transparent pointer-events-none"></div>

          <div
            className="
              flex gap-6 
              overflow-x-auto 
              scrollbar-none
              snap-x snap-mandatory 
              pb-4
            "
          >
            {articles.map((item, i) => (
              <div
                key={i}
                className="
                  snap-start
                  bg-white 
                  rounded-2xl 
                  border 
                  border-[#E4E8EE]
                  shadow-sm
                  p-6
                  w-[300px]
                  flex flex-col justify-between
                "
              >
                <p className="text-[#0D336A] text-[17px] leading-relaxed font-medium">
                  {item.title}
                </p>

                <p className="text-[12px] text-[#375C7A] mt-6">{item.date}</p>

                <div className="relative w-[140px] h-[40px] mt-4">
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

      </div>
    </section>
  );
}
