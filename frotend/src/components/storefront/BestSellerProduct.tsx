"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { ProductCard } from "@/components/layout/ProductCard";
import type { ProductCardData } from "@/components/layout/ProductCard";

interface ProductSectionProps {
  title?: string;
  subtitle?: string;
  products: ProductCardData[];
  viewAllHref?: string;
  visibleCount?: number;
}

// ── SteadyGrid Energy — default product data ──────────────────────────────────

const DEFAULT_PRODUCTS: ProductCardData[] = [
  // ── Power Systems ─────────────────────────────────────────────────────────
  {
    id: "ps-1",
    name: "SteadyGrid 2000W Portable Power Station LiFePO4",
    reviewCount: 84,
    price: 89500,
    originalPrice: 105000,
    savings: 15500,
    currency: "KSh",
    badge: "Power System",
    images: [
      "https://images.unsplash.com/photo-1620325867502-221cfb5faa5f?q=80&w=400&auto=format&fit=crop",
    ],
    perks: [
      { label: "Free Delivery", color: "green" },
      { label: "2 Yr Warranty", color: "blue" },
    ],
    stockStatus: "in_stock",
  },
  {
    id: "ps-2",
    name: "1200W Solar Home Backup Kit — Panels + Inverter + Battery",
    reviewCount: 61,
    price: 145000,
    originalPrice: 172000,
    savings: 27000,
    currency: "KSh",
    badge: "Solar Kit",
    images: [
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=400&auto=format&fit=crop",
    ],
    perks: [
      { label: "Free Installation", color: "green" },
      { label: "Free Delivery", color: "green" },
    ],
    stockStatus: "in_stock",
  },
  {
    id: "ps-3",
    name: "600W UPS Backup Power System with AVR — Office Grade",
    reviewCount: 29,
    price: 32000,
    currency: "KSh",
    badge: "Backup",
    images: [
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=400&auto=format&fit=crop",
    ],
    perks: [{ label: "Free Delivery", color: "green" }],
    stockStatus: "in_stock",
  },
  // ── Solar & Installation ───────────────────────────────────────────────────
  {
    id: "si-1",
    name: "400W Monocrystalline Solar Panel — Half-Cell High Efficiency",
    reviewCount: 113,
    price: 18500,
    originalPrice: 22000,
    savings: 3500,
    currency: "KSh",
    badge: "Solar Panel",
    images: [
      "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=400&auto=format&fit=crop",
    ],
    perks: [{ label: "Free Delivery", color: "green" }],
    stockStatus: "in_stock",
  },
  {
    id: "si-2",
    name: "5kVA Hybrid Solar Inverter — Grid-Tie + Off-Grid",
    reviewCount: 47,
    price: 58000,
    priceMax: 74000,
    currency: "KSh",
    badge: "Inverter",
    images: [
      "https://images.unsplash.com/photo-1497440001374-f26997328c1b?q=80&w=400&auto=format&fit=crop",
    ],
    shippingLabel: "Ships in 2–3 days",
    stockStatus: "in_stock",
  },
  {
    id: "si-3",
    name: "Solar System Installation Service — Site Survey Included",
    reviewCount: 38,
    price: 15000,
    currency: "KSh",
    badge: "Service",
    images: [
      "https://images.unsplash.com/photo-1521618755572-156ae0cdd74d?q=80&w=400&auto=format&fit=crop",
    ],
    perks: [{ label: "Certified", color: "blue" }],
    stockStatus: "in_stock",
    extraAction: "Book a site visit",
  },
  // ── Power Essentials ──────────────────────────────────────────────────────
  {
    id: "pe-1",
    name: "10-Way Surge Protector Strip — 3500W Industrial Grade",
    reviewCount: 207,
    price: 3800,
    originalPrice: 5200,
    savings: 1400,
    currency: "KSh",
    badge: "Essentials",
    images: [
      "https://images.unsplash.com/photo-1558618047-f4e6b596b2ec?q=80&w=400&auto=format&fit=crop",
    ],
    perks: [{ label: "Free Delivery", color: "green" }],
    stockStatus: "in_stock",
  },
  {
    id: "pe-2",
    name: "4mm² Solar PV Cable — Red/Black Pair, 10m Roll",
    reviewCount: 92,
    price: 2200,
    currency: "KSh",
    badge: "Essentials",
    images: [
      "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=400&auto=format&fit=crop",
    ],
    stockStatus: "in_stock",
  },
  {
    id: "pe-3",
    name: "MPPT Solar Charge Controller 60A — 12/24/48V Auto",
    reviewCount: 55,
    price: 12500,
    originalPrice: 15000,
    savings: 2500,
    currency: "KSh",
    badge: "Controller",
    images: [
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=400&auto=format&fit=crop",
    ],
    perks: [{ label: "Free Delivery", color: "green" }],
    stockStatus: "in_stock",
  },
  {
    id: "pe-4",
    name: "100Ah LiFePO4 Deep Cycle Battery — 10-Year Life",
    reviewCount: 143,
    price: 48000,
    originalPrice: 55000,
    savings: 7000,
    currency: "KSh",
    badge: "Battery",
    images: [
      "https://images.unsplash.com/photo-1620325867502-221cfb5faa5f?q=80&w=400&auto=format&fit=crop",
    ],
    perks: [
      { label: "Free Delivery", color: "green" },
      { label: "5 Yr Warranty", color: "blue" },
    ],
    stockStatus: "in_stock",
  },
];

