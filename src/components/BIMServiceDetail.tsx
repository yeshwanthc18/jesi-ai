import { Layers, Search, FileText, ClipboardList, HelpCircle, Home, ArrowRight } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

const deliverables = [
  {
    icon: Layers,
    title: 'Federated 3D MEP model',
    body: 'Complete Revit model with mechanical, electrical, and plumbing systems coordinated in a single federated environment. Delivered as .RVT + NWD.',
    color: '#A91E2D',
    bg: 'rgba(169,30,45,0.15)',
  },
  {
    icon: Search,
    title: 'Clash detection report',
    body: 'Full Navisworks clash matrix with discipline-by-discipline clash count, visual snapshots, and a resolution log tracking every coordination decision.',
    color: '#378ADD',
    bg: 'rgba(55,138,221,0.15)',
  },
  {
    icon: FileText,
    title: 'Shop drawing set',
    body: 'Fabrication-ready plan views, sections, elevations, and isometrics extracted directly from the Revit model. Stamped and ready for subcontractor use.',
    color: '#F5A623',
    bg: 'rgba(245,166,35,0.15)',
  },
  {
    icon: ClipboardList,
    title: 'Quantity schedules (BOQ)',
    body: 'Revit-extracted bill of quantities by discipline, system, and floor level — formatted for your estimating workflow or fed directly into JESi AI.',
    color: '#1D9E75',
    bg: 'rgba(29,158,117,0.15)',
  },
  {
    icon: HelpCircle,
    title: 'Coordination RFI log',
    body: 'Structured RFI register capturing every design question raised during modeling — tied to model location and discipline for fast owner response.',
    color: '#AFA9EC',
    bg: 'rgba(175,169,236,0.15)',
  },
  {
    icon: Home,
    title: 'As-built model update',
    body: 'Post-construction model update incorporating site markups and change orders — ready for FM handover at LOD 500 with full parameter data.',
    color: '#C94040',
    bg: 'rgba(201,64,64,0.15)',
  },
];

const lodRows = [
  { lod: '100', stage: 'Conceptual', delivers: 'Generic system massing, approximate sizes, spatial allocation', use: 'Feasibility, early cost estimates', color: '#378ADD' },
  { lod: '200', stage: 'Schematic', delivers: 'Approximate geometry, system routing, equipment placement', use: 'Design development, owner review', color: '#85B7EB' },
  { lod: '300', stage: 'Coordinated', delivers: 'Precise geometry, fully coordinated with structure and arch, clash-free', use: 'Permit set, subcontractor coordination', color: '#A91E2D' },
  { lod: '400', stage: 'Fabrication', delivers: 'Fabrication-level detail, connection types, hanger locations, spool drawings', use: 'Shop drawings, prefab, installation', color: '#1D9E75' },
  { lod: '500', stage: 'As-built', delivers: 'Site-verified geometry and data, O&M information embedded', use: 'FM handover, digital twin', color: '#639922' },
];

const tools = ['Autodesk Revit MEP', 'Navisworks Manage', 'AutoCAD MEP', 'BIM 360 / ACC', 'Autodesk Tandem', 'Dynamo', 'Bluebeam Revu', 'Microsoft Teams'];

const processSteps = [
  { num: '01', title: 'You send 2D', sub: 'PDF, DWG, or RFP' },
  { num: '02', title: 'Scope review', sub: 'LOD + timeline agreed' },
  { num: '03', title: 'BIM modeling', sub: 'Revit + coordination' },
  { num: '04', title: 'Clash check', sub: 'Navisworks review' },
  { num: '05', title: 'QC review', sub: 'Senior engineer sign-off' },
  { num: '06', title: 'Delivery', sub: 'RVT + DWG + PDF' },
];

