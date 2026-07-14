import { BookOpen, Users, Cpu } from 'lucide-react';
import { motion } from 'framer-motion';
import { useReveal } from '../hooks/useReveal';

const values = [
  {
    icon: BookOpen,
    title: 'Sharing Knowledge',
    description:
      'We document, standardize, and continuously improve engineering processes so expertise is shared across every project — not isolated within individuals.',
    bg: 'bg-ink-100',
    text: 'text-ink-800',
    accent: 'bg-brand-red',
  },
  {
    icon: Users,
    title: 'Powerful Collaboration',
    description:
      'Our blended onshore and offshore engineering teams combine technical expertise, quality control, and scalability to deliver projects efficiently.',
    bg: 'bg-brand-red',
    text: 'text-white',
    accent: 'bg-white',
  },
  {
    icon: Cpu,
    title: 'Engineering Through Technology',
    description:
      'Leveraging BIM, Revit, AI-powered workflows, and automation tools to improve accuracy, productivity, and engineering excellence.',
    bg: 'bg-ink-800',
    text: 'text-white',
    accent: 'bg-amber',
  },
];

export function Values() {
  const { ref, inView } = useReveal();

  return (
    <section id="about" className="overflow-hidden bg-ink-50 py-20 lg:py-28">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div ref={ref} className={`reveal ${inView ? 'in-view' : ''} grid gap-8 lg:grid-cols-2 lg:items-end`}>
          <div>
            <span className="inline-flex rounded-full border border-brand-red/20 bg-brand-red/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-brand-red">
              Our Core Values
            </span>
            <h2 className="mt-6 font-display text-4xl font-bold uppercase leading-tight tracking-tight text-ink-800 sm:text-5xl lg:text-6xl">
              The Power of
              <br />
              Being Different
            </h2>
          </div>
          <p className="max-w-xl text-lg leading-8 text-ink-500">
            Our success is built on three principles that shape every project,
            every engineering decision, and every client relationship. These
            values drive how we innovate, collaborate, and consistently deliver
            exceptional engineering solutions.
          </p>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {values.map((value, index) => (
            <ValueCard key={value.title} value={value} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

type ValueData = (typeof values)[number];

function ValueCard({ value, index }: { value: ValueData; index: number }) {
  const { ref, inView } = useReveal<HTMLDivElement>();
  const Icon = value.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -8 }}
      className={`group relative overflow-hidden rounded-3xl border border-black/5 ${value.bg} ${value.text} p-8 lg:p-10 transition-shadow duration-500 hover:shadow-[0_30px_80px_rgba(0,0,0,0.12)]`}
    >
      <div className="absolute -right-12 -top-12 h-44 w-44 rounded-full bg-white/10 blur-3xl transition-all duration-700 group-hover:scale-125" />
      <div className="absolute right-8 top-8 text-6xl font-black opacity-10">0{index + 1}</div>

      <div className={`relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl ${value.accent}`}>
        <Icon className={`h-8 w-8 ${value.text === 'text-white' && value.accent === 'bg-white' ? 'text-ink-800' : 'text-white'}`} />
      </div>

      <span className="relative z-10 mt-8 inline-block text-xs font-semibold uppercase tracking-[0.3em] opacity-70">Core Value</span>
      <h3 className="relative z-10 mt-3 font-display text-3xl font-bold leading-tight">{value.title}</h3>
      <p className="relative z-10 mt-6 text-[15px] leading-8 opacity-85">{value.description}</p>

      <div className={`absolute bottom-0 left-0 h-1 w-16 transition-all duration-500 group-hover:w-full ${value.accent === 'bg-white' ? 'bg-white' : 'bg-brand-red'}`} />

      <div className="relative z-10 mt-10 flex items-center gap-3 text-xs font-semibold uppercase tracking-widest opacity-70 transition-all duration-300 group-hover:translate-x-2 group-hover:opacity-100">
        <span>Learn More</span>
        <span>→</span>
      </div>
    </motion.div>
  );
}
