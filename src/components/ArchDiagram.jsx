import { useId } from 'react'

/**
 * Tiny animated architecture diagram: nodes joined by a line with a packet travelling along it.
 * Pure SVG + SMIL, so it costs nothing in JS.
 */
export default function ArchDiagram({ flow }) {
  const uid = useId().replace(/:/g, '')
  const W = 400, H = 120, pad = 36
  const step = (W - pad * 2) / (flow.length - 1)
  const ys = flow.map((_, i) => (i % 2 === 0 ? 42 : 78))
  const xs = flow.map((_, i) => pad + step * i)
  const d = xs.map((x, i) => `${i === 0 ? 'M' : 'L'}${x},${ys[i]}`).join(' ')

  return (
    <svg className="arch" viewBox={`0 0 ${W} ${H}`} role="img" aria-label={`Flow: ${flow.join(' to ')}`}>
      <path id={`p${uid}`} d={d} className="arch__path" />
      <path d={d} className="arch__dash" />
      <circle r="4.5" className="arch__packet">
        <animateMotion dur="3.2s" repeatCount="indefinite" rotate="auto">
          <mpath href={`#p${uid}`} />
        </animateMotion>
      </circle>
      {flow.map((label, i) => (
        <g key={label} transform={`translate(${xs[i]} ${ys[i]})`}>
          <circle r="5.5" className="arch__node" />
          <text y={i % 2 === 0 ? -14 : 22} textAnchor="middle" className="arch__label">{label}</text>
        </g>
      ))}
    </svg>
  )
}
