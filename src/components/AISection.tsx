import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const NODES = [
  { label: 'IDEA',       sublabel: 'The spark of intent',    accent: false },
  { label: 'RESEARCH',   sublabel: 'Data, context, users',   accent: false },
  { label: 'PROMPT',     sublabel: 'AI synthesis layer',     accent: true  },
  { label: 'PROTOTYPE',  sublabel: 'Rapid materialisation',  accent: false },
  { label: 'ITERATION',  sublabel: 'Intelligent refinement', accent: false },
  { label: 'LAUNCH',     sublabel: 'From idea to world',     accent: false },
]

const BEFORE = [
  { step: '01', label: 'Brief received', time: '1 day' },
  { step: '02', label: 'Manual research', time: '1–2 wks' },
  { step: '03', label: 'Mood boarding', time: '3 days' },
  { step: '04', label: 'Wireframing', time: '1 wk' },
  { step: '05', label: 'Client revision cycles', time: '2–4 wks' },
  { step: '06', label: 'Final delivery', time: '6–10 wks' },
]

const AFTER = [
  { step: '01', label: 'Brief received', time: '1 day' },
  { step: '02', label: 'AI research synthesis', time: '2 hrs', lime: true },
  { step: '03', label: 'AI mood + direction', time: '1 hr', lime: true },
  { step: '04', label: 'Rapid prototyping', time: '1 day', lime: true },
  { step: '05', label: 'Focused iteration', time: '3 days', lime: true },
  { step: '06', label: 'Final delivery', time: '1–2 wks' },
]

function WorkflowNode({ label, sublabel, accent, index, inView }: { label: string; sublabel: string; accent: boolean; index: number; inView: boolean }) {
  return (
    <motion.div className="flex items-center gap-4 relative z-10"
      initial={{ opacity: 0, x: -24 }} animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 + 0.4, ease: [0.16, 1, 0.3, 1] }}>
      <div className="relative flex-shrink-0 flex items-center justify-center" style={{ width: 36, height: 36 }}>
        {accent && (
          <motion.div className="absolute rounded-full bg-lime" style={{ width: 36, height: 36, opacity: 0.1 }}
            animate={inView ? { scale: [1, 1.5, 1], opacity: [0.1, 0.05, 0.1] } : {}}
            transition={{ duration: 2.5, repeat: Infinity, delay: 1.6 }} />
        )}
        <div className="rounded-full flex items-center justify-center" style={{ width: 32, height: 32, border: `1px solid ${accent ? '#C7FF4A' : 'rgba(255,255,255,0.18)'}`, backgroundColor: accent ? 'rgba(199,255,74,0.07)' : 'rgba(255,255,255,0.03)' }}>
          <div className="rounded-full" style={{ width: 6, height: 6, backgroundColor: accent ? '#C7FF4A' : 'rgba(255,255,255,0.4)' }} />
        </div>
      </div>
      <div className="flex-1 min-w-0">
        <span className="font-mono uppercase block" style={{ fontSize: 9, letterSpacing: '0.28em', color: accent ? '#C7FF4A' : 'rgba(255,255,255,0.65)' }}>{label}</span>
        <span className="font-mono uppercase" style={{ fontSize: 7, letterSpacing: '0.14em', color: 'rgba(255,255,255,0.22)' }}>{sublabel}</span>
      </div>
      <span className="font-display font-extrabold select-none flex-shrink-0" style={{ fontSize: 42, lineHeight: 1, color: 'rgba(255,255,255,0.04)', letterSpacing: '-0.04em' }}>
        {String(index + 1).padStart(2, '0')}
      </span>
    </motion.div>
  )
}

