// FitYou\components\ambassador\HowToBecome.jsx
export default function HowToBecome() {
  const steps = [
    {
      icon: "📝",
      title: "Apply to join",
      desc: "Submit your details through our application form. Our team will review and respond soon.",
    },
    {
      icon: "💬",
      title: "Let's talk",
      desc: "We'll schedule a call to learn your ideas and discuss collaboration opportunities.",
    },
    {
      icon: "🤝",
      title: "The details",
      desc: "Then we finalize next steps, expectations, and begin working together.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#FDF7EF] px-4 sm:px-6">
      <div className="max-w-6xl mx-auto w-full">
        <div className="text-center mb-12 sm:mb-20">
          <div className="inline-block px-4 py-1.5 sm:px-6 sm:py-2 bg-[#AAC9D6] rounded-full text-[#002060] font-semibold text-sm sm:text-base mb-4 sm:mb-6">
            Simple Process
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#002060] mb-4 sm:mb-6">
            How do you become an ambassador?
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            It only takes three simple steps to join our ambassador program
          </p>
        </div>

        <div className="relative">
          <div className="grid lg:grid-cols-3 gap-8 sm:gap-12">
            {steps.map((s, index) => (
              <div key={index} className="relative">
                <div className={`bg-white border border-gray-200 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 text-center`}>
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-6 h-6 sm:w-8 sm:h-8 bg-[#002060] rounded-full flex items-center justify-center text-white font-bold text-xs sm:text-sm shadow-lg">
                    {index + 1}
                  </div>
                  
                  <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 rounded-2xl bg-[#FCE2C6] flex items-center justify-center text-3xl sm:text-4xl">
                    {s.icon}
                  </div>
                  
                  <h3 className="text-xl sm:text-2xl font-bold text-[#002060] mb-3 sm:mb-4">
                    {s.title}
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12 sm:mt-20">
          <p className="px-6 py-3 sm:px-8 sm:py-4 bg-white rounded-xl text-[#002060] font-semibold text-base sm:text-lg border border-gray-200">
            Average response time: <span className="text-[#004080] font-bold">24 hours</span>
          </p>
        </div>
      </div>
    </section>
  );
}