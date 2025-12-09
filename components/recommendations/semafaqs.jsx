//FitYou\components\recommendations\semafaqs.jsx
"use client";

import { useState, useRef, useEffect } from "react";

const faqs = [
  {
    question: "What Is Semaglutide?",
    answer:
      "Semaglutide is a medication known as a GLP-1 receptor agonist, which helps regulate appetite and blood sugar. It works by increasing a natural hormone that controls hunger, helping you feel fuller for longer. As a result, Semaglutide can support weight loss by reducing appetite and lowering overall food intake.",
  },
  {
    question: "How Do I Take the Tablet?",
    answer:
      "Take one tablet once a day on an empty stomach.Make sure to take it at least 30 minutes before your first meal or drink of the day—eating too soon can reduce how well it works.Swallow the tablet with a small amount of water (about half a glass or 120 ml).Do not crush, split, or chew the tablet, as this will affect how your body absorbs the medication.",
  },
  {
    question: "What Dosages Are Available?",
    answer:
      "Semaglutide tablets come in three strengths 3 mg,7 mg ,14 mg Treatment begins with the 3 mg dose, and your dose is increased gradually so your body can adjust comfortably and safely",
  },
  {
    question: "How Do I Increase My Semaglutide Dosage?",
    answer:
      "Your Semaglutide dose is increased gradually under the guidance of our partner doctors:Start with 3 mg for the first month.Increase to 7 mg after one month, if suitable. After another month, you can move to 14 mg, or stay on 7 mg if that works best for you.This gradual approach helps your body adjust while reducing side effects",
  },
  {
    question: "Can I Change My Semaglutide Dosage?",
    answer:
      "Do not change your dose unless your partner doctor instructs you The maximum dose is 14 mg per day.If you accidentally take more than prescribed, contact us or your healthcare provider immediately.",
  },
  {
    question: "What Are the Benefits?",
    answer:
      "The main benefit of Semaglutide is its proven ability to support weight loss. When combined with a healthy diet and lifestyle, users can lose up to 15% of their starting body weight. It also helps control appetite and supports long-term weight management.",
  },
  {
    question: "What Are the Possible Side Effects?",
    answer:
      "Like all prescription medications, Semaglutide may cause side effects, especially during the first few months. Most are mild, temporary, and improve as your body adjusts.",
  },
  {
    question: "Will You Monitor My Health and Progress?",
    answer:
      "Yes. Before each delivery, our partner doctors will review your updated health information. This allows them to track your progress, ensure your treatment is working effectively, and provide personalized advice as needed",
  },
  {
    question: "Do I need to follow a diet while taking Semaglutide?",
    answer:
      "Yes. For best results, combine Semaglutide with a healthy diet and regular exercise. This helps maximize weight loss and improve overall health.",
  },
  {
    question: "Can I stop taking Semaglutide anytime?",
    answer:
      "You should consult your doctor before stopping. Abruptly stopping may cause your appetite and weight to return to previous levels.",
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
            transform: `translateY(${translate}px)`
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
      <div className="max-w-5xl mx-auto">

        {/* CENTER THE FAQ LIST */}
       <h2 className="text-3xl md:text-4xl text-[#002c5c] font-normal text-center mb-10">
  FAQs Semaglutide tablets
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