import { useEffect } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'

export function CustomCursor() {
  const mx = useMotionValue(-200)
  const my = useMotionValue(-200)

  const fastX = useSpring(mx, { stiffness: 700, damping: 60 })
  const fastY = useSpring(my, { stiffness: 700, damping: 60 })
  const slowX = useSpring(mx, { stiffness: 90, damping: 22 })
  const slowY = useSpring(my, { stiffness: 90, damping: 22 })

  const dX = useTransform(fastX, (v) => v - 4)
  const dY = useTransform(fastY, (v) => v - 4)
  const aX = useTransform(slowX, (v) => v - 20)
  const aY = useTransform(slowY, (v) => v - 20)

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mx.set(e.clientX)
      my.set(e.clientY)
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [mx, my])

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[99999]"
        style={{ x: dX, y: dY, width: 8, height: 8 }}
      >
        <div className="w-full h-full rounded-full bg-lime" />
      </motion.div>
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[99998]"
        style={{ x: aX, y: aY, width: 40, height: 40 }}
      >
        <div
          className="w-full h-full rounded-full"
          style={{ border: '1px solid rgba(255,255,255,0.18)' }}
        />
      </motion.div>
    </>
  )
}
