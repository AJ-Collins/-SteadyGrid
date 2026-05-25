"use client";

import { useState } from "react";
import { CheckCircle2, XCircle, Heart, Star, Zap } from "lucide-react";

export type StockStatus = "in_stock" | "out_of_stock" | "pre_order";

export interface ProductCardData {
  id: string;
  name: string;
  reviewCount?: number;
  price: number;
  originalPrice?: number;
  priceMax?: number;
  currency?: string;
  images: string[];
  savings?: number;
  perks?: { label: string; color: "green" | "red" | "blue" | "amber" }[];
  stockStatus?: StockStatus;
  shippingLabel?: string;
  extraAction?: string;
  badge?: string;
}

const PERK_STYLES = {
  green: "text-emerald-700 bg-emerald-50 border-emerald-200",
  red:   "text-rose-500 bg-rose-50 border-rose-200",
  blue:  "text-sky-600 bg-sky-50 border-sky-200",
  amber: "text-amber-600 bg-amber-50 border-amber-200",
};

function StockBadge({ status }: { status: StockStatus }) {
  if (status === "in_stock")
    return (
      <div className="flex items-center gap-1">
        <CheckCircle2 size={10} className="text-emerald-500" />
        <span className="text-[10px] font-medium text-gray-500">In stock</span>
      </div>
    );
  if (status === "out_of_stock")
    return (
      <div className="flex items-center gap-1">
        <XCircle size={10} className="text-rose-400" />
        <span className="text-[10px] font-medium text-gray-400">Out of stock</span>
      </div>
    );
  return (
    <span className="text-[9px] font-bold text-amber-600 uppercase tracking-widest">
      Pre-order
    </span>
  );
}

export function ProductCard({ product }: { product: ProductCardData }) {
  const [activeImg, setActiveImg] = useState(0);
  const [wishlisted, setWishlisted] = useState(false);
  const cur = product.currency ?? "KSh";
  const savings =
    product.savings ??
    (product.originalPrice ? product.originalPrice - product.price : null);

  return (
    <div className="flex flex-col cursor-pointer group/card rounded-xl p-2 -mx-2 transition-all duration-150 hover:bg-slate-50 hover:shadow-[0_2px_8px_rgba(0,0,0,0.06)]">

      {/* ── Image area — fully static ── */}
      <div className="relative rounded-xl overflow-hidden bg-slate-50 aspect-square mb-2.5">
        <img
          src={product.images[activeImg]}
          alt={product.name}
          className="w-full h-full object-contain p-3"
        />

        {/* Badge — top right */}
        {product.badge && (
          <div className="absolute top-3 right-3 bg-[#0a2e1f] text-white rounded-xl px-2 py-2 text-start shadow-md z-10">
            <p className="text-[9px] font-bold uppercase tracking-wider opacity-75 flex items-center gap-1">
              <Zap size={8} className="text-amber-400" /> Type
            </p>
            <p className="text-[13px] font-black leading-tight">{product.badge}</p>
          </div>
        )}

        {/* SAVE badge — bottom left */}
        {savings && savings > 0 && (
          <div className="absolute bottom-2 left-2 bg-rose-500 text-white rounded-md px-1.5 py-1 text-center z-10">
            <p className="text-[7px] font-bold uppercase tracking-wider leading-none mb-0.5">SAVE</p>
            <p className="text-[10px] font-black leading-none">
              {cur} {savings.toLocaleString()}
            </p>
          </div>
        )}

        {/* Wishlist — top left, appears on card hover */}
        <button
          onClick={(e) => { e.stopPropagation(); setWishlisted((v) => !v); }}
          className="absolute top-2 left-2 w-6 h-6 rounded-full bg-white shadow-sm border border-slate-100 flex items-center justify-center opacity-0 group-hover/card:opacity-100 transition-opacity duration-150 z-10"
        >
          <Heart
            size={11}
            className={wishlisted ? "fill-rose-500 text-rose-500" : "text-slate-400"}
          />
        </button>
      </div>

      {/* Review stars */}
      {product.reviewCount !== undefined && (
        <div className="flex items-center gap-1 mb-1">
          <div className="flex items-center gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={8}
                className={i < 4 ? "fill-amber-400 text-amber-400" : "fill-slate-200 text-slate-200"}
              />
            ))}
          </div>
          <span className="text-[9.5px] text-slate-400">({product.reviewCount})</span>
        </div>
      )}

      {/* Name */}
      <h3 className="text-[11.5px] font-semibold text-slate-800 leading-[1.35] mb-1.5 line-clamp-2 group-hover/card:text-[#0f7a4b] transition-colors duration-150">
        {product.name}
      </h3>

      {/* Price */}
      <div className="flex items-baseline gap-1.5 mb-1.5 flex-wrap">
        <span className={`text-[13px] font-black leading-none tracking-tight ${
          product.originalPrice || product.priceMax ? "text-[#0f7a4b]" : "text-slate-900"
        }`}>
          {cur} {product.price.toLocaleString()}
          {product.priceMax && (
            <span className="text-slate-700"> – {cur} {product.priceMax.toLocaleString()}</span>
          )}
        </span>
        {product.originalPrice && (
          <span className="text-[10px] text-slate-400 line-through">
            {cur} {product.originalPrice.toLocaleString()}
          </span>
        )}
      </div>

      {/* Perks */}
      {product.perks && product.perks.length > 0 && (
        <div className="flex items-center gap-1 flex-wrap mb-1.5">
          {product.perks.map((p) => (
            <span
              key={p.label}
              className={`text-[8.5px] font-bold uppercase tracking-wider border rounded px-1.5 py-0.5 ${PERK_STYLES[p.color]}`}
            >
              {p.label}
            </span>
          ))}
        </div>
      )}

      {/* Shipping label */}
      {product.shippingLabel && (
        <span className="text-[9px] text-slate-400 font-medium mb-1 block">
          {product.shippingLabel}
        </span>
      )}

      {/* Stock status */}
      {product.stockStatus && (
        <div className="mb-1">
          <StockBadge status={product.stockStatus} />
        </div>
      )}

      {/* Extra action */}
      {product.extraAction && (
        <a href="#" className="text-[10.5px] font-semibold text-slate-500 hover:text-[#0f7a4b] transition-colors mt-0.5">
          {product.extraAction}
        </a>
      )}

      {/* Thumbnail strip */}
      {product.images.length > 1 && (
        <div className="flex items-center gap-1 mt-2">
          {product.images.slice(0, 4).map((img, i) => (
            <button
              key={i}
              onMouseEnter={() => setActiveImg(i)}
              onClick={() => setActiveImg(i)}
              className={`w-5 h-5 rounded overflow-hidden border transition-all ${
                i === activeImg ? "border-[#0f7a4b]" : "border-slate-200 hover:border-slate-400"
              }`}
            >
              <img src={img} alt="" className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      )}

    </div>
  );
}