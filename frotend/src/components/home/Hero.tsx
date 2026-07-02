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
    image: '/house-porch.png',
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
    <section className="w-full bg-white py-3 sm:py-4 px-3 sm:px-4 lg:px-6">
      <div className="max-w-[1400px] mx-auto flex flex-col gap-3">
        {/* ═══════════════════════════════════════════
            Top Grid: Two Cards Side by Side
        ═══════════════════════════════════════════ */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
          {/* ── Left Card: EG4 12000XP Product ── */}
          <div
            className="relative h-[340px] sm:h-[400px] rounded-lg overflow-hidden group cursor-pointer"
            style={{
              backgroundImage:
                'url("/house-porch.png")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            {/* Gradient overlay – heavier on the left for text readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/20" />

            {/* Content */}
            <div className="relative z-10 h-full flex flex-col justify-between p-6 sm:p-8">
              {/* Text block */}
              <div className="flex flex-col gap-1 max-w-[260px]">
                <h2
                  className="text-[#fbbf24] text-xl sm:text-2xl leading-tight"
                  style={{ fontFamily: "'Georgia', serif", fontWeight: 800 }}
                >
                  EG4 12000XP
                </h2>
                <h3
                  className="text-white text-2xl sm:text-3xl font-extrabold tracking-tight leading-[1.05]"
                >
                  OFF-GRID INVERTER
                </h3>
                <p
                  className="text-neutral-300 text-sm italic mt-1 leading-snug"
                >
                  Take Control of Your<br />Energy this Summer
                </p>
              </div>

              {/* Pricing + CTA */}
              <div className="flex flex-col gap-2">
                <div>
                  <span className="text-neutral-400 text-xs font-bold uppercase tracking-wider block">
                    ONLY
                  </span>
                  <span className="text-[#fbbf24] text-3xl sm:text-4xl font-black leading-none">
                    $1,899.99
                  </span>
                </div>
                <p className="text-neutral-400 text-xs">
                  WAS{' '}
                  <span className="line-through">$2,589.29</span>
                </p>
                <Link
                  to="/shop/eg4-12000xp"
                  className="inline-flex items-center gap-2 bg-[#fbbf24] hover:bg-yellow-400 text-black font-extrabold py-2 px-5 rounded text-[11px] tracking-wider uppercase transition-all shadow-md w-fit"
                >
                  SHOP EG4 12000XP
                </Link>
              </div>
            </div>

            {/* Floating inverter image */}
            <img
              src="/eg4-inverter.png"
              alt="EG4 12000XP Inverter"
              className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 h-[60%] sm:h-[70%] object-contain drop-shadow-2xl pointer-events-none select-none transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          {/* ── Right Card: Carousel ── */}
          <div className="relative h-[340px] sm:h-[400px] rounded-lg overflow-hidden group">
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
                  className="absolute inset-0 w-full h-full object-cover"
                />
                {/* Dark overlay for readability */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/70" />
              </div>
            ))}

            {/* Text Content */}
            <div className="relative z-10 h-full flex flex-col justify-end p-6 sm:p-8">
              <h2 className="text-white text-2xl sm:text-3xl font-extrabold tracking-tight leading-tight max-w-[480px]">
                {slide.heading}
              </h2>
              <p className="text-neutral-200 text-sm mt-2 max-w-[420px] leading-relaxed">
                {slide.description}
              </p>
              <Link
                to={slide.link}
                className="inline-flex items-center gap-2 bg-white hover:bg-neutral-100 text-black font-extrabold py-2.5 px-6 rounded text-[11px] tracking-wider uppercase transition-all shadow-lg mt-4 w-fit"
              >
                {slide.cta}
              </Link>
            </div>

            {/* Carousel Navigation Arrows */}
            <button
              onClick={prev}
              aria-label="Previous slide"
              className="absolute left-2 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-white/80 hover:bg-white flex items-center justify-center shadow-md transition-all cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4 text-black" />
            </button>
            <button
              onClick={next}
              aria-label="Next slide"
              className="absolute right-2 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-white/80 hover:bg-white flex items-center justify-center shadow-md transition-all cursor-pointer"
            >
              <ChevronRight className="w-4 h-4 text-black" />
            </button>
          </div>
        </div>

        {/* ═══════════════════════════════════════════
            Free Shipping Banner (Dark style from reference)
        ═══════════════════════════════════════════ */}
        <div className="w-full bg-[#1a1a1a] rounded-lg overflow-hidden flex flex-col sm:flex-row items-center justify-between gap-4 px-6 sm:px-10 py-6 sm:py-8">
          {/* Left: free-shipping text block */}
          <div className="flex flex-col items-center sm:items-start gap-1">
            <div
              className="relative border-[3px] border-[#fbbf24] rounded-md px-6 py-3 sm:px-10 sm:py-4"
            >
              <h3
                className="text-[#fbbf24] text-3xl sm:text-5xl lg:text-6xl font-black italic tracking-tight leading-none uppercase"
                style={{ fontFamily: "'Georgia', serif" }}
              >
                FREE SHIPPING
              </h3>
            </div>
            <p className="text-neutral-400 text-xs sm:text-sm italic mt-1 tracking-wide">
              *on qualifying orders over $3,000
            </p>
          </div>

          {/* Right: CTA button */}
          <Link
            to="/shop"
            className="shrink-0 bg-white hover:bg-neutral-100 text-black font-extrabold py-3 px-8 rounded text-xs sm:text-sm tracking-wider uppercase transition-all cursor-pointer flex items-center gap-2 shadow-md"
          >
            START YOUR CART NOW
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* ═══════════════════════════════════════════
            Bottom Bar: 10% Off Select Batteries
        ═══════════════════════════════════════════ */}
        <div className="w-full bg-neutral-950 rounded-lg px-6 py-3 flex flex-col items-center justify-center text-center">
          <h4 className="text-white text-sm sm:text-base font-bold tracking-wide">
            10% Off Select Batteries
          </h4>
          <p className="text-neutral-400 text-[11px] mt-0.5">
            Add to cart to see your discount on select batteries! Free shipping on qualifying orders of $3,000 or more.
          </p>
        </div>
      </div>
    </section>
  );
}