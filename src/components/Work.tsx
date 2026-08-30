import { motion } from 'framer-motion'
import TiltCard from './TiltCard'

const projects = [
  {
    title: 'The Leverage Report',
    description:
      'A free AI-money toolkit, built solo end to end: Figma UX process through to a deployed Next.js/TypeScript app with four interactive tools and a live email backend.',
    tags: ['Next.js', 'TypeScript', 'Figma'],
    image:
      'https://raw.githubusercontent.com/adityadhanawade/leverage-report-website/master/assets/screenshots/mockup-home-desktop.png',
    link: 'https://theleveragereport.me',
    linkLabel: 'Visit site',
    featured: true,
  },
  {
    title: 'The Caregiver Is Invisible',
    description:
      'A research-led UI/UX case study for the Zuntra Design Awards 2026: five caregiver interviews, a twelve-screen prototype, two rounds of usability testing.',
    tags: ['Figma', 'Research'],
    image:
      'https://raw.githubusercontent.com/adityadhanawade/the-caregiver-is-invisible/main/screenshots/01-Home.png',
    link: 'https://github.com/adityadhanawade/the-caregiver-is-invisible',
    linkLabel: 'Read case study',
  },
  {
    title: 'UI/UX Internship, Thiranex',
    description:
      'Wireframes, a heuristic redesign, and moderated usability testing across four internship modules.',
    tags: ['Wireframes', 'Usability Testing'],
    image:
      'https://raw.githubusercontent.com/adityadhanawade/uiux-internship-thiranex/main/Module%202/files/Module2_Mockups_PNG/01_after_homepage_desktop.png',
    link: 'https://github.com/adityadhanawade/uiux-internship-thiranex',
    linkLabel: 'View deliverables',
  },
  {
    title: 'Vehicle Automation App',
    description:
      'An Android app connecting vehicle owners with garages, built with three classmates using Kotlin and Firebase.',
    tags: ['Kotlin', 'Firebase'],
    image: null,
    link: 'https://github.com/adityadhanawade/vehicle-automation-app',
    linkLabel: 'View repository',
  },
]

function ProjectCard({ project }: { project: (typeof projects)[number] }) {
  return (
    <TiltCard className="h-full">
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="group block h-full overflow-hidden rounded-2xl border border-ink-line bg-ink-raised transition-colors duration-300 hover:border-signal/50"
      >
        <div
          className={`overflow-hidden bg-ink-line ${project.featured ? 'aspect-[16/8]' : 'aspect-[16/10]'}`}
        >
          {project.image ? (
            <img
              src={project.image}
              alt={project.title}
              loading="lazy"
              className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-ink-line to-ink-raised">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-12 w-12 text-signal/70">
                <path d="M5 17h14M5 17a2 2 0 104 0M5 17V9l2-4h10l2 4v8M15 17a2 2 0 104 0M5 9h14" />
              </svg>
            </div>
          )}
        </div>
        <div className="p-6">
          <h3 className="font-display text-lg font-semibold">{project.title}</h3>
          <p className="mt-2 text-[14px] leading-relaxed text-paper-dim">{project.description}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-ink-line px-3 py-1 text-[12px] font-medium text-paper-dim"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="mt-4 inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-signal">
            {project.linkLabel}
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1">
              <path d="M7 17L17 7M17 7H8M17 7v9" />
            </svg>
          </div>
        </div>
      </a>
    </TiltCard>
  )
}

export default function Work() {
  return (
    <section id="work" className="mx-auto max-w-[1160px] px-6 py-24 md:px-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-[28px] font-semibold md:text-[34px]">Selected work</h2>
        <p className="mt-3 max-w-[60ch] text-[15.5px] text-paper-dim">
          Four projects spanning full-stack development, UI/UX research, and Android engineering.
        </p>
      </motion.div>

      <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
            className={project.featured ? 'md:col-span-3' : 'md:col-span-1'}
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </div>
    </section>
  )
}
