import { useState, useEffect } from 'react';
import { X, ArrowRight, Sparkles } from 'lucide-react';

export function ProjectPopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setOpen(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={() => setOpen(false)}
      />

      {/* Popup card */}
    <div className="relative z-10 w-full max-w-lg overflow-hidden rounded-2xl bg-white shadow-2xl">
        {/* Top accent bar */}
        <div className="h-1.5 w-full bg-brand-red" />

        {/* Close button */}
        <button
          onClick={() => setOpen(false)}
          className="absolute right-4 top-5 z-20 flex h-8 w-8 items-center justify-center rounded-full text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-700"
          aria-label="Close popup"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Image header */}
        <div className="relative h-44 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80"
            alt="New BIM project"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
          <div className="absolute bottom-4 left-5 flex items-center gap-2">
            <span className="flex items-center gap-1.5 rounded-full bg-brand-red px-3 py-1 text-xs font-semibold text-white">
              <Sparkles className="h-3 w-3" />
              New Project
            </span>
          </div>
        </div>

        {/* Body */}
        <div className="p-6">
          <h3 className="font-display text-xl font-bold text-brand-dark">
            BIM Modeling Pilot — Now Accepting Projects
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-gray-600">
            Send us one drawing. We'll return a fully coordinated BIM model in
            72 hours — completely free, no commitment required. Experience the
            JES difference on your next MEP project.
          </p>

          {/* Quick stats */}
          <div className="mt-4 grid grid-cols-3 gap-3">
            {[
              { label: 'Turnaround', value: '72hrs' },
              { label: 'Disciplines', value: 'M·E·P' },
              { label: 'Cost', value: 'Free' },
            ].map((s) => (
              <div key={s.label} className="rounded-lg bg-gray-light p-3 text-center">
                <div className="font-display text-lg font-bold text-brand-red">{s.value}</div>
                <div className="text-xs text-gray-500">{s.label}</div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="group mt-5 flex w-full items-center justify-center gap-2 rounded-lg bg-brand-red px-6 py-3 font-display text-sm font-semibold text-white transition-colors hover:bg-[#C94040]"
          >
            Start your free pilot
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <button
            onClick={() => setOpen(false)}
            className="mt-2 w-full text-center text-xs text-gray-400 transition-colors hover:text-gray-600"
          >
            Maybe later
          </button>
        </div>
      </div>
    </div>
  );
}
