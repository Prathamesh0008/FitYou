"use client";

import { useState, useRef, useEffect } from "react";
import { 
  Send, 
  CheckCircle, 
  Clock, 
  HelpCircle, 
  Mail,
  User,
  MessageSquare,
  ChevronRight,
  ChevronDown
} from "lucide-react";

export default function ContactPage() {
  const [status, setStatus] = useState("idle");
  const [selectedTopic, setSelectedTopic] = useState("General question");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const topics = [
    "General question",
    "Eligibility or safety",
    "Billing or plan change",
    "Technical support",
    "Programme feedback",
    "Account issues"
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");

    setTimeout(() => {
      setStatus("sent");
      setTimeout(() => setStatus("idle"), 2500);
    }, 1200);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const infoCards = [
    {
      icon: <Mail className="w-5 h-5" />,
      title: "Email Support",
      content: (
        <div className="space-y-2">
          <a 
            href="mailto:help@fityou.in" 
            className="block text-[#0D4F8B] hover:text-[#3A86FF] transition-colors font-medium text-sm"
          >
            help@fityou.in
          </a>
          <a 
            href="mailto:support@fityou.in" 
            className="block text-[#0D4F8B] hover:text-[#3A86FF] transition-colors font-medium text-sm"
          >
            support@fityou.in
          </a>
        </div>
      ),
      bgColor: "bg-gradient-to-br from-[#F0F7FF] to-[#E6F0FF]",
      borderColor: "border-[#D3E1F4]"
    },
    {
      icon: <Clock className="w-5 h-5" />,
      title: "Response Time",
      content: <span className="text-2xl font-bold text-[#0D4F8B]">24–48 hours</span>,
      subContent: "Usually within 1 business day",
      bgColor: "bg-gradient-to-br from-[#F0F9FF] to-[#E6F4FF]",
      borderColor: "border-[#D3E1F4]"
    },
    {
      icon: <HelpCircle className="w-5 h-5" />,
      title: "Support Topics",
      content: (
        <ul className="space-y-2 mt-1">
          {["Programme support", "Eligibility questions", "Billing assistance"].map((item, idx) => (
            <li key={idx} className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-[#3A86FF] flex-shrink-0"></div>
              <span className="text-sm">{item}</span>
            </li>
          ))}
        </ul>
      ),
      bgColor: "bg-gradient-to-br from-[#F7F2FF] to-[#F0E6FF]",
      borderColor: "border-[#D3E1F4]"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F7FAFF] to-white text-[#0D4F8B] font-laila pb-20">
      
      {/* ENHANCED HEADER */}
      <div className="relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:` url("data:image/svg+xml,%3Csvg width='20' height='20' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='grid' width='20' height='20' patternUnits='userSpaceOnUse'%3E%3Cpath d='M 20 0 L 0 0 0 20' fill='none' stroke='%23D3E1F4' stroke-width='0.5'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23grid)'/%3E%3C/svg%3E")`,
            backgroundSize: '20px 20px'
          }}
        />
        
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 pt-12 md:pt-16 pb-8 md:pb-12">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-2 h-8 bg-gradient-to-b from-[#3A86FF] to-[#0D4F8B] rounded-full"></div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
              Contact the Fityou team
            </h1>
          </div>
          
          <div className="max-w-2xl">
            <p className="text-base md:text-lg text-[#375C7A] mt-2 leading-relaxed">
              Questions about eligibility, routines, or how Fityou works alongside 
              professional care? Our team responds within{" "}
              <span className="font-semibold text-[#0D4F8B]">1–2 working days</span>.
            </p>
            
            <div className="flex flex-wrap items-center gap-3 md:gap-4 mt-6 text-sm">
              <div className="flex items-center gap-2 px-3 py-1.5 bg-white/50 backdrop-blur-sm rounded-full border border-[#D3E1F4]">
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                <span className="text-[#375C7A] text-xs md:text-sm">Online support</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 bg-white/50 backdrop-blur-sm rounded-full border border-[#D3E1F4]">
                <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                <span className="text-[#375C7A] text-xs md:text-sm">24-48h response</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 bg-white/50 backdrop-blur-sm rounded-full border border-[#D3E1F4]">
                <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                <span className="text-[#375C7A] text-xs md:text-sm">Secure & private</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* MAIN CONTENT - FORM AT THE TOP */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* FORM SECTION - NOW AT THE TOP */}
        <div className="mb-12">
          <div className="rounded-2xl border border-[#D3E1F4] bg-white shadow-lg overflow-hidden">
            
            {/* Form Header */}
            <div className="border-b border-[#D3E1F4] bg-gradient-to-r from-[#F8FAFF] to-[#F0F7FF] px-5 md:px-8 py-5 md:py-6">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-[#0D4F8B] rounded-lg">
                  <MessageSquare className="w-4 h-4 md:w-5 md:h-5 text-white" />
                </div>
                <div>
                  <h2 className="text-lg md:text-xl font-bold text-[#0D4F8B]">
                    Send us a message
                  </h2>
                  <p className="text-xs md:text-sm text-[#375C7A] mt-1">
                    We'll get back to you as soon as possible
                  </p>
                </div>
              </div>
            </div>

            {/* Form Content */}
            <form onSubmit={handleSubmit} className="p-5 md:p-8 space-y-5 md:space-y-6">
              
              {/* Name & Email */}
              <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                <div>
                  <label className="flex items-center gap-2 text-xs font-semibold text-[#0D4F8B] mb-2 md:mb-3">
                    <User className="w-3 h-3 md:w-4 md:h-4" />
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full rounded-xl border border-[#D3E1F4] bg-[#F8FAFF] px-4 py-3 text-sm outline-none focus:border-[#3A86FF] focus:ring-2 focus:ring-[#3A86FF]/20 transition-all"
                    placeholder="Enter your full name"
                  />
                </div>
                
                <div>
                  <label className="flex items-center gap-2 text-xs font-semibold text-[#0D4F8B] mb-2 md:mb-3">
                    <Mail className="w-3 h-3 md:w-4 md:h-4" />
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full rounded-xl border border-[#D3E1F4] bg-[#F8FAFF] px-4 py-3 text-sm outline-none focus:border-[#3A86FF] focus:ring-2 focus:ring-[#3A86FF]/20 transition-all"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              {/* Custom Dropdown */}
              <div ref={dropdownRef} className="relative">
                <label className="block text-xs font-semibold text-[#0D4F8B] mb-2 md:mb-3">
                  What do you want to talk about?
                </label>
                
                {/* Dropdown Button */}
                <button
                  type="button"
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="w-full rounded-xl border border-[#D3E1F4] bg-[#F8FAFF] px-4 py-3 text-sm outline-none focus:border-[#3A86FF] focus:ring-2 focus:ring-[#3A86FF]/20 transition-all flex items-center justify-between"
                >
                  <span className="text-[#0D4F8B]">{selectedTopic}</span>
                  <ChevronDown className={`w-4 h-4 text-[#375C7A] transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {/* Dropdown Menu */}
                {dropdownOpen && (
                  <div className="absolute z-50 mt-1 w-full rounded-xl border border-[#D3E1F4] bg-white shadow-lg max-h-60 overflow-y-auto">
                    {topics.map((topic, index) => (
                      <button
                        key={index}
                        type="button"
                        onClick={() => {
                          setSelectedTopic(topic);
                          setDropdownOpen(false);
                        }}
                        className={`w-full px-4 py-3 text-left text-sm transition-all hover:bg-[#F8FAFF] ${
                          selectedTopic === topic 
                            ? 'bg-[#F0F7FF] text-[#0D4F8B] font-semibold' 
                            : 'text-[#375C7A]'
                        } ${index === 0 ? 'rounded-t-xl' : ''} ${index === topics.length - 1 ? 'rounded-b-xl' : ''}`}
                      >
                        {topic}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-semibold text-[#0D4F8B] mb-2 md:mb-3">
                  Your Message
                </label>
                <textarea
                  required
                  rows={4}
                  className="w-full rounded-xl border border-[#D3E1F4] bg-[#F8FAFF] px-4 py-3 text-sm outline-none focus:border-[#3A86FF] focus:ring-2 focus:ring-[#3A86FF]/20 transition-all resize-none min-h-[120px] md:min-h-[150px]"
                  placeholder="Share details you're comfortable with. Avoid sensitive medical info..."
                />
                <div className="flex justify-between items-center mt-2">
                  <p className="text-xs text-[#60738C]">
                    Character limit: 1000 characters
                  </p>
                  <div className="text-xs text-[#60738C]">
                    <span className="text-[#0D4F8B] font-semibold">0</span>/1000
                  </div>
                </div>
              </div>

              {/* Attachment */}
              <div>
                <label className="block text-xs font-semibold text-[#0D4F8B] mb-2 md:mb-3">
                  Attachments (Optional)
                </label>
                <div className="border-2 border-dashed border-[#D3E1F4] rounded-xl bg-[#F8FAFF] p-4 text-center hover:border-[#3A86FF] transition-colors cursor-pointer">
                  <div className="text-[#375C7A]">
                    <Mail className="w-5 h-5 mx-auto mb-2 text-[#0D4F8B]" />
                    <p className="text-xs">Click to upload files or drag and drop</p>
                    <p className="text-[10px] text-[#60738C] mt-1">Maximum file size: 10MB</p>
                  </div>
                </div>
              </div>

              {/* Submit Button & Disclaimer */}
              <div className="pt-4 md:pt-6">
                <button
                  type="submit"
                  disabled={status !== "idle"}
                  className="group relative inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#0D4F8B] to-[#1C6EBA] px-6 md:px-8 py-3 text-sm font-semibold text-white hover:shadow-lg transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed w-full md:w-auto"
                >
                  <span>
                    {status === "idle" && "Send Message"}
                    {status === "sending" && "Sending..."}
                    {status === "sent" && "Message Sent"}
                  </span>
                  <div className="transition-transform group-hover:translate-x-1">
                    {status === "idle" && <Send className="w-4 h-4" />}
                    {status === "sending" && (
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    )}
                    {status === "sent" && <CheckCircle className="w-4 h-4" />}
                  </div>
                </button>
                
                <div className="mt-5 md:mt-6 text-xs text-[#60738C] leading-relaxed border-t border-[#D3E1F4] pt-4">
                  <p className="font-semibold text-[#0D4F8B] mb-1 text-sm">Important Notice:</p>
                  <p>
                    Fityou is not an emergency service. For urgent medical or mental
                    health needs, contact your local emergency services immediately.
                    All communications are secure and confidential.
                  </p>
                </div>
              </div>
            </form>
          </div>

          {/* Success Message */}
          {status === "sent" && (
            <div className="mt-6 animate-fade-in">
              <div className="flex items-center gap-3 rounded-xl border border-green-200 bg-green-50 px-4 py-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium text-green-800">
                    Message sent successfully!
                  </p>
                  <p className="text-xs text-green-600 mt-0.5">
                    We'll get back to you within 1-2 business days.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* INFO CARDS SECTION - BELOW THE FORM */}
        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
          
          {/* INFO CARDS */}
          <div className="lg:col-span-3">
            <div className="grid md:grid-cols-3 gap-6">
              {infoCards.map((card, index) => (
                <div 
                  key={index}
                  className={`${card.bgColor} rounded-2xl border ${card.borderColor} p-5 md:p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5`}
                >
                  <div className="flex items-start gap-4">
                    <div className="p-2.5 bg-white rounded-lg border border-[#D3E1F4] shadow-sm flex-shrink-0">
                      <div className="text-[#0D4F8B]">
                        {card.icon}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-[#0D4F8B] text-sm md:text-base mb-2">
                        {card.title}
                      </h3>
                      <div className="text-[#375C7A] text-xs md:text-sm">
                        {card.content}
                      </div>
                      {card.subContent && (
                        <p className="text-xs text-[#60738C] mt-2">
                          {card.subContent}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* ADDITIONAL CARDS BELOW */}
            <div className="grid lg:grid-cols-2 gap-6 mt-6">
              {/* Quick Tips Card */}
              <div className="rounded-2xl border border-[#D3E1F4] bg-white p-5 md:p-6 shadow-sm">
                <h3 className="font-semibold text-[#0D4F8B] text-sm md:text-base mb-3">
                  Quick Tips
                </h3>
                <ul className="space-y-3 text-xs md:text-sm text-[#375C7A]">
                  <li className="flex items-start gap-2">
                    <ChevronRight className="w-3 h-3 md:w-4 md:h-4 text-[#3A86FF] mt-0.5 flex-shrink-0" />
                    <span>Include your account email for faster help</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="w-3 h-3 md:w-4 md:h-4 text-[#3A86FF] mt-0.5 flex-shrink-0" />
                    <span>Attach screenshots if relevant</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="w-3 h-3 md:w-4 md:h-4 text-[#3A86FF] mt-0.5 flex-shrink-0" />
                    <span>Check spam folder if waiting</span>
                  </li>
                </ul>
              </div>

              {/* Contact Hours Card */}
              <div className="rounded-2xl border border-[#D3E1F4] bg-gradient-to-br from-[#F8FAFF] to-[#F0F7FF] p-5 md:p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <Clock className="w-4 h-4 md:w-5 md:h-5 text-[#0D4F8B]" />
                  <h3 className="font-semibold text-[#0D4F8B] text-sm md:text-base">Contact Hours</h3>
                </div>
                <div className="space-y-2 text-xs md:text-sm text-[#375C7A]">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span className="font-semibold text-[#0D4F8B]">9 AM - 6 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span className="font-semibold text-[#0D4F8B]">10 AM - 4 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span className="font-semibold text-[#0D4F8B]">Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-10 text-center">
          <p className="text-xs text-[#60738C] max-w-2xl mx-auto">
            For partnership inquiries or media requests, please email{" "}
            <a href="mailto:partnerships@fityou.in" className="text-[#0D4F8B] font-semibold hover:text-[#3A86FF] transition-colors">
              partnerships@fityou.in
            </a>
          </p>
        </div>
      </div>

      {/* Inline CSS for animations */}
      <style jsx global>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
        .animate-spin {
          animation: spin 1s linear infinite;
        }
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        
        /* Custom scrollbar for dropdown */
        .overflow-y-auto::-webkit-scrollbar {
          width: 6px;
        }
        .overflow-y-auto::-webkit-scrollbar-track {
          background: #F8FAFF;
          border-radius: 3px;
        }
        .overflow-y-auto::-webkit-scrollbar-thumb {
          background: #D3E1F4;
          border-radius: 3px;
        }
        .overflow-y-auto::-webkit-scrollbar-thumb:hover {
          background: #3A86FF;
        }
      `}</style>
    </div>
  );
}