"use client";

import { useState } from "react";

const faqSections = [
  {
    title: "About Fityou",
    icon: "ℹ️",
    items: [
      {
        q: "1. How can I be sure that FitYou is a legitimate medical and wellness provider?",
        a: `FitYou connects you with certified health professionals, including licensed doctors and trained wellness specialists.<br><br>
        Every professional on FitYou is carefully verified so you can feel confident that your assessment, guidance, and support are handled by qualified experts.`,
      },
      {
        q: "2. Why does FitYou not mention medication or treatment names directly?",
        a: `Due to healthcare advertising regulations, FitYou cannot list medication names publicly.<br><br>
        However, once you complete your health screening, a qualified doctor will review your information and recommend the most appropriate treatment plan tailored to your weight-loss goals.<br><br>
        Start your assessment today to learn what’s right for you.`,
      },
      {
        q: "3. How does FitYou guarantee my privacy and data protection?",
        a: `FitYou uses modern, secure technology to keep all your information fully confidential.<br><br>
        Your data is never shared with third parties unless you give explicit permission.<br><br>
        Only the partner doctor responsible for reviewing your case can access your medical details.<br><br>
        Your trust and safety are central to our service.`,
      },
      {
        q: "4. What makes FitYou different from other weight loss programmes?",
        a: `FitYou combines medical screening, personalised diet plans, and behaviour-based coaching to give you a structured and sustainable approach to weight loss.<br><br>
        Every plan is designed around your lifestyle, body type, and health requirements.`,
      },
      {
        q: "5. Does FitYou offer medically supervised weight loss?",
        a: `Yes — FitYou provides access to qualified doctors who evaluate whether you are suitable for weight loss medication or weight loss injections based on your consultation and medical history.`,
      },
      {
        q: "6. Can FitYou help me lose weight in one month?",
        a: `FitYou offers structured 1-month weight loss plans focused on improving diet, appetite control, and daily habits.<br><br>
        Individual results may vary, but many users experience noticeable changes within the first 30 days.`,
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
        a: "You may qualify if you have a BMI of 30 or above, or a BMI of 27 or above with a weight-related condition such as high blood pressure or high cholesterol, and you are not taking medications that could interact with the prescribed weight-loss treatment.",
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
      q: "1. Why do I need to complete the medical consultation with FitYou?",
      a: `The medical consultation helps a registered FitYou doctor understand your health background, current symptoms, weight-loss challenges, and safety profile.

The information you provide allows the doctor to assess whether a FitYou weight loss programme or doctor-approved treatment plan is appropriate for your goals.

This step ensures safe, personalised, and medically guided weight reduction.`,
    },
  {
  q: "2. When do I qualify for FitYou’s treatment programme?",
  a: `
You may be eligible for treatment through FitYou if:

<ul style="list-style-type: disc; margin-left: 20px; margin-top: 10px;">
<li>Your BMI is 30 or above</li>
<li>OR your BMI is 27 or above and you also have a weight-related condition such as high blood pressure, high cholesterol, or metabolic issues</li>
<li>You are not taking medications that may interact with treatments like Orlistat or GLP-1 therapies</li>
</ul>

Every recommendation is made only after a doctor reviews your consultation to ensure safety and suitability.
  `,
},


    {
      q: "3. What is BMI and why does FitYou use it?",
      a: `Body Mass Index (BMI) is a simple calculation using your height and weight to understand whether you fall into an underweight, healthy, overweight, or obese category.

FitYou uses BMI as one of the screening tools along with age, symptoms, and medical history to help doctors determine safe eligibility for weight-loss treatments, diets, and personalised plans.`,
    },
    {
  q: "4. Why does FitYou require a body image/photo?",
  a: `
FitYou requests a body image to confirm treatment eligibility, track your physical progress, and ensure medical accuracy during the consultation.

<ul style="list-style-type: disc; margin-left: 20px; margin-top: 10px; line-height: 1.8;">
<li>The image is required only once every 3 months</li>
<li>It is visible only to you and the FitYou partner doctor reviewing your case</li>
<li>This step helps ensure safety and protect vulnerable users</li>
<li>Your privacy and comfort are fully prioritised</li>
</ul>
  `,
},

   {
  q: "5. Will I know immediately if I qualify for a FitYou treatment plan?",
  a: `
After completing your consultation, your application goes through a short review process to ensure it is safe and appropriate.

<ul style="list-style-type: disc; margin-left: 20px; margin-top: 10px; line-height: 1.8;">
<li>An allied healthcare professional will contact you to confirm your details</li>
<li>A FitYou doctor typically reviews your submission within 1–2 hours during working hours</li>
<li>If you apply outside working hours, you will receive an update the next working day</li>
<li>If the doctor requires more information or cannot approve treatment, you will receive a clear explanation of the next steps</li>
</ul>
  `,
},

    {
      q: "6. Why wasn’t my FitYou subscription or treatment request approved?",
      a: `Your safety comes first.

If a FitYou doctor does not approve your subscription, it means the treatment is not suitable or medically safe for you based on your answers, existing conditions, or potential medication interactions.

FitYou only prescribes treatments when a doctor confirms the plan is safe for your health.`,
    },
    {
      q: "7. What happens if my FitYou subscription is not approved?",
      a: `If your treatment request is not approved:

• No payment will be taken  
• Your subscription is automatically cancelled  
• Any pending transactions will be returned to your account  

FitYou ensures complete transparency — you will never face hidden fees or unauthorized charges.`,
    },
    {
      q: "8. Do I need to consult my local doctor as well?",
      a: `Yes — FitYou recommends informing your local doctor about any new treatment or medical change.

This helps maintain an accurate record of your medical history and supports long-term health monitoring alongside your FitYou programme.`,
    },
    {
      q: "9. How does FitYou choose the right weight-loss treatment for me?",
      a: `FitYou doctors review your:

• BMI  
• Medical history  
• Current medications  
• Symptoms  
• Lifestyle habits  

This ensures the plan — whether diet-based, behavioural, or medication-supported — is safe and tailored to your needs.`,
    },
    {
      q: "10. What happens after my FitYou treatment is approved?",
      a: `Once approved, you will receive:

• A personalised weight-loss plan  
• Diet and lifestyle guidance  
• Instructions for safe use of any treatment  
• Ongoing monitoring and support  

Your journey is supervised step-by-step to help you achieve healthy, long-term results.`,
    },
  ],
},

  {
    title: "Payment",
    icon: "💳",
    items: [
      {
        q: "Which payment options does FitYou offer?",
        a: "FitYou provides multiple secure payment methods for your convenience, including Credit / Debit Cards, UPI & QR-based Payments, Net Banking, and Digital Wallets. All payments are processed through trusted gateways to ensure a smooth and safe checkout experience.",
      },
      {
        q: "How do I apply a discount on FitYou?",
        a: "If you have a promo code, simply enter it on the checkout page before completing your purchase. The discount will automatically be applied to your total.",
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
        a: "These medicines act on several pathways at once: they help regulate hunger hormones, slow digestion, and reset the body’s weight-regulation signals. This makes them more effective than many traditional options when used correctly.",
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
        a: "Treatments are typically suitable for adults with a BMI of 30 or higher, or 27 or higher with weight-related conditions. Suitability is always confirmed by a partner doctor.",
      },
      {
        q: "When do I start seeing results?",
        a: "Some people notice changes from the first month, but safe weight loss takes time. The goal is steady progress rather than rapid short-term results.",
      },
      {
        q: "Do I need to go on a diet?",
        a: "Yes. The medication is designed to work alongside lifestyle changes. You should reduce overall calorie intake and increase physical activity to see the best results.",
      },
    ],
  },
  {
    title: "Daily tablet",
    icon: "💊",
    items: [
      {
        q: "How often do I take the daily tablet?",
        a: "The daily tablet is usually taken once a day at the same time, as advised by your doctor or according to the prescription instructions.",
      },
      {
        q: "Should I take the tablet with food?",
        a: "Whether you take the tablet with or without food depends on the specific medication. You will receive clear instructions once your treatment plan is approved.",
      },
    ],
  },
  {
    title: "Weekly injection",
    icon: "💉",
    items: [
      {
        q: "How often do I need to take the weekly injection?",
        a: "As the name suggests, the weekly injection is taken once a week, ideally on the same day each week. Your doctor will guide you on the correct schedule.",
      },
      {
        q: "Is the weekly injection painful?",
        a: "Most people experience only mild discomfort or a quick pinch during the injection. Your doctor or pharmacist will advise you on the best injection technique to minimise discomfort.",
      },
    ],
  },
];

