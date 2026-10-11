import Link from "next/link";

interface BrandCardProps {
  name: string;
  logoUrl: string;
  href?: string;
}

export function BrandCard({ name, logoUrl, href = "#" }: BrandCardProps) {
  return (
    <Link
      href={href}
      className="group flex flex-col rounded-lg border border-neutral-200 bg-white hover:border-primary hover:shadow-md"
    >
      <div className="flex h-[180px] items-center justify-center p-8">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={logoUrl} alt={name} className="max-h-full max-w-full object-contain transition-transform group-hover:scale-105" />
      </div>
      <div className="py-4 text-center text-sm font-bold text-surface-low">{name}</div>
    </Link>
  );
}
