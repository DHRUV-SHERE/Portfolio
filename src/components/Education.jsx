import { useEffect, useRef } from 'react'
import { gsap } from '../lib/scroll'
import { SectionLabel } from './ui'
import { education, highlights } from '../data'

export default function Education() {
  const root = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.edu__card', {
        y: 60, rotate: (i) => (i ? 2 : -2), opacity: 0, duration: 1.2, stagger: 0.15, ease: 'expo.out',
        scrollTrigger: { trigger: '.edu__cards', start: 'top 82%' },
      })
      gsap.from('.hl', {
        y: 40, opacity: 0, duration: 1, stagger: 0.1, ease: 'expo.out',
        scrollTrigger: { trigger: '.hls', start: 'top 85%' },
      })
    }, root)
    return () => ctx.revert()
  }, [])

  return (
    <section className="edu section" ref={root} id="education">
      <SectionLabel index="06">Foundations</SectionLabel>
      <div className="edu__cards">
        {education.map((e) => (
          <article className="edu__card" key={e.school}>
            <span className="mono">{e.years}</span>
            <h3>{e.degree}</h3>
            <p>{e.school}</p>
            <div className="edu__score"><b>{e.score}</b><span className="mono">{e.of}</span></div>
          </article>
        ))}
      </div>
      <div className="hls">
        {highlights.map((h) => (
          <div className="hl" key={h.big}>
            <b className="it">{h.big}</b>
            <p>{h.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
