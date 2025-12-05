"use client";

import React from "react";

export default function TermsPage() {
  return (
    <>
      {/* Page-local Laila font */}
      
        <link
          href="https://fonts.googleapis.com/css2?family=Laila:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      

      <main className="min-h-screen bg-[#F7FAFC]">
        {/* outer wrapper like reference (wide margins, centered column) */}
        <section
          className="max-w-4xl mx-auto px-6 pt-15 pb-20 text-[#123873]"
          style={{
            fontFamily:
              "'Laila', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
          }}
        >
          {/* Top heading and intro – match left start of body */}
          <header className="mb-16">
            <h1 className="text-6xl sm:text-7xl md:text-[72px] leading-tight font-semibold ">
              Terms &amp; conditions
            </h1>
           <p className="mt-10 text-base md:text-lg leading-relaxed text-[#304064]">
  Fityou Healthcare Private Limited, on behalf of itself and its affiliates or group
  companies under the brand &quot;Fityou&quot;, is the author and publisher of this
  website and the services made available through it.
</p>

          </header>

          {/* From here down, text is LEFT aligned, like the reference */}
          <div className="text-left text-base md:text-lg leading-relaxed text-[#304064] space-y-6">
           {/* 1. Nature and applicability */}
<section>

  {/* -------------------- 1. NATURE AND APPLICABILITY -------------------- */}
  <h2 className="text-3xl md:text-[45px]  text-[#123873] mb-3">
    1. Nature and Applicability of Terms
  </h2>

  <p>
    FitYou Healthcare Private Limited, on behalf of itself and its affiliates and group
    companies operating under the brand “FitYou”, is the owner and operator of the website
    and internet platform.
  </p>

  <p>
    FitYou provides digital health and wellness services focused on medical ways to lose
    weight, proven weight loss programs, nutritionist weight loss plans, and medication to
    help you lose weight.
  </p>

  <p>
    By accessing, browsing, or using this Website and its Services, you agree to be bound by
    these Terms and Conditions (“Terms”) and our Privacy Policy, which together form a
    legally binding agreement (“Agreement”) between you and FitYou.
  </p>

  {/* -------------------- A. WHO THESE TERMS APPLY TO -------------------- */}
  <h3 className="mt-6 mb-2 font-semibold text-[20px]">A. Who These Terms Apply To</h3>

  <p>These Terms apply to all users of the Website, including but not limited to:</p>

  <ul className="list-disc pl-6 mt-2 space-y-2">
    <li>
      Medical practitioners, nutritionists, fitness experts, and wellness professionals
      (“Practitioners”) who provide consultation or weight loss guidance.
    </li>

    <li>
      Patients or individuals seeking:
      <ul className="list-[circle] pl-6 mt-2 space-y-1">
        <li>weight loss medication</li>
        <li>best medicine to lose weight</li>
        <li>medical weight loss treatment</li>
        <li>healthy way to lose weight in a month</li>
        <li>nutrition-based and smart weight loss plans</li>
      </ul>
    </li>

    <li>
      General users and visitors accessing weight loss information, weight loss diaries,
      or personalized programs.
    </li>

    <li>
      Third-party pharmacies or partners connected with weight loss medicine and wellness
      support.
    </li>
  </ul>

  {/* -------------------- B. SCOPE OF SERVICES -------------------- */}
  <h3 className="mt-6 mb-2 font-semibold text-[20px]">B. Scope of Services</h3>

  <p>FitYou offers digital services that may include:</p>

  <ul className="list-disc pl-6 mt-2 space-y-2">
    <li>Access to weight loss plans that work</li>
    <li>Guidance on best medicine for weight loss in India</li>
    <li>Support for lose weight and keep it off programs</li>
    <li>Easy to follow weight loss plans</li>
    <li>Proven weight loss methods</li>
    <li>Wellness tracking tools such as weight loss diaries</li>
    <li>Support for individuals who need help to lose weight</li>
    <li>Access to consultation for medication and weight loss solutions</li>
  </ul>

  <p className="mt-2">
    All services are subject to modification, enhancement, suspension, or discontinuation
    at the sole discretion of FitYou.
  </p>

  {/* -------------------- C. ACCEPTANCE OF TERMS -------------------- */}
  <h3 className="mt-6 mb-2 font-semibold text-[20px]">C. Acceptance of Terms</h3>

  <p>By accessing the Website or using any Service offered by FitYou, you:</p>

  <ul className="list-disc pl-6 mt-2 space-y-2">
    <li>Confirm that you have read, understood, and accepted these Terms.</li>
    <li>Agree to comply with all applicable laws and regulations.</li>
    <li>
      Acknowledge that FitYou provides support for weight reduction plans and medical
      weight loss guidance, not emergency medical services.
    </li>
    <li>If you do not agree with this Agreement, you must discontinue use immediately.</li>
  </ul>

  {/* -------------------- D. CHANGES TO AGREEMENT -------------------- */}
  <h3 className="mt-6 mb-2 font-semibold text-[20px]">D. Changes to the Agreement</h3>

  <p>
    FitYou reserves the right to modify, update, or replace these Terms at any time without
    prior notice. Any changes will be published on the Website. Continued use after updates
    means acceptance of the revised Terms.
  </p>

  <p>You are encouraged to review these Terms regularly.</p>

  {/* -------------------- E. ACCOUNT RESPONSIBILITY -------------------- */}
  <h3 className="mt-6 mb-2 font-semibold text-[20px]">E. Account Responsibility</h3>

  <p>When you create an account to use tools such as:</p>

  <ul className="list-disc pl-6 mt-2 space-y-1">
    <li>Personalized weight loss plans</li>
    <li>diet plans to help lose weight</li>
    <li>smart weight loss plans</li>
    <li>weight medication guidance</li>
  </ul>

  <p className="mt-2">
    You agree to provide accurate and complete information and maintain the confidentiality
    of your login credentials.
  </p>

  {/* -------------------- F. LEGAL COMPLIANCE -------------------- */}
  <h3 className="mt-6 mb-2 font-semibold text-[20px]">F. Legal Compliance</h3>

  <p>These Terms are governed and interpreted in accordance with the laws of India, including:</p>

  <ul className="list-disc pl-6 mt-2 space-y-1">
    <li>The Indian Contract Act, 1872</li>
    <li>The Consumer Protection Act, 2019</li>
    <li>The Information Technology Act, 2000</li>
    <li>
      The Information Technology (Reasonable Security Practices and Procedures and Sensitive
      Personal Data or Information) Rules, 2011
    </li>
    <li>The Information Technology (Intermediary Guidelines) Rules, 2011</li>
    <li>The Digital Personal Data Protection Act, 2023</li>
  </ul>

  {/* -------------------- G. MEDICAL DISCLAIMER -------------------- */}
  <h3 className="mt-6 mb-2 font-semibold text-[20px]">G. Medical Disclaimer</h3>

  <p>FitYou offers support for:</p>

  <ul className="list-disc pl-6 mt-2 space-y-1">
    <li>weight loss medication guidance</li>
    <li>body weight loss medicine</li>
    <li>medical ways to lose weight</li>
    <li>latest weight loss diets</li>
    <li>healthy weight loss plans</li>
  </ul>

  <p className="mt-2">
    However, FitYou does not replace physical consultation with a licensed medical
    professional. Always consult a doctor before starting any new medication, diet, or
    exercise program.
  </p>

  {/* -------------------- H. SUSPENSION RIGHTS -------------------- */}
  <h3 className="mt-6 mb-2 font-semibold text-[20px]">H. Right to Suspend or Terminate Access</h3>

  <p>FitYou may suspend or permanently disable access for violations such as:</p>

  <ul className="list-disc pl-6 mt-2 space-y-1">
    <li>Misrepresentation</li>
    <li>Abuse of consultation systems</li>
    <li>Misuse of weight loss medicine guidance</li>
    <li>Posting misleading health claims</li>
  </ul>

</section>



{/* 2. Conditions of use */}
<section>
  <h2 className="text-3xl md:text-[45px] text-[#123873] mb-3">
    2. Conditions of Use
  </h2>

  <p>
    You must be at least 18 years of age to access, register, or use the Website and any of the
    Services offered by FitYou, including services related to weight loss medication, medical ways
    to lose weight, nutritionist weight loss plans, and proven weight loss programs.
  </p>

  <p className="mt-3">By accessing, browsing, registering on, or using the Website, you represent and warrant that:</p>

  <ul className="list-disc pl-6 mt-2 space-y-2">
    <li>You are 18 years of age or older.</li>
    <li>You have the legal right, authority, and capacity to enter into this Agreement.</li>
    <li>All information provided by you is true, accurate, and complete.</li>
    <li>You agree to fully comply with and be bound by these Terms and all applicable laws.</li>
  </ul>

  <p className="mt-3">
    If you are using the Website to seek support for weight reduction, weight loss plans, weight
    medication guidance, or diet programs to help lose weight, you acknowledge that you are doing
    so voluntarily and with full understanding of these Terms.
  </p>

  <p className="mt-3">
    FitYou reserves the right to refuse access, suspend accounts, or terminate Services if it is
    found that a user is under 18 years of age or has provided false or misleading information.
  </p>
</section>
{/* 3. End-user terms */}
<section>
  <h2 className="text-3xl md:text-[45px] text-[#123873] mb-3">
    3. Terms of Use Applicable to All Users
  </h2>

  <p>
    The terms set out in this Clause 3 apply exclusively to all Users other than Practitioners,
    including individuals seeking weight loss medication, medical weight loss treatments,
    nutritionist weight loss plans, and proven weight loss programs through the FitYou platform.
  </p>

  {/* -------------------- 3.1 END-USER ACCOUNT & DATA PRIVACY -------------------- */}
  <h3 className="text-2xl md:text-[26px] font-semibold text-[#123873] mt-6 mb-2">
    3.1 End-User Account & Data Privacy
  </h3>

  <ul className="list-disc pl-6 space-y-2">
    <li>
      The terms “Personal Information” and “Sensitive Personal Data or Information” shall have
      the meaning assigned to them under applicable Indian data protection laws and are detailed
      in the FitYou Privacy Policy.
    </li>

    <li>
      FitYou may collect anonymous technical information related to your device, browser, IP
      address, and Website usage behavior. This information is used strictly to improve the
      quality of FitYou’s weight loss plans, smart weight loss programs, medication support
      tools, and digital wellness services.
    </li>
    <li>
      By registering, you consent to FitYou accessing your registered email address and/or
      phone number for purposes including:
      <ul className="list-[circle] pl-6 mt-1 space-y-1">
        <li>Service communication</li>
        <li>Appointment coordination</li>
        <li>
          Feedback collection regarding weight loss medication, diet plans to help lose
          weight, and wellness consultations
        </li>
      </ul>
    </li>

    <li>
      FitYou’s complete data handling and security practices are governed entirely by its
      Privacy Policy.
    </li>

    <li>
      The User is required to carefully read and fully understand the Privacy Policy to be
      aware of:
      <ul className="list-[circle] pl-6 mt-1 space-y-1">
        <li>the fact that certain personal and technical information is collected;</li>
        <li>the purposes for which such information is collected and processed;</li>
        <li>the intended recipients or categories of recipients;</li>
        <li>the manner of collection, storage, and retention duration;</li>
        <li>the identity and address of the entity collecting and retaining the data;</li>
        <li>
          the rights available to the User regarding access, correction, withdrawal of
          consent, and data protection under applicable laws.
        </li>
      </ul>
    </li>

    <li>
      FitYou shall not be responsible or liable for the accuracy, authenticity, validity, or
      completeness of any personal information submitted by the User while accessing
      services related to weight loss medication, medical weight loss, nutritionist weight
      loss plans, or proven weight loss programs.
    </li>
    <li>
      If the User is registered on the Website, the User is solely responsible for maintaining
      strict confidentiality of their login ID, password, and access information used for
      services such as weight loss plans, best medicine to lose weight, smart weight loss
      programs, and diet plans to help lose weight.
      <br />
      The User is fully responsible for all activities carried out through their account,
      whether authorized or unauthorized. The User must immediately notify FitYou of any
      suspected unauthorized access or security breach.
      <br />
      While FitYou shall not be liable for losses suffered due to unauthorized access, the
      User may be held liable for losses suffered by FitYou or third parties as a result of
      such misuse.
    </li>

    <li>
      If a User provides information that is false, misleading, inaccurate, outdated, or
      incomplete — or if FitYou reasonably believes so — FitYou reserves the right to suspend
      or permanently discontinue Services related to weight loss medication, medical ways to
      lose weight, smart weight loss plans, and nutritionist plans without notice.
    </li>

    <li>
      FitYou may use the information collected from Users exclusively for technical
      troubleshooting, service optimization, customer support debugging, and improving the
      quality of Services such as easy-to-follow weight loss plans and medication support.
    </li>

    <li>
      <b>Telephonic Support & Call Recording:</b> When you contact FitYou via phone support,
      you acknowledge and consent that calls may be recorded and securely stored. Each call
      will include an IVR message informing you of recording.
      <ul className="list-[circle] pl-6 mt-1 space-y-1">
        <li>Recordings may be used for quality assurance and compliance.</li>
        <li>
          The call facility must not be used for medical consultation or treatment advice.
        </li>
        <li>
          If you withhold consent for recording and such information is required for service
          delivery, FitYou may restrict or decline Services.
        </li>
      </ul>
    </li>
  </ul>
  {/* -------------------- 3.2 LISTING CONTENT & DISSEMINATION -------------------- */}
  <h3 className="text-2xl md:text-[26px] font-semibold text-[#123873] mt-8 mb-2">
    3.2 Listing Content and Dissemination of Information
  </h3>

  <ul className="list-disc pl-6 space-y-2">

    <li>
      FitYou collects and displays relevant information relating to Practitioner profiles,
      including specialization, qualifications, experience, and expertise in medical ways to
      lose weight, nutritionist weight loss plans, medication and weight loss programs, and
      proven weight loss treatments.
      <br />
      FitYou makes reasonable efforts to verify and update such information but does not
      guarantee accuracy or completeness.
    </li>

    <li>
      <b>“As Is” and “As Available” Disclaimer:</b> All Services provided by FitYou, including
      weight loss medication, smart weight loss plans, easy-to-follow plans, diets to help lose
      weight, and medical weight loss support, are provided strictly on an “as is” and “as
      available” basis.
      <ul className="list-[circle] pl-6 mt-1 space-y-1">
        <li>No warranties of merchantability</li>
        <li>No warranties of accuracy</li>
        <li>No warranties of fitness for a particular purpose</li>
        <li>No warranties of title</li>
        <li>No warranties of non-infringement</li>
      </ul>

      FitYou does not guarantee:
      <ul className="list-[circle] pl-6 mt-2 space-y-1">
        <li>The accuracy of User-generated content</li>
        <li>The effectiveness of any weight loss plan that works</li>
        <li>Results such as weight loss in few days or 1 month</li>
        <li>
          Suitability of any weight loss medicine, body weight loss medicine, or medication to
          help you lose weight
        </li>
      </ul>

      To the fullest extent permitted by law, FitYou disclaims liability arising from:
      <ul className="list-[circle] pl-6 mt-2 space-y-1">
        <li>Your use of or reliance on the Website or Services</li>
        <li>Opinions or guidance from other Users or Practitioners</li>
        <li>
          Any content related to best weight loss, smart way to lose weight, different weight
          loss plans, or latest weight loss diets
        </li>
      </ul>

      All health or medical decisions must be made with a qualified medical professional.
    </li>
    <li>
      <b>Third-Party Website Links:</b> The FitYou Website may contain links to third-party
      websites, affiliates, and business partners offering products or programs related to
      weight loss medication, best medicine to lose weight, different weight loss plans, or
      latest weight loss diet solutions.
      <br />
      FitYou does not control, endorse, or guarantee the accuracy, legality, reliability,
      safety, or quality of third-party websites or services. Users access such links at their
      own risk.
    </li>

    <li>
      <b>Technical Risk & Website Use Disclaimer:</b> FitYou assumes no responsibility for
      damage to devices, loss of data, viruses, or malware that may affect a User’s device as a
      result of accessing or downloading content, including weight loss diaries, medication
      support tools, or smart weight loss programs.
      <br />
      If dissatisfied with any portion of the Website or Services, the User’s sole remedy is to
      discontinue use.
    </li>

    <li>
      <b>Fraud, Misrepresentation & Indemnification:</b> If FitYou determines that a User has
      provided false, misleading, fraudulent, or incomplete information, including reviews or
      communications related to weight loss treatments or nutritionist weight loss plans, FitYou
      may immediately terminate access without notice.
      <br />
      Users shall indemnify and hold FitYou harmless from all damages, claims, or losses arising
      out of such conduct.
    </li>

    <li>
      <b>Sharing of Information with Practitioners:</b> If a User uses FitYou’s telephonic or
      digital communication services, FitYou may share relevant information with Practitioners,
      including medical ways to lose weight, body weight loss medicine, and diet details, in
      accordance with the Privacy Policy.
      <br />
      Such information may also be stored for legal compliance, dispute resolution, and quality
      improvement.
    </li>

    <li>
      <b>No Medical Advice or Treatment Liability:</b> FitYou does not provide medical advice,
      diagnosis, prescription, or treatment. All medical interactions occur solely between the
      User and the Practitioner.
      <ul className="list-[circle] pl-6 mt-2 space-y-1">
        <li>FitYou is not liable for any consultation outcomes or disputes.</li>
        <li>
          FitYou is not responsible for wrong prescriptions, adverse reactions, or negligent
          treatment.
        </li>
        <li>
          FitYou is not liable for inconvenience or loss due to Practitioner failures or
          misconduct.
        </li>
        <li>All medical decisions must be made with a qualified Practitioner.</li>
      </ul>
    </li>
  </ul>
  {/* -------------------- 3.3 CANCELLATION & REFUNDS -------------------- */}
  <h3 className="text-2xl md:text-[26px] font-semibold text-[#123873] mt-8 mb-2">
    3.3 Cancellation and Refund Policy
  </h3>

  <p>
    Refer to the Cancellation and Refund Policy page for complete details and applicable
    conditions.
  </p>

  {/* -------------------- 3.4 THIRD-PARTY PHARMACY -------------------- */}
  <h3 className="text-2xl md:text-[26px] font-semibold text-[#123873] mt-8 mb-2">
    3.4 Third-Party Pharmacy
  </h3>

  <ul className="list-disc pl-6 space-y-2">

    <li>
      <b>3.4.1 Stock Availability & Order Fulfilment:</b> All Third-Party Pharmacy partners are
      solely responsible for maintaining adequate stock of pharmaceutical goods, including
      weight loss medication and prescription drugs. FitYou shall not be liable if items are
      unavailable, substituted, delayed, or out of stock.
    </li>

    <li>
      <b>3.4.2 Substitute Medicines:</b> Any substitution of weight loss medicines, tablets, or
      related drugs shall occur only with express approval of the Practitioner. FitYou is not
      responsible for consequences of such substitutions.
    </li>

    <li>
      <b>3.4.3 Delivery Partner as User’s Agent:</b> The delivery partner acts solely as your
      authorized agent to collect medicines from pharmacies. FitYou is not liable for delays,
      handling issues, loss, or damage once medicines leave the pharmacy.
    </li>

  </ul>

  {/* -------------------- 3.5 NO DOCTOR-PATIENT RELATIONSHIP -------------------- */}
  <h3 className="text-2xl md:text-[26px] font-semibold text-[#123873] mt-8 mb-2">
    3.5 No Doctor–Patient Relationship; Not for Emergency Use
  </h3>

  <ul className="list-disc pl-6 space-y-2">

    <li>
      <b>3.5.1 No Medical Advice or Diagnosis:</b> Information on the Website does not create a
      doctor–patient relationship and is not medical advice, diagnosis, or prescription. It is
      intended only to help Users connect with qualified medical professionals.
    </li>

    <li>
      <b>3.5.2 Informational Use Only:</b> All health, diet, weight loss, and teleconsultation
      information is provided for general informational purposes. FitYou does not guarantee
      accuracy, outcomes, or effectiveness of treatments or weight loss programs.
      <br />
      Users must make all medical decisions in consultation with a qualified practitioner.
    </li>

    <li>
      <b>3.5.3 Not for Medical Emergencies:</b> FitYou’s Services must not be used for emergency
      medical situations. In case of medical emergencies, Users must immediately contact local
      emergency services or visit the nearest hospital.
    </li>

  </ul>
  {/* -------------------- 3.6 CONTENT OWNERSHIP & COPYRIGHT -------------------- */}
  <h3 className="text-2xl md:text-[26px] font-semibold text-[#123873] mt-8 mb-2">
    3.6 Content Ownership and Intellectual Property
  </h3>

  <ul className="list-disc pl-6 space-y-2">

    <li>
      <b>3.6.1 Ownership of Platform Content:</b> All content on the Website, including medical
      information, teleconsultation data, weight loss plans, practitioner profiles, pharmacy
      listings, prescriptions, diet plans, and all healthcare content, is either:
      <ul className="list-[circle] pl-6 mt-2 space-y-1">
        <li>User-generated content, or</li>
        <li>Content exclusively owned by FitYou.</li>
      </ul>
      All data collected from Users, Practitioners, Pharmacies, and Healthcare Providers remains
      the exclusive property of FitYou. Unauthorized copying, sharing, scraping, or commercial
      use will result in legal action.
    </li>

    <li>
      <b>3.6.2 Limited License for Personal Use Only:</b> Users are granted a limited,
      revocable, non-transferable license to view the Website solely for personal and lawful
      purposes such as consultations, weight loss programs, pharmacy orders, and wellness
      tracking.
      <ul className="list-[circle] pl-6 mt-2 space-y-1">
        <li>No copying or modifying of FitYou content</li>
        <li>No commercial exploitation</li>
        <li>No redistribution or resale</li>
        <li>No reverse engineering or extraction of datasets</li>
      </ul>
    </li>

    <li>
      <b>3.6.3 Prohibition on System Monitoring & Competitive Use:</b> Users are strictly
      prohibited from using the Website for:
      <ul className="list-[circle] pl-6 mt-2 space-y-1">
        <li>System monitoring or performance analysis</li>
        <li>Benchmarking or competitor research</li>
        <li>Reverse engineering teleconsultation workflows</li>
        <li>Extracting medical or weight-loss datasets</li>
      </ul>
      Any such unauthorized activity is a direct breach of this Agreement.
    </li>

  </ul>

  {/* -------------------- 3.7 PATIENT FEEDBACK -------------------- */}
  <h3 className="text-2xl md:text-[26px] font-semibold text-[#123873] mt-8 mb-2">
    3.7 Patient Feedback – FitYou Platform
  </h3>

  <p>
    By using the FitYou Website, you agree that any information, health data, feedback, or
    reviews submitted by you shall be governed strictly by the Privacy Policy. You are fully
    responsible for all content you post, including reviews, testimonials, success stories,
    comments, ratings, and recommendations about Practitioners or services.
  </p>

  <ul className="list-disc pl-6 mt-2 space-y-2">

    <li>
      Feedback may include weight loss medication experiences, best medicine to lose weight,
      medication to help lose weight, or treatment-related comments.
    </li>

    {/* -------------------- 3.7.1 PUBLICATION RULES -------------------- */}
    <li>
      <b>3.7.1 Publication Guidelines & Legal Compliance:</b> You agree not to upload or publish
      content that:
      <ul className="list-[circle] pl-6 mt-2 space-y-1">
        <li>Infringes intellectual property or privacy rights</li>
        <li>Violates healthcare laws or regulations</li>
        <li>Is false, misleading, defamatory, or fraudulent</li>
        <li>
          Makes misleading claims about best weight loss programs or weight loss medication
        </li>
      </ul>
      FitYou may remove or decline publication of content under these Terms or applicable law.
    </li>

    {/* -------------------- 3.7.2 FEEDBACK VERIFICATION -------------------- */}
    <li>
      <b>3.7.2 Consent for Communication & Feedback Verification:</b> By submitting feedback,
      you authorize FitYou to contact you via:
      <ul className="list-[circle] pl-6 mt-2 space-y-1">
        <li>Phone calls</li>
        <li>Email</li>
        <li>SMS</li>
        <li>WhatsApp</li>
        <li>App notifications</li>
        <li>Other electronic communication modes</li>
      </ul>
      For purposes including:
      <ul className="list-[circle] pl-6 mt-2 space-y-1">
        <li>Collecting feedback on weight loss programs and services</li>
        <li>Verifying practitioner-related reviews</li>
        <li>Resolving disputes or objections raised by Practitioners</li>
      </ul>
    </li>

    {/* -------------------- 3.7.3 FRAUD & REVIEW INTEGRITY -------------------- */}
    <li>
      <b>3.7.3 Fraud Prevention & Review Integrity:</b> Fake reviews, manipulated ratings, or
      misleading claims about weight loss medication or programs will lead to immediate
      suspension and permanent account termination, and may result in legal action as per
      FitYou’s Fraud Detection Policy.
    </li>

  </ul>

</section>

{/* 4. Practitioner terms */}
<section>
  <h2 className="text-3xl md:text-[45px]  text-[#123873] mb-3">
    4. Terms of Use – Practitioners
  </h2>

  <p>
    The terms set forth under this Clause 4 apply exclusively to all medical practitioners,
    weight loss specialists, clinics, healthcare providers, and wellness professionals
    registered on the FitYou Platform.
  </p>

  {/* -------------------- 4.1 LISTING POLICY -------------------- */}
  <h3 className="text-2xl md:text-[26px] font-semibold text-[#123873] mt-6 mb-2">
    4.1 Listing Policy
  </h3>

  {/* 4.1.1 Practitioner Profile Information */}
  <h4 className="font-semibold text-[20px] text-[#123873] mt-4 mb-1">
    4.1.1 Practitioner Profile Information
  </h4>

  <ul className="list-disc pl-6 space-y-2">
    <li>
      FitYou collects, verifies, and displays Practitioner information, including:
      <ul className="list-[circle] pl-6 mt-1 space-y-1">
        <li>Professional profiles</li>
        <li>Contact information</li>
        <li>Clinic details</li>
        <li>Qualifications</li>
        <li>
          Areas of specialization, including weight loss medication, best medicine to lose
          weight, medication for lose weight, weight medication, and best weight loss
          programs.
        </li>
      </ul>
    </li>

    <li>
      FitYou reserves the right to approve, modify, suspend, restrict, or remove any
      Practitioner profile at its sole discretion, with or without prior notice.
    </li>

    <li>
      If any information displayed on the Website relating to your profile is inaccurate,
      outdated, misleading, or incomplete, you must notify FitYou immediately for correction.
    </li>
  </ul>
  {/* -------------------- 4.1.2 EXTERNAL RANKINGS DISCLAIMER -------------------- */}
  <h4 className="font-semibold text-[20px] text-[#123873] mt-6 mb-1">
    4.1.2 External Rankings Disclaimer
  </h4>

  <ul className="list-disc pl-6 space-y-2">
    <li>
      FitYou shall not be liable or responsible for any rankings, reviews, ratings, visibility,
      or search results of Practitioners displayed on external websites, search engines, social
      media platforms, or third-party directories.
    </li>
  </ul>

  {/* -------------------- 4.1.3 LIMITATION OF LIABILITY -------------------- */}
  <h4 className="font-semibold text-[20px] text-[#123873] mt-6 mb-1">
    4.1.3 Limitation of Liability for Disclosures
  </h4>

  <ul className="list-disc pl-6 space-y-2">
    <li>
      FitYou shall not be liable for any losses, damages, medical outcomes, or expenses arising
      from any information disclosed by a User to a Practitioner, including details relating to
      weight loss medication or best medicine to lose weight.
    </li>

    <li>
      FitYou shall also not be responsible for any losses or reputation damage suffered by a
      Practitioner due to:
      <ul className="list-[circle] pl-6 mt-1 space-y-1">
        <li>Registration</li>
        <li>Onboarding</li>
        <li>Profile listing</li>
        <li>Service enablement on the FitYou Platform</li>
      </ul>
      where the information was voluntarily provided by the Practitioner.
    </li>
  </ul>

  {/* -------------------- 4.1.4 CONTENT MODERATION RIGHTS -------------------- */}
  <h4 className="font-semibold text-[20px] text-[#123873] mt-6 mb-1">
    4.1.4 Content Moderation Rights
  </h4>

  <ul className="list-disc pl-6 space-y-2">
    <li>
      FitYou reserves the right to review, edit, moderate, restrict, or remove:
      <ul className="list-[circle] pl-6 mt-1 space-y-1">
        <li>Medical suggestions</li>
        <li>Weight loss advice</li>
        <li>Best weight loss claims</li>
        <li>Medication for lose weight content</li>
        <li>Patient feedback or promotional material</li>
      </ul>
    </li>

    <li>
      Such moderation may occur if the content is:
      <ul className="list-[circle] pl-6 mt-1 space-y-1">
        <li>Misleading</li>
        <li>Unscientific</li>
        <li>Legally non-compliant</li>
        <li>Contrary to medical or advertising laws</li>
      </ul>
    </li>
  </ul>

  {/* -------------------- 4.1.5 THIRD-PARTY PUBLICATION CONSENT -------------------- */}
  <h4 className="font-semibold text-[20px] text-[#123873] mt-6 mb-1">
    4.1.5 Consent for Third-Party Publication
  </h4>

  <ul className="list-disc pl-6 space-y-2">
    <li>
      Practitioners expressly consent to FitYou lawfully publishing, displaying, distributing,
      and sharing their medical content, treatment details, weight loss plans, and service
      descriptions across:
      <ul className="list-[circle] pl-6 mt-1 space-y-1">
        <li>The FitYou Website</li>
        <li>Mobile applications</li>
        <li>Partner platforms</li>
        <li>Digital marketing channels</li>
        <li>Third-party services</li>
      </ul>
      in compliance with applicable laws.
    </li>
  </ul>

  {/* -------------------- 4.1.6 PRACTITIONER RESPONSIBILITY -------------------- */}
  <h4 className="font-semibold text-[20px] text-[#123873] mt-6 mb-1">
    4.1.6 Legal Compliance & Practitioner Responsibility
  </h4>

  <ul className="list-disc pl-6 space-y-2">
    <li>
      Practitioners must fully comply with all applicable medical, healthcare, drug,
      advertising, ethical, and professional laws.
    </li>

    <li>
      Any violation, misconduct, misleading promotion of weight medication, or false best weight
      loss claims shall be the Practitioner’s sole responsibility.
    </li>

    <li>
      FitYou bears no liability for any actions, omissions, consultations, advice,
      prescriptions, or weight-loss services provided by a Practitioner.
    </li>
  </ul>
  {/* -------------------- 4.2 PROFILE OWNERSHIP & EDITING RIGHTS -------------------- */}
  <h3 className="text-2xl md:text-[26px] font-semibold text-[#123873] mt-8 mb-2">
    4.2 Profile Ownership and Editing Rights – FitYou
  </h3>

  <p>
    As a registered Practitioner on the FitYou Platform, you represent and warrant that you are
    lawfully authorized to upload, publish, and display all content, information, documents,
    images, medical credentials, treatment details, and professional data submitted by you as
    part of your profile.
  </p>

  <p className="mt-2">
    You further confirm that none of your submitted content shall:
  </p>

  <ul className="list-disc pl-6 mt-2 space-y-2">
    <li>Infringe any third-party intellectual property rights</li>
    <li>Violate privacy, publicity, trademark, copyright, or data protection laws</li>
    <li>
      Contain false, misleading, or unverified claims relating to weight loss medication, best
      medicine to lose weight, medication for lose weight, weight medication, or best weight
      loss treatments
    </li>
  </ul>

  {/* -------------------- 4.2.1 RIGHT TO MODIFY/REMOVE -------------------- */}
  <h4 className="font-semibold text-[20px] text-[#123873] mt-6 mb-1">
    4.2.1 FitYou’s Right to Modify or Remove Content
  </h4>

  <ul className="list-disc pl-6 space-y-2">
    <li>
      If any submitted content breaches legal requirements, includes inaccurate or misleading
      weight-loss-related claims, or violates these Terms, FitYou may, at its sole discretion:
      <ul className="list-[circle] pl-6 mt-1 space-y-1">
        <li>Edit, restrict, suspend, or delete any part of your profile</li>
        <li>
          Modify or remove content relating to weight loss outcomes, medication descriptions, or
          best medicine to lose weight claims
        </li>
        <li>Temporarily or permanently suspend your Practitioner account</li>
      </ul>
    </li>
  </ul>

  {/* -------------------- 4.2.2 RIGHT TO REVIEW & VERIFICATION -------------------- */}
  <h4 className="font-semibold text-[20px] text-[#123873] mt-6 mb-1">
    4.2.2 Right to Review and Verification
  </h4>

  <ul className="list-disc pl-6 space-y-2">
    <li>
      FitYou reserves the right to review, verify, audit, amend, restrict, or take down any
      Practitioner information, credentials, service descriptions, treatment claims, or
      promotional content provided on the platform.
    </li>

    <li>
      This right is exercised to:
      <ul className="list-[circle] pl-6 mt-1 space-y-1">
        <li>Maintain platform integrity</li>
        <li>Ensure patient safety</li>
        <li>Prevent misleading medical or weight-loss claims</li>
        <li>
          Protect Users seeking medication for weight, weight loss medication, or best weight
          loss solutions
        </li>
      </ul>
    </li>
  </ul>
  {/* -------------------- 4.3 PATIENT FEEDBACK & DISPLAY RIGHTS -------------------- */}
  <h3 className="text-2xl md:text-[26px] font-semibold text-[#123873] mt-8 mb-2">
    4.3 Patient Feedback and Display Rights of FitYou
  </h3>

  <p>
    All patient reviews, ratings, testimonials, success stories, comments, and other feedback,
    including content relating to weight loss medication, best medicine to lose weight, weight
    medication, and treatment outcomes, are created solely by Users and patients of FitYou-
    empanelled Practitioners and Clinics.
  </p>

  <p className="mt-2">
    FitYou acts strictly as a digital intermediary under the Information Technology Act, 2000.
    It does not initiate, select, modify, influence, or control such Critical Content.
  </p>

  {/* -------------------- 4.3.1 NATURE OF USER-GENERATED FEEDBACK -------------------- */}
  <h4 className="font-semibold text-[20px] text-[#123873] mt-6 mb-1">
    4.3.1 Nature of User-Generated Feedback
  </h4>

  <ul className="list-disc pl-6 space-y-2">
    <li>
      Feedback is solely created by Users or patients of Practitioners; FitYou does not
      originate or alter such content.
    </li>
    <li>
      Rights and obligations related to such content are governed under applicable law and
      FitYou’s Feedback Collection & Fraud Detection Policy.
    </li>
  </ul>

  {/* -------------------- 4.3.2 RIGHT TO COLLECT FEEDBACK -------------------- */}
  <h4 className="font-semibold text-[20px] text-[#123873] mt-6 mb-1">
    4.3.2 Right to Collect Feedback
  </h4>

  <ul className="list-disc pl-6 space-y-2">
    <li>
      FitYou reserves the unrestricted right to collect, receive, request, and display patient
      feedback related to:
      <ul className="list-[circle] pl-6 mt-1 space-y-1">
        <li>Weight loss medication programs</li>
        <li>Best medicine to lose weight</li>
        <li>Medical weight reduction plans</li>
        <li>Best to lose weight treatment protocols</li>
        <li>The best weight loss outcomes and services</li>
      </ul>
    </li>
  </ul>

  {/* -------------------- 4.3.3 NO MANDATORY PRE-SCREENING -------------------- */}
  <h4 className="font-semibold text-[20px] text-[#123873] mt-6 mb-1">
    4.3.3 No Mandatory Pre-Screening Obligation
  </h4>

  <ul className="list-disc pl-6 space-y-2">
    <li>
      FitYou has no obligation to pre-screen, verify, filter, edit, approve, refuse, or remove
      any Critical Content submitted by Users, except where required under applicable law or
      government directions.
    </li>
  </ul>

  {/* -------------------- 4.3.4 TAKEDOWN AS PER LAW -------------------- */}
  <h4 className="font-semibold text-[20px] text-[#123873] mt-6 mb-1">
    4.3.4 Takedown as per Law
  </h4>

  <ul className="list-disc pl-6 space-y-2">
    <li>
      FitYou will disable or remove access to any Critical Content only in accordance with
      statutory obligations, court orders, or lawful government directions.
    </li>

    <li>
      FitYou is not liable for any Critical Content published by Users, including content
      related to weight medication, best medicine to lose weight, or best weight loss outcomes.
    </li>
  </ul>

  {/* -------------------- 4.3.5 FRAUD, MISREPRESENTATION & SUSPENSION -------------------- */}
  <h4 className="font-semibold text-[20px] text-[#123873] mt-6 mb-1">
    4.3.5 Fraud, Misrepresentation, and Suspension
  </h4>

  <ul className="list-disc pl-6 space-y-2">
    <li>
      FitYou may suspend or terminate any Practitioner's account if found to have:
      <ul className="list-[circle] pl-6 mt-1 space-y-1">
        <li>Provided false, misleading, or inaccurate information</li>
        <li>Participated in fraudulent, incentivized, or manipulated feedback</li>
        <li>Violated FitYou’s Policies or applicable medical/advertising laws</li>
      </ul>
    </li>

    <li>
      FitYou may publicly disclose such suspension alongside the Practitioner’s name or clinic
      name for:
      <ul className="list-[circle] pl-6 mt-1 space-y-1">
        <li>User protection</li>
        <li>Platform transparency</li>
        <li>Business security</li>
      </ul>
    </li>

    <li>
      Practitioners agree to indemnify FitYou from losses, penalties, claims, or damages arising
      from such misconduct.
    </li>
  </ul>
  {/* -------------------- 4.4 FITYOU MEDICINE & TREATMENT INFORMATION -------------------- */}
  <h3 className="text-2xl md:text-[26px] font-semibold text-[#123873] mt-10 mb-2">
    4.4 FitYou Medicine & Treatment Information
  </h3>

  <p>
    The FitYou Platform may display general information relating to medicines, medical products,
    therapies, weight loss medication, best medicine to lose weight, medication for lose weight,
    weight medication, and the best weight loss solutions. Such information is strictly for
    educational and awareness purposes only and shall not be considered medical advice,
    prescription, or diagnosis.
  </p>

  {/* -------------------- 4.4.1 FOR USERS -------------------- */}
  <h4 className="font-semibold text-[20px] text-[#123873] mt-6 mb-1">
    4.4.1 For Users – FitYou Medicine & Weight Loss Information
  </h4>

  <ul className="list-disc pl-6 space-y-2">

    <li>
      Any information shared on the Platform relating to weight loss medication, best medicine to
      lose weight, medication for lose weight, weight medication, or the best weight loss
      solutions is strictly informational and not a substitute for clinical medical advice or
      diagnosis.
    </li>

    <li>
      FitYou sources medical information from reliable databases and scientific literature, but
      may also rely on open-source platforms and third-party sources. FitYou is not responsible
      for:
      <ul className="list-[circle] pl-6 mt-1 space-y-1">
        <li>Accuracy or completeness of such information</li>
        <li>Reliability or usefulness</li>
        <li>Errors, omissions, or outdated content</li>
        <li>Any decisions taken based on such information</li>
      </ul>
    </li>

    <li>
      Inclusion or exclusion of any medicine or product does not imply endorsement or rejection.
      Users must always consult a qualified medical practitioner before relying on any
      weight-loss-related information.
    </li>

  </ul>

  {/* -------------------- 4.4.2 FOR PRACTITIONERS -------------------- */}
  <h4 className="font-semibold text-[20px] text-[#123873] mt-6 mb-1">
    4.4.2 For Practitioners – FitYou Medical & Weight Loss Information
  </h4>

  <ul className="list-disc pl-6 space-y-2">

    <li>
      All informational material related to weight loss medication, best medicine to lose weight,
      medication for lose weight, weight medication, or best weight loss solutions is provided
      only for educational and awareness purposes and is not a prescription database.
    </li>

    <li>
      Practitioners must rely on their own independent clinical judgment and expertise while
      evaluating any such information. FitYou does not guarantee:
      <ul className="list-[circle] pl-6 mt-1 space-y-1">
        <li>Accuracy or validity of information</li>
        <li>Completeness or safety</li>
        <li>Usefulness or applicability in treatment</li>
      </ul>
    </li>

    <li>
      Practitioners acknowledge that FitYou does not warrant that the information provided meets
      clinical standards or requirements, and may disagree with individual clinical opinions.
    </li>

  </ul>

  {/* -------------------- 4.4.3 FITYOU DISCLAIMER -------------------- */}
  <h4 className="font-semibold text-[20px] text-[#123873] mt-6 mb-1">
    4.4.3 Disclaimer – FitYou
  </h4>

  <ul className="list-disc pl-6 space-y-2">

    <li>
      FitYou makes no representation as to the accuracy, completeness, reliability, or
      error-free nature of the information displayed on the Platform. All content is provided on
      an “as-is” basis.
    </li>

    <li>
      FitYou shall not be liable for:
      <ul className="list-[circle] pl-6 mt-1 space-y-1">
        <li>Any cost, damage, or liability from use of such information</li>
        <li>Any reliance placed by Users or Practitioners</li>
        <li>
          Any incorrect treatment, wrong prescription, or adverse outcomes based on such
          information
        </li>
      </ul>
    </li>

    <li>
      Users and Practitioners expressly indemnify and hold FitYou harmless from:
      <ul className="list-[circle] pl-6 mt-1 space-y-1">
        <li>Claims, losses, damages, investigations, and legal expenses</li>
        <li>Decisions taken based on Platform information</li>
        <li>
          Any reliance on weight medication, best medicine to lose weight, or similar content
        </li>
      </ul>
    </li>

    <li>
      FitYou is not responsible for any content on third-party websites linked from the Platform
      and does not endorse any such products, services, or medical information.
    </li>

  </ul>
  {/* -------------------- 4.5 PRACTITIONER UNDERTAKING -------------------- */}
  <h3 className="text-2xl md:text-[26px] font-semibold text-[#123873] mt-10 mb-2">
    4.5 Practitioner Undertaking – FitYou
  </h3>

  <ul className="list-disc pl-6 space-y-2">

    <li>
      The Practitioner represents, warrants, and undertakes that he/she is duly registered,
      validly licensed, and fully qualified to practice medicine or provide healthcare services,
      including services related to weight loss medication, best medicine to lose weight,
      medication for lose weight, weight medication, best to lose weight programs, and the best
      weight loss treatments, in accordance with applicable Indian laws and regulations.
    </li>

    <li>
      The Practitioner confirms that he/she is not subject to any prohibition, suspension,
      restriction, or legal limitation that affects their eligibility to practice medicine or
      healthcare services within India.
    </li>

    <li>
      While providing services through the FitYou Platform, the Practitioner agrees to:
      <ul className="list-[circle] pl-6 mt-1 space-y-1">
        <li>Comply with all applicable medical and ethical standards</li>
        <li>Exercise due skill, care, and professional diligence</li>
        <li>
          Ensure accuracy and responsibility in consultations and treatments, including those
          involving weight loss medication or the best weight loss solutions
        </li>
      </ul>
    </li>

    <li>
      Any violation of applicable laws, professional standards, or the above undertaking shall
      be the sole responsibility of the Practitioner. FitYou shall not be liable in any manner
      for such violations.
    </li>

  </ul>
  {/* -------------------- 4.6 USAGE IN PROMOTIONAL & MARKETING MATERIALS -------------------- */}
  <h3 className="text-2xl md:text-[26px] font-semibold text-[#123873] mt-10 mb-2">
    4.6 Usage in Promotional & Marketing Materials – FitYou
  </h3>

  <p>
    In recognition of the various offerings and services provided by FitYou, the Practitioner
    agrees that, subject to the Practitioner’s reasonable right to review and approve, FitYou
    may lawfully use the Practitioner’s information for legitimate business, educational, and
    promotional purposes.
  </p>

  <ul className="list-disc pl-6 mt-3 space-y-2">

    <li>
      FitYou may use the Practitioner’s:
      <ul className="list-[circle] pl-6 mt-1 space-y-1">
        <li>Name</li>
        <li>Photograph</li>
        <li>Professional credentials</li>
        <li>Profile description</li>
      </ul>
      on the FitYou website and digital platforms, including in association with services
      related to weight loss medication, best medicine to lose weight, medication for lose
      weight, weight medication, and best weight loss programs.
    </li>

    <li>
      FitYou may display, publish, or reference the Practitioner in:
      <ul className="list-[circle] pl-6 mt-1 space-y-1">
        <li>Patient case studies</li>
        <li>Testimonials and reviews</li>
        <li>Feedback related to weight loss medication outcomes</li>
      </ul>
    </li>

    <li>
      The Practitioner may be featured in:
      <ul className="list-[circle] pl-6 mt-1 space-y-1">
        <li>Informational and awareness-based videos</li>
        <li>Educational content regarding weight medication and best medicine to lose weight</li>
      </ul>
      subject to compliance with applicable laws.
    </li>

    <li>
      FitYou may include the Practitioner in:
      <ul className="list-[circle] pl-6 mt-1 space-y-1">
        <li>Presentations</li>
        <li>Panel discussions</li>
        <li>Webinars and seminars</li>
        <li>Conferences (online or offline)</li>
      </ul>
      organized or promoted by FitYou.
    </li>

    <li>
      FitYou may also use the Practitioner’s name, credentials, and professional association in:
      <ul className="list-[circle] pl-6 mt-1 space-y-1">
        <li>Marketing materials</li>
        <li>Branding assets</li>
        <li>Promotional content</li>
        <li>Advertising campaigns</li>
      </ul>
      related to such initiatives and FitYou’s healthcare and weight loss programs.
    </li>

  </ul>
</section>


            {/* 5. Liability & law */}
<section>
  <h2 className="text-3xl md:text-[45px] text-[#123873] mb-3">
    5. Rights and Obligations Relating to Content – FitYou
  </h2>

  {/* -------------------- 5.1 CONTENT RESTRICTIONS -------------------- */}
  <h3 className="text-2xl md:text-[26px] font-semibold text-[#123873] mt-4 mb-2">
    5.1 Content Restrictions as per Applicable Law
  </h3>

  <p>
    In accordance with Regulation 3(2) of the Information Technology (Intermediary Guidelines and
    Digital Media Ethics Code) Rules, Users shall not host, display, upload, modify, publish,
    transmit, update, or share any content relating to weight loss medication, best medicine to
    lose weight, medication for lose weight, weight medication, or weight loss solutions that:
  </p>

  <ul className="list-disc pl-6 mt-2 space-y-2">
    <li>Belongs to another person without lawful rights or authorization.</li>
    <li>
      Is harmful, abusive, defamatory, obscene, libellous, hateful, or relates to unlawful
      activity.
    </li>
    <li>Harms minors in any manner.</li>
    <li>Infringes intellectual property rights of any third party.</li>
    <li>Violates any applicable law, rule, guideline, or judicial order.</li>
    <li>
      Misleads recipients, including misleading claims about weight loss medication or the best
      weight loss outcomes.
    </li>
    <li>
      Impersonates another person, entity, or healthcare professional, including false medical
      representation.
    </li>
    <li>Contains viruses, malware, ransomware, or harmful computer code.</li>
    <li>
      Threatens the unity, integrity, defence, security, or sovereignty of India or public order.
    </li>
  </ul>

  <p className="mt-2">
    FitYou reserves the right to remove or disable such content without notice and may take legal
    action as required under law.
  </p>

  {/* -------------------- 5.2 PROHIBITED USER ACTIVITIES -------------------- */}
  <h3 className="text-2xl md:text-[26px] font-semibold text-[#123873] mt-8 mb-2">
    5.2 Prohibited User Activities – FitYou
  </h3>

  <ul className="list-disc pl-6 space-y-2">

    <li>
      Violating or attempting to violate the security, confidentiality, or integrity of the
      FitYou Platform or servers.
    </li>

    <li>
      Posting disruptive, misleading, or competitive promotional content, including promotions
      related to weight loss medication or weight medication.
    </li>

    <li>
      Knowingly submitting incomplete, false, deceptive, or misleading information, including
      false claims about best medicine to lose weight.
    </li>

    <li>
      Making unsolicited or unauthorized communications to other Users or Practitioners.
    </li>

    <li>
      Using bots, spiders, scrapers, or automated systems to access or extract data from the
      Platform.
    </li>

    <li>
      Attempting to decipher, reverse engineer, hack, or modify any FitYou systems.
    </li>

    <li>
      Copying, duplicating, modifying, storing, or exploiting FitYou Content for commercial
      purposes, including misuse in weight-loss marketing.
    </li>

    <li>
      Framing, embedding, or deep-linking FitYou Content without prior written authorization.
    </li>

    <li>
      Circumventing or interfering with FitYou’s security or digital rights management systems.
    </li>

  </ul>

  <p className="mt-2">
    Any violation enables FitYou to suspend or terminate access, remove offending content, and
    take legal action.
  </p>

  {/* -------------------- 5.3 CONTENT TAKEDOWN & DATA PRESERVATION -------------------- */}
  <h3 className="text-2xl md:text-[26px] font-semibold text-[#123873] mt-8 mb-2">
    5.3 Content Takedown & Data Preservation – FitYou
  </h3>

  <p>
    Upon obtaining knowledge of any content violating Clauses 5.1 or 5.2, FitYou may immediately
    disable, restrict, or remove such content, including misleading or harmful claims relating to
    weight loss medication or weight loss solutions.
  </p>

  <p className="mt-2">
    FitYou may preserve such information for at least 90 days or longer for submission to
    government, regulatory, or law enforcement authorities.
  </p>

  {/* -------------------- 5.4 TERMINATION FOR NON-COMPLIANCE -------------------- */}
  <h3 className="text-2xl md:text-[26px] font-semibold text-[#123873] mt-8 mb-2">
    5.4 Termination for Non-Compliance – FitYou
  </h3>

  <ul className="list-disc pl-6 space-y-2">
    <li>Immediate suspension or permanent termination of User access.</li>
    <li>Removal of all non-compliant content without prior notice.</li>
    <li>Legal action as permitted under applicable law.</li>
  </ul>

  <p className="mt-2">
    Such termination is without prejudice to FitYou’s other rights or remedies.
  </p>

  {/* -------------------- 5.5 DISCLOSURE, DATA TRANSFER & IP -------------------- */}
  <h3 className="text-2xl md:text-[26px] font-semibold text-[#123873] mt-8 mb-2">
    5.5 Disclosure, Data Transfer & Intellectual Property – FitYou
  </h3>

  <p>
    FitYou may disclose or transfer User information to affiliates, service providers,
    regulators, or authorities as required by law, including investigations related to weight
    medication or best medicine to lose weight claims.
  </p>

  <p className="mt-2">
    Sensitive personal data may be transferred only to entities maintaining equivalent data
    protection standards and only where:
  </p>

  <ul className="list-disc pl-6 space-y-1">
    <li>Such transfer is necessary for lawful performance of a contract; or</li>
    <li>The User has expressly consented to the transfer.</li>
  </ul>

  <p className="mt-2">
    FitYou respects intellectual property rights and accepts no liability for violations caused
    by Users, third parties, or external contributors.
  </p>
</section>



{/* 6. Termination – FitYou */}
<section>
  <h2 className="text-3xl md:text-[45px] text-[#123873] mb-3">
    6. Termination – FitYou
  </h2>

  {/* -------------------- 6.1 SUSPENSION & TERMINATION RIGHTS -------------------- */}
  <h3 className="text-2xl md:text-[26px] font-semibold text-[#123873] mt-4 mb-2">
    6.1 Suspension & Termination Rights
  </h3>

  <p>
    FitYou reserves the right, in accordance with applicable law, to suspend, restrict, or
    permanently terminate a User’s access to the Website and Services, including services related
    to weight loss medication, best medicine to lose weight, medication for lose weight, weight
    medication, best to lose weight solutions, and the best weight loss programs, under the
    following circumstances:
  </p>

  <ul className="list-disc pl-6 mt-2 space-y-2">
    <li>The User breaches any term, condition, or obligation under this Agreement.</li>
    <li>
      A third party reports a violation of its rights arising from the User’s use of FitYou
      Services.
    </li>
    <li>
      FitYou is unable to verify or authenticate any information submitted by the User.
    </li>
    <li>
      FitYou suspects illegal, fraudulent, deceptive, or abusive activity, including misuse of
      weight loss medication information or false claims regarding best weight loss results.
    </li>
    <li>
      FitYou determines that the User’s actions may expose the User, other Users, or FitYou to
      legal liability, reputational harm, regulatory scrutiny, or are contrary to business and
      compliance objectives.
    </li>
  </ul>

  {/* -------------------- 6.2 EFFECT OF SUSPENSION OR TERMINATION -------------------- */}
  <h3 className="text-2xl md:text-[26px] font-semibold text-[#123873] mt-8 mb-2">
    6.2 Effect of Suspension or Termination
  </h3>

  <p>Following suspension or termination, the User shall not be permitted to:</p>

  <ul className="list-disc pl-6 mt-2 space-y-2">
    <li>Continue using the Website under the same account,</li>
    <li>Create or operate another account, or</li>
    <li>Re-register under a new identity.</li>
  </ul>

  <p className="mt-2">
    Upon termination, the User immediately loses access to all data, records, messages, files,
    and content stored on the FitYou Platform, including any material relating to weight
    medication, medication for lose weight programs, or best medicine to lose weight guidance.
  </p>

  <p className="mt-2">
    Users are solely responsible for maintaining secure backups of any medical services, records,
    consultations, or related data, in compliance with applicable record-keeping laws and
    professional standards.
  </p>
</section>





{/* 7. Limitation of Liability – FitYou */}
<section>
  <h2 className="text-3xl md:text-[45px]  text-[#123873] mb-3">
    7. Limitation of Liability – FitYou
  </h2>

  <p>
    To the maximum extent permitted under applicable law, FitYou and its directors, officers,
    employees, agents, contractors, affiliates, content partners, service providers, and licensors
    (collectively, the “Protected Entities”) shall not be liable for any direct, indirect,
    incidental, special, consequential, exemplary, or punitive damages arising out of:
  </p>

  <ul className="list-disc pl-6 mt-2 space-y-2">
    <li>
      The use or inability to use the FitYou Website or Services.
    </li>
    <li>
      Any reliance on information related to weight loss medication, best medicine to lose weight,
      medication for lose weight, weight medication, best to lose weight programs, or best weight
      loss solutions.
    </li>
    <li>
      Any content, materials, tools, recommendations, consultations, or functions available on the
      Platform.
    </li>
    <li>
      Any loss of business, revenue, goodwill, data, patients, or End-Users.
    </li>
    <li>
      Any information submitted by the User through the Website.
    </li>
  </ul>

  <p className="mt-2">
    These limitations apply even if FitYou or any Protected Entity has been advised of the
    possibility of such damages.
  </p>

  {/* -------------------- 7.1 SPECIFIC EXCLUSIONS OF LIABILITY -------------------- */}
  <h3 className="text-2xl md:text-[26px] font-semibold text-[#123873] mt-8 mb-2">
    7.1 Specific Exclusions of Liability
  </h3>

  <ul className="list-disc pl-6 space-y-2">

    <li>
      The Protected Entities shall not be liable for:
      <ul className="list-[circle] pl-6 mt-1 space-y-1">
        <li>
          The provision, delay, failure, or quality of any goods or services provided by
          Practitioners, healthcare professionals, pharmacies, or third-party pharmacies,
          including prescriptions involving weight loss medication or medication for lose weight.
        </li>
        <li>
          Any content posted, uploaded, transmitted, exchanged, or received by or on behalf of any
          User or third party on or through the Website.
        </li>
        <li>
          Any unauthorized access, interception, misuse, or alteration of User data, medical
          records, or communications.
        </li>
        <li>
          Any inaccuracies, side effects, expectations, or outcomes associated with weight
          medication, best to lose weight programs, or weight loss treatments.
        </li>
      </ul>
    </li>

  </ul>

  {/* -------------------- 7.2 DISCLAIMER OF WARRANTIES -------------------- */}
  <h3 className="text-2xl md:text-[26px] font-semibold text-[#123873] mt-8 mb-2">
    7.2 Disclaimer of Warranties
  </h3>

  <p>
    To the fullest extent permitted by law, FitYou expressly disclaims all warranties, whether
    express or implied, including but not limited to:
  </p>

  <ul className="list-disc pl-6 mt-2 space-y-2">
    <li>Implied warranties of merchantability.</li>
    <li>Fitness for a particular purpose.</li>
    <li>
      Accuracy, completeness, reliability, or effectiveness of any weight loss or weight
      medication guidance.
    </li>
  </ul>

  <p className="mt-2">FitYou does not warrant that:</p>

  <ul className="list-disc pl-6 mt-2 space-y-2">
    <li>The Website or its servers will be uninterrupted, error-free, or virus-free.</li>
    <li>
      Emails, chat messages, or data transmissions originating from FitYou will be free from
      harmful components.
    </li>
  </ul>

  {/* -------------------- 7.3 MAXIMUM LIABILITY CAP -------------------- */}
  <h3 className="text-2xl md:text-[26px] font-semibold text-[#123873] mt-8 mb-2">
    7.3 Maximum Liability Cap
  </h3>

  <p>
    In no event shall the total aggregate liability of FitYou or any Protected Entity to any User
    for all claims, damages, losses, or actions—whether in contract, tort (including negligence),
    strict liability, or otherwise—arising out of or related to:
  </p>

  <ul className="list-disc pl-6 mt-2 space-y-2">
    <li>This Agreement,</li>
    <li>The User’s use of the FitYou Platform,</li>
    <li>
      Any weight loss medication, best medicine to lose weight, weight medication, or related
      services,
    </li>
  </ul>

  <p className="mt-2">
    exceed the total aggregate sum of <b>₹1,000/- (Rupees One Thousand Only)</b>.
  </p>
</section>


{/* 8. Retention and Removal – FitYou */}
<section>
  <h2 className="text-3xl md:text-[45px]  text-[#123873] mb-3">
    8. Retention and Removal – FitYou
  </h2>

  <p>
    FitYou may collect, store, retain, preserve, and process information received from Users
    through the Website or Services, including information related to weight loss medication, best
    medicine to lose weight, medication for lose weight, weight medication, best to lose weight
    programs, and the best weight loss solutions, strictly in accordance with applicable laws,
    rules, and regulatory requirements.
  </p>

  <p className="mt-2">
    FitYou reserves the right to remove, delete, anonymize, or restrict access to any such
    information at its sole discretion where required for legal compliance, platform security,
    risk management, or operational purposes. Retention shall be carried out only for such duration
    as lawfully required or reasonably necessary for the provision of Services, regulatory
    reporting, dispute resolution, audits, or compliance obligations.
  </p>
</section>

{/* 9. Applicable Law and Dispute Settlement – FitYou */}
<section>
  <h2 className="text-3xl md:text-[45px] text-[#123873] mb-3">
    9. Applicable Law and Dispute Settlement – FitYou
  </h2>

  {/* -------------------- 9.1 GOVERNING LAW -------------------- */}
  <h3 className="text-2xl md:text-[26px] font-semibold text-[#123873] mt-4 mb-2">
    9.1 Governing Law
  </h3>

  <p>
    You expressly agree that this Agreement and all contractual, advisory, wellness,
    teleconsultation, and service-related obligations between FitYou and the User—including those
    relating to weight loss medication, best medicine to lose weight, medication for lose weight,
    weight medication, best to lose weight programs, and the best weight loss solutions—shall be
    governed by and construed in accordance with the laws of India.
  </p>

  {/* -------------------- 9.2 ARBITRATION -------------------- */}
  <h3 className="text-2xl md:text-[26px] font-semibold text-[#123873] mt-8 mb-2">
    9.2 Arbitration
  </h3>

  <p>
    Any dispute, claim, controversy, or disagreement arising out of or in connection with this
    Agreement, your use of the Website or Services, access to information, or services related to
    weight loss medication and best weight loss programs—including the validity, interpretation,
    scope, or enforceability of this Agreement—shall be finally resolved through arbitration.
  </p>

  <p className="mt-2">Such arbitration shall be conducted:</p>

  <ul className="list-disc pl-6 mt-1 space-y-2">
    <li>In India</li>
    <li>By a sole arbitrator appointed by FitYou</li>
    <li>In accordance with the Arbitration and Conciliation Act, 1996</li>
    <li>With the seat and venue of arbitration at Ahmedabad</li>
    <li>In the English language</li>
  </ul>

  <p className="mt-2">
    The arbitral award shall be final, binding, and enforceable upon both parties.
  </p>

  {/* -------------------- 9.3 EXCLUSIVE JURISDICTION -------------------- */}
  <h3 className="text-2xl md:text-[26px] font-semibold text-[#123873] mt-8 mb-2">
    9.3 Exclusive Jurisdiction
  </h3>

  <p>
    Subject to Clause 9.2 above, the courts at Ahmedabad shall have exclusive jurisdiction over
    all matters arising out of or relating to this Agreement, the use of the Website or Services,
    and any services or information relating to weight loss medication, best medicine to lose
    weight, medication for lose weight, best to lose weight solutions, and the best weight loss
    programs offered under the FitYou Platform.
  </p>
</section>

{/* 10. Contact Information & Grievance Officer – FitYou */}
<section>
  <h2 className="text-3xl md:text-[45px] text-[#123873] mb-3">
    10. Contact Information & Grievance Officer – FitYou
  </h2>

  {/* -------------------- 10.1 CONTACT & SUPPORT -------------------- */}
  <h3 className="text-2xl md:text-[26px] font-semibold text-[#123873] mb-2">
    10.1 Contact & Support
  </h3>

  <p>
    If a User has any questions, concerns, or inquiries regarding FitYou, the Website,
    this Agreement, the Services, or any offerings including weight loss medication,
    best medicine to lose weight, medication for lose weight, weight medication, best
    to lose weight programs, or the best weight loss solutions, the FitYou Customer
    Support Team can be reached at:
  </p>

  <p className="mt-3">
    📧 <span className="font-medium">Email:</span> care@fityou.co.in
  </p>
  <p>
    🌐 <span className="font-medium">Website Contact Page:</span> www.fityou.co.in/contact
  </p>

  <p className="mt-4">
    If you have any grievance or complaint in relation to the services provided on FitYou,
    including teleconsultation or prescriptions for weight loss medication or the best
    weight loss plans, you may contact the Grievance Officer at:
  </p>

  <p className="mt-3">
    📧 <span className="font-medium">Grievance Email:</span> legal@fityou.co.in
  </p>

  <p className="mt-4">
    All complaints shall be acknowledged and addressed in accordance with applicable
    Indian laws.
  </p>
</section>

{/* 11. Severability */}
<section>
  <h2 className="text-3xl md:text-[45px] text-[#123873] mb-3">
    11. Severability
  </h2>

  <p>
    If any provision of these Terms and Conditions of FitYou is held to be invalid, illegal,
    or unenforceable by any court of competent jurisdiction or arbitral tribunal under
    applicable law, such provision shall be deemed severed and excluded. The remaining
    provisions shall continue to remain in full force and effect and shall be enforceable to
    the maximum extent permitted by law.
  </p>

  <p className="mt-2">
    Notwithstanding such severance, these Terms shall be interpreted so as to best reflect the
    original intent in relation to services offered by FitYou, including those concerning
    weight loss medication, best medicine to lose weight, medication for lose weight, best to
    lose weight services, and the best weight loss solutions.
  </p>
</section>

{/* 12. Waiver */}
<section className="mt-8">
  <h2 className="text-3xl md:text-[45px]  text-[#123873] mb-3">
    12. Waiver
  </h2>

  <p>
    No waiver of any provision of this Agreement by FitYou shall be deemed effective unless such
    waiver is made in writing and duly signed by an authorized representative of FitYou. Any
    failure or delay by FitYou in exercising any right, power, or remedy under this Agreement
    shall not operate as a waiver of such right.
  </p>

  <p className="mt-2">
    Any waiver by FitYou of a breach related to any services, including those involving weight
    loss medication, best medicine to lose weight, medication for lose weight, weight
    medication, best to lose weight programs, or the best weight loss offerings, shall not be
    deemed a waiver of any subsequent or future breach.
  </p>
</section>

          </div>
        </section>
      </main>
    </>
  );
}
