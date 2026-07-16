import { Link } from 'react-router-dom';
import { Fragment } from "react";

interface Breadcrumb {
    label: string;
    href?: string;
}

interface PageHeaderProps {
    title: string;
    breadcrumbs: Breadcrumb[];
    imageUrl: string;
}

export default function PageHeader({ title, breadcrumbs, imageUrl }: PageHeaderProps) {
    return (
        <div
            className="relative w-full h-[220px] md:h-[260px] flex items-center justify-center overflow-hidden"
        >
            {/* Background image */}
            <img
                src={imageUrl}
                alt=""
                className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-[#0B1525]/70" />

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center gap-2 px-4 text-center">
                {/* Breadcrumbs */}
                <nav className="flex items-center gap-2 text-xs md:text-sm font-medium text-neutral-200 tracking-wide">
                    {breadcrumbs.map((crumb, index) => (
                        <Fragment key={crumb.label}>
                            {index > 0 && <span className="text-neutral-400">/</span>}
                            {crumb.href ? (
                                <Link
                                    to={crumb.href}
                                    className="hover:text-white transition-colors"
                                >
                                    {crumb.label}
                                </Link>
                            ) : (
                                <span className="text-neutral-200">{crumb.label}</span>
                            )}
                        </Fragment>
                    ))}
                </nav>

                {/* Title */}
                <h1 className="text-3xl md:text-5xl font-black text-white tracking-tight">
                    {title}
                </h1>
            </div>
        </div>
    );
}