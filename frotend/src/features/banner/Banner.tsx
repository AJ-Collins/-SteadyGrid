import React from 'react';
const BatteriesBanner: React.FC = () => {
    return (
        <div 
        className="relative w-full max-w-[1440px] mx-auto min-h-[280px] sm:h-[220px] md:h-[320px] bg-[#0B1525] text-white flex items-center justify-center p-6 md:p-12 overflow-hidden mb-6 group">
            {/* Starry background effect */}
            <div className="absolute inset-0 opacity-40" style={{
                backgroundImage: 'radial-gradient(circle at 10% 20%, rgba(255, 255, 255, 0.4) 1px, transparent 1px), radial-gradient(circle at 40% 60%, rgba(255, 255, 255, 0.2) 1px, transparent 1px), radial-gradient(circle at 80% 30%, rgba(255, 255, 255, 0.3) 1px, transparent 1px)',
                backgroundSize: '100px 100px',
                backgroundPosition: '0 0, 50px 50px, 20px 80px'
            }}></div>

            {/* Abstract green shapes */}
            <div className="absolute top-0 right-0 w-1/2 h-full opacity-30 pointer-events-none flex overflow-hidden">
                <div className="h-[150%] w-16 md:w-24 bg-[#22a055] transform -skew-x-12 ml-4 -mt-10"></div>
                <div className="h-[150%] w-12 md:w-16 bg-[#22a055] transform -skew-x-12 ml-6 md:ml-8 -mt-10"></div>
                <div className="h-[150%] w-24 md:w-32 bg-[#22a055] transform -skew-x-12 ml-8 md:ml-12 -mt-10"></div>
            </div>

            <div className="relative z-10 max-w-xl pl-0 md:pl-4">
                <div className="flex gap-2 mb-2 md:mb-3 justify-start md:justify-center w-max ml-0 md:ml-8">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:w-6 text-[#22a055]" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:h-8 md:w-8 text-[#22a055] -mt-1 md:-mt-2" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:w-6 text-[#22a055]" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                </div>
                <h1 className="text-3xl md:text-[44px] font-extrabold tracking-tight mb-0 text-white leading-[1] font-sans">
                    DECLARE ENERGY <br />
                    <span className="text-[#22a055] text-4xl md:text-[58px] uppercase tracking-tighter drop-shadow-md block mt-1">INDEPENDENCE</span>
                </h1>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mt-3">
                    <div className="text-[#22a055] text-4xl md:text-[52px] font-black italic tracking-tighter drop-shadow-md">
                        SAVE 10%
                    </div>
                    <div className="text-xs md:text-sm font-medium italic mt-0 sm:mt-2 text-gray-300 max-w-[200px] leading-tight">
                        on select batteries <span className="not-italic text-white font-normal block sm:mt-1">and store more power for when you need it most.</span>
                    </div>
                </div>
                <button className="mt-6 md:mt-8 bg-[#22a055] hover:bg-[#187a3e] text-white font-bold py-2 md:py-3 px-6 text-sm md:text-[15px] uppercase tracking-wider transition-colors inline-block relative overflow-hidden group-hover:scale-105 duration-300 shadow-[0_0_15px_rgba(34,160,85,0.5)] rounded-md">
                    SHOP BATTERY DEALS
                </button>
            </div>

            {/* Decorative images to the right */}
            <div className="absolute right-0 bottom-0 h-full w-[45%] flex items-end justify-end pointer-events-none pr-4 md:pr-8 opacity-40 md:opacity-100">
                <div className="w-[120px] md:w-[180px] h-[160px] md:h-[240px] bg-gray-400 rounded-sm shadow-2xl relative translate-x-8 md:translate-x-16 translate-y-4 md:translate-y-8 rotate-[2deg] border-2 border-gray-300 flex flex-col z-0">
                    <div className="h-4 md:h-6 bg-gray-500 w-full mb-auto flex items-center justify-center"></div>
                    <div className="text-center pb-4 md:pb-8"><span className="text-lg md:text-xl font-black text-white">EG4</span></div>
                </div>
                <div className="w-[100px] md:w-[160px] h-[140px] md:h-[200px] bg-gray-500 rounded-sm shadow-2xl absolute bottom-0 right-8 md:right-16 -translate-x-6 md:-translate-x-12 opacity-95 border-2 border-gray-400 flex flex-col z-10">
                    <div className="h-4 md:h-6 bg-gray-600 w-full mb-auto flex items-center px-2 md:px-4">
                        <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-green-400"></div>
                    </div>
                    <div className="text-center pb-4 md:pb-8"><span className="text-lg md:text-xl font-black text-white">EG4</span></div>
                </div>
            </div>
        </div>
    );
};

export default BatteriesBanner;