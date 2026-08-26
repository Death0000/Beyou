import { useEffect } from 'react'
import gsap from 'gsap'

const LERP = 0.1

export function useSmoothScroll() {
  useEffect(() => {
    const content = document.getElementById('smooth-content')
    if (!content) return

    const setY = gsap.quickSetter(content, 'y', 'px') as (v: number) => void

    const spacer = document.createElement('div')
    spacer.setAttribute('aria-hidden', 'true')
    Object.assign(spacer.style, { pointerEvents: 'none', userSelect: 'none' })
    document.body.appendChild(spacer)

    let currentY = 0

    function updateSpacerHeight() {
      spacer.style.height = content!.scrollHeight + 'px'
    }

    function tick() {
      currentY += (window.scrollY - currentY) * LERP
      setY(-currentY)
    }

    updateSpacerHeight()
    gsap.ticker.add(tick)
    gsap.ticker.lagSmoothing(0)

    const ro = new ResizeObserver(updateSpacerHeight)
    ro.observe(content)

    return () => {
      gsap.ticker.remove(tick)
      ro.disconnect()
      spacer.remove()
      gsap.set(content, { clearProps: 'transform' })
    }
  }, [])
}
