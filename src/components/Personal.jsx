import { useEffect, useRef } from 'react'
import { gsap } from '../lib/scroll'
import { SectionLabel } from './ui'
import { clientSites, bigBuilds, smallBuilds } from '../data'

function List({ title, note, items }) {
  return (
    <div className="pgroup">
      <div className="pgroup__head">
        <h3 className="mono">{title}</h3>
        <span className="mono">{note}</span>
      </div>
      <div className="plist">
        {items.map((p) => (
          <div className="prow" key={p.id}>
            <div className="prow__main">
              <span className="mono prow__year">{p.year}</span>
              <h3 className="prow__title">{p.title}</h3>
              <span className="prow__kind">{p.kind}</span>
              <span className="prow__arrow">↗</span>
            </div>
            <div className="prow__body">
              <div className="prow__content">
                <p>{p.blurb}</p>
                <ul className="tags">{p.stack.map((s) => <li key={s}>{s}</li>)}</ul>
                <div className="prow__links">
                  {p.links.map((l) => (
                    <a key={l.url} className="btn btn--ghost" href={l.url} target="_blank" rel="noreferrer">{l.label} ↗</a>
                  ))}
                </div>
              </div>
              {p.image && <img className="prow__img" src={p.image} alt={`${p.title} screenshot`} loading="lazy" />}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Personal() {
  const root = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray('.pgroup').forEach((g) => {
        gsap.from(g.querySelectorAll('.prow'), {
          y: 40, opacity: 0, duration: 1, stagger: 0.07, ease: 'expo.out',
          scrollTrigger: { trigger: g, start: 'top 82%' },
        })
      })
      const canHover = window.matchMedia('(hover: hover)').matches
      gsap.utils.toArray('.prow').forEach((row) => {
        const body = row.querySelector('.prow__body')
        if (!canHover) { gsap.set(body, { height: 'auto' }); return }
        const tl = gsap.timeline({ paused: true, defaults: { ease: 'expo.out', duration: 0.8 } })
        tl.to(body, { height: 'auto' })
          .to(row.querySelector('.prow__title'), { x: 24 }, 0)
          .to(row.querySelector('.prow__arrow'), { rotate: 45, scale: 1.2 }, 0)
        row.addEventListener('mouseenter', () => tl.play())
        row.addEventListener('mouseleave', () => tl.reverse())
        // keyboard / touch-ish fallback: focus inside keeps the row open
        row.addEventListener('focusin', () => tl.play())
        row.addEventListener('focusout', () => tl.reverse())
      })
    }, root)
    return () => ctx.revert()
  }, [])

  return (
    <section className="personal section" ref={root} id="personal">
      <SectionLabel index="05">Sites & builds</SectionLabel>
      <h2 className="h2">Everything <span className="it">else I've shipped.</span></h2>
      <List title="Sites at Lumos Logic" note={`${clientSites.length} live`} items={clientSites} />
      <List title="Big builds" note={`${bigBuilds.length} full-stack`} items={bigBuilds} />
      <List title="Smaller builds & experiments" note={`${smallBuilds.length} projects`} items={smallBuilds} />
    </section>
  )
}
