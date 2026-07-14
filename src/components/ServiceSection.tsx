import React, { useRef } from 'react';
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  type MotionValue,
} from 'framer-motion';

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
    id: '01',
    code: 'QTO',
    title: 'Quantity Take-Off',
    bgColor: 'bg-ink-800',
    textColor: 'text-white',
    features: ['Accurate Material Quantities', 'Fast Cost Estimation', 'AI Assisted Workflow'],
    description:
      'Generate highly accurate HVAC and MEP quantity take-offs that help contractors, manufacturers, and engineering firms reduce estimating time, minimize material waste, and improve bidding accuracy.',
    bgImageUrl:
      'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1400&q=80',
    content: (
      <div className="mt-8">
        <p className="mb-4 text-xs font-semibold uppercase tracking-widest opacity-75">
          Quantity Take-Off Services
        </p>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {[
            { id: 1, name: 'HVAC Plans', tag: 'Drawings', img: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=500&q=80' },
            { id: 2, name: 'Material Reports', tag: 'BOQ', img: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=500&q=80' },
            { id: 3, name: 'Cost Estimation', tag: 'Estimate', img: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=500&q=80' },
            { id: 4, name: 'Bid Support', tag: 'Tender', img: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=500&q=80' },
          ].map((item) => (
            <motion.div
              key={item.id}
              whileHover={{ scale: 1.04, y: -4 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/15 bg-white/5"
            >
              <img src={item.img} alt={item.name} className="absolute inset-0 h-full w-full object-cover opacity-35" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-800/90 to-transparent" />
              <div className="absolute bottom-4 left-4 z-10">
                <div className="text-[10px] uppercase tracking-wider text-brand-red">{item.tag}</div>
                <div className="font-semibold text-white">{item.name}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: '02',
    code: 'EPS',
    title: 'Equipment & Product Selection',
    bgColor: 'bg-ink-700',
    textColor: 'text-white',
    features: ['HVAC Equipment Selection', 'Specification Compliance', 'Optimized Product Choices'],
    description:
      'Our engineers evaluate project requirements and recommend the most efficient HVAC equipment and products while ensuring compliance with project specifications and industry standards.',
    bgImageUrl:
      'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1400&q=80',
    content: (
      <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
        <div className="relative flex aspect-square flex-col items-center justify-center rounded-2xl border border-white/15 bg-white/5">
          <div className="mb-4 h-10 w-10 animate-spin-slow rounded-full border-2 border-amber border-t-transparent" />
          <span className="text-xs text-center text-ink-200">Product Evaluation</span>
        </div>
        {[
          { id: 1, title: 'HVAC Equipment', img: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=500&q=80' },
          { id: 2, title: 'Technical Review', img: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=500&q=80' },
          { id: 3, title: 'Specification Match', img: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=500&q=80' },
        ].map((item) => (
          <div key={item.id} className="relative aspect-square overflow-hidden rounded-2xl border border-white/15">
            <img src={item.img} alt={item.title} className="absolute inset-0 h-full w-full object-cover opacity-35" loading="lazy" />
            <div className="absolute inset-0 bg-ink-800/50" />
            <div className="absolute bottom-3 left-3 right-3 flex justify-between">
              <span className="text-xs text-white">{item.title}</span>
              <span className="text-amber">✓</span>
            </div>
          </div>
        ))}
      </div>
    ),
  },
  {
    id: '03',
    code: 'BIM',
    title: 'BIM & Revit Modeling',
    bgColor: 'bg-brand-red',
    textColor: 'text-white',
    features: ['BIM Modelling', 'Revit Components', 'AR / VR Models'],
    description:
      'Create intelligent BIM models, Revit components, assemblies, and immersive AR/VR visualizations that improve project coordination and reduce costly design conflicts.',
    bgImageUrl:
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1400&q=80',
    content: (
      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
        {[
          { id: 1, title: 'BIM MODEL', stage: '3D Coordination', img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=500&q=80' },
          { id: 2, title: 'REVIT', stage: 'Component & Assembly', img: 'https://images.unsplash.com/photo-1524758631624-e2827e361a72?auto=format&fit=crop&w=500&q=80' },
          { id: 3, title: 'AR / VR', stage: 'Interactive Visualization', img: 'https://images.unsplash.com/photo-1518770630439-463619030475?auto=format&fit=crop&w=500&q=80' },
        ].map((item) => (
          <div key={item.id} className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/20">
            <img src={item.img} alt={item.stage} className="absolute inset-0 h-full w-full object-cover opacity-25" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-b from-ink-800/60 to-ink-800/85" />
            <div className="absolute bottom-4 left-4 right-4">
              <div className="text-[10px] uppercase text-amber">{item.title}</div>
              <div className="font-semibold text-white">{item.stage}</div>
            </div>
          </div>
        ))}
      </div>
    ),
  },
  {
    id: '04',
    code: 'MEP',
    title: 'MEP Drafting & Engineering',
    bgColor: 'bg-ink-600',
    textColor: 'text-white',
    features: ['MEP Drafting', 'Energy Modelling', 'Specification Review'],
    description:
      'Comprehensive engineering support including MEP drafting, specification review, energy modelling, and contractor-ready documentation delivered by experienced engineering professionals.',
    bgImageUrl:
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=80',
    content: (
      <div className="mx-auto mt-8 max-w-2xl rounded-3xl border border-white/10 bg-ink-800/40 p-8 text-center">
        <div className="mb-6 flex flex-wrap justify-center gap-3">
          {['MEP Drafting', 'Energy Modelling', 'Specification Review'].map((tag) => (
            <span key={tag} className="rounded-full bg-white/10 px-4 py-2 text-sm text-white">{tag}</span>
          ))}
        </div>
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          className="rounded-full bg-white px-10 py-4 font-bold text-ink-800 transition-colors hover:bg-amber"
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
    offset: ['start start', 'end end'],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 24,
    restDelta: 0.001,
  });

  return (
    <div
      ref={containerRef}
      className="relative w-full bg-ink-800"
      style={{ height: `${stepsData.length * 100}vh`, perspective: '1500px' }}
    >
      {stepsData.map((step, index) => (
        <CardSection
          key={step.id}
          step={step}
          index={index}
          totalSteps={stepsData.length}
          smoothProgress={smoothProgress}
        />
      ))}
    </div>
  );
}

interface CardSectionProps {
  step: StepData;
  index: number;
  totalSteps: number;
  smoothProgress: MotionValue<number>;
}

function CardSection({ step, index, totalSteps, smoothProgress }: CardSectionProps) {
  const startRange = index / totalSteps;
  const endRange = (index + 1) / totalSteps;
  const exitStartRange = startRange + (endRange - startRange) * 0.85;
  const exitEndRange = Math.min(endRange + 0.02, 1.0);

  const scale = useTransform(smoothProgress, [startRange, exitStartRange, exitEndRange], [1, 1, 0.78]);
  const opacity = useTransform(smoothProgress, [startRange, exitStartRange, exitEndRange], [1, 1, 0]);
  const y = useTransform(smoothProgress, [startRange, exitStartRange, exitEndRange], [0, 0, 200]);
  const rotateX = useTransform(smoothProgress, [startRange, exitStartRange, exitEndRange], [0, 0, -10]);

  return (
    <motion.section
      style={{
        scale,
        opacity,
        y,
        rotateX,
        zIndex: index + 1,
        transformStyle: 'preserve-3d',
        backfaceVisibility: 'hidden',
      }}
      className={`sticky top-0 flex h-screen w-full origin-center flex-col justify-between overflow-hidden border-b border-black/20 p-6 md:p-16 ${step.bgColor} ${step.textColor}`}
    >
      <div
        className="absolute inset-0 z-0 bg-cover bg-center opacity-15 mix-blend-overlay"
        style={{ backgroundImage: `url(${step.bgImageUrl})` }}
      />
      <div className="relative z-10 mx-auto my-auto grid w-full max-w-7xl grid-cols-1 items-start gap-8 pt-6 lg:grid-cols-12">
        <div className="space-y-6 lg:col-span-5">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-3xl font-bold leading-tight tracking-tight md:text-5xl"
          >
            {step.title}
          </motion.h2>
          <div className="space-y-6">
            <p className="max-w-md font-normal leading-relaxed opacity-85 text-base md:text-lg">
              {step.description}
            </p>
            <button className="rounded-full bg-white px-7 py-3 text-sm font-semibold text-ink-800 shadow-lg transition-colors hover:bg-amber">
              Inquire Corporate Services
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-5 pt-4 sm:flex-row lg:flex-col lg:col-span-5">
          {step.features.map((feature, idx) => (
            <div key={idx} className="flex items-center gap-3">
              <span className="text-base text-white/50">✦</span>
              <span className="text-base font-medium opacity-90 md:text-lg">{feature}</span>
            </div>
          ))}
        </div>
        <div className="hidden text-right lg:col-span-2 lg:block">
          <span className="block select-none text-8xl font-light tracking-tighter opacity-15 xl:text-9xl">
            {step.id}
          </span>
        </div>
      </div>
      <div className="relative z-10 mx-auto w-full max-w-7xl pb-6">{step.content}</div>
    </motion.section>
  );
}
