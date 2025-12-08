//FitYou\components\partner\InfoSection.jsx
export default function InfoSection() {
  return (
    <section className="w-full py-6 bg-[#F7FBFF] px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20">

        {/* LEFT EMPTY – aligns paragraph under images */}
        <div></div>

        {/* RIGHT PARAGRAPH – matches Aktive style */}
        <p className="text-[#002060] text-lg leading-relaxed font-light max-w-lg">
          Are you a doctor or a pharmacy interested in partnering with FitYou 
          to offer your services via our health platform? Apply to learn more 
          about our platform and how it can drive more patients towards your service.
        </p>

      </div>
    </section>
  );
}