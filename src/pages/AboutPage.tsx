import { Nav } from '../components/Nav'
import HeroCarousel from '../components/HeroCarousel'
import { motion } from 'framer-motion'
import { Link } from 'react-router'
import profileImg from '../imports/profile.jpg'

const ITEMS = [
  {
    title: 'The\nResearcher',
    subtitle: 'An MA dissertation exploring how artificial intelligence is fundamentally reshaping what it means to be a designer.',
    image: 'https://images.unsplash.com/photo-1772529406441-4ae401133054?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    credit: 'MA Interaction Design · 2024',
    meta: ['Research', 'IxD', '12,000 words'],
    accent: '#C7FF4A',
  },
  {
    title: 'The\nPipeline',
    subtitle: 'AI is collapsing the design pipeline — from brief to final output — from months of effort into hours of iteration.',
    image: 'https://images.unsplash.com/photo-1498262257252-c282316270bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    credit: 'Chapter 02 — New Pipeline',
    meta: ['Workflow', 'AI Tools', 'Process'],
    accent: '#E8375A',
  },
  {
    title: 'The\nStudio',
    subtitle: 'The most valuable designers of the next decade will be those who own the platforms and products they create.',
    image: 'https://images.unsplash.com/photo-1779912217758-f334564f8502?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    credit: 'Chapter 03 — Business of Design',
    meta: ['Ownership', 'Startups', 'Economy'],
    accent: '#60A5FA',
  },
  {
    title: 'The\nPlatform',
    subtitle: 'Beyou — a collaboration platform purpose-built for designers who are ready to become founders and builders.',
    image: 'https://images.unsplash.com/photo-1768088989406-faa0d8258122?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    credit: 'Chapter 04 — Beyou Platform',
    meta: ['Platform', 'SaaS', 'Design'],
    accent: '#A78BFA',
  },
  {
    title: 'The\nFuture',
    subtitle: 'Designers who learn to build, own, and operate the systems they create will define the next era of the profession.',
    image: 'https://images.unsplash.com/photo-1546349851-64285be8e9fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    credit: 'Conclusion — Future Vision',
    meta: ['Future', '2025+', 'Vision'],
    accent: '#F59E0B',
  },
]

const EASE = [0.16, 1, 0.3, 1] as const

const SOCIALS = [
  { label: 'LinkedIn',  href: '#', icon: 'in' },
  { label: 'Instagram', href: '#', icon: 'ig' },
  { label: 'YouTube',   href: '#', icon: 'yt' },
  { label: 'Facebook',  href: '#', icon: 'fb' },
]

const TAGS = ['AI Research', 'UI/UX', 'Interaction Design']

const EDU = [
  { degree: 'MA', field: 'Design (Interaction)' },
  { degree: 'BCA', field: 'Computer Applications' },
]

