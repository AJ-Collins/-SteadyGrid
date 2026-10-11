import { PrismaClient } from "@prisma/client";
import { hashPassword } from "../src/server/auth/services/hash-password";

const prisma = new PrismaClient();

const brands = [
  { slug: "anker", name: "Anker", logoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxb4rT-M6odk32jV8Q-YwS90dUj9iTEnB2ywWebGUtAA&s=10" },
  { slug: "bluetti", name: "BLUETTI", logoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0G42ewHJpwl4tGSTw5h6cFPMiqndhwYBbjzpiOmXMzw&s=10" },
  { slug: "eg4", name: "EG4 Electronics", logoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJRmiBQvrXDa1LCrmpEMyU-WUayLibR0A5FYfPhT2VPg&s=10" },
  { slug: "victron", name: "Victron Energy", logoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbh9A3RUni5J_oUfTiRYedBlJU3sJshiFk5cofrXKCLg&s=10" },
  { slug: "growatt", name: "Growatt", logoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJRmiBQvrXDa1LCrmpEMyU-WUayLibR0A5FYfPhT2VPg&s=10" },
  { slug: "canadian-solar", name: "Canadian Solar", logoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxb4rT-M6odk32jV8Q-YwS90dUj9iTEnB2ywWebGUtAA&s=10" },
  { slug: "ecoflow", name: "EcoFlow", logoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0G42ewHJpwl4tGSTw5h6cFPMiqndhwYBbjzpiOmXMzw&s=10" },
  { slug: "deye", name: "Deye", logoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbh9A3RUni5J_oUfTiRYedBlJU3sJshiFk5cofrXKCLg&s=10" },
];

const categories = [
  { slug: "batteries", name: "Batteries", kind: "catalog" },
  { slug: "inverters", name: "Inverters", kind: "catalog" },
  { slug: "solar-panels", name: "Solar Panels", kind: "catalog" },
  { slug: "solar-kits", name: "Solar Kits", kind: "catalog" },
  { slug: "new-arrivals", name: "New Arrivals", kind: "catalog" },
  { slug: "top-sellers", name: "Top Sellers", kind: "catalog" },
  { slug: "kits-bundles", name: "Kits & Bundles", kind: "catalog" },
  { slug: "portable-power-stations", name: "Portable Power Stations", kind: "catalog" },
  { slug: "battery-accessories", name: "Battery Accessories", kind: "catalog" },
  { slug: "mobile-rv", name: "Mobile RV", kind: "catalog" },
  { slug: "wiring", name: "Wiring", kind: "catalog" },
  { slug: "ev-chargers", name: "EV Chargers", kind: "catalog" },
  { slug: "solar-panel-cleaning", name: "Solar Panel Cleaning", kind: "catalog" },
  { slug: "mounting-options", name: "Mounting Options", kind: "catalog" },
  { slug: "system-components", name: "System Components", kind: "catalog" },
  { slug: "high-efficiency-appliances", name: "High Efficiency Appliances", kind: "catalog" },
  { slug: "charge-controllers", name: "Charge Controllers", kind: "catalog" },
  { slug: "rapid-shutdown-equipment", name: "Rapid Shutdown Equipment", kind: "catalog" },
  { slug: "camping-outdoors", name: "Camping & Outdoors", kind: "project" },
  { slug: "ev-charging", name: "EV Charging", kind: "project" },
  { slug: "homesteading", name: "Homesteading", kind: "project" },
  { slug: "marine-boating", name: "Marine And Boating", kind: "project" },
  { slug: "mobile-adventure", name: "Mobile Adventures", kind: "project" },
  { slug: "mounting-solutions", name: "Mounting Solutions", kind: "project" },
  { slug: "survival-preparedness", name: "Survival Preparedness", kind: "project" },
  { slug: "battery-backup", name: "Battery Backup", kind: "project" },
];

interface SeedProduct {
  sku: string;
  slug: string;
  title: string;
  description: string;
  price: number;
  oldPrice?: number;
  imageUrl: string | null;
  inStock: boolean;
  topSeller?: boolean;
  isNew?: boolean;
  featured?: boolean;
  brand: string;
  category: string;
}

const RACK = "https://cdn11.bigcommerce.com/s-bi8c0htqsn/images/stencil/320w/products/2218/5246/Rack_V2.1_1600__57614.1738959899.jpg?c=1";
const PYTES = "https://cdn11.bigcommerce.com/s-bi8c0htqsn/images/stencil/320w/products/7196/8280/Pytes_Battery_Cabinet_Bundle__82763.1760362640.png?c=1";

const products: SeedProduct[] = [
  { sku: "1638006", slug: "anker-solix-bp1000", title: "Anker | SOLIX BP1000 Expansion Battery 1056Wh LFP | For SOLIX C1000 | A1761B", description: "Anker SOLIX BP1000 Expansion Battery 1056Wh LFP | For SOLIX C1000 | A1761111-85 Elevate your energy storage.", oldPrice: 499.0, price: 396.59, imageUrl: RACK, inStock: true, topSeller: true, brand: "anker", category: "batteries" },
  { sku: "1638007", slug: "anker-solix-bp2600", title: "Anker | SOLIX BP2600 Expansion Battery 2048Wh LFP | For SOLIX 2600 | A1781111-85", description: "Anker SOLIX BP2600 Expansion Battery 2048Wh LFP | For SOLIX 2600 | Boost your power capacity.", oldPrice: 1399.0, price: 1112.5, imageUrl: PYTES, inStock: true, topSeller: true, brand: "anker", category: "batteries" },
  { sku: "1638031", slug: "anker-solix-bp3000", title: "Anker | SOLIX BP3000 Expansion Battery 3072Wh LFP | For SOLIX F3000", description: "Anker SOLIX BP3000 Expansion Battery | 3072Wh Add-On for F3000. Expand your power capacity.", oldPrice: 1399.0, price: 1112.5, imageUrl: PYTES, inStock: true, brand: "anker", category: "batteries" },
  { sku: "1638028", slug: "anker-everfrost-2-battery", title: "Anker | SOLIX EverFrost 2 Removable Battery For 40L & 58L", description: "Anker SOLIX EverFrost 2 Removable Battery | 288Wh LFP Power Module. Keep your adventures powered.", oldPrice: 249.0, price: 197.73, imageUrl: PYTES, inStock: false, brand: "anker", category: "batteries" },
  { sku: "BLU-EP500", slug: "bluetti-ep500", title: "BLUETTI EP500 5100Wh Home Battery Backup", description: "All-in-one 5100Wh home battery backup station.", oldPrice: 4299.0, price: 3299.0, imageUrl: null, inStock: true, featured: true, topSeller: true, brand: "bluetti", category: "batteries" },
  { sku: "EG4-LL-100", slug: "eg4-ll-100ah", title: "EG4-LL Lithium Battery | 48V 100AH | Server Rack", description: "Server-rack 48V 100AH lithium battery for home backup.", oldPrice: 1699.0, price: 1399.0, imageUrl: PYTES, inStock: true, topSeller: true, brand: "eg4", category: "batteries" },
  { sku: "EG4-3KW", slug: "eg4-3kw-offgrid", title: "EG4 3kW Off-Grid Inverter | 3000EHV-48", description: "3kW off-grid inverter for cabins and backup.", price: 679.0, imageUrl: RACK, inStock: true, topSeller: true, brand: "eg4", category: "inverters" },
  { sku: "EG4-18KPV", slug: "eg4-18kpv-hybrid", title: "EG4 18KPV Hybrid Inverter | 18000W PV", description: "Whole-home hybrid inverter with 18000W PV input.", price: 5249.0, imageUrl: RACK, inStock: true, topSeller: true, brand: "eg4", category: "inverters" },
  { sku: "CS-440W", slug: "canadian-solar-440w", title: "Canadian Solar 440W Mono Panel (Bi-Facial)", description: "High-efficiency bifacial 440W solar panel.", oldPrice: 249.0, price: 189.0, imageUrl: null, inStock: true, topSeller: true, brand: "canadian-solar", category: "solar-panels" },
  { sku: "EG4-PP-14", slug: "eg4-wallmount-powerpro", title: "EG4 WallMount PowerPro | 48V 280AH | 14.3kWh", description: "Wall-mount 14.3kWh home battery.", oldPrice: 4499.0, price: 3899.0, imageUrl: PYTES, inStock: true, topSeller: true, brand: "eg4", category: "battery-backup" },
  { sku: "EG4-EV-48", slug: "eg4-chargeverge-ev", title: "EG4 ChargeVerge EV Charger | Level 2 | 48A", description: "Level 2 48A EV charger for home charging.", price: 549.0, imageUrl: null, inStock: true, brand: "eg4", category: "ev-chargers" },
  { sku: "ANKER-C1000", slug: "anker-solix-c1000-kit", title: "Anker SOLIX C1000 + 200W Panel Solar Kit", description: "Complete portable solar kit for camping and backup.", oldPrice: 1299.0, price: 999.0, imageUrl: RACK, inStock: true, isNew: true, brand: "anker", category: "solar-kits" },
  { sku: "ANKER-NEW-1", slug: "anker-solix-f3000-new", title: "Anker SOLIX F3000 Portable Power Station | New Arrival", description: "Latest high-capacity portable power station.", price: 1999.0, imageUrl: PYTES, inStock: true, isNew: true, brand: "anker", category: "new-arrivals" },
  { sku: "VIC-100-50", slug: "victron-charge-controller", title: "Victron SmartSolar Charge Controller 100/50", description: "MPPT charge controller with Bluetooth monitoring.", price: 289.0, imageUrl: null, inStock: true, brand: "victron", category: "charge-controllers" },
  { sku: "ANKER-CAMP-1", slug: "anker-camping-bundle", title: "Anker SOLIX C1000 Camping Bundle | Portable Power", description: "Camping-ready power bundle for the outdoors.", price: 899.0, imageUrl: RACK, inStock: true, brand: "anker", category: "camping-outdoors" },
  { sku: "EG4-HOME-1", slug: "eg4-homestead-bundle", title: "EG4 Homestead Power Bundle | 14.3kWh + 18KPV", description: "Complete homestead energy independence bundle.", oldPrice: 9499.0, price: 8499.0, imageUrl: PYTES, inStock: true, brand: "eg4", category: "homesteading" },
];

async function main(): Promise<void> {
  for (const b of brands) {
    await prisma.brand.upsert({
      where: { slug: b.slug },
      update: { name: b.name, logoUrl: b.logoUrl },
      create: b,
    });
  }
  for (const c of categories) {
    await prisma.category.upsert({ where: { slug: c.slug }, update: {}, create: c });
  }
  for (const p of products) {
    await prisma.product.upsert({
      where: { sku: p.sku },
      update: {},
      create: {
        sku: p.sku,
        slug: p.slug,
        title: p.title,
        description: p.description,
        price: p.price,
        oldPrice: p.oldPrice ?? null,
        imageUrl: p.imageUrl,
        inStock: p.inStock,
        topSeller: p.topSeller ?? false,
        isNew: p.isNew ?? false,
        featured: p.featured ?? false,
        brand: { connect: { slug: p.brand } },
        category: { connect: { slug: p.category } },
      },
    });
  }

  await prisma.user.upsert({
    where: { email: "admin@steadygrid.local" },
    update: {},
    create: {
      email: "admin@steadygrid.local",
      name: "Site Admin",
      password: await hashPassword("Admin123!"),
      role: "ADMIN",
    },
  });

  await prisma.contentBlock.upsert({
    where: { key: "home:hero" },
    update: {},
    create: {
      key: "home:hero",
      title: "Homepage hero",
      payload: {
        slides: [
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
        ],
      },
      published: true,
    },
  });

  console.log("Seed complete");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => {
    void prisma.$disconnect();
  });
