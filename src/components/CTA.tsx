import { ArrowRight } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

export function CTA() {
  const { ref, inView } = useReveal();

  return (
    <section id="contact" className="bg-[#a91e2d] py-20 lg:py-28">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div
          ref={ref}
          className={`grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center transition-all duration-700 ${
            inView ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div>
            <h2 className="font-display text-4xl font-bold uppercase leading-[0.95] tracking-tight text-white sm:text-5xl lg:text-7xl">
              Let's team up!
            </h2>
            <p className="mt-6 max-w-xl text-lg text-white">
              We are a technology and production studio, built by engineers for
              engineers. Drop your RFQ — we take it from there.
            </p>
          </div>

          <a
            href="mailto:hello@jes-ai.com"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-ink-900 px-10 py-5 text-lg font-bold text-white transition-all duration-300 hover:bg-white hover:text-ink-900 lg:self-center"
          >
            Reach out!
            <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}
