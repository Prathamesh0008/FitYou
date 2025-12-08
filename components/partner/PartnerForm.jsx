//FitYou\components\partner\PartnerForm.jsx
"use client";

export default function PartnerForm() {
  return (
    <section className="w-full py-20 bg-[#F7FBFF] px-6">
      
      {/* Entire form centered & constrained */}
      <div className="max-w-3xl mx-auto">

        {/* HEADING */}
        <h2 className="text-[#002060] text-[38px] font-normal tracking-tight text-center">
          Applications and enquiries
        </h2>

        <p className="mt-2 text-[#002060] text-lg font-light text-center max-w-xl mx-auto">
          If you're interested, we'd love to hear from you. Please leave us a 
          message using the form below and we'll get back to you.
        </p>

        {/* FORM CARD – smaller width */}
        <div className="mt-10 bg-white p-8 rounded-lg border border-gray-200 shadow-sm max-w-xl mx-auto">

          <h3 className="text-xl font-medium text-[#002060] mb-4">
            Application form
          </h3>

          <form className="space-y-6">

            <select className="w-full p-3 border border-gray-300 rounded-md">
              <option>Select partnership*</option>
              <option>Doctor</option>
              <option>Pharmacy</option>
              <option>Clinic</option>
            </select>

            <div className="grid grid-cols-2 gap-4">
              <input placeholder="Name*" className="p-3 border border-gray-300 rounded-md" />
              <input placeholder="Surname*" className="p-3 border border-gray-300 rounded-md" />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <input placeholder="Phone*" className="p-3 border border-gray-300 rounded-md" />
              <input placeholder="Email*" className="p-3 border border-gray-300 rounded-md" />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <input placeholder="City/town*" className="p-3 border border-gray-300 rounded-md" />
              <select className="p-3 border border-gray-300 rounded-md">
                <option>State*</option>
              </select>
            </div>

            <textarea
              className="w-full h-32 p-3 border border-gray-300 rounded-md"
              placeholder="Your message:"
            ></textarea>

            <button className="w-full py-3 bg-[#AAC9D6] text-[#002060] font-semibold rounded-md">
              Submit
            </button>

          </form>
        </div>

      </div>
    </section>
  );
}