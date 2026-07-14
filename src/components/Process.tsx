import { motion } from 'framer-motion';
import { useReveal } from '../hooks/useReveal';

const steps = [
  { number: '01', title: 'Drop your RFQ', description: 'Upload everything in our secure portal. We take it from there.' },
  { number: '02', title: 'Align with the team', description: 'Specify exactly what you need via the portal or email. Fast, direct, clear.' },
  { number: '03', title: 'Revise and track live', description: '100% accurate, real-time processing. We will take it from there.' },
];

export function Process() {
  const { ref, inView } = useReveal();

  return (
    <section id="process" className="bg-ink-50 py-16 lg:py-24">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div ref={ref} className={`reveal ${inView ? 'in-view' : ''} grid gap-10 lg:grid-cols-2 lg:items-start`}>
          <div>
            <h2 className="font-display text-3xl font-bold uppercase leading-tight tracking-tight text-ink-800 sm:text-4xl lg:text-5xl">
              Got a project
              <br />
              <span className="text-ink-400">in mind?</span>
            </h2>
            <p className="mt-4 text-lg text-ink-500">Teaming up is super simple.</p>
          </div>

          <div className="flex flex-col gap-0 sm:flex-row">
            {steps.map((step, i) => (
              <ProcessCard key={step.number} step={step} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

type StepData = (typeof steps)[number];

function ProcessCard({ step, index }: { step: StepData; index: number }) {
  const { ref, inView } = useReveal<HTMLDivElement>();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6 }}
      className="group flex-1 bg-brand-red p-6 transition-shadow duration-500 hover:shadow-2xl lg:p-8"
    >
      <span className="font-display text-4xl font-bold text-white/30 transition-colors group-hover:text-amber/60 lg:text-5xl">
        {step.number}
      </span>
      <h3 className="mt-4 font-display text-lg font-bold uppercase text-white">{step.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-white/80">{step.description}</p>
      <div className="mt-6 h-0.5 w-0 bg-amber transition-all duration-500 group-hover:w-full" />
    </motion.div>
  );
}
