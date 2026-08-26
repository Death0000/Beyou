import { motion } from 'framer-motion'

function GlassWindow({ children, title, delay = 0, style }: { children: React.ReactNode; title: string; delay?: number; style?: React.CSSProperties }) {
  return (
    <motion.div
      style={{ backdropFilter: 'blur(40px)', WebkitBackdropFilter: 'blur(40px)', background: 'rgba(255,255,255,0.035)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 10, overflow: 'hidden', ...style }}
      initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }} transition={{ duration: 1, delay, ease: [0.16, 1, 0.3, 1] }}>
      <div className="flex items-center gap-1.5 px-4 py-2.5" style={{ borderBottom: '1px solid rgba(255,255,255,0.06)', backgroundColor: 'rgba(255,255,255,0.02)' }}>
        <div className="w-2 h-2 rounded-full" style={{ backgroundColor: 'rgba(255,255,255,0.14)' }} />
        <div className="w-2 h-2 rounded-full" style={{ backgroundColor: 'rgba(255,255,255,0.14)' }} />
        <div className="w-2 h-2 rounded-full" style={{ backgroundColor: 'rgba(199,255,74,0.38)' }} />
        <span className="font-mono ml-2" style={{ fontSize: 8, letterSpacing: '0.2em', color: 'rgba(255,255,255,0.28)' }}>{title}</span>
      </div>
      {children}
    </motion.div>
  )
}

function DashboardContent() {
  const rows = ['Brand Identity Redesign', 'Mobile App Prototype', 'AI Design System']
  const pcts = [72, 45, 18]
  return (
    <div className="p-4">
      <div className="flex items-center justify-between mb-4">
        <span className="font-mono" style={{ fontSize: 9, letterSpacing: '0.2em', color: 'rgba(255,255,255,0.45)' }}>ACTIVE PROJECTS</span>
        <span className="font-mono text-lime" style={{ fontSize: 8, letterSpacing: '0.15em' }}>3 LIVE</span>
      </div>
      {rows.map((label, i) => (
        <div key={label} className="mb-3.5">
          <div className="flex items-center justify-between mb-1">
            <span className="font-mono" style={{ fontSize: 8, color: 'rgba(255,255,255,0.55)', letterSpacing: '0.08em' }}>{label}</span>
            <span className="font-mono" style={{ fontSize: 7, color: 'rgba(255,255,255,0.28)' }}>{pcts[i]}%</span>
          </div>
          <div className="h-px w-full" style={{ backgroundColor: 'rgba(255,255,255,0.06)' }}>
            <div className="h-full" style={{ width: `${pcts[i]}%`, backgroundColor: 'rgba(255,255,255,0.22)' }} />
          </div>
        </div>
      ))}
      <div className="flex gap-2 mt-4">
        <div className="flex-1 py-1.5 px-3 rounded font-mono text-center" style={{ fontSize: 8, letterSpacing: '0.2em', backgroundColor: '#C7FF4A', color: '#050505' }}>+ NEW</div>
        <div className="py-1.5 px-3 rounded font-mono" style={{ fontSize: 8, letterSpacing: '0.15em', border: '1px solid rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.35)' }}>AI</div>
      </div>
    </div>
  )
}

function PromptContent() {
  return (
    <div className="p-4">
      <div className="mb-3"><span className="font-mono" style={{ fontSize: 7, letterSpacing: '0.25em', color: 'rgba(255,255,255,0.28)' }}>AI BRIEF GENERATOR</span></div>
      <div className="rounded p-2.5 mb-3" style={{ backgroundColor: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}>
        <p className="font-mono" style={{ fontSize: 8, color: 'rgba(255,255,255,0.5)', letterSpacing: '0.04em', lineHeight: 1.65 }}>
          &quot;Design a sustainable fashion brand for Gen Z with circular economy principles...&quot;
        </p>
      </div>
      <div className="flex items-center justify-between py-2 px-3 rounded" style={{ backgroundColor: 'rgba(199,255,74,0.07)', border: '1px solid rgba(199,255,74,0.18)' }}>
        <span className="font-mono text-lime" style={{ fontSize: 7, letterSpacing: '0.18em' }}>ANALYSING</span>
        <div className="flex gap-1">
          {[0, 1, 2].map(d => (
            <motion.div key={d} className="rounded-full bg-lime" style={{ width: 3, height: 3 }}
              animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 1.2, repeat: Infinity, delay: d * 0.2 }} />
          ))}
        </div>
      </div>
    </div>
  )
}

