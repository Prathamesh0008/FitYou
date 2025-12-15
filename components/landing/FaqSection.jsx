"use client";
import { useState, useRef, useEffect } from "react";
import { Laila, Raleway } from "next/font/google";
import Link from "next/link";

const laila = Laila({
  subsets: ["latin"],
  weight: ["600"],
  variable: "--font-laila",
});

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-raleway",
});

const faqs = [
  {
    question: "Why is your treatment more effective than other weight loss methods?",
    answer: "Our programme combines a new generation weekly weight loss injection with personalised meal and fitness plans plus expert support, which together help you eat less without feeling hungry and stay consistent for longer than with dieting and exercise alone. Because everybody is different, individual results vary and depend on lifestyle.",
  },
  {
    question: "How much weight can I lose on your plan?",
    answer: "In clinical trials of the medication used in the Fityou plan, adults lost up to around 21% of their body weight over about 16 months when the injection was combined with sensible eating and regular light exercise.",
  },
  {
    question: "When do I qualify for your plan?",
    answer: "You usually qualify for the Fityou programme if your BMI is in the overweight or obese range or if you have weight-related health risks that make medical weight loss appropriate.",
  },
  {
    question: "What is BMI?",
    answer: "BMI, or Body Mass Index, is a calculation using your height and weight to estimate if you are underweight, a healthy weight, overweight, or obese.",
  },
  {
    question: "Why am I struggling to lose weight?",
    answer: "Up to about 80% of weight differences may be influenced by genetics. Hormones that regulate hunger and fullness can make losing weight very difficult. The Fityou treatment works with these biological signals to reduce appetite.",
  },
  {
    question: "Do I need to go on a diet?",
    answer: "You do not need a strict diet. You receive personalised, balanced meal plans. The injection helps control hunger while you build sustainable eating habits.",
  },
  {
    question: "Why do I need to do the medical consultation?",
    answer: "Because the treatment is prescription-only, a qualified doctor must check your health, medicines, and eligibility.",
  },
];

function AccordionItem({ item, index, openIndex, setOpenIndex }) {
  const isOpen = openIndex === index;
  const contentRef = useRef(null);
  const [maxHeight, setMaxHeight] = useState("0px");
  const [opacity, setOpacity] = useState(0);
  const [translate, setTranslate] = useState(4);

  useEffect(() => {
    if (!contentRef.current) return;
    requestAnimationFrame(() => {
      if (isOpen) {
        setMaxHeight(`${contentRef.current.scrollHeight}px`);
        setOpacity(1);
        setTranslate(0);
      } else {
        setMaxHeight("0px");
        setOpacity(0);
        setTranslate(4);
      }
    });
  }, [isOpen]);

  return (
    <div className="border-b border-gray-200 py-4">
      <button
        type="button"
        onClick={() => setOpenIndex(isOpen ? null : index)}
        className="w-full flex items-start gap-4 text-left focus:outline-none group cursor-pointer"
      >
        <span
          className={`text-2xl leading-none text-[#206C8C] transition-transform duration-300 mt-0.5 shrink-0 ${
            isOpen ? "rotate-45" : ""
          }`}
        >
          +
        </span>

        <span className="text-lg md:text-xl text-[#002c5c] font-medium leading-tight group-hover:text-[#206C8C] transition-colors flex-1">
          {item.question}
        </span>
      </button>

      <div
        ref={contentRef}
        style={{ maxHeight }}
        className="ml-10 overflow-hidden transition-[max-height] duration-500 ease-[cubic-bezier(.33,1,.68,1)]"
      >
        <p
          className="mt-3 text-base text-gray-700 leading-relaxed transition-all duration-500"
          style={{
            opacity,
            transform: `translateY(${translate}px)`,
          }}
        >
          {item.answer}
        </p>
      </div>
    </div>
  );
}

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className={`bg-white py-16 md:py-24 ${laila.variable} ${raleway.variable} font-raleway`}>
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        
        <h2 className="text-[#002074] text-3xl md:text-[40px] font-bold font-laila text-center mb-12 md:mb-16">
          Still unsure? Check out our FAQs
        </h2>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 xl:gap-16">
          
          {/* LEFT SIDE: IMAGE - Fixed alignment */}
          <div className="w-full lg:w-5/12 flex justify-center lg:justify-start">
            <div className="rounded-2xl overflow-hidden shadow-lg w-full max-w-[400px] h-auto lg:w-full lg:max-w-none">
              <img 
                src="/landing/start1.png" 
                alt="Aktive weight loss box" 
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

          {/* RIGHT SIDE: FAQ LIST */}
          <div className="w-full lg:w-7/12">
            <div className="space-y-2">
              {faqs.map((item, index) => (
                <AccordionItem
                  key={item.question}
                  item={item}
                  index={index}
                  openIndex={openIndex}
                  setOpenIndex={setOpenIndex}
                />
              ))}
            </div>
          </div>

        </div>

        {/* BOTTOM BUTTON - Centered properly */}
        <div className="mt-12 md:mt-16 text-center">
          <Link href="/quiz" className="w-full block ">
          <button className="bg-[#9BCDD2] cursor-pointer hover:bg-[#8abfc4] text-[#002074] font-bold text-lg py-3 px-8 md:px-12 rounded-lg shadow-md transition-colors inline-block w-full max-w-[350px]">
            Do I qualify?
          </button>
          </Link>
        </div>

      </div>
    </section>
  );
}