export default function AISection() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section ref={ref} id="s02" className="relative flex flex-col overflow-hidden"
      style={{ height: '100svh', backgroundColor: '#050505' }}>

      <div className="flex flex-col h-full px-8 md:px-14 pt-20 pb-10">

        {/* Top bar */}
        <motion.div className="flex items-center gap-3 mb-6 flex-shrink-0" style={{ borderBottom: '1px solid rgba(255,255,255,0.07)', paddingBottom: '16px' }}
          initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
          <span className="font-mono text-lime uppercase" style={{ fontSize: 10, letterSpacing: '0.42em' }}>02 — AI</span>
        </motion.div>

        {/* Headline */}
        <div className="mb-6 flex-shrink-0">
          {['A new workflow', 'has emerged.'].map((l, i) => (
            <div key={i} className="overflow-hidden">
              <motion.h2 className="font-display font-extrabold text-white"
                style={{ fontSize: 'clamp(30px, 3.8vw, 66px)', lineHeight: 0.92, letterSpacing: '-0.02em' }}
                initial={{ y: '110%' }} whileInView={{ y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.95, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}>
                {l}
              </motion.h2>
            </div>
          ))}
        </div>

        {/* Three-column layout: Before | After | New workflow */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 xl:gap-8 flex-1 min-h-0 items-start">

          {/* Before AI */}
          <motion.div className="flex flex-col h-full" initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.3 }}>
            <div className="flex items-center gap-2 mb-4 pb-3" style={{ borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
              <div className="rounded-full" style={{ width: 6, height: 6, backgroundColor: 'rgba(255,255,255,0.25)' }} />
              <span className="font-mono uppercase" style={{ fontSize: 9, letterSpacing: '0.28em', color: 'rgba(255,255,255,0.28)' }}>Before AI</span>
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
                <span className="font-mono" style={{ fontSize: 8, color: 'rgba(255,255,255,0.2)', letterSpacing: '0.12em' }}>TOTAL TIME</span>
                <div style={{ fontSize: 18, fontWeight: 800, color: 'rgba(255,255,255,0.35)', letterSpacing: '-0.02em', fontFamily: "'Bricolage Grotesque',sans-serif" }}>6–10 weeks</div>
              </div>
            </div>
          </motion.div>

          {/* After AI */}
          <motion.div className="flex flex-col h-full" initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.45 }}>
            <div className="flex items-center gap-2 mb-4 pb-3" style={{ borderBottom: '1px solid rgba(199,255,74,0.2)' }}>
              <div className="rounded-full bg-lime" style={{ width: 6, height: 6 }} />
              <span className="font-mono uppercase text-lime" style={{ fontSize: 9, letterSpacing: '0.28em' }}>With AI</span>
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
                <span className="font-mono text-lime" style={{ fontSize: 8, letterSpacing: '0.12em' }}>TOTAL TIME</span>
                <div className="text-lime" style={{ fontSize: 18, fontWeight: 800, letterSpacing: '-0.02em', fontFamily: "'Bricolage Grotesque',sans-serif" }}>1–2 weeks</div>
              </div>
            </div>
          </motion.div>

          {/* New workflow nodes */}
          <div className="flex flex-col justify-center h-full">
            <div className="flex items-center gap-2 mb-4 pb-3" style={{ borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
              <div className="rounded-full bg-lime" style={{ width: 6, height: 6 }} />
              <span className="font-mono uppercase" style={{ fontSize: 9, letterSpacing: '0.28em', color: 'rgba(255,255,255,0.28)' }}>New pipeline</span>
            </div>

            {/* Track scoped to node list so it never overlaps the header */}
            <div className="relative flex flex-col gap-2">
              <div className="absolute" style={{ left: 18, top: 18, bottom: 18, width: 1, zIndex: 0 }}>
                <motion.div style={{ height: '100%', transformOrigin: 'top', background: 'linear-gradient(to bottom, #C7FF4A 0%, rgba(199,255,74,0.1) 80%, transparent 100%)' }}
                  initial={{ scaleY: 0 }} animate={inView ? { scaleY: 1 } : {}}
                  transition={{ duration: 1.6, delay: 0.6, ease: [0.16, 1, 0.3, 1] }} />
              </div>
              {NODES.map((n, i) => <WorkflowNode key={i} {...n} index={i} inView={inView} />)}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute right-0 bottom-0 pointer-events-none select-none" style={{ fontFamily: "'Bricolage Grotesque',sans-serif", fontWeight: 800, fontSize: 'clamp(120px, 16vw, 280px)', lineHeight: 0.85, color: 'rgba(255,255,255,0.02)', letterSpacing: '-0.05em' }}>02</div>
    </section>
  )
}
