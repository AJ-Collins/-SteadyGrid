import { Link } from 'react-router-dom';
import { Search, ShoppingCart, Menu, X, Phone, RefreshCw, User, HelpCircle, ShieldAlert } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { name: 'BATTERIES', href: '/shop/batteries' },
    { name: 'INVERTERS', href: '/shop/inverters' },
    { name: 'SOLAR PANELS', href: '/shop/solar-panels' },
    { name: 'KITS', href: '/shop/kits' },
    { name: 'COMPONENTS', href: '/shop/components' },
    { name: 'DEALS', href: '/shop/deals' },
    { name: 'LEARN', href: '/learn' },
    { name: 'CONTACT US', href: '/contact' },
  ];

  return (
    <header className="w-full bg-white z-50">
      {/* Top Banner Alert */}
      <div className="w-full bg-[#fbbf24] text-black text-center py-2 px-4 text-xs md:text-sm font-semibold flex items-center justify-center gap-2 border-b border-yellow-500">
        <span className="animate-pulse">⚡</span>
        <span>NEXT-DAY SHIPPING ON ALL ORDERS PLACED BEFORE 2 PM CST!</span>
        <a href="#shipping-details" className="underline hover:text-neutral-800 transition-colors ml-1">
          details
        </a>
      </div>

      {/* Main Header (Search and Actions) */}
      <div className="border-b border-neutral-200">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between gap-4">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group shrink-0">
            <div className="w-10 h-10 rounded-lg bg-neutral-900 flex items-center justify-center text-[#fbbf24] font-extrabold text-2xl group-hover:bg-[#fbbf24] group-hover:text-black transition-all">
              ⚡
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-black text-lg md:text-xl text-neutral-900 tracking-tighter leading-none">
                STEADYGRID
              </span>
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#fbbf24] leading-none mt-0.5">
                SOLAR
              </span>
            </div>
          </Link>

          {/* Search Bar */}
          <form 
            onSubmit={(e) => e.preventDefault()}
            className="hidden md:flex flex-1 max-w-xl items-center relative"
          >
            <input
              type="text"
              placeholder="SEARCH BY PRODUCT, PART NUMBER OR KEYWORD"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-neutral-50 text-neutral-800 border border-neutral-300 rounded-l-md px-4 py-2.5 text-xs font-semibold focus:outline-none focus:ring-1 focus:ring-neutral-900 focus:border-neutral-900 tracking-wider"
            />
            <button 
              type="submit"
              className="bg-neutral-900 text-[#fbbf24] hover:bg-neutral-800 px-6 py-2.5 rounded-r-md transition-colors border border-neutral-900 flex items-center justify-center shrink-0 cursor-pointer"
            >
              <Search className="w-4 h-4" />
            </button>
          </form>

          {/* Right Header Actions */}
          <div className="flex items-center gap-4 lg:gap-6 text-neutral-700 shrink-0">
            {/* Phone Number */}
            <div className="hidden lg:flex items-center gap-2 text-xs font-bold border-r border-neutral-200 pr-4">
              <Phone className="w-4 h-4 text-[#fbbf24]" />
              <div className="flex flex-col">
                <span className="text-[9px] text-neutral-400 font-medium leading-none">QUESTIONS? CALL</span>
                <span className="text-neutral-900 font-extrabold tracking-wider leading-none mt-0.5">833-289-7652</span>
              </div>
            </div>

            {/* Support / Help */}
            <Link to="/help" className="hidden lg:flex items-center gap-1.5 text-xs font-bold hover:text-neutral-900 transition-colors">
              <HelpCircle className="w-4 h-4" />
              <span>HELP CENTER</span>
            </Link>

            {/* Compare */}
            <Link to="/compare" className="hidden sm:flex items-center gap-1.5 text-xs font-bold hover:text-neutral-900 transition-colors relative">
              <RefreshCw className="w-4 h-4" />
              <span>COMPARE</span>
              <span className="absolute -top-2 -right-3 bg-neutral-900 text-[#fbbf24] text-[9px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
                0
              </span>
            </Link>

            {/* User Login */}
            <Link to="/login" className="flex items-center gap-1.5 text-xs font-bold hover:text-neutral-900 transition-colors">
              <User className="w-4 h-4" />
              <span className="hidden sm:inline">LOG IN / REGISTER</span>
            </Link>

            {/* Cart */}
            <Link to="/cart" className="flex items-center gap-1.5 text-xs font-bold hover:text-neutral-900 transition-colors relative">
              <div className="p-2 bg-neutral-100 rounded-full hover:bg-[#fbbf24] hover:text-black transition-all">
                <ShoppingCart className="w-4 h-4" />
              </div>
              <span className="absolute -top-1 -right-1 bg-[#fbbf24] text-neutral-900 text-[9px] font-black rounded-full w-4 h-4 flex items-center justify-center">
                2
              </span>
            </Link>

            {/* Mobile Menu Toggle */}
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-neutral-900"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Secondary Categories Nav */}
      <div className="hidden md:block bg-neutral-900 text-white font-bold tracking-wider text-xs border-b border-neutral-800">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-8 py-3">
            {categories.map((cat) => (
              <Link 
                key={cat.name} 
                to={cat.href}
                className="hover:text-[#fbbf24] transition-colors py-1"
              >
                {cat.name}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Search & Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-neutral-900 text-white border-b border-neutral-800"
          >
            <div className="px-4 py-4 flex flex-col gap-4">
              <form onSubmit={(e) => e.preventDefault()} className="flex items-center">
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-neutral-800 text-white border border-neutral-700 rounded-l-md px-3 py-2 text-sm focus:outline-none"
                />
                <button type="submit" className="bg-[#fbbf24] text-black px-4 py-2 rounded-r-md">
                  <Search className="w-4 h-4" />
                </button>
              </form>

              <div className="flex flex-col gap-3 font-bold text-sm tracking-wider pb-4">
                {categories.map((cat) => (
                  <Link
                    key={cat.name}
                    to={cat.href}
                    onClick={() => setIsOpen(false)}
                    className="hover:text-[#fbbf24] py-1 border-b border-neutral-800 transition-colors"
                  >
                    {cat.name}
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}