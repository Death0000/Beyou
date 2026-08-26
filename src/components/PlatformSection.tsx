import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

interface NodeDef { label: string; sublabel: string; cx: number; cy: number; highlight: boolean; textAnchor: 'middle'|'start'|'end'; tx: number; ty: number; ty2: number }

const NODES: NodeDef[] = [
  { label: 'DESIGNER',  sublabel: 'You',       cx: 200, cy: 200, highlight: true,  textAnchor: 'middle', tx: 0,   ty: 28,  ty2: 39 },
  { label: 'IDEA',      sublabel: 'Vision',    cx: 200, cy: 55,  highlight: false, textAnchor: 'middle', tx: 0,   ty: -17, ty2: -7 },
  { label: 'AI',        sublabel: 'Synthesis', cx: 325, cy: 127, highlight: false, textAnchor: 'start',  tx: 16,  ty: 4,   ty2: 13 },
  { label: 'VALIDATE',  sublabel: 'Research',  cx: 325, cy: 273, highlight: false, textAnchor: 'start',  tx: 16,  ty: 4,   ty2: 13 },
  { label: 'STARTUP',   sublabel: 'Value',     cx: 200, cy: 345, highlight: true,  textAnchor: 'middle', tx: 0,   ty: 21,  ty2: 31 },
  { label: 'PROTOTYPE', sublabel: 'Build',     cx: 75,  cy: 273, highlight: false, textAnchor: 'end',    tx: -16, ty: 4,   ty2: 13 },
  { label: 'RESEARCH',  sublabel: 'Insights',  cx: 75,  cy: 127, highlight: false, textAnchor: 'end',    tx: -16, ty: 4,   ty2: 13 },
]

const SPOKES = ['M 200 185 L 200 75','M 213 192 L 313 134','M 213 208 L 313 266','M 200 215 L 200 329','M 187 208 L 87 266','M 187 192 L 87 134']
const RING   = ['M 200 55 L 325 127','M 325 127 L 325 273','M 325 273 L 200 345','M 200 345 L 75 273','M 75 273 L 75 127','M 75 127 L 200 55']

const BEFORE = [
  { step: '01', label: 'Find collaborators',   time: 'Months' },
  { step: '02', label: 'Validate idea alone',  time: 'Weeks' },
  { step: '03', label: 'Build prototype',       time: '2–4 wks' },
  { step: '04', label: 'Pitch to investors',    time: 'Months' },
  { step: '05', label: 'Handle admin + legal',  time: 'Weeks' },
  { step: '06', label: 'Launch to market',      time: '6–12 mos' },
]

const AFTER = [
  { step: '01', label: 'Match collaborators',  time: '24 hrs',  lime: true },
  { step: '02', label: 'AI viability check',   time: '1 hr',    lime: true },
  { step: '03', label: 'Rapid prototype',       time: '3 days',  lime: true },
  { step: '04', label: 'Platform-matched VCs',  time: '1 wk',    lime: true },
  { step: '05', label: 'Setup automated',       time: 'Instant', lime: true },
  { step: '06', label: 'Launch to market',      time: '2–6 wks' },
]

