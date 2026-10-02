import { useRef, useEffect } from 'react'
import { gsap } from '../lib/scroll'

/** Splits text into masked characters (class .ch inside .chw) for reveal animations. */
export function Chars({ text, className = '' }) {
  return (
    <span className={`chars ${className}`} aria-label={text}>
      {[...text].map((c, i) => (
        <span className="chw" key={i} aria-hidden="true">
          <span className="ch">{c === ' ' ? ' ' : c}</span>
        </span>
      ))}
    </span>
  )
}

/** Splits text into words (class .w) for scroll-scrubbed reveals. */
export function Words({ children, className = '' }) {
  const parts = String(children).split(' ')
  return (
    <>
      {parts.map((w, i) => (
        <span className={`w ${className}`} key={i}>
          {w}
          {i < parts.length - 1 ? ' ' : ''}
        </span>
      ))}
    </>
  )
}

/** Wraps a child and pulls it toward the pointer. */
export function Magnetic({ children, strength = 0.35, as: Tag = 'span', className = '', ...rest }) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el || window.matchMedia('(hover: none)').matches) return
    const xTo = gsap.quickTo(el, 'x', { duration: 0.6, ease: 'elastic.out(1, 0.4)' })
    const yTo = gsap.quickTo(el, 'y', { duration: 0.6, ease: 'elastic.out(1, 0.4)' })
    const move = (e) => {
      const r = el.getBoundingClientRect()
      xTo((e.clientX - (r.left + r.width / 2)) * strength)
      yTo((e.clientY - (r.top + r.height / 2)) * strength)
    }
    const leave = () => { xTo(0); yTo(0) }
    el.addEventListener('mousemove', move)
    el.addEventListener('mouseleave', leave)
    return () => {
      el.removeEventListener('mousemove', move)
      el.removeEventListener('mouseleave', leave)
    }
  }, [strength])
  return (
    <Tag ref={ref} className={`magnetic ${className}`} {...rest}>
      {children}
    </Tag>
  )
}

export function SectionLabel({ index, children }) {
  return (
    <div className="label" data-reveal>
      <span className="label__idx">{index}</span>
      <span className="label__line" />
      <span>{children}</span>
    </div>
  )
}
