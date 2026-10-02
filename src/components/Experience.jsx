import { useEffect, useRef } from 'react'
import { gsap } from '../lib/scroll'
import { SectionLabel } from './ui'
import { experience } from '../data'

export default function Experience() {
  const root = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // spine line draws as you scroll through the list
      gsap.fromTo('.xp__spine i', { scaleY: 0 }, {
        scaleY: 1, ease: 'none', transformOrigin: 'top',
        scrollTrigger: { trigger: '.xp__list', start: 'top 70%', end: 'bottom 70%', scrub: true },
      })
      gsap.utils.toArray('.xp__item').forEach((item) => {
        const tl = gsap.timeline({ scrollTrigger: { trigger: item, start: 'top 75%' }, defaults: { ease: 'expo.out' } })
        tl.from(item.querySelector('.xp__node'), { scale: 0, duration: 0.8, ease: 'elastic.out(1,0.5)' })
          .from(item.querySelectorAll('.xp__head > *'), { y: 40, opacity: 0, duration: 1, stagger: 0.08 }, '-=0.5')
          .from(item.querySelectorAll('.xp__points li'), { x: 30, opacity: 0, duration: 0.9, stagger: 0.09 }, '-=0.7')
      })
    }, root)
    return () => ctx.revert()
  }, [])

  return (
    <section className="xp section" ref={root} id="experience">
      <SectionLabel index="03">Experience</SectionLabel>
      <h2 className="h2 xp__title">From intern to <span className="it">engineer</span> in six months.</h2>

      <div className="xp__list">
        <div className="xp__spine"><i /></div>
        {experience.map((e) => (
          <article className={`xp__item ${e.current ? 'is-current' : ''}`} key={e.period}>
            <span className="xp__node" />
            <div className="xp__head">
              <span className="mono xp__period">{e.period}</span>
              <h3>{e.title}</h3>
              <p className="xp__co">
                {e.company} · {e.place}
                <em className={e.current ? 'badge badge--live' : 'badge'}>{e.type}</em>
              </p>
            </div>
            <ul className="xp__points">
              {e.points.map((p) => <li key={p}>{p}</li>)}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}
