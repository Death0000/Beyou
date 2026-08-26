import { useState, useRef, useEffect, useCallback } from 'react'
import { motion, AnimatePresence, useMotionValue, animate } from 'framer-motion'

export type HeroCarouselItem = {
  title: string
  subtitle: string
  image: string
  credit: string
  meta: string[]
  accent: string
}

type Props = {
  items: HeroCarouselItem[]
  defaultIndex?: number
  brand?: string
}

const CARD_W   = 252
const CARD_GAP = 10
const STEP     = CARD_W + CARD_GAP
const EASE     = [0.32, 0, 0.18, 1] as [number, number, number, number]

export default function HeroCarousel({ items, defaultIndex = 0, brand }: Props) {
  const [active, setActive]   = useState(defaultIndex)
  const activeRef             = useRef(defaultIndex)
  const containerRef          = useRef<HTMLDivElement>(null)
  const x                     = useMotionValue(0)
  const dragging              = useRef(false)

  useEffect(() => { activeRef.current = active }, [active])

  const go = useCallback((next: number) => {
    const n = Math.max(0, Math.min(items.length - 1, next))
    activeRef.current = n
    setActive(n)
    animate(x, -(n * STEP), { duration: 0.72, ease: EASE })
  }, [items.length, x])

  /* ── Keyboard ── */
  useEffect(() => {
    const fn = (e: KeyboardEvent) => {
      const tag = (document.activeElement as HTMLElement)?.tagName
      if (tag === 'INPUT' || tag === 'TEXTAREA') return
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') go(activeRef.current + 1)
      if (e.key === 'ArrowLeft'  || e.key === 'ArrowUp')   go(activeRef.current - 1)
    }
    window.addEventListener('keydown', fn)
    return () => window.removeEventListener('keydown', fn)
  }, [go])

  /* ── Wheel: only intercept horizontal scroll for left/right navigation.
   *  Never preventDefault on vertical — lets the page scroll freely.     ── */
  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    let cd = false
    const fn = (e: WheelEvent) => {
      const isHorizontal = Math.abs(e.deltaX) > Math.abs(e.deltaY)
      if (!isHorizontal) return        // let vertical wheel pass through
      e.preventDefault()
      if (cd) return
      if (e.deltaX > 25)       go(activeRef.current + 1)
      else if (e.deltaX < -25) go(activeRef.current - 1)
      cd = true
      setTimeout(() => { cd = false }, 700)
    }
    el.addEventListener('wheel', fn, { passive: false })
    return () => el.removeEventListener('wheel', fn)
  }, [go])

  const item = items[active]

  return (
    <div
      ref={containerRef}
      className="relative overflow-hidden"
      style={{ height: '100svh', backgroundColor: '#050505', userSelect: 'none' }}
    >
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none" style={{ background: `radial-gradient(ellipse 75% 65% at 55% 38%, ${item.accent}1e 0%, transparent 68%)`, transition: 'background 1s ease' }} />
      <div className="absolute pointer-events-none" style={{ left: '28%', top: '4%', width: '52%', height: '54%', borderRadius: '50%', backgroundColor: item.accent, opacity: 0.055, filter: 'blur(90px)', transition: 'background-color 1s ease' }} />

      {/* Brand */}
      {brand && (
        <div className="absolute z-20" style={{ top: 76, left: 56 }}>
          <span className="font-mono uppercase" style={{ fontSize: 9, letterSpacing: '0.38em', color: 'rgba(255,255,255,0.28)' }}>{brand}</span>
        </div>
      )}

      {/* ── Strip
       *  drag="x" is on the STRIP itself — Framer Motion distinguishes taps
       *  from drags internally, so child onClick fires on a clean tap and
       *  onDragEnd fires on a swipe. No pointer-event overlay needed.
       * ── */}
      <div className="absolute inset-0" style={{ paddingTop: 80, paddingBottom: 56, overflow: 'hidden' }}>
        <motion.div
          className="flex items-start h-full"
          style={{
            x,
            gap: CARD_GAP,
            paddingLeft:  `calc(50vw - ${CARD_W / 2}px)`,
            paddingRight: `calc(50vw - ${CARD_W / 2}px)`,
            cursor: 'grab',
            touchAction: 'pan-y',
          }}
          drag="x"
          dragElastic={0.06}
          dragMomentum={false}
          onDragStart={() => { dragging.current = true }}
          onDragEnd={(_, info) => {
            // Allow onClick to check this ref; clear after a tick
            setTimeout(() => { dragging.current = false }, 60)
            if (info.offset.x < -40)      go(activeRef.current + 1)
            else if (info.offset.x > 40)  go(activeRef.current - 1)
            else animate(x, -(activeRef.current * STEP), { duration: 0.45, ease: 'easeOut' })
          }}
        >
          {items.map((it, i) => {
            const isActive = i === active
            return (
              <motion.div
                key={i}
                className="relative flex-shrink-0 overflow-hidden"
                style={{ width: CARD_W, borderRadius: 18, cursor: isActive ? 'default' : 'pointer' }}
                animate={{ height: isActive ? 'calc(100svh - 136px)' : 'calc(50svh - 68px)' }}
                transition={{ duration: 0.78, ease: EASE }}
                onClick={() => { if (!dragging.current) go(i) }}
              >
                <img
                  src={it.image} alt={it.title} draggable={false}
                  className="absolute inset-0 w-full h-full object-cover"
                  style={{ filter: isActive ? 'brightness(0.75) saturate(0.9)' : 'brightness(0.36) saturate(0.4)', transition: 'filter 0.75s ease', pointerEvents: 'none' }}
                />
                <div className="absolute inset-0 pointer-events-none" style={{ background: isActive ? 'linear-gradient(to bottom, transparent 30%, rgba(0,0,0,0.88) 100%)' : 'linear-gradient(to bottom, rgba(0,0,0,0.18) 0%, rgba(0,0,0,0.78) 100%)', transition: 'background 0.75s ease' }} />

                {/* Accent top border */}
                <motion.div className="absolute top-0 left-0 right-0 pointer-events-none"
                  style={{ height: 2, backgroundColor: it.accent, transformOrigin: 'left', borderRadius: '18px 18px 0 0' }}
                  animate={{ scaleX: isActive ? 1 : 0, opacity: isActive ? 1 : 0 }}
                  transition={{ duration: 0.48, delay: isActive ? 0.22 : 0 }}
                />

                {/* Index */}
                <div className="absolute pointer-events-none" style={{ top: 16, left: 16 }}>
                  <span className="font-mono" style={{ fontSize: 9, letterSpacing: '0.22em', color: isActive ? it.accent : 'rgba(255,255,255,0.22)' }}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>

                {/* Text */}
                <div className="absolute bottom-0 left-0 right-0 pointer-events-none" style={{ padding: '0 20px 22px' }}>
                  <h3 className="font-display font-extrabold text-white"
                    style={{ fontSize: isActive ? 28 : 13, lineHeight: 1.0, letterSpacing: '-0.025em', whiteSpace: 'pre-line', transition: 'font-size 0.5s ease' }}>
                    {it.title}
                  </h3>
                  <AnimatePresence>
                    {isActive && (
                      <motion.div key="meta"
                        initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 6 }}
                        transition={{ duration: 0.36, delay: 0.16 }}>
                        {it.subtitle && (
                          <p className="font-mono" style={{ fontSize: 10, color: 'rgba(255,255,255,0.42)', letterSpacing: '0.03em', lineHeight: 1.7, marginTop: 10, maxWidth: 210 }}>
                            {it.subtitle}
                          </p>
                        )}
                        <div className="flex flex-wrap gap-3" style={{ marginTop: 12 }}>
                          {it.meta.map((m, j) => (
                            <span key={j} className="font-mono uppercase" style={{ fontSize: 7.5, letterSpacing: '0.22em', color: 'rgba(255,255,255,0.25)' }}>{m}</span>
                          ))}
                        </div>
                        <p className="font-mono uppercase" style={{ fontSize: 7.5, letterSpacing: '0.18em', color: it.accent, marginTop: 6 }}>{it.credit}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>

      {/* Bottom dots + counter */}
      <div className="absolute z-20 flex items-center justify-between" style={{ bottom: 28, left: 56, right: 56 }}>
        <div className="flex items-center gap-2">
          {items.map((_, i) => (
            <button key={i} onClick={() => go(i)} style={{ width: i === active ? 22 : 5, height: 4, borderRadius: 9999, backgroundColor: i === active ? item.accent : 'rgba(255,255,255,0.18)', border: 'none', cursor: 'pointer', padding: 0, transition: 'all 0.4s ease' }} />
          ))}
        </div>
        <div className="flex items-center gap-2.5">
          <span className="font-mono" style={{ fontSize: 12, letterSpacing: '0.08em', color: item.accent }}>{String(active + 1).padStart(2, '0')}</span>
          <div style={{ width: 24, height: 1, backgroundColor: 'rgba(255,255,255,0.12)' }} />
          <span className="font-mono" style={{ fontSize: 12, letterSpacing: '0.08em', color: 'rgba(255,255,255,0.22)' }}>{String(items.length).padStart(2, '0')}</span>
        </div>
      </div>

      {/* Side arrow buttons */}
      <div className="hidden md:flex flex-col gap-1 absolute z-20" style={{ right: 18, top: '50%', transform: 'translateY(-50%)' }}>
        {([{ d: -1, ch: '↑' }, { d: 1, ch: '↓' }] as const).map(({ d, ch }) => {
          const off = d < 0 ? active === 0 : active === items.length - 1
          return (
            <button key={ch} onClick={() => go(active + d)} disabled={off}
              style={{ background: 'none', border: 'none', cursor: off ? 'default' : 'pointer', color: off ? 'rgba(255,255,255,0.08)' : 'rgba(255,255,255,0.35)', fontSize: 15, padding: '5px 10px', transition: 'color 0.2s' }}
              onMouseEnter={e => { if (!off) (e.currentTarget as HTMLElement).style.color = '#fff' }}
              onMouseLeave={e => { if (!off) (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.35)' }}
            >{ch}</button>
          )
        })}
      </div>
    </div>
  )
}
