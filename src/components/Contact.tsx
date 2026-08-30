import { motion } from 'framer-motion'
import MagneticButton from './MagneticButton'

export default function Contact() {
  return (
    <footer id="contact" className="border-t border-ink-line bg-ink-raised">
      <div className="mx-auto max-w-[1160px] px-6 py-24 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end"
        >
          <div>
            <h2 className="text-[30px] font-semibold md:text-[40px]">Let's talk</h2>
            <p className="mt-3 max-w-[46ch] text-[15.5px] text-paper-dim">
              Open to full-stack and UI/UX roles, internships, and freelance work.
            </p>
          </div>
          <MagneticButton href="mailto:avdhanawade94@gmail.com">
            Email me
          </MagneticButton>
        </motion.div>

        <div className="mt-16 flex flex-col items-start justify-between gap-6 border-t border-ink-line pt-8 text-[13.5px] text-paper-dim md:flex-row md:items-center">
          <ul className="flex flex-wrap gap-6 font-medium">
            <li><a href="mailto:avdhanawade94@gmail.com" className="transition-colors hover:text-signal">avdhanawade94@gmail.com</a></li>
            <li><a href="https://www.linkedin.com/in/aditya-dhanawade-07004a317/" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-signal">LinkedIn</a></li>
            <li><a href="https://github.com/adityadhanawade" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-signal">GitHub</a></li>
          </ul>
          <div className="flex gap-6">
            <span>© 2026 Aditya Dhanawade</span>
            <span>Pune, India</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
