import type { ProductGroup } from "@/domains/catalog/product-group-section";

const ANKER = [
  { brand: "Anker", title: "Anker SOLIX BP1000 Expansion Battery 1056Wh LFP", sku: "1638006", description: "1056Wh LFP expansion battery for SOLIX C1000.", oldPrice: 499.0, price: 396.59, imageUrl: "https://cdn11.bigcommerce.com/s-bi8c0htqsn/images/stencil/320w/products/2218/5246/Rack_V2.1_1600__57614.1738959899.jpg?c=1", inStock: true },
  { brand: "Anker", title: "Anker SOLIX BP2600 Expansion Battery 2048Wh LFP", sku: "1638007", description: "2048Wh LFP expansion battery for SOLIX 2600.", oldPrice: 1399.0, price: 1112.5, imageUrl: "https://cdn11.bigcommerce.com/s-bi8c0htqsn/images/stencil/320w/products/7196/8280/Pytes_Battery_Cabinet_Bundle__82763.1760362640.png?c=1", inStock: true },
  { brand: "Anker", title: "Anker SOLIX BP3000 Expansion Battery 3072Wh LFP", sku: "1638031", description: "3072Wh add-on battery for the F3000.", oldPrice: 1399.0, price: 1112.5, imageUrl: "https://cdn11.bigcommerce.com/s-bi8c0htqsn/images/stencil/320w/products/7196/8280/Pytes_Battery_Cabinet_Bundle__82763.1760362640.png?c=1", inStock: true },
  { brand: "Anker", title: "Anker SOLIX EverFrost 2 Removable Battery 288Wh", sku: "1638028", description: "288Wh LFP power module for EverFrost 2 coolers.", oldPrice: 249.0, price: 197.73, imageUrl: "https://cdn11.bigcommerce.com/s-bi8c0htqsn/images/stencil/320w/products/7196/8280/Pytes_Battery_Cabinet_Bundle__82763.1760362640.png?c=1", inStock: false },
  { brand: "Anker", title: "Anker SOLIX C1000 Portable Power Station", sku: "1638009", description: "1056Wh portable power for home and outdoors.", oldPrice: 999.0, price: 799.0, imageUrl: "https://cdn11.bigcommerce.com/s-bi8c0htqsn/images/stencil/320w/products/2218/5246/Rack_V2.1_1600__57614.1738959899.jpg?c=1", inStock: true },
];

function group(heading: string): ProductGroup {
  return { heading, link: "#", products: ANKER };
}

// Curated carousel groups for the Solar Kits and New Arrivals pages,
// matching the legacy grouped layout.
export const KIT_GROUPS: ProductGroup[] = [
  group("New Kits & Bundles"),
  group("Fan Favorites: Solar Power Bundles"),
  group("Energy for the Road Ahead"),
  group("Weekend Ready – Solar Projects You Can Tackle with Ease"),
  group("Stay Powered Through Anything – Battery Backup Solutions"),
];

export const NEW_ARRIVAL_GROUPS: ProductGroup[] = [
  group("New Kits & Bundles"),
  group("Fan Favorites: Solar Power Bundles"),
  group("Energy for the Road Ahead"),
  group("Weekend Ready – Solar Projects You Can Tackle with Ease"),
  group("Power Your Adventures: Solar Kits for Every Journey"),
];
