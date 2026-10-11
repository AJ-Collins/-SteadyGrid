"use client";

import { useState } from "react";
import { ArrowRight, Calendar, Clock, Mail } from "lucide-react";
import { cn } from "@/shared/lib/utils";

const CATEGORIES = ["All posts", "Product updates", "Off-grid living", "Solar tips", "Company news"];

interface Post {
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  featured?: boolean;
}

const POSTS: Post[] = [
  { title: "Inside the DELTA Pro Ultra: month-long power security for your home", excerpt: "With up to 30kWh of expandable capacity and 6900W output, DELTA Pro Ultra is built to cover every appliance during extended outages.", category: "Product updates", date: "Jul 14, 2026", readTime: "6 min read", image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1200&q=80", featured: true },
  { title: "How much solar panel do you actually need? A practical sizing guide", excerpt: "From the 45W portable panel to the 400W rigid panel, here is how to match panel wattage to your power station and daily needs.", category: "Solar tips", date: "Jul 8, 2026", readTime: "5 min read", image: "https://images.unsplash.com/photo-1497440001374-f26997328c1b?auto=format&fit=crop&w=800&q=80" },
  { title: "5 ways to keep your home running during a grid outage", excerpt: "Pairing a RIVER 3 series power station with fast UPS switchover keeps routers, fridges, and medical devices online automatically.", category: "Off-grid living", date: "Jun 30, 2026", readTime: "4 min read", image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&w=800&q=80" },
  { title: "SteadyGrid crosses 5 million users across 150 regions", excerpt: "A look back at how SteadyGrid grew from a 2017 startup into a trusted energy company with headquarters in the USA, Germany, and Japan.", category: "Company news", date: "Jun 22, 2026", readTime: "3 min read", image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=800&q=80" },
  { title: "GLACIER Classic: keeping food cold from -20°C to 20°C, anywhere", excerpt: "A dual-zone compressor cooler with a built-in battery means your food and drinks stay cold long after you leave the wall socket behind.", category: "Product updates", date: "Jun 15, 2026", readTime: "4 min read", image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80" },
  { title: "Charging on the road: getting the most from your 800W alternator charger", excerpt: "Top up 1kWh in just 1.3 hours while you drive. Here is how the 3-in-1 charger, maintainer, and booster keeps your battery in mint condition.", category: "Off-grid living", date: "Jun 4, 2026", readTime: "5 min read", image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=800&q=80" },
  { title: "Dual fuel, quiet power: what makes Smart Generator 3000/4000 different", excerpt: "Real-time CO, temperature, and fuel alerts, paired with app control, make backup generators safer and easier to live with.", category: "Product updates", date: "May 27, 2026", readTime: "5 min read", image: "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?auto=format&fit=crop&w=800&q=80" },
];

function Meta({ post }: { post: Post }) {
  return (
    <div className="flex items-center gap-4 text-xs text-gray-400">
      <span className="flex items-center gap-1"><Calendar className="h-3.5 w-3.5" />{post.date}</span>
      <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" />{post.readTime}</span>
    </div>
  );
}

export function OurBlog() {
  const [category, setCategory] = useState(CATEGORIES[0]!);
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const filtered = category === "All posts" ? POSTS : POSTS.filter((p) => p.category === category);
  const featured = category === "All posts" ? POSTS.find((p) => p.featured) : undefined;
  const rest = featured ? filtered.filter((p) => p.title !== featured.title) : filtered;

  return (
    <div className="flex flex-col gap-8">
      <div className="max-w-3xl">
        <p className="text-xs font-bold uppercase tracking-widest text-gray-500">Stories & guides</p>
        <h1 className="mt-2 text-3xl font-black tracking-tight text-surface-low md:text-4xl">Power, explained.</h1>
        <p className="mt-3 text-sm leading-relaxed text-gray-600">
          Product deep dives, solar sizing guides, and stories from the SteadyGrid team — everything you
          need to get the most out of your power system.
        </p>
      </div>

      <div className="flex flex-wrap gap-2">
        {CATEGORIES.map((c) => (
          <button
            key={c}
            type="button"
            onClick={() => setCategory(c)}
            className={cn(
              "rounded-md border px-4 py-2 text-xs font-bold uppercase tracking-widest",
              c === category
                ? "border-surface-low bg-surface-low text-white"
                : "border-gray-200 bg-white text-gray-600 hover:border-surface-low hover:text-surface-low",
            )}
          >
            {c}
          </button>
        ))}
      </div>

      {featured && (
        <article className="flex flex-col overflow-hidden rounded-md border border-gray-200 lg:flex-row">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={featured.image} alt={featured.title} className="h-64 w-full object-cover lg:h-auto lg:w-1/2" />
          <div className="flex flex-col justify-center gap-4 p-6 md:p-10 lg:w-1/2">
            <span className="text-xs text-gray-400">Featured</span>
            <h2 className="text-xl font-black text-surface-low md:text-2xl">{featured.title}</h2>
            <p className="text-sm text-gray-500">{featured.excerpt}</p>
            <Meta post={featured} />
            <span className="flex items-center gap-2 text-sm font-bold text-surface-low">
              Read article <ArrowRight className="h-4 w-4" />
            </span>
          </div>
        </article>
      )}

      {rest.length === 0 ? (
        <div className="border border-gray-200 bg-gray-50 p-10 text-center text-sm text-gray-500">
          No posts in this category yet — check back soon.
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((p) => (
            <article key={p.title} className="group flex flex-col overflow-hidden rounded-md border border-gray-200 hover:border-surface-low">
              <div className="h-44 overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={p.image} alt={p.title} className="h-full w-full object-cover transition-transform group-hover:scale-105" />
              </div>
              <div className="flex flex-1 flex-col gap-3 p-5">
                <span className="w-fit rounded-md bg-gray-100 px-2.5 py-1 text-[11px] font-bold uppercase tracking-widest text-surface-low">
                  {p.category}
                </span>
                <h3 className="text-sm font-bold text-surface-low group-hover:underline md:text-base">{p.title}</h3>
                <p className="flex-1 text-xs text-gray-500">{p.excerpt}</p>
                <Meta post={p} />
              </div>
            </article>
          ))}
        </div>
      )}

      <div className="flex flex-col gap-4 rounded-md border border-gray-200 bg-gray-50 px-6 py-8 md:flex-row md:items-center md:justify-between md:px-10 md:py-10">
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-gray-500">Stay in the loop</p>
          <h2 className="mt-2 text-xl font-black text-surface-low">Get new posts in your inbox.</h2>
        </div>
        {subscribed ? (
          <p className="text-sm font-bold text-surface-low">You&apos;re subscribed — welcome aboard.</p>
        ) : (
          <form
          className="flex w-full flex-col gap-3 sm:flex-row md:w-auto"
          onSubmit={(e) => { e.preventDefault(); if (email) setSubscribed(true); }}
        >
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@company.com"
            className="w-full rounded-md border border-gray-200 px-4 py-3 text-sm sm:w-64"
          />
          <button type="submit" className="flex items-center justify-center gap-2 rounded-md bg-surface-low px-6 py-3 text-xs font-bold text-white hover:bg-[#1a2d4a]">
            <Mail className="h-4 w-4" /> Subscribe
          </button>
        </form>
        )}
      </div>
    </div>
  );
}
