"use client";

import { useRef } from "react";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { formatCurrency } from "@/shared/lib/format-currency";

export interface SliderProduct {
  brand: string;
  title: string;
  price: number;
  wasPrice?: number;
  image: string;
  inStock?: boolean;
  link?: string;
}

interface ProductSliderProps {
  title: string;
  subtitle: string;
  viewMoreHref: string;
  products: SliderProduct[];
}

// Shared slider shell behind WhatsNew and TopSellers: heading bar with
// green tick + VIEW MORE, hover-reveal arrows, snap-x scroll track.
export function ProductSlider({ title, subtitle, viewMoreHref, products }: ProductSliderProps) {
  const trackRef = useRef<HTMLDivElement>(null);

  function scroll(dir: "left" | "right") {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: (dir === "left" ? -1 : 1) * el.clientWidth * 0.7, behavior: "smooth" });
  }

  return (
    <section className="w-full border-b border-neutral-100 bg-white px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
      <div className="mx-auto max-w-[1400px]">
        <div className="mb-5 flex items-end justify-between border-b border-neutral-200 pb-3">
          <div>
            <h2 className="flex items-center gap-2 text-lg font-black text-surface-low sm:text-xl">
              <span className="h-4 w-1.5 bg-primary sm:h-5" />
              {title}
            </h2>
            <p className="mt-1 text-xs text-neutral-500">{subtitle}</p>
          </div>
          <Link href={viewMoreHref} className="flex items-center gap-1 text-xs font-bold text-surface-low hover:text-primary">
            View More <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="group/slider relative">
          <button
            type="button"
            aria-label="Scroll left"
            onClick={() => scroll("left")}
            className="absolute -left-3 top-1/2 z-10 hidden h-[42px] w-[42px] -translate-y-1/2 items-center justify-center bg-[#5c5c5c] text-white opacity-0 transition-opacity group-hover/slider:opacity-100 md:flex"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <div ref={trackRef} className="flex snap-x gap-4 overflow-x-auto pb-2 scrollbar-none">
            {products.map((p) => (
              <div
                key={p.title}
                className="w-[240px] shrink-0 snap-start rounded-lg border border-neutral-200 bg-white p-3 transition-shadow hover:shadow-md sm:w-[280px]"
              >
                <div className="relative flex h-[200px] items-center justify-center overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={p.image} alt={p.title} className="max-h-full max-w-full object-contain" />
                  {p.inStock && (
                    <span className="absolute left-1 top-1 bg-primary px-1.5 py-0.5 text-[10px] font-bold uppercase text-white">
                      In Stock
                    </span>
                  )}
                </div>
                <div className="mt-2 text-[10px] font-bold uppercase text-neutral-400">{p.brand}</div>
                <div className="line-clamp-2 min-h-[36px] text-[12px] font-semibold text-neutral-800 sm:text-[13px]">
                  {p.title}
                </div>
                <div className="mt-1 flex items-baseline gap-2">
                  <span className="text-[13px] font-black text-surface-low">{formatCurrency(p.price)}</span>
                  {p.wasPrice && (
                    <span className="text-xs text-neutral-400 line-through">{formatCurrency(p.wasPrice)}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
          <button
            type="button"
            aria-label="Scroll right"
            onClick={() => scroll("right")}
            className="absolute -right-3 top-1/2 z-10 hidden h-[42px] w-[42px] -translate-y-1/2 items-center justify-center bg-[#5c5c5c] text-white opacity-0 transition-opacity group-hover/slider:opacity-100 md:flex"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
