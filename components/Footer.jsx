//FitYou\components\Footer.jsx
"use client";

import Link from "next/link";
import { Facebook, Instagram, Youtube, Linkedin, ArrowUp } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#F7FAFC] border-t border-[#E2E8F0] font-laila mt-0">
      <div className="max-w-7xl mx-auto px-6 py-14">
        
        {/* ================= TOP GRID ================= */}
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-5">

          {/* BRAND */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-semibold text-[#1A365D]">Fityou</h3>
            <p className="mt-3 text-sm text-[#4A5568] leading-relaxed">
              Smarter, medically-aware weight management — built around your
              health profile, not shortcuts.
            </p>

            {/* SOCIAL ICONS */}
            <div className="mt-5 flex items-center gap-3">
              {[Facebook, Instagram, Youtube, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="p-2 rounded-full border border-[#DCE7FB] hover:bg-[#EDF3FF] transition"
                >
                  <Icon className="h-5 w-5 text-[#2B6CB0]" />
                </a>
              ))}
            </div>
          </div>

          {/* EXPLORE */}
          <div>
            <h4 className="text-lg font-semibold text-[#1A365D]">Explore</h4>
            <ul className="mt-4 space-y-2 text-sm text-[#4A5568]">
              <li><Link href="/program" className="hover:text-[#2B6CB0]">Fityou Programme</Link></li>
              <li><Link href="/how-it-works" className="hover:text-[#2B6CB0]">How our service works</Link></li>
              <li><Link href="/glp1-science" className="hover:text-[#2B6CB0]">Science of GLP-1</Link></li>
              <li><Link href="/health-guide" className="hover:text-[#2B6CB0]">Health Guide</Link></li>
              <li><Link href="/faq" className="hover:text-[#2B6CB0]">FAQs</Link></li>

              {/* NEW LINKS */}
              <li><Link href="/ambassador" className="hover:text-[#2B6CB0]">Become an ambassador</Link></li>
              <li><Link href="/partner" className="hover:text-[#2B6CB0]">Become a partner</Link></li>
              <li><Link href="/our-partners" className="hover:text-[#2B6CB0]">Our partners</Link></li>

            </ul>
          </div>

          {/* LEGAL */}
          <div>
            <h4 className="text-lg font-semibold text-[#1A365D]">Legal</h4>
            <ul className="mt-4 space-y-2 text-sm text-[#4A5568]">
              <li><Link href="/terms" className="hover:text-[#2B6CB0]">Terms & Conditions</Link></li>
              <li><Link href="/privacy" className="hover:text-[#2B6CB0]">Privacy Policy</Link></li>
              <li><Link href="/safety" className="hover:text-[#2B6CB0]">Safety Guidelines</Link></li>
            </ul>
          </div>

          {/* SIGN UP SECTION */}
          <div>
            <h4 className="text-lg font-semibold text-[#1A365D]">Sign up</h4>
            <p className="mt-4 text-sm text-[#4A5568]">
              Get our discounts and news in your inbox
            </p>

            {/* INPUT BOX */}
            <input
              type="email"
              placeholder="Enter your email address*"
              className="mt-4 w-full rounded-md border border-[#CBD5E0] px-4 py-2 text-sm outline-none focus:border-[#2B6CB0]"
            />

            {/* SIGN UP BTN */}
            <button
              className="mt-4 w-full bg-[#A7D3DF] hover:bg-[#93c6d3] text-[#1A365D] py-2 rounded-md font-semibold transition"
            >
              Sign up
            </button>
          </div>

        </div>

        {/* ================= PAYMENT METHODS ================= */}
        <div className="mt-12 border-t border-[#E2E8F0] pt-8">
          <h4 className="text-sm font-semibold text-[#1A365D] mb-4">
            Accepted Payment Methods
          </h4>

          <div className="flex flex-wrap items-center gap-6">

            <div className="h-12 relative w-auto">
              <img 
                src="/payments/visa.png" 
                alt="Visa" 
                className="h-12 w-auto object-contain filter grayscale opacity-70" 
              />
            </div>

            <div className="h-12 relative w-auto">
              <img 
                src="/payments/mastercard.png" 
                alt="Mastercard" 
                className="h-12 w-auto object-contain filter grayscale opacity-70" 
              />
            </div>

            <div className="h-12 relative w-auto">
              <img 
                src="/payments/amex.png" 
                alt="American Express" 
                className="h-12 w-auto object-contain filter grayscale opacity-70" 
              />
            </div>

            <div className="h-12 relative w-auto">
              <img 
                src="/payments/paypal.png" 
                alt="PayPal" 
                className="h-12 w-auto object-contain filter grayscale opacity-70" 
              />
            </div>

            <div className="h-12 relative w-auto">
              <img 
                src="/payments/apple-pay.png" 
                alt="Apple Pay" 
                className="h-12 w-auto object-contain filter grayscale opacity-70" 
              />
            </div>

            <div className="h-12 relative w-auto">
              <img 
                src="/payments/google-pay.png" 
                alt="Google Pay" 
                className="h-12 w-auto object-contain filter grayscale opacity-70" 
              />
            </div>

          </div>
        </div>

        {/* ================= BOTTOM ROW ================= */}
        <div className="mt-10 border-t border-[#E2E8F0] pt-6 flex flex-col md:flex-row items-center justify-between">
          <p className="text-xs text-[#718096]">
            © {new Date().getFullYear()} Fityou. All rights reserved.
          </p>

          <Link
            href="/quiz"
            className="mt-4 md:mt-0 rounded-full bg-[#2B6CB0] px-6 py-2 text-xs 
            font-semibold text-white shadow-sm hover:bg-[#245A96] transition"
          >
            Do I qualify?
          </Link>
        </div>

        {/* ================= BACK TO TOP BUTTON ================= */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 z-50 bg-[#2B6CB0] hover:bg-[#245A96] text-white p-3 rounded-full shadow-lg transition-all duration-300"
          aria-label="Back to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>

      </div>
    </footer>
  );
}