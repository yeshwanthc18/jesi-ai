import { Play } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

const testimonials = [
  {
    quote:
      "We appreciate JES's expertise in VRV and FCU takeoffs. Their fast, accurate, and on-time support has been key to our success. Highly recommended for reliable, high-quality service.",
    author: 'Thermosystems, IL',
    role: 'Senior Partner',
    photo: 1181686,
  },
  {
    quote:
      "We truly appreciate your work. Without outsourcing our takeoffs and selections, we couldn't handle the volume our estimating department manages today. Excellent support all around.",
    author: 'Nick Colby',
    role: 'President, Colby Equipment',
    photo: 1222271,
  },
  {
    quote:
      "JES's 3D virtual design blew my client away. Their detail and dedication exceeded expectations, giving me confidence in presenting our equipment designs. Outstanding expertise.",
    author: 'MRG',
    role: 'Sales Engineer, Nashville TN',
    photo: 3763188,
  },
  {
    quote:
      "JES enhanced our air handling business with excellent selection, drawings, and submittals. Their quick, reliable service saves time, cuts costs, and improves satisfaction.",
    author: 'D & B Building Services',
    role: 'Partner, NJ',
    photo: 2379004,
  },
];

export function Testimonials() {
  const { ref, inView } = useReveal();

  return (
    <section id="clients" className="bg-ink-900 py-16 lg:py-24">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div ref={ref} className={`reveal ${inView ? 'in-view' : ''} mb-12`}>
          <h2 className="font-display text-3xl font-bold uppercase leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
            What our clients are
            <br />
            <span className="text-ink-500">saying about us</span>
          </h2>
        </div>

        {/* 2x2 photo grid */}
        <div className="mb-12 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className={`group relative overflow-hidden aspect-[4/3] transition-all duration-700 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <img
                src={`https://images.pexels.com/photos/${t.photo}/pexels-photo-${t.photo}.jpeg?auto=compress&cs=tinysrgb&w=600`}
                alt={t.author}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-900/90 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm transition-all duration-300 group-hover:bg-pink group-hover:scale-110">
                  <Play className="h-5 w-5 fill-white text-white" />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className="text-sm font-semibold text-white">{t.author}</p>
                <p className="text-xs text-white/70">{t.role}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Quote columns */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((t, i) => (
            <div key={i}>
              <p className="text-sm leading-relaxed text-ink-400">"{t.quote}"</p>
              <div className="mt-4 text-xs font-semibold text-pink">{t.author}</div>
              <div className="text-xs text-ink-500">{t.role}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