function WhoIAm() {
  return (
    <section style={{ backgroundColor: '#050505', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
      <div className="px-8 md:px-14 max-w-6xl mx-auto w-full" style={{ paddingTop: 96, paddingBottom: 96 }}>

        {/* Label */}
        <motion.p
          className="font-mono uppercase mb-14"
          style={{ fontSize: 10, letterSpacing: '0.42em', color: 'rgba(255,255,255,0.28)' }}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Who I Am
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* ── Left: single photo + name card ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.85, ease: EASE }}
          >
            {/* Photo */}
            <div className="relative overflow-hidden" style={{ borderRadius: 20, aspectRatio: '4/5', maxWidth: 400 }}>
              <img
                src={profileImg}
                alt="Sahil Khan"
                draggable={false}
                className="w-full h-full object-cover"
                style={{ filter: 'brightness(0.88) saturate(0.85)' }}
              />
              {/* Lime accent bar */}
              <div className="absolute top-0 left-0 right-0" style={{ height: 3, backgroundColor: '#C7FF4A', borderRadius: '20px 20px 0 0' }} />
              {/* Name overlay at bottom */}
              <div className="absolute bottom-0 left-0 right-0" style={{ padding: '40px 24px 24px', background: 'linear-gradient(to top, rgba(5,5,5,0.95) 0%, transparent 100%)' }}>
                <p className="font-display font-extrabold text-white" style={{ fontSize: 22, letterSpacing: '-0.02em', lineHeight: 1 }}>
                  SAHIL KHAN
                </p>
                <p className="font-mono" style={{ fontSize: 9, letterSpacing: '0.24em', color: '#C7FF4A', marginTop: 6, textTransform: 'uppercase' }}>
                  Interaction Designer · UI/UX
                </p>
              </div>
            </div>

            {/* Education badges below photo */}
            <div className="flex flex-wrap gap-2" style={{ marginTop: 16, maxWidth: 400 }}>
              {EDU.map(e => (
                <div key={e.degree} className="flex items-center gap-2" style={{ backgroundColor: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 8, padding: '8px 14px' }}>
                  <span className="font-display font-extrabold" style={{ fontSize: 11, color: '#C7FF4A', letterSpacing: '-0.01em' }}>{e.degree}</span>
                  <span className="font-mono" style={{ fontSize: 9, color: 'rgba(255,255,255,0.38)', letterSpacing: '0.06em' }}>{e.field}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ── Right: bio, tags, socials, CTA ── */}
          <div className="flex flex-col justify-between gap-10">

            {/* Headline */}
            <div>
              <div className="overflow-hidden mb-1">
                <motion.h2
                  className="font-display font-extrabold text-white"
                  style={{ fontSize: 'clamp(26px, 3.2vw, 52px)', lineHeight: 0.95, letterSpacing: '-0.03em' }}
                  initial={{ y: '110%' }}
                  whileInView={{ y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, ease: EASE }}
                >
                  Designing at the
                </motion.h2>
              </div>
              <div className="overflow-hidden mb-1">
                <motion.h2
                  className="font-editorial italic"
                  style={{ fontSize: 'clamp(26px, 3.2vw, 52px)', lineHeight: 0.95, letterSpacing: '-0.01em', color: '#C7FF4A' }}
                  initial={{ y: '110%' }}
                  whileInView={{ y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, delay: 0.07, ease: EASE }}
                >
                  intersection of people,
                </motion.h2>
              </div>
              <div className="overflow-hidden">
                <motion.h2
                  className="font-display font-extrabold text-white"
                  style={{ fontSize: 'clamp(26px, 3.2vw, 52px)', lineHeight: 0.95, letterSpacing: '-0.03em' }}
                  initial={{ y: '110%' }}
                  whileInView={{ y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, delay: 0.14, ease: EASE }}
                >
                  technology &amp; AI.
                </motion.h2>
              </div>
            </div>

            {/* Bio */}
            <motion.p
              className="font-mono"
              style={{ fontSize: 12, color: 'rgba(255,255,255,0.38)', lineHeight: 2, letterSpacing: '0.02em', maxWidth: 520 }}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {"I'm Sahil Khan, an Interaction Designer with a background in computer applications and a strong interest in how people interact with digital products, emerging technologies and intelligent systems. My approach sits between design, technology and human behaviour — I enjoy taking complex problems, understanding the people behind them, and transforming ideas into clear, intuitive and engaging digital experiences."}
            </motion.p>

            {/* Skill tags */}
            <motion.div
              className="flex flex-wrap gap-2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {TAGS.map(t => (
                <span key={t} className="font-mono uppercase" style={{ fontSize: 9, letterSpacing: '0.22em', padding: '6px 12px', borderRadius: 6, backgroundColor: 'rgba(199,255,74,0.08)', border: '1px solid rgba(199,255,74,0.2)', color: '#C7FF4A' }}>
                  {t}
                </span>
              ))}
            </motion.div>

            {/* Divider */}
            <div style={{ height: 1, backgroundColor: 'rgba(255,255,255,0.06)' }} />

            {/* Socials + CTA row */}
            <motion.div
              className="flex flex-col sm:flex-row sm:items-center gap-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <div>
                <p className="font-mono uppercase mb-3" style={{ fontSize: 9, letterSpacing: '0.3em', color: 'rgba(255,255,255,0.2)' }}>
                  Find me on
                </p>
                <div className="flex items-center gap-4">
                  {SOCIALS.map(s => (
                    <a
                      key={s.label} href={s.href}
                      className="font-mono uppercase transition-colors duration-200"
                      style={{ fontSize: 9, letterSpacing: '0.22em', color: 'rgba(255,255,255,0.3)', textDecoration: 'none' }}
                      onMouseEnter={e => (e.currentTarget.style.color = '#C7FF4A')}
                      onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.3)')}
                    >
                      {s.label}
                    </a>
                  ))}
                </div>
              </div>

              <div className="sm:ml-auto">
                <p className="font-mono mb-3" style={{ fontSize: 10, color: 'rgba(255,255,255,0.22)', letterSpacing: '0.04em' }}>
                  Ready to create meaningful digital experiences?
                </p>
                <a
                  href="mailto:hello@sahilkhan.design"
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: 8,
                    padding: '12px 22px', borderRadius: 10,
                    backgroundColor: '#C7FF4A', color: '#050505',
                    fontSize: 11, fontWeight: 800, letterSpacing: '0.08em',
                    textDecoration: 'none', fontFamily: "'Bricolage Grotesque',sans-serif",
                    textTransform: 'uppercase',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#b8f032')}
                  onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#C7FF4A')}
                >
                  Get in touch →
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function AboutPage() {
  return (
    <div style={{ backgroundColor: '#050505', minHeight: '100svh' }}>
      <Nav />

      {/* ── Hero carousel ── */}
      <HeroCarousel items={ITEMS} defaultIndex={0} brand="About this Research" />

      {/* ── Who I Am ── */}
      <WhoIAm />

      {/* ── Below-fold: dissertation overview ── */}
      <section style={{ backgroundColor: '#050505', padding: '100px 0 80px' }}>
        <div className="px-8 md:px-14">

          {/* Section label */}
          <motion.div
            className="flex items-center gap-3 mb-12"
            style={{ borderBottom: '1px solid rgba(255,255,255,0.06)', paddingBottom: 16 }}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="font-mono uppercase" style={{ fontSize: 10, letterSpacing: '0.42em', color: '#C7FF4A' }}>
              The Research
            </span>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">

            {/* Left: Thesis statement */}
            <div>
              <div className="overflow-hidden mb-2">
                <motion.h2
                  className="font-display font-extrabold text-white"
                  style={{ fontSize: 'clamp(28px, 3.8vw, 58px)', lineHeight: 0.93, letterSpacing: '-0.03em' }}
                  initial={{ y: '110%' }}
                  whileInView={{ y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.95, ease: EASE }}
                >
                  Design is no longer
                </motion.h2>
              </div>
              <div className="overflow-hidden">
                <motion.h2
                  className="font-editorial italic"
                  style={{ fontSize: 'clamp(28px, 3.8vw, 58px)', lineHeight: 0.93, letterSpacing: '-0.01em', color: '#C7FF4A' }}
                  initial={{ y: '110%' }}
                  whileInView={{ y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.95, delay: 0.1, ease: EASE }}
                >
                  just making things.
                </motion.h2>
              </div>

              <motion.p
                className="font-mono"
                style={{ fontSize: 12, color: 'rgba(255,255,255,0.38)', lineHeight: 1.9, letterSpacing: '0.02em', marginTop: 28, maxWidth: 480 }}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.25 }}
              >
                This dissertation argues that artificial intelligence has fundamentally altered the role of the designer — not by replacing creativity, but by compressing the distance between idea and execution. The designer who understands this shift will no longer just be a maker. They will be an owner, an operator, and a founder.
              </motion.p>

              <motion.div
                className="flex items-center gap-4"
                style={{ marginTop: 36 }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.4 }}
              >
                <Link
                  to="/auth"
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: 8,
                    padding: '12px 26px', borderRadius: 12,
                    backgroundColor: '#C7FF4A', color: '#050505',
                    fontSize: 12, fontWeight: 800, letterSpacing: '0.06em',
                    textDecoration: 'none', fontFamily: "'Bricolage Grotesque',sans-serif",
                  }}
                >
                  Join the Platform →
                </Link>
                <Link
                  to="/"
                  style={{
                    fontSize: 11, fontFamily: "'DM Mono',monospace",
                    letterSpacing: '0.14em', color: 'rgba(255,255,255,0.3)',
                    textDecoration: 'none', textTransform: 'uppercase',
                  }}
                >
                  ← Back to Dissertation
                </Link>
              </motion.div>
            </div>

            {/* Right: Chapter index */}
            <div>
              <motion.p
                className="font-mono uppercase mb-8"
                style={{ fontSize: 9, letterSpacing: '0.3em', color: 'rgba(255,255,255,0.22)' }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Chapters
              </motion.p>

              <div className="flex flex-col">
                {[
                  { n: '01', title: 'The Changing Pipeline',   sub: 'How AI compresses design workflow from months to hours',       accent: '#C7FF4A' },
                  { n: '02', title: 'The Business of Design',  sub: 'Why ownership is the next frontier for creative professionals', accent: '#E8375A' },
                  { n: '03', title: 'AI as Co-Creator',        sub: 'From tool to collaborator — a new creative relationship',       accent: '#60A5FA' },
                  { n: '04', title: 'Beyou Platform',          sub: 'Building the infrastructure for the designer-founder',          accent: '#A78BFA' },
                  { n: '05', title: 'Future Vision',           sub: 'What the next generation of design practice looks like',        accent: '#F59E0B' },
                ].map((ch, i) => (
                  <motion.div
                    key={ch.n}
                    className="flex gap-5 py-5 group"
                    style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}
                    initial={{ opacity: 0, x: 16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.08 + 0.3 }}
                  >
                    <span className="font-mono flex-shrink-0" style={{ fontSize: 9, letterSpacing: '0.18em', color: ch.accent, paddingTop: 3 }}>
                      {ch.n}
                    </span>
                    <div>
                      <p className="font-display font-bold text-white" style={{ fontSize: 14, letterSpacing: '-0.01em', marginBottom: 4, fontFamily: "'Bricolage Grotesque',sans-serif" }}>
                        {ch.title}
                      </p>
                      <p className="font-mono" style={{ fontSize: 10, color: 'rgba(255,255,255,0.3)', letterSpacing: '0.02em', lineHeight: 1.6 }}>
                        {ch.sub}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer strip ── */}
      <div
        className="flex items-center justify-between px-8 md:px-14 py-8"
        style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}
      >
        <span className="font-mono uppercase" style={{ fontSize: 9, letterSpacing: '0.28em', color: 'rgba(255,255,255,0.18)' }}>
          MA Interaction Design · 2024
        </span>
        <span className="font-mono uppercase" style={{ fontSize: 9, letterSpacing: '0.28em', color: 'rgba(255,255,255,0.18)' }}>
          Beyou Platform
        </span>
      </div>
    </div>
  )
}
