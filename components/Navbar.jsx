"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useAuth } from "@/components/AuthProvider";
import { useState, useEffect } from "react";

import LoginModal from "./LoginModal";
import OtpModal from "./OtpModal";
import SuccessModal from "./SuccessModal";

import {
  Compass,
  Cog,
  HelpCircle,
  FlaskRound,
  BookOpen,
  User2,
  Menu,
  X,
} from "lucide-react";

const navLinks = [
  { href: "/program", label: "FitYou Programme", icon: Compass },
  { href: "/how-it-works", label: "How our service works", icon: Cog },
  { href: "/faq", label: "FAQs", icon: HelpCircle },
  { href: "/glp1-science", label: "Science of GLP-1", icon: FlaskRound },
  { href: "/health-guide", label: "Health guide", icon: BookOpen },
  { href: "/pricing", label: "Pricing", icon: HelpCircle },
  { href: "/contact", label: "Contact", icon: BookOpen },
];

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const { user, logout } = useAuth();

  const [open, setOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [otpOpen, setOtpOpen] = useState(false);
  const [successOpen, setSuccessOpen] = useState(false);

  // OPEN OTP ON EVENT
  useEffect(() => {
    const handler = () => {
      setTimeout(() => setOtpOpen(true), 50); // FIX: ensures modal always opens
    };
    window.addEventListener("open-otp", handler);
    return () => window.removeEventListener("open-otp", handler);
  }, []);

  // OTP SUCCESS → SHOW TICK → REDIRECT
  useEffect(() => {
    const handler = () => {
      setSuccessOpen(true);

      setTimeout(() => {
        setSuccessOpen(false);
        router.push("/");
      }, 1200);
    };

    window.addEventListener("otp-success", handler);
    return () => window.removeEventListener("otp-success", handler);
  }, []);

  const handleLogout = () => {
    logout();
    router.push("/");
    setOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-[#E5E7EB] font-laila">
      <nav className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
        
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-[#0D4F8B] text-white font-semibold">
            FY
          </div>

          <div className="flex flex-col">
            <span className="text-lg font-bold text-[#1A1A1A]">Fityou</span>
            <span className="text-[11px] tracking-[0.15em] uppercase text-[#6B7280]">
              Weight Management
            </span>
          </div>
        </Link>

        {/* RIGHT SIDE BUTTONS */}
        <div className="flex items-center gap-4">

          {/* CTA */}
          <Link
            href="/quiz"
            className="hidden sm:block rounded-lg bg-[#FFD49C] hover:bg-[#FFC982] 
              px-4 py-1.5 text-sm font-semibold text-[#1A1A1A] transition"
          >
            Do I qualify?
          </Link>

      {user ? (
  <button onClick={() => router.push("/profile")}>
    <User2 className="w-6 h-6 text-[#3A86FF]" />
  </button>
) : (
  <button onClick={() => setLoginOpen(true)}>
    <User2 className="w-6 h-6 text-[#3A86FF]" />
  </button>
)}


          {/* HAMBURGER */}
          <button
            onClick={() => setOpen(true)}
            className="p-2 rounded-md border border-[#D6E4FF]"
          >
            <Menu className="w-6 h-6 text-[#3A86FF]" />
          </button>
        </div>
      </nav>

      {/* SLIDE-IN MENU */}
      <div
        className={`fixed top-0 right-0 h-full w-82 bg-white z-[999] border-l border-[#E5E7EB]
          transition-transform duration-300 ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <div className="flex justify-end px-6 py-6">
          <button onClick={() => setOpen(false)}>
            <X className="w-7 h-7 text-[#0D4F8B]" />
          </button>
        </div>

        <div className="flex flex-col px-6 space-y-6 mt-2">
          {navLinks.map(({ href, label, icon: Icon }) => {
            const active = pathname === href;

            return (
              <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className={`flex items-center gap-4 text-[16px] font-medium transition
                  ${
                    active
                      ? "text-[#0D4F8B]"
                      : "text-[#1A1A1A]/80 hover:text-[#0D4F8B]"
                  }
                `}
              >
                <Icon size={22} strokeWidth={1.6} className="text-[#0D4F8B]" />
                {label}
              </Link>
            );
          })}
        </div>

        <div className="mt-10 mx-6 border-t border-[#E5E7EB]" />

        {/* SIDEBAR BOTTOM LINKS */}
<div className="flex flex-col px-6 mt-6 space-y-5 text-[16px] font-medium">

  {/* PROFILE BUTTON */}
  <button
    onClick={() => {
      if (!user) setLoginOpen(true);
      else router.push("/profile");
      setOpen(false);
    }}
    className="text-left text-[#0D4F8B]"
  >
    Your Profile
  </button>

  {/* LOGOUT BUTTON (ONLY WHEN LOGGED IN) */}
  {user && (
    <button
      onClick={() => {
        handleLogout();
        setOpen(false);
      }}
      className="text-left text-red-500"
    >
      Logout
    </button>
  )}

  {/* CONTACT */}
  <Link
    href="/contact"
    onClick={() => setOpen(false)}
    className="text-[#0D4F8B]"
  >
    Contact us
  </Link>
</div>

      </div>

      {/* BACKDROP */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/20 z-[998]"
        />
      )}

      {/* MODALS */}
      <LoginModal open={loginOpen} onClose={() => setLoginOpen(false)} />
      <OtpModal open={otpOpen} onClose={() => setOtpOpen(false)} />
      <SuccessModal open={successOpen} />
    </header>
  );
}
