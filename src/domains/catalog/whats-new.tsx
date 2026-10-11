import { ProductSlider } from "@/domains/catalog/product-slider";

const UPDATES = [
  { brand: "CW Energy", title: "CW Energy 595W Pallet of Bifacial Solar Panels | 31 Panels", price: 7378.0, image: "https://cdn.shopify.com/s/files/1/0536/3390/8911/files/Elite_300.png?v=1772965689&width=1125&height=1125&crop=center", inStock: true },
  { brand: "Prism Solar Technologies", title: "Prism Solar 445W Pallet of Bifacial Solar Panels | 31 Panels", price: 3448.75, image: "https://s4.bluettipower.com/bluetti/navigation/2026/04/AC200PL@3x-1775557902518-57e6.png", inStock: true },
  { brand: "SunPro Power", title: "SunPro 440W Pallet of Bifacial Solar Panels | 36 Panels", price: 6019.2, image: "https://s4.bluettipower.com/bluetti/navigation/2026/04/AC200PL@3x-1775557902518-57e6.png", inStock: true },
  { brand: "SolaTrim", title: 'SolaTrim | SolEmber and Pest Abatement Barrier - 5.5" | 100 ft (25 Panels)', price: 358.5, image: "https://cdn11.bigcommerce.com/s-bi8c0htqsn/images/stencil/original/image-manager/-charge-controllers-2-2026-1-.png?t=1772137272", inStock: true },
  { brand: "EG4 Electronics", title: "EG4 WallMount PowerPro | 48V 280AH | 14.3kWh", price: 3899.0, image: "https://cdn11.bigcommerce.com/s-bi8c0htqsn/images/stencil/original/image-manager/wiring-1.png?t=1734106631", inStock: true },
];

export function WhatsNew() {
  return (
    <ProductSlider
      title="What's New on SteadyGrid"
      subtitle="Latest products, updates, and resources"
      viewMoreHref="/shop/products/new-arrivals"
      products={UPDATES}
    />
  );
}
