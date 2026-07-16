import { Link } from 'react-router-dom';

export default function ExploreBasics() {
  const basics = [
    {
      id: 'size-system',
      title: 'Size Your System',
      image: 'https://cdn11.bigcommerce.com/s-bi8c0htqsn/images/stencil/original/image-manager/sizeyoursystemthumb2.png?t=1777411683',
      href: '/learn/size-system',
    },
    {
      id: 'soft-start',
      title: 'Soft Start',
      image: 'https://cdn11.bigcommerce.com/s-bi8c0htqsn/images/stencil/original/image-manager/softstart4-29.png?t=1777500490',
      href: '/learn/soft-start',
    },
    {
      id: 'ev-charging',
      title: 'EV Charging',
      image: 'https://cdn11.bigcommerce.com/s-bi8c0htqsn/images/stencil/original/image-manager/evcharge4-29.png?t=1777500505',
      href: '/learn/ev-charging',
    },
    {
      id: 'summer-readiness',
      title: 'Summer Readiness',
      image: 'https://cdn11.bigcommerce.com/s-bi8c0htqsn/images/stencil/original/image-manager/summer-readiness-5-26.png?t=1779456424',
      href: '/learn/summer-readiness',
    },
  ];

  return (
    <section className="w-full bg-[#fafafa] py-12 sm:py-16 px-4 sm:px-6 lg:px-8 border-b border-neutral-100">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-14">

          {/* Left Content */}
          <div className="w-full lg:w-1/3 flex flex-col items-center text-center shrink-0">
            <h2 className="text-[28px] sm:text-[32px] lg:text-[40px] xl:text-[44px] font-black text-[#0B1525] tracking-tight mb-3">
              Explore The Basics
            </h2>
            <p className="text-[14px] sm:text-[15px] text-neutral-700 leading-relaxed mb-6 max-w-[280px]">
              Learn more about how solar can protect your home from power outages this season
            </p>
            <Link
              to="/learn"
              className="inline-flex items-center justify-center bg-[#22a055] hover:bg-[#187a3e] text-white text-[14px] font-bold px-7 py-2.5 rounded shadow-sm transition-colors"
            >
              Learn More
            </Link>
          </div>

          {/* Right Cards Grid */}
          <div className="w-full lg:w-2/3 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {basics.map((item) => (
              <Link key={item.id} to={item.href} className="flex flex-col group cursor-pointer">
                <div className="w-full aspect-[3/4] overflow-hidden mb-4">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-[13px] sm:text-[14px] font-black text-[#0B1525] text-center mb-1.5">
                  {item.title}
                </h3>
                <span className="text-[11px] sm:text-[12px] text-neutral-600 text-center flex items-center justify-center gap-1 group-hover:text-[#0B1525] transition-colors">
                  Read More <span className="text-[10px] font-medium">&gt;</span>
                </span>
              </Link>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
