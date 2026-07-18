import React from 'react';

interface SolarKitsProductCardProps {
    brand: string;
    title: string;
    sku: string;
    description: string;
    oldPrice: number;
    price: number;
    imageUrl: string;
    inStock?: boolean;
}

const SolarKitsProductCard: React.FC<SolarKitsProductCardProps> = ({
    title,
    sku,
    description,
    oldPrice,
    price,
    imageUrl,
    inStock = true
}) => {
    return (
        <div className="w-[240px] sm:w-[280px] md:w-[320px] border border-gray-200 flex flex-col relative bg-white hover:shadow-xl transition-all duration-300 group h-full shrink-0">
            {/* Top Image Section */}
            <div className="w-full h-[180px] sm:h-[200px] md:h-[240px] flex items-center justify-center overflow-hidden bg-gray-50/50 p-6 relative shrink-0">
                {/* Stock Badge */}
                {!inStock && (
                    <div className="absolute top-4 right-4 bg-gray-900 text-white text-[9px] sm:text-[10px] uppercase font-bold px-2 py-1 z-10">
                        Out of Stock
                    </div>
                )}

                <img
                    src={imageUrl}
                    alt={title}
                    className="max-w-full max-h-full object-contain transition-transform duration-300 group-hover:scale-105"
                />
            </div>

            {/* Middle Content Section */}
            <div className="flex-1 flex flex-col p-4 sm:p-5 pb-0">
                <div className="text-[10px] sm:text-[11px] text-gray-500 mb-2 sm:mb-3 font-semibold bg-gray-100 inline-block px-2 py-1 w-fit rounded-sm uppercase tracking-wide">
                    SKU: {sku}
                </div>
                
                <h3 className="text-[13px] sm:text-[14px] md:text-[15px] font-semibold text-neutral-800 leading-snug mb-2 sm:mb-3 hover:text-[#22a055] transition-colors cursor-pointer line-clamp-2 min-h-[40px] sm:min-h-[44px]">
                    {title}
                </h3>
                
                <p className="text-[11px] sm:text-[13px] text-gray-500 leading-relaxed line-clamp-2 mb-3 sm:mb-4">
                    {description}
                </p>
            </div>

            {/* Bottom Action Bar */}
            <div className="p-4 sm:p-5 pt-3 sm:pt-4 mt-auto border-t border-gray-100 flex items-end justify-between gap-3 sm:gap-4">
                <div className="flex flex-col flex-1">
                    {oldPrice > price && (
                        <div className="text-[10px] sm:text-xs text-gray-400 line-through mb-0.5 sm:mb-1 font-medium">
                            ${oldPrice.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                        </div>
                    )}
                    <div className="text-[18px] sm:text-[20px] font-extrabold text-gray-900 leading-none">
                        ${price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                    </div>
                </div>

                <div className="shrink-0">
                    {inStock ? (
                        <button className="bg-[#22a055] text-white py-2 px-3 sm:py-2.5 sm:px-4 flex items-center justify-center gap-1.5 sm:gap-2 text-[12px] sm:text-sm font-bold hover:bg-[#187a3e] transition-colors cursor-pointer shadow-sm hover:shadow-md rounded-md" aria-label="Add to cart">
                            <span>Add</span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 sm:h-4 sm:w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                        </button>
                    ) : (
                        <button className="bg-gray-100 text-gray-400 py-2 px-3 sm:py-2.5 sm:px-4 flex items-center justify-center gap-2 text-[12px] sm:text-sm font-bold cursor-not-allowed border border-gray-200 rounded-md" aria-label="Out of stock">
                            Out
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default SolarKitsProductCard;
