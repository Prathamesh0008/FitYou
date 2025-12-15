// app/landing/LandingNavbar.jsx - Even simpler version
"use client";
import Link from "next/link";
import Image from "next/image";

const LandingNavbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white ">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* LOGO */}
        <Link href="/">
          <Image
            src="/logo/FY-Blue.svg"
            alt="Fityou"
            width={120}
            height={45}
            priority
          />
        </Link>

        {/* QUALIFY BUTTON */}
        <Link
          href="/quiz"
          className="bg-[#FFD49C] hover:bg-[#FFC982] text-[#1A1A1A] font-semibold px-5 py-2 rounded-lg text-sm"
        >
          Do I qualify?
        </Link>
      </div>
    </nav>
  );
};

export default LandingNavbar;