export default function PlatformSection() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section
      ref={ref}
      id="s05"
      className="relative flex flex-col overflow-hidden"
      style={{ height: '100svh', backgroundColor: '#050505' }}
    >
      <div className="flex flex-col h-full px-8 md:px-14 pt-20 pb-10">

        {/* Top bar */}
        <motion.div className="flex items-center gap-3 mb-6 flex-shrink-0" style={{ borderBottom: '1px solid rgba(255,255,255,0.07)', paddingBottom: '16px' }}
          initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
          <span className="font-mono text-lime uppercase" style={{ fontSize: 10, letterSpacing: '0.42em' }}>05 — PLATFORM</span>
        </motion.div>

        {/* Headline */}
        <div className="mb-6 flex-shrink-0">
          {['Owning', 'the platform.'].map((l, i) => (
            <div key={i} className="overflow-hidden">
              <motion.h2 className={`font-extrabold text-white ${i === 1 ? 'font-editorial italic' : 'font-display'}`}
                style={{ fontSize: 'clamp(30px, 3.8vw, 66px)', lineHeight: 0.92, letterSpacing: '-0.02em' }}
                initial={{ y: '110%' }} whileInView={{ y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.95, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}>
                {l}
              </motion.h2>
            </div>
          ))}
        </div>

        {/* Three-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 xl:gap-8 flex-1 min-h-0 items-start">

          {/* Without Platform */}
          <motion.div className="flex flex-col h-full" initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.3 }}>
            <div className="flex items-center gap-2 mb-4 pb-3" style={{ borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
              <div className="rounded-full" style={{ width: 6, height: 6, backgroundColor: 'rgba(255,255,255,0.25)' }} />
              <span className="font-mono uppercase" style={{ fontSize: 9, letterSpacing: '0.28em', color: 'rgba(255,255,255,0.28)' }}>Without Platform</span>
            </div>
            <div className="flex flex-col gap-2.5">
              {BEFORE.map((s, i) => (
                <motion.div key={i} className="flex items-center justify-between gap-3 py-2 px-3 rounded-lg"
                  style={{ backgroundColor: 'rgba(255,255,255,0.025)', border: '1px solid rgba(255,255,255,0.06)' }}
                  initial={{ opacity: 0, x: -12 }} animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: i * 0.07 + 0.4 }}>
                  <div className="flex items-center gap-2.5 min-w-0">
                    <span className="font-mono flex-shrink-0" style={{ fontSize: 8, color: 'rgba(255,255,255,0.2)', letterSpacing: '0.12em' }}>{s.step}</span>
                    <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.42)', letterSpacing: '-0.005em', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{s.label}</span>
                  </div>
                  <span className="font-mono flex-shrink-0" style={{ fontSize: 9, color: 'rgba(255,255,255,0.22)', letterSpacing: '0.06em', whiteSpace: 'nowrap' }}>{s.time}</span>
                </motion.div>
              ))}
              <div className="mt-2 px-3 py-2 rounded-lg" style={{ backgroundColor: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}>
                <span className="font-mono" style={{ fontSize: 8, color: 'rgba(255,255,255,0.2)', letterSpacing: '0.12em' }}>TIME TO LAUNCH</span>
                <div style={{ fontSize: 18, fontWeight: 800, color: 'rgba(255,255,255,0.35)', letterSpacing: '-0.02em', fontFamily: "'Bricolage Grotesque',sans-serif" }}>6–12 months</div>
              </div>
            </div>
          </motion.div>

          {/* With Beyou */}
          <motion.div className="flex flex-col h-full" initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.45 }}>
            <div className="flex items-center gap-2 mb-4 pb-3" style={{ borderBottom: '1px solid rgba(199,255,74,0.2)' }}>
              <div className="rounded-full bg-lime" style={{ width: 6, height: 6 }} />
              <span className="font-mono uppercase text-lime" style={{ fontSize: 9, letterSpacing: '0.28em' }}>With Beyou</span>
            </div>
            <div className="flex flex-col gap-2.5">
              {AFTER.map((s, i) => (
                <motion.div key={i} className="flex items-center justify-between gap-3 py-2 px-3 rounded-lg"
                  style={{ backgroundColor: s.lime ? 'rgba(199,255,74,0.04)' : 'rgba(255,255,255,0.025)', border: `1px solid ${s.lime ? 'rgba(199,255,74,0.14)' : 'rgba(255,255,255,0.06)'}` }}
                  initial={{ opacity: 0, x: -12 }} animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: i * 0.07 + 0.55 }}>
                  <div className="flex items-center gap-2.5 min-w-0">
                    <span className="font-mono flex-shrink-0" style={{ fontSize: 8, color: s.lime ? 'rgba(199,255,74,0.5)' : 'rgba(255,255,255,0.2)', letterSpacing: '0.12em' }}>{s.step}</span>
                    <span style={{ fontSize: 11, color: s.lime ? 'rgba(255,255,255,0.7)' : 'rgba(255,255,255,0.42)', letterSpacing: '-0.005em', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{s.label}</span>
                  </div>
                  <span className="font-mono flex-shrink-0" style={{ fontSize: 9, color: s.lime ? '#C7FF4A' : 'rgba(255,255,255,0.22)', letterSpacing: '0.06em', whiteSpace: 'nowrap' }}>{s.time}</span>
                </motion.div>
              ))}
              <div className="mt-2 px-3 py-2 rounded-lg" style={{ backgroundColor: 'rgba(199,255,74,0.06)', border: '1px solid rgba(199,255,74,0.18)' }}>
                <span className="font-mono text-lime" style={{ fontSize: 8, letterSpacing: '0.12em' }}>TIME TO LAUNCH</span>
                <div className="text-lime" style={{ fontSize: 18, fontWeight: 800, letterSpacing: '-0.02em', fontFamily: "'Bricolage Grotesque',sans-serif" }}>2–6 weeks</div>
              </div>
            </div>
          </motion.div>

          {/* Network SVG */}
          <div className="flex items-center justify-center h-full">
            <svg viewBox="0 0 400 400" fill="none" style={{ width: '100%', maxWidth: 380, height: '100%', maxHeight: 380 }}>
              {RING.map((d, i) => (
                <motion.path key={`r${i}`} d={d} stroke="rgba(255,255,255,0.09)" strokeWidth="0.8"
                  initial={{ pathLength: 0 }} animate={inView ? { pathLength: 1 } : {}}
                  transition={{ duration: 0.65, delay: i * 0.08 + 0.3, ease: 'easeOut' }} />
              ))}
              {SPOKES.map((d, i) => (
                <motion.path key={`s${i}`} d={d} stroke="rgba(199,255,74,0.2)" strokeWidth="0.8"
                  initial={{ pathLength: 0 }} animate={inView ? { pathLength: 1 } : {}}
                  transition={{ duration: 0.55, delay: i * 0.09 + 0.9, ease: 'easeOut' }} />
              ))}
              {NODES.map((n, i) => (
                <motion.g key={n.label} initial={{ opacity: 0, scale: 0 }} animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.45, delay: i * 0.1 + 1.5 }}
                  style={{ transformOrigin: `${n.cx}px ${n.cy}px` }}>
                  {n.highlight && <circle cx={n.cx} cy={n.cy} r="22" fill="#C7FF4A" fillOpacity="0.07" />}
                  <circle cx={n.cx} cy={n.cy} r={n.highlight ? 14 : 8}
                    fill={n.highlight ? 'rgba(199,255,74,0.1)' : 'rgba(255,255,255,0.04)'}
                    stroke={n.highlight ? '#C7FF4A' : 'rgba(255,255,255,0.22)'} strokeWidth="1" />
                  <circle cx={n.cx} cy={n.cy} r={n.highlight ? 4.5 : 2.5}
                    fill={n.highlight ? '#C7FF4A' : 'rgba(255,255,255,0.45)'} stroke="none" />
                  <text x={n.cx + n.tx} y={n.cy + n.ty} textAnchor={n.textAnchor}
                    fill={n.highlight ? '#C7FF4A' : 'rgba(255,255,255,0.52)'}
                    fontSize="7" fontFamily="'DM Mono',monospace" letterSpacing="0.14em">{n.label}</text>
                  <text x={n.cx + n.tx} y={n.cy + n.ty2} textAnchor={n.textAnchor}
                    fill="rgba(255,255,255,0.2)" fontSize="5.5" fontFamily="'DM Mono',monospace" letterSpacing="0.1em">{n.sublabel}</text>
                </motion.g>
              ))}
            </svg>
          </div>
        </div>
      </div>

      <div className="absolute right-0 bottom-0 pointer-events-none select-none" style={{ fontFamily: "'Bricolage Grotesque',sans-serif", fontWeight: 800, fontSize: 'clamp(120px, 16vw, 280px)', lineHeight: 0.85, color: 'rgba(255,255,255,0.02)', letterSpacing: '-0.05em' }}>05</div>
    </section>
  )
}
