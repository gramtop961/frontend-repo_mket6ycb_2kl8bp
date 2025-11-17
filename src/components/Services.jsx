import { motion } from 'framer-motion';
import { Bot, Workflow, Brain } from 'lucide-react';

const cards = [
  {
    title: 'AI Strategy & Consulting',
    icon: Brain,
    desc: 'Executive advisory, roadmaps, and AI governance that align to business outcomes.'
  },
  {
    title: 'Intelligent Automation',
    icon: Workflow,
    desc: 'Orchestrate agents, RPA, and LLMs to compress cycle times and unlock efficiency.'
  },
  {
    title: 'Custom AI Development',
    icon: Bot,
    desc: 'Bespoke models, fine-tuning, and integrations tailored to your data and stack.'
  },
];

export default function Services() {
  return (
    <section id="services" className="relative bg-[#0a0a0a] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-light text-white"
        >
          Services
        </motion.h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map(({ title, icon: Icon, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative rounded-xl border border-yellow-400/20 bg-white/5 p-6 backdrop-blur hover:border-yellow-400/40 transition"
            >
              <div className="absolute inset-0 rounded-xl shadow-[0_0_35px_rgba(255,215,0,0.12)] opacity-0 group-hover:opacity-100 transition" />
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg bg-gradient-to-br from-yellow-300/20 to-yellow-500/20 text-yellow-300">
                  <Icon size={22} />
                </div>
                <h3 className="text-lg text-white/90">{title}</h3>
              </div>
              <p className="mt-4 text-white/60">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
