import { motion, useScroll, useTransform } from 'framer-motion'
import { Link, useLocation } from 'react-router'

const LINKS = [
  { label: 'Home',    to: '/' },
  { label: 'About',   to: '/about' },
  { label: 'Contact', to: '/contact' },
]

export function Nav() {
  const { scrollYProgress } = useScroll()
  const backdropOpacity = useTransform(scrollYProgress, [0, 0.04], [0, 1])
  const lineWidth       = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])
  const location = useLocation()

  return (
    <nav className="fixed top-0 left-0 right-0 z-[900] h-14 overflow-hidden">
      <motion.div
        className="absolute inset-0 backdrop-blur-xl"
        style={{
          opacity: backdropOpacity,
          backgroundColor: 'rgba(5,5,5,0.85)',
          borderBottom: '1px solid rgba(255,255,255,0.05)',
        }}
      />

      <div className="relative h-full flex items-center justify-between px-8 md:px-14 gap-4">
        {/* Wordmark */}
        <Link
          to="/"
          style={{ textDecoration: 'none' }}
        >
          <span
            className="font-mono text-[10px] tracking-[0.28em] uppercase whitespace-nowrap"
            style={{ color: 'rgba(255,255,255,0.38)' }}
          >
            Beyou
          </span>
        </Link>

        {/* Nav links */}
        <div className="flex items-center gap-7 md:gap-10">
          {LINKS.map(({ label, to }) => {
            const active = location.pathname === to
            return (
              <Link
                key={to}
                to={to}
                className="font-mono text-[9px] tracking-[0.22em] uppercase transition-colors duration-300"
                style={{
                  color: active ? 'rgba(255,255,255,0.85)' : 'rgba(255,255,255,0.28)',
                  textDecoration: 'none',
                  position: 'relative',
                }}
                onMouseEnter={e => { if (!active) (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(255,255,255,0.75)' }}
                onMouseLeave={e => { if (!active) (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(255,255,255,0.28)' }}
              >
                {label}
                {active && (
                  <motion.div
                    layoutId="nav-active"
                    className="absolute -bottom-[22px] left-0 right-0 h-px bg-lime"
                    transition={{ duration: 0.35, ease: [0.32, 0, 0.18, 1] }}
                  />
                )}
              </Link>
            )
          })}
        </div>

        {/* CTA */}
        <Link
          to="/auth"
          className="font-mono text-[9px] tracking-[0.22em] uppercase transition-all duration-300"
          style={{
            color: '#050505',
            backgroundColor: '#C7FF4A',
            textDecoration: 'none',
            padding: '6px 14px',
            borderRadius: 6,
            fontWeight: 600,
          }}
          onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#b8f032' }}
          onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#C7FF4A' }}
        >
          Join →
        </Link>
      </div>

      <motion.div
        className="absolute bottom-0 left-0 h-px bg-lime opacity-30"
        style={{ width: lineWidth }}
      />
    </nav>
  )
}
