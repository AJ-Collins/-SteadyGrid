import { listProducts, type ProductListItem } from "@/server/catalog/services/list-products";
import { getContentBlock } from "@/server/cms/services/get-content-block";

export interface HeroSlide {
  image: string;
  heading: string;
  description: string;
  cta: string;
  link: string;
}

export interface HomepageData {
  slides: HeroSlide[];
  topSellers: ProductListItem[];
  newArrivals: ProductListItem[];
}

const FALLBACK_SLIDES: HeroSlide[] = [
  {
    image: "https://checkout.bluettipower.com/cdn/shop/files/banner_842db15e-ce09-46a2-ba23-d7c3a558bd2b.jpg?v=1775039932&width=3840",
    heading: "End-to-End Solar, Built Around You",
    description: "We design, plan, and install your system from start to finish—so you get reliable power without the complexity.",
    cta: "START YOUR PROJECT",
    link: "/shop/projects",
  },
  {
    image: "https://checkout.bluettipower.com/cdn/shop/files/banner_842db15e-ce09-46a2-ba23-d7c3a558bd2b.jpg?v=1775039932&width=3840",
    heading: "Power Your Home With Clean Energy",
    description: "From rooftop panels to battery storage, we deliver turnkey solar solutions tailored to your needs.",
    cta: "EXPLORE SOLUTIONS",
    link: "/shop/solar-kits",
  },
];

// Single aggregate for the homepage UI. Reads the CMS hero block when
// published, otherwise falls back to the shipped design content.
export async function getHomepage(): Promise<HomepageData> {
  const [heroBlock, topSellers, newArrivals] = await Promise.all([
    getContentBlock("home:hero").catch(() => null),
    listProducts({ take: 8 }).catch(() => ({ items: [], total: 0 })),
    listProducts({ take: 8 }).catch(() => ({ items: [], total: 0 })),
  ]);

  let slides = FALLBACK_SLIDES;
  const payload = heroBlock?.payload as { slides?: HeroSlide[] } | null;
  if (heroBlock?.published && Array.isArray(payload?.slides) && payload.slides.length > 0) {
    slides = payload.slides;
  }

  return { slides, topSellers: topSellers.items, newArrivals: newArrivals.items };
}
