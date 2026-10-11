import Link from "next/link";

const BASICS = [
  { title: "Size Your System", image: "https://cdn11.bigcommerce.com/s-bi8c0htqsn/images/stencil/original/image-manager/sizeyoursystemthumb2.png?t=1777411683" },
  { title: "Soft Start", image: "https://cdn11.bigcommerce.com/s-bi8c0htqsn/images/stencil/original/image-manager/softstart4-29.png?t=1777500490" },
  { title: "EV Charging", image: "https://cdn11.bigcommerce.com/s-bi8c0htqsn/images/stencil/original/image-manager/evcharge4-29.png?t=1777500505" },
  { title: "Summer Readiness", image: "https://cdn11.bigcommerce.com/s-bi8c0htqsn/images/stencil/original/image-manager/summer-readiness-5-26.png?t=1779456424" },
];

export function ExploreBasics() {
  return (
    <section className="w-full border-b border-neutral-100 bg-[#fafafa] py-12 sm:py-16">
      <div className="mx-auto flex max-w-[1400px] flex-col gap-10 px-4 sm:px-6 lg:flex-row lg:px-8">
        <div className="flex flex-col items-start justify-center lg:w-1/3">
          <h2 className="text-[28px] font-black text-surface-low sm:text-[32px] lg:text-[40px] xl:text-[44px]">
            Explore The Basics
          </h2>
          <p className="mb-6 mt-3 text-sm text-neutral-500">
            Learn more about how solar can protect your home from power outages this season
          </p>
          <Link href="#" className="bg-primary px-7 py-2.5 text-sm font-bold text-white hover:bg-primary-hover">
            Learn More
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:w-2/3">
          {BASICS.map((b) => (
            <Link key={b.title} href="#" className="group">
              <div className="overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={b.image} alt={b.title} className="aspect-[3/4] w-full object-cover transition-transform group-hover:scale-105" />
              </div>
              <h3 className="mt-2 text-sm font-bold text-surface-low">{b.title}</h3>
              <span className="text-xs font-bold text-primary">Read More &gt;</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
