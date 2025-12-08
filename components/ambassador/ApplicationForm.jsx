// FitYou\components\ambassador\ApplicationForm.jsx
"use client";

import { useState } from "react";

export default function ApplicationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      alert("Application submitted successfully! We'll get back to you soon.");
    }, 1500);
  };

  return (
    <section className="py-10 sm:py-14 bg-white px-4 sm:px-6">
      <div className="max-w-3xl mx-auto w-full">
        
        {/* Heading */}
        <div className="text-center mb-10 sm:mb-12">
          <div className="inline-block px-4 py-1.5 bg-[#AAC9D6] rounded-full text-[#002060] font-medium text-sm mb-4">
            Get Started
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#002060] mb-3">
            Applications and enquiries
          </h2>

          <p className="text-base sm:text-lg text-gray-600 max-w-xl mx-auto">
            Fill the form below — we will get back to you within 48 hours.
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-2xl shadow-md p-6 sm:p-8 max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-5">

            {/* NAME */}
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-[#002060] mb-1.5 text-sm font-medium">
                  First Name *
                </label>
                <input
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg text-sm focus:ring-1 focus:ring-[#AAC9D6]"
                  placeholder="John"
                />
              </div>

              <div>
                <label className="block text-[#002060] mb-1.5 text-sm font-medium">
                  Last Name *
                </label>
                <input
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg text-sm focus:ring-1 focus:ring-[#AAC9D6]"
                  placeholder="Doe"
                />
              </div>
            </div>

            {/* EMAIL */}
            <div>
              <label className="block text-[#002060] mb-1.5 text-sm font-medium">
                Email Address *
              </label>
              <input
                required
                type="email"
                className="w-full p-3 border border-gray-300 rounded-lg text-sm focus:ring-1 focus:ring-[#AAC9D6]"
                placeholder="john@example.com"
              />
            </div>

            {/* SOCIAL ROW 1 */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[#002060] mb-1.5 text-sm font-medium">
                  Instagram Profile
                </label>
                <input
                  type="url"
                  className="w-full p-3 border border-gray-300 rounded-lg text-sm focus:ring-1 focus:ring-[#AAC9D6]"
                  placeholder="https://instagram.com/yourprofile"
                />
              </div>

              <div>
                <label className="block text-[#002060] mb-1.5 text-sm font-medium">
                  YouTube Channel
                </label>
                <input
                  type="url"
                  className="w-full p-3 border border-gray-300 rounded-lg text-sm focus:ring-1 focus:ring-[#AAC9D6]"
                  placeholder="https://youtube.com/yourchannel"
                />
              </div>
            </div>

            {/* SOCIAL ROW 2 */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[#002060] mb-1.5 text-sm font-medium">
                  Facebook Profile
                </label>
                <input
                  type="url"
                  className="w-full p-3 border border-gray-300 rounded-lg text-sm focus:ring-1 focus:ring-[#AAC9D6]"
                  placeholder="https://facebook.com/yourprofile"
                />
              </div>

              <div>
                <label className="block text-[#002060] mb-1.5 text-sm font-medium">
                  Twitter/X Profile
                </label>
                <input
                  type="url"
                  className="w-full p-3 border border-gray-300 rounded-lg text-sm focus:ring-1 focus:ring-[#AAC9D6]"
                  placeholder="https://twitter.com/yourprofile"
                />
              </div>
            </div>

            {/* MESSAGE */}
            <div>
              <label className="block text-[#002060] mb-1.5 text-sm font-medium">
                Your Message *
              </label>
              <textarea
                required
                rows={4}
                className="w-full p-3 border border-gray-300 rounded-lg text-sm focus:ring-1 focus:ring-[#AAC9D6] resize-none"
                placeholder="Tell us about yourself, your journey, and why you want to become a FitYou ambassador..."
              ></textarea>
            </div>

            {/* SUBMIT */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 bg-[#002060] text-white rounded-lg font-medium text-base hover:bg-[#001a4d] transition disabled:opacity-60"
            >
              {isSubmitting ? "Submitting..." : "Submit Application"}
            </button>
          </form>

          {/* FOOT NOTE */}
          <div className="mt-6 text-center border-t border-gray-200 pt-5">
            <p className="text-gray-600 text-xs sm:text-sm">
              Thank you for your interest — our team replies quickly.
            </p>

            <div className="flex items-center justify-center gap-2 mt-4 text-gray-500 text-xs">
              <span>✓ 24/7 Support</span>
              <span>•</span>
              <span>✓ Fast Response</span>
              <span>•</span>
              <span>✓ Community Access</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}