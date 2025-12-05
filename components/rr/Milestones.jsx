//FitYou\components\recommendations\Milestones.jsx
export default function Milestones() {
  return (
    <section className="bg-[#FFF6EC] py-14 mt-10">
      <div className="max-w-3xl mx-auto px-4">

        <h2 className="text-2xl font-semibold mb-6 text-[#0D4F8B]">
          Your milestone timeline
        </h2>

        <div className="grid sm:grid-cols-3 gap-8 text-center">

          <div>
            <p className="text-xl font-bold text-[#0D4F8B]">Day 1</p>
            <p className="text-xs text-[#60738C] mt-1">Start treatment</p>
          </div>

          <div>
            <p className="text-xl font-bold text-[#0D4F8B]">Week 4</p>
            <p className="text-xs text-[#60738C] mt-1">Dose stabilizes</p>
          </div>

          <div>
            <p className="text-xl font-bold text-[#0D4F8B]">Month 3</p>
            <p className="text-xs text-[#60738C] mt-1">Noticeable results</p>
          </div>

        </div>

      </div>
    </section>
  );
}
