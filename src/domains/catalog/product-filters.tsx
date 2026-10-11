"use client";

import { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";
import { cn } from "@/shared/lib/utils";

const ALL_PRODUCTS_SUBCATEGORIES = ["Batteries", "Inverters", "Solar Panels", "Accessories"];
const SHOP_BY_PROJECT_SUBCATEGORIES = ["Off-Grid Systems", "Grid-Tied Systems", "RV & Marine", "Home Backup"];
const BRANDS: Array<[string, number]> = [
  ["Anker", 4],
  ["BigBattery", 13],
  ["Briggs & Stratton", 1],
  ["Canadian Solar", 1],
  ["EG4 Electronics", 9],
  ["Enphase Energy", 1],
  ["LG", 1],
  ["Lion Energy", 1],
  ["Lunar Energy", 1],
  ["OutBack", 3],
];
const VOLTAGES: Array<[string, number]> = [["25.6V", 1]];
const KILOWATT_HOURS: Array<[string, number]> = [
  ["1.63kWh", 1],
  ["3.3kWh", 1],
  ["5.0kWh", 1],
  ["5.12kWh", 10],
  ["5kWh", 1],
];

function SectionHeader({ title, open, onToggle }: { title: string; open: boolean; onToggle: () => void }) {
  return (
    <button
      type="button"
      onClick={onToggle}
      className="flex w-full cursor-pointer select-none items-center justify-between bg-surface px-4 py-3 text-sm font-bold text-white"
    >
      {title}
      <ChevronDown className={cn("h-4 w-4 text-white transition-transform", open && "rotate-180")} />
    </button>
  );
}

function CheckRow({ label, count }: { label: string; count: number }) {
  return (
    <label className="flex items-center gap-3">
      <input type="checkbox" className="h-4 w-4 accent-primary" />
      <span className="text-sm text-gray-700">
        {label} ({count})
      </span>
    </label>
  );
}

export function ProductFilters() {
  const [openSections, setOpenSections] = useState({
    categories: true,
    refineBy: true,
    brand: true,
    price: true,
    voltage: true,
    kwh: true,
  });
  const [openSub, setOpenSub] = useState({ allProducts: false, shopByProject: false });

  function toggle(section: keyof typeof openSections) {
    setOpenSections((s) => ({ ...s, [section]: !s[section] }));
  }

  return (
    <aside className="w-[280px] shrink-0 font-sans">
      <SectionHeader title="Categories" open={openSections.categories} onToggle={() => toggle("categories")} />
      {openSections.categories && (
        <div className="border border-t-0 border-gray-200">
          <button
            type="button"
            onClick={() => setOpenSub((s) => ({ ...s, allProducts: !s.allProducts }))}
            className="flex w-full items-center justify-between border-b border-gray-100 px-4 py-3 text-sm font-semibold text-gray-800"
          >
            All Products
            <ChevronRight className={cn("h-4 w-4 text-gray-400 transition-transform", openSub.allProducts && "rotate-90")} />
          </button>
          {openSub.allProducts && (
            <div className="bg-gray-50 px-4 py-3">
              {ALL_PRODUCTS_SUBCATEGORIES.map((c) => (
                <div key={c} className="ml-2 cursor-pointer py-1 text-sm text-gray-600 hover:text-black">
                  {c}
                </div>
              ))}
            </div>
          )}
          <button
            type="button"
            onClick={() => setOpenSub((s) => ({ ...s, shopByProject: !s.shopByProject }))}
            className="flex w-full items-center justify-between px-4 py-3 text-sm font-semibold text-gray-800"
          >
            Shop By Project
            <ChevronRight className={cn("h-4 w-4 text-gray-400 transition-transform", openSub.shopByProject && "rotate-90")} />
          </button>
          {openSub.shopByProject && (
            <div className="bg-gray-50 px-4 py-3">
              {SHOP_BY_PROJECT_SUBCATEGORIES.map((c) => (
                <div key={c} className="ml-2 cursor-pointer py-1 text-sm text-gray-600 hover:text-black">
                  {c}
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      <SectionHeader title="Refine By" open={openSections.refineBy} onToggle={() => toggle("refineBy")} />
      {openSections.refineBy && (
        <div className="border border-t-0 border-gray-200 bg-gray-50 p-4">
          <p className="text-sm text-gray-600">No filters applied.</p>
        </div>
      )}

      <SectionHeader title="Brand" open={openSections.brand} onToggle={() => toggle("brand")} />
      {openSections.brand && (
        <div className="border border-t-0 border-gray-200">
          <div className="flex flex-col gap-3 p-4">
            {BRANDS.map(([name, count]) => (
              <CheckRow key={name} label={name} count={count} />
            ))}
          </div>
          <div className="cursor-pointer bg-gray-200 px-4 py-2.5 text-center text-sm font-semibold">
            Show More
          </div>
        </div>
      )}

      <SectionHeader title="Price" open={openSections.price} onToggle={() => toggle("price")} />
      {openSections.price && (
        <div className="flex items-center gap-2 border border-t-0 border-gray-200 p-4">
          <div className="relative flex-1">
            <span className="absolute left-2 top-1/2 -translate-y-1/2 text-xs text-gray-500">Min. $</span>
            <input type="number" aria-label="Minimum price" className="w-full border border-gray-300 py-2 pl-12 pr-2 text-sm" />
          </div>
          <span className="text-gray-400">-</span>
          <div className="relative flex-1">
            <span className="absolute left-2 top-1/2 -translate-y-1/2 text-xs text-gray-500">Max. $</span>
            <input type="number" aria-label="Maximum price" className="w-full border border-gray-300 py-2 pl-12 pr-2 text-sm" />
          </div>
          <button type="button" className="bg-surface px-4 py-2.5 text-xs font-bold text-white">
            UPDATE
          </button>
        </div>
      )}

      <SectionHeader title="Voltage" open={openSections.voltage} onToggle={() => toggle("voltage")} />
      {openSections.voltage && (
        <div className="flex flex-col gap-3 border border-t-0 border-gray-200 p-4">
          {VOLTAGES.map(([v, count]) => (
            <CheckRow key={v} label={v} count={count} />
          ))}
        </div>
      )}

      <SectionHeader title="Kilowatt-Hour(s)" open={openSections.kwh} onToggle={() => toggle("kwh")} />
      {openSections.kwh && (
        <div className="flex flex-col gap-3 border border-t-0 border-gray-200 p-4">
          {KILOWATT_HOURS.map(([k, count]) => (
            <CheckRow key={k} label={k} count={count} />
          ))}
        </div>
      )}
    </aside>
  );
}
