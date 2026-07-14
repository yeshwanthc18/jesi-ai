import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useReveal } from '../hooks/useReveal';

const faqs = [
  {
    q: 'What is Quantity Take-Off and why is it important?',
    a: 'Quantity Take-Off (QTO) is the process of measuring materials, components, and labor needed for construction projects. It ensures accurate cost estimation, reduces material wastage, and supports better budgeting and project planning.',
  },
  {
    q: 'How does our team assist with Equipment or Product Selection?',
    a: 'We help clients choose the most efficient, cost-effective, and specification-compliant products and equipment. Our team evaluates performance data, compatibility, and sustainability to ensure the best selection for your project.',
  },
  {
    q: 'What does a Specification Review include?',
    a: 'Our Specification Review process checks technical documentation for consistency, clarity, and compliance with project requirements. This helps prevent design conflicts, delays, and rework during later stages.',
  },
  {
    q: 'What are the benefits of BIM Modelling for my project?',
    a: 'BIM provides a 3D digital representation of your project that integrates design, cost, and time data. It enhances collaboration, reduces design errors, and allows for better decision-making throughout the construction lifecycle.',
  },
  {
    q: "What's the difference between Component and Assembly Revit Models?",
    a: 'Component models represent individual elements such as walls, doors, or HVAC units. Assembly models combine multiple components to form complex systems or units, enabling better visualization and coordination across disciplines.',
  },
];

export function FAQ() {
  const { ref, inView } = useReveal();
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-ink-100 py-16 lg:py-24">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div ref={ref} className={`reveal ${inView ? 'in-view' : ''} mb-12 max-w-2xl`}>
          <h2 className="font-display text-3xl font-bold uppercase leading-tight tracking-tight text-ink-800 sm:text-4xl lg:text-5xl">
            Frequently asked
            <br />
            <span className="text-ink-400">questions.</span>
          </h2>
        </div>

        <div className="max-w-3xl space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`overflow-hidden border transition-colors duration-300 ${
                open === i ? 'border-brand-red/30 bg-white' : 'border-ink-200 bg-white'
              }`}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full items-center justify-between gap-4 p-5 text-left"
              >
                <span className="font-display text-base font-medium text-ink-800">{faq.q}</span>
                <ChevronDown
                  className={`h-5 w-5 shrink-0 text-brand-red transition-transform duration-300 ${open === i ? 'rotate-180' : ''}`}
                />
              </button>
              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="px-5 pb-5 text-sm leading-relaxed text-ink-500">{faq.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
