"use client";

import { useState, useEffect } from "react";
import { Star } from "lucide-react";

export interface FeaturedProductData {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  currency?: string;
  bullets?: string[];
  perks?: { label: string; color: "green" | "red" | "blue" | "amber" }[];
  images: string[];
  soldCount?: number;
  totalStock?: number;
  dealEndsAt?: Date;
}

interface FeaturedProductProps {
  product?: FeaturedProductData;
  title?: string;
  viewAllHref?: string;
}


function useCountdown(target?: Date) {
  const calc = () => {
    if (!target) return { d: 0, h: 0, m: 0, s: 0 };
    const diff = Math.max(0, target.getTime() - Date.now());
    return {
      d: Math.floor(diff / 86400000),
      h: Math.floor((diff % 86400000) / 3600000),
      m: Math.floor((diff % 3600000) / 60000),
      s: Math.floor((diff % 60000) / 1000),
    };
  };
  const [time, setTime] = useState(calc);
  useEffect(() => {
    const id = setInterval(() => setTime(calc()), 1000);
    return () => clearInterval(id);
  }, [target]);
  return time;
}

const PERK_STYLES = {
  green: "text-[#2ecc40] border-[#2ecc40]/50 bg-white",
  red:   "text-red-400  border-red-300       bg-white",
  blue:  "text-blue-500 border-blue-300      bg-white",
  amber: "text-amber-500 border-amber-300    bg-white",
};

const DEFAULT_PRODUCT: FeaturedProductData = {
  id: "1",
  name: "SteadyGrid Portable Solar Power Station 2000W – Backup Energy System",
  price: 569,
  originalPrice: 759,
  currency: "$",

  bullets: [
    "High-capacity portable power station for home & off-grid use",
    "Compatible with solar panel charging systems",
    "Multiple output ports for appliances, devices & tools",
    "Silent, fuel-free backup power solution",
  ],

  // Product perks (aligned to energy / logistics)
  perks: [
    { label: "FREE DELIVERY (SELECT AREAS)", color: "green" },
    { label: "SOLAR READY SYSTEM", color: "amber" },
  ],

  // Images (you can later replace with real product renders)
  images: [
    "https://image.made-in-china.com/202f0j00pMfiJQuIqlGL/Low-Price-2400W-Portable-Home-Solar-Kit-Energy-12V-System-2kw-Power-Station-Panels-and-Backup-Generator.webp",
    "https://kotaku.com/app/uploads/2025/10/anker-solix-solar-panel.jpg",
    "https://www.acopower.com/cdn/shop/files/3_49ef3287-aeda-4c5a-a7eb-20254f607e61.jpg?v=1691139779",
    "https://cdn.shopify.com/s/files/1/0670/1452/5248/files/20230711-100352_2a8c531f-96de-493e-ae6c-3a72c10d559a_1024x1024.jpg?v=1702640675",
  ],

  soldCount: 26,
  totalStock: 75,

  dealEndsAt: new Date(
    Date.now() +
      1000 * 60 * 60 * 24 * 3 // 3 day deal
  ),
};

function CountdownBlock({ value, unit }: { value: number; unit: string }) {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-100 rounded-xl w-[58px] h-[58px] shrink-0 relative">
      <span className="text-[19px] font-black text-gray-900 leading-none tabular-nums">
        {String(value).padStart(2, "0")}
      </span>
      {/* superscript unit */}
      <span className="absolute top-2 right-2 text-[9px] font-bold text-gray-400">
        {unit}
      </span>
    </div>
  );
}


