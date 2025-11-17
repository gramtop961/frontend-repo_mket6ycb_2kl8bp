import { motion } from 'framer-motion';

const steps = [
  { k: 'ANALYZE', d: 'Diagnose processes, data, and constraints.' },
  { k: 'ARCHITECT', d: 'Design blueprints, systems, and governance.' },
  { k: 'ASCEND', d: 'Deploy, iterate, and scale with confidence.' },
];

export default function Process() {
  return (
    <section id="process" className="bg-[#0a0a0a] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-light text-white"
        >
          Process
        </motion.h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {steps.map((s, i) => (
            <motion.div
              key={s.k}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative rounded-xl border border-yellow-400/20 bg-white/5 p-6 backdrop-blur"
            >
              <div className="absolute -inset-x-4 top-1/2 -translate-y-1/2 hidden md:block">
                {i < steps.length - 1 && (
                  <div className="mx-auto h-[2px] w-full bg-gradient-to-r from-yellow-400/40 to-transparent" />
                )}
              </div>
              <div className="flex items-baseline gap-3">
                <span className="text-xs tracking-widest text-yellow-300">STEP {i + 1}</span>
                <h3 className="text-xl text-white">{s.k}</h3>
              </div>
              <p className="mt-4 text-white/60">{s.d}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