export default function FaqPage() {
  // 0 = All FAQs, 1..N = each section
  const [activeTab, setActiveTab] = useState(0);
  const [openAll, setOpenAll] = useState(null); // { section, item } or null
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
            // ALL FAQS
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
                  <div>
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
                            <div
                              className="text-[15px] md:text-[16px] leading-relaxed text-[#304064] space-y-3"
                              dangerouslySetInnerHTML={{ __html: item.a }}
                            />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            // SINGLE SECTION
            <div className="bg-white rounded-[28px] shadow-md border border-[#dde9ff]">
              {faqSections[activeTab - 1].items.map((item, idx) => {
                const isOpen =
                  openSingle &&
                  openSingle.section === activeTab - 1 &&
                  openSingle.item === idx;

                return (
                  <div key={item.q}>
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
                        isOpen
                          ? "max-h-[500px] pb-5 px-14 md:px-16"
                          : "max-h-0 px-14 md:px-16"
                      }`}
                    >
                      <div
                        className="text-[15px] md:text-[16px] leading-relaxed text-[#304064] space-y-3"
                        dangerouslySetInnerHTML={{ __html: item.a }}
                      />
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


// "use client";

// import { useState } from "react";

// const faqSections = [
//   {
//     title: "About Fityou",
//     icon: "ℹ️",
//     items: [
//       {
//         q: "1. How can I be sure that FitYou is a legitimate medical and wellness provider?",
//         a: "FitYou connects you with certified health professionals, including licensed doctors and trained wellness specialists. Every professional on FitYou is carefully verified so you can feel confident that your assessment, guidance, and support are handled by qualified experts.",
//       },
//       {
//         q: "Why does Fityou not mention medication by name?",
//         a: "Due to healthcare advertising regulations, FitYou cannot list medication names publicly. However, once you complete your health screening, a qualified doctor will review your information and recommend the most appropriate treatment plan tailored to your weight-loss goals.Start your assessment today to learn what’s right for you.",

//       },
//       {
//         q: "How does Fityou guarantee my security and privacy?",
//         a: "FitYou uses modern, secure technology to keep all your information fully confidential. Your data is never shared with third parties unless you give explicit permission. Only the partner doctor responsible for reviewing your case can access your medical details.Your trust and safety are central to our service.",

//       },
//       {
//         q:" What makes FitYou different from other weight loss programmes?",
//         a:"FitYou combines medical screening, personalized diet weight loss plans, and behavior-based coaching to give you a structured, sustainable approach to reduce weight. Every plan is designed around your lifestyle, body type, and health requirements.",
//       },
//       {
//         q:" Does FitYou offer medically supervised weight loss?",
//         a:"Yes. FitYou provides access to qualified doctors who evaluate whether you are suitable for weight loss medication or weight loss injections. All recommendations are based on your health screening and safety profile.",
//       },
//       {
//         q:" Can FitYou help me lose weight in one month?",
//         a:"FitYou offers structured 1 month weight loss plans focused on improving diet, appetite control, and daily habits. Individual results vary, but many users experience noticeable changes within the first 30 days.",
//       },
//     ],
//   },
//   {
//     title: "Medical consultation",
//     icon: "📋",
//     items: [
//       {
//         q: "Why do I need to do the medical consultation?",
//         a: "The information you provide in the consultation allows a registered doctor on the Fityou platform to assess your health and decide whether the treatment is safe and appropriate for you.",
//       },
//       {
//         q: "When do I qualify for your treatment?",
//         a: "You may qualify if you have a BMI of 30 or above, or a BMI of 27 or above with a weight‑related condition such as high blood pressure or high cholesterol, and you are not taking medications that could interact with the prescribed weight‑loss treatment.",
//       },
//       {
//         q: "What is BMI?",
//         a: "Body Mass Index (BMI) is calculated using your height and weight to indicate whether you are underweight, a healthy weight, or overweight for your height, age, and gender.",
//       },
//       {
//         q: "Why do you need a body image?",
//         a: "A body image helps confirm eligibility and track your progress. Fityou may ask you to upload a photo every few months; it is only visible to you and the partner doctor.",
//       },
//       {
//         q: "Do I know immediately if I qualify for treatment?",
//         a: "After you finish the consultation, an allied health professional will confirm your details. During working hours, a partner doctor typically reviews your answers within a few hours and you are contacted with the outcome.",
//       },
//       {
//         q: "Why wasn’t my subscription approved?",
//         a: "If a partner doctor does not approve your subscription, it means the treatment is not considered safe or suitable for you based on your medical information.",
//       },
//       {
//         q: "What happens if my subscription is not approved?",
//         a: "If you are not approved, no payment is taken. Any pending charges are cancelled and you are not billed for the service.",
//       },
//       {
//         q: "Do I have to consult my local doctor?",
//         a: "It is recommended to inform your usual doctor when starting new treatment so they can keep your medical record up to date and coordinate your overall care.",
//       },
//     ],
//   },
//   {
//     title: "Subscription",
//     icon: "🔄",
//     items: [
//       {
//         q: "Why do I need to complete the medical consultation with FitYou?",
//         a: "The medical consultation helps a registered FitYou doctor understand your health background, current symptoms, weight-loss challenges, and safety profile. The information you provide allows the doctor to assess whether a FitYou weight loss programme or doctor-approved treatment plan is appropriate for your goals.This step ensures safe, personalized, and medically guided weight reduction.",
//       },
//       {
//         q: "When do I qualify for FitYou’s treatment programme?",
//         a: "You may be eligible for treatment through FitYou if Your BMI is 30 or above, or Your BMI is 27 or above and you also have a weight-related condition such as high blood pressure, high cholesterol, or metabolic issues.You are not taking medications that may interact with treatments like Orlistat or GLP-1–based therapies.Every recommendation is made only after a doctor reviews your consultation to ensure safety and suitability.",
//       },
//       {
//         q: "What is BMI and why does FitYou use it?",
//         a: "Body Mass Index (BMI) is a simple calculation using your height and weight to understand whether you fall into an underweight, healthy, overweight, or obese category.FitYou uses BMI as one of the screening tools along with age, symptoms, and medical history to help doctors determine safe eligibility for weight-loss treatments, diets, and personalized plans.",
//       },
//       {
//         q: "Why does FitYou require a body image/photo?",
//         a: "FitYou requests a body image to confirm treatment eligibility, track your physical progress, and ensure medical accuracy during the consultation.The image is required only once every 3 months.It is visible only to you and the FitYou partner doctor reviewing your case.This step helps protect your safety and ensures vulnerable users receive appropriate care.Your privacy and comfort are fully prioritized.",
//       },
//       {
//         q: "Will I know immediately if I qualify for a FitYou treatment plan?",
//         a: "After completing your consultation An allied healthcare professional will contact you to confirm your details.A FitYou doctor reviews your submission within 1–2 hours during working hours.If you apply outside working hours, you will receive an update on the next working day.If the doctor needs more information or cannot prescribe treatment, you will receive a clear message explaining the next steps",
//       },
//       {
//         q: "Why wasn’t my FitYou subscription or treatment request approved?",
//         a: "Your safety comes first.If a FitYou doctor does not approve your subscription, it means the treatment is not suitable or medically safe for you based on your answers, existing conditions, or potential medication interactions.FitYou only prescribes treatments when a doctor can confirm that the plan is safe for your health.",
//       },
//       {
//         q: "What happens if my FitYou subscription is not approved?",
//         a: "If your treatment request is not approved:No payment will be taken.Your subscription is automatically cancelled.Any pending transactions will return to your account.FitYou ensures complete transparency — you will never face hidden fees or unauthorized charges.",
//       },
//       {
//         q: "Do I need to consult my local doctor as well?",
//         a: "Yes, FitYou recommends informing your local doctor about any new treatment or medical change.This helps maintain an accurate record of your medical history and supports long-term health monitoring alongside your FitYou programme.",
//       },
//       {
//         q: "9. How does FitYou choose the right weight-loss treatment for me?",
//         a: "FitYou doctors review your BMI, medical history, medications, symptoms, and lifestyle habits before recommending any treatment.This ensures the plan whether diet-based, behavioral, or medication-supported — is safe and tailored to your needs.",
//       },
//     ],
//   },
//   {
//     title: "Payment",
//     icon: "💳",
//     items: [
//       {
//   q: "Which payment options does FitYou offer?",
//   a: `FitYou provides multiple secure payment methods for your convenience, including:\n
// • Credit / Debit Cards\n
// • UPI & QR-based Payments\n
// • Net Banking\n
// • Digital Wallets\n
// \nAll payments are processed through trusted gateways to ensure a smooth and safe checkout experience.`
// }
// ,
//       {
//         q: "How do I apply a discount on FitYou?",
//         a: "If you have a promo code, simply enter it on the checkout page before completing your purchase.The discount will automatically be applied to your total",
//       },
//       {
//         q: "What can I do if my payment does not go through?",
//         a: "If a payment fails, you can retry from your account payment page or switch to a different payment method. You can also contact support for help.",
//       },
//     ],
//   },
//   {
//     title: "Delivery & returns",
//     icon: "🚚",
//     items: [
//       {
//         q: "What are the delivery costs?",
//         a: "Delivery for treatment packages is typically free of charge within the supported service area.",
//       },
//       {
//         q: "When will I receive my delivery?",
//         a: "Most deliveries arrive within a few working days after your order is approved and dispatched.",
//       },
//       {
//         q: "How can I track the delivery?",
//         a: "You can track shipments using the tracking link in your dispatch email or by visiting the shipments section of your Fityou account.",
//       },
//       {
//         q: "Do I have to sign for delivery?",
//         a: "For medicines, an OTP or signature may be required at delivery to confirm receipt and keep orders secure.",
//       },
//       {
//         q: "Do you deliver to a pickup point?",
//         a: "Fityou generally delivers directly to home addresses rather than public pickup points, for safety and privacy.",
//       },
//       {
//         q: "What can I do if my treatment didn’t arrive?",
//         a: "If a package has not arrived by the expected date, check the tracking link in your account or email, then contact support so they can investigate.",
//       },
//       {
//         q: "Can I return my treatment after it has been delivered?",
//         a: "Due to medicine regulations, treatments usually cannot be returned once they leave the pharmacy. If your order is damaged, contact support for help.",
//       },
//       {
//         q: "My package has been tampered with, what can I do?",
//         a: "If you suspect your package is damaged or opened, please contact Fityou support immediately so they can review and resolve the issue.",
//       },
//     ],
//   },
//   {
//     title: "Make changes",
//     icon: "🛠️",
//     items: [
//       {
//         q: "How do I change my delivery address?",
//         a: "You can update your delivery address from your Fityou account under your upcoming shipment details.",
//       },
//       {
//         q: "Can I change the dosage?",
//         a: "Dosage changes must be approved by a partner doctor. Use your account or contact support to request a review; do not change doses on your own.",
//       },
//       {
//         q: "How do I change my payment method?",
//         a: "You can update your payment method from your account when approving your next payment or in the billing section.",
//       },
//       {
//         q: "How do I change my personal details?",
//         a: "Certain personal details can be edited in your account. For key information such as name, date of birth, or height, you may need to contact support directly.",
//       },
//       {
//         q: "How do I subscribe or unsubscribe from promotional emails or text messages?",
//         a: "Go to the notifications section of your account to turn promotional emails or SMS alerts on or off at any time.",
//       },
//     ],
//   },
//   {
//     title: "Treatment",
//     icon: "💊",
//     items: [
//       {
//         q: "How does it work?",
//         a: "Fityou’s treatments can help control blood sugar, signal fullness to your brain, slow stomach emptying, and reduce appetite. Combined with lifestyle changes, this supports gradual and sustainable weight loss.",
//       },
//       {
//         q: "Why is it more effective than other weight loss medications?",
//         a: "These medicines act on several pathways at once: they help regulate hunger hormones, slow digestion, and reset the body’s weight‑regulation signals. This makes them more effective than many traditional options when used correctly.",
//       },
//       {
//         q: "What are the benefits?",
//         a: "When combined with healthy eating and activity, many people can lose a meaningful percentage of their starting weight, which may also reduce the risk of conditions like heart disease, high cholesterol, and stroke.",
//       },
//       {
//         q: "How much weight can I lose on your weight loss plan?",
//         a: "Weight loss varies from person to person and depends on diet and exercise. Clinical data suggest that some people may lose around 15–21% of their starting weight over time when following the full plan.",
//       },
//       {
//         q: "How is it guaranteed that the medicines are original?",
//         a: "All medicines are dispensed through accredited partner pharmacies that follow strict sourcing and storage requirements.",
//       },
//       {
//         q: "Who can use it?",
//         a: "Treatments are typically suitable for adults with a BMI of 30 or higher, or 27 or higher with weight‑related conditions. Suitability is always confirmed by a partner doctor.",
//       },
//       {
//         q: "When do I start seeing results?",
//         a: "Some people notice changes from the first month, but safe weight loss takes time. The goal is steady progress rather than rapid short‑term results.",
//       },
//       {
//         q: "Do I need to go on a diet?",
//         a: "Yes. The medication is designed to work alongside lifestyle changes. You should reduce overall calorie intake and increase physical activity to see the best results.",
//       },
//     ],
//   },
// ];

// export default function FaqPage() {
//   // 0 = All FAQs, 1..N = each section
//   const [activeTab, setActiveTab] = useState(0);
//   const [openAll, setOpenAll] = useState(null);    // { section, item } or null
//   const [openSingle, setOpenSingle] = useState(null); // { section, item } or null

//   const toggleAll = (sectionIndex, itemIndex) => {
//     setOpenAll((prev) =>
//       prev && prev.section === sectionIndex && prev.item === itemIndex
//         ? null
//         : { section: sectionIndex, item: itemIndex }
//     );
//   };

//   const toggleSingle = (sectionIndex, itemIndex) => {
//     setOpenSingle((prev) =>
//       prev && prev.section === sectionIndex && prev.item === itemIndex
//         ? null
//         : { section: sectionIndex, item: itemIndex }
//     );
//   };

//   return (
//     <>
//       <main className="min-h-screen bg-[#f7fcff] text-[#123873]">
//         <section className="max-w-5xl mx-auto px-4 pt-16 pb-24">
//           <h1 className="text-4xl md:text-5xl font-semibold mb-4 text-center">
//             How can we help?
//           </h1>
//           <p className="text-lg text-center text-[#304064] mb-10">
//             Answers to common questions about Fityou&apos;s medical weight loss
//             service.
//           </p>

//           {/* Tab buttons with left icons */}
//           <div className="flex flex-wrap gap-3 mb-10 justify-center">
//             <button
//               type="button"
//               onClick={() => setActiveTab(0)}
//               className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm md:text-base border transition ${
//                 activeTab === 0
//                   ? "bg-[#123873] text-white border-[#123873]"
//                   : "bg-white text-[#123873] border-[#cbd5f5] hover:border-[#123873]"
//               }`}
//             >
//               <span className="text-lg">📚</span>
//               <span>All FAQs</span>
//             </button>

//             {faqSections.map((sec, i) => (
//               <button
//                 key={sec.title}
//                 type="button"
//                 onClick={() => setActiveTab(i + 1)}
//                 className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm md:text-base border transition ${
//                   activeTab === i + 1
//                     ? "bg-[#123873] text-white border-[#123873]"
//                     : "bg-white text-[#123873] border-[#cbd5f5] hover:border-[#123873]"
//                 }`}
//               >
//                 <span className="text-lg">{sec.icon}</span>
//                 <span>{sec.title}</span>
//               </button>
//             ))}
//           </div>

//           {/* Content */}
//           {activeTab === 0 ? (
//             // ALL FAQS: category blocks, each row expandable with animated plus/cross
//             <div className="space-y-10">
//               {faqSections.map((sec, sIndex) => (
//                 <div
//                   key={sec.title}
//                   className="bg-white rounded-[24px] shadow-sm p-5 md:p-6"
//                 >
//                   <h2 className="text-3xl md:text-4xl font-semibold mb-2 text-[#123873]">
//                     {sec.title}
//                   </h2>
//                   <div className="h-[2px] w-full bg-[#cbd5f5] mb-4" />
//                   <div className="divide-y divide-[#edf2ff]">
//                     {sec.items.map((item, qIndex) => {
//                       const isOpen =
//                         openAll &&
//                         openAll.section === sIndex &&
//                         openAll.item === qIndex;
//                       return (
//                         <div key={item.q}>
//                           <button
//                             type="button"
//                             onClick={() => toggleAll(sIndex, qIndex)}
//                             className="w-full flex items-center gap-4 py-4 text-left hover:bg-[#f8fbff]"
//                           >
//                             {/* animated plus / cross on left */}
//                             <span
//                               className={`inline-flex items-center justify-center w-6 h-6 text-2xl text-[#123873] transition-transform duration-200 faq-plus-icon ${
//                                 isOpen ? "faq-plus-open" : ""
//                               }`}
//                             >
//                               +
//                             </span>
//                             <span
//                               className={`text-[17px] md:text-[18px] transition-font-weight duration-150 ${
//                                 isOpen ? "font-bold" : "font-medium"
//                               }`}
//                             >
//                               {item.q}
//                             </span>
//                           </button>
//                           <div
//                             className={`overflow-hidden transition-all duration-300 ${
//                               isOpen
//                                 ? "max-h-[400px] pb-3 pl-10 md:pl-12"
//                                 : "max-h-0 pl-10 md:pl-12"
//                             }`}
//                           >
//                             <p className="text-[15px] md:text-[16px] leading-relaxed text-[#304064]">
//                               {item.a}
//                             </p>
//                           </div>
//                         </div>
//                       );
//                     })}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           ) : (
//             // SINGLE SECTION: accordion with same left plus / cross animation
//             <div className="bg-white rounded-[28px] shadow-md border border-[#dde9ff]">
//               {faqSections[activeTab - 1].items.map((item, idx) => {
//                 const isOpen =
//                   openSingle &&
//                   openSingle.section === activeTab - 1 &&
//                   openSingle.item === idx;

//                 return (
//                   <div
//                     key={item.q}
//                     className="border-b border-[#edf2ff] last:border-none"
//                   >
//                     <button
//                       type="button"
//                       onClick={() => toggleSingle(activeTab - 1, idx)}
//                       className="w-full flex items-center gap-4 px-6 md:px-8 py-5 text-left hover:bg-[#f8fbff]"
//                     >
//                       <span
//                         className={`inline-flex items-center justify-center w-6 h-6 text-2xl text-[#123873] transition-transform duration-200 faq-plus-icon ${
//                           isOpen ? "faq-plus-open" : ""
//                         }`}
//                       >
//                         +
//                       </span>
//                       <span
//                         className={`text-[17px] md:text-[18px] transition-font-weight duration-150 ${
//                           isOpen ? "font-bold" : "font-semibold"
//                         }`}
//                       >
//                         {item.q}
//                       </span>
//                     </button>
//                     <div
//                       className={`overflow-hidden transition-all duration-300 ${
//                         isOpen ? "max-h-[500px] pb-5 px-14 md:px-16" : "max-h-0 px-14 md:px-16"
//                       }`}
//                     >
//                       <p className="text-[15px] md:text-[16px] leading-relaxed text-[#304064]">
//                         {item.a}
//                       </p>
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>
//           )}
//         </section>
//       </main>

//       {/* Extra CSS for animated plus / cross */}
//       <style jsx global>{`
//         body {
//           background-color: #f7fcff;
//         }

//         .faq-plus-icon {
//           line-height: 1;
//           transform-origin: center;
//         }

//         .faq-plus-open {
//           transform: rotate(45deg); /* + becomes × */
//         }
//       `}</style>
//     </>
//   );
// }



