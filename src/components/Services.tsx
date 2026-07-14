import { ArrowRight } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

const services = [
  {
    number: "01",
    title: "Quantity Take Off",
    description:
      "200+ factory-trained engineers combine a proven process with state-of-the-art AI to deliver accurate MEP takeoffs and selections. Fast, reliable file management.",
    bg: "bg-[#A91E2D]", // Brand Red
    text: "text-white",
  },
  {
    number: "02",
    title: "Equipment / Product Selection",
    description:
      "We help clients choose the most efficient, cost-effective, and specification-compliant products. Evaluating performance data, compatibility, and sustainability.",
    bg: "bg-[#F8E9EB]", // Very Light Brand Pink
    text: "text-[#A91E2D]",
  },
  {
    number: "03",
    title: "BIM Modelling",
    description:
      "A 3D digital representation of your project that integrates design, cost, and time data. Enhances collaboration, reduces design errors, and drives better decisions.",
    bg: "bg-[#6F1520]", // Dark Maroon
    text: "text-white",
  },
  {
    number: "04",
    title: "MEP Drafting",
    description:
      "Precise mechanical, electrical, and plumbing drafting services. From shop drawings to coordination sheets — documentation that meets your standards and schedule.",
    bg: "bg-[#FFF5F6]", // Soft White with Red Tint
    text: "text-[#A91E2D]",
  },
  {
    number: "05",
    title: "Spec Review",
    description:
      "Our Specification Review checks technical documentation for consistency, clarity, and compliance. Preventing design conflicts, delays, and rework at later stages.",
    bg: "bg-[#D44A5D]", // Medium Brand Red
    text: "text-white",
  },
  {
    number: "06",
    title: "Energy Modelling / Building Engineering",
    description:
      "Advanced energy modelling and building engineering services to optimize efficiency, sustainability, and performance of building systems. Meet codes and exceed expectations.",
    bg: "bg-[#2B2B2B]", // Charcoal
    text: "text-white",
  },
];

export function Services() {
  const { ref, inView } = useReveal();

  return (
    <section id="services">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div ref={ref} className={`reveal ${inView ? 'in-view' : ''} py-14 lg:py-20`}>
          <h2 className="font-display text-3xl font-bold uppercase leading-tight tracking-tight text-ink-900 sm:text-4xl lg:text-5xl">
            Eight services.
            <br />
            <span className="text-ink-400">One delivery standard.</span>
          </h2>
        </div>
      </div>

      {/* Full-width edge-to-edge color rows */}
      <div className="border-t border-ink-200">
        {services.map((s, i) => (
          <ServiceRow key={s.number} service={s} index={i} />
        ))}
      </div>
    </section>
  );
}

type ServiceData = (typeof services)[number];

function ServiceRow({ service: s, index }: { service: ServiceData; index: number }) {
  const { ref, inView } = useReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`group ${s.bg} ${s.text} transform-gpu transition-all duration-700 ease-out ${
        inView ? 'translate-x-0 opacity-100' : '-translate-x-16 opacity-0 lg:-translate-x-24'
      }`}
      style={{ transitionDelay: inView ? `${(index % 4) * 90}ms` : '0ms' }}
    >
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="flex flex-col gap-4 py-12 lg:flex-row lg:items-center lg:justify-between lg:gap-12 lg:py-16">
          {/* Left: number + title + description */}
          <div className="flex flex-col gap-3 lg:flex-row lg:items-baseline lg:gap-8">
            <span className="font-display text-4xl font-bold opacity-30 lg:text-6xl">{s.number}</span>
            <div>
              <h3 className="font-display text-xl font-bold uppercase leading-tight lg:text-3xl">{s.title}</h3>
              <p className="mt-2 max-w-xl text-sm leading-relaxed opacity-75 lg:text-base">{s.description}</p>
            </div>
          </div>
          {/* Right: learn more */}
          <div className="flex shrink-0 items-center gap-1.5 text-sm font-semibold uppercase tracking-wide opacity-80 transition-all duration-300 group-hover:opacity-100">
            <span>Learn more</span>
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </div>
        </div>
      </div>
      {index < services.length - 1 && (
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="border-t border-current opacity-10" />
        </div>
      )}
    </div>
  );
}