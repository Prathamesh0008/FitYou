"use client";

import { useState, useRef , useEffect } from "react";


// ---------------- MONO BLACK/BLUE ICONS (MINIMAL) ----------------

const IconAllFaqs = (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="14" height="16" rx="2" />
    <rect x="7" y="2" width="14" height="16" rx="2" />
  </svg>
);

const IconAbout = (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="16" x2="12" y2="12" />
    <circle cx="12" cy="8" r="1" />
  </svg>
);

const IconConsultation = (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="5" y="3" width="14" height="18" rx="2" />
    <line x1="9" y1="7" x2="15" y2="7" />
    <line x1="9" y1="11" x2="15" y2="11" />
  </svg>
);

const IconSubscription = (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="1 4 1 10 7 10" />
    <polyline points="23 20 23 14 17 14" />
    <path d="M20 8A9 9 0 0 0 5 5L1 10" />
    <path d="M4 15A9 9 0 0 0 19 18l4-4" />
  </svg>
);

const IconPayment = (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="5" width="20" height="14" rx="2" />
    <line x1="2" y1="10" x2="22" y2="10" />
  </svg>
);

const IconDelivery = (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="1" y="3" width="15" height="13" />
    <polygon points="16 8 20 8 23 11 23 16 16 16" />
    <circle cx="5.5" cy="18.5" r="2" />
    <circle cx="18.5" cy="18.5" r="2" />
  </svg>
);

const IconChanges = (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 21v-4L14 6l4 4L7 21H3z" />
    <path d="M14 6l2-2 4 4-2 2" />
  </svg>
);

const IconTreatment = (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="8" width="18" height="8" rx="4" />
    <line x1="12" y1="8" x2="12" y2="16" />
  </svg>
);

const IconTablet = (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="6" y="6" width="12" height="12" rx="3" />
    <line x1="6" y1="12" x2="18" y2="12" />
  </svg>
);

const IconInjection = (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 3l3 3-9 9-3-3 9-9z" />
    <path d="M2 22l7-7" />
    <path d="M11 11l3 3" />
  </svg>
);



