import { useState } from 'react';
import { profile, socials, contactForm } from '../data/portfolio.js';
import Section from './Section.jsx';
import Reveal from './Reveal.jsx';
import { ArrowUpRight, Mail, Pin, Send } from './Icons.jsx';

export default function Contact() {
  const empty = { name: '', email: '', subject: '', message: '', website: '' };
  const [form, setForm] = useState(empty);
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error
  const [error, setError] = useState('');
  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  // Opens the visitor's mail app with everything pre-filled (used when no endpoint is set)
  const openMail = () => {
    const subject = form.subject || `Hello from ${form.name}`;
    const body = `${form.message}\n\n— ${form.name} (${form.email})`;
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const submit = async (e) => {
    e.preventDefault();
    if (!contactForm.endpoint) return openMail();

    setStatus('sending');
    setError('');
    try {
      // text/plain keeps this a "simple" request, so the browser skips the CORS preflight Apps Script can't answer
      const res = await fetch(contactForm.endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify(form),
      });
      const result = await res.json();
      if (!result.ok) throw new Error(result.error);
      setStatus('sent');
      setForm(empty);
    } catch (err) {
      setStatus('error');
      setError(err.message && !err.message.includes('fetch') ? err.message : 'Could not send your message. Please try again or email me directly.');
    }
  };

  return (
    <Section id="contact" className="overflow-hidden">
      <div className="grid gap-10 md:grid-cols-[1fr_1.35fr]">
        <Reveal>
          <p className="eyebrow mb-2">Let's connect</p>
          <h2 className="text-2xl leading-snug font-bold">
            Have a role or project in mind?
            <br />
            Let's build something reliable together.
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-muted">{profile.availability}.</p>

          <ul className="mt-7 space-y-4 text-sm">
            <li>
              <a href={`mailto:${profile.email}`} className="group inline-flex items-center gap-3 text-ink hover:text-accent">
                <span className="icon-tile bg-white text-ink"><Mail /></span>
                {profile.email}
              </a>
            </li>
            <li className="inline-flex items-center gap-3 text-ink">
              <span className="icon-tile bg-white text-ink"><Pin /></span>
              {profile.location}
            </li>
          </ul>

          <ul className="mt-7 flex flex-wrap gap-2">
            {socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.url}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-1 rounded-full bg-white/70 px-3 py-1.5 text-xs font-medium text-body ring-1 ring-line transition hover:bg-ink hover:text-white"
                >
                  {s.label}
                  <ArrowUpRight width={12} height={12} />
                </a>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={120} className="relative">
          {/* decorative glass orb behind the form */}
          <div
            aria-hidden="true"
            className="absolute -right-24 -bottom-24 h-64 w-64 animate-float rounded-full opacity-90"
            style={{
              background:
                'radial-gradient(circle at 30% 28%, #fff, rgb(255 255 255 / 0) 40%), linear-gradient(150deg, #ddd6fe, #a5b4fc 60%, #c4b5fd)',
              boxShadow: 'inset 0 -20px 40px rgb(109 40 217 / 0.25)',
            }}
          />
          <form onSubmit={submit} className="card relative grid gap-3 p-4 sm:grid-cols-2 sm:p-5">
            <label className="sr-only" htmlFor="c-name">Your name</label>
            <input id="c-name" name="name" required value={form.name} onChange={update} placeholder="Your Name" className="field" autoComplete="name" />
            <label className="sr-only" htmlFor="c-email">Your email</label>
            <input id="c-email" name="email" type="email" required value={form.email} onChange={update} placeholder="Your Email" className="field" autoComplete="email" />
            <label className="sr-only" htmlFor="c-subject">Subject</label>
            <input id="c-subject" name="subject" value={form.subject} onChange={update} placeholder="Subject" className="field sm:col-span-2" />
            <label className="sr-only" htmlFor="c-message">Your message</label>
            <textarea id="c-message" name="message" required rows={5} value={form.message} onChange={update} placeholder="Your Message" className="field resize-y sm:col-span-2" />
            {/* Honeypot for spam bots — hidden from people and screen readers */}
            <input
              name="website"
              value={form.website}
              onChange={update}
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              className="absolute -left-[9999px] h-0 w-0 opacity-0"
            />
            <button
              type="submit"
              disabled={status === 'sending'}
              className="btn-dark justify-center whitespace-nowrap disabled:cursor-wait disabled:opacity-70 sm:w-2/3"
            >
              {status === 'sending' ? 'Sending…' : 'Send Message'} <Send />
            </button>
            <p role="status" aria-live="polite" className="self-center text-sm sm:col-span-2">
              {status === 'sent' && <span className="text-emerald-600">✓ Thanks! Your message has been sent.</span>}
              {status === 'error' && <span className="text-rose-600">{error}</span>}
            </p>
          </form>
        </Reveal>
      </div>
    </Section>
  );
}
