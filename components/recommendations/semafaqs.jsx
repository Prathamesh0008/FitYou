"use client";

import { useState, useRef, useEffect } from "react";

/* ----------------------------------------------------
   🔵 TABLET FAQS (Your existing Semaglutide questions)
---------------------------------------------------- */
const tabletFaqs = [
  {
    question: "What Is Semaglutide?",
    answer:
      "Semaglutide is a medication known as a GLP-1 receptor agonist, which helps regulate appetite and blood sugar. It works by increasing a natural hormone that controls hunger, helping you feel fuller for longer.",
  },
  {
    question: "How Do I Take the Tablet?",
    answer:
      "Take one tablet once a day on an empty stomach. Take it at least 30 minutes before eating. Swallow whole with ~120ml water.",
  },
  {
    question: "What Dosages Are Available?",
    answer:
      "Semaglutide tablets come in doses 3mg, 7mg, and 14mg. You start at 3mg and gradually increase.",
  },
  {
    question: "How Do I Increase My Semaglutide Dosage?",
    answer:
      "Start with 3 mg for the first month. Increase to 7 mg after one month. Increase to 14 mg after another month based on your doctor’s advice.",
  },
  {
    question: "Can I Change My Semaglutide Dosage?",
    answer:
      "Do not change your dose unless instructed by a doctor. Maximum daily dose is 14 mg.",
  },
  {
    question: "What Are the Benefits?",
    answer:
      "Semaglutide helps reduce appetite and supports weight loss up to 15% when combined with a healthy diet.",
  },
  {
    question: "What Are the Possible Side Effects?",
    answer:
      "Some people may experience nausea, indigestion, bloating, or stomach discomfort at the start.",
  },
  {
    question: "Will You Monitor My Health and Progress?",
    answer:
      "Yes, our partner doctors evaluate your progress before each refill.",
  },
  {
    question: "Do I need to follow a diet while taking Semaglutide?",
    answer:
      "Yes. A healthy diet and exercise help boost results.",
  },
  {
    question: "Can I stop taking Semaglutide anytime?",
    answer:
      "Consult your doctor before stopping. Appetite may return if treatment is stopped suddenly.",
  },
];

/* ----------------------------------------------------
   🟣 INJECTION FAQS (Your detailed Mounjaro info)
---------------------------------------------------- */
const injectionFaqs = [
  {
    question: "What Is Mounjaro?",
    answer:
      "Mounjaro (Tirzepatide) is a once-weekly injection used for weight loss and blood sugar control. It works through dual GIP + GLP-1 action.",
  },
  {
    question: "How Does Mounjaro Work for Weight Loss?",
    answer:
      "It boosts insulin, reduces liver sugar, slows digestion, and reduces appetite — supporting strong, steady weight loss.",
  },
  {
    question: "What Should I Do Before Taking a Mounjaro Injection?",
    answer:
      "Check the pen label, confirm dose, wash hands, clean seal with alcohol, attach new needle, remove shields.",
  },
  {
    question: "How Do I Prepare the Mounjaro Injection?",
    answer:
      "Prime the pen, tap air bubbles, release a test drop. Repeat if needed.",
  },
  {
    question: "How Do I Take the Mounjaro Injection?",
    answer:
      "Inject into the abdomen or thigh, rotate sites weekly, press knob fully, hold 5 seconds.",
  },
  {
    question: "What Dosages Are Available?",
    answer:
      "Mounjaro comes in 2.5, 5, 7.5, 10, 12.5, and 15 mg. Start with 2.5 mg.",
  },
  {
    question: "How Do I Increase My Mounjaro Dosage?",
    answer:
      "Doctors increase doses every 4 weeks depending on results.",
  },
  {
    question: "Can I Change My Mounjaro Dosage?",
    answer:
      "No. Only change dose if doctor approves. Max: 15 mg/week.",
  },
  {
    question: "How Do I Store Mounjaro?",
    answer:
      "Refrigerate 2–8°C. In-use pen can stay at room temp for 21 days.",
  },
  {
    question: "What Are the Possible Side Effects?",
    answer:
      "Common: nausea, vomiting, constipation, indigestion — usually temporary.",
  },
];

/* ----------------------------------------------------
   ACCORDION ITEM (no changes)
---------------------------------------------------- */
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
        onClick={() => setOpenIndex(isOpen ? null : index)}
        className="w-full flex items-center gap-4 text-left"
      >
        <span
          className={`text-4xl text-[#002c5c] transition-transform ${
            isOpen ? "rotate-45" : ""
          }`}
        >
          +
        </span>

        <span
          className={`text-lg md:text-xl text-[#002c5c] ${
            isOpen ? "font-bold" : "font-normal"
          }`}
        >
          {item.question}
        </span>
      </button>

      <div
        ref={contentRef}
        style={{ maxHeight }}
        className="ml-11 overflow-hidden transition-[max-height] duration-500"
      >
        <p
          className="mt-3 text-base md:text-lg text-[#002c5c]"
          style={{
            opacity,
            transform: `translateY(${translate}px)`
          }}
        >
          {item.answer}
        </p>
      </div>
    </div>
  );
}

/* ----------------------------------------------------
   MAIN FAQ SECTION (dynamic switching)
---------------------------------------------------- */
export default function Semafaq({ type }) {
  const [openIndex, setOpenIndex] = useState(null);

  const isTablet = type?.toLowerCase().includes("tablet");

  // 🔥 This line removes ALL previous errors:
  const faqs = isTablet ? tabletFaqs : injectionFaqs;

  return (
    <section className="w-full bg-[#f5fbff] py-16 px-6 md:px-20 lg:px-32 font-[Laila]">
      <div className="max-w-5xl mx-auto">

        <h2 className="text-3xl md:text-4xl text-[#002c5c] text-center mb-10">
          {isTablet ? "FAQs — Semaglutide Tablets" : "Got questions about Mounjaro?"}
        </h2>

        <div className="flex justify-center">
          <div className="w-full max-w-2xl space-y-4">
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
    </section>
  );
}
