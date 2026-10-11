"use client";

import { useRef } from "react";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { SolarKitsProductCard } from "@/shared/components/common/solar-kits-product-card";

export interface GroupProduct {
  brand: string;
  title: string;
  sku: string;
  description: string;
  oldPrice: number;
  price: number;
  imageUrl: string;
  inStock?: boolean;
}

export interface ProductGroup {
  heading: string;
  link: string;
  products: GroupProduct[];
}

// Family-B carousel group: heading bar + horizontal snap slider + arrows.
// Matches the legacy SolarKits / NewArrivals grouped design.
export function ProductGroupSection({ heading, link, products }: ProductGroup) {
  const trackRef = useRef<HTMLDivElement>(null);

  function scroll(dir: "left" | "right") {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: (dir === "left" ? -1 : 1) * el.clientWidth * 0.7, behavior: "smooth" });
  }

  return (
    <section>
      <div className="mb-5 flex items-end justify-between border-b border-neutral-200 pb-3">
        <h2 className="flex items-center gap-2 text-sm font-black uppercase text-surface-low sm:text-lg">
          <span className="h-4 w-1.5 bg-primary" />
          {heading}
        </h2>
        <Link href={link} className="flex items-center gap-1 text-xs font-bold text-surface-low hover:text-primary">
          View More <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
      <div className="group/slider relative">
        <button
          type="button"
          aria-label="Scroll left"
          onClick={() => scroll("left")}
          className="absolute -left-2 top-1/2 z-10 hidden h-[32px] w-[32px] -translate-y-1/2 items-center justify-center bg-[#5c5c5c] text-white opacity-0 transition-opacity group-hover/slider:opacity-100 md:flex"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <div ref={trackRef} className="flex snap-x gap-4 overflow-x-auto pb-6 scrollbar-none">
          {products.map((p) => (
            <SolarKitsProductCard key={p.sku} {...p} />
          ))}
        </div>
        <button
          type="button"
          aria-label="Scroll right"
          onClick={() => scroll("right")}
          className="absolute -right-2 top-1/2 z-10 hidden h-[32px] w-[32px] -translate-y-1/2 items-center justify-center bg-[#5c5c5c] text-white opacity-0 transition-opacity group-hover/slider:opacity-100 md:flex"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </section>
  );
}