function AnalyticsContent() {
  const pts = [68, 45, 72, 58, 82, 65, 90, 78, 95]
  return (
    <div className="p-4">
      <div className="flex items-center justify-between mb-2">
        <span className="font-mono" style={{ fontSize: 7, letterSpacing: '0.22em', color: 'rgba(255,255,255,0.28)' }}>PLATFORM GROWTH</span>
        <span className="font-mono text-lime" style={{ fontSize: 7 }}>+94%</span>
      </div>
      <svg viewBox="0 0 200 64" fill="none" width="100%">
        <polyline points={pts.map((p, i) => `${i * 25},${64 - p * 0.6}`).join(' ')}
          stroke="rgba(199,255,74,0.48)" strokeWidth="1.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        {pts.map((p, i) => <circle key={i} cx={i * 25} cy={64 - p * 0.6} r="2" fill="#C7FF4A" fillOpacity="0.65" />)}
      </svg>
      <div className="grid grid-cols-3 gap-2 mt-2">
        {[{ v: '1,240', l: 'DESIGNERS' }, { v: '384', l: 'STARTUPS' }, { v: '£2.8M', l: 'VALUE' }].map(s => (
          <div key={s.l} className="text-center">
            <div className="font-display font-extrabold text-white" style={{ fontSize: 12 }}>{s.v}</div>
            <div className="font-mono" style={{ fontSize: 6, letterSpacing: '0.18em', color: 'rgba(255,255,255,0.22)' }}>{s.l}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function ShowcaseSection() {
  return (
    <section
      className="relative flex flex-col overflow-hidden"
      style={{ height: '100svh', backgroundColor: '#050505' }}
    >
      <div className="flex flex-col h-full px-8 md:px-14 pt-20 pb-10">

        {/* Top bar */}
        <motion.div className="flex items-center gap-3 mb-6 flex-shrink-0" style={{ borderBottom: '1px solid rgba(255,255,255,0.07)', paddingBottom: '16px' }}
          initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
          
          <span className="font-mono text-lime uppercase" style={{ fontSize: 10, letterSpacing: '0.42em' }}>PLATFORM SHOWCASE</span>
        </motion.div>

        {/* Main grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-16 flex-1 min-h-0 items-center">

          {/* Left: headline */}
          <div className="flex flex-col justify-center gap-6">
            {['The product', 'is alive.'].map((l, i) => (
              <div key={i} className="overflow-hidden">
                <motion.h2 className={`font-extrabold text-white ${i === 1 ? 'font-editorial italic' : 'font-display'}`}
                  style={{ fontSize: 'clamp(44px, 5.5vw, 96px)', lineHeight: 0.9, letterSpacing: '-0.02em' }}
                  initial={{ y: '110%' }} whileInView={{ y: 0 }} viewport={{ once: true }}
                  transition={{ duration: 0.95, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}>
                  {l}
                </motion.h2>
              </div>
            ))}

            <motion.p className="font-mono leading-relaxed" style={{ fontSize: 11, letterSpacing: '0.04em', color: 'rgba(255,255,255,0.3)', lineHeight: 1.85, maxWidth: 380 }}
              initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.4 }}>
              A platform for designers who are ready to own the future —
              not just design it. Intelligence meets ambition.
            </motion.p>

            <motion.p className="font-mono" style={{ fontSize: 9, letterSpacing: '0.32em', color: 'rgba(255,255,255,0.16)', textTransform: 'uppercase' }}
              initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.8 }}>
              MA IxD Dissertation — Beyou Platform
            </motion.p>
          </div>

          {/* Right: floating windows */}
          <div className="flex flex-col gap-3 h-full justify-center max-h-full overflow-hidden">
            <GlassWindow title="beyou.platform — dashboard" delay={0.15}>
              <DashboardContent />
            </GlassWindow>
            <div className="grid grid-cols-2 gap-3">
              <GlassWindow title="ai — brief" delay={0.3} style={{ transform: 'rotate(-0.8deg)' }}>
                <PromptContent />
              </GlassWindow>
              <GlassWindow title="analytics" delay={0.45} style={{ transform: 'rotate(0.6deg)' }}>
                <AnalyticsContent />
              </GlassWindow>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
