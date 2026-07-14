import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { label: 'BIM Services', href: '#bim-detail' },
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
          scrolled
            ? 'bg-ink-50/95 backdrop-blur-md border-b border-ink-200'
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        <nav className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="flex h-16 items-center justify-between">
            <a href="#top" className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-brand-red" />
              <span className="font-display text-xl font-bold tracking-tight text-ink-800">JES</span>
              <span className="hidden text-sm font-medium text-ink-400 sm:inline">BIM Services</span>
            </a>

            <div className="hidden items-center gap-7 md:flex">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-ink-500 transition-colors hover:text-brand-red"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                className="rounded bg-brand-red px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-ink-800"
              >
                Free BIM Pilot →
              </a>
            </div>

            <button
              onClick={() => setOpen(!open)}
              className="text-ink-800 md:hidden"
              aria-label="Toggle menu"
            >
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-ink-50 md:hidden"
          >
            <div className="flex h-full flex-col items-center justify-center gap-6">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.06 }}
                  className="font-display text-2xl font-medium text-ink-800"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.06 }}
                className="mt-4 rounded bg-brand-red px-8 py-3 text-sm font-semibold text-white"
              >
                Free BIM Pilot →
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
