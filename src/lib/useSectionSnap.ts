import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'

gsap.registerPlugin(ScrollToPlugin)

/*
 * GSAP smooth section-scroll for the landing page.
 *
 * Strategy:
 *   Mouse wheel  → immediate snap to next / prev section (one click = one section)
 *   Trackpad     → accumulate delta; snap after the gesture pauses 120 ms
 *   Touch swipe  → snap on touchend when travel ≥ 50 px
 *   Keyboard     → Arrow / Space / Page keys snap one section
 *   Nav anchors  → intercepted and routed through GSAP
 *
 * GSAP power4.inOut gives the cinematic heavy-ease feel.
 */

const DURATION  = 0.95          // seconds per section transition
const EASE      = 'power4.inOut'
const SETTLE_MS = 120           // trackpad settle window

export function useSectionSnap(mainSelector = 'main') {
  const idxRef  = useRef(0)
  const busyRef = useRef(false)

  useEffect(() => {
    const getSections = (): HTMLElement[] =>
      Array.from(document.querySelectorAll(`${mainSelector} > section`))

    /* ── snap to index ── */
    function snapTo(next: number) {
      const sections = getSections()
      if (next < 0 || next >= sections.length || busyRef.current) return
      idxRef.current  = next
      busyRef.current = true

      gsap.to(window, {
        scrollTo: { y: sections[next], autoKill: false },
        duration: DURATION,
        ease: EASE,
        onComplete: () => { busyRef.current = false },
      })
    }

    /* ── closest section to viewport top ── */
    function currentIdx() {
      const sections = getSections()
      let best = 0, bestDist = Infinity
      sections.forEach((s, i) => {
        const d = Math.abs(s.getBoundingClientRect().top)
        if (d < bestDist) { bestDist = d; best = i }
      })
      return best
    }

    /* ── wheel: mouse vs trackpad ── */
    // Mouse wheels send deltaY in multiples of ~100; trackpads send many small values.
    let accumDelta  = 0
    let settleTimer: ReturnType<typeof setTimeout> | null = null

    function onWheel(e: WheelEvent) {
      e.preventDefault()
      if (busyRef.current) return

      const isMouse = !e.deltaX && Math.abs(e.deltaY) >= 100

      if (isMouse) {
        // Immediate single-click snap
        const ci = currentIdx()
        idxRef.current = ci
        snapTo(ci + (e.deltaY > 0 ? 1 : -1))
        accumDelta = 0
        return
      }

      // Trackpad: accumulate and settle
      accumDelta += e.deltaY
      if (settleTimer) clearTimeout(settleTimer)
      settleTimer = setTimeout(() => {
        if (busyRef.current) { accumDelta = 0; return }
        const ci = currentIdx()
        idxRef.current = ci
        if (accumDelta > 40)       snapTo(ci + 1)
        else if (accumDelta < -40) snapTo(ci - 1)
        accumDelta = 0
      }, SETTLE_MS)
    }

    /* ── touch ── */
    let touchStartY = 0
    function onTouchStart(e: TouchEvent) { touchStartY = e.touches[0].clientY }
    function onTouchEnd(e: TouchEvent) {
      if (busyRef.current) return
      const dy = touchStartY - e.changedTouches[0].clientY
      if (Math.abs(dy) < 50) return
      const ci = currentIdx()
      snapTo(ci + (dy > 0 ? 1 : -1))
    }

    /* ── keyboard ── */
    function onKeyDown(e: KeyboardEvent) {
      // Skip if focus is inside a text input
      const tag = (document.activeElement as HTMLElement)?.tagName
      if (tag === 'INPUT' || tag === 'TEXTAREA') return
      if (busyRef.current) return

      const ci = currentIdx()
      if (['ArrowDown', 'PageDown'].includes(e.key) || (e.key === ' ' && !e.shiftKey)) {
        e.preventDefault(); snapTo(ci + 1)
      } else if (['ArrowUp', 'PageUp'].includes(e.key) || (e.key === ' ' && e.shiftKey)) {
        e.preventDefault(); snapTo(ci - 1)
      }
    }

    /* ── nav anchor clicks ── */
    function onDocClick(e: MouseEvent) {
      const a = (e.target as Element).closest('a[href^="#"]') as HTMLAnchorElement | null
      if (!a) return
      const target = document.getElementById(a.getAttribute('href')!.slice(1))
      if (!target) return
      e.preventDefault()
      const sections = getSections()
      const i = sections.indexOf(target)
      if (i >= 0) snapTo(i)
      else gsap.to(window, { scrollTo: { y: target, autoKill: false }, duration: DURATION, ease: EASE })
    }

    window.addEventListener('wheel',      onWheel,      { passive: false })
    window.addEventListener('touchstart', onTouchStart, { passive: true })
    window.addEventListener('touchend',   onTouchEnd,   { passive: true })
    window.addEventListener('keydown',    onKeyDown)
    document.addEventListener('click',    onDocClick)

    return () => {
      window.removeEventListener('wheel',      onWheel)
      window.removeEventListener('touchstart', onTouchStart)
      window.removeEventListener('touchend',   onTouchEnd)
      window.removeEventListener('keydown',    onKeyDown)
      document.removeEventListener('click',    onDocClick)
      if (settleTimer) clearTimeout(settleTimer)
      gsap.killTweensOf(window)
    }
  }, [mainSelector])
}
