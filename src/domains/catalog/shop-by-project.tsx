import { ShopByProjectCard, type ProjectCardData } from "@/domains/catalog/shop-by-project-card";

export const PROJECTS: ProjectCardData[] = [
  { id: "homesteading", title: "Homesteading", description: "Empower your off-grid lifestyle with complete solar independence.", image: "https://cdn11.bigcommerce.com/s-bi8c0htqsn/images/stencil/original/image-manager/homesteading-4-2026.png?t=1777412401", href: "/shop/projects/homesteading" },
  { id: "mounting-solutions", title: "Mounting Solutions", description: "Secure your solar investment with pro-grade mounting hardware.", image: "https://checkout.bluettipower.com/cdn/shop/files/banner_842db15e-ce09-46a2-ba23-d7c3a558bd2b.jpg?v=1775039932&width=1600", href: "/shop/projects/mounting-solutions" },
  { id: "ev-charging", title: "EV Charging", description: "Power your electric vehicle with clean solar energy.", image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&w=800&q=80", href: "/shop/projects/ev-charging" },
  { id: "survival-preparedness", title: "Survival Preparedness", description: "Be ready for anything with reliable backup power.", image: "https://checkout.bluettipower.com/cdn/shop/files/banner_842db15e-ce09-46a2-ba23-d7c3a558bd2b.jpg?v=1775039932&width=1600", href: "/shop/projects/survival-preparedness" },
  { id: "mobile-adventures", title: "Mobile Adventures", description: "Ideal solar for RVs, vans, and life on the move.", image: "https://checkout.bluettipower.com/cdn/shop/files/banner_842db15e-ce09-46a2-ba23-d7c3a558bd2b.jpg?v=1775039932&width=1600", href: "/shop/projects/mobile-adventure" },
  { id: "battery-backup", title: "Battery Backup", description: "Ensure peace of mind during outages with home backup.", image: "https://checkout.bluettipower.com/cdn/shop/files/banner_842db15e-ce09-46a2-ba23-d7c3a558bd2b.jpg?v=1775039932&width=1600", href: "/shop/projects/battery-backup" },
];

export function ShopByProject() {
  return (
    <section className="w-full border-b border-neutral-100 bg-white py-8 sm:py-12">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="flex items-center gap-2 font-black uppercase text-surface-low">
            <span className="h-4 w-1.5 bg-primary" />
            Shop By Project
          </h2>
          <p className="mt-1 text-xs text-neutral-500">
            Find the perfect solar setup tailored to your specific application
          </p>
        </div>
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((p) => (
            <ShopByProjectCard key={p.id} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
}
