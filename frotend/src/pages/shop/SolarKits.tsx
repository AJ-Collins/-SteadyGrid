import { useRef } from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import Pagination from "../../components/common/Pagination";
import SolarKitsProductCard from "../../components/common/SolarKitsProductCard";
import PageHeader from "../../components/common/PageHeader";

interface Product {
    id: number;
    brand: string;
    title: string;
    sku: string;
    description: string;
    oldPrice: number;
    price: number;
    imageUrl: string;
    inStock: boolean;
}

interface ProductGroup {
    heading: string;
    items: Product[];
}

const ProductGroupSection = ({ group }: { group: ProductGroup }) => {
    const scrollRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollRef.current) {
            const { scrollLeft, clientWidth } = scrollRef.current;
            const scrollAmount = clientWidth * 0.7;
            scrollRef.current.scrollTo({
                left: direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
                behavior: 'smooth',
            });
        }
    };

    return (
        <section>
            <div className="flex items-end justify-between mb-5 border-b border-neutral-200 pb-3 gap-4">
                <div className="flex-1 pr-2">
                    <h2 className="text-sm sm:text-lg font-black text-[#0B1525] tracking-tight uppercase flex items-start gap-2">
                        <span className="w-1.5 h-4 sm:h-5 bg-[#22a055] block rounded-sm shrink-0 mt-0.5"></span>
                        <span className="break-words">{group.heading}</span>
                    </h2>
                </div>
                <a
                    href="#"
                    className="shrink-0 whitespace-nowrap flex items-center gap-1 sm:gap-1.5 text-[10px] sm:text-[11px] font-black tracking-widest text-neutral-400 hover:text-[#0B1525] uppercase transition-colors group/link mb-1"
                >
                    <span>VIEW MORE</span>
                    <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 group-hover/link:translate-x-1 transition-transform" />
                </a>
            </div>
            
            <div className="relative group/slider">
                <button
                    onClick={() => scroll('left')}
                    className="flex absolute left-0 lg:-left-4 top-1/2 -translate-y-1/2 z-10 w-[32px] h-[32px] sm:w-[36px] sm:h-[36px] md:w-[42px] md:h-[42px] bg-[#5c5c5c] hover:bg-neutral-700 items-center justify-center text-white cursor-pointer shadow-md rounded-sm transition-all duration-300 opacity-100 md:opacity-0 group-hover/slider:opacity-100"
                    aria-label="Scroll left"
                >
                    <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
                </button>
                
                <div ref={scrollRef} className="flex overflow-x-auto pb-6 gap-4 md:gap-6 snap-x snap-mandatory scroll-smooth" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                    {group.items.map((product, index) => (
                        <div className="snap-start" key={`${group.heading}-${product.id}-${index}`}>
                            <SolarKitsProductCard {...product} />
                        </div>
                    ))}
                </div>

                <button
                    onClick={() => scroll('right')}
                    className="flex absolute right-0 lg:-right-4 top-1/2 -translate-y-1/2 z-10 w-[32px] h-[32px] sm:w-[36px] sm:h-[36px] md:w-[42px] md:h-[42px] bg-[#5c5c5c] hover:bg-neutral-700 items-center justify-center text-white cursor-pointer shadow-md rounded-sm transition-all duration-300 opacity-100 md:opacity-0 group-hover/slider:opacity-100"
                    aria-label="Scroll right"
                >
                    <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
                </button>
            </div>
        </section>
    );
};

