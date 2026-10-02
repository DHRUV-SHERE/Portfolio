import { lazy, Suspense, useEffect, useRef } from 'react'
import { gsap, ScrollTrigger } from '../lib/scroll'
const ShaderBG = lazy(() => import('./ShaderBG'))
import { Chars, Magnetic } from './ui'

const roles = ['Full-Stack Engineer', 'Real-time Systems', 'Cloud & Performance', 'AI Integrations']

export default function Hero({ ready }) {
  const root = useRef(null)
  const played = useRef(false)

  // Scroll parallax: title drifts and fades while the hero leaves
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to('.hero__title', {
        yPercent: -18, scale: 0.94, opacity: 0.2, ease: 'none',
        scrollTrigger: { trigger: root.current, start: 'top top', end: 'bottom top', scrub: true },
      })
      gsap.to('.sticker', {
        yPercent: (i) => -40 - i * 25, ease: 'none',
        scrollTrigger: { trigger: root.current, start: 'top top', end: 'bottom top', scrub: true },
      })
      // role ticker
      const items = gsap.utils.toArray('.hero__role-item')
      gsap.set(items, { yPercent: 110 })
      const tl = gsap.timeline({ repeat: -1 })
      items.forEach((it) => {
        tl.fromTo(it, { yPercent: 110 }, { yPercent: 0, duration: 0.7, ease: 'expo.out' })
          .to(it, { yPercent: -110, duration: 0.6, ease: 'expo.in' }, '+=1.6')
      })
    }, root)
    return () => ctx.revert()
  }, [])

  // Intro, runs once when the loader finishes
  useEffect(() => {
    if (!ready || played.current) return
    played.current = true
    const ctx = gsap.context(() => {
      gsap.set('.hero [data-in]', { autoAlpha: 0, y: 24 })
      gsap.timeline({ defaults: { ease: 'expo.out' } })
        .to('.hero__title .ch', { yPercent: 0, duration: 1.4, stagger: 0.04 })
        .to('.hero [data-in]', { autoAlpha: 1, y: 0, duration: 1, stagger: 0.1 }, '-=0.9')
        .to('.sticker', { scale: 1, duration: 1.1, stagger: 0.12, ease: 'elastic.out(1, 0.55)' }, '-=0.8')
        .from('.hero__line', { scaleX: 0, transformOrigin: 'left', duration: 1.4 }, '-=1.2')
    }, root)
    return () => ctx.revert()
  }, [ready])

  // Pre-ready state so nothing flashes behind the loader
  useEffect(() => {
    gsap.set(root.current.querySelectorAll('[data-in]'), { autoAlpha: 0 })
    gsap.set(root.current.querySelectorAll('.ch'), { yPercent: 115 })
    gsap.set(root.current.querySelectorAll('.sticker'), { scale: 0 })
  }, [])

  // Drop-in tilt on stickers following the cursor
  useEffect(() => {
    if (window.matchMedia('(hover: none)').matches) return
    const move = (e) => {
      const nx = e.clientX / window.innerWidth - 0.5
      const ny = e.clientY / window.innerHeight - 0.5
      gsap.to('.sticker__inner', { x: nx * 30, y: ny * 24, rotate: nx * 6, duration: 1.2, ease: 'power3.out', stagger: 0.04, overwrite: 'auto' })
    }
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [])

  useEffect(() => { ScrollTrigger.refresh() }, [ready])

  return (
    <section className="hero" ref={root} id="top">
      <Suspense fallback={<div className="shader shader--fallback" />}><ShaderBG /></Suspense>
      <div className="hero__inner">
        <div className="hero__meta" data-in>
          <span className="pill"><span className="dot-live" /> Full-time at Lumos Logic</span>
          <span className="mono">Software Engineer — Ahmedabad, IN</span>
        </div>

        <h1 className="hero__title" aria-label="Dhruv Shere">
          <span className="hero__row"><Chars text="Dhruv" /></span>
          <span className="hero__row hero__row--it"><Chars text="Shere" /></span>
        </h1>

        <div className="sticker sticker--a"><div className="sticker__inner">Ships to prod ✦</div></div>
        <div className="sticker sticker--b"><div className="sticker__inner">99%+ uptime</div></div>
        <div className="sticker sticker--c"><div className="sticker__inner">Socket.io ⚡</div></div>

        <div className="hero__line" />

        <div className="hero__foot">
          <p className="hero__lede" data-in>
            I build the parts of the internet people rely on: fast interfaces, resilient APIs and the cloud that carries them.
          </p>
          <div className="hero__role" data-in aria-hidden="true">
            <span className="mono">Currently into</span>
            <div className="hero__role-mask">
              {roles.map((r) => <span className="hero__role-item" key={r}>{r}</span>)}
            </div>
          </div>
          <Magnetic as="a" className="scroll-cue" href="#work" data-in data-cursor="Scroll">
            <span>Scroll</span><i />
          </Magnetic>
        </div>
      </div>
    </section>
  )
}
