export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_20%_0%,rgba(16,185,129,0.15),transparent_50%),radial-gradient(50%_50%_at_100%_40%,rgba(244,63,94,0.15),transparent_55%)]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 relative">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
              Compassionate, affordable, world‑class eye care since 1971
            </h1>
            <p className="mt-5 text-lg text-slate-600 max-w-prose">
              Lotus Eye Hospital is a charitable trust in Juhu, Mumbai, founded by the renowned economist Late Shri Manu Subedar. For over five decades, we have served the community with comprehensive ophthalmic services.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#services" className="inline-flex items-center px-5 py-3 rounded-lg bg-emerald-600 text-white shadow hover:shadow-lg hover:-translate-y-0.5 transition">Explore Services</a>
              <a href="#contact" className="inline-flex items-center px-5 py-3 rounded-lg border border-rose-200 text-rose-700 hover:bg-rose-50">Book Appointment</a>
            </div>
            <div className="mt-6 text-sm text-emerald-700">
              A trusted non‑profit under the leadership of Navinchandra Shah (Chairman & Managing Trustee)
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl bg-white border border-slate-200 shadow-xl overflow-hidden">
              <img src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1600&auto=format&fit=crop" alt="Eye care" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg border border-slate-200 p-4">
              <div className="text-2xl font-bold text-emerald-700">50+ Years</div>
              <div className="text-xs uppercase tracking-wide text-slate-500">Of Service</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
