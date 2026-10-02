import { useEffect, useRef } from 'react'
import { gsap, ScrollTrigger } from '../lib/scroll'
import ArchDiagram from './ArchDiagram'
import { companyWork } from '../data'

export default function Work() {
  const root = useRef(null)
  const track = useRef(null)
  const bar = useRef(null)
  const count = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia()

      mm.add('(min-width: 900px)', () => {
        const cards = gsap.utils.toArray('.wcard')
        const dist = () => track.current.scrollWidth - window.innerWidth + 80
        const skew = gsap.quickTo(cards, 'skewX', { duration: 0.5, ease: 'power3' })

        gsap.to(track.current, {
          x: () => -dist(),
          ease: 'none',
          scrollTrigger: {
            trigger: '.work__pin',
            pin: true,
            scrub: 0.8,
            start: 'top top',
            end: () => `+=${dist()}`,
            invalidateOnRefresh: true,
            onUpdate: (self) => {
              bar.current.style.transform = `scaleX(${self.progress})`
              const n = Math.min(cards.length, Math.floor(self.progress * cards.length) + 1)
              count.current.textContent = String(n).padStart(2, '0')
              skew(gsap.utils.clamp(-6, 6, self.getVelocity() / -400))
            },
            onLeave: () => skew(0),
          },
        })
      })

      mm.add('(max-width: 899px)', () => {
        gsap.utils.toArray('.wcard').forEach((c) =>
          gsap.from(c, {
            y: 60, opacity: 0, duration: 1, ease: 'expo.out',
            scrollTrigger: { trigger: c, start: 'top 88%' },
          }))
      })

      gsap.from('.work__head .chw .ch', {
        yPercent: 110, duration: 1.2, stagger: 0.03, ease: 'expo.out',
        scrollTrigger: { trigger: '.work__head', start: 'top 80%' },
      })
    }, root)
    return () => ctx.revert()
  }, [])

  return (
    <section className="work" ref={root} id="work">
      <div className="work__pin">
        <header className="work__head">
          <div className="label"><span className="label__idx">02</span><span className="label__line" /><span>Selected work · Lumos Logic</span></div>
          <h2 className="h2" aria-label="Systems in production">
            {['Systems', 'in'].map((w) => (
              <span key={w} className="h2__w">
                {[...w].map((c, i) => <span className="chw" key={i}><span className="ch">{c}</span></span>)}
              </span>
            ))}
            <span className="h2__w it">
              {[...'production'].map((c, i) => <span className="chw" key={i}><span className="ch">{c}</span></span>)}
            </span>
          </h2>
          <div className="work__progress">
            <span className="mono"><b ref={count}>01</b> / {String(companyWork.length).padStart(2, '0')}</span>
            <div className="work__bar"><i ref={bar} /></div>
          </div>
        </header>

        <div className="work__track" ref={track}>
          {companyWork.map((p, i) => (
            <article className={`wcard hue-${p.hue}`} key={p.id} data-cursor="Drag ⟷">
              <div className="wcard__top">
                <span className="wcard__idx">{String(i + 1).padStart(2, '0')}</span>
                <span className="mono wcard__kind">{p.kind}</span>
              </div>
              <h3 className="wcard__title">{p.title}</h3>
              <p className="wcard__blurb">{p.blurb}</p>
              <ArchDiagram flow={p.flow} />
              <ul className="tags">
                {p.stack.map((s) => <li key={s}>{s}</li>)}
              </ul>
              {p.links ? (
                <div className="wcard__links">
                  {p.links.map((l) => <a className="wcard__link" key={l.url} href={l.url} target="_blank" rel="noreferrer">{l.label} ↗</a>)}
                </div>
              ) : (
                <span className="wcard__link wcard__link--private">Internal · built at Lumos Logic</span>
              )}
            </article>
          ))}
          <div className="wcard wcard--end">
            <p className="it">More on GitHub</p>
            <a className="btn" href="https://github.com/DHRUV-SHERE" target="_blank" rel="noreferrer">Open profile ↗</a>
          </div>
        </div>
      </div>
    </section>
  )
}
