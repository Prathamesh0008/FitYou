// FitYou\components\ambassador\Hero.jsx
"use client";

export default function Hero({ scrollToForm }) {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-[#002060] overflow-hidden px-4 sm:px-6">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 right-10 sm:top-20 sm:right-20 w-40 h-40 sm:w-64 sm:h-64 rounded-full border-4 border-white/20"></div>
        <div className="absolute bottom-10 left-10 sm:bottom-20 sm:left-20 w-56 h-56 sm:w-96 sm:h-96 rounded-full border-4 border-white/20"></div>
      </div>

      <div className="relative max-w-7xl mx-auto w-full py-16 sm:py-20 md:py-32 z-10">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div className="text-white space-y-6 sm:space-y-8">
            <div className="inline-block px-4 py-1.5 sm:px-4 sm:py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium">
              Join Our Community
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-snug sm:leading-tight">
              Become a
              <span className="block text-[#AAC9D6] mt-1 sm:mt-2">FitYou Ambassador</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-white/90 leading-relaxed max-w-2xl">
              Join our mission to promote healthy living and weight management. 
              Share your journey, inspire others, and grow with our community.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4">
              <button 
                onClick={scrollToForm}
                className="px-6 py-3 sm:px-8 sm:py-4 bg-[#AAC9D6] text-[#002060] rounded-lg font-semibold text-base sm:text-lg hover:bg-[#9ab8c6] transition-all duration-300 active:scale-95"
              >
                Apply Now
              </button>
              
            </div>

            <div className="grid grid-cols-3 gap-4 sm:gap-6 pt-8 sm:pt-12 border-t border-white/20">
              <div>
                <div className="text-2xl sm:text-3xl font-bold">500+</div>
                <div className="text-white/70 text-sm sm:text-base">Active Ambassadors</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold">50K+</div>
                <div className="text-white/70 text-sm sm:text-base">Community Members</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold">100+</div>
                <div className="text-white/70 text-sm sm:text-base">Cities Worldwide</div>
              </div>
            </div>
          </div>

          <div className="relative mt-8 lg:mt-0">
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-[#AAC9D6]/30 to-transparent rounded-3xl"></div>
              <div className="absolute inset-4 bg-gradient-to-tr from-white/10 to-transparent rounded-2xl backdrop-blur-sm border border-white/20"></div>
              
              <div className="absolute inset-8 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-5xl sm:text-6xl mb-3 sm:mb-4">👥</div>
                  <div className="text-white font-semibold text-lg sm:text-xl">Community Illustration</div>
                </div>
              </div>
              
              <div className="absolute -top-3 -right-3 sm:-top-6 sm:-right-6 w-20 h-20 sm:w-32 sm:h-32 bg-[#FCE2C6] rounded-2xl rotate-12"></div>
              <div className="absolute -bottom-3 -left-3 sm:-bottom-6 sm:-left-6 w-16 h-16 sm:w-28 sm:h-28 bg-[#AAC9D6] rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center">
          <div className="text-white/60 text-xs sm:text-sm mb-1 sm:mb-2">Scroll to explore</div>
          <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-white/60 rounded-full">
            <div className="w-1 h-2 sm:h-3 bg-white/60 rounded-full mx-auto mt-2"></div>
          </div>
        </div>
      </div>
    </section>
  );
}