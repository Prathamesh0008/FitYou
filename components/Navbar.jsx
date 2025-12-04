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
  Package,
  CheckCircle,
  Image,
  MessageCircle,
  Stethoscope,
  Gift,
  MapPin,
  Bell,
  LogOut,
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

// PROFILE MENU ITEMS
const profileMenu = [
  { key: "upcoming", label: "Upcoming shipment", icon: Package },
  { key: "completed", label: "Completed shipments", icon: CheckCircle },
  { key: "diary", label: "Weight loss diary + images", icon: Image },
  { key: "messages", label: "Message centre", icon: MessageCircle },
  { key: "consultation", label: "Medical consultation", icon: Stethoscope },
  { key: "subscription", label: "My subscription", icon: Gift },
  { key: "benefits", label: "My membership benefits", icon: Gift },
  { key: "personal", label: "Personal details", icon: User2 },
  { key: "address", label: "Delivery address", icon: MapPin },
  { key: "notifications", label: "Notifications", icon: Bell },
];

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const { user, logout } = useAuth();

  const [open, setOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [otpOpen, setOtpOpen] = useState(false);
  const [successOpen, setSuccessOpen] = useState(false);

  const isProfilePage = pathname === "/profile";

  // OPEN OTP ON EVENT
  useEffect(() => {
    const handler = () => setTimeout(() => setOtpOpen(true), 50);
    window.addEventListener("open-otp", handler);
    return () => window.removeEventListener("open-otp", handler);
  }, []);

  // OTP SUCCESS → SHOW TICK
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

        {/* RIGHT BUTTONS */}
        <div className="flex items-center gap-4">
          {!isProfilePage && (
            <Link
              href="/quiz"
              className="hidden sm:block rounded-lg bg-[#FFD49C] hover:bg-[#FFC982] 
                px-4 py-1.5 text-sm font-semibold text-[#1A1A1A] transition"
            >
              Do I qualify?
            </Link>
          )}

          {/* USER ICON */}
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
        className={`fixed top-0 right-0 h-full w-80 bg-white z-[999] border-l border-[#E5E7EB]
        transition-transform duration-300 ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex justify-end px-6 py-6">
          <button onClick={() => setOpen(false)}>
            <X className="w-7 h-7 text-[#0D4F8B]" />
          </button>
          
        </div>

        {/* ----------- PROFILE MENU (ONLY ON /profile) ----------- */}
        {isProfilePage ? (
          <div className="flex flex-col px-6 space-y-6 mt-2">
            {profileMenu.map(({ key, label, icon: Icon }) => (
              <button
                key={key}
                onClick={() => {
                  window.dispatchEvent(new CustomEvent("profile-tab-change", { detail: key }));
                  setOpen(false);
                }}
                className="flex items-center gap-4 text-[16px] text-[#1A1A1A]/80 hover:text-[#0D4F8B]"
              >
                <Icon size={20} className="text-[#0D4F8B]" />
                {label}
              </button>
            ))}

            {/* LOGOUT */}
            {user && (
              <button
                onClick={handleLogout}
                className="text-left text-red-500 mt-4"
              >
                Logout
              </button>
            )}
          </div>
        ) : (
          /* ----------- NORMAL WEBSITE MENU ----------- */
          <div className="flex flex-col px-6 space-y-6 mt-2">
            {navLinks.map(({ href, label, icon: Icon }) => {
              const active = pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setOpen(false)}
                  className={`flex items-center gap-4 text-[16px] font-medium transition ${
                    active ? "text-[#0D4F8B]" : "text-[#1A1A1A]/80 hover:text-[#0D4F8B]"
                  }`}
                >
                  <Icon size={22} className="text-[#0D4F8B]" />
                  {label}
                </Link>
              );
            })}

            {user && (
              <button
                onClick={handleLogout}
                className="text-left text-red-500 mt-4 font-bold cursor-pointer flex"
              >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6A2.25 2.25 0 0 0 5.25 5.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3-3h-9m9 0-3-3m3 3-3 3" />
  </svg>
                
              <span>Logout</span>  
              </button>
            )}
          </div>
        )}
      </div>

      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/20 z-[998]"
        />
      )}

      <LoginModal open={loginOpen} onClose={() => setLoginOpen(false)} />
      <OtpModal open={otpOpen} onClose={() => setOtpOpen(false)} />
      <SuccessModal open={successOpen} />
    </header>
  );
}
