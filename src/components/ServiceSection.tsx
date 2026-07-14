"use client";

import React, { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "framer-motion";

interface StepData {
  id: string;
  code: string;
  title: string;
  bgColor: string;
  textColor: string;
  features: string[];
  description: string;
  bgImageUrl: string;
  content: React.ReactNode;
}

const stepsData: StepData[] = [
  {
    id: "01",
    code: "QTO",
    title: "Quantity Take-Off",
    bgColor: "bg-[#0B2545]",
    textColor: "text-white",
    features: [
      "Accurate Material Quantities",
      "Fast Cost Estimation",
      "AI Assisted Workflow",
    ],
    description:
      "Generate highly accurate HVAC and MEP quantity take-offs that help contractors, manufacturers, and engineering firms reduce estimating time, minimize material waste, and improve bidding accuracy.",
    bgImageUrl:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1400&q=80",
    content: (
      <div className="mt-8">
        <p className="text-xs font-semibold uppercase tracking-widest opacity-75 mb-4">
          Quantity Take-Off Services
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            {
              id: 1,
              name: "HVAC Plans",
              tag: "Drawings",
              img: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=500&q=80",
            },
            {
              id: 2,
              name: "Material Reports",
              tag: "BOQ",
              img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=500&q=80",
            },
            {
              id: 3,
              name: "Cost Estimation",
              tag: "Estimate",
              img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=500&q=80",
            },
            {
              id: 4,
              name: "Bid Support",
              tag: "Tender",
              img: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=500&q=80",
            },
          ].map((item) => (
            <motion.div
              key={item.id}
              whileHover={{ scale: 1.04, y: -4 }}
              className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/20 bg-white/10"
            >
              <img
                src={item.img}
                alt={item.name}
                className="absolute inset-0 w-full h-full object-cover opacity-40"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-4 left-4 z-10">
                <div className="text-[10px] uppercase tracking-wider text-blue-300">
                  {item.tag}
                </div>
                <div className="font-semibold">{item.name}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    ),
  },

  {
    id: "02",
    code: "EPS",
    title: "Equipment & Product Selection",
    bgColor: "bg-gradient-to-b from-[#103B4A] to-[#071B28]",
    textColor: "text-white",
    features: [
      "HVAC Equipment Selection",
      "Specification Compliance",
      "Optimized Product Choices",
    ],
    description:
      "Our engineers evaluate project requirements and recommend the most efficient HVAC equipment and products while ensuring compliance with project specifications and industry standards.",
    bgImageUrl:
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1400&q=80",
    content: (
      <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="relative aspect-square rounded-2xl bg-white/10 border border-white/20 flex flex-col items-center justify-center">
          <div className="w-10 h-10 border-2 border-emerald-400 border-t-transparent rounded-full animate-spin mb-4" />
          <span className="text-xs text-center">
            Product Evaluation
          </span>
        </div>

        {[
          {
            id: 1,
            title: "HVAC Equipment",
            img: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=500&q=80",
          },
          {
            id: 2,
            title: "Technical Review",
            img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=500&q=80",
          },
          {
            id: 3,
            title: "Specification Match",
            img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=500&q=80",
          },
        ].map((item) => (
          <div
            key={item.id}
            className="relative aspect-square rounded-2xl overflow-hidden border border-white/20"
          >
            <img
              src={item.img}
              alt={item.title}
              className="absolute inset-0 w-full h-full object-cover opacity-40"
            />
            <div className="absolute inset-0 bg-black/40" />
            <div className="absolute bottom-3 left-3 right-3 flex justify-between">
              <span className="text-xs">{item.title}</span>
              <span className="text-emerald-400">✓</span>
            </div>
          </div>
        ))}
      </div>
    ),
  },

  {
    id: "03",
    code: "BIM",
    title: "BIM & Revit Modeling",
    bgColor: "bg-[#6A1B1B]",
    textColor: "text-white",
    features: [
      "BIM Modelling",
      "Revit Components",
      "AR / VR Models",
    ],
    description:
      "Create intelligent BIM models, Revit components, assemblies, and immersive AR/VR visualizations that improve project coordination and reduce costly design conflicts.",
    bgImageUrl:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=80",
    content: (
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
        {[
          {
            id: 1,
            title: "BIM MODEL",
            stage: "3D Coordination",
            img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=500&q=80",
          },
          {
            id: 2,
            title: "REVIT",
            stage: "Component & Assembly",
            img: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=500&q=80",
          },
          {
            id: 3,
            title: "AR / VR",
            stage: "Interactive Visualization",
            img: "https://images.unsplash.com/photo-1518770630439-463619030475?auto=format&fit=crop&w=500&q=80",
          },
        ].map((item) => (
          <div
            key={item.id}
            className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-white/20"
          >
            <img
              src={item.img}
              alt={item.stage}
              className="absolute inset-0 w-full h-full object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/80" />
            <div className="absolute bottom-4 left-4 right-4">
              <div className="text-[10px] uppercase text-red-300">
                {item.title}
              </div>
              <div className="font-semibold">{item.stage}</div>
            </div>
          </div>
        ))}
      </div>
    ),
  },

  {
    id: "04",
    code: "MEP",
    title: "MEP Drafting & Engineering",
    bgColor: "bg-[#0D5C4A]",
    textColor: "text-white",
    features: [
      "MEP Drafting",
      "Energy Modelling",
      "Specification Review",
    ],
    description:
      "Comprehensive engineering support including MEP drafting, specification review, energy modelling, and contractor-ready documentation delivered by experienced engineering professionals.",
    bgImageUrl:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=80",
    content: (
      <div className="mt-8 bg-black/20 rounded-3xl p-8 border border-white/10 text-center max-w-2xl mx-auto">
        <div className="flex flex-wrap justify-center gap-3 mb-6">
          <span className="px-4 py-2 rounded-full bg-white/10 text-sm">
            MEP Drafting
          </span>

          <span className="px-4 py-2 rounded-full bg-white/10 text-sm">
            Energy Modelling
          </span>

          <span className="px-4 py-2 rounded-full bg-white/10 text-sm">
            Specification Review
          </span>
        </div>

        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          className="px-10 py-4 bg-white text-[#0D5C4A] font-bold rounded-full"
        >
          Request Engineering Support
        </motion.button>
      </div>
    ),
  },
];

export default function ServiceSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 24,
    restDelta: 0.001,
  });

  return (
    <div
      ref={containerRef}
      className="relative w-full bg-[#030d16]"
      style={{
        height: `${stepsData.length * 100}vh`,
        perspective: "1500px",
      }}
    >
      {stepsData.map((step, index) => {
        return (
          <CardSection
            key={step.id}
            step={step}
            index={index}
            totalSteps={stepsData.length}
            smoothProgress={smoothProgress}
          />
        );
      })}
    </div>
  );
}

