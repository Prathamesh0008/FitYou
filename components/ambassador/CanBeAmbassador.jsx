// FitYou\components\ambassador\CanBeAmbassador.jsx
"use client";

export default function CanBeAmbassador({ scrollToForm }) {
  const items = [
    {
      title: "Yes, if you're using weight loss medicines",
      text: "Share your real, day-to-day experiences of your weight loss journey. Inspire others with videos, posts, and reviews.",
      color: "bg-blue-50",
      border: "border-blue-200",
    },
    {
      title: "Yes, if you're promoting healthy living",
      text: "If you share content about health, fitness or self-care, your audience may be interested in our solution.",
      color: "bg-emerald-50",
      border: "border-emerald-200",
    },
    {
      title: "Yes, if you're promoting a healthy diet",
      text: "Create cooking content, food reviews, and lifestyle videos — we'd love to collaborate.",
      color: "bg-amber-50",
      border: "border-amber-200",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white px-4 sm:px-6">
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#002060] mb-4 sm:mb-6">
            Can <span className="text-[#AAC9D6] underline decoration-wavy">you</span> be a FitYou ambassador?
          </h2>
          <p className="text-lg sm:text-xl text-gray-600">
            Anyone on a weight loss or health journey is welcome to join our vibrant community.
            Share your story, inspire others, and grow together.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {items.map((item, index) => (
            <div 
      key={index}
      className={`${item.color} ${item.border} border rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:shadow-lg`}
    >
              <div className="relative mb-4 sm:mb-6">
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-white/80 backdrop-blur-sm flex items-center justify-center text-2xl sm:text-3xl shadow-lg">
                  {index === 0 && "💊"}
                  {index === 1 && "🏃‍♂"}
                  {index === 2 && "🥗"}
                </div>
                <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 w-6 h-6 sm:w-8 sm:h-8 bg-white rounded-full flex items-center justify-center text-xs sm:text-sm font-bold shadow-md">
                  {index + 1}
                </div>
              </div>
              
              <h3 className="text-xl sm:text-2xl font-semibold text-[#002060] mb-3 sm:mb-4">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm sm:text-base mb-6 sm:mb-8">{item.text}</p>
              
              <div className="w-10 h-0.5 sm:w-12 sm:h-1 bg-gradient-to-r from-[#002060] to-[#AAC9D6] rounded-full mb-4 sm:mb-6"></div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 sm:mt-20">
          <button 
            onClick={scrollToForm}
            className="px-8 py-3 sm:px-12 sm:py-4 bg-[#002060] text-white rounded-xl font-semibold text-base sm:text-lg hover:bg-[#001a4d] transition-all duration-300 active:scale-95"
          >
            Apply now
          </button>
          <p className="text-gray-500 mt-4 sm:mt-6 text-sm sm:text-lg">
            Join hundreds of ambassadors making a difference
          </p>
        </div>
      </div>
    </section>
  );
}