export function BIMServiceDetail() {
  const { ref, inView } = useReveal();

  return (
    <section id="bim-detail" className="bg-brand-dark py-16 lg:py-24">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        {/* Discipline rail + content */}
        <div className="flex overflow-hidden rounded-xl border border-white/10">
          {/* Rail bar */}
          <div
            className="w-1 shrink-0"
            style={{ background: 'linear-gradient(to bottom, #A91E2D 33%, #F5A623 66%, #378ADD 100%)' }}
          />

          <div className="flex-1 p-8 lg:p-12">
            {/* Intro block */}
            <div ref={ref} className={`grid gap-8 lg:grid-cols-2 lg:gap-12 transition-all duration-700 ${inView ? 'opacity-100' : 'opacity-0'}`}>
              <h3 className="font-display text-2xl font-semibold leading-tight text-white lg:text-3xl">
                From schematic massing to fabrication-ready models — at the exact LOD your project demands.
              </h3>
              <div>
                <p className="text-sm leading-relaxed text-gray-400 lg:text-base">
                  We build federated MEP BIM models that combine mechanical, electrical, and plumbing systems into a single, coordinated Revit environment — mapped to your company's BIM standards and delivered cloud-ready on BIM 360 or ACC.
                </p>
                <p className="mt-4 text-sm leading-relaxed text-gray-400 lg:text-base">
                  Our teams work in your time zone, use your templates, and integrate directly into your project workflow. Every model is clash-checked before delivery. No surprises on site.
                </p>
              </div>
            </div>

            {/* Stat strip */}
            <div className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-white/10 lg:grid-cols-4">
              {[
                { n: 'LOD', b: '100–500', l: 'Full range from conceptual massing to as-built FM handover' },
                { n: '', b: '72hr', l: 'Turnaround for standard single-floor coordination models' },
                { n: '', b: '0', l: 'Unresolved clashes in models before delivery — guaranteed' },
                { n: '', b: '3', l: 'Disciplines coordinated in a single federated model' },
              ].map((stat, i) => (
                <div key={i} className="bg-[#0F1520] p-5">
                  <div className="font-display text-2xl font-extrabold tracking-tight text-white">
                    {stat.n && <span className="text-gray-500">{stat.n} </span>}
                    <span className="text-brand-red">{stat.b}</span>
                  </div>
                  <p className="mt-1 text-xs leading-snug text-gray-500">{stat.l}</p>
                </div>
              ))}
            </div>

            {/* Deliverables */}
            <div className="mt-12">
              <div className="mb-5 flex items-center gap-3">
                <span className="font-mono text-xs uppercase tracking-[0.14em] text-gray-600">What you get</span>
                <span className="h-px flex-1 bg-white/10" />
              </div>
              <div className="grid gap-px overflow-hidden rounded-lg border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
                {deliverables.map((item) => (
                  <div key={item.title} className="bg-[#0F1520] p-6 transition-colors hover:bg-[#141C2B]">
                    <div
                      className="mb-3.5 flex h-9 w-9 items-center justify-center rounded"
                      style={{ background: item.bg }}
                    >
                      <item.icon className="h-5 w-5" style={{ color: item.color }} />
                    </div>
                    <h4 className="font-display text-sm font-semibold text-white">{item.title}</h4>
                    <p className="mt-1.5 text-xs leading-relaxed text-gray-500">{item.body}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* LOD Table */}
            <div className="mt-12">
              <div className="mb-5 flex items-center gap-3">
                <span className="font-mono text-xs uppercase tracking-[0.14em] text-gray-600">Level of detail breakdown</span>
                <span className="h-px flex-1 bg-white/10" />
              </div>
              <div className="overflow-hidden rounded-lg border border-white/10">
                {/* Header */}
                <div className="grid grid-cols-[60px_120px_1fr_160px] bg-[#141C2B]">
                  {['LOD', 'Stage', 'What JES delivers', 'Common use'].map((h) => (
                    <div key={h} className="px-4 py-3 font-display text-xs font-semibold text-white">{h}</div>
                  ))}
                </div>
                {/* Rows */}
                {lodRows.map((row) => (
                  <div key={row.lod} className="grid grid-cols-[60px_120px_1fr_160px] border-t border-white/10">
                    <div className="px-4 py-3 font-mono text-xs text-gray-400">
                      <span className="mr-2 inline-block h-2.5 w-2.5 rounded-full" style={{ background: row.color }} />
                      {row.lod}
                    </div>
                    <div className="px-4 py-3 text-xs text-gray-400">{row.stage}</div>
                    <div className="px-4 py-3 text-xs text-gray-500">{row.delivers}</div>
                    <div className="px-4 py-3 text-xs text-gray-500">{row.use}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tools */}
            <div className="mt-12">
              <div className="mb-5 flex items-center gap-3">
                <span className="font-mono text-xs uppercase tracking-[0.14em] text-gray-600">Tools we work in</span>
                <span className="h-px flex-1 bg-white/10" />
              </div>
              <div className="flex flex-wrap gap-2">
                {tools.map((tool) => (
                  <span
                    key={tool}
                    className="rounded border border-white/15 bg-[#141C2B] px-3.5 py-1.5 font-mono text-xs text-gray-400 transition-colors hover:border-white/40 hover:text-white"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            {/* Process track */}
            <div className="mt-12">
              <div className="mb-5 flex items-center gap-3">
                <span className="font-mono text-xs uppercase tracking-[0.14em] text-gray-600">How it works</span>
                <span className="h-px flex-1 bg-white/10" />
              </div>
              <div className="relative flex flex-col gap-6 sm:flex-row sm:gap-0">
                {/* Connecting line */}
                <div className="absolute left-5 right-5 top-5 hidden h-px bg-white/15 sm:block" />
                {processSteps.map((step) => (
                  <div key={step.num} className="relative z-10 flex-1 text-center">
                    <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-brand-dark font-mono text-xs text-gray-400 transition-colors hover:border-brand-red hover:bg-brand-red hover:text-white">
                      {step.num}
                    </div>
                    <div className="text-xs font-medium text-white">{step.title}</div>
                    <div className="mt-0.5 text-xs text-gray-600">{step.sub}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA strip */}
            <div className="mt-12 flex flex-col items-start justify-between gap-4 rounded-lg border border-white/10 bg-[#141C2B] p-7 sm:flex-row sm:items-center lg:p-8">
              <div>
                <h4 className="font-display text-lg font-bold text-white">Try BIM modeling at zero risk</h4>
                <p className="mt-1 text-sm text-gray-500">
                  Send us one drawing. We'll return a fully coordinated BIM model in 72 hours — completely free, no commitment required.
                </p>
              </div>
              <a
                href="#contact"
                className="group inline-flex shrink-0 items-center gap-2 rounded bg-brand-red px-6 py-3 font-display text-sm font-semibold text-white transition-colors hover:bg-[#C94040]"
              >
                Start free pilot
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
