"use client";
import Link from 'next/link';

export default function ReviewsPage() {
  const testimonials = [
    {
      name: "Trisha Krishnan",
      role: "Marketing Manager, Lost 18kg",
      rating: 5,
      image: "/reviews/3.svg",
      content: "I've been on FitYou for 5 months. I always craved food and binged on it. Their doctor-approved, science-backed plan helped me control my cravings and build healthy habits.",
      stat: "18kg lost",
      bgColor: "bg-[#002074]/5"
    },
    {
      name: "Divya Makhija",
      role: "Software Engineer, Lost 12kg",
      rating: 4,
      image: "/reviews/2.svg",
      content: "I was curious about the celebrity weight loss secret. FitYou's weight experts cleared all my doubts and my personalized plan was doctor-approved. The support team is amazing!",
      stat: "12kg lost",
      bgColor: "bg-[#9BCDD2]/10"
    },
    {
      name: "Suresh Kushwaha",
      role: "Teacher, Lost 22kg",
      rating: 4,
      image: "/reviews/1.svg",
      content: "Losing weight with FitYou solved my joint pain. Now I feel light and can walk for hours without discomfort. The lifestyle coaching made all the difference.",
      stat: "22kg lost",
      bgColor: "bg-[#002074]/5"
    }
  ];

  return (
    <div className="w-full bg-gradient-to-b from-white to-[#F6FAFF] py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#002074]/10 text-[#002074] rounded-full text-sm font-semibold mb-6">
            <span className="w-2 h-2 bg-[#002074] rounded-full"></span>
            Real Stories, Real Results
          </div>
          
          <h2 className="text-[#002074] text-3xl md:text-4xl font-bold mb-6">
            Don't believe us?<br className="hidden md:block" /> Here's what users say
          </h2>
          
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Thousands of Indians have trusted FitYou with their weight loss journey. 
            Here's what they have to say about their experience.
          </p>
        </div>

        {/* Mobile: Horizontal Scroll | Desktop: Grid */}
        <div className="
          flex
          overflow-x-auto
          snap-x
          snap-mandatory
          gap-6
          pb-4
          mb-8
          md:hidden
          scrollbar-hide
        ">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="
                min-w-[85vw]
                max-w-[85vw]
                bg-white 
                rounded-2xl 
                overflow-hidden 
                flex flex-col
                shadow-lg
                hover:shadow-xl
                transition-all duration-300
                snap-center
                flex-shrink-0
              "
            >
              {/* Image Section - Portrait-focused */}
              <div className={`relative ${testimonial.bgColor} overflow-hidden`}>
                {/* Stats Badge */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full shadow-sm z-10">
                  <span className="text-[#002074] font-bold text-sm">{testimonial.stat}</span>
                </div>
                
                {/* Portrait Frame */}
                <div className="w-full pt-[120%] relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center p-6">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="
                        w-full
                        h-full
                        object-cover
                        object-center
                        rounded-xl
                        transition-transform duration-500 
                        group-hover:scale-105
                      "
                    />
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="flex-1 p-6 flex flex-col">
                {/* Name & Rating */}
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="text-[#002074] text-lg font-bold">
                      {testimonial.name}
                    </h3>
                    <p className="text-gray-500 text-sm mt-1">
                      {testimonial.role}
                    </p>
                  </div>
                  
                  {/* Stars */}
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <span 
                        key={i} 
                        className={`text-lg ${
                          i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'
                        }`}
                      >
                        ★
                      </span>
                    ))}
                  </div>
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-600 text-sm leading-relaxed flex-1 mb-4">
                  {testimonial.content}
                </p>

                {/* Verified Badge */}
                <div className="pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="text-gray-500 text-xs">Verified Customer</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop: Grid Layout */}
        <div className="
          hidden
          md:grid
          md:grid-cols-3
          gap-6
          lg:gap-8
          mb-12
        ">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="
                bg-white 
                rounded-2xl 
                overflow-hidden 
                flex flex-col
                shadow-lg
                hover:shadow-xl
                transition-all duration-300
                group
                h-full
              "
            >
              {/* Image Section - Portrait-focused */}
              <div className={`relative ${testimonial.bgColor} overflow-hidden`}>
                {/* Stats Badge */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full shadow-sm z-10">
                  <span className="text-[#002074] font-bold text-sm">{testimonial.stat}</span>
                </div>
                
                {/* Portrait Frame */}
                <div className="w-full pt-[120%] relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center p-6">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="
                        w-full
                        h-full
                        object-cover
                        object-center
                        rounded-xl
                        transition-transform duration-500 
                        group-hover:scale-105
                      "
                    />
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="flex-1 p-6 flex flex-col">
                {/* Name & Rating */}
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="text-[#002074] text-lg font-bold">
                      {testimonial.name}
                    </h3>
                    <p className="text-gray-500 text-sm mt-1">
                      {testimonial.role}
                    </p>
                  </div>
                  
                  {/* Stars */}
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <span 
                        key={i} 
                        className={`text-lg ${
                          i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'
                        }`}
                      >
                        ★
                      </span>
                    ))}
                  </div>
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-600 text-sm leading-relaxed flex-1 mb-4">
                  {testimonial.content}
                </p>

                {/* Verified Badge */}
                <div className="pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="text-gray-500 text-xs">Verified Customer</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Scroll Hint for Mobile */}
        <div className="text-center md:hidden mb-8">
          <p className="text-gray-500 text-sm">
            ← Scroll to see more testimonials →
          </p>
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-[#002074]/5 to-[#9BCDD2]/10 rounded-2xl p-8 md:p-10 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-[#002074] mb-2">4.8/5</div>
              <p className="text-gray-600">Average Customer Rating</p>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-[#002074] mb-2">10K+</div>
              <p className="text-gray-600">Successful Transformations</p>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-[#002074] mb-2">98%</div>
              <p className="text-gray-600">Would Recommend to a Friend</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <p className="text-gray-600 text-lg mb-6">
            Ready to start your own success story?
          </p>
          <Link href="/quiz">
          <button className="
            bg-[#002074] 
            hover:bg-[#001a5c] 
            text-white 
            font-semibold 
            text-lg 
            py-3 
            px-8 
            rounded-lg 
            shadow-md 
            transition-colors 
            cursor-pointer
          ">
            Start Your Free Quiz
          </button>
          </Link>
          
          <p className="text-gray-500 text-sm mt-4 max-w-md mx-auto">
            Join thousands who've transformed their health with our evidence-based approach.
          </p>
        </div>
      </div>
    </div>
  );
}