const faqSections = [
  {
    title: "About Fityou",
    icon: IconAbout,
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
    icon: IconConsultation,
    items: [
   {
  q: "1. Why do I need to complete the medical consultation?",
  a: `
The medical consultation allows a FitYou-registered doctor to understand your health background, weight history, lifestyle, and goals.<br /><br />
This helps the doctor determine whether a FitYou weight-loss programme, lifestyle plan, or treatment is safe and suitable for your needs.<br /><br />
This step ensures your weight-loss journey is guided and personalised.

<div style="height:12px; display:block;"></div>
  `,
},

{
  q: "2. When do I qualify for FitYou’s treatment programme?",
  a: `
You may qualify for a FitYou weight-loss plan if:<br /><br />

<ul style="list-style-type: disc; margin-left:20px; margin-bottom:14px; line-height:1.9;">
  <li>Your BMI is 30 or above</li>
  <li>OR your BMI is 27 or above and you have a weight-related condition such as high blood pressure or high cholesterol</li>
  <li>You are not taking medications that may interfere with certain weight-loss treatments</li>
</ul>

A FitYou doctor reviews your consultation to confirm whether the plan is safe for your individual profile.

<div style="height:12px; display:block;"></div>
  `,
},

{
  q: "3. What is BMI and why do you use it?",
  a: `
Body Mass Index (BMI) is calculated using your height and weight. It helps determine whether you fall into an underweight, healthy, overweight, or higher-weight range.<br /><br />
FitYou uses BMI — alongside age, medical history, and lifestyle details — to assess eligibility for weight-loss programmes and tailored treatment plans.

<div style="height:12px; display:block;"></div>
  `,
},

{
  q: "4. Why do you need a body image/photo?",
  a: `
FitYou requests a body image to confirm eligibility, maintain accuracy in your assessment, and track progress over time.<br /><br />

<ul style="list-style-type: disc; margin-left:20px; margin-bottom:14px; line-height:1.9;">
  <li>It is required once every 3 months</li>
  <li>It is visible only to you and the FitYou partner doctor</li>
  <li>It ensures your weight-loss plan aligns with your real progress and needs</li>
</ul>

<div style="height:12px; display:block;"></div>
  `,
},

{
  q: "5. Will I know immediately if I qualify for treatment?",
  a: `
After submitting your consultation:<br /><br />

<ul style="list-style-type: disc; margin-left:20px; margin-bottom:14px; line-height:1.9;">
  <li>A FitYou healthcare team member may contact you to verify your details</li>
  <li>A doctor typically reviews your answers within 1–2 hours during business hours</li>
  <li>If submitted after hours, you will receive an update the next business day</li>
  <li>If treatment is not suitable or more details are needed, FitYou will notify you clearly</li>
</ul>

<div style="height:12px; display:block;"></div>
  `,
},

{
  q: "6. Why wasn’t my FitYou subscription approved?",
  a: `
If your subscription is not approved, it means the treatment or medication may not be medically safe for you.<br /><br />
FitYou places your safety first and only recommends programmes or treatments that meet strict medical criteria.

<div style="height:12px; display:block;"></div>
  `,
},

{
  q: "7. What happens if my subscription is not approved?",
  a: `
If you’re not approved for treatment:<br /><br />

<ul style="list-style-type: disc; margin-left:20px; margin-bottom:14px; line-height:1.9;">
  <li>No payment is taken</li>
  <li>Your subscription is automatically cancelled</li>
  <li>Any pending transactions are reversed</li>
</ul>

FitYou ensures fully transparent billing with no hidden charges.

<div style="height:12px; display:block;"></div>
  `,
},

{
  q: "8. Do I have to consult my local doctor as well?",
  a: `
Yes. FitYou encourages informing your local doctor about any new treatment or changes to your wellness plan.<br /><br />
This helps maintain accurate medical records and ensures all your healthcare providers understand your weight-loss journey.

<div style="height:12px; display:block;"></div>
  `,
},

{
  q: "9. How does the FitYou consultation support my weight-loss goals?",
  a: `
The consultation helps doctors understand your habits, challenges, and health needs.<br /><br />
This allows them to recommend the right diet plans, lifestyle guidance, or supervised programmes to help you lose weight in a safe, healthy way.

<div style="height:12px; display:block;"></div>
  `,
},

{
  q: "10. Can I still get support if I don’t qualify for treatment?",
  a: `
Yes. Even if treatment isn’t recommended, FitYou provides personalised lifestyle strategies, meal planning, and behaviour-based coaching designed to help you lose weight naturally.

<div style="height:12px; display:block;"></div>
  `,
},



    ],
  },
  {
  title: "Subscription",
  icon: IconSubscription,
  items: [
    {
  q: "1. Why do I need to complete the medical consultation with FitYou?",
  a: `
The medical consultation helps a registered FitYou doctor understand your health background, current symptoms, weight-loss challenges, and safety profile.<br /><br />
This allows the doctor to decide whether a FitYou weight-loss programme or doctor-approved treatment plan is suitable for you.<br /><br />
This step ensures safe, personalised, medically guided weight reduction.

<div style="height:8px;"></div>
  `,
},

{
  q: "2. When do I qualify for FitYou’s treatment programme?",
  a: `
You may be eligible for treatment through FitYou if:<br /><br />

<ul style="list-style-type: disc; margin-left:20px; margin-bottom:12px; line-height:1.8;">
  <li>Your BMI is 30 or above</li>
  <li>OR your BMI is 27 or above with a weight-related condition such as high blood pressure, high cholesterol, or metabolic issues</li>
  <li>You are not taking medications that may interact with treatments like Orlistat or GLP-1–based therapies</li>
</ul>

A doctor reviews your consultation to confirm safety and suitability.

<div style="height:8px;"></div>
  `,
},

{
  q: "3. What is BMI and why does FitYou use it?",
  a: `
Body Mass Index (BMI) is calculated using your height and weight and helps determine whether you fall into an underweight, healthy, overweight, or obese category.<br /><br />
FitYou uses BMI along with age, symptoms, and medical history to determine safe eligibility for weight-loss treatments and personalised plans.

<div style="height:8px;"></div>
  `,
},

{
  q: "4. Why does FitYou require a body image/photo?",
  a: `
FitYou requests a body image to confirm eligibility, track physical progress, and ensure medical accuracy.<br /><br />

<ul style="list-style-type: disc; margin-left:20px; margin-bottom:12px; line-height:1.8;">
  <li>The image is required once every 3 months</li>
  <li>Visible only to you and the FitYou doctor</li>
  <li>Helps protect user safety and ensure appropriate care</li>
</ul>

Your privacy and comfort are fully prioritised.

<div style="height:8px;"></div>
  `,
},
{
  q: "5. Will I know immediately if I qualify for a FitYou treatment plan?",
  a: `
After completing your consultation:<br /><br />

<ul style="list-style-type: disc; margin-left:20px; margin-bottom:14px; line-height:1.9;">
  <li>An allied healthcare professional may contact you to verify your details</li>
  <li>A FitYou doctor reviews your submission within 1–2 hours during working hours</li>
  <li>If submitted after hours, you’ll receive an update the next working day</li>
  <li>If more information is needed or treatment isn't suitable, you will be informed clearly</li>
</ul>

<div style="height:12px; display:block;"></div>
  `,
},

{
  q: "6. Why wasn’t my FitYou subscription or treatment request approved?",
  a: `
Your safety comes first.<br /><br />
If a FitYou doctor does not approve your request, it means the treatment is not medically safe for you based on your answers, conditions, or possible medication interactions.<br /><br />
FitYou only prescribes treatments when a doctor confirms that the plan is safe for your health.

<div style="height:12px; display:block;"></div>
  `,
},

{
  q: "7. What happens if my FitYou subscription is not approved?",
  a: `
If your treatment request is not approved:<br /><br />

<ul style="list-style-type: disc; margin-left:20px; margin-bottom:14px; line-height:1.9;">
  <li>No payment will be taken</li>
  <li>Your subscription is automatically cancelled</li>
  <li>Any pending transactions are returned to your account</li>
</ul>

FitYou ensures complete transparency with no hidden fees or unauthorized charges.

<div style="height:12px; display:block;"></div>
  `,
},

{
  q: "8. Do I need to consult my local doctor as well?",
  a: `
Yes. FitYou recommends informing your local doctor about any new treatment or medical changes.<br /><br />
This keeps your medical records accurate and supports long-term monitoring of your health.

<div style="height:12px; display:block;"></div>
  `,
},

{
  q: "9. How does FitYou choose the right weight-loss treatment for me?",
  a: `
FitYou doctors review several factors before recommending a treatment:<br /><br />

<ul style="list-style-type: disc; margin-left:20px; margin-bottom:14px; line-height:1.9;">
  <li>Your BMI</li>
  <li>Your medical history</li>
  <li>Current medications</li>
  <li>Your symptoms</li>
  <li>Your daily lifestyle and habits</li>
</ul>

This ensures that every recommendation is safe and personalised.

<div style="height:12px; display:block;"></div>
  `,
},

{
  q: "10. What happens after my FitYou treatment is approved?",
  a: `
Once approved, you will receive:<br /><br />

<ul style="list-style-type: disc; margin-left:20px; margin-bottom:14px; line-height:1.9;">
  <li>A customised weight-loss plan</li>
  <li>Diet and lifestyle guidance</li>
  <li>Instructions for safe use of your treatment</li>
  <li>Regular monitoring and progress support</li>
</ul>

Your journey is supervised step-by-step to help you achieve healthy results.

<div style="height:12px; display:block;"></div>
  `,
},

  ],
},

  {
    title: "Payment",
    icon:  IconPayment,
    items: [
    {
  q: "1. Which payment options does FitYou offer?",
  a: `
FitYou provides multiple secure payment methods for your convenience:<br /><br />

<ul style="list-style-type: disc; margin-left:20px; margin-bottom:12px; line-height:1.8;">
  <li>Credit / Debit Cards</li>
  <li>UPI & QR-based Payments</li>
  <li>Net Banking</li>
  <li>Digital Wallets</li>
</ul>

All payments are processed through trusted gateways to ensure a smooth and safe checkout experience.

<div style="height:8px;"></div>
  `,
},

{
  q: "2. How do I apply a discount on FitYou?",
  a: `
If you have a promo code, simply enter it on the checkout page before completing your purchase.<br /><br />
The discount will automatically be applied to your total.

<div style="height:8px;"></div>
  `,
},

{
  q: "3. What should I do if my payment does not go through?",
  a: `
If your payment fails:<br /><br />

<ul style="list-style-type: disc; margin-left:20px; margin-bottom:12px; line-height:1.8;">
  <li>Try the payment link again from your FitYou account page</li>
  <li>Switch to a different payment method</li>
  <li>If the issue continues, contact our support team for assistance</li>
</ul>

We’ll help you complete your order smoothly.

<div style="height:8px;"></div>
  `,
},


    ],
  },
  {
    title: "Delivery & returns",
    icon: IconDelivery,
    items: [
    {
  q: "1. What are the delivery costs?",
  a: `
All FitYou orders come with free delivery.<br /><br />
There are no hidden charges or additional shipping fees.

<div style="height:8px;"></div>
  `,
},

{
  q: "2. When will I receive my delivery?",
  a: `
We aim to deliver your FitYou treatment package within 3–4 working days.<br /><br />
You will be notified as soon as your order is dispatched.

<div style="height:8px;"></div>
  `,
},

{
  q: "3. How can I track my delivery?",
  a: `
Tracking your package is easy:<br /><br />

<ul style="list-style-type: disc; margin-left:20px; margin-bottom:12px; line-height:1.8;">
  <li>Click the tracking link in your dispatch email</li>
  <li>Or visit your FitYou account under “Past Shipments”</li>
</ul>

You can check real-time updates at any time.

<div style="height:8px;"></div>
  `,
},

{
  q: "4. Do I have to sign for my delivery?",
  a: `
Yes. For safety and verification, you will need to provide your OTP to the delivery agent when receiving your FitYou parcel.

<div style="height:8px;"></div>
  `,
},

{
  q: "5. Do you deliver to pickup points?",
  a: `
Currently, FitYou delivers only to home addresses to ensure secure and verified delivery of your treatment.

<div style="height:8px;"></div>
  `,
},

{
  q: "6. What should I do if my treatment hasn’t arrived?",
  a: `
If your package is delayed:<br /><br />

<ul style="list-style-type: disc; margin-left:20px; margin-bottom:12px; line-height:1.8;">
  <li>Check the tracking link in your FitYou account under “Completed Shipments”</li>
  <li>Use the tracking link provided in your dispatch email</li>
  <li>If you still can’t find your order, contact Customer Support</li>
</ul>

We’re here to help.

<div style="height:8px;"></div>
  `,
},

{
  q: "7. Can I return my treatment after it has been delivered?",
  a: `
Due to Indian medical regulations, medicines cannot be returned once they leave partner pharmacies.<br /><br />

However:<br /><br />

<ul style="list-style-type: disc; margin-left:20px; margin-bottom:12px; line-height:1.8;">
  <li>If your order is damaged, contact FitYou Support immediately</li>
  <li>Dispose of unused medicine at a local pharmacy or doctor</li>
</ul>

<div style="height:8px;"></div>
  `,
},

{
  q: "8. My package looks tampered with. What should I do?",
  a: `
If you believe your package has been opened or damaged, contact FitYou Customer Services immediately.<br /><br />
We will investigate and resolve the issue quickly.

<div style="height:8px;"></div>
  `,
},


    ],
  },
  {
    title: "Make changes",
    icon: IconChanges,
    items: [
      {
  q: "1. How do I change my delivery address?",
  a: `
You can update your delivery address anytime by visiting your FitYou account and opening the “Upcoming Shipment” section.<br /><br />
Simply edit your address before your next weight loss treatment plan is processed.

<div style="height:8px;"></div>
  `,
},

{
  q: "2. Can I change the dosage of my treatment?",
  a: `
Yes. If your doctor has approved a different dosage, you can update it under “Upcoming Shipment” in your FitYou account.<br /><br />
This ensures your weight loss plan continues safely and accurately.

<div style="height:8px;"></div>
  `,
},

{
  q: "3. How do I change my payment method?",
  a: `
You can update or switch your payment method when approving your next scheduled payment.<br /><br />
FitYou supports multiple secure payment options to make your subscription easy to manage.

<div style="height:8px;"></div>
  `,
},

{
  q: "4. How do I update my personal details?",
  a: `
You can edit most of your personal information under the “Personal Details” section of your FitYou account.<br /><br />
However, for safety reasons, the following details cannot be changed online:<br /><br />

<ul style="list-style-type: disc; margin-left:20px; margin-bottom:12px; line-height:1.8;">
  <li>Name</li>
  <li>Date of birth</li>
  <li>Height</li>
</ul>

If these details need updating, please contact FitYou Support for assistance.

<div style="height:8px;"></div>
  `,
},

{
  q: "5. How do I subscribe or unsubscribe from FitYou promotional emails or SMS?",
  a: `
Go to the “Notifications” section in your FitYou account.<br /><br />
Here you can turn promotional emails and text messages on or off at any time.

<div style="height:8px;"></div>
  `,
},

    ],
  },
  {
    title: "Treatment",
    icon: IconTreatment,
    items: [
     {
  q: "1. How does the FitYou treatment work?",
  a: `
FitYou offers weight-loss treatments in both tablet and injection form, designed to support your journey in five science-backed ways:<br /><br />

<ul style="list-style-type: disc; margin-left:20px; margin-bottom:12px; line-height:1.8;">
  <li>Helps your body release the right amount of insulin to maintain healthy blood-sugar levels</li>
  <li>Encourages your body to clear excess sugar from the bloodstream</li>
  <li>Reduces the liver’s production of excess sugar</li>
  <li>Sends signals to the brain that help control appetite and reduce cravings</li>
  <li>Slows stomach emptying, helping you feel fuller for longer</li>
</ul>

This multi-action approach enhances your weight loss plan when paired with healthy lifestyle changes.

<div style="height:8px;"></div>
  `,
},

{
  q: "2. Why is FitYou’s treatment more effective than other weight loss medications?",
  a: `
FitYou’s weight-loss treatment works on several biological levels at once:<br /><br />

<ul style="list-style-type: disc; margin-left:20px; margin-bottom:12px; line-height:1.8;">
  <li>Boosts natural hormones responsible for hunger control</li>
  <li>Slows digestion, helping you feel full sooner and reduce calorie intake</li>
  <li>Helps regulate your metabolic “set point” to maintain a healthier weight</li>
</ul>

Because FitYou doctors prescribe treatments only after a full medical review, you receive safe, personalised care as part of a structured weight-loss programme.

<div style="height:8px;"></div>
  `,
},

{
  q: "3. What are the benefits of FitYou’s treatment?",
  a: `
FitYou treatments are clinically shown to support meaningful weight loss when combined with a healthy lifestyle.<br /><br />

<ul style="list-style-type: disc; margin-left:20px; margin-bottom:12px; line-height:1.8;">
  <li>Tablet-based plans may help you lose up to 15% of your starting weight</li>
  <li>Injection-based plans may support up to 21% weight loss over time</li>
  <li>Healthy weight loss reduces long-term risks like heart disease and high cholesterol</li>
</ul>

<div style="height:8px;"></div>
  `,
},

{
  q: "4. How much weight can I lose on the FitYou weight loss plan?",
  a: `
Weight loss varies depending on diet, routine, and programme consistency.<br /><br />

On average:<br /><br />

<ul style="list-style-type: disc; margin-left:20px; margin-bottom:12px; line-height:1.8;">
  <li>Weight-loss tablets may support up to 15% reduction in body weight within a year</li>
  <li>Weight-loss injections may support up to 21% reduction in body weight within 16 months</li>
</ul>

Your progress will depend on your lifestyle, daily habits, and consistency.

<div style="height:8px;"></div>
  `,
},

{
  q: "5. How do I know the medicines are authentic?",
  a: `
All FitYou treatments are dispensed through licensed and accredited partner pharmacies.<br /><br />
This ensures every medication you receive is authentic, safe, and quality-verified.

<div style="height:8px;"></div>
  `,
},

{
  q: "6. Who is eligible to use FitYou’s treatment?",
  a: `
FitYou treatments may be suitable if:<br /><br />

<ul style="list-style-type: disc; margin-left:20px; margin-bottom:12px; line-height:1.8;">
  <li>You have a BMI of 30 or above</li>
  <li>OR you have a BMI of 27 or above with a weight-related condition such as high cholesterol or high blood pressure</li>
</ul>

After completing the online medical quiz, a FitYou doctor reviews your medical history to confirm whether treatment is safe for you.

<div style="height:8px;"></div>
  `,
},

{
  q: "7. When will I begin to see results?",
  a: `
Results vary, but many users begin noticing changes within the first month.<br /><br />
Sustainable weight loss takes time, consistency, and lifestyle adjustments — your progress will be unique to you.

<div style="height:8px;"></div>
  `,
},

{
  q: "8. Do I need to follow a diet while on treatment?",
  a: `
Yes. For the treatment to work effectively, you must support it with a healthy diet and moderate physical activity.<br /><br />

FitYou recommends:<br /><br />

<ul style="list-style-type: disc; margin-left:20px; margin-bottom:12px; line-height:1.8;">
  <li>Eating fewer daily calories</li>
  <li>Choosing nutrient-dense meals</li>
  <li>Following a structured weight-loss diet plan</li>
  <li>Exercising 75–150 minutes per week (walking, light workouts, etc.)</li>
</ul>

Medication alone is not a replacement for lifestyle improvement.

<div style="height:8px;"></div>
  `,
},
    ],
  },
  {
    title: "Daily tablet",
    icon: IconTablet,
    items: [
     {
  q: "1. What is the FitYou daily tablet?",
  a: `
The FitYou daily tablet is a modern, clinically supported weight-loss medication taken once a day.<br /><br />
It is an oral, needle-free alternative to injections, making your plan simple and convenient.

<div style="height:8px;"></div>
  `,
},

{
  q: "2. How do I take the daily tablet?",
  a: `
Take your tablet every morning on an empty stomach.<br /><br />
Remember:<br /><br />

<ul style="list-style-type: disc; margin-left:20px; margin-bottom:12px; line-height:1.8;">
  <li>Take it first thing after waking up</li>
  <li>Wait 30 minutes before eating or drinking anything</li>
  <li>Follow your recommended diet plan for best results</li>
</ul>

This routine helps your body absorb the medication properly.

<div style="height:8px;"></div>
  `,
},

{
  q: "3. What dosages are available?",
  a: `
FitYou’s daily weight-loss tablet comes in three dosage options:<br /><br />

<ul style="list-style-type: disc; margin-left:20px; margin-bottom:12px; line-height:1.8;">
  <li>3 mg</li>
  <li>7 mg</li>
  <li>14 mg</li>
</ul>

Your dosage is chosen based on your medical profile and weight-loss goals.

<div style="height:8px;"></div>
  `,
},

{
  q: "4. How do I increase the dosage?",
  a: `
After 4 weeks of treatment, your dosage may be increased automatically — but only if:<br /><br />

<ul style="list-style-type: disc; margin-left:20px; margin-bottom:12px; line-height:1.8;">
  <li>A FitYou partner doctor approves it as safe</li>
  <li>You feel comfortable moving to the next level</li>
  <li>Your weight-loss programme is progressing well</li>
</ul>

This gradual increase helps your body adjust and supports long-term results.

<div style="height:8px;"></div>
  `,
},

{
  q: "5. What should I do if I miss a dose?",
  a: `
If you miss your tablet:<br /><br />

<ul style="list-style-type: disc; margin-left:20px; margin-bottom:12px; line-height:1.8;">
  <li>Do not take an extra dose</li>
  <li>Simply skip that day</li>
  <li>Take your next tablet the following morning as usual</li>
</ul>

An occasional missed dose will not affect your weight-loss plan.

<div style="height:8px;"></div>
  `,
},

{
  q: "6. What if I experience side effects during the plan?",
  a: `
Mild side effects are common when starting weight-loss medication, especially during dosage increases. These may include nausea or discomfort.<br /><br />

Helpful tips:<br /><br />

<ul style="list-style-type: disc; margin-left:20px; margin-bottom:12px; line-height:1.8;">
  <li>Avoid fatty or sugary foods</li>
  <li>Follow your recommended daily diet plan</li>
  <li>Stay hydrated and eat lighter meals</li>
</ul>

Most side effects reduce as your body adjusts to the programme.

<div style="height:8px;"></div>
  `,
},

    ],
  },
  {
    title: "Weekly injection",
    icon:IconInjection,
    items: [
     {
  q: "1. What is the weekly injection?",
  a: `
The FitYou weekly injection is a doctor-prescribed weight-management treatment taken once a week.<br /><br />
It helps regulate appetite, digestion, and blood-sugar balance — making it easier to feel full longer and naturally reduce food intake.

<div style="height:8px;"></div>
  `,
},

{
  q: "2. How does the weekly injection help with weight loss?",
  a: `
The treatment contains an active ingredient that supports safe, healthy weight loss:<br /><br />

<ul style="list-style-type: disc; margin-left:20px; margin-bottom:12px; line-height:1.8;">
  <li>Helps the body manage sugar more efficiently</li>
  <li>Reduces excess sugar levels</li>
  <li>Supports healthier liver function</li>
  <li>Sends signals to the brain to curb appetite</li>
  <li>Slows digestion so you stay fuller for longer</li>
</ul>

Combined with a structured diet and weight-loss plan, this improves long-term results.

<div style="height:8px;"></div>
  `,
},

{
  q: "3. What should I know before using the weekly injection?",
  a: `
Before starting treatment, a FitYou partner doctor will explain:<br /><br />

<ul style="list-style-type: disc; margin-left:20px; margin-bottom:12px; line-height:1.8;">
  <li>Whether the medicine is appropriate for your health profile</li>
  <li>The correct way to use the medication</li>
  <li>Your personalised weight-loss programme</li>
  <li>How to safely manage and store your prescription</li>
</ul>

Your doctor guides you through everything — you never need to figure it out alone.

<div style="height:8px;"></div>
  `,
},

{
  q: "4. How is the weekly injection prepared and used?",
  a: `
Your FitYou doctor or pharmacist will show you the correct method for preparing and using the injection.<br /><br />
FitYou does not encourage self-instruction — always follow professional medical guidance.<br /><br />
If you feel unsure at any time, contact a medical professional before continuing treatment.

<div style="height:8px;"></div>
  `,
},

{
  q: "5. What dosages are available?",
  a: `
FitYou partner doctors prescribe from a range of medical doses depending on your health needs.<br /><br />
Your dosage is adjusted gradually to ensure comfort, safety, and effectiveness.

<div style="height:8px;"></div>
  `,
},

{
  q: "6. What should I do if I miss a dose?",
  a: `
If you miss a dose, contact your prescribing doctor or follow their instructions.<br /><br />
Never take extra doses or attempt to “catch up.”

<div style="height:8px;"></div>
  `,
},

{
  q: "7. Can I change my dosage?",
  a: `
No — dosage adjustments are only made by FitYou’s partner doctors.<br /><br />
Never adjust your dose on your own. Medical supervision ensures safety and effectiveness.

<div style="height:8px;"></div>
  `,
},

{
  q: "8. How do I store the weekly injection safely?",
  a: `
Your doctor or pharmacist will explain how to store your medication properly.<br /><br />

Always keep the medicine in its original packaging and away from heat, light, and children.

<div style="height:8px;"></div>
  `,
},

{
  q: "9. What are the benefits of the weekly injection?",
  a: `
The weekly injection is clinically proven to support meaningful weight reduction when combined with healthy habits:<br /><br />

<ul style="list-style-type: disc; margin-left:20px; margin-bottom:12px; line-height:1.8;">
  <li>A proper weight-loss diet plan</li>
  <li>Regular physical activity</li>
  <li>Healthy lifestyle habits</li>
</ul>

Many users see improvements in appetite control and metabolic health.

<div style="height:8px;"></div>
  `,
},

{
  q: "10. What possible side effects should I know about?",
  a: `
Some individuals may experience mild, temporary side effects when beginning treatment, such as:<br /><br />

<ul style="list-style-type: disc; margin-left:20px; margin-bottom:12px; line-height:1.8;">
  <li>Nausea</li>
  <li>Indigestion</li>
  <li>Stomach discomfort</li>
  <li>Bloating or gas</li>
  <li>Occasional constipation</li>
</ul>

These usually improve as your body adjusts.<br /><br />
If any symptoms worry you, contact your FitYou doctor immediately.

<div style="height:8px;"></div>
  `,
},

{
  q: "11. Who is eligible for the weekly injection?",
  a: `
The injection treatment is available for adults who meet medical criteria, such as having a higher BMI or weight-related health issues.<br /><br />
A doctor will confirm whether it is suitable for your weight-loss programme.

<div style="height:8px;"></div>
  `,
},

{
  q: "12. When can I expect to see results?",
  a: `
Results vary, but many users begin noticing changes within the first month.<br /><br />
Consistency with your weight-loss diet, physical activity, and treatment schedule improves results.

<div style="height:8px;"></div>
  `,
},

{
  q: "13. Do I need lifestyle changes along with the injection?",
  a: `
Yes. For the best results, the treatment must be combined with:<br /><br />

<ul style="list-style-type: disc; margin-left:20px; margin-bottom:12px; line-height:1.8;">
  <li>A healthy weight-loss diet</li>
  <li>Regular physical activity</li>
  <li>Good hydration</li>
  <li>Long-term behaviour changes</li>
</ul>

Medication supports your progress — but habits create lasting transformation.

<div style="height:8px;"></div>
  `,
},

    ],
  },
];





