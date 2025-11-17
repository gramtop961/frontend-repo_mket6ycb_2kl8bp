import { motion } from 'framer-motion';

const transforms = [
  'Lead time compression',
  'Cost-to-serve reduction',
  'Decision intelligence',
  'Customer personalization',
  'Risk mitigation',
  'Knowledge synthesis',
];

const advantages = [
  'Enterprise-grade security',
  'Model-agnostic architecture',
  'Human-in-the-loop governance',
  'Data lineage & observability',
  'Scalable agent orchestration',
  'Outcome-based delivery',
];

export default function ValueProps() {
  return (
    <section id="value" className="bg-[#0a0a0a] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-light text-white"
        >
          Value
        </motion.h2>
        <div className="mt-10 grid gap-10 md:grid-cols-2">
          <ul className="space-y-4">
            {transforms.map((t, i) => (
              <motion.li
                key={t}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="flex items-start gap-3 text-white/80"
              >
                <span className="mt-1 text-yellow-300">✨</span>
                <span>{t}</span>
              </motion.li>
            ))}
          </ul>
          <ul className="space-y-4">
            {advantages.map((t, i) => (
              <motion.li
                key={t}
                initial={{ opacity: 0, x: 10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="flex items-start gap-3 text-white/80"
              >
                <span className="mt-1 text-yellow-300">✨</span>
                <span>{t}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
