"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import type { ProductCardData } from "../layout/ProductCard";

const DEFAULT_PRODUCTS: ProductCardData[] = [
  {
    id: "ps-1",
    name: "SteadyGrid 2000W Portable Power Hub — LiFePO4",
    price: 89500,
    originalPrice: 105000,
    currency: "KSh",
    images: [
      "https://thumbs.dreamstime.com/b/powerful-storage-battery-alternative-power-supply-white-background-you-isolation-lithium-ion-solar-panels-insulation-359009528.jpg",
    ],
  },
  {
    id: "ps-2",
    name: "1200W Complete Solar Home Kit — Sleek Array + Inverter",
    price: 145000,
    originalPrice: 172000,
    currency: "KSh",
    images: [
      "https://ussolarsupplier.com/cdn/shop/files/Apex_300_US_800x_145e1c12-cb10-4f22-b763-4fb0132210f0.png?v=1755836197",
    ],
  },
  {
    id: "si-1",
    name: "400W Monocrystalline Sleek Solar Array — High Efficiency",
    price: 18500,
    originalPrice: 22000,
    currency: "KSh",
    images: [
      "https://outdoorroadie.co.uk/cdn/shop/products/JackerySolar1000ProandTwoSolarSagaSolarPanels_800x800.webp?v=1671908742",
    ],
  },
  {
    id: "pe-1",
    name: "10-Way Surge Protector Strip — 3500W Industrial Grade",
    price: 3800,
    originalPrice: 5200,
    currency: "KSh",
    images: [
      "https://www.hampshiregenerators.co.uk/wp-content/uploads/2025/01/Bluetti-AC200P-L-Excel-Power-200W-Portable-Solar-Panel-1100x1100.webp",
    ],
  },
  {
    id: "pe-4",
    name: "100Ah LiFePO4 Deep Cycle Battery Storage",
    price: 48000,
    originalPrice: 55000,
    currency: "KSh",
    images: [
      "https://dropshop.com.bd/wp-content/uploads/2025/10/202310025AC180_2000-2000px_79bd89f0-cee4-44fe-b952-e0cc6c9cc93e_1000x.webp",
    ],
  },
  {
    id: "pe-3",
    name: "MPPT Smart Solar Charge Controller 60A — 12/24/48V",
    price: 12500,
    originalPrice: 15000,
    currency: "KSh",
    images: [
      "https://www.theodist.com/Images/ProductImages/Original/AC60PKIT.jpg",
    ],
  },
];

interface ProductSliderProps {
  title?: string;
  subtitle?: string;
  products?: ProductCardData[];
  viewAllHref?: string;
  visibleCount?: number;
}

export function TopRatedProducts({
  title = "Top Rated Products",
  subtitle = "Our customers' favorites",
  products = DEFAULT_PRODUCTS,
  viewAllHref = "#",
  visibleCount = 5,
}: ProductSliderProps) {
  const [offset, setOffset] = useState(0);

  const maxOffset = Math.max(0, products.length - visibleCount);

  const prev = () => setOffset((o) => Math.max(0, o - 1));
  const next = () => setOffset((o) => Math.min(maxOffset, o + 1));

  const visible = products.slice(offset, offset + visibleCount);

  const getDiscountPercentage = (
    price: number,
    originalPrice: number
  ) => {
    return Math.round(
      ((originalPrice - price) / originalPrice) * 100
    );
  };

  return (
    <div className="max-w-[1400px] mx-auto px-2 py-5 bg-white rounded-lg shadow-sm border border-gray-100">
      
      {/* Header */}
      <div className="flex items-end justify-between mb-4">
        <div className="pl-4">
          <h1 className="text-[18px] font-black text-gray-900 uppercase tracking-wider">
            {title}
            {subtitle && (
              <span className="text-gray-400 font-semibold normal-case ml-2">
                | {subtitle}
              </span>
            )}
          </h1>
        </div>

        <a
          href={viewAllHref}
          className="text-sm font-semibold text-gray-500 hover:text-[#2ecc40] transition-colors flex items-center gap-1"
        >
          See All <ArrowRight size={14} />
        </a>
      </div>

      {/* Product Grid */}
      <div className="relative group">
        
        {/* Left Arrow */}
        <button
          onClick={prev}
          disabled={offset === 0}
          className="absolute -left-1 top-[40%] -translate-y-1/2 w-10 h-10 rounded-full bg-black/25 shadow-[0_2px_8px_rgba(0,0,0,0.15)] flex items-center justify-center text-gray-700 disabled:opacity-0 disabled:pointer-events-none hover:bg-gray-50 hover:text-[#2ecc40] transition-all z-10"
        >
          <ChevronLeft size={24} />
        </button>

        {/* Products */}
        <div
          className="grid gap-4 sm:gap-6"
          style={{
            gridTemplateColumns: `repeat(${visibleCount}, minmax(0, 1fr))`,
          }}
        >
          {visible.map((product) => {
            const hasDiscount =
              product.originalPrice &&
              product.originalPrice > product.price;

            return (
              <div
                key={product.id}
                className="
                  flex flex-col bg-white rounded-md cursor-pointer group/card
                  transition-all duration-100 ease-out
                  hover:scale-[1.015]
                  hover:shadow-[0_0_0_1px_rgba(0,0,0,0.02),0_6px_30px_rgba(0,0,0,0.12)]
                "
              >
                {/* Image */}
                <div className="relative aspect-square bg-white rounded-md overflow-hidden flex items-center justify-center mb-2">
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-full h-full object-contain mix-blend-multiply"
                  />

                  {/* Discount */}
                  {hasDiscount && (
                    <div className="absolute top-1 right-1 bg-[#2ecc40] text-white text-[13px] font-bold px-1 py-0.5">
                      -
                      {getDiscountPercentage(
                        product.price,
                        product.originalPrice!
                      )}
                      %
                    </div>
                  )}
                </div>

                {/* Details */}
                <div className="flex flex-col flex-1 px-1 pb-2">
                  <h3
                    className="text-[14px] text-[#333333] truncate"
                    title={product.name}
                  >
                    {product.name}
                  </h3>

                  <div className="mt-1">
                    <div className="text-[16px] sm:text-[18px] font-semibold text-[#222222] leading-none">
                      {product.currency}{" "}
                      {product.price.toLocaleString()}
                    </div>

                    <div className="h-4">
                      {hasDiscount && (
                        <span className="text-[13px] text-[#75757a] line-through">
                          {product.currency}{" "}
                          {product.originalPrice!.toLocaleString()}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Right Arrow */}
        <button
          onClick={next}
          disabled={offset >= maxOffset}
          className="absolute -right-1 top-[40%] -translate-y-1/2 w-10 h-10 rounded-full bg-black/25 shadow-[0_2px_8px_rgba(0,0,0,0.15)] flex items-center justify-center text-gray-700 disabled:opacity-0 disabled:pointer-events-none hover:bg-gray-50 hover:text-[#2ecc40] transition-all z-10"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
}