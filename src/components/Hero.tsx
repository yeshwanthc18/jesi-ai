import { useReveal } from '../hooks/useReveal';

export function Hero() {
  const { ref, inView } = useReveal();

  return (
    <section id="top" className="relative min-h-screen w-full overflow-hidden bg-brand-dark">
      {/* Full-section background image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=80"
          alt="Modern architecture building"
          className="h-full w-full object-cover"
          loading="eager"
        />
        {/* Dark gradient overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/80 via-brand-dark/50 to-brand-dark/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/70 to-transparent" />
      </div>

      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 z-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-[1400px] flex-col justify-end px-6 pb-16 pt-24 lg:px-10 lg:pb-24 lg:pt-32">
        <div
          ref={ref}
          className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          {/* Eyebrow */}
          <p className="mb-5 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.14em] text-brand-red">
            <span className="block h-px w-8 bg-brand-red" />
            MEP Engineering Services — USA · India · Qatar
          </p>

          {/* Headline */}
          <h1 className="font-display text-[2.75rem] font-extrabold uppercase leading-[0.95] tracking-tight text-white sm:text-6xl lg:text-[5.5rem] xl:text-[6.5rem]">
            Engineering possibilities,
            <br />
            <span className="text-brand-red">unlocked.</span>
          </h1>

          {/* Sub copy */}
          <p className="mt-6 max-w-xl text-base leading-relaxed text-gray-300 lg:text-lg">
            We take 2D drawings and turn them into fully coordinated BIM models,
            fabrication-ready shop drawings, and immersive AR walkthroughs — so
            your team can stay focused on winning the next project.
          </p>

          {/* Stats */}
          <div className="mt-10 flex flex-col gap-6 sm:flex-row sm:gap-12">
            {[
              { n: '13', suffix: 'k+', label: 'Projects delivered globally across MEP, BIM and KPO services' },
              { n: '200', suffix: '+', label: 'Engineers across the US, India, and Qatar' },
              { n: '72', suffix: 'hrs', label: 'Average turnaround for standard BIM coordination projects' },
            ].map((stat, i) => (
              <div key={i}>
                <div className="font-display text-4xl font-extrabold tracking-tight text-white">
                  {stat.n}
                  <span className="text-brand-red">{stat.suffix}</span>
                </div>
                <p className="mt-1 max-w-[160px] text-xs leading-snug text-gray-400">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded bg-brand-red px-7 py-3 font-display text-sm font-semibold text-white transition-colors hover:bg-[#C94040]"
            >
              Start a free BIM pilot →
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 rounded border border-white/20 px-7 py-3 font-display text-sm font-medium text-gray-300 transition-colors hover:border-white hover:text-white"
            >
              Explore services
            </a>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 right-6 z-10 hidden items-center gap-3 font-mono text-[10px] uppercase tracking-[0.12em] text-white/25 lg:flex lg:right-10">
        Scroll to explore
        <span className="block h-px w-10 bg-white/25" />
      </div>
    </section>
  );
}
