import { motion } from 'framer-motion';

const team = [
  { name: 'Ava Sterling', role: 'Founder & Principal Architect', img: '', bio: 'Enterprise AI leader with 12+ years across finance and healthcare.' },
  { name: 'Noah Reeves', role: 'Head of Automation', img: '', bio: 'Designs high-ROI automations and agentic systems for scale.' },
];

export default function Team() {
  return (
    <section id="team" className="bg-[#0a0a0a] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-3xl md:text-4xl font-light text-white">Team</h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {team.map((m, i) => (
            <motion.div
              key={m.name}
              initial={{ opacity: 0, y: 16, rotateX: -8 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative rounded-xl border border-yellow-400/25 bg-white/5 p-6 backdrop-blur [transform-style:preserve-3d] will-change-transform"
            >
              <div className="absolute inset-0 rounded-xl shadow-[0_0_40px_rgba(255,215,0,0.16)] opacity-0 group-hover:opacity-100 transition" />
              <div className="flex items-center gap-4">
                <div className="h-14 w-14 rounded-lg bg-gradient-to-br from-yellow-300/20 to-yellow-500/20 ring-1 ring-yellow-400/30" />
                <div>
                  <div className="text-white/90">{m.name}</div>
                  <div className="text-sm text-yellow-300/90">{m.role}</div>
                </div>
              </div>
              <p className="mt-4 text-white/60">{m.bio}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
