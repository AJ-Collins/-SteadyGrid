import { useState } from 'react';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';
import { LuFilter } from "react-icons/lu";
import { ProductFilters, ProductSort } from "../../features/shop/ProductFilters";
import Pagination from "../../components/common/Pagination";
import BrandCard from "../../components/common/BrandCard";
import PageHeader from '../../components/common/PageHeader';

export default function Brands() {
    const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);

    const brands = [
        { id: 1, name: "BLUETTI", logoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxb4rT-M6odk32jV8Q-YwS90dUj9iTEnB2ywWebGUtAA&s=10", href: "/shop/brands/bluetti" },
        { id: 2, name: "BLUETTI", logoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0G42ewHJpwl4tGSTw5h6cFPMiqndhwYBbjzpiOmXMzw&s=10", href: "/shop/brands/bluetti" },
        { id: 3, name: "BLUETTI", logoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJRmiBQvrXDa1LCrmpEMyU-WUayLibR0A5FYfPhT2VPg&s=10", href: "/shop/brands/bluetti" },
        { id: 4, name: "BLUETTI", logoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbh9A3RUni5J_oUfTiRYedBlJU3sJshiFk5cofrXKCLg&s=10", href: "/shop/brands/bluetti" },
    ];

    return (
        <div className="min-h-screen bg-white font-sans flex flex-col">
            <Navbar />
            <PageHeader
                title="Brands"
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "All Brands" },
                ]}
                imageUrl="https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=1600&q=80"
            />
            <main className="flex-1 max-w-[1440px] w-full mx-auto px-4 md:px-6 py-8 md:py-12 flex flex-col gap-8 relative overflow-hidden">
                {/* Body: Sidebar + Brand Grid */}
                <div className="flex gap-8">
                    {/* Brand Grid */}
                    <div className="flex-1 flex flex-col gap-6">
                        <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
                            {brands.map((brand) => (
                                <BrandCard key={brand.id} {...brand} />
                            ))}
                        </div>
                    </div>
                </div>
                <div className="pt-4 border-t border-neutral-200">
                    <Pagination currentPage={1} totalPages={3} />
                </div>
            </main>
            <Footer />
        </div>
    )
}