import Link from "next/link";

const navigateLinks = ["Solar Kits", "Promotions", "Design", "Our Store", "Discover More", "Financing"];
const categoryLinks = ["All Products", "All Brands", "New Arrivals", "Batteries", "Inverters", "Solar Panels", "EV Chargers", "Shop by Project"];
const brandsLinks = ["BLUETTI", "EG4 Electronics", "Victron Energy", "Growatt", "Canadian Solar", "View All"];

export function SiteFooter({ webOrigin }: { webOrigin?: string }) {
  return (
    <footer className="w-full border-t border-neutral-200 bg-white font-sans text-surface-low">
      <div className="mx-auto max-w-[1400px] px-4 pb-8 pt-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 pb-16 md:grid-cols-4">
          <div className="flex flex-col">
            <Link href={webOrigin ? `${webOrigin}/` : "/"} className="pb-8 text-2xl font-black">SteadyGrid</Link>
            <div className="flex flex-col gap-4 text-xs text-neutral-600">
              <span>Nairobi, Kenya</span>
              <span>Call Our Nairobi-Based Experts: +254700000000</span>
              <span>support@steadygridsolar.com</span>
              <span>Monday - Friday: 8am - 7pm CT, Saturday: 9am - 2pm CT</span>
            </div>
          </div>
          <div>
            <h4 className="mb-4 text-[13px] font-bold">Navigate</h4>
            <ul className="flex flex-col gap-2.5 text-xs text-neutral-500">
              {navigateLinks.map((l) => <li key={l}>{l}</li>)}
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-[13px] font-bold">Categories</h4>
            <ul className="flex flex-col gap-2.5 text-xs text-neutral-500">
              {categoryLinks.map((l) => <li key={l}>{l}</li>)}
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-[13px] font-bold">Brands</h4>
            <ul className="flex flex-col gap-2.5 text-xs text-neutral-500">
              {brandsLinks.map((l) => <li key={l}>{l}</li>)}
            </ul>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between gap-6 text-[11px] text-neutral-500 sm:flex-row">
          <div>© 2026 SteadyGrid Solar.</div>
          <div className="flex items-center gap-6">
            <span>Privacy Policy</span>
            <span>Legal</span>
            <span>Cookies Policy</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
