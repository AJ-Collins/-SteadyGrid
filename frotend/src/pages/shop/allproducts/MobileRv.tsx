import { useState } from 'react';
import { LuFilter } from "react-icons/lu";
import Navbar from "../../../components/layout/Navbar";
import Footer from "../../../components/layout/Footer";
import { ProductFilters, ProductSort } from "../../../features/shop/ProductFilters";
import ProductCard from "../../../components/common/ProductCard";
import Pagination from "../../../components/common/Pagination";
import Banner from '../../../features/banner/Banner';
import PageHeader from '../../../components/common/PageHeader';

export default function MobileRv() {
    const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);

    const products = [
        {
            id: 1,
            brand: "Anker",
            title: "Anker | SOLIX BP1000 Expansion Battery 1056Wh LFP | For SOLIX C1000 | A1761B",
            sku: "1638006",
            description: "Anker SOLIX BP1000 Expansion Battery 1056Wh LFP | For SOLIX C1000 | A1761111-85 Elevate your ener...",
            oldPrice: 499.00,
            price: 396.59,
            imageUrl: "https://cdn11.bigcommerce.com/s-bi8c0htqsn/images/stencil/320w/products/2218/5246/Rack_V2.1_1600__57614.1738959899.jpg?c=1",
            inStock: true
        },
        {
            id: 2,
            brand: "Anker",
            title: "Anker | SOLIX BP2600 Expansion Battery 2048Wh LFP | For SOLIX 2600 | A1781111-85",
            sku: "1638007",
            description: "Anker SOLIX BP2600 Expansion Battery 2048Wh LFP | For SOLIX 2600 | A1781111-85 Boost your power capa...",
            oldPrice: 1399.00,
            price: 1112.50,
            imageUrl: "https://cdn11.bigcommerce.com/s-bi8c0htqsn/images/stencil/320w/products/7196/8280/Pytes_Battery_Cabinet_Bundle__82763.1760362640.png?c=1",
            inStock: true
        },
        {
            id: 3,
            brand: "Anker",
            title: "Anker | SOLIX BP3000 Expansion Battery 3072Wh LFP | For SOLIX F3000",
            sku: "1638031",
            description: "Anker SOLIX BP3000 Expansion Battery | 3072Wh Add-On for F3000 Expand your power capacity with the ...",
            oldPrice: 1399.00,
            price: 1112.50,
            imageUrl: "https://cdn11.bigcommerce.com/s-bi8c0htqsn/images/stencil/320w/products/7196/8280/Pytes_Battery_Cabinet_Bundle__82763.1760362640.png?c=1",
            inStock: true
        },
        {
            id: 4,
            brand: "Anker",
            title: "Anker | SOLIX EverFrost 2 Removeable Battery For 40L & 58L",
            sku: "1638028",
            description: "Anker SOLIX EverFrost 2 Removable Battery | 288Wh LFP Power Module Keep your adventures powered with...",
            oldPrice: 249.00,
            price: 197.73,
            imageUrl: "https://cdn11.bigcommerce.com/s-bi8c0htqsn/images/stencil/320w/products/7196/8280/Pytes_Battery_Cabinet_Bundle__82763.1760362640.png?c=1",
            inStock: false
        },
        {
            id: 1,
            brand: "Anker",
            title: "Anker | SOLIX BP1000 Expansion Battery 1056Wh LFP | For SOLIX C1000 | A1761B",
            sku: "1638006",
            description: "Anker SOLIX BP1000 Expansion Battery 1056Wh LFP | For SOLIX C1000 | A1761111-85 Elevate your ener...",
            oldPrice: 499.00,
            price: 396.59,
            imageUrl: "https://cdn11.bigcommerce.com/s-bi8c0htqsn/images/stencil/320w/products/2218/5246/Rack_V2.1_1600__57614.1738959899.jpg?c=1",
            inStock: true
        },
        {
            id: 2,
            brand: "Anker",
            title: "Anker | SOLIX BP2600 Expansion Battery 2048Wh LFP | For SOLIX 2600 | A1781111-85",
            sku: "1638007",
            description: "Anker SOLIX BP2600 Expansion Battery 2048Wh LFP | For SOLIX 2600 | A1781111-85 Boost your power capa...",
            oldPrice: 1399.00,
            price: 1112.50,
            imageUrl: "https://cdn11.bigcommerce.com/s-bi8c0htqsn/images/stencil/320w/products/7196/8280/Pytes_Battery_Cabinet_Bundle__82763.1760362640.png?c=1",
            inStock: true
        },
        {
            id: 1,
            brand: "Anker",
            title: "Anker | SOLIX BP1000 Expansion Battery 1056Wh LFP | For SOLIX C1000 | A1761B",
            sku: "1638006",
            description: "Anker SOLIX BP1000 Expansion Battery 1056Wh LFP | For SOLIX C1000 | A1761111-85 Elevate your ener...",
            oldPrice: 499.00,
            price: 396.59,
            imageUrl: "https://cdn11.bigcommerce.com/s-bi8c0htqsn/images/stencil/320w/products/2218/5246/Rack_V2.1_1600__57614.1738959899.jpg?c=1",
            inStock: true
        },
        {
            id: 2,
            brand: "Anker",
            title: "Anker | SOLIX BP2600 Expansion Battery 2048Wh LFP | For SOLIX 2600 | A1781111-85",
            sku: "1638007",
            description: "Anker SOLIX BP2600 Expansion Battery 2048Wh LFP | For SOLIX 2600 | A1781111-85 Boost your power capa...",
            oldPrice: 1399.00,
            price: 1112.50,
            imageUrl: "https://cdn11.bigcommerce.com/s-bi8c0htqsn/images/stencil/320w/products/7196/8280/Pytes_Battery_Cabinet_Bundle__82763.1760362640.png?c=1",
            inStock: true
        },
    ];

    return (
        <div className="min-h-screen bg-white font-sans flex flex-col">
            <Navbar />
            <PageHeader
                title="Mobile - RV"
                breadcrumbs={[
                { label: "Home", href: "/" },
                    { label: "Mobile - RV" },
                ]}
                imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThvTFFERhasU5pz-OA50g3aZXeCXw4Z22dp4C4YgZB2A&s=10"
            />
            <main className="flex-1 max-w-[1440px] w-full mx-auto px-4 md:px-6 py-6 md:py-8 flex flex-col lg:flex-row gap-6 md:gap-8 relative">
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
                        {/* Overlay background */}
                        <div
                            className="fixed inset-0 bg-[#0a101d] bg-opacity-50 transition-opacity"
                            onClick={() => setIsMobileFiltersOpen(false)}
                        ></div>

                        {/* Drawer */}
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

                {/* Desktop Sidebar */}
                <div className="hidden lg:block w-[280px] shrink-0">
                    <ProductFilters />
                </div>

                <div className="flex-1 min-w-0">
                    {/* Banner */}
                    <Banner />
                    {/* Toolbar */}
                    <ProductSort />

                    {/* Product Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
                        {products.map(product => (
                            <ProductCard key={product.id} {...product} />
                        ))}
                    </div>

                    {/* Pagination */}
                    <Pagination currentPage={1} totalPages={3} />
                </div>
            </main>
            <Footer />
        </div>
    )
}