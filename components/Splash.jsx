"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Splash() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setHidden(true), 1200); 
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`
        fixed inset-0 z-[9999] flex items-center justify-center
        bg-black
        transition-opacity duration-700 ease-out
        ${hidden ? "opacity-0 pointer-events-none" : "opacity-100"}
      `}
    >
      {/* BACKGROUND IMAGE (NO ZOOM, NO MOVE) */}
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src="/banners/banners.png"
          alt="Splash Banner"
          fill
          priority
          className="
            object-contain 
            w-full h-full 
            will-change-auto 
            scale-100 
            transform-none 
            !transition-none
          "
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Center Logo */}
      {/* <div className="relative text-center">
        <h1 className="text-white text-5xl md:text-6xl font-bold tracking-wide font-laila drop-shadow-lg">
          FITYOU
        </h1>
        <p className="text-white/90 text-sm md:text-base mt-2 font-light tracking-wide">
          Smarter weight management
        </p>
      </div> */}
    </div>
  );
}
