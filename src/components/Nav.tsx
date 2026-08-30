import MagneticButton from './MagneticButton'

export default function Nav() {
  return (
    <header className="fixed top-0 z-40 w-full border-b border-ink-line/60 bg-ink/70 backdrop-blur-md">
      <nav className="mx-auto flex h-[72px] max-w-[1160px] items-center justify-between px-6 md:px-10">
        <a href="#top" className="flex items-center gap-2.5 font-display text-[15px] font-semibold">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-signal text-[13px] font-bold text-ink">
            AD
          </span>
          Aditya Dhanawade
        </a>
        <ul className="hidden items-center gap-8 text-sm font-medium text-paper-dim md:flex">
          <li><a href="#work" className="transition-colors hover:text-paper">Work</a></li>
          <li><a href="#about" className="transition-colors hover:text-paper">About</a></li>
        </ul>
        <MagneticButton href="#contact" variant="ghost">
          Contact
        </MagneticButton>
      </nav>
    </header>
  )
}
