import { useRef } from 'react'
import type { ReactNode, MouseEvent } from 'react'
import { motion, useMotionValue, useSpring, useReducedMotion } from 'framer-motion'

type Props = {
  href: string
  children: ReactNode
  variant?: 'primary' | 'ghost'
  target?: string
  rel?: string
}

export default function MagneticButton({ href, children, variant = 'primary', target, rel }: Props) {
  const ref = useRef<HTMLAnchorElement>(null)
  const reduceMotion = useReducedMotion()

  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 200, damping: 15, mass: 0.4 })
  const springY = useSpring(y, { stiffness: 200, damping: 15, mass: 0.4 })

  function handleMove(e: MouseEvent<HTMLAnchorElement>) {
    if (reduceMotion || !ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const relX = e.clientX - rect.left - rect.width / 2
    const relY = e.clientY - rect.top - rect.height / 2
    x.set(relX * 0.35)
    y.set(relY * 0.35)
  }

  function handleLeave() {
    x.set(0)
    y.set(0)
  }

  const base =
    'inline-flex items-center gap-2 rounded-full px-7 py-3.5 font-body font-semibold text-[15px] transition-colors duration-200 active:scale-[0.97]'
  const styles =
    variant === 'primary'
      ? 'bg-signal text-ink hover:bg-signal-dim'
      : 'border border-ink-line text-paper hover:border-paper-dim'

  return (
    <motion.a
      ref={ref}
      href={href}
      target={target}
      rel={rel}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ x: springX, y: springY }}
      className={`${base} ${styles}`}
    >
      {children}
    </motion.a>
  )
}
