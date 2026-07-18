import React from 'react';

interface ProductCardProps {
    brand: string;
    title: string;
    sku: string;
    description: string;
    oldPrice: number;
    price: number;
    imageUrl: string;
    inStock?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({
    brand,
    title,
    sku,
    description,
    oldPrice,
    price,
    imageUrl,
    inStock = true
}) => {
    return (
        <div className="border border-gray-200 p-6 flex flex-col xl:flex-row gap-6 relative bg-white hover:shadow-lg transition-shadow duration-300 group h-full"> 
            {/* Image */}
            <div className="w-full xl:w-[220px] xl:min-w-[220px] h-[200px] flex items-center justify-center overflow-hidden shrink-0">
                <img
                    src={imageUrl}
                    alt={title}
                    className="max-w-full max-h-full object-contain transition-transform duration-500 group-hover:scale-105"
                />
            </div>

            {/* Content */}
            <div className="flex-1 flex flex-col">
                <div className="text-sm text-gray-500 mb-1">{brand}</div>
                <h3 className="text-[15px] font-medium text-neutral-800 leading-tight mb-2 hover:text-[#22a055] transition-colors cursor-pointer line-clamp-2">
                    {title}
                </h3>
                <div className="text-xs text-gray-500 mb-2 font-medium">SKU: {sku}</div>
                <p className="text-xs text-gray-600 leading-relaxed line-clamp-2 mb-4 xl:mb-6">
                    {description}
                </p>

                {/* Price */}
                <div className="mt-auto">
                    <div className="text-sm text-red-500 line-through mb-0.5">
                        ${oldPrice.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                    </div>
                    <div className="text-[22px] font-extrabold text-gray-900 mb-4">
                        ${price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                    </div>
                </div>

                {/* Actions */}
                <div className="flex gap-2 mt-auto">
                    {inStock ? (
                        <button className="flex-1 bg-[#22a055] text-white py-3 px-4 flex items-center justify-center rounded-md gap-2 text-sm font-bold hover:bg-[#187a3e] transition-colors cursor-pointer">
                            Add To Cart
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                        </button>
                    ) : (
                        <button className="flex-1 bg-gray-500 text-white py-3 px-4 flex rounded-md items-center justify-center gap-2 text-sm font-bold">
                            Out Of Stock
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
