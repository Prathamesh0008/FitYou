// components/HowHeroSection.jsx
import Image from "next/image";
import boxImage from "@/public/how/box.png";

export default function HowHeroSection() {
  return (
    <section className="w-full bg-[#F6FBFD]">
      <div className="max-w-[1120px] mx-auto flex items-center  max-lg:flex-col px-4">
        {/* Left block */}
        <div className="w-full lg:w-1/2">
          <h1 className="text-[69px] leading-tight font-normal text-[#103b7a] mb-8 max-md:text-[40px]">
            <span className="hidden md:inline font-semibold">
              How our
              <br />
              service
              <br />
              works
            </span>
            <span className="inline md:hidden block w-full text-left font-semibold text-[47px]">
              How our service works
            </span>
          </h1>

          <p className="text-[18px] leading-relaxed mb-8 max-w-[480px] text-left font-normal">
            The essentials on how to start losing weight
            <br />
            with our scientifically proven treatment.
          </p>

          {/* DESKTOP/TABLET BUTTON */}
          <div className="w-full flex max-lg:justify-center max-sm:hidden">
            <button
              type="button"
              className="inline-block bg-[#85b7c4] text-[#103b7a] rounded-[8px] px-24 py-2 text-[20px] font-semibold tracking-[0.02em] shadow-sm hover:brightness-110 transition"
            >
              Start consultation
            </button>
          </div>
        </div>

        {/* Right block — image */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end mt-8 lg:mt-0">
          <div className="max-w-[560px] w-full">
            <Image
              src={boxImage}
              alt="How Fityou service works illustration"
              width={560}
              height={560}
              className="w-full h-auto"
              priority
            />
          </div>
        </div>
      </div>

      {/* MOBILE BUTTON – only visible on small screens, placed below image */}
      <div className="w-full flex justify-center sm:hidden mt-6 pb-4">
        <button
          type="button"
          className="inline-block bg-[#85b7c4] text-[#103b7a] rounded-[8px] px-20 py-2 text-[20px] font-semibold tracking-[0.02em] shadow-sm hover:brightness-110 transition"
        >
          Start consultation
        </button>
      </div>
    </section>
  );
}
