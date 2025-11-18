import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Leadership from "./components/Leadership";
import Community from "./components/Community";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-800">
      <Navbar />
      <main>
        <Hero />
        <section id="about" className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-10 items-start">
              <div className="md:col-span-2">
                <h2 className="text-3xl font-bold text-slate-900">About Lotus Eye Hospital</h2>
                <p className="mt-4 text-slate-600 max-w-prose">
                  We are a charitable trust hospital located in Juhu, Mumbai, committed to providing high-quality, affordable eye care to all sections of society. Our services span the entire spectrum of ophthalmology with an emphasis on compassion and community service.
                </p>
              </div>
              <div className="bg-gradient-to-br from-emerald-100 to-rose-100 rounded-2xl p-6 border border-emerald-200">
                <div className="text-sm uppercase tracking-wider text-emerald-700">At a glance</div>
                <ul className="mt-3 space-y-2 text-slate-700">
                  <li>Founded in 1971</li>
                  <li>Charitable Trust Hospital</li>
                  <li>Juhu, Mumbai</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <Services />
        <Leadership />
        <Community />
        <Contact />
      </main>
      <footer className="border-t border-emerald-100 py-10 text-center text-sm text-slate-500 bg-emerald-50/40">
        © {new Date().getFullYear()} Lotus Eye Hospital. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
