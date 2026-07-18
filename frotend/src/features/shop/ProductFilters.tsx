import { useState } from 'react';

// Constants to simulate data from backend
const ALL_PRODUCTS_SUBCATEGORIES = [
    'Batteries',
    'Inverters',
    'Solar Panels',
    'Accessories'
];

const SHOP_BY_PROJECT_SUBCATEGORIES = [
    'Off-Grid Systems',
    'Grid-Tied Systems',
    'RV & Marine',
    'Home Backup'
];

const BRANDS = [
    { name: 'Anker', count: 4 },
    { name: 'BigBattery', count: 13 },
    { name: 'Briggs & Stratton', count: 1 },
    { name: 'Canadian Solar', count: 1 },
    { name: 'EG4 Electronics', count: 9 },
    { name: 'Enphase Energy', count: 1 },
    { name: 'LG', count: 1 },
    { name: 'Lion Energy', count: 1 },
    { name: 'Lunar Energy', count: 1 },
    { name: 'OutBack', count: 3 },
];

const VOLTAGES = [
    { name: '25.6V', count: 1 }
];

const KILOWATT_HOURS = [
    { name: '1.63kWh', count: 1 },
    { name: '3.3kWh', count: 1 },
    { name: '5.0kWh', count: 1 },
    { name: '5.12kWh', count: 10 },
    { name: '5kWh', count: 1 },
];

