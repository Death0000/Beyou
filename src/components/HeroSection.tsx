import { useEffect, type ReactElement } from 'react'
import { motion, useMotionValue, useSpring, useTransform, type MotionValue, type Variants } from 'framer-motion'
import { Link } from 'react-router'
import heroImage from '@/imports/Fashionable_group_walking_crosswalk_2K_202607310107.jpeg'

/* ── SVG tool shapes ── */
const PenNib = () => (
  <svg viewBox="0 0 52 52" fill="none" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round">
    <path d="M8 44L4 48M44 8L48 4M44 8L8 44L4 44L4 40L40 4Z" />
    <circle cx="34" cy="18" r="2.5" fill="currentColor" stroke="none" />
  </svg>
)

const ArrowCursor = () => (
  <svg viewBox="0 0 40 44" fill="none" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 4L6 32L14 24L19 40L24 37.5L19 21L34 21Z" />
  </svg>
)

const BrowserWire = () => (
  <svg viewBox="0 0 110 76" fill="none" stroke="currentColor" strokeWidth="0.9" strokeLinecap="round">
    <rect x="1" y="1" width="108" height="74" rx="5" />
    <line x1="1" y1="17" x2="109" y2="17" />
    <circle cx="11" cy="9" r="2.5" /><circle cx="20" cy="9" r="2.5" /><circle cx="29" cy="9" r="2.5" />
    <rect x="10" y="25" width="90" height="6" rx="3" opacity="0.35" fill="currentColor" stroke="none" />
    <rect x="10" y="37" width="90" height="3" rx="1.5" opacity="0.2" fill="currentColor" stroke="none" />
    <rect x="10" y="44" width="72" height="3" rx="1.5" opacity="0.2" fill="currentColor" stroke="none" />
    <rect x="10" y="51" width="82" height="3" rx="1.5" opacity="0.2" fill="currentColor" stroke="none" />
    <rect x="10" y="58" width="55" height="3" rx="1.5" opacity="0.2" fill="currentColor" stroke="none" />
  </svg>
)

const IsoCube = () => (
  <svg viewBox="0 0 72 72" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="36,5 65,22 65,56 36,73 7,56 7,22" />
    <polygon points="36,5 65,22 36,39 7,22" />
    <line x1="36" y1="39" x2="36" y2="73" />
  </svg>
)

const AICircuit = () => (
  <svg viewBox="0 0 72 72" fill="none" stroke="currentColor" strokeWidth="0.9" strokeLinecap="round">
    <circle cx="36" cy="36" r="11" />
    <line x1="36" y1="5" x2="36" y2="25" /><line x1="36" y1="47" x2="36" y2="67" />
    <line x1="5" y1="36" x2="25" y2="36" /><line x1="47" y1="36" x2="67" y2="36" />
    <line x1="13" y1="13" x2="28" y2="28" /><line x1="59" y1="13" x2="44" y2="28" />
    <line x1="13" y1="59" x2="28" y2="44" /><line x1="59" y1="59" x2="44" y2="44" />
    {([[36,5],[36,67],[5,36],[67,36],[13,13],[59,13],[13,59],[59,59]] as [number,number][]).map(([cx,cy],i) => (
      <circle key={i} cx={cx} cy={cy} r="3" fill="currentColor" stroke="none" />
    ))}
  </svg>
)

const PhoneFrame = () => (
  <svg viewBox="0 0 52 84" fill="none" stroke="currentColor" strokeWidth="0.9" strokeLinecap="round">
    <rect x="2" y="2" width="48" height="80" rx="8" />
    <line x1="2" y1="15" x2="50" y2="15" /><line x1="2" y1="70" x2="50" y2="70" />
    <circle cx="26" cy="76" r="3" />
    <rect x="8" y="21" width="36" height="16" rx="3" opacity="0.35" fill="currentColor" stroke="none" />
    <rect x="8" y="42" width="16" height="16" rx="2" opacity="0.3" fill="currentColor" stroke="none" />
    <rect x="28" y="42" width="16" height="7" rx="2" opacity="0.3" fill="currentColor" stroke="none" />
    <rect x="28" y="52" width="16" height="6" rx="2" opacity="0.3" fill="currentColor" stroke="none" />
  </svg>
)

/* ── Tool floating layer ── */
interface ToolDef {
  Comp: () => ReactElement
  x: number; y: number
  depth: number; opacity: number; rotate: number; size: number
}

const TOOLS: ToolDef[] = [
  { Comp: PenNib,    x:  6, y: 18, depth: 0.55, opacity: 0.16, rotate: -18, size:  66 },
  { Comp: ArrowCursor, x: 84, y: 10, depth: 0.75, opacity: 0.12, rotate:  14, size:  52 },
  { Comp: BrowserWire, x: 68, y: 52, depth: 0.30, opacity: 0.10, rotate:  -7, size: 150 },
  { Comp: IsoCube,   x: 10, y: 60, depth: 0.60, opacity: 0.12, rotate:  18, size: 108 },
  { Comp: AICircuit, x: 50, y:  6, depth: 0.85, opacity: 0.09, rotate:   0, size:  90 },
  { Comp: PhoneFrame,x: 90, y: 36, depth: 0.40, opacity: 0.11, rotate:   9, size:  86 },
  { Comp: IsoCube,   x: 36, y: 76, depth: 0.65, opacity: 0.06, rotate: -28, size: 170 },
  { Comp: BrowserWire,x: 1, y: 42, depth: 0.38, opacity: 0.07, rotate:  12, size: 110 },
]

