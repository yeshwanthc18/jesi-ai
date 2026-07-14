import { Linkedin, Instagram, Twitter } from 'lucide-react';

const footerLinks = {
  Services: ['Quantity Take Off', 'Equipment Selection', 'Spec Review', 'BIM Modelling', 'AR/VR Modelling', 'MEP Drafting'],
  Company: ['About Us', 'Why JES', 'Process', 'FAQ'],
  Resources: ['Energy Modelling', 'Revit Models', 'Building Engineering', 'Case Studies'],
};

export function Footer() {
  return (
    <footer className="bg-white py-16">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <a href="#top" className="flex items-center gap-2">
              <span className="font-display text-xl font-bold text-ink-900">JES</span>
              <span className="text-sm font-medium text-ink-400">Engineering</span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-500">
              Combining India.-based engineering expertise with 200+ professional
              engineers across India and Qatar. AI-powered engineering and CAD
              services you can count on.
            </p>
            <div className="mt-6 flex gap-3">
              {[Linkedin, Instagram, Twitter].map((Icon, i) => (
                <a key={i} href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-ink-200 text-ink-500 transition-colors hover:border-pink hover:text-pink">
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="mb-4 text-xs font-semibold uppercase tracking-wider text-ink-400">{title}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-ink-500 transition-colors hover:text-pink">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-ink-200 pt-8 sm:flex-row">
          <p className="text-sm text-ink-400">© 2024–2026 JES Engineering. All rights reserved.</p>
          <div className="flex gap-6 text-sm text-ink-400">
            <a href="#" className="transition-colors hover:text-ink-700">Privacy Policy</a>
            <a href="#" className="transition-colors hover:text-ink-700">Terms &amp; Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
