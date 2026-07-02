import { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function BrandHighlight() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const slides = [
    {
      id: 'pegasus',
      logo: (
        <div className="flex flex-col items-center gap-1">
          <div className="flex flex-col gap-[3px] w-12 self-center">
            <div className="w-full h-[4px] bg-[#60a5fa] rounded-full transform -skew-x-12"></div>
            <div className="w-[85%] h-[4px] bg-[#60a5fa] rounded-full transform -skew-x-12"></div>
            <div className="w-[70%] h-[4px] bg-[#60a5fa] rounded-full transform -skew-x-12"></div>
          </div>
          <span className="text-3xl font-black tracking-widest text-white">PEGASUS</span>
        </div>
      ),
      badge: 'MOUNTING SOLUTIONS',
      title: 'Smarter Mounting. Faster Installs.',
      description: 'Pegasus Solar delivers next-level roof-mounting solutions for residential and commercial installs, with installer-friendly hardware designed to simplify workflows, reduce material use, and support long-term performance.',
      image: 'https://checkout.bluettipower.com/cdn/shop/files/4_0c2307c5-6916-4976-826b-668bb440fe66.png?v=1775555594&width=1600',
    },
    {
      id: 'sirius',
      logo: (
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-2">
            <div className="grid grid-cols-2 gap-[2px] w-8 h-8">
              <div className="bg-[#2563eb] rounded-tl-[3px] relative overflow-hidden">
                <div className="absolute inset-0 bg-red-500 w-full h-[45%]"></div>
              </div>
              <div className="bg-[#2563eb] rounded-tr-[3px]"></div>
              <div className="bg-[#2563eb] rounded-bl-[3px]"></div>
              <div className="bg-[#2563eb] rounded-br-[3px]"></div>
            </div>
            <span className="text-4xl font-medium tracking-widest text-white">SIRIUS</span>
          </div>
          <span className="text-[9px] font-bold text-neutral-300 mt-1 uppercase tracking-[0.2em]">Powered by ELIN</span>
        </div>
      ),
      badge: 'SOLAR PANELS',
      title: 'Explore the Power of Sirius PV',
      description: 'Sirius PV delivers high-quality, reliable solar solutions. Every panel is engineered for durability, efficiency, and long-term performance, with rigorous testing to ensure resilience and optimal performance in any condition.',
      image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1920&q=80',
    },
    {
      id: 'lunar',
      logo: (
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 relative flex items-center justify-center">
            <div className="absolute bottom-0 left-0 w-5 h-5 bg-white rounded-b-full rounded-l-full"></div>
            <div className="absolute top-0 right-0 w-5 h-5 bg-white rounded-t-full rounded-r-full"></div>
          </div>
          <div className="flex flex-col leading-[1.1] text-white">
            <span className="text-3xl font-medium tracking-tight">lunar</span>
            <span className="text-3xl font-medium tracking-tight">energy</span>
          </div>
        </div>
      ),
      badge: 'ENERGY STORAGE SYSTEM',
      title: 'Energy as Unique as Your Home',
      description: 'Designed to seamlessly blend powerful hardware with intuitive software, Lunar delivers compact, modular battery storage, intelligent energy optimization, and reliable backup power all in one system.',
      image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1920&q=80',
    },
    {
      id: 'chiko',
      logo: (
        <div className="flex flex-col items-center">
          <div className="flex items-center">
            <span className="text-4xl font-black text-white">CHIK</span>
            <div className="w-[28px] h-[28px] rounded-full border-[4px] border-white bg-gradient-to-br from-yellow-300 to-orange-500 mx-[2px]"></div>
            <span className="text-4xl font-black text-white">USA</span>
          </div>
          <span className="text-[11px] font-bold tracking-[0.15em] text-white mt-1">
            SOLAR RACKING SOLUTIONS
          </span>
        </div>
      ),
      badge: 'MOUNTING SOLUTIONS',
      title: 'Beyond the Roof: Smart Solar Mounting.',
      description: 'Chiko USA delivers high-strength solar mounting solutions designed for durability and real-world performance. From robust ground mounts to innovative carport systems, their designs make it easy to expand solar capabilities beyond the rooftop.',
      image: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&w=1920&q=80',
    },
  ];

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const { scrollLeft, clientWidth } = scrollContainerRef.current;
      const scrollAmount = clientWidth;
      scrollContainerRef.current.scrollTo({
        left: direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, clientWidth } = scrollContainerRef.current;
      const newIndex = Math.round(scrollLeft / clientWidth);
      setActiveIndex(newIndex);
    }
  };

  return (
    <section className="w-full bg-white py-8 sm:py-12 px-4 sm:px-6 lg:px-8 border-b border-neutral-100">
      <div className="max-w-[1400px] mx-auto relative group/banner rounded-xl overflow-hidden shadow-sm">
        {/* Navigation Arrows */}
        <button
          onClick={() => scroll('left')}
          className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-white rounded-full flex items-center justify-center text-neutral-900 hover:scale-105 transition-transform opacity-0 group-hover/banner:opacity-100 shadow-lg cursor-pointer"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={() => scroll('right')}
          className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-white rounded-full flex items-center justify-center text-neutral-900 hover:scale-105 transition-transform opacity-0 group-hover/banner:opacity-100 shadow-lg cursor-pointer"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Slider Container */}
        <div
          ref={scrollContainerRef}
          onScroll={handleScroll}
          className="flex w-full overflow-x-auto snap-x snap-mandatory scrollbar-none scroll-smooth"
        >
          {slides.map((slide) => (
            <div key={slide.id} className="w-full shrink-0 snap-center relative min-h-[450px] sm:min-h-[500px] flex items-center justify-center py-12 px-4">

              {/* Background Image & Overlay */}
              <div className="absolute inset-0 z-0">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                  draggable="false"
                />
                <div className="absolute inset-0 bg-black/40"></div>
              </div>

              {/* Content Container */}
              <div className="relative z-10 max-w-[900px] mx-auto flex flex-col items-center text-center mt-8">
                {/* Logo */}
                <div className="mb-6">
                  {slide.logo}
                </div>

                {/* White Pill Badge */}
                <div className="bg-white px-3 py-1 mb-5 rounded-sm">
                  <span className="text-[10px] font-bold text-neutral-900 tracking-[0.1em] uppercase">
                    {slide.badge}
                  </span>
                </div>

                {/* Title */}
                <h2 className="text-3xl sm:text-4xl md:text-[44px] font-bold text-white mb-5 tracking-tight leading-tight">
                  {slide.title}
                </h2>

                {/* Description */}
                <p className="text-[14px] sm:text-[16px] text-neutral-200 mb-8 leading-relaxed max-w-4xl">
                  {slide.description}
                </p>

                {/* Links & Buttons */}
                <div className="flex flex-col items-center gap-5">
                  <a href="#" className="text-white font-bold text-[14px] hover:underline underline-offset-4">
                    Learn More &gt;
                  </a>
                  <button className="bg-white hover:bg-neutral-100 text-neutral-900 font-bold text-[15px] px-8 py-3 rounded-md shadow-lg transition-colors">
                    Shop Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2.5">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                if (scrollContainerRef.current) {
                  scrollContainerRef.current.scrollTo({
                    left: idx * scrollContainerRef.current.clientWidth,
                    behavior: 'smooth'
                  });
                }
              }}
              className={`w-2 h-2 rounded-full transition-all ${idx === activeIndex ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/80'}`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
