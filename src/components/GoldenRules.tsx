import { motion } from 'framer-motion';
import { useReveal } from '../hooks/useReveal';

export function GoldenRules() {
  const { ref, inView } = useReveal();

  return (
    <section className="bg-ink-800 py-16 lg:py-24">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div
          ref={ref}
          className={`grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16 ${inView ? 'animate-fade-up' : 'opacity-0'}`}
        >
          <div>
            <p className="font-display text-2xl font-bold uppercase leading-tight tracking-tight text-white sm:text-3xl lg:text-4xl">
              The highest-quality best practices for engineering delivery, at
              your fingertips.
            </p>
            <p className="mt-6 max-w-md text-base leading-relaxed text-ink-300">
              By harvesting, curating and elevating the processes through which
              buildings are made, we are creating the Golden Rules to ensure the
              most precise, successful and efficient completion of projects —
              every single time.
            </p>
            <div className="mt-8 flex gap-12">
              {[
                { n: '100%', l: 'Quality Standard' },
                { n: '24/7', l: 'Engineering Support' },
                { n: '200+', l: 'Expert Engineers' },
              ].map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.1 }}
                >
                  <div className="font-display text-3xl font-bold text-brand-red">{s.n}</div>
                  <div className="mt-1 text-xs text-ink-400">{s.l}</div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.7 }}
            className="relative overflow-hidden rounded-2xl"
          >
            <img
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=900&q=80"
              alt="BIM architecture detail"
              className="h-[320px] w-full object-cover lg:h-[440px] transition-transform duration-700 hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink-800/60 to-transparent" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
