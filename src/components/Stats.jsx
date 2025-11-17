import { useEffect, useState } from 'react';

const counters = [
  { label: 'Value Generated', prefix: '$', end: 50, suffix: 'M+' },
  { label: 'Processing Speed', end: 10000, suffix: 'x' },
  { label: 'Accuracy', end: 99.99, suffix: '%', decimals: 2 },
  { label: 'Scaling', end: 100, suffix: '%', icon: '∞' },
];

function useCounter(end, duration = 2000, decimals = 0) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    let raf;
    const start = performance.now();
    const tick = (now) => {
      const p = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(end * eased);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [end, duration]);
  return value.toFixed(decimals);
}

export default function Stats() {
  return (
    <section id="stats" className="bg-[#0a0a0a] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-3xl md:text-4xl font-light text-white">Impact</h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {counters.map((c) => {
            const val = useCounter(c.end, 2000, c.decimals || 0);
            return (
              <div key={c.label} className="rounded-xl border border-yellow-400/20 bg-white/5 p-6 text-center">
                <div className="text-3xl md:text-4xl font-light text-yellow-300 drop-shadow-[0_0_15px_rgba(255,215,0,0.45)]">
                  {c.prefix || ''}{val}{c.suffix || ''}
                </div>
                <div className="mt-2 text-white/60">{c.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
