import React from 'react';

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange?: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
    return (
        <div className="flex items-center justify-center space-x-2 mt-8 mb-4">
            <button 
                className="w-10 h-10 flex items-center justify-center border border-gray-300 text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                disabled={currentPage === 1}
                onClick={() => onPageChange?.(currentPage - 1)}
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
            </button>
            
            {[...Array(totalPages)].map((_, i) => (
                <button
                    key={i + 1}
                    className={`w-10 h-10 flex items-center justify-center border text-sm font-medium transition-colors ${
                        currentPage === i + 1 
                            ? 'bg-[#0a101d] text-white border-black' 
                            : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                    }`}
                    onClick={() => onPageChange?.(i + 1)}
                >
                    {i + 1}
                </button>
            ))}

            <button 
                className="w-10 h-10 flex items-center justify-center border border-gray-300 text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                disabled={currentPage === totalPages}
                onClick={() => onPageChange?.(currentPage + 1)}
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
            </button>
        </div>
    );
};

export default Pagination;
