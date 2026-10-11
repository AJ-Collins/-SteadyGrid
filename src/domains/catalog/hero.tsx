"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

import type { HeroSlide } from "@/server/homepage/services/get-homepage";

const fallbackSlides: HeroSlide[] = [
  {
    image: "https://checkout.bluettipower.com/cdn/shop/files/banner_842db15e-ce09-46a2-ba23-d7c3a558bd2b.jpg?v=1775039932&width=3840",
    heading: "End-to-End Solar, Built Around You",
    description: "We design, plan, and install your system from start to finish—so you get reliable power without the complexity.",
    cta: "START YOUR PROJECT",
    link: "/shop/projects",
  },
  {
    image: "https://checkout.bluettipower.com/cdn/shop/files/banner_842db15e-ce09-46a2-ba23-d7c3a558bd2b.jpg?v=1775039932&width=3840",
    heading: "Power Your Home With Clean Energy",
    description: "From rooftop panels to battery storage, we deliver turnkey solar solutions tailored to your needs.",
    cta: "EXPLORE SOLUTIONS",
    link: "/shop/solar-kits",
  },
];

const stats = [
  { value: "10+", label: "Projects Completed" },
  { value: "1+ MW", label: "Energy Delivered" },
  { value: "99%", label: "Happy Clients" },
  { value: "100%", label: "Commitment to Quality" },
];

export function Hero({ slides = fallbackSlides }: { slides?: HeroSlide[] }) {
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setCurrent((c) => (c + 1) % slides.length), 6000);
    return () => clearInterval(id);
  }, []);
  const slide = slides[current]!;

  return (
    <section className="w-full bg-white px-0 py-0 sm:px-4 sm:py-4 lg:px-6">
      <div className="mx-auto flex max-w-[1400px] flex-col">
        <div className="group relative h-[450px] w-full overflow-hidden bg-surface sm:h-[500px] sm:rounded-t-lg lg:h-[550px]">
          {slides.map((s, i) => (
            <div key={i} className="absolute inset-0 transition-opacity duration-500" style={{ opacity: i === current ? 1 : 0, pointerEvents: i === current ? "auto" : "none" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={s.image} alt={s.heading} className="absolute inset-0 h-full w-full object-cover object-center" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent sm:bg-gradient-to-r sm:from-black/50 sm:via-black/20 sm:to-transparent" />
            </div>
          ))}
          <div className="relative z-10 flex h-full max-w-3xl flex-col justify-end p-6 pb-12 sm:justify-center sm:p-12 lg:p-16">
            <h2 className="mb-5 text-3xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">{slide.heading}</h2>
            <p className="mb-8 max-w-xl text-base leading-relaxed text-neutral-200 sm:text-lg">{slide.description}</p>
            <Link href={slide.link} className="inline-flex w-fit items-center gap-2 rounded bg-primary px-8 py-3.5 text-[13px] font-extrabold uppercase tracking-wider text-white shadow-lg hover:bg-primary-hover">
              {slide.cta}
            </Link>
          </div>
          <button onClick={() => setCurrent((current - 1 + slides.length) % slides.length)} aria-label="Previous slide" className="absolute left-4 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/20 text-white opacity-0 backdrop-blur-sm transition-all hover:bg-white hover:text-black group-hover:opacity-100">
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button onClick={() => setCurrent((current + 1) % slides.length)} aria-label="Next slide" className="absolute right-4 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/20 text-white opacity-0 backdrop-blur-sm transition-all hover:bg-white hover:text-black group-hover:opacity-100">
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
        <div className="grid w-full grid-cols-2 divide-y divide-neutral-800 overflow-hidden bg-surface-low shadow-md sm:rounded-b-lg lg:grid-cols-4 lg:divide-x lg:divide-y-0">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col items-center justify-center p-4 text-center sm:p-5">
              <span className="mb-2 text-3xl font-black tracking-tight text-primary sm:text-4xl">{s.value}</span>
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-neutral-300 sm:text-xs">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