function FloatingTool({ Comp, x, y, depth, opacity, rotate, size, mx, my }: ToolDef & { mx: MotionValue<number>; my: MotionValue<number> }) {
  const tx = useTransform(mx, [-1, 1], [-depth * 55, depth * 55])
  const ty = useTransform(my, [-1, 1], [-depth * 55, depth * 55])
  return (
    <motion.div
      className="absolute pointer-events-none text-white"
      style={{ left: `${x}%`, top: `${y}%`, width: size, height: size, opacity, rotate, x: tx, y: ty }}
    >
      <Comp />
    </motion.div>
  )
}

/* ── Text reveal variants ── */
const EASE = [0.16, 1, 0.3, 1] as [number, number, number, number]

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.35 } },
}
const line: Variants = {
  hidden: { y: '108%' },
  show: { y: 0, transition: { duration: 0.95, ease: EASE } },
}

/* ── Section ── */
export default function HeroSection() {
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const smx = useSpring(mx, { stiffness: 48, damping: 18 })
  const smy = useSpring(my, { stiffness: 48, damping: 18 })

  useEffect(() => {
    const move = (e: MouseEvent) => {
      mx.set((e.clientX / window.innerWidth) * 2 - 1)
      my.set((e.clientY / window.innerHeight) * 2 - 1)
    }
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [mx, my])

  return (
    <section
      id="hero"
      className="relative flex flex-col justify-end pb-16 md:pb-24 overflow-hidden"
      style={{ height: '100svh', backgroundColor: '#050505' }}
    >
      {/* Floating tool layer — hidden on very small screens */}
      <div className="hidden sm:block">
        {TOOLS.map((t, i) => (
          <FloatingTool key={i} {...t} mx={smx} my={smy} />
        ))}
      </div>

      {/* Hero background image */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.8, ease: 'easeOut' }}
      >
        <img
          src={heroImage}
          alt="Fashionable group of designers walking across a crosswalk"
          className="absolute inset-0 w-full h-full object-cover object-center"
          style={{ filter: 'grayscale(20%) brightness(0.38)' }}
        />
      </motion.div>

      {/* Layered dark overlays for typography legibility */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, #050505 0%, rgba(5,5,5,0.55) 40%, rgba(5,5,5,0.72) 75%, #050505 100%)',
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(to right, #050505 0%, transparent 45%, rgba(5,5,5,0.3) 100%)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 px-8 md:px-14">
        <motion.p
          className="font-mono uppercase mb-10"
          style={{ fontSize: 11, letterSpacing: '0.38em', color: 'rgba(255,255,255,0.32)' }}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
        >
          MA Interaction Design · Dissertation 2024
        </motion.p>

        <motion.div variants={container} initial="hidden" animate="show">
          <div className="overflow-hidden">
            <motion.h1
              variants={line}
              className="font-display font-extrabold text-white"
              style={{ fontSize: 'clamp(44px, 6.2vw, 108px)', lineHeight: 0.9 }}
            >
              The Changing Role of
            </motion.h1>
          </div>

          <div className="overflow-hidden">
            <motion.h1
              variants={line}
              className="font-editorial italic text-white"
              style={{ fontSize: 'clamp(68px, 12.5vw, 214px)', lineHeight: 0.86 }}
            >
              Designers
            </motion.h1>
          </div>

          <div className="overflow-hidden mt-4">
            <motion.p
              variants={line}
              className="font-mono uppercase text-white"
              style={{ fontSize: 'clamp(10px, 0.95vw, 15px)', letterSpacing: '0.18em', opacity: 0.38 }}
            >
              in the Age of Artificial Intelligence
            </motion.p>
          </div>
        </motion.div>

        <motion.div
          className="flex flex-wrap items-center gap-4 mt-14"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 1.2 }}
        >
          <Link
            to="/auth"
            style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '12px 28px', borderRadius: 12, backgroundColor: '#E8375A', color: '#fff', fontSize: 13, fontWeight: 700, letterSpacing: '0.04em', textDecoration: 'none', fontFamily: "'Bricolage Grotesque',sans-serif" }}
          >
            Enter Platform →
          </Link>
          <div className="flex items-center gap-3">
            <div className="w-6 h-px bg-lime" />
            <span className="font-mono uppercase" style={{ fontSize: 10, letterSpacing: '0.36em', color: 'rgba(255,255,255,0.32)' }}>
              Scroll to explore
            </span>
          </div>
        </motion.div>
      </div>

      {/* Ghost numeral */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none select-none"
        style={{
          fontFamily: "'Bricolage Grotesque', sans-serif",
          fontWeight: 800,
          fontSize: 'clamp(180px, 24vw, 400px)',
          lineHeight: 1,
          color: 'rgba(255,255,255,0.022)',
          letterSpacing: '-0.05em',
        }}
      >
        00
      </div>
    </section>
  )
}
