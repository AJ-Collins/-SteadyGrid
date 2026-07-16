import { Link } from 'react-router-dom';

interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  href: string;
}

export default function ShopByProjectCard({ title, description, image, href }: ProjectCardProps) {
  return (
    <div className="flex flex-col group">
      <div className="w-full aspect-[16/9] overflow-hidden bg-neutral-100 mb-4 sm:mb-5">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover hover:cursor-pointer"
        />
      </div>
      <div className="flex flex-col flex-1 px-1">
        <h3 className="text-lg sm:text-[19px] font-bold text-[#0B1525] mb-2 leading-tight hover:cursor-pointer">
          {title}
        </h3>
        <p className="text-[13px] sm:text-[13px] text-neutral-600 leading-relaxed mb-5 flex-1 pr-4">
          {description}
        </p>
        <div className="mt-auto">
          <Link
            to={href}
            className="inline-flex items-center justify-center bg-[#22a055] hover:bg-[#187a3e] text-white text-[13px] font-medium px-5 sm:px-6 py-2.5 transition-colors"
          >
            Discover More
          </Link>
        </div>
      </div>
    </div>
  );
}