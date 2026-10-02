import { useEffect, useRef, useState } from 'react'
import { gsap, getLenis, scrollToTarget } from '../lib/scroll'
import { Magnetic } from './ui'
import resume from '../assets/Dhruv_Shere_Software_Engineer_Resume_2026.pdf'

const links = [
  ['Work', '#work'],
  ['Experience', '#experience'],
  ['Stack', '#stack'],
  ['Sites & Builds', '#personal'],
  ['Contact', '#contact'],
]

function useClock() {
  const [t, setT] = useState('')
  useEffect(() => {
    const f = () =>
      setT(new Date().toLocaleTimeString('en-GB', { timeZone: 'Asia/Kolkata', hour: '2-digit', minute: '2-digit', second: '2-digit' }))
    f()
    const id = setInterval(f, 1000)
    return () => clearInterval(id)
  }, [])
  return t
}

export default function Nav() {
  const [open, setOpen] = useState(false)
  const clock = useClock()
  const menu = useRef(null)
  const bar = useRef(null)
  const tl = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      tl.current = gsap
        .timeline({ paused: true })
        .to(menu.current, { clipPath: 'inset(0% 0% 0% 0%)', duration: 0.9, ease: 'expo.inOut' })
        .from('.menu__link span', { yPercent: 110, duration: 0.8, ease: 'expo.out', stagger: 0.06 }, '-=0.35')
        .from('.menu__foot', { opacity: 0, y: 20, duration: 0.6 }, '-=0.5')
    }, menu)
    return () => ctx.revert()
  }, [])

  useEffect(() => {
    if (!tl.current) return
    const lenis = getLenis()
    if (open) { lenis?.stop(); tl.current.timeScale(1).play() }
    else { lenis?.start(); tl.current.timeScale(1.6).reverse() }
  }, [open])

  useEffect(() => {
    // Scroll progress bar
    const onScroll = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight
      if (bar.current) bar.current.style.transform = `scaleX(${h > 0 ? window.scrollY / h : 0})`
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const go = (e, href) => {
    e.preventDefault()
    setOpen(false)
    setTimeout(() => scrollToTarget(href, { offset: href === '#work' ? 0 : 0 }), open ? 700 : 0)
  }

  return (
    <>
      <div className="progress"><i ref={bar} /></div>
      <header className="nav">
        <a href="#top" className="nav__logo" onClick={(e) => go(e, 'body')} data-cursor="Top">
          DS<sup>®</sup>
        </a>
        <div className="nav__clock" aria-hidden="true">
          <span className="dot-live" /> Ahmedabad {clock} IST
        </div>
        <div className="nav__right">
          <Magnetic as="a" className="btn btn--ghost nav__cv" href={resume} download>
            Résumé ↓
          </Magnetic>
          <button className={`burger ${open ? 'is-open' : ''}`} onClick={() => setOpen((o) => !o)} aria-label="Toggle menu" aria-expanded={open}>
            <span /><span />
          </button>
        </div>
      </header>

      <nav className="menu" ref={menu} aria-hidden={!open}>
        <ul>
          {links.map(([name, href], i) => (
            <li key={href}>
              <a className="menu__link" href={href} onClick={(e) => go(e, href)} tabIndex={open ? 0 : -1}>
                <small>0{i + 1}</small>
                <span>{name}</span>
              </a>
            </li>
          ))}
        </ul>
        <div className="menu__foot">
          <a href="https://github.com/DHRUV-SHERE" target="_blank" rel="noreferrer">GitHub ↗</a>
          <a href="https://www.linkedin.com/in/dhruv-shere/" target="_blank" rel="noreferrer">LinkedIn ↗</a>
          <a href="mailto:sheredhruv@gmail.com">sheredhruv@gmail.com</a>
        </div>
      </nav>
    </>
  )
}
