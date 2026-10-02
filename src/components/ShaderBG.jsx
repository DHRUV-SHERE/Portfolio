import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { reduceMotion } from '../lib/scroll'

const vert = /* glsl */ `
  varying vec2 vUv;
  void main() { vUv = uv; gl_Position = vec4(position, 1.0); }
`

/* Soft pastel domain-warped noise with topographic contour lines.
   The pointer pushes a ripple through the field. */
const frag = /* glsl */ `
  precision highp float;
  uniform vec2 uRes;
  uniform float uTime;
  uniform vec2 uMouse;
  uniform float uForce;

  vec3 permute(vec3 x){ return mod(((x*34.0)+1.0)*x, 289.0); }
  float snoise(vec2 v){
    const vec4 C = vec4(0.211324865405187, 0.366025403784439, -0.577350269189626, 0.024390243902439);
    vec2 i = floor(v + dot(v, C.yy));
    vec2 x0 = v - i + dot(i, C.xx);
    vec2 i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
    vec4 x12 = x0.xyxy + C.xxzz; x12.xy -= i1;
    i = mod(i, 289.0);
    vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0)) + i.x + vec3(0.0, i1.x, 1.0));
    vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
    m = m*m; m = m*m;
    vec3 x = 2.0 * fract(p * C.www) - 1.0;
    vec3 h = abs(x) - 0.5;
    vec3 ox = floor(x + 0.5);
    vec3 a0 = x - ox;
    m *= 1.79284291400159 - 0.85373472095314 * (a0*a0 + h*h);
    vec3 g;
    g.x = a0.x * x0.x + h.x * x0.y;
    g.yz = a0.yz * x12.xz + h.yz * x12.yw;
    return 130.0 * dot(m, g);
  }
  float hash(vec2 p){ return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }

  void main(){
    vec2 uv = gl_FragCoord.xy / uRes;
    float asp = uRes.x / uRes.y;
    vec2 p = vec2(uv.x * asp, uv.y);
    vec2 m = vec2(uMouse.x * asp, uMouse.y);

    float d = distance(p, m);
    float ripple = exp(-d * 3.2) * uForce;

    vec2 q = p * 1.35 + vec2(uTime * 0.025, -uTime * 0.018);
    float n1 = snoise(q + snoise(q * 1.25 + uTime * 0.04) * 0.95 + ripple * 0.7);
    float n2 = snoise(q * 1.9 - uTime * 0.03 + ripple * 1.4);

    vec3 cream = vec3(0.953, 0.937, 0.906);
    vec3 peach = vec3(1.000, 0.790, 0.680);
    vec3 sky   = vec3(0.760, 0.820, 1.000);
    vec3 lime  = vec3(0.860, 0.950, 0.680);

    vec3 col = cream;
    col = mix(col, peach, smoothstep(-0.25, 0.9, n1) * 0.55);
    col = mix(col, sky,   smoothstep(0.05, 1.0, n2) * 0.50);
    col = mix(col, lime,  smoothstep(0.45, 1.0, n1 * n2 + ripple * 0.8) * 0.45);

    // topographic contour lines
    float f = (n1 * 0.5 + 0.5) * 11.0;
    float w = fwidth(f);
    float line = 1.0 - smoothstep(0.0, w * 1.4, abs(fract(f) - 0.5) - 0.5 + w * 1.4);
    col = mix(col, vec3(0.08, 0.075, 0.06), line * 0.10);

    // paper grain
    col += (hash(gl_FragCoord.xy + uTime) - 0.5) * 0.035;
    // gentle fade to page background at the bottom edge
    col = mix(col, cream, smoothstep(0.18, 0.0, uv.y) * 0.9);

    gl_FragColor = vec4(col, 1.0);
  }
`

export default function ShaderBG() {
  const mount = useRef(null)

  useEffect(() => {
    const el = mount.current
    let renderer
    try {
      renderer = new THREE.WebGLRenderer({ antialias: false, alpha: false, powerPreference: 'low-power' })
    } catch {
      el.classList.add('shader--fallback')
      return
    }
    const dpr = Math.min(window.devicePixelRatio || 1, 1.5)
    renderer.setPixelRatio(dpr)
    el.appendChild(renderer.domElement)

    const scene = new THREE.Scene()
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1)
    const uniforms = {
      uRes: { value: new THREE.Vector2(1, 1) },
      uTime: { value: 0 },
      uMouse: { value: new THREE.Vector2(0.5, 0.5) },
      uForce: { value: 0 },
    }
    const mat = new THREE.ShaderMaterial({ vertexShader: vert, fragmentShader: frag, uniforms })
    scene.add(new THREE.Mesh(new THREE.PlaneGeometry(2, 2), mat))

    const resize = () => {
      const { clientWidth: w, clientHeight: h } = el
      renderer.setSize(w, h, false)
      renderer.domElement.style.width = '100%'
      renderer.domElement.style.height = '100%'
      uniforms.uRes.value.set(w * dpr, h * dpr)
    }
    resize()
    const ro = new ResizeObserver(resize)
    ro.observe(el)

    const target = new THREE.Vector2(0.5, 0.5)
    let force = 0
    const move = (e) => {
      const r = el.getBoundingClientRect()
      target.set((e.clientX - r.left) / r.width, 1 - (e.clientY - r.top) / r.height)
      force = 1
    }
    window.addEventListener('pointermove', move)

    let visible = true
    const io = new IntersectionObserver(([e]) => { visible = e.isIntersecting }, { threshold: 0 })
    io.observe(el)

    const still = reduceMotion()
    const clock = new THREE.Clock()
    let raf
    const loop = () => {
      raf = requestAnimationFrame(loop)
      if (!visible && !still) return
      uniforms.uMouse.value.lerp(target, 0.06)
      force *= 0.965
      uniforms.uForce.value = force
      uniforms.uTime.value = still ? 12 : clock.getElapsedTime()
      renderer.render(scene, camera)
      if (still) cancelAnimationFrame(raf)
    }
    loop()

    return () => {
      cancelAnimationFrame(raf)
      ro.disconnect()
      io.disconnect()
      window.removeEventListener('pointermove', move)
      renderer.dispose()
      mat.dispose()
      renderer.domElement.remove()
    }
  }, [])

  return <div className="shader" ref={mount} aria-hidden="true" />
}
