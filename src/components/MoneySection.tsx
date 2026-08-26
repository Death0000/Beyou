import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const STAGES = [
  { index: '01', title: 'Freelancer',     desc: 'Project-based work, building reputation',          income: '£45,000',  growth: '+12%' },
  { index: '02', title: 'Consultant',     desc: 'Strategic advisory, retainer clients',              income: '£95,000',  growth: '+34%' },
  { index: '03', title: 'Founder',        desc: 'Product ownership, equity upside',                 income: '£180,000', growth: '+89%' },
  { index: '04', title: 'Platform Owner', desc: 'Scale, leverage, compounding returns',             income: 'Unlimited', growth: '∞'   },
]

export default function MoneySection() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section
      ref={ref}
      id="s04"
      className="relative flex flex-col overflow-hidden"
      style={{ height: '100svh', backgroundColor: '#050505' }}
    >
      <div className="flex flex-col h-full px-8 md:px-14 pt-20 pb-10">

        {/* Top bar */}
        <motion.div className="flex items-center gap-3 mb-6 flex-shrink-0" style={{ borderBottom: '1px solid rgba(255,255,255,0.07)', paddingBottom: '16px' }}
          initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
          
          <span className="font-mono text-lime uppercase" style={{ fontSize: 10, letterSpacing: '0.42em' }}>04 — MONEY</span>
        </motion.div>

        {/* Main grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-20 flex-1 min-h-0 items-center">

          {/* Left */}
          <div className="flex flex-col justify-center gap-6">
            <div>
              <div className="overflow-hidden">
                <motion.h2 className="font-display font-extrabold text-white"
                  style={{ fontSize: 'clamp(44px, 5.5vw, 96px)', lineHeight: 0.9, letterSpacing: '-0.02em' }}
                  initial={{ y: '110%' }} whileInView={{ y: 0 }} viewport={{ once: true }}
                  transition={{ duration: 0.95, ease: [0.16, 1, 0.3, 1] }}>
                  Design is
                </motion.h2>
              </div>
              <div className="overflow-hidden">
                <motion.h2 className="font-editorial italic text-lime"
                  style={{ fontSize: 'clamp(44px, 5.5vw, 96px)', lineHeight: 0.88 }}
                  initial={{ y: '110%' }} whileInView={{ y: 0 }} viewport={{ once: true }}
                  transition={{ duration: 0.95, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}>
                  leverage.
                </motion.h2>
              </div>
            </div>

            <motion.p className="font-mono leading-relaxed" style={{ fontSize: 11, letterSpacing: '0.04em', color: 'rgba(255,255,255,0.3)', lineHeight: 1.85, maxWidth: 380 }}
              initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.4 }}>
              The most valuable designers today understand how design creates business value —
              and position themselves to own a share of it.
            </motion.p>

            {/* Big stat */}
            <motion.div style={{ borderTop: '1px solid rgba(255,255,255,0.07)', paddingTop: '20px' }}
              initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.6 }}>
              <div className="font-display font-extrabold text-lime" style={{ fontSize: 'clamp(56px, 8vw, 130px)', lineHeight: 1 }}>£1.2M</div>
              <p className="font-mono uppercase mt-1" style={{ fontSize: 9, letterSpacing: '0.28em', color: 'rgba(255,255,255,0.26)' }}>
                Avg. designer-founder exit · 2019–2024
              </p>
            </motion.div>
          </div>

          {/* Right: career stages */}
          <div className="flex flex-col justify-center">
            {STAGES.map((s, i) => (
              <motion.div key={s.index} className="grid items-center py-4"
                style={{ borderTop: '1px solid rgba(255,255,255,0.07)', gridTemplateColumns: '1fr auto', gap: 12 }}
                initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.65, delay: i * 0.12 + 0.3 }}>
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <span className="font-mono text-lime" style={{ fontSize: 9, letterSpacing: '0.28em' }}>{s.index}</span>
                    <h3 className="font-display font-extrabold text-white" style={{ fontSize: 'clamp(15px, 1.4vw, 20px)' }}>{s.title}</h3>
                  </div>
                  <p className="font-mono" style={{ fontSize: 9, letterSpacing: '0.05em', color: 'rgba(255,255,255,0.28)', lineHeight: 1.55 }}>{s.desc}</p>
                </div>
                <div className="text-right flex-shrink-0">
                  <div className="font-display font-extrabold text-white" style={{ fontSize: 'clamp(14px, 1.4vw, 20px)' }}>{s.income}</div>
                  <div className="font-mono text-lime mt-0.5" style={{ fontSize: 9, letterSpacing: '0.2em' }}>{s.growth}</div>
                </div>
              </motion.div>
            ))}
            <motion.p className="font-mono mt-4" style={{ fontSize: 8, letterSpacing: '0.04em', color: 'rgba(255,255,255,0.16)', lineHeight: 1.6, borderTop: '1px solid rgba(255,255,255,0.07)', paddingTop: '12px' }}
              initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.8, delay: 1.1 }}>
              Data: AIGA 2024, LinkedIn Insights, Glassdoor UK. UK market medians.
            </motion.p>
          </div>
        </div>
      </div>

      <div className="absolute left-0 bottom-0 pointer-events-none select-none" style={{ fontFamily: "'Bricolage Grotesque',sans-serif", fontWeight: 800, fontSize: 'clamp(120px, 16vw, 280px)', lineHeight: 0.85, color: 'rgba(255,255,255,0.02)', letterSpacing: '-0.05em' }}>04</div>
    </section>
  )
}
