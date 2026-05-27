"use client";

export interface SpotlightProduct {
  name: string;
  tag?: string;             // colored tag label e.g. "Keyboard"
  tagColor?: string;        // tailwind text+bg e.g. "text-amber-600 bg-amber-50"
  pricePrefix?: string;     // "from"
  price?: string;
  priceColor?: string;      // tailwind class e.g. "text-[#2ecc40]"
  description?: string;
  ctaLabel?: string;
  ctaHref?: string;
  image?: string;           // emoji or url
  bgColor?: string;
}

interface ProductSpotlightRowProps {
  products: SpotlightProduct[];
}

const DEFAULT_PRODUCTS: SpotlightProduct[] = [
  {
    name: "Sono Playgo 5",
    pricePrefix: "from",
    price: "$569",
    priceColor: "text-[#2ecc40]",
    ctaLabel: "DISCOVER NOW",
    image:
      "https://thumbs.dreamstime.com/b/energy-storage-batteries-solar-panels-home-power-systems-off-grid-white-background-border-448335956.jpg",
  },
  {
    name: "Logitek Bluetooth",
    tag: "Keyboard",
    tagColor: "text-amber-600",
    description: "Best for all device",
    image:
      "https://thumbs.dreamstime.com/b/powerful-storage-battery-alternative-power-supply-white-background-you-isolation-lithium-ion-solar-panels-insulation-359009528.jpg",
  },
];

export function ProductSpotlightRow({ products = DEFAULT_PRODUCTS }: Partial<ProductSpotlightRowProps>) {
  return (
    <div className="flex gap-3">
      {products.map((product, i) => {
        const isDark = product.bgColor?.includes("3a3") || product.bgColor?.includes("gray-8") || product.bgColor?.includes("gray-9");

        return (
          <div
            key={i}
            className="relative w-full max-w-[400px] min-h-[180px] rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-all cursor-pointer group"
          >
            {/* Background Image */}
            <div className="absolute inset-0 overflow-hidden">
              <img
                src={product.image}
                className="w-full h-full object-cover blur-2xl scale-110 opacity-10"
              />
            </div>

            {/* Foreground product */}
            <img
              src={product.image}
              className="absolute inset-0 w-full h-full object-contain p-3"
            />

            {/* Content */}
            <div className="relative z-10 px-4 py-3 flex flex-col h-full">
              {/* Top */}
              <div>
                <h3
                  className={`text-[16px] font-black leading-tight ${
                    isDark ? "text-white" : "text-gray-900"
                  }`}
                >
                  {product.name}
                </h3>
              </div>

              {/* Middle */}
              <div className="mt-3 flex flex-col gap-1">
                {product.tag && (
                  <span
                    className={`self-start text-[12px] font-bold py-0.5 ${
                      product.tagColor ?? "text-gray-600"
                    }`}
                  >
                    {product.tag}
                  </span>
                )}

                {product.pricePrefix && (
                  <span className="text-[12px] font-medium text-gray-400">
                    {product.pricePrefix}{" "}
                    <span
                      className={`text-[17px] font-black ${
                        product.priceColor ?? "text-[#2ecc40]"
                      }`}
                    >
                      {product.price}
                    </span>
                  </span>
                )}

                {product.description && (
                  <p
                    className={`text-[12px] font-medium ${
                      isDark ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    {product.description}
                  </p>
                )}
              </div>

              {/* Bottom */}
              <div className="mt-auto pt-4">
                {product.ctaLabel && (
                  <a
                    href={product.ctaHref ?? "#"}
                    className={`text-[11px] font-extrabold underline underline-offset-2 transition-colors ${
                      isDark
                        ? "text-white hover:text-gray-300"
                        : "text-gray-900 hover:text-[#2ecc40]"
                    }`}
                  >
                    {product.ctaLabel}
                  </a>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}