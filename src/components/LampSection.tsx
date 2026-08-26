import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Link } from 'react-router'

export default function LampSection() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const t = { delay: 0.3, duration: 0.8, ease: 'easeInOut' as const }

  return (
    <section
      ref={ref}
      className="relative flex flex-col overflow-hidden"
      style={{ height: '100svh', backgroundColor: '#050505' }}
    >

      {/* ── Lamp: absolute background ── */}
      <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 0 }}>

        {/* Left conic beam */}
        <motion.div
          initial={{ opacity: 0.5, width: '15rem' }}
          animate={inView ? { opacity: 1, width: '30rem' } : {}}
          transition={t}
          style={{ position: 'absolute', top: 0, right: '50%', height: '55vh', overflow: 'visible', backgroundImage: 'conic-gradient(from 70deg at center top, #C7FF4A, transparent, transparent)' }}
        >
          <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: '60%', backgroundColor: '#050505', maskImage: 'linear-gradient(to top, white, transparent)', WebkitMaskImage: 'linear-gradient(to top, white, transparent)' }} />
          <div style={{ position: 'absolute', bottom: 0, left: 0, width: '8rem', height: '100%', backgroundColor: '#050505', maskImage: 'linear-gradient(to right, white, transparent)', WebkitMaskImage: 'linear-gradient(to right, white, transparent)' }} />
        </motion.div>

        {/* Right conic beam */}
        <motion.div
          initial={{ opacity: 0.5, width: '15rem' }}
          animate={inView ? { opacity: 1, width: '30rem' } : {}}
          transition={t}
          style={{ position: 'absolute', top: 0, left: '50%', height: '55vh', overflow: 'visible', backgroundImage: 'conic-gradient(from 290deg at center top, transparent, transparent, #C7FF4A)' }}
        >
          <div style={{ position: 'absolute', bottom: 0, right: 0, width: '8rem', height: '100%', backgroundColor: '#050505', maskImage: 'linear-gradient(to left, white, transparent)', WebkitMaskImage: 'linear-gradient(to left, white, transparent)' }} />
          <div style={{ position: 'absolute', bottom: 0, right: 0, width: '100%', height: '60%', backgroundColor: '#050505', maskImage: 'linear-gradient(to top, white, transparent)', WebkitMaskImage: 'linear-gradient(to top, white, transparent)' }} />
        </motion.div>

        {/* Beam line */}
        <motion.div
          initial={{ width: '15rem', opacity: 0 }}
          animate={inView ? { width: '30rem', opacity: 1 } : {}}
          transition={t}
          style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', height: 1, backgroundColor: '#C7FF4A' }}
        />

        {/* Wide glow */}
        <motion.div
          initial={{ opacity: 0, width: '10rem' }}
          animate={inView ? { opacity: 0.18, width: '28rem' } : {}}
          transition={t}
          style={{ position: 'absolute', top: '2vh', left: '50%', transform: 'translateX(-50%)', height: '22vh', borderRadius: '9999px', backgroundColor: '#C7FF4A', filter: 'blur(3.5rem)' }}
        />

        {/* Inner glow */}
        <motion.div
          initial={{ opacity: 0, width: '6rem' }}
          animate={inView ? { opacity: 0.28, width: '14rem' } : {}}
          transition={t}
          style={{ position: 'absolute', top: '1vh', left: '50%', transform: 'translateX(-50%)', height: '14vh', borderRadius: '9999px', backgroundColor: '#C7FF4A', filter: 'blur(2rem)' }}
        />
      </div>

      {/* ── "THESIS STATEMENT" — top of section, above the glow ── */}
      <motion.div
        className="flex-shrink-0 flex justify-center"
        style={{ paddingTop: 64, zIndex: 10 }}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 0.2, duration: 0.7 }}
      >
        <span className="font-mono uppercase" style={{ fontSize: 10, letterSpacing: '0.42em', color: 'rgba(255,255,255,0.38)' }}>
          Thesis Statement
        </span>
      </motion.div>

      {/* ── Main content — fills remaining space, perfectly centred ── */}
      <div className="flex-1 flex flex-col items-center justify-center text-center px-8" style={{ zIndex: 10 }}>

        <div className="overflow-hidden" style={{ paddingBottom: 6 }}>
          <motion.h2
            className="font-display font-extrabold text-white"
            style={{ fontSize: 'clamp(40px, 5.8vw, 90px)', lineHeight: 0.9, letterSpacing: '-0.03em' }}
            initial={{ y: '110%' }}
            animate={inView ? { y: 0 } : {}}
            transition={{ delay: 0.35, duration: 0.95, ease: [0.16, 1, 0.3, 1] }}
          >
            The future of design
          </motion.h2>
        </div>

        <div className="overflow-hidden" style={{ paddingBottom: 6 }}>
          <motion.h2
            className="font-editorial italic"
            style={{ fontSize: 'clamp(40px, 5.8vw, 90px)', lineHeight: 0.9, letterSpacing: '-0.01em', color: '#C7FF4A' }}
            initial={{ y: '110%' }}
            animate={inView ? { y: 0 } : {}}
            transition={{ delay: 0.48, duration: 0.95, ease: [0.16, 1, 0.3, 1] }}
          >
            belongs to builders.
          </motion.h2>
        </div>

        <motion.p
          className="font-mono"
          style={{ fontSize: 11, letterSpacing: '0.04em', color: 'rgba(255,255,255,0.3)', lineHeight: 1.85, marginTop: 24, maxWidth: 440 }}
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.65, duration: 0.8 }}
        >
          Designers who understand how to own, operate, and capitalise on the
          platforms they create will define the next era of the profession.
        </motion.p>

        <motion.div
          className="flex items-center justify-center gap-5"
          style={{ marginTop: 32 }}
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.82, duration: 0.7 }}
        >
          <Link
            to="/platform"
            style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '12px 28px', borderRadius: 12, backgroundColor: '#C7FF4A', color: '#050505', fontSize: 12, fontWeight: 800, letterSpacing: '0.06em', textDecoration: 'none', fontFamily: "'Bricolage Grotesque',sans-serif" }}
          >
            Enter Beyou →
          </Link>
          <div style={{ height: 1, width: 20, backgroundColor: 'rgba(255,255,255,0.15)' }} />
          <span className="font-mono" style={{ fontSize: 9, letterSpacing: '0.28em', color: 'rgba(255,255,255,0.2)', textTransform: 'uppercase' }}>
            MA IxD · 2024
          </span>
        </motion.div>
      </div>

      {/* Bottom padding so CTA doesn't crowd the footer snap */}
      <div className="flex-shrink-0" style={{ height: 48 }} />

    </section>
  )
}
