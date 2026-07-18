import { Link } from 'react-router-dom';
import { Search, ShoppingCart, Menu, X, Phone, User, HelpCircle, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [openMobileCategory, setOpenMobileCategory] = useState<string | null>(null);

  const categories = [
    { 
      name: 'ALL PRODUCTS', 
      href: '/shop/products',
      disableLink: true,
      children: [
        { name: 'New Arrivals', href: '/shop/products/new-arrivals' },
        { name: 'Kits & Bundles', href: '/shop/products/kits-bundles' },
        { name: 'Portable Power Stations', href: '/shop/products/portable-power-stations' },
        { name: 'Battery Accessories', href: '/shop/products/battery-accessories' },
        { name: 'Mobile RV', href: '/shop/products/mobile-rv' },
        { name: 'Wiring', href: '/shop/products/wiring' },
        { name: 'EV Chargers', href: '/shop/products/ev-chargers' },
        { name: 'Solar Panel Cleaning', href: '/shop/products/solar-panel-cleaning' },
        { name: 'Mounting Options', href: '/shop/products/mounting-options' },
        { name: 'System Components', href: '/shop/products/system-components' },
        { name: 'High Efficiency Appliances', href: '/shop/products/high-efficiency-appliances' },
        { name: 'Charge Controllers', href: '/shop/products/charge-controllers' },
      ]
    },
    {
        name: 'SHOP BY PROJECTS',
        href: '/shop/projects',
        children: [
            { name: 'Camping & Outdoors', href: '/shop/projects/camping-outdoors' },
            { name: 'EV Charging', href: '/shop/projects/ev-charging' },
            { name: 'Homesteading', href: '/shop/projects/homesteading' },
            { name: 'Marine And Boating', href: '/shop/projects/marine-boating' },
            { name: 'Mobile Adventures', href: '/shop/projects/mobile-adventure' },
            { name: 'Mounting Solutions', href: '/shop/projects/mounting-solutions' },
            { name: 'Survival Preparedness', href: '/shop/projects/survival-preparedness' },
        ],
    },
    { name: 'ALL BRANDS', href: '/shop/brands' },
    { name: 'BATTERIES', href: '/shop/batteries' },
    { name: 'INVERTERS', href: '/shop/inverters' },
    { name: 'SOLAR PANELS', href: '/shop/solar-panels' },
    { name: 'SOLAR KITS', href: '/shop/solar-kits' },
    { name: 'OUR STORE', href: '/shop/our-store' },       
    { 
      name: 'DISCOVER MORE', 
      href: '/discover-more',
      disableLink: true,
      children: [
        { name: 'About Us', href: '/discover-more/about-us' },
        { name: 'Contact Us', href: '/discover-more/contact-us' },
        { name: 'Frequently Asked Questions', href: '/discover-more/faq' },
        { name: 'Our Blog', href: '/discover-more/our-blog' },
      ]
    },
  ];

  return (
    <header className="w-full bg-white z-50 sticky top-0">
      {/* Top Banner Alert */}
      <div className="w-full bg-[#22a055] text-white text-center py-2 px-4 text-xs md:text-sm font-semibold flex items-center justify-center gap-2 border-b border-[#187a3e]">
        <Link to='#shipping-details'>
          <span>⚡</span>
          <span>NEXT-DAY SHIPPING ON ALL ORDERS PLACED BEFORE 2 PM CST!</span>
        </Link>
      </div>

      {/* Main Header (Search and Actions) */}
      <div className="border-b border-neutral-200">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between gap-4">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group shrink-0">
            <div className="w-10 h-10 rounded-lg bg-[#0B1525] flex items-center justify-center text-[#22a055] font-extrabold text-2xl group-hover:bg-[#22a055] group-hover:text-black transition-all">
              ⚡
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-black text-lg md:text-xl text-[#0B1525] tracking-tighter leading-none">
                STEADYGRID
              </span>
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#22a055] leading-none mt-0.5">
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
              className="w-full bg-neutral-50 text-neutral-800 border border-neutral-300 rounded-l-md px-4 py-2.5 text-xs font-semibold focus:outline-none focus:ring-1 focus:ring-neutral-900 focus:border-[#0B1525] tracking-wider"
            />
            <button 
              type="submit"
              className="bg-[#22a055] text-white hover:bg-[#187a3e] px-6 py-2.5 rounded-r-md transition-colors flex items-center justify-center shrink-0 cursor-pointer"
            >
              <Search className="w-4 h-4" />
            </button>
          </form>

          {/* Right Header Actions */}
          <div className="flex items-center gap-4 lg:gap-6 text-neutral-700 shrink-0">
            {/* Phone Number */}
            <div className="hidden lg:flex items-center gap-2 text-xs font-bold border-r border-neutral-200 pr-4">
              <Phone className="w-4 h-4 text-[#22a055]" />
              <div className="flex flex-col">
                <span className="text-[9px] text-neutral-400 font-medium leading-none">QUESTIONS? CALL</span>
                <span className="text-[#0B1525] font-extrabold tracking-wider leading-none mt-0.5">833-289-7652</span>
              </div>
            </div>

            {/* Support / Help */}
            <Link to="/discover-more/contact-us" className="hidden lg:flex items-center gap-1.5 text-xs font-bold hover:text-[#0B1525] transition-colors">
              <HelpCircle className="w-4 h-4" />
              <span>HELP CENTER</span>
            </Link>

            {/* Compare */}
            {/* <Link to="/compare" className="hidden sm:flex items-center gap-1.5 text-xs font-bold hover:text-[#0B1525] transition-colors relative">
              <RefreshCw className="w-4 h-4" />
              <span>COMPARE</span>
              <span className="absolute -top-2 -right-3 bg-[#22a055] text-white text-[9px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
                0
              </span>
            </Link> */}

            {/* User Login */}
            <Link to="/auth/login" className="flex items-center gap-1.5 text-xs font-bold hover:text-[#0B1525] transition-colors">
              <User className="w-5 h-5" />
              <span className="hidden sm:inline">LOG IN / REGISTER</span>
            </Link>

            {/* Cart */}
            <Link to="/cart" className="flex items-center gap-1.5 text-xs font-bold hover:text-[#0B1525] transition-colors relative">
              <div className="p-2 bg-neutral-100 rounded-full hover:bg-[#22a055] hover:text-white transition-all">
                <ShoppingCart className="w-4 h-4" />
              </div>
              <span className="absolute -top-1 -right-1 bg-[#22a055] text-white text-[9px] font-black rounded-full w-4 h-4 flex items-center justify-center">
                2
              </span>
            </Link>

            {/* Mobile Menu Toggle */}
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-[#0B1525]"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Secondary Categories Nav */}
      <div className="hidden md:block bg-[#0B1525] text-white font-bold tracking-wider text-xs border-b border-[#111c33]">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center gap-8 py-3">
                  {categories.map((cat) => (
                      <div
                          key={cat.name}
                          className="relative"
                          onMouseEnter={() => cat.children && setOpenDropdown(cat.name)}
                          onMouseLeave={() => cat.children && setOpenDropdown(null)}
                      >
                          {cat.disableLink ? (
                            <button
                                type="button"
                                onClick={() =>
                                    setOpenDropdown(openDropdown === cat.name ? null : cat.name)
                                }
                                className="flex items-center gap-1 hover:text-[#22a055] transition-colors py-1"
                            >
                                {cat.name}
                                {cat.children && (
                                    <ChevronDown
                                        className={`w-3.5 h-3.5 transition-transform ${
                                            openDropdown === cat.name ? 'rotate-180' : ''
                                        }`}
                                    />
                                )}
                            </button>
                        ) : (
                            <Link
                                to={cat.href}
                                className="flex items-center gap-1 hover:text-[#22a055] transition-colors py-1"
                            >
                                {cat.name}
                                {cat.children && (
                                    <ChevronDown
                                        className={`w-3.5 h-3.5 transition-transform ${
                                            openDropdown === cat.name ? 'rotate-180' : ''
                                        }`}
                                    />
                                )}
                            </Link>
                        )}
                          {cat.children && (
                            <AnimatePresence>
                                {openDropdown === cat.name && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -6 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -6 }}
                                        transition={{ duration: 0.15 }}
                                        className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-64 z-20"
                                    >
                                        {/* Pointer triangle */}
                                        <div className="w-3 h-3 bg-white rotate-45 absolute left-1/2 -translate-x-1/2 top-2.5 shadow-[-2px_-2px_2px_0_rgba(0,0,0,0.02)]" />

                                        <div className="relative bg-white text-[#0B1525] shadow-xl rounded-md overflow-hidden">
                                            {cat.children.map((child) => (
                                                <Link
                                                    key={child.name}
                                                    to={child.href}
                                                    className="block px-5 py-3.5 text-sm font-semibold tracking-normal border-b border-neutral-100 last:border-0 hover:bg-neutral-50 hover:text-[#22a055] transition-colors"
                                                >
                                                    {child.name}
                                                </Link>
                                            ))}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        )}
                      </div>
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
            className="md:hidden bg-[#0B1525] text-white border-b border-[#111c33]"
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
                <button type="submit" className="bg-[#22a055] text-white px-4 py-2 rounded-r-md">
                  <Search className="w-4 h-4" />
                </button>
              </form>

              <div className="flex flex-col gap-3 font-bold text-sm tracking-wider pb-4">
                {categories.map((cat) =>
                    cat.children ? (
                        <div key={cat.name} className="border-b border-[#111c33]">
                            <button
                                onClick={() =>
                                    setOpenMobileCategory(
                                        openMobileCategory === cat.name ? null : cat.name
                                    )
                                }
                                className="w-full flex items-center justify-between py-1 hover:text-[#22a055] transition-colors"
                            >
                                <span>{cat.name}</span>
                                <ChevronDown
                                    className={`w-4 h-4 transition-transform ${
                                        openMobileCategory === cat.name ? 'rotate-180' : ''
                                    }`}
                                />
                            </button>
                            <AnimatePresence>
                                {openMobileCategory === cat.name && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: 'auto' }}
                                        exit={{ opacity: 0, height: 0 }}
                                        className="flex flex-col gap-2 pl-4 pb-3 pt-1 font-medium text-neutral-300"
                                    >
                                        {cat.children.map((child) => (
                                            <Link
                                                key={child.name}
                                                to={child.href}
                                                onClick={() => {
                                                    setIsOpen(false);
                                                    setOpenMobileCategory(null);
                                                }}
                                                className="hover:text-[#22a055] transition-colors"
                                            >
                                                {child.name}
                                            </Link>
                                        ))}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ) : (
                        <Link
                            key={cat.name}
                            to={cat.href}
                            onClick={() => setIsOpen(false)}
                            className="hover:text-[#22a055] py-1 border-b border-[#111c33] transition-colors"
                        >
                            {cat.name}
                        </Link>
                    )
                )}
            </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}