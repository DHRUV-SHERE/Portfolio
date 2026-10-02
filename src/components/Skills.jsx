import { useEffect, useRef } from 'react'
import { gsap } from '../lib/scroll'
import { SectionLabel } from './ui'
import { skillLogos, skillGroups } from '../data'

function Row({ items, dir }) {
  const list = [...items, ...items]
  return (
    <div className={`marquee marquee--${dir}`}>
      <div className="marquee__track">
        {list.map(([name, file], i) => (
          <span className="chip" key={`${name}-${i}`}>
            <img src={`/skills/${file}.webp`} alt="" loading="lazy" width="28" height="28" />
            {name}
          </span>
        ))}
      </div>
    </div>
  )
}

export default function Skills() {
  const root = useRef(null)
  const half = Math.ceil(skillLogos.length / 2)

  useEffect(() => {
    let tick
    const ctx = gsap.context(() => {
      // Marquees: scroll velocity speeds them up, scrolling up reverses them.
      const tweens = gsap.utils.toArray('.marquee').map((m, i) => {
        const track = m.querySelector('.marquee__track')
        const reverse = i % 2 === 1
        gsap.set(track, { xPercent: reverse ? -50 : 0 })
        return gsap.to(track, { xPercent: reverse ? 0 : -50, ease: 'none', duration: 38, repeat: -1 })
      })
      let last = window.scrollY
      let target = 1
      tick = () => {
        const y = window.scrollY
        const v = y - last
        last = y
        target = gsap.utils.clamp(-6, 6, 1 + Math.abs(v) * 0.35) * (v < 0 ? -1 : 1) || 1
        tweens.forEach((t) => {
          const cur = t.timeScale()
          t.timeScale(cur + (target - cur) * 0.08)
        })
        target = 1
      }
      gsap.ticker.add(tick)

      gsap.from('.sgroup', {
        y: 50, opacity: 0, duration: 1, stagger: 0.1, ease: 'expo.out',
        scrollTrigger: { trigger: '.sgroups', start: 'top 85%' },
      })
      gsap.from('.sgroup li', {
        x: -16, opacity: 0, duration: 0.7, stagger: 0.025, ease: 'power3.out',
        scrollTrigger: { trigger: '.sgroups', start: 'top 80%' },
      })
    }, root)
    return () => { gsap.ticker.remove(tick); ctx.revert() }
  }, [])

  return (
    <section className="skills section" ref={root} id="stack">
      <SectionLabel index="04">Toolbox</SectionLabel>
      <h2 className="h2">The stack I <span className="it">reach for.</span></h2>

      <div className="marquees" aria-hidden="false">
        <Row items={skillLogos.slice(0, half)} dir="l" />
        <Row items={skillLogos.slice(half)} dir="r" />
      </div>

      <div className="sgroups">
        {skillGroups.map((g) => (
          <div className="sgroup" key={g.title}>
            <h3 className="mono">{g.title}</h3>
            <ul>{g.items.map((it) => <li key={it}>{it}</li>)}</ul>
          </div>
        ))}
      </div>
    </section>
  )
}
