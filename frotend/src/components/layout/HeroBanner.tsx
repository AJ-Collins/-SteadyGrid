"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

export interface HeroSlide {
  tag?: string;
  title: string;
  subtitle?: string;
  bullets?: string[];
  ctaLabel?: string;
  ctaHref?: string;
  image: string;
  imageAlt?: string;
  overlayFrom?: string;
}

interface HeroBannerProps {
  slides: HeroSlide[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
}

const DEFAULT_SLIDES: HeroSlide[] = [
  {
    title: "Noise Cancelling\nHeadphone",
    bullets: ["Bose Over-Ear Headphone", "WiFi, Voice Assistant", "Low Latency Game Mode"],
    ctaLabel: "BUY NOW",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1400&auto=format&fit=crop",
    overlayFrom: "from-black/35",
  },
  {
    title: "Next-Gen\nLaptops",
    bullets: ["Ultra-thin design", "16hr battery life", "OLED 4K display"],
    ctaLabel: "SHOP NOW",
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=1400&auto=format&fit=crop",
    overlayFrom: "from-black/35",
  },
  {
    title: "Pro Camera\nKits",
    bullets: ["4K 60fps video", "Weather-sealed body", "Dual card slots"],
    ctaLabel: "EXPLORE",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1400&auto=format&fit=crop",
    overlayFrom: "from-black/35",
  },
];

export function HeroBanner({
  slides = DEFAULT_SLIDES,
  autoPlay = true,
  autoPlayInterval = 5000,
}: Partial<HeroBannerProps>) {
  const [current, setCurrent] = useState(0);

  const total = slides.length;

  const go = (index: number) => {
    setCurrent((index + total) % total);
  };

  const next = () => {
    setCurrent((prev) => (prev + 1) % total);
  };

  const prev = () => {
    setCurrent((prev) => (prev - 1 + total) % total);
  };

  useEffect(() => {
    if (!autoPlay) return;

    const interval = setInterval(() => {
      next();
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [autoPlay, autoPlayInterval, total]);

  const slide = slides[current];

  return (
    <div className="relative rounded-xl overflow-hidden w-full max-w-[820px] min-h-[360px] cursor-pointer group">

      {/* Full-bleed background image */}
      <div
        className="absolute inset-0 flex transition-transform duration-[1600ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
        style={{
          width: `${slides.length * 100}%`,
          transform: `translateX(-${current * (100 / slides.length)}%)`,
        }}
      >
        {slides.map((s, i) => (
          <div
            key={i}
            className="relative w-full h-full shrink-0"
            style={{ width: `${100 / slides.length}%` }}
          >
            <img
              src={s.image}
              alt={s.imageAlt ?? s.title}
              className={`w-full h-full object-cover transition-transform duration-[5000ms] ${
                i === current ? "scale-105" : "scale-100"
              }`}
            />
          </div>
        ))}
      </div>

      {/* Left-to-right gradient overlay so text is always readable */}
      <div className={`absolute inset-0 bg-gradient-to-r ${slide.overlayFrom ?? "from-black/25"} via-black/5 to-transparent z-10`} />
      {/* Bottom vignette for dot indicators */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent z-10" />

      {/* Content */}
      <div
        className="absolute inset-0 flex flex-col justify-center px-10 py-10 z-20 transition-all duration-500 opacity-100 translate-y-0">
        {slide.tag && (
          <span className="inline-flex items-center gap-1.5 self-start text-[10px] font-black uppercase tracking-[0.2em] text-white bg-[#2ecc40] px-3 py-1 rounded-full mb-3">
            {slide.tag}
          </span>
        )}

        <h2 className="text-[38px] font-black text-white leading-[1.1] mb-3 whitespace-pre-line" style={{ textShadow: "0 2px 16px rgba(0,0,0,0.4)" }}>
          {slide.title}
        </h2>

        {slide.subtitle && (
          <p className="text-[14px] text-white/75 font-medium mb-2">{slide.subtitle}</p>
        )}

        {slide.bullets && (
          <ul className="flex flex-col gap-1.5 mb-7">
            {slide.bullets.map((b) => (
              <li key={b} className="flex items-center gap-2 text-[13px] text-white/80 font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2ecc40] shrink-0" />
                {b}
              </li>
            ))}
          </ul>
        )}

        <a
          href={slide.ctaHref ?? "#"}
          className="self-start flex items-center gap-2 bg-white text-gray-900 text-[13px] font-extrabold px-6 py-3 rounded-full hover:bg-[#2ecc40] hover:text-white transition-all duration-300 tracking-wide shadow-lg group"
        >
          {slide.ctaLabel ?? "SHOP NOW"}
          <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-200" />
        </a>
      </div>

      {/* Prev arrow */}
      <button
        onClick={prev}
        className="absolute left-0 top-0 bottom-0 w-20 z-30 flex items-center justify-start pl-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      >
        <div className="w-9 h-9 rounded-full bg-black/25 hover:bg-black/45 backdrop-blur-md flex items-center justify-center text-white border border-white/20 transition-all">
          <ChevronLeft size={16} />
        </div>
      </button>

      {/* Next arrow */}
      <button
        onClick={next}
        className="absolute right-0 top-0 bottom-0 w-20 z-30 flex items-center justify-end pr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      >
        <div className="w-9 h-9 rounded-full bg-black/25 hover:bg-black/45 backdrop-blur-md flex items-center justify-center text-white border border-white/20 transition-all">
          <ChevronRight size={16} />
        </div>
      </button>

      {/* Bottom bar: slide count + dots */}
      <div className="absolute bottom-4 left-0 right-0 px-8 flex items-center center justify-center z-30">
        {/* Dots */}
        <div className="flex items-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => go(i)}
              className={`rounded-full transition-all duration-400 ${
                i === current
                  ? "w-6 h-2 bg-[#2ecc40]"
                  : "w-2 h-2 bg-white/40 hover:bg-white/70"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}