export default function FaqPage() {
  // 0 = All FAQs, 1..N = each section
  const [activeTab, setActiveTab] = useState(0);
  const [openAll, setOpenAll] = useState(null); // { section, item } or null
  const [openSingle, setOpenSingle] = useState(null); // { section, item } or null
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  const contentRef = useRef(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.scrollTo(0, 0);
    }
  }, []);

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

  const handleMobileTabClick = (index) => {
    setActiveTab(index);
    setMobileFilterOpen(false);

    if (typeof window === "undefined" || window.innerWidth >= 768) return;

    setTimeout(() => {
      if (index === 0) {
        if (contentRef.current) {
          const top =
            contentRef.current.getBoundingClientRect().top +
            window.scrollY -
            80;

          window.scrollTo({ top, behavior: "smooth" });
        }
        return;
      }

      const firstQuestion = document.querySelector(
        `[data-section="${index}"][data-question="0"]`
      );

      if (firstQuestion) {
        const top =
          firstQuestion.getBoundingClientRect().top +
          window.scrollY -
          80;

        window.scrollTo({ top, behavior: "smooth" });
      }
    }, 300);
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

          {/* DESKTOP TABS (unchanged) */}
          <div className="relative z-20 mb-6">
            <div className="hidden md:flex flex-wrap gap-3 justify-center">
              <button
                type="button"
                onClick={() => setActiveTab(0)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm md:text-base border transition ${
                  activeTab === 0
                    ? "bg-[#123873] text-white border-[#123873]"
                    : "bg-white text-[#123873] border-[#cbd5f5] hover:border-[#123873]"
                }`}
              >
                <span className="text-lg">{IconAllFaqs}</span>
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

            {/* MOBILE HEADER + FILTER */}
            <div className="md:hidden">
              {/* First line: centered "All FAQs" */}
              <div className="flex justify-center mb-3">
                <h2 className="text-[18px] font-semibold text-[#123873]">
                  All FAQs
                </h2>
              </div>

              {/* Second line: Filter button on left */}
              <div className="flex justify-start mb-4">
                <button
                  type="button"
                  onClick={() => setMobileFilterOpen((p) => !p)}
                  className="flex items-center gap-2 px-4 py-2 rounded-full border border-[#cbd5f5] bg-white text-[14px] font-medium text-[#123873]"
                >
                  <span>Filter</span>
                  <span className="text-[16px] leading-none">
                    {mobileFilterOpen ? "×" : "▼"}
                  </span>
                </button>
              </div>

              {/* Inside Filter: one button per line, card style */}
              {mobileFilterOpen && (
                <div className="bg-[#e2f4fb] rounded-[24px] px-3 py-5 space-y-3 max-w-md mx-auto">
                  {/* All FAQs card */}
                  <button
                    type="button"
                    onClick={() => handleMobileTabClick(0)}
                    className={`w-full flex items-center gap-3 bg-white rounded-[14px] px-4 py-4 shadow-sm border ${
                      activeTab === 0 ? "border-[#123873]" : "border-transparent"
                    }`}
                  >
                    <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#b3d3ea] text-[#123873]">
                      {IconAllFaqs}
                    </span>
                    <span className="text-[16px] font-medium text-[#123873]">
                      All FAQs
                    </span>
                  </button>

                  {/* Section cards – one per line */}
                  {faqSections.map((sec, i) => (
                    <button
                      key={sec.title}
                      type="button"
                      onClick={() => handleMobileTabClick(i + 1)}
                      className={`w-full flex items-center gap-3 bg-white rounded-[14px] px-4 py-4 shadow-sm border ${
                        activeTab === i + 1
                          ? "border-[#123873]"
                          : "border-transparent"
                      }`}
                    >
                      <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#b3d3ea] text-[#123873]">
                        {sec.icon}
                      </span>
                      <span className="text-[16px] font-medium text-[#123873]">
                        {sec.title}
                      </span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* CONTENT */}
          {activeTab === 0 ? (
            // ALL FAQS
            <div ref={contentRef} className="relative z-10 space-y-10">
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
                            data-section={sIndex + 1}
                            data-question={qIndex}
                            onClick={() => toggleAll(sIndex, qIndex)}
                            className="w-full flex items-center gap-4 py-4 text-left hover:bg-[#f8fbff]"
                          >
                            <span
                              className={`inline-flex items-center justify-center w-10 h-10 text-4xl text-[#123873] transition-transform duration-200 faq-plus-icon ${
                                isOpen ? "faq-plus-open" : ""
                              }`}
                            >
                              +
                            </span>
                            <span
                              className={`text-[18px] md:text-[19px] transition-all duration-150 ${
                                isOpen ? "font-bold" : "font-normal"
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
                              className="text-[18px] md:text-[19px] leading-relaxed text-[#304064] space-y-3"
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
            <div
              ref={contentRef}
              className="relative z-10 bg-white rounded-[28px] shadow-md border border-[#dde9ff]"
            >
              {faqSections[activeTab - 1].items.map((item, idx) => {
                const isOpen =
                  openSingle &&
                  openSingle.section === activeTab - 1 &&
                  openSingle.item === idx;
                return (
                  <div key={item.q}>
                    <button
                      type="button"
                      data-section={activeTab}
                      data-question={idx}
                      onClick={() => toggleSingle(activeTab - 1, idx)}
                      className="w-full flex items-center gap-4 px-6 md:px-8 py-5 text-left hover:bg-[#f8fbff]"
                    >
                      <span
                        className={`inline-flex items-center justify-center w-10 h-10 text-4xl text-[#123873] transition-transform faq-plus-icon ${
                          isOpen ? "faq-plus-open" : ""
                        }`}
                      >
                        +
                      </span>

                      <span
                        className={`text-[20px] md:text-[19px] transition-font-weight duration-150 ${
                          isOpen ? "font-bold" : "font-normal"
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

      <style jsx global>{`
        body {
          background-color: #f7fcff;
        }
        .faq-plus-icon {
          line-height: 1;
          transform-origin: center;
          transition: transform 0.45s ease;
        }
        .faq-plus-open {
          transform: rotate(45deg);
        }
      `}</style>
    </>
  );
}

