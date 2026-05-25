"use client";

import { useState } from "react";
import { Search, ChevronDown, Truck, RefreshCcw, ShieldCheck } from "lucide-react";

const CATEGORIES = [
  "All Categories",
  "Laptops",
  "PC & Computers",
  "Cell Phones",
  "Tablets",
  "Gaming & VR",
  "Cameras",
  "Sounds",
  "Storage, USB",
  "Accessories",
];

const PERKS = [
  { icon: <Truck size={15} />,       label: "FREE SHIPPING OVER $199" },
  { icon: <RefreshCcw size={15} />,  label: "30 DAYS MONEY BACK"      },
  { icon: <ShieldCheck size={15} />, label: "100% SECURE PAYMENT"     },
];

export function SearchBar() {
  const [category, setCategory]     = useState("All Categories");
  const [query, setQuery]           = useState("");
  const [dropOpen, setDropOpen]     = useState(false);

  return (
    <div className="max-w-[1400px] mx-auto bg-[#2ecc40] px-4 py-3 rounded-b-lg">
      <div className="flex items-center gap-8">

        {/* Search input */}
        <div className="flex-1 max-w-[560px] bg-white rounded-full flex items-center overflow-visible relative h-11">

          {/* Category dropdown */}
          <div className="relative">
            <button
              onClick={() => setDropOpen((v) => !v)}
              className="flex items-center gap-1.5 pl-4 pr-3 h-11 text-[14px] font-semibold text-gray-700 hover:text-gray-900 transition-colors whitespace-nowrap border-r border-gray-200 cursor-pointer rounded-l-full bg-transparent"
            >
              {category}
              <ChevronDown
                size={13}
                className={`text-gray-400 transition-transform duration-200 ${dropOpen ? "rotate-180" : ""}`}
              />
            </button>

            {dropOpen && (
              <div className="absolute top-full left-0 mt-1 bg-white rounded-xl shadow-xl border border-gray-100 z-50 py-1 min-w-[180px]">
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => { setCategory(cat); setDropOpen(false); }}
                    className={`w-full text-left px-4 py-2 text-[14px] transition-colors cursor-pointer hover:bg-[#2ecc40]/5 hover:text-[#2ecc40] ${
                      cat === category ? "font-bold text-[#2ecc40]" : "text-gray-600 font-medium"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Text input */}
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search anything..."
            className="flex-1 px-4 text-[14px] text-gray-700 placeholder-gray-400 bg-transparent outline-none h-full"
          />

          {/* Search button */}
          <button className="w-10 h-10 mr-0.5 rounded-full bg-[#2ecc40] hover:bg-[#27b838] flex items-center cursor-pointer justify-center text-white transition-colors shrink-0">
            <Search size={16} />
          </button>
        </div>

        {/* Perks */}
        <div className="hidden lg:flex items-center gap-8 ml-auto">
          {PERKS.map(({ icon, label }) => (
            <div key={label} className="flex items-center gap-2 text-white">
              <span className="opacity-80">{icon}</span>
              <span className="text-[13px] font-bold tracking-wide">{label}</span>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}