// app/components/weight-loss/FaqSection.jsx
"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";

const faqs = [
  {
    question: "Why is your treatment more effective than other weight loss methods?",
    answer:
      "Our programme combines a new generation weekly weight loss injection with personalised meal and fitness plans plus expert support, which together help you eat less without feeling hungry and stay consistent for longer than with dieting and exercise alone. Because everybody is different, individual results vary and depend on lifestyle.",
  },
  {
    question: "What should I go for - weight loss injection or tablet?",
    answer:
      "Fityou uses a once-weekly weight loss injection from the GLP-1 family of medications, which clinical studies show is highly effective for reducing appetite and supporting significant weight loss when combined with healthy habits. Tablets work differently and may not provide the same appetite control or results as this injectable treatment.",
  },
  {
    question: "I've heard of the Hollywood 'skinny jab' - is this the same?",
    answer:
      "The Fityou treatment is from the same modern class of GLP-1 weight loss injections that are often referred to as 'skinny jabs' in the media. These medications mimic a natural gut hormone to help you feel full sooner and reduce calorie intake in a clinically proven, medically supervised way.",
  },
  {
    question: "How much weight can I lose on your plan?",
    answer:
      "In clinical trials of the medication used in the Fityou plan, adults lost up to around 21% of their body weight over about 16 months when the injection was combined with sensible eating and regular light exercise.",
  },
  {
    question: "When do I qualify for your plan?",
    answer:
      "You usually qualify for the Fityou programme if your BMI is in the overweight or obese range or if you have weight-related health risks that make medical weight loss appropriate.",
  },
  {
    question: "What is BMI?",
    answer:
      "BMI, or Body Mass Index, is a calculation using your height and weight to estimate if you are underweight, a healthy weight, overweight, or obese.",
  },
  {
    question: "Why am I struggling to lose weight?",
    answer:
      "Up to about 80% of weight differences may be influenced by genetics. Hormones that regulate hunger and fullness can make losing weight very difficult. The Fityou treatment works with these biological signals to reduce appetite.",
  },
  {
    question: "Do I need to go on a diet?",
    answer:
      "You do not need a strict diet. You receive personalised, balanced meal plans. The injection helps control hunger while you build sustainable eating habits.",
  },
  {
    question: "Why do I need to do the medical consultation?",
    answer:
      "Because the treatment is prescription-only, a qualified doctor must check your health, medicines, and eligibility.",
  },
  {
    question: "Do I know immediately if I qualify?",
    answer:
      "Most people find out during or shortly after the online consultation whether they qualify.",
  },
  {
    question: "What's included in the subscription plan?",
    answer:
      "GLP-1 treatment supply, meal plans, fitness plan, specialist coaching, and monthly home delivery.",
  },
  {
    question: "Will you monitor my health and progress?",
    answer:
      "Yes. You receive continuous medical and coaching support, progress checks, and adjustments when required.",
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
    <div className="pb-4">
      <button
        type="button"
        onClick={() => setOpenIndex(isOpen ? null : index)}
        className="w-full flex items-center justify-between text-left focus:outline-none"
      >
        <div className="flex items-center gap-4">
          <span
            className={`text-4xl leading-none text-[#002c5c] transition-transform duration-300 ${
              isOpen ? "rotate-45" : ""
            }`}
          >
            +
          </span>

          <span
            className={`text-lg md:text-xl text-[#002c5c] transition-all duration-300 ${
              isOpen ? "font-bold" : "font-normal"
            }`}
          >
            {item.question}
          </span>
        </div>
      </button>

      <div
        ref={contentRef}
        style={{ maxHeight }}
        className="ml-11 overflow-hidden transition-[max-height] duration-500 ease-[cubic-bezier(.33,1,.68,1)]"
      >
        <p
          className="mt-3 text-base md:text-lg text-[#002c5c] transition-all duration-500"
          style={{
            opacity,
            transform:` translateY(${translate}px)`,
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
    <section
      className="w-full bg-[#f5fbff] py-16 px-6 md:px-20 lg:px-32 font-[Laila]"
      id="faq"
    >
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row md:items-start md:justify-between gap-10">
        
        {/* LEFT SIDE */}
        <div className="md:w-1/3">
          <h2 className="text-5xl md:text-4xl text-[#002c5c] leading-tight">
            {/* Mobile */}
            <span className="block md:hidden">
              <span className="block">All your</span>
              <span className="block">questions</span>
              <span className="block">answered</span>
            </span>

            {/* Desktop */}
            <span className="hidden md:block">
              <span className="block whitespace-nowrap">All your questions</span>
              <span className="block whitespace-nowrap">answered</span>
            </span>
          </h2>

          {/* Desktop Button */}
          <Link href="/quiz">
            <button className="mt-10 hidden md:inline-block bg-[#96bcc5] hover:bg-[#82aab3] text-[#002c5c] text-lg font-medium px-18 py-3 rounded-sm">
              Start consultation
            </button>
          </Link>
        </div>

        {/* FAQ LIST */}
        <div className="md:w-2/3 space-y-4">
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

        {/* MOBILE BUTTON */}
        <div className="md:hidden flex justify-center mt-6">
          <Link href="/quiz">
            <button className="bg-[#96bcc5] hover:bg-[#82aab3] text-[#002c5c] text-lg font-medium px-18 py-3 rounded-sm w-full max-w-[300px] text-center">
              Start consultation
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}