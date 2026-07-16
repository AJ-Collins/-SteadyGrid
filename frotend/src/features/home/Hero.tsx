import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

/* ── Carousel Slide Data ── */
const slides = [
  {
    image: '/solar-installation.png',
    heading: 'End-to-End Solar, Built Around You',
    description:
      'We design, plan, and install your system from start to finish—so you get reliable power without the complexity.',
    cta: 'START YOUR PROJECT',
    link: '/start-project',
  },
  {
    image: 'https://checkout.bluettipower.com/cdn/shop/files/banner_842db15e-ce09-46a2-ba23-d7c3a558bd2b.jpg?v=1775039932&width=3840',
    heading: 'Power Your Home With Clean Energy',
    description:
      'From rooftop panels to battery storage, we deliver turnkey solar solutions tailored to your needs.',
    cta: 'EXPLORE SOLUTIONS',
    link: '/solutions',
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goTo = useCallback(
    (idx: number) => {
      if (isTransitioning) return;
      setIsTransitioning(true);
      setCurrent(idx);
      setTimeout(() => setIsTransitioning(false), 600);
    },
    [isTransitioning],
  );

  const next = useCallback(
    () => goTo((current + 1) % slides.length),
    [current, goTo],
  );
  const prev = useCallback(
    () => goTo((current - 1 + slides.length) % slides.length),
    [current, goTo],
  );

  /* Auto-advance every 6 s */
  useEffect(() => {
    const id = setInterval(next, 6000);
    return () => clearInterval(id);
  }, [next]);

  const slide = slides[current];

  return (
    <section className="w-full bg-white py-0 sm:py-4 px-0 sm:px-4 lg:px-6">
      <div className="max-w-[1400px] mx-auto flex flex-col">
        {/* ═══════════════════════════════════════════
            Top Hero Carousel
        ═══════════════════════════════════════════ */}
        <div className="w-full relative h-[450px] sm:h-[500px] lg:h-[550px] sm:rounded-t-lg overflow-hidden group bg-[#0a101d]">
          {/* Slides */}
          {slides.map((s, i) => (
            <div
              key={i}
              className="absolute inset-0 transition-opacity duration-600"
              style={{
                opacity: i === current ? 1 : 0,
                pointerEvents: i === current ? 'auto' : 'none',
              }}
            >
              <img
                src={s.image}
                alt={s.heading}
                className="absolute inset-0 w-full h-full object-cover object-center"
              />
              {/* Dark overlay for readability - optimized for mobile & desktop */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent sm:bg-gradient-to-r sm:from-black/50 sm:via-black/20 sm:to-transparent" />
            </div>
          ))}

          {/* Text Content */}
          <div className="relative z-10 h-full flex flex-col justify-end sm:justify-center p-6 pb-12 sm:p-12 lg:p-16 max-w-3xl">
            <h2 className="text-white text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] mb-5">
              {slide.heading}
            </h2>
            <p className="text-neutral-200 text-base sm:text-lg mb-8 leading-relaxed max-w-xl">
              {slide.description}
            </p>
            <Link
              to={slide.link}
              className="inline-flex items-center gap-2 bg-[#22a055] hover:bg-[#187a3e] text-white font-extrabold py-3.5 px-8 rounded text-[13px] tracking-wider uppercase transition-all shadow-lg w-fit"
            >
              {slide.cta}
            </Link>
          </div>

          {/* Carousel Navigation Arrows */}
          <button
            onClick={prev}
            aria-label="Previous slide"
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/20 hover:bg-white text-white hover:text-black flex items-center justify-center backdrop-blur-sm transition-all cursor-pointer opacity-0 group-hover:opacity-100"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={next}
            aria-label="Next slide"
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/20 hover:bg-white text-white hover:text-black flex items-center justify-center backdrop-blur-sm transition-all cursor-pointer opacity-0 group-hover:opacity-100"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* ═══════════════════════════════════════════
            Stats Ribbon
        ═══════════════════════════════════════════ */}
        <div className="w-full bg-[#0B1525] sm:rounded-b-lg overflow-hidden grid grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-neutral-800 shadow-md">

          <div className="flex flex-col items-center justify-center p-4 sm:p-5 text-center group hover:bg-[#0B1525] transition-colors">
            <span className="text-[#22a055] text-3xl sm:text-4xl font-black tracking-tight mb-2 group-hover:scale-110 transition-transform duration-300">
              10+
            </span>
            <span className="text-neutral-300 text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em]">
              Projects Completed
            </span>
          </div>

          <div className="flex flex-col items-center justify-center p-4 sm:p-5 text-center group hover:bg-[#0B1525] transition-colors">
            <span className="text-[#22a055] text-3xl sm:text-4xl font-black tracking-tight mb-2 group-hover:scale-110 transition-transform duration-300">
              1+ MW
            </span>
            <span className="text-neutral-300 text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em]">
              Energy Delivered
            </span>
          </div>

          <div className="flex flex-col items-center justify-center p-4 sm:p-5 text-center group hover:bg-[#0B1525] transition-colors">
            <span className="text-[#22a055] text-3xl sm:text-4xl font-black tracking-tight mb-2 group-hover:scale-110 transition-transform duration-300">
              99%
            </span>
            <span className="text-neutral-300 text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em]">
              Happy Clients
            </span>
          </div>

          <div className="flex flex-col items-center justify-center p-4 sm:p-5 text-center group hover:bg-[#0B1525] transition-colors">
            <span className="text-[#22a055] text-3xl sm:text-4xl font-black tracking-tight mb-2 group-hover:scale-110 transition-transform duration-300">
              100%
            </span>
            <span className="text-neutral-300 text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em]">
              Commitment to Quality
            </span>
          </div>

        </div>
      </div>
    </section>
  );
}