import { useReveal } from '../hooks/useReveal';

export function Hero() {
  const { ref, inView } = useReveal();

  return (
    <section id="top" className="bg-white pt-16">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div
          ref={ref}
          className={`grid grid-cols-1 items-start gap-4 pt-12 pb-10 lg:grid-cols-[1fr_auto] lg:pt-20 lg:pb-14 transition-all duration-700 ${
            inView ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <h1 className="font-display text-[2.5rem] font-bold uppercase leading-[0.95] tracking-tight text-ink-900 sm:text-6xl lg:text-[5rem] xl:text-[6rem]">
            Engineering possibilities,
            <br />
            <span className="text-ink-400">unlocked.</span>
          </h1>
          <p className="text-sm italic text-ink-400 lg:mt-3 lg:max-w-[200px]">
            Your MEP &amp; BIM partner — phew, you can chill now.
          </p>
        </div>
      </div>

      {/* Full-width photo strip */}
      <div className="relative h-[260px] overflow-hidden sm:h-[400px] lg:h-[520px]">
        <img
          src="https://images.ctfassets.net/v7wr16nrr0mz/3zH1Alt8IM2oiObIaDtsdE/0461c25fa44bec5211d562f847eb816a/rmu1-item4-what-is-bim-for-structures-thumb-1172x660.jpg"
          alt="Modern architecture building"
          className="h-full w-full object-cover"
          loading="eager"
        />
      </div>
    </section>
  );
}
