"use client";

import { useState } from "react";
import { ChevronRight } from "lucide-react";

export interface SideNavCategory {
  label: string;
  href?: string;
  highlight?: boolean; // renders in red like "SALE 40% OFF"
  children?: { label: string; href?: string }[];
}

interface CategorySideNavProps {
  categories: SideNavCategory[];
}

const DEFAULT_CATEGORIES: SideNavCategory[] = [
  { label: "SALE 40% OFF", highlight: true },
  { label: "Laptops" },
  { label: "PC & Computers" },
  { label: "Cell Phones" },
  { label: "Tablets" },
  { label: "Gaming & VR" },
  { label: "Networking" },
  { label: "Cameras" },
  { label: "Sounds" },
  { label: "Office" },
  { label: "Storage, USB" },
  { label: "Accessories" },
  { label: "Clearance" },
];

export function CategorySideNav({ categories = DEFAULT_CATEGORIES }: Partial<CategorySideNavProps>) {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <div className="w-[240px] min-h-[320px] bg-white rounded-xl border border-gray-100 shadow-sm py-3 shrink-0">
      <ul>
        {categories.map((cat) => (
          <li key={cat.label}>
            <a
              href={cat.href ?? "#"}
              onMouseEnter={() => setHovered(cat.label)}
              onMouseLeave={() => setHovered(null)}
              className={`flex items-center justify-between px-4 py-[9px] text-[13.5px] transition-colors group ${
                cat.highlight
                  ? "font-bold text-red-500 hover:text-red-600"
                  : hovered === cat.label
                  ? "text-[#2ecc40] font-medium bg-[#2ecc40]/5"
                  : "text-gray-700 font-medium hover:text-[#2ecc40] hover:bg-[#2ecc40]/5"
              }`}
            >
              {cat.label}
              {!cat.highlight && (
                <ChevronRight
                  size={13}
                  className={`transition-all duration-200 ${
                    hovered === cat.label
                      ? "text-[#2ecc40] translate-x-0.5 opacity-100"
                      : "text-gray-300 opacity-0"
                  }`}
                />
              )}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}