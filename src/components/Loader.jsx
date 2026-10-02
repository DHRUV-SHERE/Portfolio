import { useEffect, useRef } from 'react'
import { gsap } from '../lib/scroll'

export default function Loader({ onDone }) {
  const root = useRef(null)
  const num = useRef(null)
  const bar = useRef(null)

  useEffect(() => {
    document.documentElement.classList.add('is-loading')
    const counter = { v: 0 }
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          document.documentElement.classList.remove('is-loading')
          onDone?.()
        },
      })
      tl.from('.loader__word span', { yPercent: 110, duration: 1, ease: 'expo.out', stagger: 0.08 })
        .to(counter, {
          v: 100,
          duration: 1.6,
          ease: 'power2.inOut',
          onUpdate: () => {
            if (num.current) num.current.textContent = String(Math.round(counter.v)).padStart(3, '0')
            if (bar.current) bar.current.style.transform = `scaleX(${counter.v / 100})`
          },
        }, 0.2)
        .to('.loader__word span', { yPercent: -110, duration: 0.6, ease: 'expo.in', stagger: 0.04 }, '+=0.15')
        .to('.loader__meta', { opacity: 0, duration: 0.3 }, '<')
        .to('.loader__panel', { yPercent: -100, duration: 1, ease: 'expo.inOut', stagger: 0.08 }, '-=0.15')
        .set(root.current, { display: 'none' })
    }, root)
    return () => ctx.revert()
  }, [onDone])

  return (
    <div className="loader" ref={root} aria-hidden="true">
      <div className="loader__panel" />
      <div className="loader__panel loader__panel--2" />
      <div className="loader__center">
        <div className="loader__word">
          <span>Dhruv</span> <span className="it">Shere</span>
        </div>
      </div>
      <div className="loader__meta">
        <span>Engineering notebook / 2026</span>
        <span ref={num}>000</span>
      </div>
      <div className="loader__bar"><i ref={bar} /></div>
    </div>
  )
}
