import Link from "next/link";

const CATEGORIES = [
  { name: "Solar Panels", image: "/cat-solar-panels.png", href: "/shop/solar-panels" },
  { name: "Inverters", image: "/cat-inverters.png", href: "/shop/inverters" },
  { name: "Kits & Bundles", image: "/cat-kits-bundles.png", href: "/shop/solar-kits" },
  { name: "Batteries", image: "https://cdn.shopify.com/s/files/1/0536/3390/8911/files/Apex_300_2_200W_SP200L_1.webp?v=1781056025", href: "/shop/batteries" },
  { name: "High Efficiency Appliances", image: "/cat-kits-bundles.png", href: "/shop/products/high-efficiency-appliances" },
  { name: "Wiring", image: "/cat-solar-panels.png", href: "/shop/products/wiring" },
  { name: "System Components", image: "/cat-solar-panels.png", href: "/shop/products/system-components" },
  { name: "Rapid Shutdown Equipment", image: "https://cdn11.bigcommerce.com/s-bi8c0htqsn/images/stencil/original/image-manager/rapid-shutdown-1.png?t=1734106656", href: "/shop/products/rapid-shutdown-equipment" },
  { name: "Portable Power Stations", image: "/cat-inverters.png", href: "/shop/products/portable-power-stations" },
  { name: "Charge Controllers", image: "https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?auto=format&fit=crop&w=400&q=80", href: "/shop/products/charge-controllers" },
];

export function ComponentCategories() {
  return (
    <section className="w-full bg-white px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
      <div className="mx-auto max-w-[1400px]">
        <h2 className="mb-5 text-xl font-bold text-surface-low sm:text-2xl">Top Categories</h2>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 md:grid-cols-4 lg:grid-cols-5">
          {CATEGORIES.map((c) => (
            <Link
              key={c.name}
              href={c.href}
              className="group flex flex-col items-center rounded-lg border border-neutral-200 bg-white p-4 hover:shadow-md sm:p-5"
            >
              <div className="flex aspect-square w-full items-center justify-center overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={c.image} alt={c.name} className="max-h-full max-w-full object-contain transition-transform group-hover:scale-105" />
              </div>
              <span className="mt-3 text-center text-xs text-neutral-700 sm:text-sm">{c.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
