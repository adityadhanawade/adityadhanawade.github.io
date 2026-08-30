import { motion } from 'framer-motion'

const stack = ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Kotlin', 'Java', 'Android', 'Figma']

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-[1160px] px-6 py-24 md:px-10">
      <div className="grid grid-cols-1 gap-14 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-[28px] font-semibold md:text-[34px]">About</h2>
          <p className="mt-5 max-w-[52ch] text-[16px] leading-relaxed text-paper-dim">
            I'm a third-year B.Tech CSE student in Pune, working across full-stack web
            development and UI/UX design. I like taking a product through the whole
            process: research, design, and code.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h3 className="text-[12px] font-semibold tracking-[0.1em] text-paper-dim uppercase">
            Stack
          </h3>
          <div className="mt-4 flex flex-wrap gap-2.5">
            {stack.map((item, i) => (
              <motion.span
                key={item}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.04 }}
                className="rounded-full border border-ink-line bg-ink-raised px-4 py-1.5 text-[13.5px] font-medium"
              >
                {item}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
