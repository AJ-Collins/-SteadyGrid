"use client";

import { ChevronDown } from "lucide-react";

const SORT_OPTIONS = ["A to Z", "Z to A", "Price: Low to High", "Price: High to Low"];

export function ProductSort() {
  return (
    <div className="flex flex-col items-end gap-2 sm:flex-row sm:items-center">
      <span className="text-sm font-medium text-gray-700">Sort By:</span>
      <div className="relative">
        <select aria-label="Sort products" className="w-40 appearance-none rounded-md border border-gray-300 py-2 pl-3 pr-8 text-sm sm:w-32">
          {SORT_OPTIONS.map((o) => (
            <option key={o}>{o}</option>
          ))}
        </select>
        <ChevronDown className="pointer-events-none absolute right-2 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
      </div>
    </div>
  );
}
