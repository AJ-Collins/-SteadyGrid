import Link from "next/link";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface PageHeaderProps {
  title: string;
  breadcrumbs: BreadcrumbItem[];
  imageUrl: string;
}

export function PageHeader({ title, breadcrumbs, imageUrl }: PageHeaderProps) {
  return (
    <div className="relative flex h-[220px] w-full items-center justify-center overflow-hidden md:h-[260px] lg:h-[300px]">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={imageUrl} alt={title} className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-surface-low/70" />
      <div className="relative z-10 flex flex-col items-center px-4 text-center">
        <nav className="mb-3 flex items-center gap-2 text-xs text-neutral-200 md:text-sm">
          {breadcrumbs.map((crumb, i) => (
            <span key={crumb.label} className="flex items-center gap-2">
              {i > 0 && <span>/</span>}
              {crumb.href ? (
                <Link href={crumb.href} className="hover:text-white">
                  {crumb.label}
                </Link>
              ) : (
                <span>{crumb.label}</span>
              )}
            </span>
          ))}
        </nav>
        <h1 className="text-3xl font-black text-white md:text-5xl">{title}</h1>
      </div>
    </div>
  );
}
