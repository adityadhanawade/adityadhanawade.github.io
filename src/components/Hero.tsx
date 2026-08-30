import { lazy, Suspense } from 'react'
import { motion } from 'framer-motion'
import MagneticButton from './MagneticButton'

const Hero3D = lazy(() => import('./Hero3D'))

export default function Hero() {
  return (
    <section id="top" className="relative mx-auto grid max-w-[1160px] grid-cols-1 items-center gap-10 px-6 pt-[150px] pb-20 md:grid-cols-[1.15fr_0.85fr] md:px-10 md:pb-28">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        <h1 className="text-[38px] leading-[1.08] font-semibold tracking-tight md:text-[58px]">
          Research-driven design.
          <br />
          Production-grade code.
        </h1>
        <p className="mt-6 max-w-[46ch] text-[17px] leading-relaxed text-paper-dim">
          Full-stack developer and UI/UX designer in Pune. I take products from
          user interviews to shipped code.
        </p>
        <div className="mt-9 flex flex-wrap gap-4">
          <MagneticButton href="#work">View work</MagneticButton>
          <MagneticButton href="#contact" variant="ghost">
            Get in touch
          </MagneticButton>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
        className="aspect-square w-full max-w-[420px] justify-self-center md:justify-self-end"
      >
        <Suspense fallback={<div className="h-full w-full animate-pulse rounded-full bg-ink-line/40" />}>
          <Hero3D />
        </Suspense>
      </motion.div>
    </section>
  )
}
