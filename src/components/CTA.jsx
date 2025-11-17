import { useState } from 'react';

export default function CTA() {
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    // For now just simulate sending
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <section id="contact" className="bg-[#0a0a0a] py-24">
      <div className="mx-auto max-w-4xl px-6">
        <div className="rounded-2xl border border-yellow-400/20 bg-white/5 p-8 backdrop-blur">
          <h2 className="text-3xl md:text-4xl font-light text-white">Ready for Limitless Growth?</h2>
          <p className="mt-2 text-white/60">Tell us about your goals. We’ll show you the fastest path to value.</p>
          <form onSubmit={handleSubmit} className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="sm:col-span-1">
              <label className="text-sm text-white/70">Name</label>
              <input name="name" value={form.name} onChange={handleChange} required className="mt-2 w-full rounded-md bg-black/60 border border-white/15 px-3 py-2 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-yellow-300/40" placeholder="Your name" />
            </div>
            <div className="sm:col-span-1">
              <label className="text-sm text-white/70">Email</label>
              <input name="email" type="email" value={form.email} onChange={handleChange} required className="mt-2 w-full rounded-md bg-black/60 border border-white/15 px-3 py-2 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-yellow-300/40" placeholder="you@company.com" />
            </div>
            <div className="sm:col-span-1">
              <label className="text-sm text-white/70">Company</label>
              <input name="company" value={form.company} onChange={handleChange} className="mt-2 w-full rounded-md bg-black/60 border border-white/15 px-3 py-2 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-yellow-300/40" placeholder="Company name" />
            </div>
            <div className="sm:col-span-2">
              <label className="text-sm text-white/70">Message</label>
              <textarea name="message" value={form.message} onChange={handleChange} rows={4} className="mt-2 w-full rounded-md bg-black/60 border border-white/15 px-3 py-2 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-yellow-300/40" placeholder="Share your vision..." />
            </div>
            <div className="sm:col-span-2 flex items-center justify-between">
              <div className={`text-sm ${sent ? 'text-yellow-300' : 'text-white/60'}`}>{sent ? 'Message sent! We will reach out shortly.' : 'We respond within 1 business day.'}</div>
              <button type="submit" className="px-6 py-3 rounded-md bg-gradient-to-r from-yellow-300 to-yellow-500 text-black font-medium shadow-[0_0_30px_rgba(255,215,0,0.35)] hover:shadow-[0_0_45px_rgba(255,215,0,0.5)] transition-shadow">
                Unlock Your AI Potential
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
