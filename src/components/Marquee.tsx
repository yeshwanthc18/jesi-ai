const services = [
  'Quantity Take Off', 'Equipment Selection', 'Spec Review', 'BIM Modelling',
  'Revit Models', 'AR/VR Modelling', 'MEP Drafting', 'Energy Modelling',
];

export function Marquee() {
  return (
    <section className="overflow-hidden border-y border-ink-200 bg-ink-100 py-4">
      <div className="flex w-max animate-marquee whitespace-nowrap">
        {[...services, ...services].map((s, i) => (
          <span key={i} className="px-5 font-display text-base font-medium text-ink-400">
            {s} <span className="text-pink">/</span>
          </span>
        ))}
      </div>
    </section>
  );
}
