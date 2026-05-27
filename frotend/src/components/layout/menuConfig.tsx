import { Zap, Battery, Sun, Wind, Cable, ArrowRight } from "lucide-react";
import type { MegaMenuConfig } from "./MegaMenu";
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
  bottomPromo: "Free standard shipping on all orders over $500",
};