import React from "react";
import { BookOpen, Users, Cpu } from "lucide-react";
import { useReveal } from "../hooks/useReveal";

const values = [
  {
    icon: BookOpen,
    title: "Sharing Knowledge",
    description:
      "We document, standardize, and continuously improve engineering processes so expertise is shared across every project—not isolated within individuals.",
    bg: "bg-[#FFF5F6]",
    text: "text-[#A91E2D]",
    iconBg: "bg-[#A91E2D]",
    iconColor: "text-white",
  },
  {
    icon: Users,
    title: "Powerful Collaboration",
    description:
      "Our blended onshore and offshore engineering teams combine technical expertise, quality control, and scalability to deliver projects efficiently.",
    bg: "bg-[#A91E2D]",
    text: "text-white",
    iconBg: "bg-white/15",
    iconColor: "text-white",
  },
  {
    icon: Cpu,
    title: "Engineering Through Technology",
    description:
      "Leveraging BIM, Revit, AI-powered workflows, and automation tools to improve accuracy, productivity, and engineering excellence.",
    bg: "bg-[#2B2B2B]",
    text: "text-white",
    iconBg: "bg-[#A91E2D]",
    iconColor: "text-white",
  },
];

export function Values() {
  const { ref, inView } = useReveal();

  return (
    <section id="about" className="bg-white py-20 lg:py-28 overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        {/* Header */}
        <div
          ref={ref}
          className={`reveal ${
            inView ? "in-view" : ""
          } grid gap-8 lg:grid-cols-2 lg:items-end`}
        >
          <div>
            <span className="inline-flex rounded-full border border-[#A91E2D]/20 bg-[#FFF5F6] px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#A91E2D]">
              Our Core Values
            </span>

            <h2 className="mt-6 font-display text-4xl font-bold uppercase leading-tight tracking-tight text-[#111827] sm:text-5xl lg:text-6xl">
              The Power of
              <br />
              Being Different
            </h2>
          </div>

          <p className="max-w-xl text-lg leading-8 text-gray-600">
            Our success is built on three principles that shape every project,
            every engineering decision, and every client relationship. These
            values drive how we innovate, collaborate, and consistently deliver
            exceptional engineering solutions.
          </p>
        </div>

        {/* Cards */}
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

function ValueCard({
  value,
  index,
}: {
  value: ValueData;
  index: number;
}) {
  const { ref, inView } = useReveal<HTMLDivElement>();

  const Icon = value.icon;

  return (
    <div
      ref={ref}
      className={`
        group
        relative
        overflow-hidden
        rounded-[30px]
        ${value.bg}
        ${value.text}
        p-8
        lg:p-10
        border
        border-black/5
        transition-all
        duration-700
        hover:-translate-y-2
        hover:shadow-[0_30px_80px_rgba(0,0,0,0.12)]
        ${
          inView
            ? "translate-y-0 opacity-100"
            : "translate-y-10 opacity-0"
        }
      `}
      style={{
        transitionDelay: `${index * 120}ms`,
      }}
    >
      {/* Background Glow */}
      <div className="absolute -right-12 -top-12 h-44 w-44 rounded-full bg-white/10 blur-3xl transition-all duration-700 group-hover:scale-125" />

      {/* Number */}
      <div className="absolute right-8 top-8 text-6xl font-black opacity-10">
        0{index + 1}
      </div>

      {/* Icon */}
      <div
        className={`relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl ${value.iconBg}`}
      >
        <Icon className={`h-8 w-8 ${value.iconColor}`} />
      </div>

      {/* Label */}
      <span className="relative z-10 mt-8 inline-block text-xs font-semibold uppercase tracking-[0.3em] opacity-70">
        Core Value
      </span>

      {/* Title */}
      <h3 className="relative z-10 mt-3 font-display text-3xl font-bold leading-tight">
        {value.title}
      </h3>

      {/* Description */}
      <p className="relative z-10 mt-6 text-[15px] leading-8 opacity-85">
        {value.description}
      </p>

      {/* Bottom Accent */}
      <div
        className={`absolute bottom-0 left-0 h-1 transition-all duration-500 group-hover:w-full ${
          index === 1 ? "bg-white" : "bg-[#A91E2D]"
        } w-16`}
      />

      {/* Hover Arrow */}
      <div className="relative z-10 mt-10 flex items-center gap-3 font-semibold uppercase tracking-widest opacity-70 transition-all duration-300 group-hover:translate-x-2 group-hover:opacity-100">
        <span className="text-xs">Learn More</span>
        <span>→</span>
      </div>
    </div>
  );
}