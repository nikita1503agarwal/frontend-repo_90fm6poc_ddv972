import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Submitting...");

    const form = new FormData(e.currentTarget);
    const payload = Object.fromEntries(form.entries());

    try {
      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL || ""}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.detail || "Something went wrong");
      setStatus("Thank you. We will reach out soon.");
      e.currentTarget.reset();
    } catch (err) {
      setStatus(err.message || "Failed to submit");
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl font-bold text-slate-900">Book an Appointment</h2>
            <p className="mt-3 text-slate-600">Share your details and preferred time. Our team will confirm your visit.</p>
            <ul className="mt-6 space-y-2 text-slate-700">
              <li><span className="font-medium">Address:</span> Juhu, Mumbai</li>
              <li><span className="font-medium">Phone:</span> +91 22 2620 9000</li>
              <li><span className="font-medium">Email:</span> info@lotuseyehospital.org</li>
            </ul>
          </div>

          <form onSubmit={handleSubmit} className="bg-white rounded-xl border border-emerald-100 p-6 shadow-sm">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700">Full Name</label>
                <input required name="name" className="mt-1 w-full rounded-lg border-slate-300 focus:border-emerald-500 focus:ring-emerald-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">Phone</label>
                <input required name="phone" className="mt-1 w-full rounded-lg border-slate-300 focus:border-emerald-500 focus:ring-emerald-500" />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-slate-700">Email</label>
                <input type="email" name="email" className="mt-1 w-full rounded-lg border-slate-300 focus:border-emerald-500 focus:ring-emerald-500" />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-slate-700">Message</label>
                <textarea name="message" rows="4" className="mt-1 w-full rounded-lg border-slate-300 focus:border-emerald-500 focus:ring-emerald-500" />
              </div>
            </div>
            <button className="mt-6 inline-flex items-center px-4 py-2 rounded-lg bg-emerald-600 text-white shadow hover:shadow-lg" type="submit">
              Submit
            </button>
            {status && <div className="mt-3 text-sm text-slate-600">{status}</div>}
          </form>
        </div>
      </div>
    </section>
  );
}
