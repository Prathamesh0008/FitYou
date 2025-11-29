"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Splash() {
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setHide(true), 1000); // visible for 2 seconds
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`
        fixed inset-0 z-[9999] flex items-center justify-center 
        transition-all duration-700 ease-out
        ${hide ? "opacity-0 translate-y-8 pointer-events-none" : "opacity-100"}
      `}
    >
      {/* FULLSCREEN IMAGE */}
      <Image
        src="/banners/banners.jpg"   // <-- PUT YOUR BANNER IMAGE HERE
        alt="Fityou Banner"
        fill
        className="object-cover"
        priority
      />

      {/* Optional overlay tint */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* CENTER LOGO OR TEXT */}
      <h1 className="relative text-white text-4xl font-bold drop-shadow-xl tracking-wide">
        FITYOU
      </h1>
    </div>
  );
}
