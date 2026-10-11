import { formatCurrency } from "@/shared/lib/format-currency";

interface ProductCardProps {
  brand: string;
  title: string;
  sku: string;
  description: string;
  oldPrice: number | null;
  price: number;
  imageUrl: string | null;
  inStock?: boolean;
}

export function ProductCard({ brand, title, sku, description, oldPrice, price, imageUrl, inStock = true }: ProductCardProps) {
  return (
    <div className="group flex h-full flex-col gap-6 border border-gray-200 bg-white p-6 transition-shadow duration-300 hover:shadow-lg xl:flex-row">
      <div className="flex h-[200px] w-full shrink-0 items-center justify-center overflow-hidden xl:w-[220px] xl:min-w-[220px]">
        {imageUrl ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={imageUrl} alt={title} className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-105" />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-neutral-100 text-xs text-neutral-400">No image</div>
        )}
      </div>
      <div className="flex flex-1 flex-col">
        <div className="mb-1 text-sm text-gray-500">{brand}</div>
        <h3 className="mb-2 line-clamp-2 cursor-pointer text-[15px] font-medium leading-tight text-neutral-800 transition-colors hover:text-primary">
          {title}
        </h3>
        <div className="mb-2 text-xs font-medium text-gray-500">SKU: {sku}</div>
        <p className="mb-4 line-clamp-2 text-xs leading-relaxed text-gray-600">{description}</p>
        <div className="mt-auto">
          {oldPrice ? <div className="mb-0.5 text-sm text-red-500 line-through">{formatCurrency(oldPrice)}</div> : null}
          <div className="mb-4 text-[22px] font-extrabold text-gray-900">{formatCurrency(price)}</div>
        </div>
        <div className="mt-auto flex gap-2">
          {inStock ? (
            <button className="flex flex-1 cursor-pointer items-center justify-center gap-2 rounded-md bg-primary px-4 py-3 text-sm font-bold text-white transition-colors hover:bg-primary-hover">
              Add To Cart
            </button>
          ) : (
            <button disabled className="flex flex-1 items-center justify-center gap-2 rounded-md bg-gray-500 px-4 py-3 text-sm font-bold text-white">
              Out Of Stock
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
