import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Process from './components/Process';
import ValueProps from './components/ValueProps';
import Stats from './components/Stats';
import Industries from './components/Industries';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Team from './components/Team';

function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <Services />
        <Process />
        <ValueProps />
        <Stats />
        <Industries />
        <Testimonials />
        <Team />
        <CTA />
      </main>
      <footer className="border-t border-white/10 bg-black/60">
        <div className="mx-auto max-w-7xl px-6 py-10 flex items-center justify-between text-white/50">
          <span>© {new Date().getFullYear()} Limitless AI — Clarity Through AI</span>
          <div className="h-0.5 w-24 bg-gradient-to-r from-yellow-500 to-transparent" />
        </div>
      </footer>
    </div>
  );
}

export default App;
