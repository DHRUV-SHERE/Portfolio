import { useEffect, useRef } from 'react'
import { gsap } from '../lib/scroll'
import { Words, SectionLabel } from './ui'
import { stats } from '../data'
import portrait from '../assets/hero-profile.jpg'

export default function About() {
  const root = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // words light up as you scroll through the statement
      gsap.fromTo('.statement .w', { opacity: 0.14 }, {
        opacity: 1, stagger: 0.12, ease: 'none',
        scrollTrigger: { trigger: '.statement', start: 'top 78%', end: 'bottom 45%', scrub: true },
      })
      // portrait unmask + parallax
      gsap.fromTo('.portrait', { clipPath: 'inset(100% 0% 0% 0%)' }, {
        clipPath: 'inset(0% 0% 0% 0%)', duration: 1.5, ease: 'expo.out',
        scrollTrigger: { trigger: '.portrait', start: 'top 85%' },
      })
      gsap.fromTo('.portrait img', { yPercent: -12, scale: 1.25 }, {
        yPercent: 12, scale: 1.1, ease: 'none',
        scrollTrigger: { trigger: '.portrait', start: 'top bottom', end: 'bottom top', scrub: true },
      })
      // counters
      gsap.utils.toArray('.stat__n').forEach((el) => {
        const end = Number(el.dataset.v)
        const o = { v: 0 }
        gsap.to(o, {
          v: end, duration: 2, ease: 'power3.out',
          onUpdate: () => { el.textContent = Math.round(o.v) },
          scrollTrigger: { trigger: el, start: 'top 90%', once: true },
        })
      })
      gsap.from('.stat', {
        y: 50, opacity: 0, duration: 1, stagger: 0.12, ease: 'expo.out',
        scrollTrigger: { trigger: '.stats', start: 'top 85%' },
      })
    }, root)
    return () => ctx.revert()
  }, [])

  return (
    <section className="about section" ref={root} id="about">
      <SectionLabel index="01">About</SectionLabel>
      <div className="about__grid">
        <div className="about__text">
          <p className="statement">
            <Words>
              I'm a full-stack engineer who likes owning the whole lifecycle. From the first schema to the last Lighthouse score, I build products that stay fast, stay secure and stay up. Currently shipping production software at Lumos Logic, with real-time systems and AI in the mix.
            </Words>
          </p>
        </div>
        <figure className="portrait" data-cursor="Hi">
          <img src={portrait} alt="Portrait of Dhruv Shere" loading="lazy" />
          <figcaption className="mono">Dhruv Shere — Ahmedabad</figcaption>
        </figure>
      </div>

      <div className="stats">
        {stats.map((s) => (
          <div className="stat" key={s.label}>
            <div className="stat__num">
              <span className="stat__n" data-v={s.value}>0</span>
              <span className="stat__suf">{s.suffix}</span>
            </div>
            <p>{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
