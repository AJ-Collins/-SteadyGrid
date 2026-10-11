import { formatCurrency } from "@/shared/lib/format-currency";

interface SolarKitsProductCardProps {
  brand: string;
  title: string;
  sku: string;
  description: string;
  oldPrice: number;
  price: number;
  imageUrl: string;
  inStock?: boolean;
}

export function SolarKitsProductCard({
  title,
  sku,
  description,
  oldPrice,
  price,
  imageUrl,
  inStock = true,
}: SolarKitsProductCardProps) {
  return (
    <div className="flex w-[240px] shrink-0 snap-start flex-col border border-gray-200 bg-white transition-shadow hover:shadow-xl sm:w-[280px] md:w-[320px]">
      <div className="relative flex h-[180px] items-center justify-center overflow-hidden p-4 sm:h-[200px] md:h-[240px]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={imageUrl} alt={title} className="max-h-full max-w-full object-contain" />
        {!inStock && (
          <span className="absolute left-2 top-2 bg-gray-500 px-2 py-1 text-[10px] font-bold uppercase text-white">
            Out of Stock
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col p-4">
        <span className="mb-2 w-fit bg-neutral-100 px-2 py-0.5 text-[10px] font-bold text-neutral-500">
          SKU: {sku}
        </span>
        <h3 className="mb-1 line-clamp-2 text-sm font-bold text-neutral-800">{title}</h3>
        <p className="mb-3 line-clamp-2 text-xs text-gray-500">{description}</p>
        <div className="mt-auto flex items-center justify-between border-t border-neutral-100 pt-3">
          <div>
            <div className="text-xs text-red-500 line-through">{formatCurrency(oldPrice)}</div>
            <div className="text-[18px] font-extrabold text-gray-900 sm:text-[20px]">
              {formatCurrency(price)}
            </div>
          </div>
          {inStock ? (
            <button className="cursor-pointer rounded-md bg-primary px-4 py-2 text-xs font-bold text-white hover:bg-primary-hover">
              Add
            </button>
          ) : (
            <button disabled className="rounded-md bg-gray-300 px-4 py-2 text-xs font-bold text-white">
              Out
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
