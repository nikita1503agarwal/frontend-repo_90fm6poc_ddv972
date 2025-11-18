import { Menu } from "lucide-react";
import { useState } from "react";

const navItems = [
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "leadership", label: "Leadership" },
  { id: "community", label: "Community" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b border-emerald-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-emerald-500 to-rose-500 shadow-md shadow-emerald-200/40 flex items-center justify-center text-white font-bold">
              LE
            </div>
            <div className="leading-tight">
              <div className="text-lg font-semibold text-slate-900">Lotus Eye Hospital</div>
              <div className="text-[11px] uppercase tracking-wide text-emerald-700">Juhu, Mumbai • Since 1971</div>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-7 text-slate-700">
            {navItems.map((n) => (
              <button key={n.id} onClick={() => scrollTo(n.id)} className="hover:text-emerald-700 transition-colors">
                {n.label}
              </button>
            ))}
            <a href="#contact" className="ml-2 inline-flex items-center px-4 py-2 rounded-lg bg-gradient-to-br from-emerald-600 to-rose-600 text-white shadow hover:shadow-lg hover:-translate-y-0.5 transition-all">
              Book Appointment
            </a>
          </nav>

          <button className="md:hidden p-2 rounded-lg border border-slate-200" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            <Menu className="w-5 h-5" />
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4 animate-in fade-in slide-in-from-top-1">
            <div className="grid gap-2">
              {navItems.map((n) => (
                <button key={n.id} onClick={() => scrollTo(n.id)} className="text-left px-3 py-2 rounded-md hover:bg-emerald-50">
                  {n.label}
                </button>
              ))}
              <a href="#contact" onClick={() => setOpen(false)} className="text-center px-3 py-2 rounded-md bg-gradient-to-br from-emerald-600 to-rose-600 text-white">
                Book Appointment
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
