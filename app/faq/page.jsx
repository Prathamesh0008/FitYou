"use client";

import { useState } from "react";

const faqSections = [
  {
    title: "About Fityou",
    icon: "ℹ️",
    items: [
      {
        q: "How can I be sure that Fityou is a legitimate medical provider?",
        a: "Fityou is a health platform that connects you with health professionals such as doctors and pharmacists. Every professional is verified so you know you are in safe hands.",
      },
      {
        q: "Why does Fityou not mention medication by name?",
        a: "Medication names cannot be advertised directly due to regulations. Instead, your Fityou partner doctor will discuss the most suitable treatment options with you during your consultation.",
      },
      {
        q: "How does Fityou guarantee my security and privacy?",
        a: "Fityou uses modern security standards to keep your information confidential. Your medical details are only visible to the partner doctor reviewing your case and are never shared with third parties without your consent.",
      },
    ],
  },
  {
    title: "Medical consultation",
    icon: "📋",
    items: [
      {
        q: "Why do I need to do the medical consultation?",
        a: "The information you provide in the consultation allows a registered doctor on the Fityou platform to assess your health and decide whether the treatment is safe and appropriate for you.",
      },
      {
        q: "When do I qualify for your treatment?",
        a: "You may qualify if you have a BMI of 30 or above, or a BMI of 27 or above with a weight‑related condition such as high blood pressure or high cholesterol, and you are not taking medications that could interact with the prescribed weight‑loss treatment.",
      },
      {
        q: "What is BMI?",
        a: "Body Mass Index (BMI) is calculated using your height and weight to indicate whether you are underweight, a healthy weight, or overweight for your height, age, and gender.",
      },
      {
        q: "Why do you need a body image?",
        a: "A body image helps confirm eligibility and track your progress. Fityou may ask you to upload a photo every few months; it is only visible to you and the partner doctor.",
      },
      {
        q: "Do I know immediately if I qualify for treatment?",
        a: "After you finish the consultation, an allied health professional will confirm your details. During working hours, a partner doctor typically reviews your answers within a few hours and you are contacted with the outcome.",
      },
      {
        q: "Why wasn’t my subscription approved?",
        a: "If a partner doctor does not approve your subscription, it means the treatment is not considered safe or suitable for you based on your medical information.",
      },
      {
        q: "What happens if my subscription is not approved?",
        a: "If you are not approved, no payment is taken. Any pending charges are cancelled and you are not billed for the service.",
      },
      {
        q: "Do I have to consult my local doctor?",
        a: "It is recommended to inform your usual doctor when starting new treatment so they can keep your medical record up to date and coordinate your overall care.",
      },
    ],
  },
  {
    title: "Subscription",
    icon: "🔄",
    items: [
      {
        q: "What does the weight loss plan include?",
        a: "Alongside your treatment pack, the Fityou plan can include ongoing doctor check‑ins, nutritional advice, health coaching, access to support teams and educational content, plus convenient home delivery.",
      },
      {
        q: "What does the Fityou membership include?",
        a: "The Fityou membership is built to support long‑term results. It may provide access to weight‑loss specialists, nutrition guidance, coaching, support teams, educational resources, meal planning tools, and home deliveries of your treatment.",
      },
      {
        q: "What happens after I start the subscription?",
        a: "After your consultation, your details are reviewed by a partner doctor. If treatment is approved, your first package is usually dispatched within a few working days and subsequent supplies are sent automatically every month.",
      },
      {
        q: "Which dosage will I receive and why?",
        a: "Treatment normally starts on the lowest dose to minimise early side effects. If you tolerate it well, your dose may be increased gradually according to your doctor’s plan.",
      },
      {
        q: "What is the delivery frequency?",
        a: "Tablet plans generally include one monthly pack, while injection plans typically include one pen and the required needles every month, depending on the specific treatment.",
      },
      {
        q: "Can I contact the doctors?",
        a: "Yes. You can send messages to partner doctors through your Fityou account or via the support team, who will pass queries on when needed.",
      },
      {
        q: "How does the dosage increase work?",
        a: "After several weeks on the same dose, your doctor may increase it if appropriate. Mild side effects can occur each time the dose is raised and usually settle as your body adapts.",
      },
      {
        q: "Do I have to update my medical answers or body image?",
        a: "Updating your answers and body photos from time to time helps doctors monitor how you respond to treatment and adjust your plan safely.",
      },
      {
        q: "How do I pause or cancel my subscription?",
        a: "You can typically pause or cancel from your Fityou account dashboard using the subscription controls. Changes will apply to future shipments and payments.",
      },
    ],
  },
  {
    title: "Payment",
    icon: "💳",
    items: [
      {
        q: "Which payment options do you offer?",
        a: "Fityou can support major payment options such as credit/debit cards, UPI/QR, netbanking, and digital wallets, depending on your region.",
      },
      {
        q: "How do I apply a discount?",
        a: "If you have a promo code, enter it at checkout before confirming payment to apply any available discount.",
      },
      {
        q: "What can I do if my payment does not go through?",
        a: "If a payment fails, you can retry from your account payment page or switch to a different payment method. You can also contact support for help.",
      },
    ],
  },
  {
    title: "Delivery & returns",
    icon: "🚚",
    items: [
      {
        q: "What are the delivery costs?",
        a: "Delivery for treatment packages is typically free of charge within the supported service area.",
      },
      {
        q: "When will I receive my delivery?",
        a: "Most deliveries arrive within a few working days after your order is approved and dispatched.",
      },
      {
        q: "How can I track the delivery?",
        a: "You can track shipments using the tracking link in your dispatch email or by visiting the shipments section of your Fityou account.",
      },
      {
        q: "Do I have to sign for delivery?",
        a: "For medicines, an OTP or signature may be required at delivery to confirm receipt and keep orders secure.",
      },
      {
        q: "Do you deliver to a pickup point?",
        a: "Fityou generally delivers directly to home addresses rather than public pickup points, for safety and privacy.",
      },
      {
        q: "What can I do if my treatment didn’t arrive?",
        a: "If a package has not arrived by the expected date, check the tracking link in your account or email, then contact support so they can investigate.",
      },
      {
        q: "Can I return my treatment after it has been delivered?",
        a: "Due to medicine regulations, treatments usually cannot be returned once they leave the pharmacy. If your order is damaged, contact support for help.",
      },
      {
        q: "My package has been tampered with, what can I do?",
        a: "If you suspect your package is damaged or opened, please contact Fityou support immediately so they can review and resolve the issue.",
      },
    ],
  },
  {
    title: "Make changes",
    icon: "🛠️",
    items: [
      {
        q: "How do I change my delivery address?",
        a: "You can update your delivery address from your Fityou account under your upcoming shipment details.",
      },
      {
        q: "Can I change the dosage?",
        a: "Dosage changes must be approved by a partner doctor. Use your account or contact support to request a review; do not change doses on your own.",
      },
      {
        q: "How do I change my payment method?",
        a: "You can update your payment method from your account when approving your next payment or in the billing section.",
      },
      {
        q: "How do I change my personal details?",
        a: "Certain personal details can be edited in your account. For key information such as name, date of birth, or height, you may need to contact support directly.",
      },
      {
        q: "How do I subscribe or unsubscribe from promotional emails or text messages?",
        a: "Go to the notifications section of your account to turn promotional emails or SMS alerts on or off at any time.",
      },
    ],
  },
  {
    title: "Treatment",
    icon: "💊",
    items: [
      {
        q: "How does it work?",
        a: "Fityou’s treatments can help control blood sugar, signal fullness to your brain, slow stomach emptying, and reduce appetite. Combined with lifestyle changes, this supports gradual and sustainable weight loss.",
      },
      {
        q: "Why is it more effective than other weight loss medications?",
        a: "These medicines act on several pathways at once: they help regulate hunger hormones, slow digestion, and reset the body’s weight‑regulation signals. This makes them more effective than many traditional options when used correctly.",
      },
      {
        q: "What are the benefits?",
        a: "When combined with healthy eating and activity, many people can lose a meaningful percentage of their starting weight, which may also reduce the risk of conditions like heart disease, high cholesterol, and stroke.",
      },
      {
        q: "How much weight can I lose on your weight loss plan?",
        a: "Weight loss varies from person to person and depends on diet and exercise. Clinical data suggest that some people may lose around 15–21% of their starting weight over time when following the full plan.",
      },
      {
        q: "How is it guaranteed that the medicines are original?",
        a: "All medicines are dispensed through accredited partner pharmacies that follow strict sourcing and storage requirements.",
      },
      {
        q: "Who can use it?",
        a: "Treatments are typically suitable for adults with a BMI of 30 or higher, or 27 or higher with weight‑related conditions. Suitability is always confirmed by a partner doctor.",
      },
      {
        q: "When do I start seeing results?",
        a: "Some people notice changes from the first month, but safe weight loss takes time. The goal is steady progress rather than rapid short‑term results.",
      },
      {
        q: "Do I need to go on a diet?",
        a: "Yes. The medication is designed to work alongside lifestyle changes. You should reduce overall calorie intake and increase physical activity to see the best results.",
      },
    ],
  },
];

