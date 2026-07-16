import { useRef } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

export default function WhatsNew() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const updates = [
    {
      id: 1,
      brand: 'CW ENERGY',
      title: 'CW Energy 595W Pallet of Bifacial Solar Panels | 31 Panels',
      price: '$7,378.00',
      image: 'https://cdn.shopify.com/s/files/1/0536/3390/8911/files/Elite_300.png?v=1772965689&width=1125&height=1125&crop=center',
    },
    {
      id: 2,
      brand: 'PRISM SOLAR TECHNOLOGIES',
      title: 'Prism Solar 445W Pallet of Bifacial Solar Panels | 31 Panels',
      price: '$3,448.75',
      image: 'https://s4.bluettipower.com/bluetti/navigation/2026/04/AC200PL@3x-1775557902518-57e6.png',
    },
    {
      id: 3,
      brand: 'SUNPRO POWER',
      title: 'SunPro 440W Pallet of Bifacial Solar Panels | 36 Panels',
      price: '$6,019.20',
      image: 'https://s4.bluettipower.com/bluetti/navigation/2026/04/AC200PL@3x-1775557902518-57e6.png',
    },
    {
      id: 4,
      brand: 'SOLATRIM',
      title: 'SolaTrim | SolEmber and Pest Abatement Barrier - 5.5" | 100 ft (25 Panels)',
      price: '$358.50',
      image: 'https://cdn11.bigcommerce.com/s-bi8c0htqsn/images/stencil/original/image-manager/-charge-controllers-2-2026-1-.png?t=1772137272',
    },
    {
      id: 5,
      brand: 'EG4 ELECTRONICS',
      title: 'EG4 WallMount PowerPro | 48V 280AH | 14.3kWh',
      price: '$3,899.00',
      image: 'https://cdn11.bigcommerce.com/s-bi8c0htqsn/images/stencil/original/image-manager/wiring-1.png?t=1734106631',
    }
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
        {/* Section Header */}
        <div className="flex items-end justify-between mb-5 border-b border-neutral-200 pb-3 gap-4">
          <div className="min-w-0 pr-2">
            <h2 className="text-sm sm:text-lg font-black text-[#0B1525] tracking-tight uppercase flex items-center gap-2">
              <span className="w-1.5 h-4 sm:h-5 bg-[#22a055] block rounded-sm shrink-0"></span>
              <span className="leading-tight">What's New on SteadyGrid</span>
            </h2>
            <p className="text-neutral-400 text-[10px] sm:text-[11px] font-semibold tracking-wide uppercase mt-0.5">
              Latest products, updates, and resources
            </p>
          </div>

          <a href="#" className="shrink-0 whitespace-nowrap flex items-center gap-1 sm:gap-1.5 text-[10px] sm:text-[11px] font-black tracking-widest text-neutral-400 hover:text-[#0B1525] uppercase transition-colors group/link mb-1">
            <span>VIEW MORE</span>
            <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 group-hover/link:translate-x-1 transition-transform" />
          </a>
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
            {updates.map((item) => (
              <div
                key={item.id}
                className="w-[240px] sm:w-[280px] shrink-0 bg-white border border-neutral-200 rounded-lg p-3 flex flex-col items-center group cursor-pointer snap-start hover:shadow-md hover:border-neutral-300 transition-all"
              >
                {/* Product Image */}
                <div className="w-full h-[200px] flex items-center justify-center mb-4">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>

                {/* Text Content */}
                <div className="text-center px-1 flex flex-col items-center w-full mt-auto">
                  <span className="text-[10px] text-neutral-400 uppercase tracking-wider mb-1.5 font-bold">
                    {item.brand}
                  </span>
                  <h3 className="text-[12px] sm:text-[13px] text-neutral-800 font-medium leading-snug mb-2 hover:text-[#22a055] transition-colors line-clamp-2 min-h-[36px]">
                    {item.title}
                  </h3>
                  <span className="text-[13px] font-black text-[#0B1525] mt-1">
                    {item.price}
                  </span>
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
