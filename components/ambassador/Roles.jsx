// FitYou\components\ambassador\Roles.jsx
"use client";

export default function Roles({ scrollToForm }) {
  const roles = [
    {
      title: "Creating testimonials & reviews",
      desc: "Share what you think about weight loss medication through pictures or videos. Be real and authentic.",
      icon: "🎬",
    },
    {
      title: "Posting about us on your social media platforms",
      desc: "Share FitYou content to help others learn about weight loss treatments and healthy living.",
      icon: "📱",
    },
    {
      title: "Talking about our brand",
      desc: "Discuss FitYou with friends, family, and online — help spread awareness of healthy living.",
      icon: "💬",
    },
    {
      title: "Sharing your expertise",
      desc: "If you're a medical or nutrition expert, we'd love to create educational content with you.",
      icon: "🎓",
    },
    {
      title: "Offering valuable feedback",
      desc: "Help us improve by sharing honest feedback about medications and services.",
      icon: "💡",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#F7FBFF] px-4 sm:px-6">
      <div className="max-w-6xl mx-auto w-full">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-block px-4 py-1.5 sm:px-6 sm:py-2 bg-[#FCE2C6] rounded-full text-[#002060] font-semibold text-sm sm:text-base mb-4 sm:mb-6">
            Your Role
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#002060] mb-4 sm:mb-6">
            Your role as a FitYou ambassador
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Some of the ways you can contribute to our community and make an impact
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {roles.map((r, i) => (
            <div 
              key={i}
              className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 hover:shadow-lg transition-all duration-300"
            >
              <div className={`inline-flex p-3 sm:p-4 bg-[#AAC9D6] rounded-2xl text-white text-2xl sm:text-3xl mb-4 sm:mb-6`}>
                {r.icon}
              </div>
              
              <h3 className="text-lg sm:text-xl font-semibold text-[#002060] mb-3 sm:mb-4">
                {r.title}
              </h3>
              
              <p className="text-gray-600 text-sm sm:text-base mb-4 sm:mb-6">
                {r.desc}
              </p>
              
              <div className="w-8 h-0.5 sm:w-8 sm:h-1 bg-gray-300 rounded-full"></div>
            </div>
          ))}
        </div>

        <div className="mt-12 sm:mt-20 text-center">
          <div className="bg-[#FDF7EF] rounded-3xl p-6 sm:p-12 max-w-4xl mx-auto">
            <h3 className="text-2xl sm:text-3xl font-bold text-[#002060] mb-4 sm:mb-6">
              Ready to make an impact?
            </h3>
            <p className="text-gray-600 text-base sm:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto">
              Join our community of ambassadors and help others on their health journey
            </p>
            <button 
              onClick={scrollToForm}
              className="px-8 py-3 sm:px-10 sm:py-4 bg-[#002060] text-white rounded-xl font-semibold text-base sm:text-lg hover:bg-[#001a4d] transition-all duration-300 active:scale-95"
            >
              Apply now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}