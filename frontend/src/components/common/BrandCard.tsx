import { Link } from 'react-router-dom';

interface BrandCardProps {
    name: string;
    logoUrl: string;
    href?: string;
}

export default function BrandCard({ name, logoUrl, href = '#' }: BrandCardProps) {
    return (
        <Link
            to={href}
            className="group flex flex-col bg-white border border-neutral-200 rounded-lg overflow-hidden hover:border-[#22a055] hover:shadow-md transition-all duration-300"
        >
            {/* Logo Zone */}
            <div className="flex items-center justify-center h-[180px] p-8">
                <img
                    src={logoUrl}
                    alt={name}
                    className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                />
            </div>

            {/* Name */}
            <div className="py-4 px-4 text-center">
                <span className="text-sm font-bold text-[#0B1525] tracking-wide">
                    {name}
                </span>
            </div>
        </Link>
    );
}