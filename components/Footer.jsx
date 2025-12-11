"use client";

import Link from "next/link";
import { Facebook, Instagram, Youtube, Linkedin, ArrowUp } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#F7FAFC] border-t border-[#E2E8F0] font-laila mt-0">

      {/* Wrapper for top content */}
      <div className="max-w-7xl mx-auto px-6 py-14 relative">

        {/* ================= BACK TO TOP BUTTON (TOP RIGHT) ================= */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="absolute top-2 right-0 flex flex-col items-center translate-y-[-50%]"
        >
          <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#2B6CB0] border border-[#CBD5E0] shadow-sm">
            <ArrowUp className="w-4 h-4 text-white" />
          </div>
          <span className="text-[11px] text-[#1A365D] mt-1">To top</span>
        </button>

        {/* ================= TOP GRID ================= */}
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">

          {/* Column 1 */}
          <div>
            <h3 className="text-[#1A365D] font-semibold text-[18px] mb-4">
              FitYou
            </h3>
            <ul className="space-y-2 text-[14px] text-[#2C5282]">
              <li><Link href="/about" className="hover:text-[#2B6CB0]">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-[#2B6CB0]">Contact</Link></li>
              <li><Link href="/how-it-works" className="hover:text-[#2B6CB0]">How it Works</Link></li>
              <li><Link href="/health-guide" className="hover:text-[#2B6CB0]">Health Guide</Link></li>
              {/* NEW LINKS */}
              <li><Link href="/ambassador" className="hover:text-[#2B6CB0]">Become an ambassador</Link></li>
              <li><Link href="/partner" className="hover:text-[#2B6CB0]">Become a partner</Link></li>
              <li><Link href="/our-partners" className="hover:text-[#2B6CB0]">Our partners</Link></li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="text-[#1A365D] font-semibold text-[18px] mb-4">
              Program
            </h3>
            <ul className="space-y-2 text-[14px] text-[#2C5282]">
              <li><Link href="/program" className="hover:text-[#2B6CB0]">FitYou Program</Link></li>
              <li><Link href="/glp1-science" className="hover:text-[#2B6CB0]">GLP-1 Science</Link></li>
              <li><Link href="/faq" className="hover:text-[#2B6CB0]">FAQ</Link></li>
              {/* <li><Link href="/program/benefits" className="hover:text-[#2B6CB0]">Benefits</Link></li> */}
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="text-[#1A365D] font-semibold text-[18px] mb-4">
              Legal
            </h3>
            <ul className="space-y-2 text-[14px] text-[#2C5282]">
              <li><Link href="/terms" className="hover:text-[#2B6CB0]">Terms & Conditions</Link></li>
              <li><Link href="/privacy" className="hover:text-[#2B6CB0]">Privacy Policy</Link></li>
              <li><Link href="/refunds" className="hover:text-[#2B6CB0]">Refund Policy</Link></li>
              {/* <li><Link href="/safety" className="hover:text-[#2B6CB0]">Safety Guidelines</Link></li> */}
              <li><Link href="/patient-responsibility" className="hover:text-[#2B6CB0]">Health patient</Link></li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h3 className="text-[#1A365D] font-semibold text-[18px] mb-4">
              Connect
            </h3>
            <div className="flex gap-4 mb-4">
              <Facebook className="text-[#2B6CB0] w-5 h-5 cursor-pointer" />
              <Instagram className="text-[#2B6CB0] w-5 h-5 cursor-pointer" />
              <Youtube className="text-[#2B6CB0] w-5 h-5 cursor-pointer" />
              <Linkedin className="text-[#2B6CB0] w-5 h-5 cursor-pointer" />
            </div>
            
            {/* Newsletter Signup */}
            <div>
              <p className="text-sm text-[#4A5568] mb-3">
                Get our discounts and news in your inbox
              </p>
              <input
                type="email"
                placeholder="Enter your email address*"
                className="w-full rounded-md border border-[#CBD5E0] px-4 py-2 text-sm outline-none focus:border-[#2B6CB0] mb-2"
              />
              <button className="w-full bg-[#A7D3DF] hover:bg-[#93c6d3] text-[#1A365D] py-2 rounded-md font-semibold transition">
                Sign up
              </button>
            </div>
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
                className="h-12 w-auto object-contain filter grayscale opacity-70 hover:filter-none" 
              />
            </div>
            <div className="h-12 relative w-auto">
              <img 
                src="/payments/mastercard.png" 
                alt="Mastercard" 
                className="h-12 w-auto object-contain filter grayscale opacity-70 hover:filter-none" 
              />
            </div>
            <div className="h-12 relative w-auto">
              <img 
                src="/payments/amex.png" 
                alt="American Express" 
                className="h-12 w-auto object-contain filter grayscale opacity-70 hover:filter-none" 
              />
            </div>
            <div className="h-12 relative w-auto">
              <img 
                src="/payments/paypal.png" 
                alt="PayPal" 
                className="h-12 w-auto object-contain filter grayscale opacity-70 hover:filter-none" 
              />
            </div>
            <div className="h-12 relative w-auto">
              <img 
                src="/payments/apple-pay.png" 
                alt="Apple Pay" 
                className="h-12 w-auto object-contain filter grayscale opacity-70 hover:filter-none" 
              />
            </div>
            <div className="h-12 relative w-auto">
              <img 
                src="/payments/google-pay.png" 
                alt="Google Pay" 
                className="h-12 w-auto object-contain filter grayscale opacity-70 hover:filter-none" 
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

      </div>
    </footer>
  );
}