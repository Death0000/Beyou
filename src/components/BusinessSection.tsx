import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function BusinessSection() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      ref={ref}
      id="s03"
      className="relative flex flex-col overflow-hidden"
      style={{ height: '100svh', backgroundColor: '#050505' }}
    >
      <div className="flex flex-col h-full px-8 md:px-14 pt-20 pb-10">

        {/* Top bar */}
        <motion.div className="flex items-center gap-3 mb-6 flex-shrink-0" style={{ borderBottom: '1px solid rgba(255,255,255,0.07)', paddingBottom: '16px' }}
          initial={{ opacity: 0, y: 10 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }}>
          
          <span className="font-mono text-lime uppercase" style={{ fontSize: 10, letterSpacing: '0.42em' }}>03 — BUSINESS</span>
        </motion.div>

        {/* Main: centred typographic statement */}
        <div className="flex flex-col justify-center flex-1 min-h-0">

          {/* Statement 1 */}
          <div className="overflow-hidden">
            <motion.h2 className="font-display font-extrabold text-white"
              style={{ fontSize: 'clamp(40px, 5.8vw, 100px)', lineHeight: 0.9, letterSpacing: '-0.02em' }}
              initial={{ y: '110%' }} animate={inView ? { y: 0 } : {}}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}>
              Great Design
            </motion.h2>
          </div>
          <div className="overflow-hidden mb-2">
            <motion.h2 className="font-editorial italic text-white"
              style={{ fontSize: 'clamp(40px, 5.8vw, 100px)', lineHeight: 0.9, opacity: 0.5 }}
              initial={{ y: '110%' }} animate={inView ? { y: 0 } : {}}
              transition={{ duration: 1, delay: 0.32, ease: [0.16, 1, 0.3, 1] }}>
              Doesn&apos;t Build Businesses.
            </motion.h2>
          </div>

          {/* Divider */}
          <motion.div className="my-8 md:my-10 origin-left" style={{ height: 1, backgroundColor: 'rgba(255,255,255,0.08)' }}
            initial={{ scaleX: 0 }} animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 1.2, delay: 0.85, ease: [0.16, 1, 0.3, 1] }} />

          {/* Statement 2 — lime */}
          <div className="overflow-hidden mb-10 md:mb-14">
            <motion.h2 className="font-display font-extrabold text-lime"
              style={{ fontSize: 'clamp(40px, 5.8vw, 100px)', lineHeight: 0.9, letterSpacing: '-0.02em' }}
              initial={{ y: '110%' }} animate={inView ? { y: 0 } : {}}
              transition={{ duration: 1, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}>
              Great Designers Do.
            </motion.h2>
          </div>

          {/* Supporting copy */}
          <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-6" style={{ maxWidth: 860 }}
            initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 1.8 }}>
            <p className="font-mono leading-relaxed" style={{ fontSize: 11, letterSpacing: '0.04em', color: 'rgba(255,255,255,0.3)', lineHeight: 1.85 }}>
              Design thinking is now a board-level asset. Designers who bridge creativity
              and commercial strategy command influence at every layer of an organisation —
              from product to investment.
            </p>
            <p className="font-mono leading-relaxed" style={{ fontSize: 11, letterSpacing: '0.04em', color: 'rgba(255,255,255,0.3)', lineHeight: 1.85 }}>
              The question is not whether AI will impact design. It already has.
              The question is whether designers will lead the businesses AI is making
              possible — or simply service them.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="absolute right-0 bottom-0 pointer-events-none select-none" style={{ fontFamily: "'Bricolage Grotesque',sans-serif", fontWeight: 800, fontSize: 'clamp(120px, 16vw, 280px)', lineHeight: 0.85, color: 'rgba(255,255,255,0.02)', letterSpacing: '-0.05em' }}>03</div>
    </section>
  )
}
