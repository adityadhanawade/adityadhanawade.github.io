import { useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import MagneticButton from './MagneticButton'

const links = [
  { href: '#work', label: 'Work' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)
  const reduceMotion = useReducedMotion()

  return (
    <header className="fixed top-0 z-40 w-full border-b border-ink-line/60 bg-ink/70 backdrop-blur-md">
      <nav className="mx-auto flex h-[72px] max-w-[1160px] items-center justify-between px-6 md:px-10">
        <a href="#top" className="flex items-center gap-2.5 font-display text-[15px] font-semibold" onClick={() => setOpen(false)}>
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-signal text-[13px] font-bold text-ink">
            AD
          </span>
          Aditya Dhanawade
        </a>

        <ul className="hidden items-center gap-8 text-sm font-medium text-paper-dim md:flex">
          <li><a href="#work" className="transition-colors hover:text-paper">Work</a></li>
          <li><a href="#about" className="transition-colors hover:text-paper">About</a></li>
        </ul>
        <div className="hidden md:block">
          <MagneticButton href="#contact" variant="ghost">
            Contact
          </MagneticButton>
        </div>

        <button
          type="button"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-ink-line text-paper md:hidden"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={reduceMotion ? undefined : { height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={reduceMotion ? undefined : { height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-b border-ink-line/60 bg-ink/95 backdrop-blur-md md:hidden"
          >
            <ul className="flex flex-col gap-1 px-6 py-4 text-base font-medium text-paper">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-2 py-3 transition-colors hover:bg-ink-raised hover:text-signal"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
