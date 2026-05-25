"use client";

import { ChevronDown, Phone, ShoppingCart, Heart, User, CheckCircle2 } from "lucide-react";
import { NavDropdown } from "@/components/layout/MegaMenu";
import { homeMenu, productsMenu } from "@/components/layout/menuConfig";

export default function Topbar() {
  return (
    <div className="relative z-50">

      {/* ── Utility Bar ── */}
      <div className="bg-white max-w-[1400px] mx-auto hidden md:block">
        <div className="px-4 flex justify-between items-center h-10 text-[12.5px] text-gray-500">

          {/* Left */}
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1 px-3 py-1 text-[11px] font-bold uppercase tracking-wide">
              Hotline 24/7
            </span>
            <span className="flex items-center gap-1.5 font-semibold text-gray-800 hover:text-[#2ecc40] cursor-pointer transition-colors">
              <Phone size={13} className="text-gray-400" />
              (025) 3886 25 16
            </span>
          </div>

          {/* Right */}
          <div className="flex items-center gap-5">
            <span className="flex items-center gap-1.5 text-[14px] font-medium hover:text-gray-900 cursor-pointer transition-colors">
              <CheckCircle2 size={13} />
              Order Tracking
            </span>
            <div className="w-px h-4 bg-gray-300" />
            <button className="flex items-center gap-1.5 font-bold text-gray-800 hover:text-black transition-colors">
              Eng <ChevronDown size={13} className="text-gray-400" />
            </button>
          </div>

        </div>
      </div>

      {/* ── Main Navbar ── */}
      <div className="bg-white max-w-[1400px] mx-auto relative">
        <div className="px-4 flex items-center justify-between h-[76px]">

          {/* Logo + Nav */}
          <div className="flex items-center gap-10">

            {/* Logo */}
            <div className="flex items-center gap-3 shrink-0 cursor-pointer group">
              <div className="w-[44px] h-[44px] rounded-xl bg-gradient-to-br from-[#2ecc40] to-[#25a232] flex items-center justify-center text-white shadow-md shadow-[#2ecc40]/20 group-hover:shadow-lg group-hover:shadow-[#2ecc40]/30 transition-all">
                <span className="text-[20px] font-black tracking-wide">S</span>
              </div>
              <div className="leading-none">
                <div className="text-[22px] font-black text-gray-900 tracking-wider uppercase">
                  SteadyGrid
                </div>
                <div className="text-[10px] font-bold text-[#2ecc40] tracking-[0.25em] uppercase mt-1">
                  Energy Solutions
                </div>
              </div>
            </div>

            {/* Nav */}
            <nav className="hidden md:flex items-center gap-1">
              <NavDropdown label="Home"     menu={homeMenu} />
              <NavDropdown label="Products" menu={productsMenu} />
              <button className="px-4 py-2.5 text-[13px] font-bold text-gray-700 hover:bg-gray-50 hover:text-[#2ecc40] rounded-lg transition-all uppercase tracking-[0.05em]">
                Contact
              </button>
            </nav>

          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-2">

            {/* Wishlist */}
            <button className="w-10 h-10 flex items-center justify-center text-gray-500 hover:text-[#2ecc40] hover:bg-gray-50 rounded-full transition-all cursor-pointer">
              <Heart size={20} />
            </button>

            <div className="h-6 w-px bg-gray-200 mx-1 hidden lg:block" />

            {/* Account */}
            <div className="flex items-center gap-3 px-2 py-1.5 rounded-full hover:bg-gray-50 transition-colors cursor-pointer group">
              <button className="w-9 h-9 rounded-full bg-gray-100 group-hover:bg-white border border-transparent group-hover:border-gray-200 flex items-center justify-center text-gray-600 transition-all">
                <User size={16} />
              </button>
              <div className="hidden lg:flex flex-col leading-tight">
                <span className="text-[9px] text-gray-400 uppercase tracking-widest font-bold">Welcome</span>
                <span className="text-[12px] font-extrabold text-gray-900 whitespace-nowrap">
                  Log In / Register
                </span>
              </div>
            </div>

            {/* Cart */}
            <div className="flex items-center gap-3 px-2 py-1.5 ml-1 rounded-full hover:bg-gray-50 transition-colors cursor-pointer group">
              <div className="relative">
                <button className="w-9 h-9 rounded-full bg-gray-100 group-hover:bg-white border border-transparent group-hover:border-gray-200 flex items-center justify-center text-gray-600 transition-all">
                  <ShoppingCart size={16} />
                </button>
                <span className="absolute -top-1.5 -right-1.5 w-[20px] h-[20px] rounded-full bg-[#2ecc40] text-white text-[10px] font-black flex items-center justify-center shadow-sm border-2 border-white">
                  5
                </span>
              </div>
              <div className="hidden lg:flex flex-col leading-tight">
                <span className="text-[9px] text-gray-400 uppercase tracking-widest font-bold">Your Cart</span>
                <span className="text-[13px] font-black text-[#2ecc40]">$1,689.00</span>
              </div>
            </div>

          </div>
        </div>
      </div>

    </div>
  );
}