//FitYou\app\reviews\page.jsx
"use client";

export default function ReviewsPage() {
  return (
    <div className="w-full bg-[#F6FAFF] py-12">

      {/* ------------------- TITLE SECTION ------------------- */}
      <div className="text-center mb-6 px-4">
        <h2 className="text-[#002A86] text-4xl font-semibold">
          Don’t believe us? Here’s what users say
        </h2>

        <p className="text-gray-600 text-lg mt-2 max-w-2xl mx-auto">
          Thousands of Indians trusted FitYou with weight loss. They have no regrets.
          Here’s what they say about using FitYou for their journey.
        </p>
      </div>

      {/* ------------------- TESTIMONIAL CARDS ------------------- */}
      <div
        className="
          max-w-5xl 
          mx-auto 
          grid 
          grid-cols-1 
          md:grid-cols-3 
          gap-6
          px-4
        "
      >

        {/* ------------ CARD 1 ------------ */}
        <div className="
          bg-white 
          rounded-3xl 
          shadow-md
          overflow-hidden 
          flex flex-col
          h-[450px]     /* 🔥 Reduced height */
        ">
          <img
            src="/reviews/woman1.jpg"
            alt="Trisha"
            className="w-full h-[260px] object-cover object-top"  /* 🔥 Reduced image height */
          />

          <div className="p-4 flex flex-col flex-1">
            <h3 className="text-[#002A86] text-[17px] font-semibold flex items-center gap-2">
              Trisha Krishnan
              <span className="text-yellow-400 text-lg">★★★★★</span>
            </h3>

            <p className="text-gray-600 mt-2 leading-relaxed text-sm flex-1">
              I have been on FitYou for 5 months. I always craved food and binged on it.
              Their doctor-approved, science-backed plan helped me control my cravings.
            </p>
          </div>
        </div>

        {/* ------------ CARD 2 ------------ */}
        <div className="
          bg-white 
          rounded-3xl 
          shadow-md
          overflow-hidden 
          flex flex-col
          h-[450px]
        ">
          <img
            src="/reviews/woman2.jpg"
            alt="Divya"
            className="w-full h-[260px] object-cover object-top"
          />

          <div className="p-4 flex flex-col flex-1">
            <h3 className="text-[#002A86] text-[17px] font-semibold flex items-center gap-2">
              Divya Makhija
              <span className="text-yellow-400 text-lg">★★★★☆</span>
            </h3>

            <p className="text-gray-600 mt-2 leading-relaxed text-sm flex-1">
              I was curious about the celebrity weight loss secret. FitYou’s weight
              experts cleared all my doubts & my plan was doctor-approved.
            </p>
          </div>
        </div>

        {/* ------------ CARD 3 ------------ */}
        <div className="
          bg-white 
          rounded-3xl 
          shadow-md
          overflow-hidden 
          flex flex-col
          h-[450px]
        ">
          <img
            src="/reviews/man1.jpg"
            alt="Suresh"
            className="w-full h-[260px] object-cover object-top"
          />

          <div className="p-4 flex flex-col flex-1">
            <h3 className="text-[#002A86] text-[17px] font-semibold flex items-center gap-2">
              Suresh Kushwaha
              <span className="text-yellow-400 text-lg">★★★★☆</span>
            </h3>

            <p className="text-gray-600 mt-2 leading-relaxed text-sm flex-1">
              Losing weight with FitYou solved my joint pain. Now I feel light and can
              walk for hours without discomfort.
            </p>
          </div>
        </div>

      </div>

    </div>
  );
}