export default function FaqPage() {
  // 0 = All FAQs, 1..N = each section
  const [activeTab, setActiveTab] = useState(0);
  const [openAll, setOpenAll] = useState(null);    // { section, item } or null
  const [openSingle, setOpenSingle] = useState(null); // { section, item } or null

  const toggleAll = (sectionIndex, itemIndex) => {
    setOpenAll((prev) =>
      prev && prev.section === sectionIndex && prev.item === itemIndex
        ? null
        : { section: sectionIndex, item: itemIndex }
    );
  };

  const toggleSingle = (sectionIndex, itemIndex) => {
    setOpenSingle((prev) =>
      prev && prev.section === sectionIndex && prev.item === itemIndex
        ? null
        : { section: sectionIndex, item: itemIndex }
    );
  };

  return (
    <>
      <main className="min-h-screen bg-[#f7fcff] text-[#123873]">
        <section className="max-w-5xl mx-auto px-4 pt-16 pb-24">
          <h1 className="text-4xl md:text-5xl font-semibold mb-4 text-center">
            How can we help?
          </h1>
          <p className="text-lg text-center text-[#304064] mb-10">
            Answers to common questions about Fityou&apos;s medical weight loss
            service.
          </p>

          {/* Tab buttons with left icons */}
          <div className="flex flex-wrap gap-3 mb-10 justify-center">
            <button
              type="button"
              onClick={() => setActiveTab(0)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm md:text-base border transition ${
                activeTab === 0
                  ? "bg-[#123873] text-white border-[#123873]"
                  : "bg-white text-[#123873] border-[#cbd5f5] hover:border-[#123873]"
              }`}
            >
              <span className="text-lg">📚</span>
              <span>All FAQs</span>
            </button>

            {faqSections.map((sec, i) => (
              <button
                key={sec.title}
                type="button"
                onClick={() => setActiveTab(i + 1)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm md:text-base border transition ${
                  activeTab === i + 1
                    ? "bg-[#123873] text-white border-[#123873]"
                    : "bg-white text-[#123873] border-[#cbd5f5] hover:border-[#123873]"
                }`}
              >
                <span className="text-lg">{sec.icon}</span>
                <span>{sec.title}</span>
              </button>
            ))}
          </div>

          {/* Content */}
          {activeTab === 0 ? (
            // ALL FAQS: category blocks, each row expandable with animated plus/cross
            <div className="space-y-10">
              {faqSections.map((sec, sIndex) => (
                <div
                  key={sec.title}
                  className="bg-white rounded-[24px] shadow-sm p-5 md:p-6"
                >
                  <h2 className="text-3xl md:text-4xl font-semibold mb-2 text-[#123873]">
                    {sec.title}
                  </h2>
                  <div className="h-[2px] w-full bg-[#cbd5f5] mb-4" />
                  <div className="divide-y divide-[#edf2ff]">
                    {sec.items.map((item, qIndex) => {
                      const isOpen =
                        openAll &&
                        openAll.section === sIndex &&
                        openAll.item === qIndex;
                      return (
                        <div key={item.q}>
                          <button
                            type="button"
                            onClick={() => toggleAll(sIndex, qIndex)}
                            className="w-full flex items-center gap-4 py-4 text-left hover:bg-[#f8fbff]"
                          >
                            {/* animated plus / cross on left */}
                            <span
                              className={`inline-flex items-center justify-center w-6 h-6 text-2xl text-[#123873] transition-transform duration-200 faq-plus-icon ${
                                isOpen ? "faq-plus-open" : ""
                              }`}
                            >
                              +
                            </span>
                            <span
                              className={`text-[17px] md:text-[18px] transition-font-weight duration-150 ${
                                isOpen ? "font-bold" : "font-medium"
                              }`}
                            >
                              {item.q}
                            </span>
                          </button>
                          <div
                            className={`overflow-hidden transition-all duration-300 ${
                              isOpen
                                ? "max-h-[400px] pb-3 pl-10 md:pl-12"
                                : "max-h-0 pl-10 md:pl-12"
                            }`}
                          >
                            <p className="text-[15px] md:text-[16px] leading-relaxed text-[#304064]">
                              {item.a}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            // SINGLE SECTION: accordion with same left plus / cross animation
            <div className="bg-white rounded-[28px] shadow-md border border-[#dde9ff]">
              {faqSections[activeTab - 1].items.map((item, idx) => {
                const isOpen =
                  openSingle &&
                  openSingle.section === activeTab - 1 &&
                  openSingle.item === idx;

                return (
                  <div
                    key={item.q}
                    className="border-b border-[#edf2ff] last:border-none"
                  >
                    <button
                      type="button"
                      onClick={() => toggleSingle(activeTab - 1, idx)}
                      className="w-full flex items-center gap-4 px-6 md:px-8 py-5 text-left hover:bg-[#f8fbff]"
                    >
                      <span
                        className={`inline-flex items-center justify-center w-6 h-6 text-2xl text-[#123873] transition-transform duration-200 faq-plus-icon ${
                          isOpen ? "faq-plus-open" : ""
                        }`}
                      >
                        +
                      </span>
                      <span
                        className={`text-[17px] md:text-[18px] transition-font-weight duration-150 ${
                          isOpen ? "font-bold" : "font-semibold"
                        }`}
                      >
                        {item.q}
                      </span>
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        isOpen ? "max-h-[500px] pb-5 px-14 md:px-16" : "max-h-0 px-14 md:px-16"
                      }`}
                    >
                      <p className="text-[15px] md:text-[16px] leading-relaxed text-[#304064]">
                        {item.a}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </section>
      </main>

      {/* Extra CSS for animated plus / cross */}
      <style jsx global>{`
        body {
          background-color: #f7fcff;
        }

        .faq-plus-icon {
          line-height: 1;
          transform-origin: center;
        }

        .faq-plus-open {
          transform: rotate(45deg); /* + becomes × */
        }
      `}</style>
    </>
  );
}



