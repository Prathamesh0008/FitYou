// app/patient-responsibility/page.jsx

export const metadata = {
  title: "Patient Responsibility & Compliance Agreement – FitYou",
};

export default function PatientResponsibilityPage() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: "#F5F7FA" }}>
      <div className="max-w-5xl mx-auto px-6 lg:px-20 py-16 font-laila">
        {/* RESPONSIVE HEADING */}
     <h1
  className="text-5xl sm:text-6xl lg:text-7xl  leading-tight mb-16"
  style={{ color: "#0B2972" }}
>
  {/* Desktop / tablet: 2 lines */}
  <span className="hidden sm:block">
    <span className="block whitespace-nowrap">
      Patient responsibility and
    </span>
    <span className="block whitespace-nowrap">
      compliance agreement
    </span>
  </span>

  {/* Mobile: 4 lines */}
  <span className="block sm:hidden">
    <span className="block whitespace-nowrap">Patient</span>
    <span className="block whitespace-nowrap">responsibility</span>
    <span className="block whitespace-nowrap">and compliance</span>
    <span className="block whitespace-nowrap">agreement</span>
  </span>
</h1>





        {/* INTRO */}
        <p
          className="text-base sm:text-lg leading-relaxed mb-8"
          style={{ color: "#1F3556" }}
        >
          By using the FitYou website, participating in an online medical
          consultation, and purchasing any treatment, including weight loss
          medication, best medicine to lose weight, medication for lose weight,
          weight medication, best to lose weight programs, and the best weight
          loss solutions, I acknowledge, confirm, and declare the following
          statements to be true and correct, as if made under oath:
        </p>

        {/* 1. Age & Legal Capacity */}
        <h2
          className="text-2xl sm:text-3xl  mt-10 mb-3"
          style={{ color: "#0B2972" }}
        >
          1. Age &amp; Legal Capacity
        </h2>
        <p
          className="text-base sm:text-lg leading-relaxed"
          style={{ color: "#1F3556" }}
        >
          I confirm that I am 18 years of age or older, legally competent, and
          of sound mind and judgment to enter into this agreement with FitYou.
        </p>

        {/* 2. Legal Use of Medication */}
        <h2
          className="text-2xl sm:text-3xl mt-10 mb-3"
          style={{ color: "#0B2972" }}
        >
          2. Legal Use of Medication
        </h2>
        <p
          className="text-base sm:text-lg leading-relaxed"
          style={{ color: "#1F3556" }}
        >
          I confirm that under the laws of my country of residence, I am legally
          permitted to receive and use the weight loss medication or treatment
          that I am requesting for my personal use only, and I enter into this
          agreement in full compliance with all applicable laws.
        </p>

        {/* 3. Recent Medical Evaluation */}
        <h2
          className="text-2xl sm:text-3xl mt-10 mb-3"
          style={{ color: "#0B2972" }}
        >
          3. Recent Medical Evaluation
        </h2>
        <p
          className="text-base sm:text-lg leading-relaxed"
          style={{ color: "#1F3556" }}
        >
          I confirm that I have recently consulted a qualified local doctor, who
          has evaluated my medical condition and past medical history and deemed
          me fit to proceed with treatment at a satisfactory level.
        </p>

        {/* 4. Ongoing Medical Supervision */}
        <h2
          className="text-2xl sm:text-3xl  mt-10 mb-3"
          style={{ color: "#0B2972" }}
        >
          4. Ongoing Medical Supervision
        </h2>
        <p
          className="text-base sm:text-lg leading-relaxed mb-2"
          style={{ color: "#1F3556" }}
        >
          I confirm that my local doctor is a registered medical practitioner in
          India and is available for future medical consultation if required. I
          agree to immediately contact my doctor in case of any side effects,
          complications, discomfort, or concerns related to the best weight loss
          medication I receive through FitYou.
        </p>
        <p
          className="text-base sm:text-lg leading-relaxed"
          style={{ color: "#1F3556" }}
        >
          I also acknowledge that the prescribing doctor or dispensing pharmacy
          associated with FitYou may contact me for follow-up when required.
        </p>

        {/* 5. Personal Use Only */}
        <h2
          className="text-2xl sm:text-3xl  mt-10 mb-3"
          style={{ color: "#0B2972" }}
        >
          5. Personal Use Only
        </h2>
        <div
          className="text-base sm:text-lg leading-relaxed space-y-1"
          style={{ color: "#1F3556" }}
        >
          <p>
            I confirm that the prescribed weight medication and best medicine to
            lose weight are:
          </p>
          <p>- For my personal medical needs only</p>
          <p>- Not intended for resale, redistribution, or stockpiling</p>
          <p>- Limited strictly to an adequate personal supply</p>
        </div>

        {/* 6. Not a Substitute for Regular Healthcare */}
        <h2
          className="text-2xl sm:text-3xl  mt-10 mb-3"
          style={{ color: "#0B2972" }}
        >
          6. Not a Substitute for Regular Healthcare
        </h2>
        <p
          className="text-base sm:text-lg leading-relaxed"
          style={{ color: "#1F3556" }}
        >
          I understand and agree that FitYou’s services support, but do not
          replace, my relationship with my local doctor and healthcare
          providers.
        </p>

               {/* 7. Awareness of Benefits & Risks */}
        <h2
          className="text-2xl sm:text-3xl  mt-10 mb-3"
          style={{ color: "#0B2972" }}
        >
          7. Awareness of Benefits &amp; Risks
        </h2>
        <div
          className="text-base sm:text-lg leading-relaxed space-y-1"
          style={{ color: "#1F3556" }}
        >
          <p>I confirm that I have been informed by a trained healthcare professional about:</p>
          <p>- The benefits</p>
          <p>- The possible side effects</p>
          <p>
            - The medical risks associated with the weight loss medication or
            treatment I may request.
          </p>
          <p>
            I further confirm that I have reviewed educational materials related
            to the best weight loss treatments.
          </p>
        </div>

        {/* 8. Prior Safe Use (If Applicable) */}
        <h2
          className="text-2xl sm:text-3xl  mt-10 mb-3"
          style={{ color: "#0B2972" }}
        >
          8. Prior Safe Use (If Applicable)
        </h2>
        <div
          className="text-base sm:text-lg leading-relaxed space-y-1"
          style={{ color: "#1F3556" }}
        >
          <p>
            If I have used the requested medication for weight loss previously,
            I confirm that it was:
          </p>
          <p>- Under medical supervision</p>
          <p>- Safe and free from serious side effects</p>
          <p>
            I further confirm that my doctor has advised that this medication is
            appropriate and not contraindicated for me.
          </p>
        </div>

        {/* 9. Responsibility for Adverse Events */}
        <h2
          className="text-2xl sm:text-3xl mt-10 mb-3"
          style={{ color: "#0B2972" }}
        >
          9. Responsibility for Adverse Events
        </h2>
        <div
          className="text-base sm:text-lg leading-relaxed space-y-1"
          style={{ color: "#1F3556" }}
        >
          <p>I agree to immediately consult a doctor if I experience:</p>
          <p>- Any side effects</p>
          <p>- Complications</p>
          <p>- Unusual symptoms</p>
          <p>
            Before taking any new medication, I agree to first obtain approval
            from a registered doctor or pharmacist and fully disclose all
            medicines I am currently taking.
          </p>
        </div>

        {/* 10. Honest Medical Disclosure */}
        <h2
          className="text-2xl sm:text-3xl  mt-10 mb-3"
          style={{ color: "#0B2972" }}
        >
          10. Honest Medical Disclosure
        </h2>
        <p
          className="text-base sm:text-lg leading-relaxed"
          style={{ color: "#1F3556" }}
        >
          I confirm that all answers provided by me are truthful and complete,
          as they would be in a face-to-face medical consultation.
        </p>

        {/* 11. Continuous Duty of Disclosure */}
        <h2
          className="text-2xl sm:text-3xl  mt-10 mb-3"
          style={{ color: "#0B2972" }}
        >
          11. Continuous Duty of Disclosure
        </h2>
        <p
          className="text-base sm:text-lg leading-relaxed"
          style={{ color: "#1F3556" }}
        >
          I understand that full and honest disclosure is mandatory for my
          safety, and I agree to comply with this obligation at all times.
        </p>

        {/* 12. No Misrepresentation */}
        <h2
          className="text-2xl sm:text-3xl  mt-10 mb-3"
          style={{ color: "#0B2972" }}
        >
          12. No Misrepresentation
        </h2>
        <p
          className="text-base sm:text-lg leading-relaxed"
          style={{ color: "#1F3556" }}
        >
          I confirm that I have not hidden, omitted, or falsified any medical
          information, including health conditions, medical history, or
          lifestyle factors.
        </p>

        {/* 13. Acceptance of Medical Risks */}
        <h2
          className="text-2xl sm:text-3xl mt-10 mb-3"
          style={{ color: "#0B2972" }}
        >
          13. Acceptance of Medical Risks
        </h2>
        <p
          className="text-base sm:text-lg leading-relaxed"
          style={{ color: "#1F3556" }}
        >
          I acknowledge that all medications and treatments carry potential
          risks and benefits, including the best weight loss medication, and I
          accept personal responsibility for monitoring my health.
        </p>

        {/* 14. Authorized Payment Use */}
        <h2
          className="text-2xl sm:text-3xl  mt-10 mb-3"
          style={{ color: "#0B2972" }}
        >
          14. Authorized Payment Use
        </h2>
        <p
          className="text-base sm:text-lg leading-relaxed"
          style={{ color: "#1F3556" }}
        >
          I confirm that I am legally authorized to use the payment method
          provided and that I am the rightful cardholder or authorized user.
        </p>

        {/* 15. Voluntary Consent */}
        <h2
          className="text-2xl sm:text-3xl mt-10 mb-3"
          style={{ color: "#0B2972" }}
        >
          15. Voluntary Consent
        </h2>
        <p
          className="text-base sm:text-lg leading-relaxed"
          style={{ color: "#1F3556" }}
        >
          I confirm that I am acting of my own free will, without any force,
          pressure, or inducement to use FitYou’s weight loss medication or
          best weight loss services.
        </p>

               {/* 16. Binding Legal Acceptance */}
        <h2
          className="text-2xl sm:text-3xl  mt-10 mb-3"
          style={{ color: "#0B2972" }}
        >
          16. Binding Legal Acceptance
        </h2>
        <div
          className="text-base sm:text-lg leading-relaxed space-y-1 mb-10"
          style={{ color: "#1F3556" }}
        >
          <p>
            By proceeding with any consultation, weight medication purchase, or
            treatment request through FitYou, I:
          </p>
          <p>- Voluntarily accept all terms of this Agreement</p>
          <p>- Agree to be bound by FitYou’s Terms &amp; Conditions and Privacy Policy</p>
          <p>- Acknowledge that this acceptance is legally binding and irrevocable</p>
        </div>
 </div>  
    </main>   
  );
}
