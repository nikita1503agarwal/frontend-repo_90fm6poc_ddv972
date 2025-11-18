const services = [
  { title: "Comprehensive Eye Care" },
  { title: "Cataract" },
  { title: "Cornea" },
  { title: "Glaucoma" },
  { title: "Retina" },
  { title: "Oculoplasty" },
  { title: "Pediatric Ophthalmology & Strabismus" },
  { title: "Refractive Surgery (LASIK, PRK, ASA, LASEK)" },
  { title: "Community Ophthalmology" },
  { title: "Low Vision Aid" },
];

export default function Services() {
  return (
    <section id="services" className="py-16 md:py-24 bg-gradient-to-b from-white to-emerald-50/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6 mb-10">
          <div>
            <h2 className="text-3xl font-bold text-slate-900">Our Services</h2>
            <p className="text-slate-600 mt-2 max-w-prose">From routine eye exams to advanced surgeries, our specialists cover the full spectrum of ophthalmic care.</p>
          </div>
          <a href="#contact" className="hidden md:inline-flex items-center px-4 py-2 rounded-lg bg-rose-600 text-white shadow hover:shadow-lg">Book Appointment</a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s) => (
            <div key={s.title} className="group rounded-xl bg-white border border-emerald-100 hover:border-emerald-300/80 shadow-sm hover:shadow-md transition overflow-hidden">
              <div className="p-5">
                <div className="h-40 rounded-lg bg-gradient-to-br from-emerald-100 to-rose-100 mb-4 group-hover:from-emerald-200 group-hover:to-rose-200 transition" />
                <div className="font-semibold text-slate-900">{s.title}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
