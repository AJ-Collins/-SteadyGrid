"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronDown, Tag } from "lucide-react";
// import { FeaturedProduct } from "@/components/storefront/FeaturedProduct";
// import type { FeaturedProduct } from "@/components/storefront/FeaturedProduct";

// ── Types ─────────────────────────────────────────────────────────────────────

export interface NavItem {
  label: string;
  icon: React.ReactNode;
  href?: string;
  isNew?: boolean;
}

export interface MegaMenuConfig {
  sections: { title: string; items: NavItem[] }[];
  // featured: FeaturedProduct;
  bottomPromo?: string;
}

// ── Mega Menu Panel ───────────────────────────────────────────────────────────

function MegaMenuPanel({ config }: { config: MegaMenuConfig }) {
  return (
    <div className="bg-white rounded-xl shadow-2xl shadow-gray-200/50 border border-gray-100 z-50 flex flex-col overflow-hidden min-w-[620px] origin-top opacity-0 animate-[fadeIn_0.2s_ease-out_forwards]">
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px) scale(0.98); }
          to   { opacity: 1; transform: translateY(0)    scale(1);    }
        }
      `}</style>

      <div className="flex">
        {/* Left – nav sections */}
        <div className="flex gap-10 p-7 flex-1 bg-white">
          {config.sections.map((section) => (
            <div key={section.title} className="min-w-[170px]">
              <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-gray-400 mb-4">
                {section.title}
              </p>
              <ul className="flex flex-col gap-1.5">
                {section.items.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href ?? "#"}
                      className="flex items-center gap-3 px-3 py-2 rounded-lg text-[13.5px] font-medium text-gray-600 hover:bg-[#2ecc40]/5 hover:text-[#2ecc40] transition-all group"
                    >
                      <span className="text-gray-400 group-hover:text-[#2ecc40] transition-colors">
                        {item.icon}
                      </span>
                      <span className="group-hover:translate-x-1 transition-transform duration-200">
                        {item.label}
                      </span>
                      {item.isNew && (
                        <span className="ml-auto text-[9px] font-bold uppercase tracking-wider bg-red-100 text-red-600 px-1.5 py-0.5 rounded-sm">
                          New
                        </span>
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Right – featured product */}
        {/* <FeaturedProductCard product={config.featured} /> */}
      </div>

      {/* Bottom Promo Bar */}
      {config.bottomPromo && (
        <div className="bg-gray-900 px-6 py-3 flex items-center justify-center gap-2">
          <Tag size={14} className="text-[#2ecc40]" />
          <span className="text-[12px] font-medium text-white tracking-wide">
            {config.bottomPromo}
          </span>
        </div>
      )}
    </div>
  );
}

// ── Nav Dropdown ──────────────────────────────────────────────────────────────

interface NavDropdownProps {
  label: string;
  menu: MegaMenuConfig;
}

export function NavDropdown({ label, menu }: NavDropdownProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setOpen(false), 150);
  };

  useEffect(() => {
    function handle(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", handle);
    return () => {
      document.removeEventListener("mousedown", handle);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <div
      ref={ref}
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        onClick={() => setOpen((v) => !v)}
        className={`flex items-center gap-1.5 px-4 py-2.5 text-[13px] font-bold rounded-lg transition-colors uppercase tracking-[0.05em] hover:bg-gray-50 hover:text-[#2ecc40] ${
          open ? "text-[#2ecc40] bg-gray-50" : "text-gray-700"
        }`}
      >
        {label}
        <ChevronDown
          size={14}
          className={`mt-px transition-transform duration-300 ${
            open ? "rotate-180 text-[#2ecc40]" : "text-gray-400"
          }`}
        />
      </button>

      {open && (
        <div className="absolute top-full left-0 pt-2">
          <MegaMenuPanel config={menu} />
        </div>
      )}
    </div>
  );
}