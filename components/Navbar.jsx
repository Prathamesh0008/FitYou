"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useAuth } from "@/components/AuthProvider";
import { useState, useEffect } from "react";

// MODALS
import LoginModal from "./LoginModal";
import OtpModal from "@/components/OtpModal";

import SuccessModal from "./SuccessModal";

// ICONS
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
  Image as ImageIcon,
  MessageCircle,
  Stethoscope,
  Gift,
  MapPin,
  Bell,
} from "lucide-react";

/* ---------------------------------------------
   MAIN WEBSITE NAVIGATION LINKS
--------------------------------------------- */
const navLinks = [
  { href: "/program", label: "FitYou Programme", icon: Compass },
  { href: "/how-it-works", label: "How our service works", icon: Cog },
  { href: "/faq", label: "FAQs", icon: HelpCircle },
  { href: "/glp1-science", label: "Science of GLP-1", icon: FlaskRound },
  { href: "/health-guide", label: "Health guide", icon: BookOpen },
  { href: "/pricing", label: "Pricing", icon: HelpCircle },
  { href: "/contact", label: "Contact", icon: BookOpen },
];

/* ---------------------------------------------
   PROFILE MENU LINKS
--------------------------------------------- */
const profileMenu = [
  { key: "upcoming", label: "Upcoming shipment", icon: Package },
  { key: "completed", label: "Completed shipments", icon: CheckCircle },
  { key: "diary", label: "Weight loss diary + images", icon: ImageIcon },
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

  /* ------------------------------
     OPEN OTP EVENT LISTENER - UPDATED
  ------------------------------ */
useEffect(() => {
  const handler = (e) => {
    console.log("🔔 open-otp event received:", e.detail);

    // Get phone from event or localStorage
    const phone = e.detail?.phone || localStorage.getItem("fityou_phone");

    if (phone) {
      console.log("✅ Opening OTP modal for phone:", phone);

      // Close login modal
      setLoginOpen(false);

      // Open OTP modal after transition
      setTimeout(() => {
        setOtpOpen(true);

        // Send phone to OtpModal
        window.dispatchEvent(
          new CustomEvent("otp-phone", {
            detail: { phone },
          })
        );
      }, 150);
    } else {
      console.error("❌ No valid phone found for OTP modal");
      alert("Phone number not found. Please login again.");
    }
  };

  window.addEventListener("open-otp", handler);
  return () => window.removeEventListener("open-otp", handler);
}, []);


  /* ------------------------------
     OTP SUCCESS EVENT LISTENER
  ------------------------------ */
  useEffect(() => {
    const handler = () => {
      console.log("🎉 OTP success event received");
      setOtpOpen(false);
      setSuccessOpen(true);
      
      setTimeout(() => {
        setSuccessOpen(false);
        router.push("/");
      }, 1200);
    };
    
    window.addEventListener("otp-success", handler);
    return () => window.removeEventListener("otp-success", handler);
  }, [router]);

  /* ------------------------------
     OPEN LOGIN FROM OTHER PAGES
  ------------------------------ */
  useEffect(() => {
    const handler = () => {
      console.log("🔓 open-login event received");
      setLoginOpen(true);
    };
    
    window.addEventListener("open-login", handler);
    return () => window.removeEventListener("open-login", handler);
  }, []);

  /* ------------------------------
     LOGOUT
  ------------------------------ */
 const handleLogout = () => {
  logout();

  // CLEAR PHONE-BASED LOGIN
  localStorage.removeItem("fityou_phone");
  sessionStorage.removeItem("fityou_phone");

  router.push("/");
  setOpen(false);
};


  return (
    <header className="sticky top-0 z-50 bg-[#F2F7FA] border-b border-[#E5E7EB] font-laila">
      <nav className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">

        {/* LOGO */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo/FY-Blue.svg"
            alt="FitYou Logo"
            width={135}
            height={50}
            className="object-contain -ml-2"
            priority
          />
        </Link>

        {/* RIGHT SIDE */}
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
         {user?.phone ? (
            <button onClick={() => router.push("/profile")}>
              <User2 className="w-6 h-6 text-[#0D4F8B]" />
            </button>
          ) : (
            <button onClick={() => setLoginOpen(true)}>
              <User2 className="w-6 h-6 text-[#0D4F8B]" />
            </button>
          )}

          {/* HAMBURGER */}
          <button
            onClick={() => setOpen(true)}
            className="p-2 rounded-md border border-[#D6E4FF]"
          >
            <Menu className="w-6 h-6 text-[#0D4F8B]" />
          </button>
        </div>
      </nav>

      {/* -----------------------------------------------------
         SLIDE–IN MENU
      ----------------------------------------------------- */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white z-[999] border-l border-[#E5E7EB]
        transition-transform duration-300 ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex justify-end px-6 py-6">
          <button onClick={() => setOpen(false)}>
            <X className="w-7 h-7 text-[#0D4F8B]" />
          </button>
        </div>

        {/* PROFILE MENU (only on /profile) */}
        {isProfilePage ? (
          <div className="flex flex-col px-6 space-y-6 mt-2">
            {profileMenu.map(({ key, label, icon: Icon }) => (
              <button
                key={key}
                onClick={() => {
                  window.dispatchEvent(
                    new CustomEvent("profile-tab-change", { detail: key })
                  );
                  setOpen(false);
                }}
                className="flex items-center gap-4 text-[16px] text-[#1A1A1A]/80 hover:text-[#0D4F8B]"
              >
                <Icon size={20} className="text-[#0D4F8B]" />
                {label}
              </button>
            ))}

           {user?.phone && (
  <button onClick={handleLogout} className="text-left text-red-500 mt-4">
    Logout
  </button>
)}

          </div>
        ) : (
          /* -----------------------------------------------------
             NORMAL NAVIGATION MENU
          ----------------------------------------------------- */
          <div className="flex flex-col px-6 space-y-6 mt-2">
            {navLinks.map(({ href, label, icon: Icon }) => {
              const active = pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setOpen(false)}
                  className={`flex items-center gap-4 text-[16px] font-medium transition ${
                    active
                      ? "text-[#0D4F8B]"
                      : "text-[#1A1A1A]/80 hover:text-[#0D4F8B]"
                  }`}
                >
                  <Icon size={22} className="text-[#0D4F8B]" />
                  {label}
                </Link>
              );
            })}
          </div>
        )}
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
      
      {/* Debug button (remove in production) */}
      {process.env.NODE_ENV === 'development' && (
        <button
          onClick={() => {
            const email = localStorage.getItem("fityou_email");
            alert(`Debug Info:\nEmail in storage: ${email || "NOT FOUND"}\nLogin Open: ${loginOpen}\nOTP Open: ${otpOpen}`);
          }}
          className="fixed bottom-4 right-4 bg-gray-800 text-white text-xs px-2 py-1 rounded"
        >
          Debug
        </button>
      )}
    </header>
  );
}