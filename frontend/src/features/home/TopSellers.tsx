import { useRef } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Product {
  id: string;
  name: string;
  category: string;
  price: string;
  wasPrice?: string;
  rating: number;
  reviewsCount: number;
  image: string;
  inStock: boolean;
}

export default function TopSellers() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const products: Product[] = [
    {
      id: 'eg4-ll-battery',
      name: 'EG4-LL Lithium Battery | 48V 100AH | Server Rack',
      category: 'Batteries',
      price: '$1,399.00',
      wasPrice: '$1,699.00',
      rating: 5,
      reviewsCount: 148,
      image: 'https://cdn11.bigcommerce.com/s-bi8c0htqsn/images/stencil/1920w/products/13660/14996/SunPro_440W_Bifacial_Solar_Panel_1__86744.1779113652.png',
      inStock: true,
    },
    {
      id: 'eg4-3kw-inverter',
      name: 'EG4 3kW Off-Grid Inverter | 3000EHV-48',
      category: 'Inverters',
      price: '$679.00',
      rating: 4.8,
      reviewsCount: 92,
      image: 'https://cdn11.bigcommerce.com/s-bi8c0htqsn/images/stencil/1920w/products/13457/15015/12000xp_Front__34872__75143.1779289053.jpg',
      inStock: true,
    },
    {
      id: 'eg4-powerpro-wallmount',
      name: 'EG4 WallMount PowerPro | 48V 280AH | 14.3kWh',
      category: 'Batteries',
      price: '$3,899.00',
      wasPrice: '$4,499.00',
      rating: 5,
      reviewsCount: 206,
      image: 'https://cdn11.bigcommerce.com/s-bi8c0htqsn/images/stencil/original/image-manager/wiring-1.png?t=1734106631',
      inStock: true,
    },
    {
      id: 'eg4-18kpv-hybrid',
      name: 'EG4 18KPV Hybrid Inverter | 18000W PV',
      category: 'Inverters',
      price: '$5,249.00',
      rating: 4.9,
      reviewsCount: 114,
      image: 'https://cdn11.bigcommerce.com/s-bi8c0htqsn/images/stencil/original/image-manager/-charge-controllers-2-2026-1-.png?t=1772137272',
      inStock: true,
    },
    {
      id: 'canadian-solar-panel',
      name: 'Canadian Solar 440W Mono Panel (Bi-Facial)',
      category: 'Solar Panels',
      price: '$189.00',
      wasPrice: '$249.00',
      rating: 4.7,
      reviewsCount: 83,
      image: 'https://cdn11.bigcommerce.com/s-bi8c0htqsn/images/stencil/original/image-manager/kits-and-bundles-7-2025.png?t=1752691446',
      inStock: true,
    },
    {
      id: 'eg4-chargeverge',
      name: 'EG4 ChargeVerge EV Charger | Level 2 | 48A',
      category: 'EV Chargers',
      price: '$549.00',
      rating: 4.6,
      reviewsCount: 37,
      image: 'https://cdn11.bigcommerce.com/s-bi8c0htqsn/images/stencil/original/image-manager/kits-and-bundles-7-2025.png?t=1752691446',
      inStock: true,
    },
  ];

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const { scrollLeft, clientWidth } = scrollContainerRef.current;
      const scrollAmount = clientWidth * 0.7;
      scrollContainerRef.current.scrollTo({
        left: direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="w-full bg-white py-8 sm:py-10 px-4 sm:px-6 lg:px-8 border-b border-neutral-100">
      <div className="max-w-[1400px] mx-auto">

        {/* Section Header with Navigation Arrows */}
        <div className="flex items-end justify-between mb-5 border-b border-neutral-200 pb-3 gap-4">
          <div className="min-w-0 pr-2">
            <h2 className="text-sm sm:text-lg font-black text-[#0B1525] tracking-tight uppercase flex items-center gap-2">
              <span className="w-1.5 h-4 sm:h-5 bg-[#22a055] block rounded-sm shrink-0"></span>
              <span className="leading-tight">Top Sellers Right Now</span>
            </h2>
            <p className="text-neutral-400 text-[10px] sm:text-[11px] font-semibold tracking-wide uppercase mt-0.5">
              Our most popular products, in stock and ready to ship
            </p>
          </div>

          <Link to="/shop/products/top-sellers" className="shrink-0 whitespace-nowrap flex items-center gap-1 sm:gap-1.5 text-[10px] sm:text-[11px] font-black tracking-widest text-neutral-400 hover:text-[#0B1525] uppercase transition-colors group/link mb-1">
            <span>VIEW MORE</span>
            <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 group-hover/link:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Horizontal Scrollable Product List */}
        <div className="relative group/slider">
          {/* Left Navigation Arrow */}
          <button
            onClick={() => scroll('left')}
            className="hidden md:flex absolute left-0 lg:-left-4 top-1/2 -translate-y-1/2 z-10 w-[42px] h-[42px] bg-[#5c5c5c] hover:bg-neutral-700 items-center justify-center transition-colors text-white opacity-0 group-hover/slider:opacity-100 cursor-pointer shadow-md"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-7 h-7" />
          </button>

          <div
            ref={scrollContainerRef}
            className="flex gap-4 overflow-x-auto scrollbar-none pb-4 pt-2 scroll-smooth snap-x snap-mandatory"
          >
            {products.map((product) => (
              <div
                key={product.id}
                className="w-[220px] sm:w-[240px] shrink-0 bg-white border border-neutral-200 rounded-lg p-3 flex flex-col items-center group cursor-pointer snap-start hover:shadow-md hover:border-neutral-300 transition-all"
              >
                {/* Product Image */}
                <div className="relative w-full h-[180px] bg-white rounded mb-4 flex items-center justify-center overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain"
                  />
                  {product.inStock && (
                    <span className="absolute top-1 left-1 bg-[#22a055] text-white text-[8px] font-black tracking-widest px-1.5 py-0.5 uppercase">
                      IN STOCK
                    </span>
                  )}
                </div>

                {/* Text Content */}
                <div className="text-center px-1 flex flex-col items-center w-full mt-auto">
                  <span className="text-[10px] text-neutral-400 uppercase tracking-wider mb-1.5 font-bold">
                    {product.category}
                  </span>
                  <h3 className="text-[12px] sm:text-[13px] text-neutral-800 font-medium leading-snug mb-2 hover:text-[#22a055] transition-colors line-clamp-2 min-h-[36px]">
                    {product.name}
                  </h3>
                  <div className="flex items-baseline justify-center gap-1.5 mt-1">
                    <span className="text-[13px] font-black text-[#0B1525]">
                      {product.price}
                    </span>
                    {product.wasPrice && (
                      <span className="text-[10px] text-neutral-400 line-through">
                        {product.wasPrice}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Navigation Arrow */}
          <button
            onClick={() => scroll('right')}
            className="hidden md:flex absolute right-0 lg:-right-4 top-1/2 -translate-y-1/2 z-10 w-[42px] h-[42px] bg-[#5c5c5c] hover:bg-neutral-700 items-center justify-center transition-colors text-white opacity-0 group-hover/slider:opacity-100 cursor-pointer shadow-md"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-7 h-7" />
          </button>
        </div>

      </div>
    </section>
  );
}
