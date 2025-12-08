"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import CustomDropdown from "@/components/CustomDropdown";
import { useRouter } from "next/navigation";

export default function ContactPage() {
  const [status, setStatus] = useState("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const router = useRouter();

  // Subject options for custom dropdown
  const subjectOptions = [
    "General question",
    "Eligibility or safety",
    "Billing or plan change",
    "Technical support",
    "Partnership inquiries",
    "Feedback"
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubjectChange = (value) => {
    setFormData(prev => ({ ...prev, subject: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.subject) {
      alert("Please select a subject");
      return;
    }
    
    setStatus("sending");

    setTimeout(() => {
      setStatus("sent");
      setTimeout(() => {
        setStatus("idle");
        setFormData({ name: "", email: "", subject: "", message: "" });
      }, 2000);
    }, 1000);
  };

  const handleFAQClick = () => {
    router.push("/faq");
  };

  return (
    <div className="min-h-screen bg-[#F7FAFF] text-[#0D4F8B] pb-12">
      
      {/* HEADER - Made more compact for mobile */}
      <div className="mx-auto max-w-6xl px-4 pt-8 sm:pt-12 pb-6 sm:pb-8">
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#BFD6F2] bg-[#E9F3FF] mb-4"
        >
          <div className="h-1.5 w-1.5 rounded-full bg-[#4CAF6A]" />
          <span className="text-xs font-medium">Contact Support</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight"
        >
          Contact the Fityou team
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mt-2 sm:mt-3 max-w-2xl text-sm md:text-base text-[#375C7A]"
        >
          Questions about eligibility, routines, or how Fityou works alongside 
          professional care? Our team responds within 1–2 working days.
        </motion.p>
      </div>

      {/* MAIN CONTENT - Reordered for mobile */}
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-col lg:flex-row gap-6">
          
          {/* FORM - Comes first on mobile */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full lg:w-2/3"
          >
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl sm:rounded-3xl border border-[#D3E1F4] bg-white p-4 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="block text-xs font-semibold text-[#0D4F8B] mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl border border-[#D3E1F4] bg-[#F8FAFF] px-4 py-3 text-base text-[#0D4F8B] outline-none focus:border-[#0D4F8B] focus:ring-2 focus:ring-[#E9F3FF] transition-all duration-200 placeholder:text-[#8FA4C0]"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#0D4F8B] mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl border border-[#D3E1F4] bg-[#F8FAFF] px-4 py-3 text-base text-[#0D4F8B] outline-none focus:border-[#0D4F8B] focus:ring-2 focus:ring-[#E9F3FF] transition-all duration-200 placeholder:text-[#8FA4C0]"
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              <div className="mt-4">
                <label className="block text-xs font-semibold text-[#0D4F8B] mb-2">
                  What do you want to talk about?
                </label>
                <CustomDropdown
                  label="Subject"
                  value={formData.subject}
                  placeholder="Select a topic"
                  options={subjectOptions}
                  onChange={handleSubjectChange}
                />
                {!formData.subject && status === "idle" && (
                  <p className="mt-1 text-xs text-red-500">Please select a topic</p>
                )}
              </div>

              <div className="mt-4">
                <label className="block text-xs font-semibold text-[#0D4F8B] mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full rounded-xl border border-[#D3E1F4] bg-[#F8FAFF] px-4 py-3 text-base text-[#0D4F8B] outline-none focus:border-[#0D4F8B] focus:ring-2 focus:ring-[#E9F3FF] transition-all duration-200 resize-none placeholder:text-[#8FA4C0]"
                  placeholder="Tell us about your question or concern..."
                />
              </div>

              <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-xs text-[#60738C] w-full sm:w-auto">
                  <p>We'll get back to you within 1-2 business days</p>
                </div>
                
                <motion.button
                  type="submit"
                  disabled={status !== "idle"}
                  whileHover={{ scale: status === "idle" ? 1.02 : 1 }}
                  whileTap={{ scale: status === "idle" ? 0.98 : 1 }}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-[#0D4F8B] px-6 py-3 text-sm font-semibold text-white hover:bg-[#0A3E70] disabled:opacity-70 disabled:cursor-not-allowed transition-all duration-200 shadow-sm hover:shadow"
                >
                  {status === "idle" && (
                    <>
                      <span>Send message</span>
                      <span className="text-lg">→</span>
                    </>
                  )}
                  {status === "sending" && (
                    <>
                      <motion.span
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
                      />
                      Sending...
                    </>
                  )}
                  {status === "sent" && (
                    <>
                      <span className="text-lg">✓</span>
                      Message sent!
                    </>
                  )}
                </motion.button>
              </div>

              {/* Success Message */}
              {status === "sent" && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  className="mt-4 p-3 rounded-xl bg-[#E7F6EC] border border-[#CBE9D5]"
                >
                  <p className="text-xs font-medium text-[#255C3E] flex items-center gap-2">
                    <span className="text-lg">✓</span>
                    Thank you! We've received your message and will respond soon.
                  </p>
                </motion.div>
              )}

              {/* Safety Notice */}
              <div className="mt-6 pt-4 border-t border-[#D3E1F4]">
                <div className="flex items-start gap-3">
                  <div className="text-[#856404] text-lg flex-shrink-0">⚠️</div>
                  <div>
                    <p className="text-xs font-semibold text-[#856404] mb-1">
                      Important Safety Notice
                    </p>
                    <p className="text-xs text-[#60738C]">
                      Fityou is not an emergency service. For urgent medical or mental
                      health needs, contact your local emergency services immediately.
                    </p>
                  </div>
                </div>
              </div>
            </form>

            {/* Additional Info - Only show on mobile */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 lg:hidden">
              <div className="rounded-2xl border border-[#CBE9D5] bg-[#E7F6EC] p-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-[#4CAF6A] flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm sm:text-lg">🔒</span>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-[#255C3E]">
                      Privacy protected
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-[#D3E1F4] bg-[#F8FAFF] p-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-[#0D4F8B] flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm sm:text-lg">📋</span>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-[#0D4F8B]">
                      Attachments welcome
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDEBAR - Shows only on desktop, cards show on mobile */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full lg:w-1/3 space-y-6 hidden lg:block"
          >
            {/* Response Time Card */}
            <div className="rounded-2xl border border-[#D3E1F4] bg-white p-5 shadow-sm">
              <div className="flex items-start gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#E9F3FF] flex items-center justify-center flex-shrink-0">
                  <div className="text-[#0D4F8B] text-lg">⏱</div>
                </div>
                <div>
                  <h2 className="text-sm font-semibold text-[#0D4F8B]">
                    Response times
                  </h2>
                  <p className="text-xs text-[#375C7A]">
                    Usually within 24-48 hours
                  </p>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between text-xs">
                  <span className="text-[#60738C]">Current response rate</span>
                  <span className="font-medium text-[#4CAF6A]">94%</span>
                </div>
                <div className="h-1.5 bg-[#E9F3FF] rounded-full overflow-hidden">
                  <motion.div 
                    className="h-full bg-[#4CAF6A]"
                    initial={{ width: "0%" }}
                    animate={{ width: "94%" }}
                    transition={{ duration: 1.5, delay: 0.5 }}
                  />
                </div>
              </div>
            </div>

            {/* Help Topics Card */}
            <div className="rounded-2xl border border-[#D3E1F4] bg-white p-5 shadow-sm">
              <h2 className="text-sm font-semibold text-[#0D4F8B] mb-4">
                What we can help with
              </h2>
              
              <ul className="space-y-3">
                {[
                  "Programme guidance",
                  "Eligibility questions",
                  "Safety boundaries",
                  "Billing & subscriptions",
                  "Technical issues",
                  "Feedback & suggestions"
                ].map((item, index) => (
                  <motion.li 
                    key={item}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + (index * 0.05) }}
                    className="flex items-start gap-3 text-sm"
                  >
                    <div className="mt-0.5 h-1.5 w-1.5 rounded-full bg-[#4CAF6A] flex-shrink-0" />
                    <span className="text-[#375C7A]">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* FAQ CTA */}
            <div 
              onClick={handleFAQClick}
              className="rounded-2xl bg-gradient-to-br from-[#E9F3FF] to-[#F0F7FF] border border-[#BFD6F2] p-5 shadow-sm hover:shadow-md transition-shadow duration-200 cursor-pointer"
            >
              <h3 className="text-sm font-semibold text-[#0D4F8B] mb-3">
                Instant answers
              </h3>
              <p className="text-xs text-[#375C7A] mb-4">
                Many common questions are already answered in our FAQ.
              </p>
              <motion.button
                whileHover={{ x: 3 }}
                className="text-xs font-medium text-[#0D4F8B] hover:text-[#0A3E70] transition-colors flex items-center gap-1"
              >
                Browse FAQ 
                <span className="text-lg">→</span>
              </motion.button>
            </div>

            {/* Additional Info Cards - Only on desktop sidebar */}
            <div className="space-y-4">
              <div className="rounded-2xl border border-[#CBE9D5] bg-[#E7F6EC] p-5">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#4CAF6A] flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-lg">🔒</span>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-[#255C3E] mb-1">
                      Privacy protected
                    </p>
                    <p className="text-xs text-[#2F7A4A]">
                      All conversations are encrypted and confidential.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-[#D3E1F4] bg-[#F8FAFF] p-5">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#0D4F8B] flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-lg">📋</span>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-[#0D4F8B] mb-1">
                      Attachments welcome
                    </p>
                    <p className="text-xs text-[#375C7A]">
                      You can email us files if needed (PDF, images, etc.)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* MOBILE CARDS - Show info cards below form on mobile */}
      <div className="mx-auto max-w-6xl px-4 mt-8 lg:hidden">
        <div className="grid gap-4">
          {/* Response Time Card */}
          <div className="rounded-2xl border border-[#D3E1F4] bg-white p-4">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#E9F3FF] flex items-center justify-center flex-shrink-0">
                <div className="text-[#0D4F8B] text-lg">⏱</div>
              </div>
              <div>
                <h2 className="text-sm font-semibold text-[#0D4F8B]">
                  Response times
                </h2>
                <p className="text-xs text-[#375C7A]">
                  Usually within 24-48 hours
                </p>
              </div>
            </div>
            
            <div className="mt-3">
              <div className="flex justify-between text-xs mb-1">
                <span className="text-[#60738C]">Response rate</span>
                <span className="font-medium text-[#4CAF6A]">94%</span>
              </div>
              <div className="h-1.5 bg-[#E9F3FF] rounded-full overflow-hidden">
                <motion.div 
                  className="h-full bg-[#4CAF6A]"
                  initial={{ width: "0%" }}
                  animate={{ width: "94%" }}
                  transition={{ duration: 1.5, delay: 0.5 }}
                />
              </div>
            </div>
          </div>

          {/* Help Topics Card */}
          <div className="rounded-2xl border border-[#D3E1F4] bg-white p-4">
            <h2 className="text-sm font-semibold text-[#0D4F8B] mb-3">
              What we can help with
            </h2>
            
            <ul className="space-y-2">
              {[
                "Programme guidance",
                "Eligibility questions",
                "Safety boundaries",
                "Billing & subscriptions",
                "Technical issues",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm">
                  <div className="mt-0.5 h-1.5 w-1.5 rounded-full bg-[#4CAF6A] flex-shrink-0" />
                  <span className="text-[#375C7A] text-xs">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* FAQ CTA */}
          <div 
            onClick={handleFAQClick}
            className="rounded-2xl bg-gradient-to-br from-[#E9F3FF] to-[#F0F7FF] border border-[#BFD6F2] p-4 cursor-pointer active:scale-[0.98] transition-transform"
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-sm font-semibold text-[#0D4F8B] mb-1">
                  Instant answers
                </h3>
                <p className="text-xs text-[#375C7A]">
                  Check our FAQ for common questions
                </p>
              </div>
              <span className="text-lg text-[#0D4F8B]">→</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}