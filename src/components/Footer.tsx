import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer
      className="relative flex flex-col overflow-hidden"
      style={{ height: '100svh', backgroundColor: '#050505', borderTop: '1px solid rgba(255,255,255,0.06)' }}
    >
      <div className="flex flex-col h-full px-8 md:px-14 pt-20 pb-10 justify-between">

        {/* Top bar */}
        <motion.div className="flex items-center gap-3 mb-6 flex-shrink-0" style={{ borderBottom: '1px solid rgba(255,255,255,0.07)', paddingBottom: '16px' }}
          initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
          
          <span className="font-mono text-lime uppercase" style={{ fontSize: 10, letterSpacing: '0.42em' }}>END OF CHAPTER</span>
        </motion.div>

        {/* Main content */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-12 items-center min-h-0">

          {/* Left: title */}
          <div className="md:col-span-2">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.9 }}>
              <h2 className="font-display font-extrabold text-white leading-none mb-2" style={{ fontSize: 'clamp(28px, 3.5vw, 56px)' }}>
                The Changing Role
              </h2>
              <h2 className="font-editorial italic text-white leading-none" style={{ fontSize: 'clamp(28px, 3.5vw, 56px)', opacity: 0.5 }}>
                of Designers
              </h2>
            </motion.div>

            <motion.p className="font-mono mt-8" style={{ fontSize: 11, letterSpacing: '0.15em', color: 'rgba(255,255,255,0.25)', lineHeight: 1.8, maxWidth: 480 }}
              initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.3 }}>
              in the Age of Artificial Intelligence — An MA Interaction Design
              dissertation exploring how artificial intelligence is reshaping the
              role, value, and future of the design profession.
            </motion.p>
          </div>

          {/* Right: meta */}
          <motion.div className="flex flex-col gap-3" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.4 }}>
            {[
              ['Programme', 'MA Interaction Design'],
              ['Year', '2024'],
              ['Institution', 'Royal College of Art'],
              ['Supervisor', 'Design Futures Lab'],
            ].map(([label, value]) => (
              <div key={label} className="flex items-baseline justify-between gap-4">
                <span className="font-mono" style={{ fontSize: 9, letterSpacing: '0.25em', color: 'rgba(255,255,255,0.25)', textTransform: 'uppercase' }}>{label}</span>
                <span className="font-mono" style={{ fontSize: 10, letterSpacing: '0.1em', color: 'rgba(255,255,255,0.5)', textAlign: 'right' }}>{value}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Bottom bar */}
        <motion.div className="flex-shrink-0 pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4"
          style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.6 }}>
          <span className="font-mono" style={{ fontSize: 9, letterSpacing: '0.25em', color: 'rgba(255,255,255,0.18)', textTransform: 'uppercase' }}>
            © 2024 MA Interaction Design Dissertation
          </span>
          <div className="flex items-center gap-2">
            <div className="w-4 h-px bg-lime" />
            <span className="font-mono text-lime" style={{ fontSize: 9, letterSpacing: '0.25em', textTransform: 'uppercase' }}>Beyou Platform</span>
          </div>
        </motion.div>
      </div>

      {/* Ghost word */}
      <div className="absolute left-0 bottom-0 pointer-events-none select-none" style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 800, fontSize: 'clamp(120px, 18vw, 300px)', lineHeight: 0.85, color: 'rgba(255,255,255,0.015)', letterSpacing: '-0.05em' }}>
        END
      </div>
    </footer>
  )
}
