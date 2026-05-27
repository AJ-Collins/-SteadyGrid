"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

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
  { name: "Laptops",     image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmoMT3OBIGBONfzWkJjOKPDgKxinPkAMYi9w&s" },
  { name: "PC Gaming",   image: "https://image.made-in-china.com/202f0j00jqBcwgVJkpbf/Renewable-Energy-Solar-Power-500kw-500kVA-1-MW-on-Grid-PV-Solar-System-for-Commercial-Rooftop.webp" },
  { name: "Headphones",  image: "https://hpsenergy.eu/wp-content/uploads/2024/09/kf-S4ed2d1dc91834e6ba4d9cb2f7203616eD-300x300.webp" },
  { name: "Monitors",    image: "https://image.made-in-china.com/2f0j00qbCciegBkrow/5-Kw-off-Grid-Solar-Power-System-with-Battery-and-Inverter-for-Solar-Home-Complete-System-with-Electricity-Power.webp" },
  { name: "Keyboards",   image: "https://image.made-in-china.com/202f0j00jZTkcIFKkvbu/Factory-10000W-Solar-Panel-Kit-3kw-5kw-6kw-8kw-Complete-on-Grid-Solar-System-for-Home-off-Grid-Solar-Energy-Sys.webp" },
  { name: "Cameras",     image: "https://voltaconsolar.com/cdn/shop/files/voltacon-off-grid-solar-kit-36kw-inverter-mppt-charger-solar-panels-gel-battery-133974.jpg?v=1747943244" },
  { name: "Tablets",     image: "https://image.made-in-china.com/2f0j00YPoRMwmhkAcI/5kVA-Korean-Solar-Panels-for-Mini-Solar-Power-System.webp" },
  { name: "Phones",      image: "https://m.media-amazon.com/images/I/61eiCJBYW1L.jpg"},
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
        <h1 className="text-[18px] font-black text-gray-900 uppercase tracking-wider">
          Top Categories
        </h1>
        <a
          href={viewAllHref}
          className="text-sm font-semibold text-gray-500 hover:text-[#2ecc40] transition-colors flex items-center gap-1"
          >
            See All <ArrowRight size={14} />
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
              {/* Animated box (NOT image) */}
              <div className="w-full aspect-square max-h-[110px] rounded-2xl overflow-hidden flex items-center justify-center transition-all duration-500 group-hover/tile:shadow-lg group-hover/tile:scale-105 bg-gray-50">
                
                {/* Image is now static */}
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-contain p-1"
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