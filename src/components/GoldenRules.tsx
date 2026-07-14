import { useReveal } from '../hooks/useReveal';

export function GoldenRules() {
  const { ref, inView } = useReveal();

  return (
    <section className="bg-ink-900 py-16 lg:py-24">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div
          ref={ref}
          className={`grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16 transition-all duration-700 ${
            inView ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {/* Text */}
          <div>
            <p className="font-display text-2xl font-bold uppercase leading-tight tracking-tight text-white sm:text-3xl lg:text-4xl">
              The highest-quality best practices for engineering delivery, at
              your fingertips.
            </p>
            <p className="mt-6 max-w-md text-base leading-relaxed text-ink-400">
              By harvesting, curating and elevating the processes through which
              buildings are made, we are creating the Golden Rules to ensure the
              most precise, successful and efficient completion of projects —
              every single time.
            </p>
          </div>

          {/* Image */}
          <div className="relative overflow-hidden">
            <img
              src="https://images.ctfassets.net/v7wr16nrr0mz/3zH1Alt8IM2oiObIaDtsdE/0461c25fa44bec5211d562f847eb816a/rmu1-item4-what-is-bim-for-structures-thumb-1172x660.jpg"
              alt="Architecture detail"
              className="h-[320px] w-full object-cover lg:h-[440px]"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
