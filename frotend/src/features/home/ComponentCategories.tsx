import { Link } from 'react-router-dom';

interface ComponentCategory {
  name: string;
  image: string;
  href: string;
}

const categories: ComponentCategory[] = [
  {
    name: 'Solar Panels',
    image: '/cat-solar-panels.png',
    href: '/shop/solar-panels',
  },
  {
    name: 'Inverters',
    image: '/cat-inverters.png',
    href: '/shop/inverters',
  },
  {
    name: 'Kits & Bundles',
    image: '/cat-kits-bundles.png',
    href: '/shop/kits-bundles',
  },
  {
    name: 'Batteries',
    image: 'https://cdn.shopify.com/s/files/1/0536/3390/8911/files/Apex_300_2_200W_SP200L_1.webp?v=1781056025&width=1125&height=1125&crop=center',
    href: '/shop/batteries',
  },
  {
    name: 'High Efficiency Appliances',
    image: 'cat-kits-bundles.png',
    href: '/shop/appliances',
  },
  {
    name: 'Wiring',
    image: '/cat-solar-panels.png',
    href: '/shop/wiring',
  },
  {
    name: 'System Components',
    image: '/cat-solar-panels.png',
    href: '/shop/system-components',
  },
  {
    name: 'Rapid Shutdown Equipment',
    image: 'cat-kits-bundles.png',
    href: '/shop/rapid-shutdown',
  },
  {
    name: 'Portable Power Stations',
    image: '/cat-inverters.png',
    href: '/shop/portable-power',
  },
  {
    name: 'Charge Controllers',
    image: 'https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?auto=format&fit=crop&w=400&q=80',
    href: '/shop/charge-controllers',
  },
];

export default function ComponentCategories() {
  return (
    <section className="w-full bg-white py-8 sm:py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1400px] mx-auto">
        {/* Section Title – left-aligned */}
        <h2 className="text-xl sm:text-2xl font-bold text-[#0B1525] tracking-tight mb-5">
          Top Categories
        </h2>

        {/* 5-column × 2-row grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
          {categories.map((cat) => (
            <Link
              key={cat.name}
              to={cat.href}
              className="group flex flex-col items-center bg-white border border-neutral-200 rounded-lg p-4 sm:p-5 hover:shadow-md hover:border-neutral-300 transition-all duration-200 cursor-pointer"
            >
              {/* Product image container */}
              <div className="w-full aspect-square flex items-center justify-center overflow-hidden mb-3">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              {/* Category label */}
              <span className="text-xs sm:text-sm text-neutral-700 font-medium text-center leading-tight group-hover:text-[#0B1525] transition-colors">
                {cat.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