export const ProductFilters = () => {
    const [openSections, setOpenSections] = useState({
        categories: true,
        refineBy: true,
        brand: true,
        price: true,
        voltage: true,
        kwh: true
    });

    const [openSubCategories, setOpenSubCategories] = useState({
        allProducts: false,
        shopByProject: false
    });

    const toggleSection = (section: keyof typeof openSections) => {
        setOpenSections(prev => ({
            ...prev,
            [section]: !prev[section]
        }));
    };

    const toggleSubCategory = (subCategory: keyof typeof openSubCategories) => {
        setOpenSubCategories(prev => ({
            ...prev,
            [subCategory]: !prev[subCategory]
        }));
    };

    const ChevronIcon = ({ isOpen }: { isOpen: boolean }) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-4 w-4 text-white transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
        >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
    );

    return (
        <aside className="w-[280px] shrink-0 font-sans">
            {/* Categories */}
            <div className="mb-4">
                <div
                    className="bg-[#0a101d] text-white px-4 py-3 text-sm font-bold flex justify-between items-center cursor-pointer select-none"
                    onClick={() => toggleSection('categories')}
                >
                    Categories
                    <ChevronIcon isOpen={openSections.categories} />
                </div>
                {openSections.categories && (
                    <div className="border border-t-0 border-gray-200">
                        <div>
                            <div
                                className="flex justify-between items-center px-4 py-3 border-b border-gray-200 cursor-pointer hover:bg-gray-50 text-sm font-semibold text-gray-800 select-none"
                                onClick={() => toggleSubCategory('allProducts')}
                            >
                                All Products
                                <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 text-gray-400 transition-transform duration-200 ${openSubCategories.allProducts ? 'rotate-90' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </div>
                            {openSubCategories.allProducts && (
                                <div className="bg-gray-50 px-4 py-3 border-b border-gray-200 space-y-3">
                                    {ALL_PRODUCTS_SUBCATEGORIES.map(sub => (
                                        <div key={sub} className="text-sm text-gray-600 hover:text-black cursor-pointer ml-2">
                                            {sub}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                        <div>
                            <div
                                className="flex justify-between items-center px-4 py-3 cursor-pointer hover:bg-gray-50 text-sm font-semibold text-gray-800 select-none"
                                onClick={() => toggleSubCategory('shopByProject')}
                            >
                                Shop By Project
                                <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 text-gray-400 transition-transform duration-200 ${openSubCategories.shopByProject ? 'rotate-90' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </div>
                            {openSubCategories.shopByProject && (
                                <div className="bg-gray-50 px-4 py-3 border-t border-gray-200 space-y-3">
                                    {SHOP_BY_PROJECT_SUBCATEGORIES.map(sub => (
                                        <div key={sub} className="text-sm text-gray-600 hover:text-black cursor-pointer ml-2">
                                            {sub}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </div>

            {/* Refine By */}
            <div className="mb-4">
                <div
                    className="bg-[#0a101d] text-white px-4 py-3 text-sm font-bold flex justify-between items-center cursor-pointer select-none"
                    onClick={() => toggleSection('refineBy')}
                >
                    Refine By
                    <ChevronIcon isOpen={openSections.refineBy} />
                </div>
                {openSections.refineBy && (
                    <div className="border border-t-0 border-gray-200 p-4 bg-gray-50">
                        <p className="text-sm text-gray-600">No filters applied</p>
                    </div>
                )}
            </div>

            {/* Brand */}
            <div className="mb-4">
                <div
                    className="bg-[#0a101d] text-white px-4 py-3 text-sm font-bold flex justify-between items-center cursor-pointer select-none"
                    onClick={() => toggleSection('brand')}
                >
                    Brand
                    <ChevronIcon isOpen={openSections.brand} />
                </div>
                {openSections.brand && (
                    <div className="border border-t-0 border-gray-200">
                        <div className="p-4 space-y-3">
                            {BRANDS.map((brand) => (
                                <label key={brand.name} className="flex items-center gap-3 cursor-pointer group">
                                    <input type="checkbox" className="w-4 h-4 border-gray-300 rounded text-blue-600 focus:ring-blue-500" />
                                    <span className="text-sm text-gray-700 group-hover:text-black">{brand.name} ({brand.count})</span>
                                </label>
                            ))}
                        </div>
                        <div className="bg-gray-200 px-4 py-2.5 text-center text-sm font-semibold text-gray-700 cursor-pointer hover:bg-gray-300 transition-colors">
                            Show More
                        </div>
                    </div>
                )}
            </div>

            {/* Price */}
            <div className="mb-4">
                <div
                    className="bg-[#0a101d] text-white px-4 py-3 text-sm font-bold flex justify-between items-center cursor-pointer select-none"
                    onClick={() => toggleSection('price')}
                >
                    Price
                    <ChevronIcon isOpen={openSections.price} />
                </div>
                {openSections.price && (
                    <div className="border border-t-0 border-gray-200 p-4">
                        <div className="flex items-center gap-2">
                            <div className="relative flex-1">
                                <span className="absolute inset-y-0 left-0 pl-2 flex items-center text-gray-500 text-xs">$</span>
                                <input type="number" placeholder="Min." className="w-full pl-6 pr-2 py-2 border border-gray-300 text-sm focus:outline-none focus:border-black" />
                            </div>
                            <span className="text-gray-400">-</span>
                            <div className="relative flex-1">
                                <span className="absolute inset-y-0 left-0 pl-2 flex items-center text-gray-500 text-xs">$</span>
                                <input type="number" placeholder="Max." className="w-full pl-6 pr-2 py-2 border border-gray-300 text-sm focus:outline-none focus:border-black" />
                            </div>
                            <button className="bg-[#0a101d] text-white text-xs font-bold px-4 py-2.5 hover:bg-gray-800 transition-colors">
                                UPDATE
                            </button>
                        </div>
                    </div>
                )}
            </div>

            {/* Voltage */}
            <div className="mb-4">
                <div
                    className="bg-[#0a101d] text-white px-4 py-3 text-sm font-bold flex justify-between items-center cursor-pointer select-none"
                    onClick={() => toggleSection('voltage')}
                >
                    Voltage
                    <ChevronIcon isOpen={openSections.voltage} />
                </div>
                {openSections.voltage && (
                    <div className="border border-t-0 border-gray-200 p-4 space-y-3">
                        {VOLTAGES.map((voltage) => (
                            <label key={voltage.name} className="flex items-center gap-3 cursor-pointer group">
                                <input type="checkbox" className="w-4 h-4 border-gray-300 rounded text-blue-600 focus:ring-blue-500" />
                                <span className="text-sm text-gray-700 group-hover:text-black">{voltage.name} ({voltage.count})</span>
                            </label>
                        ))}
                    </div>
                )}
            </div>

            {/* Kilowatt-Hour(s) */}
            <div className="mb-4">
                <div
                    className="bg-[#0a101d] text-white px-4 py-3 text-sm font-bold flex justify-between items-center cursor-pointer select-none"
                    onClick={() => toggleSection('kwh')}
                >
                    Kilowatt-Hour(s)
                    <ChevronIcon isOpen={openSections.kwh} />
                </div>
                {openSections.kwh && (
                    <div className="border border-t-0 border-gray-200 p-4 space-y-3">
                        {KILOWATT_HOURS.map((kwh) => (
                            <label key={kwh.name} className="flex items-center gap-3 cursor-pointer group">
                                <input type="checkbox" className="w-4 h-4 border-gray-300 rounded text-blue-600 focus:ring-blue-500" />
                                <span className="text-sm text-gray-700 group-hover:text-black">{kwh.name} ({kwh.count})</span>
                            </label>
                        ))}
                    </div>
                )}
            </div>
        </aside>
    );
};

export const ProductSort = () => {
    return (
        <div className="flex flex-col sm:flex-row justify-end items-center sm:items-center gap-4 sm:gap-0 mb-6">
            <div className="flex items-center gap-2">
                <span className="text-sm text-gray-700 font-medium whitespace-nowrap">Sort By:</span>
                <div className="relative">
                    <select className="border rounded-md border-gray-300 text-sm py-2 pl-3 pr-8 focus:outline-none focus:border-black appearance-none bg-white w-40 sm:w-32 cursor-pointer">
                        <option>A to Z</option>
                        <option>Z to A</option>
                        <option>Price: Low to High</option>
                        <option>Price: High to Low</option>
                    </select>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </div>
            </div>
        </div>
    );
};