export function FeaturedProductCard({
  product = DEFAULT_PRODUCT,
  title = "Today’s Featured Product",
  viewAllHref = "#",
}: FeaturedProductProps) {
  const [activeImg, setActiveImg] = useState(0);
  const time = useCountdown(product.dealEndsAt);

  const savings = product.originalPrice
    ? product.originalPrice - product.price
    : null;

  const soldPct =
    product.soldCount && product.totalStock
      ? Math.round((product.soldCount / product.totalStock) * 100)
      : 0;

  const cur = product.currency ?? "$";

  return (
    <div className="flex-1 flex flex-col">

      {/* ── Section heading — OUTSIDE the card ── */}
      <div className="flex items-center justify-between mb-4 px-1">
        <h2 className="text-[18px] font-black text-[#41d151] uppercase tracking-wider">
          {title}
        </h2>
        {/* <a
          href={viewAllHref}
          className="text-[12.5px] font-semibold text-gray-400 hover:text-[#2ecc40] transition-colors"
        >
          View All
        </a> */}
      </div>

      {/* ── White card ── */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm flex-1">
        <div className="flex gap-6 p-4 h-full">

          {/* Left – thumbnails + main image */}
          <div className="flex gap-3 shrink-0">

            {/* Thumbnail strip */}
            <div className="flex flex-col gap-2.5 justify-center">
              {product.images.map((img, i) => (
                <button
                  key={i}
                  onMouseEnter={() => setActiveImg(i)}
                  onClick={() => setActiveImg(i)}
                  className={`w-[54px] h-[54px] rounded-xl border-2 overflow-hidden transition-all duration-200 ${
                    i === activeImg
                      ? "border-[#2ecc40] shadow-sm"
                      : "border-gray-100 hover:border-gray-300"
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>

            {/* Main image */}
            <div className="relative w-[440px] h-[440px] rounded-2xl overflow-hidden flex items-center justify-center bg-[#E2E4EB] cursor-pointer">
              <img
                src={product.images[activeImg]}
                alt={product.name}
                className="w-full h-full object-contain transition-opacity duration-300"
              />
              {/* Save badge */}
              {savings && (
                <div className="absolute top-3 left-3 bg-[#2ecc40] text-white rounded-xl px-2 py-2 text-start shadow-md">
                  <p className="text-[9px] font-bold uppercase tracking-wider opacity-90">SAVE</p>
                  <p className="text-[18px] font-black leading-tight">
                    {cur}{savings.toFixed(2)}
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Right – product info */}
          <div className="flex flex-col flex-1 min-w-0 py-1 pl-14">

            {/* Name */}
            <h3 className="text-[18px] font-bold text-gray-900 leading-snug mb-3 pr-4 cursor-pointer hover:text-[#2ecc40] transition-colors">
              {product.name}
            </h3>

            {/* Price */}
            <div className="flex items-baseline gap-2.5 mb-4">
              <span className="text-[28px] font-black text-[#2ecc40] leading-none">
                {cur}{product.price.toFixed(2)}
              </span>
              {product.originalPrice && (
                <span className="text-[14px] text-gray-400 line-through font-medium">
                  {cur}{product.originalPrice.toFixed(2)}
                </span>
              )}
            </div>

            {/* Bullets */}
            {product.bullets && (
              <ul className="flex flex-col gap-2 mb-4">
                {product.bullets.map((b) => (
                  <li
                    key={b}
                    className="flex items-start gap-2 text-[12.5px] text-gray-600 font-medium"
                  >
                    <span className="w-[5px] h-[5px] rounded-full bg-gray-400 mt-[5px] shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>
            )}

            {/* Perk badges */}
            {product.perks && (
              <div className="flex items-center gap-2 mb-5 flex-wrap">
                {product.perks.map((p) => (
                  <span
                    key={p.label}
                    className={`text-[11px] font-bold uppercase tracking-wider border rounded-md px-3 py-1.5 ${PERK_STYLES[p.color]}`}
                  >
                    {p.label}
                  </span>
                ))}
              </div>
            )}

            {/* Countdown */}
            {product.dealEndsAt && (
              <div className="flex items-center gap-5 mb-5">
                <div className="flex flex-col gap-0.5 shrink-0">
                  <span className="text-[11px] font-medium text-gray-500 leading-tight">
                    PROMOTION WILL
                  </span>
                  <span className="text-[11px] font-medium text-gray-500 leading-tight">
                    EXPIRES IN
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <CountdownBlock value={time.d} unit="d" />
                  <CountdownBlock value={time.h} unit="h" />
                  <CountdownBlock value={time.m} unit="m" />
                  <CountdownBlock value={time.s} unit="s" />
                </div>
              </div>
            )}

            {/* Divider */}
            <div className="w-full h-px bg-gray-100 mb-4" />

            {/* Stock progress */}
            {product.soldCount !== undefined && product.totalStock !== undefined && (
              <div className="mt-auto">
                <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden mb-2">
                  <div
                    className="h-full bg-[#2ecc40] rounded-full transition-all duration-500"
                    style={{ width: `${soldPct}%` }}
                  />
                </div>
                <p className="text-[13px] text-gray-500 font-medium">
                  Sold:{" "}
                  <span className="font-black text-gray-900">
                    {product.soldCount}/{product.totalStock}
                  </span>
                </p>
              </div>
            )}

          </div>
        </div>
      </div>
    </div>
  );
}