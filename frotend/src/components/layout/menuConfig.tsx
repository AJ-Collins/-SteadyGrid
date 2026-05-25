import { Zap, Battery, Sun, Wind, Cable, ArrowRight } from "lucide-react";
import type { MegaMenuConfig } from "./MegaMenu";

export const homeMenu: MegaMenuConfig = {
  sections: [
    {
      title: "Pages",
      items: [
        { label: "Home – Solar",         icon: <Sun size={15} /> },
        { label: "Home – Energy Store",  icon: <Zap size={15} /> },
        { label: "Home – Off-Grid",      icon: <Wind size={15} />, isNew: true },
      ],
    },
    {
      title: "Info",
      items: [
        { label: "About Us", icon: <ArrowRight size={13} /> },
        { label: "Blog",     icon: <ArrowRight size={13} /> },
        { label: "FAQs",     icon: <ArrowRight size={13} /> },
      ],
    },
  ],
  featured: {
    tag:           "New Arrival",
    name:          "SteadyGrid Home Kit",
    price:         "$1,299.00",
    originalPrice: "$1,599.00",
    rating:        4.8,
    reviews:       42,
    image:         "🏠",
    badge:         "Best Seller",
  },
  bottomPromo: "Save 10% on your first solar installation with code ENERGY10",
};

export const productsMenu: MegaMenuConfig = {
  sections: [
    {
      title: "Solar",
      items: [
        { label: "Solar Panels",       icon: <Sun size={15} /> },
        { label: "Solar Kits",         icon: <Zap size={15} /> },
        { label: "Charge Controllers", icon: <Cable size={15} /> },
      ],
    },
    {
      title: "Storage & Power",
      items: [
        { label: "Lithium Batteries", icon: <Battery size={15} />, isNew: true },
        { label: "Inverters",         icon: <Zap size={15} /> },
        { label: "Power Stations",    icon: <Wind size={15} /> },
      ],
    },
  ],
  featured: {
    tag:           "Top Rated",
    name:          "LiFePO4 100Ah Battery",
    price:         "$349.00",
    originalPrice: "$429.00",
    rating:        4.9,
    reviews:       128,
    image:         "🔋",
    badge:         "20% OFF",
  },
  bottomPromo: "Free standard shipping on all orders over $500",
};