import { useEffect, useRef, useState } from 'react'
import { gsap, scrollToTarget } from '../lib/scroll'
import { Magnetic, SectionLabel } from './ui'
import { profile } from '../data'

// Resend backend; VITE_API_URL points at the deployed API
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001'

function Field({ label, name, type = 'text', value, onChange, required, textarea }) {
  const Tag = textarea ? 'textarea' : 'input'
  return (
    <label className="field">
      <Tag name={name} type={textarea ? undefined : type} value={value} onChange={onChange} required={required} rows={textarea ? 4 : undefined} placeholder=" " />
      <span>{label}</span>
      <i />
    </label>
  )
}

export default function Contact() {
  const root = useRef(null)
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | sent | error
  const [time, setTime] = useState('')

  useEffect(() => {
    const f = () => setTime(new Date().toLocaleTimeString('en-GB', { timeZone: 'Asia/Kolkata', hour: '2-digit', minute: '2-digit' }))
    f()
    const id = setInterval(f, 30000)
    return () => clearInterval(id)
  }, [])

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.contact__title .ch', {
        yPercent: 115, duration: 1.3, stagger: 0.025, ease: 'expo.out',
        scrollTrigger: { trigger: '.contact__title', start: 'top 80%' },
      })
      gsap.from('.contact__col > *', {
        y: 40, opacity: 0, duration: 1, stagger: 0.1, ease: 'expo.out',
        scrollTrigger: { trigger: '.contact__cols', start: 'top 82%' },
      })
      // giant footer wordmark rises as the page ends
      gsap.fromTo('.foot__mark', { yPercent: 40 }, {
        yPercent: 0, ease: 'none',
        scrollTrigger: { trigger: '.foot', start: 'top bottom', end: 'bottom bottom', scrub: true },
      })
    }, root)
    return () => ctx.revert()
  }, [])

  const set = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  const submit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch(`${API_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error('bad status')
      setStatus('sent')
      setForm({ name: '', email: '', subject: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  const title = (t) => [...t].map((c, i) => <span className="chw" key={i}><span className="ch">{c === ' ' ? ' ' : c}</span></span>)

  return (
    <section className="contact section" ref={root} id="contact">
      <SectionLabel index="07">Contact</SectionLabel>
      <h2 className="contact__title" aria-label="Have an idea? Let's ship it.">
        <span className="contact__row">{title('Have an idea?')}</span>
        <span className="contact__row it">{title("Let's ship it.")}</span>
      </h2>

      <div className="contact__cols">
        <div className="contact__col">
          <p className="contact__lede">
            Open to full-time roles, interesting collaborations and the occasional hard problem. I usually reply within a day.
          </p>
          <ul className="contact__links">
            <li><span className="mono">Email</span><Magnetic as="a" href={`mailto:${profile.email}`}>{profile.email}</Magnetic></li>
            <li><span className="mono">Phone</span><a href={`tel:${profile.phone.replace(/\s/g, '')}`}>{profile.phone}</a></li>
            <li><span className="mono">LinkedIn</span><a href={profile.linkedin} target="_blank" rel="noreferrer">dhruv-shere ↗</a></li>
            <li><span className="mono">GitHub</span><a href={profile.github} target="_blank" rel="noreferrer">DHRUV-SHERE ↗</a></li>
          </ul>
        </div>

        <form className="contact__col form" onSubmit={submit}>
          <Field label="Your name" name="name" value={form.name} onChange={set} required />
          <Field label="Email address" name="email" type="email" value={form.email} onChange={set} required />
          <Field label="Subject" name="subject" value={form.subject} onChange={set} />
          <Field label="Tell me about it" name="message" value={form.message} onChange={set} required textarea />
          <div className="form__foot">
            <button className="btn btn--solid" type="submit" disabled={status === 'sending'} data-cursor="Send">
              {status === 'sending' ? 'Sending…' : 'Send message →'}
            </button>
            <p className={`form__status form__status--${status}`} role="status">
              {status === 'sent' && 'Thanks, your message is in my inbox.'}
              {status === 'error' && 'Something went wrong. Please email me directly.'}
            </p>
          </div>
        </form>
      </div>

      <footer className="foot">
        <div className="foot__bar">
          <span className="mono">© 2026 Dhruv Shere</span>
          <span className="mono"><span className="dot-live" /> {time} in Ahmedabad</span>
          <button className="mono foot__top" onClick={() => scrollToTarget('body')} data-cursor="Top">Back to top ↑</button>
        </div>
        <div className="foot__mark it" aria-hidden="true">Dhruv Shere</div>
      </footer>
    </section>
  )
}