interface CardSectionProps {
  step: StepData;
  index: number;
  totalSteps: number;
  smoothProgress: MotionValue<number>;
}

function CardSection({
  step,
  index,
  totalSteps,
  smoothProgress,
}: CardSectionProps) {
  const startRange = index / totalSteps;
  const endRange = (index + 1) / totalSteps;

  // FIX: Only start exiting when the NEXT card begins entering.
  // Previously exitStartRange was clamped to endRange - 0.08 which
  // caused cards 3 and 4 to begin their exit (scale/opacity/translate)
  // too early, making them jump off-screen before the user could
  // scroll to them. Now each card stays fully visible until the
  // next card's scroll range begins.
  const exitStartRange = startRange + (endRange - startRange) * 0.85;
  const exitEndRange = Math.min(endRange + 0.02, 1.0);

  const scale = useTransform(
    smoothProgress,
    [startRange, exitStartRange, exitEndRange],
    [1, 1, 0.78],
  );

  const opacity = useTransform(
    smoothProgress,
    [startRange, exitStartRange, exitEndRange],
    [1, 1, 0.0],
  );

  const y = useTransform(
    smoothProgress,
    [startRange, exitStartRange, exitEndRange],
    [0, 0, 250],
  );

  const rotateX = useTransform(
    smoothProgress,
    [startRange, exitStartRange, exitEndRange],
    [0, 0, -12],
  );

  const rotateZ = useTransform(
    smoothProgress,
    [startRange, exitStartRange, exitEndRange],
    [0, 0, -3],
  );

  const willChange = useTransform(
    smoothProgress,
    [startRange, exitStartRange, exitEndRange],
    ["transform", "transform, opacity", "transform"],
  );

  return (
    <motion.section
      style={{
        scale,
        opacity,
        y,
        rotateX,
        rotateZ,
        willChange,
        zIndex: index + 1,
        transformStyle: "preserve-3d",
        backfaceVisibility: "hidden",
      }}
      className={`sticky top-0 h-screen w-full ${step.bgColor} ${step.textColor} flex flex-col justify-between p-6 md:p-16 overflow-hidden border-b border-black/10 origin-center`}
    >
      <div
        className="absolute inset-0 z-0 bg-cover bg-center mix-blend-overlay opacity-20 pointer-events-none"
        style={{ backgroundImage: `url(${step.bgImageUrl})` }}
      />

      <div className="max-w-7xl w-full mx-auto my-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pt-6 relative z-10">
        <div className="lg:col-span-5 space-y-6">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-3xl md:text-5xl font-bold tracking-tight leading-tight"
          >
            {step.title}
          </motion.h2>
          <div className="space-y-6">
            <p className="text-base md:text-lg opacity-85 font-normal leading-relaxed max-w-md">
              {step.description}
            </p>
            <button className="px-7 py-3 bg-white text-black font-semibold text-sm rounded-full shadow-lg hover:bg-neutral-100 transition-colors">
              Inquire Corporate Services
            </button>
          </div>
        </div>

        <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col gap-4 sm:gap-6 lg:gap-5 lg:pt-4">
          {step.features.map((feature, idx) => (
            <div key={idx} className="flex items-center gap-3">
              <span className="text-base text-white/50">✦</span>
              <span className="text-base md:text-lg font-medium opacity-90">
                {feature}
              </span>
            </div>
          ))}
        </div>

        <div className="hidden lg:block lg:col-span-2 text-right">
          <span className="text-8xl xl:text-9xl font-light tracking-tighter opacity-15 select-none block">
            {step.id}
          </span>
        </div>
      </div>

      <div className="max-w-7xl w-full mx-auto pb-6 relative z-10">
        {step.content}
      </div>
    </motion.section>
  );
}
