import { useRef } from 'react'
import type { ReactNode, MouseEvent } from 'react'
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from 'framer-motion'

export default function TiltCard({
  children,
  className = '',
}: {
  children: ReactNode
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const reduceMotion = useReducedMotion()

  const px = useMotionValue(0.5)
  const py = useMotionValue(0.5)
  const springConfig = { stiffness: 150, damping: 18, mass: 0.4 }
  const sx = useSpring(px, springConfig)
  const sy = useSpring(py, springConfig)

  const rotateX = useTransform(sy, [0, 1], [7, -7])
  const rotateY = useTransform(sx, [0, 1], [-7, 7])

  function handleMove(e: MouseEvent<HTMLDivElement>) {
    if (reduceMotion || !ref.current) return
    const rect = ref.current.getBoundingClientRect()
    px.set((e.clientX - rect.left) / rect.width)
    py.set((e.clientY - rect.top) / rect.height)
  }

  function handleLeave() {
    px.set(0.5)
    py.set(0.5)
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ rotateX, rotateY, transformPerspective: 900 }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
