import { ProductSlider } from "@/domains/catalog/product-slider";

const TOP_SELLERS = [
  { brand: "Batteries", title: "EG4-LL Lithium Battery | 48V 100AH | Server Rack", price: 1399.0, wasPrice: 1699.0, image: "https://cdn11.bigcommerce.com/s-bi8c0htqsn/images/stencil/320w/products/7196/8280/SunPro_440W_Bifacial_Solar_Panel_1__86744.1779113652.png", inStock: true },
  { brand: "Inverters", title: "EG4 3kW Off-Grid Inverter | 3000EHV-48", price: 679.0, image: "https://cdn11.bigcommerce.com/s-bi8c0htqsn/images/stencil/320w/products/7196/8280/12000xp_Front__34872__75143.1779289053.jpg", inStock: true },
  { brand: "Batteries", title: "EG4 WallMount PowerPro | 48V 280AH | 14.3kWh", price: 3899.0, wasPrice: 4499.0, image: "https://cdn11.bigcommerce.com/s-bi8c0htqsn/images/stencil/original/image-manager/wiring-1.png?t=1734106631", inStock: true },
  { brand: "Inverters", title: "EG4 18KPV Hybrid Inverter | 18000W PV", price: 5249.0, image: "https://cdn11.bigcommerce.com/s-bi8c0htqsn/images/stencil/original/image-manager/-charge-controllers-2-2026-1-.png?t=1772137272", inStock: true },
  { brand: "Solar Panels", title: "Canadian Solar 440W Mono Panel (Bi-Facial)", price: 189.0, wasPrice: 249.0, image: "https://cdn11.bigcommerce.com/s-bi8c0htqsn/images/stencil/original/image-manager/kits-and-bundles-7-2025.png?t=1752691446", inStock: true },
  { brand: "EV Chargers", title: "EG4 ChargeVerge EV Charger | Level 2 | 48A", price: 549.0, image: "https://cdn11.bigcommerce.com/s-bi8c0htqsn/images/stencil/original/image-manager/kits-and-bundles-7-2025.png?t=1752691446", inStock: true },
];

export function TopSellers() {
  return (
    <ProductSlider
      title="Top Sellers Right Now"
      subtitle="Our most popular products, in stock and ready to ship"
      viewMoreHref="/shop/products/top-sellers"
      products={TOP_SELLERS}
    />
  );
}
