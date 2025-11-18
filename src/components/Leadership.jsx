export default function Leadership() {
  return (
    <section id="leadership" className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl font-bold text-slate-900">Leadership</h2>
            <p className="mt-3 text-slate-600 max-w-prose">
              Founded in 1971 by the esteemed economist Late Shri Manu Subedar, Lotus Eye Hospital continues to uphold a legacy of service and integrity. Today, the institution is guided by the leadership of Navinchandra Shah, Chairman & Managing Trustee.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="rounded-xl border border-emerald-100 p-4 bg-white">
                <div className="text-sm text-slate-500">Founder</div>
                <div className="font-semibold text-slate-900">Late Shri Manu Subedar</div>
              </div>
              <div className="rounded-xl border border-emerald-100 p-4 bg-white">
                <div className="text-sm text-slate-500">Chairman & Managing Trustee</div>
                <div className="font-semibold text-slate-900">Navinchandra Shah</div>
              </div>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <div className="aspect-[4/3] rounded-2xl bg-white border border-slate-200 shadow-xl overflow-hidden">
              <img src="https://images.unsplash.com/photo-1579154204601-01588f351e67?q=80&w=1600&auto=format&fit=crop" alt="Hospital" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
