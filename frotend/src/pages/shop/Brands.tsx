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
                imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThvTFFERhasU5pz-OA50g3aZXeCXw4Z22dp4C4YgZB2A&s=10"
            />
            <main className="flex-1 max-w-[1440px] w-full mx-auto px-4 md:px-6 py-8 md:py-12 flex flex-col gap-8 relative overflow-hidden">

                {/* Mobile Filter Toggle */}
                <div className="lg:hidden w-full flex justify-end">
                    <button
                        className="flex items-center gap-2 border border-gray-300 px-4 py-2 text-sm font-semibold hover:bg-gray-50 transition-colors"
                        onClick={() => setIsMobileFiltersOpen(true)}
                    >
                        <LuFilter className="w-5 h-5" />
                        Filters
                    </button>
                </div>

                {/* Mobile Sidebar Overlay */}
                {isMobileFiltersOpen && (
                    <div className="fixed inset-0 z-50 lg:hidden flex">
                        <div
                            className="fixed inset-0 bg-[#0a101d] bg-opacity-50 transition-opacity"
                            onClick={() => setIsMobileFiltersOpen(false)}
                        ></div>
                        <div className="relative flex-1 flex flex-col max-w-xs w-full bg-white shadow-xl h-full overflow-y-auto animate-slide-in-right">
                            <div className="flex items-center justify-between p-4 border-b border-gray-200">
                                <h2 className="text-lg font-bold text-gray-900">Filters</h2>
                                <button
                                    className="p-2 text-gray-400 hover:text-gray-500"
                                    onClick={() => setIsMobileFiltersOpen(false)}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>
                            <div className="p-4">
                                <ProductFilters />
                            </div>
                        </div>
                    </div>
                )}

                {/* Body: Sidebar + Brand Grid */}
                <div className="flex gap-8">
                    {/* Desktop Sidebar */}
                    <div className="hidden lg:block w-[280px] shrink-0">
                        <ProductFilters />
                    </div>

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