import Link from "next/link";

export interface ProjectCardData {
  id: string;
  title: string;
  description: string;
  image: string;
  href: string;
}

export function ShopByProjectCard({ title, description, image, href }: ProjectCardData) {
  return (
    <div className="group flex flex-col">
      <div className="overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={image} alt={title} className="aspect-[16/9] w-full object-cover transition-transform duration-500 group-hover:scale-105" />
      </div>
      <h3 className="mb-1 mt-4 text-lg font-bold text-surface-low">{title}</h3>
      <p className="mb-4 text-[13px] leading-relaxed text-neutral-600">{description}</p>
      <Link
        href={href}
        className="w-fit bg-primary px-5 py-2.5 text-[13px] font-bold text-white hover:bg-primary-hover"
      >
        Discover More
      </Link>
    </div>
  );
}
