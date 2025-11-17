import { useState, useEffect } from 'react';
import { Quote } from 'lucide-react';

const quotes = [
  {
    q: 'Limitless translated our AI vision into measurable ROI in under 90 days.',
    a: 'Chief Digital Officer, Global Bank'
  },
  {
    q: 'The automation runway they built continues to compound value every quarter.',
    a: 'VP Operations, Fortune 500'
  },
  {
    q: 'Flawless execution. Secure, compliant, and genuinely transformative.',
    a: 'CTO, Healthcare Network'
  },
];

export default function Testimonials() {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx((p) => (p + 1) % quotes.length), 4000);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="testimonials" className="bg-[#0a0a0a] py-24">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <div className="mx-auto h-12 w-12 grid place-items-center rounded-full border border-yellow-400/30 bg-white/5 text-yellow-300">
          <Quote size={20} />
        </div>
        <div className="relative mt-8 rounded-2xl border border-yellow-400/20 bg-white/5 p-10">
          {quotes.map((qt, i) => (
            <blockquote
              key={i}
              className={`${i === idx ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'} transition-all duration-700 absolute inset-0 flex flex-col items-center justify-center p-8`}
            >
              <p className="text-2xl md:text-3xl font-light text-white/90">“{qt.q}”</p>
              <footer className="mt-4 text-white/60">— {qt.a}</footer>
            </blockquote>
          ))}
          <div className="invisible h-[140px]" />
        </div>
      </div>
    </section>
  );
}
