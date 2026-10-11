export type ShopLayout = "filters" | "groups";

export interface ShopCategoryEntry {
  title: string;
  breadcrumbs: Array<{ label: string; href?: string }>;
  description?: string;
  banner?: boolean;
  layout: ShopLayout;
  categorySlug: string;
}

const HOME = { label: "Home", href: "/" };

// Every legacy shop URL mapped to one of two layouts. Unknown slugs 404.
export const SHOP_CATEGORIES: Record<string, ShopCategoryEntry> = {
  batteries: {
    title: "Batteries",
    breadcrumbs: [HOME, { label: "Batteries" }],
    banner: true,
    layout: "filters",
    categorySlug: "batteries",
  },
  inverters: {
    title: "Inverters",
    breadcrumbs: [HOME, { label: "Inverters" }],
    banner: true,
    layout: "filters",
    categorySlug: "inverters",
  },
  "solar-panels": {
    title: "Solar Panels",
    breadcrumbs: [HOME, { label: "Solar Panels" }],
    banner: true,
    layout: "filters",
    categorySlug: "solar-panels",
  },
  "solar-kits": {
    title: "Solar Kits",
    breadcrumbs: [HOME, { label: "Solar Kits" }],
    layout: "groups",
    categorySlug: "solar-kits",
  },
  "products/new-arrivals": {
    title: "New Arrivals",
    breadcrumbs: [HOME, { label: "New Arrivals" }],
    layout: "groups",
    categorySlug: "new-arrivals",
  },
  "products/top-sellers": {
    title: "Top Seller Products",
    breadcrumbs: [HOME, { label: "Top Sellers" }],
    layout: "filters",
    categorySlug: "top-sellers",
  },
  "products/kits-bundles": {
    title: "Kits & Bundles",
    breadcrumbs: [HOME, { label: "Kits & Bundles" }],
    layout: "filters",
    categorySlug: "kits-bundles",
  },
  "products/portable-power-stations": {
    title: "Portable Power Stations",
    breadcrumbs: [HOME, { label: "Portable Power Stations" }],
    layout: "filters",
    categorySlug: "portable-power-stations",
  },
  "products/battery-accessories": {
    title: "Battery Accessories",
    breadcrumbs: [HOME, { label: "Battery Accessories" }],
    layout: "filters",
    categorySlug: "battery-accessories",
  },
  "products/mobile-rv": {
    title: "Mobile RV",
    breadcrumbs: [HOME, { label: "Mobile RV" }],
    layout: "filters",
    categorySlug: "mobile-rv",
  },
  "products/wiring": {
    title: "Wiring",
    breadcrumbs: [HOME, { label: "Wiring" }],
    layout: "filters",
    categorySlug: "wiring",
  },
  "products/ev-chargers": {
    title: "EV Chargers",
    breadcrumbs: [HOME, { label: "EV Chargers" }],
    layout: "filters",
    categorySlug: "ev-chargers",
  },
  "products/solar-panel-cleaning": {
    title: "Solar Panel Cleaning",
    breadcrumbs: [HOME, { label: "Solar Panel Cleaning" }],
    layout: "filters",
    categorySlug: "solar-panel-cleaning",
  },
  "products/mounting-options": {
    title: "Mounting Options",
    breadcrumbs: [HOME, { label: "Mounting Options" }],
    layout: "filters",
    categorySlug: "mounting-options",
  },
  "products/system-components": {
    title: "System Components",
    breadcrumbs: [HOME, { label: "System Components" }],
    layout: "filters",
    categorySlug: "system-components",
  },
  "products/high-efficiency-appliances": {
    title: "High Efficiency Appliances",
    breadcrumbs: [HOME, { label: "High Efficiency Appliances" }],
    layout: "filters",
    categorySlug: "high-efficiency-appliances",
  },
  "products/charge-controllers": {
    title: "Charge Controllers",
    breadcrumbs: [HOME, { label: "Charge Controllers" }],
    layout: "filters",
    categorySlug: "charge-controllers",
  },
  "products/rapid-shutdown-equipment": {
    title: "Rapid Shutdown Equipment",
    breadcrumbs: [HOME, { label: "Rapid Shutdown Equipment" }],
    layout: "filters",
    categorySlug: "rapid-shutdown-equipment",
  },
  "projects/camping-outdoors": {
    title: "Camping & Outdoors",
    breadcrumbs: [HOME, { label: "Shop By Project" }, { label: "Camping & Outdoors" }],
    description:
      "Discover our range of camping and outdoor products designed to enhance your outdoor adventures. From portable power solutions to high-efficiency appliances, we have everything you need for a comfortable and enjoyable experience in the great outdoors.",
    layout: "filters",
    categorySlug: "camping-outdoors",
  },
  "projects/ev-charging": {
    title: "EV Charging",
    breadcrumbs: [HOME, { label: "Shop By Project" }, { label: "EV Charging" }],
    layout: "filters",
    categorySlug: "ev-charging",
  },
  "projects/homesteading": {
    title: "Homesteading",
    breadcrumbs: [HOME, { label: "Shop By Project" }, { label: "Homesteading" }],
    description:
      "Discover our range of homesteading solutions designed to enhance your self-sufficient lifestyle. From solar power systems to battery storage units, we have everything you need for a sustainable and efficient homesteading experience.",
    layout: "filters",
    categorySlug: "homesteading",
  },
  "projects/marine-boating": {
    title: "Marine And Boating",
    breadcrumbs: [HOME, { label: "Shop By Project" }, { label: "Marine And Boating" }],
    layout: "filters",
    categorySlug: "marine-boating",
  },
  "projects/mobile-adventure": {
    title: "Mobile Adventures",
    breadcrumbs: [HOME, { label: "Shop By Project" }, { label: "Mobile Adventures" }],
    layout: "filters",
    categorySlug: "mobile-adventure",
  },
  "projects/mounting-solutions": {
    title: "Mounting Solutions",
    breadcrumbs: [HOME, { label: "Shop By Project" }, { label: "Mounting Solutions" }],
    layout: "filters",
    categorySlug: "mounting-solutions",
  },
  "projects/survival-preparedness": {
    title: "Survival Preparedness",
    breadcrumbs: [HOME, { label: "Shop By Project" }, { label: "Survival Preparedness" }],
    layout: "filters",
    categorySlug: "survival-preparedness",
  },
  "projects/battery-backup": {
    title: "Battery Backup",
    breadcrumbs: [HOME, { label: "Shop By Project" }, { label: "Battery Backup" }],
    layout: "filters",
    categorySlug: "battery-backup",
  },
};