export default function SolarKits() {
    // Shared mock items for demonstration
    const anker1 = {
        id: 1, brand: "Anker", title: "Anker | SOLIX BP1000 Expansion Battery 1056Wh LFP", sku: "1638006", description: "Anker SOLIX BP1000 Expansion Battery 1056Wh LFP | For SOLIX C1000 | A1761111-85 Elevate your ener...", oldPrice: 499.00, price: 396.59, imageUrl: "https://cdn11.bigcommerce.com/s-bi8c0htqsn/product_images/attribute_rule_images/896_source_1769616402.png", inStock: true
    };
    const anker2 = {
        id: 2, brand: "Anker", title: "Anker | SOLIX BP2600 Expansion Battery 2048Wh LFP", sku: "1638007", description: "Anker SOLIX BP2600 Expansion Battery 2048Wh LFP | For SOLIX 2600 | A1781111-85 Boost your power capa...", oldPrice: 1399.00, price: 1112.50, imageUrl: "https://cdn11.bigcommerce.com/s-bi8c0htqsn/images/stencil/320w/products/7196/8280/Pytes_Battery_Cabinet_Bundle__82763.1760362640.png?c=1", inStock: true
    };
    const anker3 = {
        id: 3, brand: "Anker", title: "Anker | SOLIX BP3000 Expansion Battery 3072Wh LFP", sku: "1638031", description: "Anker SOLIX BP3000 Expansion Battery | 3072Wh Add-On for F3000 Expand your power capacity with the ...", oldPrice: 1399.00, price: 1112.50, imageUrl: "https://cdn11.bigcommerce.com/s-bi8c0htqsn/images/stencil/320w/products/7196/8280/Pytes_Battery_Cabinet_Bundle__82763.1760362640.png?c=1", inStock: true
    };
    const anker4 = {
        id: 4, brand: "Anker", title: "Anker | SOLIX EverFrost 2 Removeable Battery", sku: "1638028", description: "Anker SOLIX EverFrost 2 Removable Battery | 288Wh LFP Power Module Keep your adventures powered with...", oldPrice: 249.00, price: 197.73, imageUrl: "https://cdn11.bigcommerce.com/s-bi8c0htqsn/images/stencil/320w/products/7196/8280/Pytes_Battery_Cabinet_Bundle__82763.1760362640.png?c=1", inStock: false
    };
    const anker5 = {
        id: 5, brand: "Anker", title: "Anker | SOLIX EverFrost 2 Removeable Battery", sku: "1638028", description: "Anker SOLIX EverFrost 2 Removable Battery | 288Wh LFP Power Module Keep your adventures powered with...", oldPrice: 249.00, price: 197.73, imageUrl: "https://cdn11.bigcommerce.com/s-bi8c0htqsn/images/stencil/320w/products/7196/8280/Pytes_Battery_Cabinet_Bundle__82763.1760362640.png?c=1", inStock: false
    };

    // The data is natively structured by group so the frontend maps it automatically.
    const groupedData: ProductGroup[] = [
        {
            heading: "New Kits & Bundles",
            items: [anker1, anker2, anker3, anker4, anker5]
        },
        {
            heading: "Fan Favorites: Solar Power Bundles",
            items: [anker2, anker3, anker1, anker4, anker5]
        },
        {
            heading: "Energy for the Road Ahead",
            items: [anker4, anker1, anker2, anker3, anker5]
        },
        {
            heading: "Weekend Ready – Solar Projects You Can Tackle with Ease",
            items: [anker3, anker4, anker1, anker2, anker5]
        },
        {
            heading: "Stay Powered Through Anything – Battery Backup Solutions",
            items: [anker1, anker3, anker2, anker4, anker5]
        }
    ];

    return (
        <div className="min-h-screen bg-white font-sans flex flex-col">
            <Navbar />
            <PageHeader
                title="Solar Kits"
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "Solar Kits" },
                ]}
                imageUrl="https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=1600&q=80"
            />
            <main className="flex-1 max-w-[1440px] w-full mx-auto px-4 md:px-6 py-8 md:py-12 flex flex-col gap-12 relative overflow-hidden">
                {groupedData.map((group, index) => (
                    <ProductGroupSection key={index} group={group} />
                ))}
                 {/* Pagination */}
                <div className="pt-4 border-t border-neutral-200">
                    <Pagination currentPage={1} totalPages={3} />
                </div>
            </main>
            <Footer />
        </div>
    )
}