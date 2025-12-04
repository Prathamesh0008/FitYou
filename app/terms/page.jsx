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
            <h1 className="text-6xl sm:text-7xl md:text-[74px] leading-tight ">
              Terms &amp; conditions
            </h1>
            <p className="mt-10 text-base md:text-lg leading-relaxed text-[#304064] max-w-3xl mx-auto">
              Fityou Healthcare Private Limited, on behalf of itself and its affiliates or group
              companies under the brand &quot;Fityou&quot; (&quot;Fityou&quot;), is the author and
              publisher of this website and the services made available through it.
            </p>
          </header>

          {/* From here down, text is LEFT aligned, like the reference */}
          <div className="text-left text-base md:text-lg leading-relaxed text-[#304064] space-y-6">
            {/* 1. Nature and applicability */}
            <section>
              <h2 className="text-3xl md:text-[34px] font-semibold text-[#123873] mb-3">
                1. Nature and applicability of terms
              </h2>
              <p>
                These Terms &amp; Conditions (&quot;Terms&quot;) and the Fityou Privacy Policy
                together explain how you may access and use the website and any related services,
                and how Fityou will treat information shared by you when you do so.
              </p>
              <p>
                By choosing to access the website or use any service, you confirm that you have read
                and understood these Terms and agree to be legally bound by them. If you do not
                agree with any part of these Terms, you should not use the website or services.
              </p>
            </section>

            {/* 2. Conditions of use */}
            <section>
              <h2 className="text-3xl md:text-[34px] font-semibold text-[#123873] mb-3">
                2. Conditions of use
              </h2>
              <p>
                You must be at least 18 years of age and capable of entering into a binding
                contract to register for or use the services. When you create an account, you agree
                that all details you provide are true, current and complete, and that you will keep
                them updated.
              </p>
              <p>
                You agree to use the website only for lawful purposes and in accordance with these
                Terms, and not to attempt any unauthorised access, introduce harmful code, or use
                the services in a way that could damage Fityou or any other person.
              </p>
            </section>

            {/* 3. End‑user account & data privacy */}
            <section>
              <h2 className="text-3xl md:text-[34px] font-semibold text-[#123873] mb-3">
                3. End‑user terms
              </h2>

              <h3 className="text-2xl md:text-[26px] font-semibold text-[#123873] mb-2">
                3.1 End‑user account and data privacy
              </h3>
              <p>
                When you create or use a Fityou account, Fityou may collect personal and health
                information such as your name, contact details, questionnaire responses, order
                history and device information. This is used to provide consultations,
                subscriptions, deliveries and support in line with the Privacy Policy.
              </p>
              <p>
                You are responsible for keeping your login credentials confidential and for all
                activity under your account. If you suspect any unauthorised use, you should notify
                Fityou as soon as possible so that appropriate steps can be taken.
              </p>

              <h3 className="text-2xl md:text-[26px] font-semibold text-[#123873] mt-4 mb-2">
                3.2 Listings and information
              </h3>
              <p>
                The website may display practitioner profiles, photographs, qualifications, clinic
                details, pricing and feedback. While reasonable efforts are made to keep this
                information current, Fityou does not independently verify every item of data and
                cannot guarantee that all such information is always complete, accurate or
                error‑free.
              </p>
              <p>
                All information and services are provided on an &quot;as is&quot; and &quot;as
                available&quot; basis without any express or implied warranties, and any reliance
                you place on them is at your own risk.
              </p>

              <h3 className="text-2xl md:text-[26px] font-semibold text-[#123873] mt-4 mb-2">
                3.3 Cancellation and refunds
              </h3>
              <p>
                Cancellations, changes and refunds for consultations, subscriptions and product
                orders are governed by Fityou&apos;s separate Cancellation and Refund Policy. By
                placing an order or subscribing to a plan, you agree to the conditions set out in
                that policy.
              </p>

              <h3 className="text-2xl md:text-[26px] font-semibold text-[#123873] mt-4 mb-2">
                3.4 Third‑party pharmacies and delivery partners
              </h3>
              <p>
                Where medicines or treatment packs are supplied, they may be dispensed and
                delivered by independent pharmacies and logistics partners. These entities are
                responsible for fulfilling prescriptions, maintaining stock, handling storage and
                transport, and complying with all applicable laws.
              </p>
              <p>
                Fityou does not manufacture, sell or dispense medicines and is not a party to the
                contract of sale between you and any pharmacy. Queries about stock, packaging or
                delivery of medicines should be directed to the relevant pharmacy or delivery
                partner indicated in your order details.
              </p>

              <h3 className="text-2xl md:text-[26px] font-semibold text-[#123873] mt-4 mb-2">
                3.5 No doctor–patient relationship with Fityou; not for emergencies
              </h3>
              <p>
                Health‑related content on the website, including articles, FAQs and tools, is
                provided for general information only and is not a substitute for an in‑person
                consultation with a qualified medical professional. You should not rely on this
                content as the sole basis for making decisions about your health.
              </p>
              <p>
                Fityou itself does not provide medical advice, diagnosis or treatment and does not
                practise medicine or pharmacy. Any clinical services you receive through the
                platform are provided independently by practitioners, who remain solely responsible
                for those services. The services must never be used for medical emergencies; in an
                emergency you must contact local emergency services or the nearest hospital.
              </p>

              <h3 className="text-2xl md:text-[26px] font-semibold text-[#123873] mt-4 mb-2">
                3.6 Content ownership and intellectual property
              </h3>
              <p>
                All non‑user content on the website, including text, graphics, logos, icons, images,
                software code and overall design, is owned by Fityou or its licensors and is
                protected by copyright, trademark and other applicable laws.
              </p>
              <p>
                You may view this content for your personal, non‑commercial use only. You must not
                copy, modify, reproduce, publicly display, distribute or create derivative works
                from any part of the website without prior written permission, except where such
                use is expressly allowed by law.
              </p>
            </section>

            {/* 4. Practitioner terms */}
            <section>
              <h2 className="text-3xl md:text-[34px] font-semibold text-[#123873] mb-3">
                4. Terms applicable to practitioners
              </h2>
              <p>
                Practitioners are responsible for the accuracy and completeness of their profile
                information, including qualifications, registrations, areas of practice, clinic
                details and fees, and must keep this information up to date.
              </p>
              <p>
                Practitioners remain solely responsible for complying with all laws, regulations and
                professional standards applicable to their practice. Any diagnosis, prescription or
                treatment plan created using the platform is the practitioner&apos;s independent
                professional judgement, and Fityou is not liable for such clinical decisions.
              </p>
            </section>

            {/* 5. Liability & law */}
            <section>
              <h2 className="text-3xl md:text-[34px] font-semibold text-[#123873] mb-3">
                5. Limitation of liability, governing law and changes
              </h2>
              <p>
                To the fullest extent permitted by law, Fityou and its directors, employees and
                service providers shall not be liable for any indirect, incidental, special,
                consequential or punitive damages, or any loss of profits, revenue, data or
                goodwill, arising out of or in connection with your use of, or inability to use, the
                services.
              </p>
              <p>
                These Terms are governed by the laws of India. Subject to any mandatory consumer
                protection rules, any disputes arising out of or relating to these Terms or the
                services shall be subject to the exclusive jurisdiction of the competent courts in
                the location where Fityou is registered.
              </p>
              <p>
                Fityou may update these Terms from time to time. The latest version will always be
                available on this page, and your continued use of the services after changes take
                effect means that you accept the revised Terms.
              </p>
            </section>
          </div>
        </section>
      </main>
    </>
  );
}
