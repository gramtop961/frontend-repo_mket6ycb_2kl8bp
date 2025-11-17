import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const sections = [
  { id: 'hero', label: 'Home' },
  { id: 'services', label: 'Services' },
  { id: 'process', label: 'Process' },
  { id: 'value', label: 'Value' },
  { id: 'stats', label: 'Stats' },
  { id: 'industries', label: 'Industries' },
  { id: 'testimonials', label: 'Clients' },
  { id: 'team', label: 'Team' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setOpen(false);
    }
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 backdrop-blur supports-[backdrop-filter]:bg-black/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-7 w-7 bg-gradient-to-br from-yellow-300 to-yellow-500 rounded-sm shadow-[0_0_25px_rgba(255,215,0,0.45)]" />
          <span className="text-sm tracking-widest text-white/80">LIMITLESS AI</span>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          {sections.map((s) => (
            <button
              key={s.id}
              onClick={() => scrollTo(s.id)}
              className="text-sm text-white/70 hover:text-yellow-300 transition-colors"
            >
              {s.label}
            </button>
          ))}
        </nav>
        <button onClick={() => setOpen(!open)} className="md:hidden text-white/80">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-white/10 bg-black/80">
          <div className="px-4 py-3 flex flex-col gap-2">
            {sections.map((s) => (
              <button
                key={s.id}
                onClick={() => scrollTo(s.id)}
                className="py-2 text-left text-white/80 hover:text-yellow-300"
              >
                {s.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
