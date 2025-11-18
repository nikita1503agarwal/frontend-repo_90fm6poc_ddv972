export default function Community() {
  return (
    <section id="community" className="py-16 md:py-24 bg-emerald-50/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold text-slate-900">Community Ophthalmology</h2>
          <p className="mt-3 text-slate-600">
            We conduct outreach programs, screenings, and awareness drives to ensure eye care reaches those who need it most. Our initiatives focus on affordability and accessibility, aligning with our charitable mission.
          </p>
        </div>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="rounded-xl bg-white border border-emerald-100 p-5">
              <div className="h-36 rounded-lg bg-gradient-to-br from-emerald-100 to-rose-100 mb-4" />
              <div className="font-medium text-slate-900">Outreach Camp #{i + 1}</div>
              <div className="text-sm text-slate-500">Screenings and awareness</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
