import Link from "next/link";
import { MapPin, Clock, Phone, ShoppingBag } from "lucide-react";

const HERO_FEATURES = [
  { title: "NO SHIPPING FEES", desc: "Save More Instantly" },
  { title: "SAME-DAY PICK UP", desc: "Get it Today" },
  { title: "EXPERT HELP", desc: "In-Store Support" },
  { title: "EXCLUSIVE DEALS", desc: "Only In-Store" },
];

const INFO_ITEMS = [
  { icon: MapPin, text: "614 Bill Bradford Rd Suite 101, Sulphur Springs, TX 75482" },
  { icon: Clock, text: "Open Monday-Saturday" },
  { icon: Phone, text: "Call (903) 321-7512" },
  { icon: ShoppingBag, text: "In Stock Today Ready For Pickup" },
];

const WHY_BLOCKS = [
  { title: "Take It Home Today", desc: "Purchase and pick up your system the same day." },
  { title: "Save on Shipping", desc: "Avoid shipping fees on heavy batteries and panels." },
  { title: "Expert Assistance", desc: "Talk to our team face to face before you buy." },
  { title: "See Products First", desc: "See solar products up close before committing." },
];

const STORE_CATEGORIES = [
  { name: "Solar Panels", image: "https://cdn11.bigcommerce.com/s-bi8c0htqsn/images/stencil/original/image-manager/sizeyoursystemthumb2.png" },
  { name: "Inverters", image: "https://cdn11.bigcommerce.com/s-bi8c0htqsn/images/stencil/original/image-manager/softstart4-29.png" },
  { name: "Batteries", image: "https://cdn11.bigcommerce.com/s-bi8c0htqsn/images/stencil/original/image-manager/wiring-1.png" },
  { name: "Mounting", image: "https://cdn11.bigcommerce.com/s-bi8c0htqsn/images/stencil/original/image-manager/rapid-shutdown-1.png" },
  { name: "Accessories", image: "https://cdn11.bigcommerce.com/s-bi8c0htqsn/images/stencil/original/image-manager/kits-and-bundles-7-2025.png" },
];

export function OurStore() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-white font-sans">
      <main className="flex w-full flex-1 flex-col">
        <section className="relative flex min-h-[450px] flex-col overflow-hidden bg-[#0B0B0B] md:flex-row">
          <div className="absolute hidden h-full w-[45%] bg-primary md:block" style={{ clipPath: "polygon(0 0,100% 0,85% 100%,0% 100%)" }}>
            <div
              className="h-full w-full bg-cover bg-center opacity-90"
              style={{ backgroundImage: "url(https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1000&q=80)" }}
            />
          </div>
          <div className="relative z-10 flex w-full flex-col justify-center p-8 md:ml-auto md:w-[60%] md:p-12">
            <span className="mb-4 w-fit -skew-x-12 bg-primary px-4 py-1 text-xs font-black uppercase text-white">
              $ Save More When You
            </span>
            <h1 className="text-3xl font-black text-primary sm:text-5xl md:text-7xl">SHOP IN STORE</h1>
            <div className="mt-8 grid grid-cols-2 gap-4 border-t border-white/20 pt-6 md:grid-cols-4">
              {HERO_FEATURES.map((f) => (
                <div key={f.title}>
                  <div className="text-xs font-black text-white">{f.title}</div>
                  <div className="text-xs text-neutral-400">{f.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="border-b border-neutral-200 bg-white">
          <div className="mx-auto flex max-w-[1440px] flex-wrap items-center gap-x-8 gap-y-2 px-4 py-4 md:px-6">
            {INFO_ITEMS.map((item) => (
              <span key={item.text} className="flex items-center gap-2 text-xs font-semibold text-neutral-700">
                <item.icon className="h-4 w-4 text-primary" />
                {item.text}
              </span>
            ))}
          </div>
        </div>

        <section className="mx-auto grid w-full max-w-[1440px] gap-8 px-4 py-12 md:px-6 md:py-16 lg:grid-cols-[1fr_2fr]">
          <div>
            <h2 className="text-2xl font-black text-surface-low md:text-3xl">
              Visit The Signature Solar Retail Store
            </h2>
            <div className="mt-6 overflow-hidden rounded-lg border border-neutral-200">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80" alt="Retail Store" className="h-48 w-full object-cover" />
              <div className="p-5">
                <div className="font-bold text-surface-low">Retail Store</div>
                <div className="mt-1 text-sm text-neutral-500">Opens: All Weekdays at 9:00 AM</div>
                <div className="text-sm text-neutral-500">Closed: On a Sunday and Public Holidays</div>
                <div className="mt-3 text-sm font-semibold text-surface-low">Nairobi, Kenya</div>
                <div className="text-sm text-neutral-500">retail.store@steadygrid.com</div>
              </div>
            </div>
          </div>
          <iframe
            title="Store map — Nairobi, Kenya"
            src="https://www.google.com/maps?q=Nairobi,+Kenya&output=embed"
            className="min-h-[400px] w-full rounded-lg border border-neutral-200"
            loading="lazy"
          />
        </section>

        <section className="mx-auto w-full max-w-[1440px] px-4 pb-12 md:px-6">
          <h2 className="mb-8 text-center text-2xl font-black text-surface-low md:text-3xl">
            Why Purchase In Store?
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {WHY_BLOCKS.map((b) => (
              <div key={b.title} className="rounded-lg border border-neutral-200 p-6 text-center">
                <h3 className="mb-2 font-bold text-surface-low">{b.title}</h3>
                <p className="text-sm text-neutral-500">{b.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto w-full max-w-[1440px] px-4 pb-12 md:px-6">
          <h2 className="mb-8 text-center text-2xl font-black text-surface-low md:text-3xl">
            Products You&apos;ll Find In Store
          </h2>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-5">
            {STORE_CATEGORIES.map((c) => (
              <Link key={c.name} href="#" className="group rounded-lg border border-neutral-200 p-4 text-center hover:shadow-md">
                <div className="flex h-[220px] items-center justify-center overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={c.image} alt={c.name} className="max-h-full max-w-full object-contain transition-transform group-hover:scale-105" />
                </div>
                <div className="mt-2 text-[13px] font-black uppercase text-surface-low">{c.name}</div>
              </Link>
            ))}
          </div>
        </section>

        <section className="mx-auto w-full max-w-[1440px] px-4 pb-12 md:px-6">
          <div
            className="relative h-[300px] overflow-hidden rounded-2xl bg-neutral-900 md:h-[400px]"
            style={{ backgroundImage: "url(https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1600&q=80)", backgroundSize: "cover", backgroundPosition: "center" }}
          >
            <div className="absolute inset-0 bg-neutral-900/60" />
            <div className="relative z-10 flex h-full flex-col items-start justify-center p-8 md:p-12">
              <span className="mb-3 w-fit -skew-x-12 bg-primary px-4 py-1 text-xs font-black uppercase text-white">
                Save More When You Shop In-Store
              </span>
              <h2 className="max-w-xl text-2xl font-black text-white md:text-4xl">
                Skip Shipping Fees And Take Your Products Home Today
              </h2>
              <div className="mt-4 text-sm font-black tracking-widest text-white/70">STEADYGRID</div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
