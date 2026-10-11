"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/shared/lib/utils";

const SLIDES = [
  { id: "pegasus", logo: "PEGASUS", badge: "MOUNTING SOLUTIONS", title: "Smarter Mounting. Faster Installs.", desc: "Pegasus Solar delivers next-level roof-mounting hardware for faster, cleaner installs.", image: "https://checkout.bluettipower.com/cdn/shop/files/banner_842db15e-ce09-46a2-ba23-d7c3a558bd2b.jpg?v=1775555594&width=1600" },
  { id: "sirius", logo: "SIRIUS PV", badge: "SOLAR PANELS", title: "Explore the Power of Sirius PV", desc: "Sirius PV delivers high-quality solar panels built for lasting performance.", image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1920&q=80" },
  { id: "lunar", logo: "LUNAR ENERGY", badge: "ENERGY STORAGE SYSTEM", title: "Energy as Unique as Your Home", desc: "Designed to seamlessly blend into your home while storing serious power.", image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1920&q=80" },
  { id: "chiko", logo: "CHIKO USA", badge: "MOUNTING SOLUTIONS", title: "Beyond the Roof: Smart Solar Mounting.", desc: "Chiko USA delivers high-strength mounting for every roof type.", image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&w=1920&q=80" },
];

export function BrandHighlight() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  function scrollTo(idx: number) {
    const el = trackRef.current;
    if (!el) return;
    el.scrollTo({ left: idx * el.clientWidth, behavior: "smooth" });
  }

  function onScroll() {
    const el = trackRef.current;
    if (!el) return;
    setActive(Math.round(el.scrollLeft / el.clientWidth));
  }

  return (
    <section className="bg-white py-8 sm:py-12">
      <div className="group/banner relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-xl shadow-sm">
          <div ref={trackRef} onScroll={onScroll} className="flex snap-x snap-mandatory overflow-x-auto scrollbar-none">
            {SLIDES.map((s) => (
              <div key={s.id} className="relative min-h-[450px] w-full shrink-0 snap-start sm:min-h-[500px]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={s.image} alt={s.title} className="absolute inset-0 h-full w-full object-cover" />
                <div className="absolute inset-0 bg-surface/40" />
                <div className="relative z-10 flex h-full min-h-[450px] flex-col items-center justify-center px-6 text-center sm:min-h-[500px]">
                  <div className="mb-3 text-xl font-black tracking-widest text-white">{s.logo}</div>
                  <span className="mb-3 rounded-sm bg-white px-3 py-1 text-[10px] font-bold tracking-widest text-surface-low">
                    {s.badge}
                  </span>
                  <h2 className="max-w-2xl text-3xl font-bold text-white sm:text-4xl md:text-[44px] md:leading-tight">
                    {s.title}
                  </h2>
                  <p className="mb-6 mt-3 max-w-xl text-sm text-neutral-200">{s.desc}</p>
                  <Link href="#" className="mb-4 text-sm font-bold text-white hover:underline">
                    Learn More &gt;
                  </Link>
                  <button className="bg-white px-8 py-3 text-sm font-bold text-surface-low hover:bg-neutral-100">
                    Shop Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <button
          type="button"
          aria-label="Previous brand"
          onClick={() => scrollTo((active - 1 + SLIDES.length) % SLIDES.length)}
          className="absolute left-6 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 opacity-0 transition-opacity group-hover/banner:opacity-100"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          type="button"
          aria-label="Next brand"
          onClick={() => scrollTo((active + 1) % SLIDES.length)}
          className="absolute right-6 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 opacity-0 transition-opacity group-hover/banner:opacity-100"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
        <div className="mt-4 flex justify-center gap-2">
          {SLIDES.map((s, i) => (
            <button
              key={s.id}
              type="button"
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => scrollTo(i)}
              className={cn("h-2 w-2 rounded-full", i === active ? "bg-primary" : "bg-neutral-300")}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
