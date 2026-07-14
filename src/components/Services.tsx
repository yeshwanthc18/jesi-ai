import { ArrowRight } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

const services = [
  {
    number: "01",
    title: "BIM Modeling",
    description:
      "Federated MEP BIM models combining mechanical, electrical, and plumbing systems in a single coordinated Revit environment. LOD 100–500, clash-free, delivered cloud-ready on BIM 360 or ACC.",
    bg: "bg-brand-red",
    text: "text-white",
    tags: ['Revit', 'Navisworks', 'BIM 360', 'M·E·P'],
  },
  {
    number: "02",
    title: "MEP Drafting",
    description:
      "Precision 2D AutoCAD drafting — from schematic single-line diagrams to fabrication-level shop drawings with hanger details and spool sheets. Delivered to your title block and layer standards.",
    bg: "bg-gray-light",
    text: "text-brand-red",
    tags: ['AutoCAD', 'Bluebeam', 'Shop Drawings'],
  },
  {
    number: "03",
    title: "MEP Coordination",
    description:
      "Multi-discipline clash resolution before concrete is poured. We federate models, run clash detection, chair weekly BIM coordination meetings, and maintain a live resolution log.",
    bg: "bg-[#1F2020]",
    text: "text-white",
    tags: ['Navisworks', 'Coordination', 'RFI Management'],
  },
  {
    number: "04",
    title: "AR / VR Modeling",
    description:
      "Immersive walkthroughs that let owners and contractors walk through the building before it's built. VR, web-based viewers, and HoloLens AR overlays from your Revit models.",
    bg: "bg-[#0D5C4A]",
    text: "text-white",
    tags: ['Enscape', 'HoloLens', 'WebGL', 'Twinmotion'],
  },
  {
    number: "05",
    title: "QTO & Equipment Selection",
    description:
      "Fast, accurate mechanical quantity takeoffs and HVAC equipment selections. ASHRAE-compliant load calculations with deep manufacturer knowledge across Carrier, Trane, Daikin, and more.",
    bg: "bg-amber",
    text: "text-brand-dark",
    tags: ['Revit Schedules', 'Excel BOQ', 'ASHRAE', 'Submittals'],
  },
  {
    number: "06",
    title: "JESi AI",
    description:
      "AI-powered quantity takeoffs from drawings to BOQ in minutes. Every AI output is reviewed line-by-line by a JES MEP engineer — the speed of AI with the accuracy of an experienced engineer.",
    bg: "bg-[#534AB7]",
    text: "text-white",
    tags: ['AI Takeoff', 'Machine Learning', 'Human QC'],
  },
  {
    number: "07",
    title: "KPO Support",
    description:
      "Dedicated offshore engineering teams on monthly retainer. Fixed multidisciplinary pods — BIM modeler, drafter, QTO engineer, and project lead — embedded in your workflow and time zone.",
    bg: "bg-[#639922]",
    text: "text-white",
    tags: ['Dedicated Teams', 'Monthly Retainer', 'US·India·Qatar'],
  },
];

export function Services() {
  const { ref, inView } = useReveal();

  return (
    <section id="services">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div ref={ref} className={`reveal ${inView ? 'in-view' : ''} py-14 lg:py-20`}>
          <p className="mb-4 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.14em] text-brand-red">
            <span className="block h-px w-8 bg-brand-red" />
            What we build
          </p>
          <h2 className="font-display text-3xl font-bold uppercase leading-tight tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
            Seven services.
            <br />
            <span className="text-gray-400">One delivery standard.</span>
          </h2>
        </div>
      </div>

      {/* Full-width edge-to-edge color rows */}
      <div className="border-t border-gray-200">
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
          {/* Left: number + title + description + tags */}
          <div className="flex flex-col gap-3 lg:flex-row lg:items-baseline lg:gap-8">
            <span className="font-display text-4xl font-bold opacity-30 lg:text-6xl">{s.number}</span>
            <div>
              <h3 className="font-display text-xl font-bold uppercase leading-tight lg:text-3xl">{s.title}</h3>
              <p className="mt-2 max-w-xl text-sm leading-relaxed opacity-75 lg:text-base">{s.description}</p>
              {/* Tags */}
              <div className="mt-3 flex flex-wrap gap-1.5">
                {s.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded border border-current/20 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider opacity-60"
                  >
                    {tag}
                  </span>
                ))}
              </div>
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
