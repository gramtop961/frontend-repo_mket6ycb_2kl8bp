import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen bg-[#0a0a0a] overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/Geb1kGWmIba9zPiH/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/30 to-black/80 pointer-events-none" />

      {/* Floating gold particles */}
      <div aria-hidden className="pointer-events-none">
        {[...Array(40)].map((_, i) => (
          <span
            key={i}
            className="absolute w-[2px] h-[2px] rounded-full bg-yellow-300/90 shadow-[0_0_12px_rgba(255,215,0,0.9)]"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `floatUp ${6 + Math.random() * 8}s linear infinite`,
              opacity: 0.7 + Math.random() * 0.3,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 flex min-h-screen items-center">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-yellow-400/30 bg-white/5 px-4 py-2 backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-yellow-300 shadow-[0_0_14px_rgba(255,215,0,0.9)]" />
              <span className="text-xs tracking-widest text-yellow-200/90">CLARITY THROUGH AI</span>
            </div>
            <h1 className="mt-6 text-5xl sm:text-6xl md:text-7xl font-light leading-tight text-white">
              Limitless AI
            </h1>
            <p className="mt-6 max-w-2xl text-white/70 text-lg">
              A premium AI consultancy delivering strategy, automation, and custom AI systems that compound value.
            </p>
            <div className="mt-8 flex items-center gap-4">
              <a href="#contact" className="px-6 py-3 rounded-md bg-gradient-to-r from-yellow-300 to-yellow-500 text-black font-medium shadow-[0_0_30px_rgba(255,215,0,0.35)] hover:shadow-[0_0_45px_rgba(255,215,0,0.5)] transition-shadow">Unlock Your AI Potential</a>
              <a href="#services" className="px-6 py-3 rounded-md border border-white/15 text-white/80 hover:text-white hover:border-white/30">Explore Services</a>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @keyframes floatUp {
          0% { transform: translateY(0); opacity: 0; }
          10% { opacity: 1; }
          100% { transform: translateY(-120vh); opacity: 0; }
        }
      `}</style>
    </section>
  );
}
