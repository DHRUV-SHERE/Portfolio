import { useCallback, useEffect, useState } from 'react'
import { initScroll, destroyScroll, ScrollTrigger } from './lib/scroll'
import Loader from './components/Loader'
import Cursor from './components/Cursor'
import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Work from './components/Work'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Personal from './components/Personal'
import Education from './components/Education'
import Contact from './components/Contact'

export default function App() {
  const [ready, setReady] = useState(false)
  const done = useCallback(() => setReady(true), [])

  useEffect(() => {
    window.history.scrollRestoration = 'manual'
    window.scrollTo(0, 0)
    initScroll()
    // Layout shifts once fonts/images settle, so recompute trigger positions
    const refresh = () => ScrollTrigger.refresh()
    document.fonts?.ready.then(refresh)
    window.addEventListener('load', refresh)
    return () => {
      window.removeEventListener('load', refresh)
      destroyScroll()
    }
  }, [])

  return (
    <>
      <Loader onDone={done} />
      <Cursor />
      <div className="grain" aria-hidden="true" />
      <Nav />
      <main>
        <Hero ready={ready} />
        <About />
        <Work />
        <Experience />
        <Skills />
        <Personal />
        <Education />
        <Contact />
      </main>
    </>
  )
}
