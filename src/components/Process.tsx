import { useReveal } from '../hooks/useReveal';

const steps = [
  {
    number: '01',
    title: 'Drop your RFQ',
    description: 'Upload everything in our secure portal. We take it from there.',
  },
  {
    number: '02',
    title: 'Align with the team',
    description: 'Specify exactly what you need via the portal or email. Fast, direct, clear.',
  },
  {
    number: '03',
    title: 'Revise and track live',
    description: '100% accurate, real-time processing. We will take it from there.',
  },
];

export function Process() {
  const { ref, inView } = useReveal();

  return (
    <section id="process" className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div
          ref={ref}
          className={`reveal ${inView ? 'in-view' : ''} grid gap-10 lg:grid-cols-2 lg:items-start`}
        >
          {/* Left: heading */}
          <div>
            <h2 className="font-display text-3xl font-bold uppercase leading-tight tracking-tight text-ink-900 sm:text-4xl lg:text-5xl">
              Got a project
              <br />
              <span className="text-ink-400">in mind?</span>
            </h2>
            <p className="mt-4 text-lg text-ink-500">Teaming up is super simple.</p>
          </div>

          {/* Right: orange cards */}
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
    <div
      ref={ref}
      className={`flex-1 bg-[#a91e2d] p-6 transition-all duration-700 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <span className="font-display text-4xl font-bold text-white/40">{step.number}</span>
      <h3 className="mt-4 font-display text-lg font-bold uppercase text-white">{step.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-white/80">{step.description}</p>
    </div>
  );
}
