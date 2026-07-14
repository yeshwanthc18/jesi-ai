import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Process', href: '#process' },
  { label: 'Clients', href: '#clients' },
  { label: 'FAQ', href: '#faq' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-white/95 backdrop-blur-md border-b border-ink-200' : 'bg-white border-b border-ink-200'
        }`}
      >
        <nav className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="flex h-16 items-center justify-between">
            <a href="#top" className="flex items-center gap-2">
              <span className="font-display text-xl font-bold tracking-tight text-ink-900">JES</span>
              <span className="text-sm font-medium text-ink-400">Engineering</span>
            </a>

            <div className="hidden items-center gap-7 md:flex">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href}
                  className="text-sm font-medium text-ink-500 transition-colors hover:text-ink-900">
                  {link.label}
                </a>
              ))}
              {/* <a href="#contact"
                className="group inline-flex items-center gap-1.5 rounded-full bg-ink-900 px-5 py-2 text-sm font-semibold text-white transition-all duration-300 hover:bg-teal hover:text-ink-900">
                Drop your RFQ
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a> */}
            </div>

            <button onClick={() => setOpen(!open)} className="md:hidden text-ink-900" aria-label="Toggle menu">
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </nav>
      </header>

      <div className={`fixed inset-0 z-40 bg-white transition-all duration-300 md:hidden ${open ? 'opacity-100' : 'pointer-events-none opacity-0'}`}>
        <div className="flex h-full flex-col items-center justify-center gap-6">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}
              className="font-display text-2xl font-medium text-ink-800">{link.label}</a>
          ))}
        </div>
      </div>
    </>
  );
}
