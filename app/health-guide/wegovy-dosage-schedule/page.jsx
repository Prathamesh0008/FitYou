//app\health-guide\wegovy-dosage-schedule\page.jsx


"use client";

import Image from "next/image";
import { useRef } from "react";
import FAQ from "@/components/FAQ";
import BackButton from "@/components/BackButton";
import { useRouter } from "next/navigation";
import link from "next/link";


export default function WegovyDosageSchedulePage() {
  // ------------------ REFS ------------------
  const howWorkRef = useRef(null);             // 1. What Is Mounjaro?
const weightLossRef = useRef(null);          // 2. How Mounjaro Works
const dosageChartRef = useRef(null);         // 3. Clinical Trial Results
const doctorDecidesRef = useRef(null);       // 4. Diabetes Treatment Benefits
const keyTakeawaysRef = useRef(null);        // 5. India Launch
const tipsRef = useRef(null);                // 6. Dosage & Safe Usage
const sideEffectsRef = useRef(null);         // 7. Side Effects
const missedDoseRef = useRef(null);          // 8. Mounjaro vs Other Injections
const pauseDoseRef = useRef(null);           // 9. Price in India
const buyRef = useRef(null);                 // 10. How to Buy Through FitYou
const expertRef = useRef(null);              // 11. Expert Opinions & Conclusion

const router = useRouter();




  // Smooth scroll function
const scrollToSection = (ref) => {
  if (!ref?.current) return;

  const headerOffset = 140; // height of navbar + sticky back bar (adjust if needed)
  const elementTop = ref.current.getBoundingClientRect().top + window.pageYOffset;
  const offsetPosition = elementTop - headerOffset;

  window.scrollTo({
    top: offsetPosition,
    behavior: "smooth",
  });
};



  return (
    <div className="bg-white font-laila pb-20 text-[18px]">
     {/* Sticky back button BELOW navbar */}
<div className=" top-[70px] z-40 bg-white border-b border-[#E4EEF2]">
  <div className="max-w-6xl mx-auto px-4 py-4">
    <BackButton label="Back" />
  </div>
</div>




      {/* ------------------ HERO SECTION public\guide\wegovyDosageGuide.png------------------ */}
       <section className="max-w-6xl mx-auto px-4 pt-10 pb-16 grid md:grid-cols-2 gap-12">
        

        {/* LEFT SIDE — IMAGE + CHART */}
        <div className="flex justify-center">
          <div className="rounded-2xl overflow-hidden bg-white shadow-sm ">
            <Image
              src="/guide2/1.1.jpg" // ← replace with your image path
              alt="Mounjaro Dosage Chart"
              width={650}
              height={580}
              className="w-full h-auto object-contain"
            />
          </div>
        </div>

        {/* RIGHT SIDE — TEXT CONTENT */}
        <div className="flex flex-col justify-center">

          {/* Main heading */}
          <h1 className="
            text-[#102f6e]
            leading-tight
            text-[34px]
            md:text-[42px]
          ">
            Mounjaro Weight Loss Injection<br />
             Launched in India
          </h1>

          {/* Sub-text */}
          <p className="text-[#375C7A] text-[17px] leading-[1.8] mt-6">
              Buy authentic Mounjaro weight loss & diabetes injection in India.
          </p>

          <p className="text-[#375C7A] text-[17px] leading-[1.8] mt-4">
            Fast delivery, doctor support & verified stock.
          </p>

          <p className="text-[#375C7A] text-[17px] leading-[1.8] mt-4">
            Order Mounjaro online safely with FitYou.

          </p>

        </div>

      </section>

{/* ------------------ TABLE OF CONTENTS ------------------ */}
{/* ------------------ TABLE OF CONTENTS ------------------ */}
<section className="max-w-6xl mx-auto px-4 mb-12">
  <div className="bg-[#D8EEF3] rounded-2xl p-8">

    <h2 className="text-lg font-semibold text-[#0D4F8B] mb-4">
      In this article:
    </h2>

    <div className="grid md:grid-cols-2 gap-6 text-[#0D4F8B] text-[18px] leading-[1.8]">

      {/* LEFT COLUMN */}
     <ul className="space-y-3">

  <li className="cursor-pointer underline" onClick={() => scrollToSection(howWorkRef)}>
     What Is Mounjaro?
  </li>

  <li className="cursor-pointer underline" onClick={() => scrollToSection(weightLossRef)}>
     How Mounjaro Works
  </li>

  <li className="cursor-pointer underline" onClick={() => scrollToSection(dosageChartRef)}>
     Clinical Trial Results
  </li>

  <li className="cursor-pointer underline" onClick={() => scrollToSection(doctorDecidesRef)}>
     Diabetes Treatment Benefits
  </li>

  <li className="cursor-pointer underline" onClick={() => scrollToSection(keyTakeawaysRef)}>
     India Launch
  </li>


</ul>


      {/* RIGHT COLUMN */}
      <ul className="space-y-3">

         <li className="cursor-pointer underline" onClick={() => scrollToSection(tipsRef)}>
     Dosage & Safe Usage
  </li>

  <li className="cursor-pointer underline" onClick={() => scrollToSection(sideEffectsRef)}>
     Side Effects & Safety
  </li>

  <li className="cursor-pointer underline" onClick={() => scrollToSection(missedDoseRef)}>
     Mounjaro vs Other Injections
  </li>

  <li className="cursor-pointer underline" onClick={() => scrollToSection(pauseDoseRef)}>
   Price in India
  </li>

  <li className="cursor-pointer underline" onClick={() => scrollToSection(buyRef)}>
     How to Buy Through FitYou
  </li>

  <li className="cursor-pointer underline" onClick={() => scrollToSection(expertRef)}>
     Expert Opinions & Conclusion
  </li>

      </ul>

    </div>
  </div>
</section>







      {/* ------------------ ARTICLE BODY SECTIONS ------------------ */}
      <section className="max-w-4xl mx-auto px-4 space-y-20">


        
<div ref={pauseDoseRef} className="max-w-4xl mx-auto px-4 mt-16">

  <h2 className="text-[32px] md:text-[38px] text-[#0D4F8B] mb-6 leading-tight">
   Introduction: 
  </h2>

  <p className="text-[16px] md:text-[18px] text-[#375C7A] leading-[1.8] mb-6">
    The Indian healthcare and wellness market has witnessed a turning point with the arrival of Mounjaro, one of the most talked-about medical innovations globally. Originally launched as a type 2 diabetes treatment, Mounjaro has quickly gained worldwide attention for its breakthrough weight loss effects, with many calling it the most powerful medication ever developed for obesity management.

  </p>

  <p className="text-[18px] md:text-[18px] text-[#375C7A] leading-[1.8] mb-6">
    With Mounjaro officially launched in India, millions of people struggling with diabetes, obesity, hormonal weight gain, and metabolic challenges finally have access to a scientifically proven, globally acclaimed treatment. Whether you’re searching for the best medicine to lower blood sugar, the latest Mounjaro diabetes medicine, or simply trying to buy a monjour injection in India, this detailed guide from FitYou provides everything you need to know — backed by verified medical data, clinical evidence, and trusted global sources.
  </p>



</div>



        {/* ------------------ HOW IT WORKS ------------------ */}
       {/* ------------------ WHAT IS MOUNJARO ------------------ */}
<div ref={howWorkRef} className="max-w-4xl mx-auto px-4 mt-16 scroll-mt-40">

  <h2 className="text-[32px] md:text-[38px] text-[#0D4F8B] mb-6 leading-tight">
    What Is Mounjaro? Understanding India’s New Diabetes & Weight Loss Powerhouse
  </h2>

  <p className="text-[18px] leading-[1.8] text-[#375C7A] mb-6">
    Mounjaro is the brand name for Tirzepatide, a first-of-its-kind dual-hormone injectable medication developed by Eli Lilly. 
    Unlike older diabetes and weight-loss medicines, Mounjaro activates two metabolic hormones instead of one:
  </p>

  {/* Dual Hormones List */}
  <div className="space-y-6">

    {/* GLP-1 */}
    <div className="bg-[#F4FAFD] border border-[#D6E8F0] rounded-xl p-6">
      <p className="text-[#0D4F8B] font-semibold mb-3">✔ GLP-1 (Glucagon-Like Peptide-1)</p>
      <ul className="space-y-2 text-[#375C7A] text-[17px] leading-[1.7]">
        <li>— Suppresses appetite</li>
        <li>— Regulates insulin secretion</li>
        <li>— Slows digestion</li>
      </ul>
    </div>

    {/* GIP */}
    <div className="bg-[#F4FAFD] border border-[#D6E8F0] rounded-xl p-6">
      <p className="text-[#0D4F8B] font-semibold mb-3">✔ GIP (Glucose-Dependent Insulinotropic Polypeptide)</p>
      <ul className="space-y-2 text-[#375C7A] text-[17px] leading-[1.7]">
        <li>— Controls fat storage</li>
        <li>— Enhances insulin production</li>
        <li>— Helps maintain metabolic balance</li>
      </ul>
    </div>

  </div>

  <p className="text-[18px] leading-[1.8] text-[#375C7A] mt-6">
    This dual action is what makes Mounjaro different from other top diabetes medications 
    like Ozempic, Metformin, Rybelsus, or Saxenda.
  </p>

  {/* Why it matters */}
  <h3 className="text-[26px] md:text-[30px] text-[#0D4F8B] mt-10 mb-4">
    Why It Matters for India
  </h3>

  <p className="text-[18px] leading-[1.8] text-[#375C7A] mb-6">
    India has one of the world’s highest rates of type 2 diabetes, and obesity is rising rapidly. 
    Mounjaro’s arrival gives patients access to a medication that:
  </p>

  <ul className="space-y-3 text-[#375C7A] text-[17px] leading-[1.8]">
    <li>✔ Controls blood sugar effectively</li>
    <li>✔ Supports long-term weight loss</li>
    <li>✔ Helps prevent major complications</li>
    <li>✔ Improves metabolic health</li>
  </ul>

  <p className="text-[18px] leading-[1.8] text-[#375C7A] mt-6">
    For people searching for <strong>sugar diabetes medicine</strong> or 
    <strong> safe diabetes medicine online</strong>, Mounjaro offers an advanced and 
    highly effective solution.
  </p>

</div>

{/* ------------------ HOW MOUNJARO WORKS ------------------ */}
<div className="max-w-4xl mx-auto px-4 mt-20">

  <h2 ref={weightLossRef} className="text-[32px] md:text-[38px] text-[#0D4F8B] mb-6 leading-tight">
    How Mounjaro Works: The Science Behind Its Fast Weight Loss Results
  </h2>

  <p className="text-[18px] leading-[1.8] text-[#375C7A] mb-6">
    Unlike older weight-loss injections that only suppress appetite, Mounjaro works at a deeper 
    biological level, regulating hormones responsible for hunger, metabolism, fat storage, 
    and insulin resistance.
  </p>

  {/* Key Effects */}
  <h3 className="text-[24px] text-[#0D4F8B] font-semibold mb-4">Key Effects of Mounjaro on the Body</h3>

  <ul className="space-y-5 text-[#375C7A] text-[17px] leading-[1.8]">

    <li>
      <strong className="text-[#0D4F8B]">1. Controls Blood Sugar Naturally</strong><br />
      Mounjaro increases insulin production only when needed — making it one of the 
      safest medicines to lower blood sugar.
    </li>

    <li>
      <strong className="text-[#0D4F8B]">2. Suppresses Appetite Deeply</strong><br />
      Reduces cravings, emotional eating, and binge episodes.
    </li>

    <li>
      <strong className="text-[#0D4F8B]">3. Slows Gastric Emptying</strong><br />
      You stay full longer, naturally eating fewer calories per day.
    </li>

    <li>
      <strong className="text-[#0D4F8B]">4. Improves Metabolism & Fat Burning</strong><br />
      Helps the body reduce stubborn fat — especially around the abdomen.
    </li>

    <li>
      <strong className="text-[#0D4F8B]">5. Helps Reverse Insulin Resistance</strong><br />
      A major breakthrough for people with prediabetes, PCOS, or metabolic syndrome.
    </li>

  </ul>

  {/* Backed by studies */}
  <h3 className="text-[24px] text-[#0D4F8B] font-semibold mt-10 mb-4">
    Backed by Global Studies
  </h3>

  <p className="text-[18px] leading-[1.8] text-[#375C7A]">
    According to clinical trials and Eli Lilly’s official data (mounjaro.lilly.com):
  </p>

  <ul className="space-y-3 text-[#375C7A] text-[17px] leading-[1.8] mt-4">
    <li>✔ Patients lost <strong>15%–22% total body weight</strong> in 72 weeks</li>
    <li>✔ Over <strong>90% saw major blood sugar improvements</strong></li>
    <li>✔ Many were able to reduce or stop other diabetes medicines</li>
  </ul>

</div>


{/* ---------- WEGOVY TOP HEADER IMAGE (AKTIVE STYLE) ---------- */}
<div className="max-w-4xl mx-auto px-4 mb-6 mt-2">
  <Image
    src="/guide2/1.2.png" 
    alt="Wegovy dosage schedule header"
    width={1200}
    height={400}
    className="w-full h-auto object-contain"
  />
</div>


{/* ------------------ MOUNJARO CLINICAL TRIAL RESULTS ------------------ */}
<div className="max-w-4xl mx-auto px-4 mt-20">

  <h2 ref={dosageChartRef} className="text-[32px] md:text-[38px] text-[#0D4F8B] mb-6 leading-tight">
    Mounjaro for Weight Loss: What the Clinical Trials Reveal
  </h2>

  <p className="text-[18px] leading-[1.8] text-[#375C7A] mb-6">
    Mounjaro’s weight loss results have surprised even medical experts. 
    In the landmark SURMOUNT-1 clinical trial, participants lost:
  </p>

  {/* Trial Numbers */}
  <div className="bg-[#F4FAFD] border border-[#D6E8F0] rounded-xl p-6 mb-6">
    <ul className="space-y-3 text-[18px] text-[#0D4F8B] leading-[1.8] font-semibold">
      <li>15% total body weight loss with 5 mg</li>
      <li>19.5% total body weight loss with 10 mg</li>
      <li>22.4% total body weight loss with 15 mg</li>
    </ul>
  </div>

  <p className="text-[18px] leading-[1.8] text-[#375C7A] mb-6">
    These results surpass the outcomes from popular medications like Ozempic or Wegovy.
  </p>

  {/* Why It Works */}
  <h3 className="text-[26px] md:text-[30px] text-[#0D4F8B] mb-4">
    Why It Works Better Than Other Weight Loss Drugs
  </h3>

  <ul className="space-y-3 text-[17px] leading-[1.8] text-[#375C7A]">
    <li>✔ Dual-hormone action</li>
    <li>✔ Stronger appetite suppression</li>
    <li>✔ Better metabolic support</li>
    <li>✔ Higher fat-burning efficiency</li>
  </ul>

  <p className="text-[18px] leading-[1.8] text-[#375C7A] mt-6">
    Many experts predict that Mounjaro could become the #1 weight loss medication in India, 
    especially with rising demand for <strong>monjour injection in India</strong>.
  </p>

</div>
{/* ------------------ MOUNJARO FOR DIABETES ------------------ */}
<div className="max-w-4xl mx-auto px-4 mt-20">

  <h2 ref={doctorDecidesRef} className="text-[32px] md:text-[38px] text-[#0D4F8B] mb-6 leading-tight">
    Mounjaro as a Diabetes Treatment: Why Doctors Call It a Breakthrough
  </h2>

  <p className="text-[18px] leading-[1.8] text-[#375C7A] mb-6">
    While global attention focuses on weight loss, Mounjaro was originally created 
    as a Type 2 diabetes medication — and it delivers exceptional results.
  </p>

  {/* Benefits Box */}
  <div className="bg-[#F4FAFD] border border-[#D6E8F0] rounded-xl p-6">
    <h3 className="text-[#0D4F8B] font-semibold text-[20px] mb-4">Benefits for Diabetes Patients</h3>

    <ul className="space-y-3 text-[17px] leading-[1.8] text-[#375C7A]">
      <li>✔ Dramatic reduction in HbA1c levels</li>
      <li>✔ Better blood sugar control</li>
      <li>✔ Reduced risk of heart disease</li>
      <li>✔ Improved insulin sensitivity</li>
      <li>✔ Lower risk of neuropathy and kidney complications</li>
    </ul>
  </div>

  <p className="text-[18px] leading-[1.8] text-[#375C7A] mt-6">
    For those searching for top diabetes medications, Mounjaro is rapidly becoming 
    a preferred choice among endocrinologists worldwide.
  </p>

</div>

{/* ------------------ MOUNJARO INDIA LAUNCH ------------------ */}
<div className="max-w-4xl mx-auto px-4 mt-20">

  <h2 ref={keyTakeawaysRef} className="text-[32px] md:text-[38px] text-[#0D4F8B] mb-6 leading-tight">
    Mounjaro Weight Loss Injection Finally Launches in India
  </h2>

  <p className="text-[18px] leading-[1.8] text-[#375C7A] mb-6">
    The official Indian launch now gives consumers safe, regulated access 
    to Mounjaro — eliminating the need for imports or unverified products.
  </p>

  {/* Why the launch matters */}
  <h3 className="text-[26px] md:text-[30px] text-[#0D4F8B] mb-4">
    Why This Launch Matters
  </h3>

  <ul className="space-y-3 text-[17px] leading-[1.8] text-[#375C7A]">
    <li>✔ Eliminates counterfeit risk</li>
    <li>✔ Ensures proper Indian medical guidelines</li>
    <li>✔ Easier doctor supervision</li>
    <li>✔ More affordable and accessible</li>
    <li>✔ Better after-sales care through licensed platforms like FitYou</li>
  </ul>

  <p className="text-[18px] leading-[1.8] text-[#375C7A] mt-6">
    Demand has already surged across major cities such as Mumbai, Delhi, Hyderabad, Chennai, and Bangalore.
  </p>

</div>

{/* ---------- WEGOVY TOP HEADER IMAGE (AKTIVE STYLE) ---------- */}
<div className="max-w-4xl mx-auto px-4 mb-6 mt-2">
  <Image
    src="/guide2/1.3.jpg" 
    alt="Wegovy dosage schedule header"
    width={1200}
    height={400}
    className="w-full h-auto object-contain"
  />
</div>

{/* ------------------ MOUNJARO DOSAGE & SAFE USAGE ------------------ */}
<div className="max-w-4xl mx-auto px-4 mt-20">

  <h2 ref={tipsRef} className="text-[32px] md:text-[38px] text-[#0D4F8B] mb-6 leading-tight">
    Dosage, Usage & How to Take Mounjaro Safely
  </h2>

  <p className="text-[18px] leading-[1.8] text-[#375C7A] mb-6">
    Mounjaro is a once-weekly injection, similar to an insulin pen. 
    It’s important to follow a gradual titration schedule to minimise side effects 
    and help your body adapt comfortably.
  </p>

  {/* Dosage Schedule Box */}
  <div className="bg-[#F4FAFD] border border-[#D6E8F0] rounded-xl p-6 space-y-5">
    
    <div>
      <p className="text-[#0D4F8B] font-semibold text-[18px] mb-2">
        Starting Dose (First Month)
      </p>
      <p className="text-[#375C7A] text-[17px]">2.5 mg once per week</p>
    </div>

    <div>
      <p className="text-[#0D4F8B] font-semibold text-[18px] mb-2">
        Then Increase Gradually
      </p>
      <ul className="space-y-2 text-[#375C7A] text-[17px] leading-[1.7]">
        <li>5 mg</li>
        <li>7.5 mg</li>
        <li>10 mg</li>
        <li>12.5 mg</li>
        <li>15 mg (maximum dose)</li>
      </ul>
    </div>
  </div>

  {/* Safety Guidelines */}
  <h3 className="text-[26px] md:text-[30px] text-[#0D4F8B] mt-10 mb-4">
    Important Safety Guidelines
  </h3>

  <ul className="space-y-3 text-[17px] leading-[1.8] text-[#375C7A]">
    <li>✔ Do not mix with other weight loss drugs unless advised</li>
    <li>✔ Avoid self-increasing the dose</li>
    <li>✔ Store Mounjaro in refrigeration</li>
    <li>✔ Rotate injection sites</li>
    <li>✔ Consult your doctor before starting treatment</li>
  </ul>

  <p className="text-[18px] leading-[1.8] text-[#375C7A] mt-6">
    FitYou also offers free guidance and walk-through support for new users to ensure safe and effective usage.
  </p>

</div>

{/* ------------------ MOUNJARO SIDE EFFECTS ------------------ */}
<div className="max-w-4xl mx-auto px-4 mt-20">

  <h2 ref={sideEffectsRef} className="text-[32px] md:text-[38px] text-[#0D4F8B] mb-6 leading-tight">
    Side Effects & Safety Profile
  </h2>

  <p className="text-[18px] leading-[1.8] text-[#375C7A] mb-6">
    Like all medicines, Mounjaro may cause some temporary side effects, especially 
    during dose increases. Most users find them mild and short-lived.
  </p>

  {/* Common Side Effects */}
  <div className="bg-[#F4FAFD] border border-[#D6E8F0] rounded-xl p-6 mb-8">
    <p className="text-[#0D4F8B] font-semibold text-[18px] mb-3">
      Common Side Effects
    </p>

    <ul className="space-y-2 text-[17px] leading-[1.7] text-[#375C7A]">
      <li>✔ Nausea</li>
      <li>✔ Vomiting</li>
      <li>✔ Constipation</li>
      <li>✔ Dizziness</li>
      <li>✔ Fatigue</li>
    </ul>
  </div>

  {/* Rare Risks */}
  <div className="bg-[#FFF7EB] border border-[#F4C892] rounded-xl p-6">
    <p className="text-[#0D4F8B] font-semibold text-[18px] mb-3">
      Rare but Serious Risks
    </p>

    <ul className="space-y-2 text-[17px] leading-[1.7] text-[#375C7A]">
      <li>⚠ Pancreatitis</li>
      <li>⚠ Thyroid-related issues</li>
      <li>⚠ Gallbladder problems</li>
    </ul>
  </div>

  <p className="text-[18px] leading-[1.8] text-[#375C7A] mt-6">
    Most symptoms improve as the body adjusts, especially when the dose is increased gradually.
  </p>

</div>

{/* ---------- WEGOVY TOP HEADER IMAGE (AKTIVE STYLE) ---------- */}
<div className="max-w-4xl mx-auto px-4 mb-6 mt-2">
  <Image
    src="/guide2/1.4.jpg" 
    alt="Wegovy dosage schedule header"
    width={1200}
    height={400}
    className="w-full h-auto object-contain"
  />
</div>


{/* ------------------ MOUNJARO VS OTHER INJECTIONS ------------------ */}
<div className="max-w-4xl mx-auto px-4 mt-20">

  <h2 ref={missedDoseRef} className="text-[32px] md:text-[38px] text-[#0D4F8B] mb-6 leading-tight">
    Mounjaro vs Other Weight Loss Injections in India
  </h2>

  {/* Comparison Table – Desktop */}
  <div className="hidden md:block overflow-x-auto rounded-xl border border-[#D6E8F0]">
    <table className="min-w-full border-separate border-spacing-0 text-[#375C7A] text-[17px]">
      <thead className="bg-[#F2F7FA] text-[#0D4F8B]">
        <tr>
          <th className="p-4 text-left">Feature</th>
          <th className="p-4 text-left">Mounjaro</th>
          <th className="p-4 text-left">Ozempic</th>
          <th className="p-4 text-left">Wegovy</th>
          <th className="p-4 text-left">Saxenda</th>
        </tr>
      </thead>

      <tbody>
        <tr className="border-b">
          <td className="p-4 font-semibold text-[#0D4F8B]">Hormone Target</td>
          <td className="p-4">GLP-1 + GIP</td>
          <td className="p-4">GLP-1</td>
          <td className="p-4">GLP-1</td>
          <td className="p-4">GLP-1</td>
        </tr>

        <tr className="border-b bg-[#F9FCFE]">
          <td className="p-4 font-semibold text-[#0D4F8B]">Weight Loss</td>
          <td className="p-4">★★★★★</td>
          <td className="p-4">★★★★</td>
          <td className="p-4">★★★★</td>
          <td className="p-4">★★★</td>
        </tr>

        <tr className="border-b">
          <td className="p-4 font-semibold text-[#0D4F8B]">Injection Frequency</td>
          <td className="p-4">Weekly</td>
          <td className="p-4">Weekly</td>
          <td className="p-4">Weekly</td>
          <td className="p-4">Daily</td>
        </tr>

        <tr className="border-b bg-[#F9FCFE]">
          <td className="p-4 font-semibold text-[#0D4F8B]">Appetite Control</td>
          <td className="p-4">Very strong</td>
          <td className="p-4">Strong</td>
          <td className="p-4">Strong</td>
          <td className="p-4">Moderate</td>
        </tr>

        <tr>
          <td className="p-4 font-semibold text-[#0D4F8B]">Overall Rating</td>
          <td className="p-4 text-[#0D4F8B] font-bold">#1</td>
          <td className="p-4">#2</td>
          <td className="p-4">#3</td>
          <td className="p-4">#4</td>
        </tr>
      </tbody>
    </table>
  </div>

  {/* Mobile Card View */}
  <div className="md:hidden space-y-6 mt-8">
    {[
      { feature: "Hormone Target", values: ["GLP-1 + GIP", "GLP-1", "GLP-1", "GLP-1"] },
      { feature: "Weight Loss", values: ["★★★★★", "★★★★", "★★★★", "★★★"] },
      { feature: "Injection Frequency", values: ["Weekly", "Weekly", "Weekly", "Daily"] },
      { feature: "Appetite Control", values: ["Very strong", "Strong", "Strong", "Moderate"] },
      { feature: "Overall Rating", values: ["#1", "#2", "#3", "#4"] },
    ].map((item, i) => (
      <div key={i} className="bg-[#F7FBFF] border border-[#DDEAF3] rounded-2xl p-5 shadow-sm">
        <p className="text-[#0D4F8B] font-semibold text-[18px] mb-4">{item.feature}</p>
        
        <div className="grid grid-cols-2 gap-4 text-[#375C7A]">
          <div>
            <p className="font-semibold text-[#0D4F8B]">Mounjaro</p>
            <p>{item.values[0]}</p>
          </div>
          <div>
            <p className="font-semibold text-[#0D4F8B]">Ozempic</p>
            <p>{item.values[1]}</p>
          </div>
          <div>
            <p className="font-semibold text-[#0D4F8B]">Wegovy</p>
            <p>{item.values[2]}</p>
          </div>
          <div>
            <p className="font-semibold text-[#0D4F8B]">Saxenda</p>
            <p>{item.values[3]}</p>
          </div>
        </div>
      </div>
    ))}
  </div>

  <p className="text-[18px] leading-[1.8] text-[#375C7A] mt-8">
    This is why many Indians consider Mounjaro the 
    <strong> best monjour injection in India</strong> for both diabetes and weight loss.
  </p>

</div>

{/* ------------------ PRICE OF MOUNJARO ------------------ */}
<div className="max-w-4xl mx-auto px-4 mt-20">

  <h2 ref={pauseDoseRef} className="text-[32px] md:text-[38px] text-[#0D4F8B] mb-6 leading-tight">
    Price of Mounjaro in India
  </h2>

  <p className="text-[18px] leading-[1.8] text-[#375C7A] mb-6">
    Pricing varies depending on dose, availability, and official manufacturer guidelines.
  </p>

  <div className="bg-[#F4FAFD] border border-[#D6E8F0] rounded-xl p-6">
    <h3 className="text-[#0D4F8B] font-semibold text-[20px] mb-3">
      Estimated Price Range
    </h3>

    <ul className="space-y-3 text-[17px] leading-[1.8] text-[#375C7A]">
      <li>₹16,000 – ₹26,000 per pen</li>
      <li>Monthly treatment average: ₹22,000 – ₹40,000</li>
    </ul>
  </div>

  <h3 className="text-[26px] text-[#0D4F8B] mt-8 mb-4">
    FitYou offers:
  </h3>

  <ul className="space-y-3 text-[17px] leading-[1.8] text-[#375C7A]">
    <li>✔ Verified authentic stock</li>
    <li>✔ Cold-chain delivery</li>
    <li>✔ Discounts on multi-month packs</li>
  </ul>

</div>

{/* ------------------ HOW TO BUY MOUNJARO ------------------ */}
<div className="max-w-4xl mx-auto px-4 mt-20">

  <h2 ref={buyRef} className="text-[32px] md:text-[38px] text-[#0D4F8B] mb-6 leading-tight">
    How to Buy Mounjaro Online in India Through FitYou
  </h2>

  <p className="text-[18px] leading-[1.8] text-[#375C7A] mb-6">
    FitYou is one of India’s most trusted platforms for regulated access to 
    global high-demand medical products.
  </p>

  {/* Steps */}
  <h3 className="text-[26px] text-[#0D4F8B] mb-4">Steps to Order</h3>

  <ul className="space-y-3 text-[17px] leading-[1.8] text-[#375C7A]">
    <li>✔ Visit FitYou’s Mounjaro product page</li>
    <li>✔ Select dose (2.5 mg – 15 mg)</li>
    <li>✔ Upload prescription or request telemedical consultation</li>
    <li>✔ Complete secure checkout</li>
    <li>✔ Receive express cold-chain delivery</li>
  </ul>

  {/* Why Choose FitYou */}
  <h3 className="text-[26px] text-[#0D4F8B] mt-10 mb-4">Why Choose FitYou?</h3>

  <ul className="space-y-3 text-[17px] leading-[1.8] text-[#375C7A]">
    <li>✔ 100% authenticity guarantee</li>
    <li>✔ Free medical guidance</li>
    <li>✔ Fast & safe delivery</li>
    <li>✔ Discreet packaging</li>
    <li>✔ Premium customer support</li>
  </ul>

  <p className="text-[18px] leading-[1.8] text-[#375C7A] mt-6">
    If you’re searching for <strong>diabetes medicine online</strong> or want to 
    <strong> buy monjour injection</strong>, FitYou ensures safe and verified access.
  </p>

</div>

{/* ------------------ EXPERT & USER OPINIONS ------------------ */}
<div className="max-w-4xl mx-auto px-4 mt-20">

  <h2 ref={expertRef} className="text-[32px] md:text-[38px] text-[#0D4F8B] mb-6 leading-tight">
    Expert Opinions & Early Indian User Experiences
  </h2>

  {/* Doctors Opinions */}
  <div className="bg-[#F4FAFD] border border-[#D6E8F0] rounded-xl p-6 mb-8">
    <p className="text-[#0D4F8B] font-semibold text-[18px] mb-3">Doctors Say:</p>

    <ul className="space-y-2 text-[17px] text-[#375C7A] leading-[1.7]">
      <li>“Mounjaro represents the biggest leap in diabetes treatment after insulin.”</li>
      <li>“Weight loss is significantly higher than any GLP-1 drug we’ve seen.”</li>
    </ul>
  </div>

  {/* User Reviews */}
  <div className="bg-[#FFF7EB] border border-[#F4C892] rounded-xl p-6 mb-8">
    <p className="text-[#0D4F8B] font-semibold text-[18px] mb-3">Indian Users Say:</p>

    <ul className="space-y-2 text-[17px] text-[#375C7A] leading-[1.7]">
      <li>“Lost 8 kg in 6 weeks without intense dieting.”</li>
      <li>“My sugar levels dropped from 230 to 120 within 3 months.”</li>
      <li>“I tried everything — Mounjaro is the only thing that worked for my PCOS weight.”</li>
    </ul>
  </div>

  <p className="text-[18px] text-[#375C7A] leading-[1.8]">
    Results vary, but global and Indian feedback remains overwhelmingly positive.
  </p>

</div>

{/* ------------------ FINAL CONCLUSION ------------------ */}
<div className="max-w-4xl mx-auto px-4 mt-20">

  <h2 className="text-[32px] md:text-[38px] text-[#0D4F8B] mb-6 leading-tight">
    Conclusion: Is Mounjaro Right for You?
  </h2>

  <p className="text-[18px] leading-[1.8] text-[#375C7A] mb-6">
    Mounjaro’s launch in India marks a powerful shift in diabetes and obesity treatment. 
    With unmatched blood sugar control, deep appetite suppression, and life-changing 
    weight loss results, it stands as one of the most advanced medical treatments today.
  </p>

  <p className="text-[18px] leading-[1.8] text-[#375C7A] mb-6">
    If you’re considering Mounjaro for diabetes or weight loss, FitYou provides safe, verified, 
    and convenient access — backed by real medical guidance.
  </p>

  

</div>

{/* ---------- WEGOVY TOP HEADER IMAGE (AKTIVE STYLE) ---------- */}
<div className="max-w-4xl mx-auto px-4 mb-6 mt-2">
  <Image
    src="/guide2/1.5.jpg" 
    alt="Wegovy dosage schedule header"
    width={1200}
    height={400}
    className="w-full h-auto object-contain"
  />
</div>



     

<FAQ
  items={[
    {
      question:
        " What is Mounjaro and how does it work?",
      answer:
        " “Let me explain Mounjaro. This advanced Mounjaro diabetes medicine is engineered to support both weight loss and blood-sugar control. Using dual-hormone action—GLP-1 and GIP—it helps reduce appetite, improve insulin response, and stabilize glucose levels. That’s why it ranks among the top diabetes medications worldwide. If you're looking to manage weight while improving metabolic health, many users now buy Monjour injection as it’s considered one of the best medicines to lower blood sugar available today.”",
    },
    {
      question: "Is Mounjaro available in India?",
      answer:
        " “Yes, Mounjaro is now accessible in India through select pharmacies and trusted platforms offering diabetes medicine online. Demand continues to rise as people search for the best Monjour injection in India. FitYou provides safe, authentic products for those looking to buy Monjour injection legally and securely. If you're seeking modern sugar diabetes medicine, Mounjaro stands out with its proven efficiency. Availability can vary by region, which is why online ordering has become the most reliable way to access this breakthrough medication.”",
    },
    {
      question:
        " Is Mounjaro safe for weight loss?",
      answer:
        " “Mounjaro is clinically tested and proven safe for weight loss when used correctly. Its strong track record is why many consider it the best Monjour injection in India for both fat reduction and blood sugar control. Designed as a powerful Mounjaro diabetes medicine, it also ranks high among top diabetes medications. When purchased as diabetes medicine online, users should follow a doctor’s guidance—especially if they’re on other sugar diabetes medicine. Overall, Mounjaro provides a safe, effective path to sustainable weight management.”",
    },
    {
      question:
        " Do I need a prescription to buy Mounjaro in India?",
      answer:
        " “Yes, a valid prescription is required to buy Monjour injection in India. Because Mounjaro is a regulated Mounjaro diabetes medicine, proper medical supervision ensures correct dosing and safe use. Platforms like FitYou offer easy teleconsultations to help you obtain one. Whether you’re seeking the best medicine to lower blood sugar or an injectable for weight loss, a doctor will guide you based on your health profile. Ordering diabetes medicine online without a prescription is unsafe and not recommended.”",
    },
    {
      question:
        " How fast can I expect weight loss with Mounjaro?",
      answer:
        " “Most people begin experiencing appetite suppression within weeks, with noticeable weight loss appearing by weeks eight to twelve. This rapid transformation is one reason Mounjaro is considered the best Monjour injection in India for weight management. Since it also acts as a strong sugar diabetes medicine, many patients choose it among the top diabetes medications. If you buy Monjour injection online, remember that steady progress comes with consistency, medical guidance, and healthy lifestyle habits.”",
    },
    {
      question:
        "Can Mounjaro help with diabetes control?",
      answer:
        "“Yes. Mounjaro is widely recognized as one of the best medicines to lower blood sugar. By improving insulin sensitivity and reducing glucose spikes, it delivers powerful diabetic support. It’s considered one of the top diabetes medications for managing long-term metabolic health. Whether ordered from a pharmacy or as diabetes medicine online, it functions as an effective sugar diabetes medicine for type 2 diabetes. Many users benefit from its dual action—better blood sugar control and meaningful weight loss.”",
    },
    {
      question:
        " What dosage of Mounjaro should I start with?",
      answer:
        " “Most individuals start with a 2.5 mg weekly dose. If you buy Monjour injection online, your doctor will personalize your dosing plan. As a leading Mounjaro diabetes medicine, Mounjaro requires careful step-up adjustments to avoid side effects and optimize benefits. This structured approach helps your body adapt safely. Those looking for the best Monjour injection in India should always follow professional instructions to get the most effective and comfortable experience from their treatment.”",
    },
    {
      question:
        "Is Mounjaro better than other diabetes or weight-loss injections?",
      answer:
        "“Many doctors and patients believe Mounjaro outperforms other injectables due to its dual GLP-1 and GIP mechanism. This unique combination often makes it more effective than other top diabetes medications. It’s recommended for those seeking the best medicine to lower blood sugar or a reliable sugar diabetes medicine. When comparing options for Monjour injection in India, it consistently offers superior metabolic improvements, making it a popular choice for people ordering diabetes medicine online.”",
    },
    {
      question:
        "Are there side effects of using Mounjaro?",
      answer:
        " “Like any medication, Mounjaro may cause mild side effects such as nausea, digestive discomfort, or fatigue—especially in the early weeks. These effects typically fade as your body adjusts. As a strong Mounjaro diabetes medicine, responsible dosing is important. Users who buy Monjour injection online often receive guidance to help manage early symptoms. Compared to many other top diabetes medications, Mounjaro’s side effects are generally manageable. If you take other sugar diabetes medicine, consult your doctor for compatibility.”",
    },
    {
      question:
        " Where can I buy authentic Mounjaro in India?",
      answer:
        "“You can buy authentic Mounjaro from trusted providers like FitYou, which offer verified stock and reliable delivery. Many users prefer purchasing diabetes medicine online for convenience and safety. If you're looking for the best Monjour injection in India, choose suppliers who offer cold-chain shipping and prescription support. FitYou ensures you buy Monjour injection safely with full authenticity checks. As a leading sugar diabetes medicine, Mounjaro should always be purchased from reputable sources to ensure effectiveness and safety.”",
    }
  ]}
/>

{/* ------------------------------------------------------------- */}
{/* ------------------ CTA BUTTONS ------------------------------ */}
{/* ------------------------------------------------------------- */}

<div className="max-w-xl mx-auto text-center mt-20 space-y-4">
  <button 
   onClick={()=>router.push("/program")}
   className="w-full bg-[#A7CBD7] hover:bg-[#a5d7e7] text-[#0D4F8B] font-semibold py-3 rounded-lg text-[18px]">
     View programme
   </button>

  <button
  onClick={()=>router.push("/quiz")}
  className="w-full bg-[#FFF7EB] border border-[#F4C892] text-[#0D4F8B] font-semibold py-3 rounded-lg text-[17px]">
    Do I qualify?
  </button>
</div>

{/* ------------------------------------------------------------- */}
{/* ------------------ ABOUT THE AUTHOR -------------------------- */}
{/* ------------------------------------------------------------- */}

<div className="max-w-4xl mx-auto bg-[#FFF9F2] border border-[#F5E3C8] rounded-2xl p-8 mt-16">
  <h3 className="text-[#0D4F8B] font-semibold text-[20px] mb-3">
    About the author:
  </h3>

  <p className="text-[#0D4F8B] font-semibold">
    Gauri Ghatnekar-Desai
  </p>

  <p className="text-[#375C7A] text-[18px] leading-[1.7] mt-1">
    holds a PG Diploma in Emergency Medical Services from Symbiosis Institute of Health Sciences, Pune.
    As a professional healthcare writer, she creates simple, accurate, detail-oriented content for health organisations, healthcare providers, and patients.
  </p>

  <p className="text-[#375C7A] text-[18px] leading-[1.7] mt-2">
    Beyond the desk, she enjoys reading, travelling, and adventure sports.
  </p>

  {/* Dates */}
  <div className="flex flex-col md:flex-row gap-4 text-[#375C7A] text-[14px] mt-5">
    <div className="flex items-center gap-2">
      <span>📅</span>
      <span>
        Update date <strong>November, 17 2025</strong>
      </span>
    </div>

    <div className="flex items-center gap-2">
      <span>📝</span>
      <span>
        Publish date <strong>November, 17 2025</strong>
      </span>
    </div>
  </div>
</div>

{/* ------------------------------------------------------------- */}
{/* ------------------ REFERENCES SECTION ------------------------ */}
{/* ------------------------------------------------------------- */}

{/* <div className="max-w-4xl mx-auto px-4 mt-16 pb-16">
  <h3 className="text-[#0D4F8B] font-semibold text-[20px] mb-4">
    References:
  </h3>

  <ul className="space-y-6 text-[18px] leading-[1.7] text-[#375C7A]">
    <li>
      <strong>[1]</strong> Kommu, S., & Whitfield, P. (2024, February 11). Semaglutide. 
      StatPearls - NCBI Bookshelf. 
      <a 
        href="https://www.ncbi.nlm.nih.gov/books/NBK603723/"
        target="_blank"
        className="text-[#0D4F8B] underline"
      >
        https://www.ncbi.nlm.nih.gov/books/NBK603723/
      </a>
    </li>

    <li>
      <strong>[2]</strong> Moiz, A., Levett, J. Y., Filion, K. B., Peri, K., Reynier, P., & Eisenberg, M. J. (2024). 
      Long-Term Efficacy and Safety of Once-Weekly semaglutide for weight loss in patients without Diabetes:  
      A Systematic Review and Meta-Analysis of Randomized Controlled Trials.  
      <i>The American Journal of Cardiology</i>, 222, 121–130.  
      <a 
        href="https://doi.org/10.1016/j.amjcard.2024.04.041"
        target="_blank"
        className="text-[#0D4F8B] underline"
      >
        https://doi.org/10.1016/j.amjcard.2024.04.041
      </a>
    </li>
  </ul>
</div> */}


      </section>
    </div>
  );
}