export function BestSellerProduct({
  title = "Best Sellers",
  subtitle = "Our most trusted power & solar solutions",
  products = DEFAULT_PRODUCTS,
  viewAllHref = "#",
  visibleCount = 5,
}: Partial<ProductSectionProps>) {
  const [offset, setOffset] = useState(0);
  const maxOffset = Math.max(0, products.length - visibleCount);

  const prev = () => setOffset((o) => Math.max(0, o - 1));
  const next = () => setOffset((o) => Math.min(maxOffset, o + 1));

  const visible = products.slice(offset, offset + visibleCount);

  return (
    <div className="max-w-[1400px] mx-auto px-2 py-5 bg-white rounded-2xl border border-slate-100 shadow-sm pb-6">

      {/* ── Header ── */}
      <div className="flex items-end justify-between mb-4">
        <div>
          <h2 className="text-[16px] font-extrabold text-slate-900 tracking-tight leading-none mb-1">
            {title}
          </h2>
          {subtitle && (
            <p className="text-[11.5px] text-slate-400 font-medium">{subtitle}</p>
          )}
        </div>

        <div className="flex items-center gap-2">
          <a
            href={viewAllHref}
            className="text-[11px] font-semibold text-slate-400 hover:text-[#0f7a4b] transition-colors flex items-center gap-1 mr-1"
          >
            View all <ArrowRight size={10} />
          </a>
          <button
            onClick={prev}
            disabled={offset === 0}
            className="w-7 h-7 rounded-md border border-slate-200 flex items-center justify-center text-slate-500 disabled:opacity-25 hover:border-[#0f7a4b] hover:text-[#0f7a4b] transition-all disabled:pointer-events-none"
          >
            <ChevronLeft size={14} />
          </button>
          <button
            onClick={next}
            disabled={offset >= maxOffset}
            className="w-7 h-7 rounded-md border border-slate-200 flex items-center justify-center text-slate-500 disabled:opacity-25 hover:border-[#0f7a4b] hover:text-[#0f7a4b] transition-all disabled:pointer-events-none"
          >
            <ChevronRight size={14} />
          </button>
        </div>
      </div>

      {/* ── Divider ── */}
      <div className="h-px bg-slate-100 mb-4" />

      {/* ── Product grid ── */}
      <div
        className="grid gap-x-3"
        style={{ gridTemplateColumns: `repeat(${visibleCount}, 1fr)` }}
      >
        {visible.map((product, i) => (
          <div key={product.id} className="flex">
            <div className="flex-1 min-w-0">
              <ProductCard product={product} />
            </div>
            {i < visible.length - 1 && (
              <div className="w-px bg-slate-100 mx-1.5 self-stretch" />
            )}
          </div>
        ))}
      </div>

      {/* ── Dot indicators ── */}
      {maxOffset > 0 && (
        <div className="flex items-center justify-center gap-1 mt-5">
          {Array.from({ length: maxOffset + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => setOffset(i)}
              className={`rounded-full transition-all duration-200 ${
                i === offset
                  ? "w-4 h-1.5 bg-[#0f7a4b]"
                  : "w-1.5 h-1.5 bg-slate-200 hover:bg-slate-300"
              }`}
            />
          ))}
        </div>
      )}

    </div>
  );
}