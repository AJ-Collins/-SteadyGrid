"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export interface TopCategory {
  name: string;
  image: string;
  href?: string;
}

interface TopCategoriesProps {
  categories?: TopCategory[];
  viewAllHref?: string;
  visibleCount?: number;
}

const DEFAULT_CATEGORIES: TopCategory[] = [
  { name: "Laptops",     image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=300&auto=format&fit=crop" },
  { name: "PC Gaming",   image: "https://images.unsplash.com/photo-1587202372634-32705e3bf49c?q=80&w=300&auto=format&fit=crop" },
  { name: "Headphones",  image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=300&auto=format&fit=crop" },
  { name: "Monitors",    image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?q=80&w=300&auto=format&fit=crop" },
  { name: "Keyboards",   image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?q=80&w=300&auto=format&fit=crop" },
  { name: "Cameras",     image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=300&auto=format&fit=crop" },
  { name: "Tablets",     image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?q=80&w=300&auto=format&fit=crop" },
  { name: "Phones",      image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=300&auto=format&fit=crop" },
];

export function TopCategories({
  categories = DEFAULT_CATEGORIES,
  viewAllHref = "#",
  visibleCount = 4,
}: TopCategoriesProps) {
  const [offset, setOffset] = useState(0);
  const maxOffset = Math.max(0, categories.length - visibleCount);

  const prev = () => setOffset((o) => Math.max(0, o - 1));
  const next = () => setOffset((o) => Math.min(maxOffset, o + 1));

  const visible = categories.slice(offset, offset + visibleCount);

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 flex-1">

      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-[15px] font-black text-gray-900 uppercase tracking-wider">
          Top Categories
        </h2>
        <a
          href={viewAllHref}
          className="text-[12.5px] font-semibold text-gray-400 hover:text-[#2ecc40] transition-colors"
        >
          View All
        </a>
      </div>

      {/* Slider — full width, arrows overlay on hover */}
      <div className="relative group">

        {/* Prev arrow — overlays left edge */}
        <button
          onClick={prev}
          disabled={offset === 0}
          className="absolute left-0 top-0 bottom-0 w-16 z-30 flex items-center justify-start pl-1 opacity-0 group-hover:opacity-100 disabled:!opacity-0 transition-opacity duration-300"
        >
          <div className="w-8 h-8 rounded-full bg-black/20 hover:bg-black/40 backdrop-blur-md flex items-center justify-center text-white border border-white/20 transition-all shadow-sm">
            <ChevronLeft size={15} />
          </div>
        </button>

        {/* Next arrow — overlays right edge */}
        <button
          onClick={next}
          disabled={offset >= maxOffset}
          className="absolute right-0 top-0 bottom-0 w-16 z-30 flex items-center justify-end pr-1 opacity-0 group-hover:opacity-100 disabled:!opacity-0 transition-opacity duration-300"
        >
          <div className="w-8 h-8 rounded-full bg-black/20 hover:bg-black/40 backdrop-blur-md flex items-center justify-center text-white border border-white/20 transition-all shadow-sm">
            <ChevronRight size={15} />
          </div>
        </button>

        {/* Category tiles */}
        <div className="flex items-start gap-4">
          {visible.map((cat) => (
            <a
              key={cat.name}
              href={cat.href ?? "#"}
              className="flex-1 flex flex-col items-center gap-3 group/tile"
            >
              <div className="w-full aspect-square max-h-[110px] rounded-2xl overflow-hidden flex items-center justify-center transition-all duration-300 group-hover/tile:shadow-md">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover group-hover/tile:scale-110 transition-transform duration-500"
                />
              </div>
              <span className="text-[13px] font-bold text-gray-700 group-hover/tile:text-[#2ecc40] transition-colors text-center leading-tight">
                {cat.name}
              </span>
            </a>
          ))}
        </div>
      </div>

      {/* Dots */}
      {categories.length > visibleCount && (
        <div className="flex items-center justify-center gap-1.5 mt-5">
          {Array.from({ length: maxOffset + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => setOffset(i)}
              className={`rounded-full transition-all duration-300 ${
                i === offset
                  ? "w-4 h-1.5 bg-[#2ecc40]"
                  : "w-1.5 h-1.5 bg-gray-200 hover:bg-gray-300"
              }`}
            />
          ))}
        </div>
      )}

    </div>
  );
}