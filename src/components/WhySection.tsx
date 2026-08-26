import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1]
const HEADLINE = ['The design', 'process is', 'transforming.']
const QUOTE = [
  'Design is no longer just craft.',
  'It is strategy, systems, and the',
  'ability to orchestrate intelligence itself.',
]
const IMGS = [
  {
    src: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&h=560&fit=crop&auto=format',
    alt: 'Designer hand-sketching interface concepts',
    aspect: '4/3',
  },
  {
    src: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=500&h=500&fit=crop&auto=format',
    alt: 'Design notebooks and references',
    aspect: '1/1',
  },
  {
    src: 'https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=500&h=500&fit=crop&auto=format',
    alt: 'Whiteboard brainstorming session',
    aspect: '1/1',
  },
]

export default function WhySection() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const imgY = useTransform(scrollYProgress, [0, 1], [16, -16])

  return (
    <section
      ref={ref}
      id="s01"
      className="relative flex flex-col overflow-hidden"
      style={{
        height: '100svh',
        backgroundColor: '#050505',
      }}
    >
      <div className="flex flex-col h-full px-8 md:px-14 pt-20 pb-10">

        {/* ── TOP BAR ── */}
        <motion.div
          className="flex items-center justify-between mb-6 flex-shrink-0"
          style={{ borderBottom: '1px solid rgba(255,255,255,0.07)', paddingBottom: '16px' }}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex items-center gap-3">
            
            <span className="font-mono text-lime uppercase" style={{ fontSize: 10, letterSpacing: '0.42em' }}>
              01 — WHY
            </span>
          </div>
          <span className="font-mono uppercase hidden sm:block" style={{ fontSize: 10, letterSpacing: '0.3em', color: 'rgba(255,255,255,0.2)' }}>
            The Shifting Landscape
          </span>
        </motion.div>

        {/* ── MAIN GRID: fills remaining height ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-20 flex-1 min-h-0">

          {/* LEFT: text column, flex-col to distribute space */}
          <div className="flex flex-col justify-between min-h-0">

            {/* Headline */}
            <div>
              {HEADLINE.map((word, i) => (
                <div key={i} className="overflow-hidden">
                  <motion.h2
                    className="font-display font-extrabold text-white"
                    style={{ fontSize: 'clamp(42px, 5.5vw, 96px)', lineHeight: 0.9, letterSpacing: '-0.02em' }}
                    initial={{ y: '110%' }}
                    whileInView={{ y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.95, delay: i * 0.1, ease: EASE }}
                  >
                    {word}
                  </motion.h2>
                </div>
              ))}
            </div>

            {/* Quote */}
            <motion.div
              className="mt-0"
              style={{ borderTop: '1px solid rgba(255,255,255,0.07)', paddingTop: '20px' }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              {QUOTE.map((line, i) => (
                <div key={i} className="overflow-hidden">
                  <motion.p
                    className="font-editorial italic text-white"
                    style={{ fontSize: 'clamp(15px, 1.7vw, 26px)', lineHeight: 1.3, opacity: 0.62 }}
                    initial={{ y: '110%' }}
                    whileInView={{ y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: i * 0.11 + 0.5, ease: EASE }}
                  >
                    {line}
                  </motion.p>
                </div>
              ))}
            </motion.div>

            {/* Body + stat */}
            <motion.div
              style={{ borderTop: '1px solid rgba(255,255,255,0.07)', paddingTop: '16px' }}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              <p className="font-mono leading-relaxed" style={{ fontSize: 11, letterSpacing: '0.04em', color: 'rgba(255,255,255,0.33)', lineHeight: 1.8 }}>
                AI tools are compressing timelines, automating outputs, and shifting the
                designer&apos;s value from execution to vision. Those who understand the
                shift will define the next decade of design.
              </p>
              <div className="flex items-baseline gap-4 mt-4">
                <span className="font-display font-extrabold text-lime" style={{ fontSize: 'clamp(32px, 3.5vw, 56px)', lineHeight: 1 }}>
                  72%
                </span>
                <span className="font-mono uppercase" style={{ fontSize: 9, letterSpacing: '0.14em', color: 'rgba(255,255,255,0.28)', maxWidth: 180, lineHeight: 1.6 }}>
                  of designers say AI fundamentally changed their workflow
                </span>
              </div>
            </motion.div>
          </div>

          {/* RIGHT: image collage — fills column height */}
          <motion.div
            className="hidden lg:flex flex-col gap-3 min-h-0"
            style={{ y: imgY }}
          >
            {/* Top landscape image */}
            <motion.div
              className="relative w-full overflow-hidden flex-1 min-h-0"
              style={{ borderRadius: 4 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.2, ease: EASE }}
            >
              <img
                src={IMGS[0].src}
                alt={IMGS[0].alt}
                className="w-full h-full object-cover object-center"
                style={{ filter: 'grayscale(30%) brightness(0.65)' }}
              />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, transparent 55%, #050505 100%)' }} />
            </motion.div>

            {/* Bottom two squares */}
            <div className="grid grid-cols-2 gap-3 flex-shrink-0">
              {IMGS.slice(1).map((img, i) => (
                <motion.div
                  key={i}
                  className="relative w-full overflow-hidden"
                  style={{ aspectRatio: '1/1', borderRadius: 4 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.1, delay: 0.35 + i * 0.12, ease: EASE }}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover object-center"
                    style={{ filter: 'grayscale(35%) brightness(0.58)' }}
                  />
                  <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, transparent 45%, #050505 100%)' }} />
                </motion.div>
              ))}
            </div>

            {/* Caption */}
            <p className="font-mono flex-shrink-0" style={{ fontSize: 9, letterSpacing: '0.25em', color: 'rgba(255,255,255,0.2)', textTransform: 'uppercase' }}>
              Design process — pre-AI era
            </p>
          </motion.div>
        </div>
      </div>

      {/* Ghost numeral */}
      <div className="absolute right-0 bottom-0 pointer-events-none select-none" style={{ fontFamily: "'Bricolage Grotesque',sans-serif", fontWeight: 800, fontSize: 'clamp(120px, 16vw, 280px)', lineHeight: 0.85, color: 'rgba(255,255,255,0.02)', letterSpacing: '-0.05em' }}>01</div>
    </section>
  )
}
