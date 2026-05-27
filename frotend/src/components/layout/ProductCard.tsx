"use client";

export interface ProductCardData {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  currency: string;
  images: string[];
}

interface ProductCardProps {
  product: ProductCardData;
}

export function ProductCard({ product }: ProductCardProps) {
  const hasDiscount = product.originalPrice && product.originalPrice > product.price;
  const discount = hasDiscount
    ? Math.round(((product.originalPrice! - product.price) / product.originalPrice!) * 100)
    : null;

  return (
    <div className="flex flex-col bg-white rounded-md cursor-pointer group/card transition-all duration-100 ease-out hover:scale-[1.015] hover:shadow-[0_0_0_1px_rgba(0,0,0,0.02),0_6px_30px_rgba(0,0,0,0.12)]">
      <div className="relative aspect-square bg-white rounded-md overflow-hidden flex items-center justify-center mb-2">
        <img src={product.images[0]} alt={product.name} className="w-full h-full object-contain mix-blend-multiply" />
        {discount && (
          <div className="absolute top-1 right-1 bg-[#2ecc40] text-white text-[13px] font-bold px-1 py-0.5">
            -{discount}%
          </div>
        )}
      </div>
      <div className="flex flex-col flex-1 px-1 pb-2">
        <h3 className="text-[14px] text-[#333333] truncate" title={product.name}>{product.name}</h3>
        <div className="mt-1">
          <div className="text-[16px] sm:text-[18px] font-semibold text-[#222222] leading-none">
            {product.currency} {product.price.toLocaleString()}
          </div>
          <div className="h-4">
            {hasDiscount && (
              <span className="text-[13px] text-[#75757a] line-through">
                {product.currency} {product.originalPrice!.toLocaleString()}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}