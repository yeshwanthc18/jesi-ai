import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useReveal } from '../hooks/useReveal';

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '40%']);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const opacity = useTransform(scrollYProgress, [0, 0.6, 1], [1, 0.6, 0]);
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);

  const { ref: revealRef, inView } = useReveal();

  return (
    <section
      ref={ref}
      className="relative h-screen min-h-[640px] w-full overflow-hidden bg-ink-800"
    >
      {/* Parallax background image */}
      <motion.div className="absolute inset-0 z-0" style={{ y, scale }}>
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=80"
          alt="Modern architecture"
          className="h-full w-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink-800/85 via-ink-800/55 to-ink-800/95" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink-800/75 to-transparent" />
      </motion.div>

      {/* Grid overlay */}
      <div
        className="absolute inset-0 z-[1] opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />

      {/* Content */}
      <motion.div
        style={{ y: contentY, opacity }}
        className="relative z-10 mx-auto flex h-full max-w-[1400px] flex-col justify-end px-6 pb-16 pt-24 lg:px-10 lg:pb-24 lg:pt-32"
      >
        <div
          ref={revealRef}
          className={inView ? 'animate-fade-up' : 'opacity-0'}
        >
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-5 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.14em] text-brand-red"
          >
            <span className="block h-px w-8 bg-brand-red" />
            MEP Engineering Services — USA · India · Qatar
          </motion.div>

          {/* Headline */}
          <h1 className="font-display text-[2.75rem] font-extrabold uppercase leading-[0.95] tracking-tight text-white sm:text-6xl lg:text-[5.5rem] xl:text-[6.5rem]">
            {'Engineering possibilities,'.split('').map((char, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
                transition={{ duration: 0.4, delay: 0.2 + i * 0.02 }}
                className="inline-block"
              >
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            ))}
            <br />
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="text-brand-red inline-block"
            >
              unlocked.
            </motion.span>
          </h1>

          {/* Sub copy */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 15 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-ink-200 lg:text-lg"
          >
            We take 2D drawings and turn them into fully coordinated BIM models,
            fabrication-ready shop drawings, and immersive AR walkthroughs — so
            your team can stay focused on winning the next project.
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
            transition={{ duration: 0.5, delay: 1.2 }}
            className="mt-10 flex flex-col gap-6 sm:flex-row sm:gap-12"
          >
            {[
              { n: '13', suffix: 'k+', label: 'Projects delivered globally across MEP, BIM and KPO services' },
              { n: '200', suffix: '+', label: 'Engineers across the US, India, and Qatar' },
              { n: '72', suffix: 'hrs', label: 'Average turnaround for standard BIM coordination projects' },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.9 }}
                transition={{ duration: 0.4, delay: 1.3 + i * 0.1 }}
              >
                <div className="font-display text-4xl font-extrabold tracking-tight text-white">
                  {stat.n}
                  <span className="text-brand-red">{stat.suffix}</span>
                </div>
                <p className="mt-1 max-w-[160px] text-xs leading-snug text-ink-300">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
            transition={{ duration: 0.5, delay: 1.6 }}
            className="mt-10 flex flex-wrap gap-3"
          >
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded bg-brand-red px-7 py-3 font-display text-sm font-semibold text-white transition-all duration-300 hover:bg-ink-800 hover:shadow-2xl"
            >
              Start a free BIM pilot
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </a>
            <a
              href="#services"
              className="group inline-flex items-center gap-2 rounded border border-ink-300/30 px-7 py-3 font-display text-sm font-medium text-ink-200 transition-all duration-300 hover:border-white hover:text-white"
            >
              Explore services
            </a>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 lg:flex"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-ink-300/50">
          Scroll to explore
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          className="h-8 w-px bg-gradient-to-b from-ink-300/50 to-transparent"
        />
      </motion.div>
    </section>
  );
}
