import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Footer() {
  const navigateLinks = [
    'Solar Kits', 'Promotions', 'Design', 'Install Your System', 'Retail Store',
    'Wholesale Program', 'Programs', 'Discover More', 'Financing', 'Careers', 'Sitemap'
  ];

  const categoryLinks = [
    'All Products', 'All Brands', 'New Arrivals', 'Kits & Bundles', 'Batteries',
    'Battery Accessories and Racking', 'Inverters', 'Solar Panels', 'Solar Panel Cleaning',
    'Mounting Options & Hardware', 'Generators', 'System Components', 'Portable Power Stations',
    'Mobile - RV - Golf Cart', 'Solar Powered Coolers', 'EV Chargers', 'High Efficiency Appliances',
    'Charge Controllers', 'Clearance', 'Shop by Project', 'Camping & Outdoors', 'EV Charging',
    'Homesteading', 'Marine and Boating', 'Mobile Adventures', 'Mounting Solutions', 'Survival Preparedness'
  ];

  const brandsLinks = [
    'EG4 Electronics', 'Victron Energy', 'Growatt', 'Canadian Solar', 'OEM', 'BigBattery', 'View All'
  ];

  const accountLinks = [
    'Orders', 'Addresses', 'Wish Lists', 'Recently Viewed', 'Account Settings'
  ];

  return (
    <footer className="w-full bg-white text-neutral-900 font-sans border-t border-neutral-200">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 lg:gap-12 pb-16">
          
          {/* Column 1: Brand & Contact Info */}
          <div className="md:col-span-1 flex flex-col">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 mb-8">
              <div className="w-8 h-8 rounded bg-[#fbbf24] flex items-center justify-center text-black font-extrabold text-lg">
                ⚡
              </div>
              <div className="flex flex-col">
                <span className="font-black text-xl text-neutral-900 tracking-tighter leading-none">
                  STEADYGRID
                </span>
                <span className="text-[10px] uppercase font-bold tracking-widest text-neutral-500 leading-none mt-0.5">
                  SOLAR
                </span>
              </div>
            </Link>

            {/* Contact Details */}
            <div className="flex flex-col gap-5 text-[12px] text-neutral-600">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 shrink-0 mt-0.5" />
                <span>
                  421 Industrial Dr E<br />
                  Sulphur Springs, TX 75482
                </span>
              </div>
              
              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 shrink-0 mt-0.5" />
                <span>
                  Call Our USA-Based Experts:<br />
                  903-441-2090
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 shrink-0" />
                <span>support@steadygridsolar.com</span>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 shrink-0" />
                <span>press@steadygridsolar.com</span>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 shrink-0 mt-0.5" />
                <span>
                  Monday - Friday: 8am - 7pm CT<br />
                  Saturday: 9am - 2pm CT<br />
                  Holiday Hours (July 4): Closed
                </span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-4 mt-12 text-neutral-900">
              <a href="#" className="hover:text-[#fbbf24] transition-colors" aria-label="YouTube">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
              <a href="#" className="hover:text-[#fbbf24] transition-colors" aria-label="Facebook">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.312h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/></svg>
              </a>
              <a href="#" className="hover:text-[#fbbf24] transition-colors" aria-label="LinkedIn">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
              <a href="#" className="hover:text-[#fbbf24] transition-colors" aria-label="Instagram">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>
              </a>
            </div>
          </div>

          {/* Column 2: Navigate */}
          <div className="md:col-span-1">
            <h4 className="font-bold text-[13px] text-neutral-900 mb-4">Navigate</h4>
            <ul className="flex flex-col gap-2.5 text-[12px] text-neutral-500">
              {navigateLinks.map(link => (
                <li key={link}><a href="#" className="hover:text-neutral-900 transition-colors">{link}</a></li>
              ))}
            </ul>
          </div>

          {/* Column 3: Categories */}
          <div className="md:col-span-1">
            <h4 className="font-bold text-[13px] text-neutral-900 mb-4">Categories</h4>
            <ul className="flex flex-col gap-2.5 text-[12px] text-neutral-500">
              {categoryLinks.map(link => (
                <li key={link}><a href="#" className="hover:text-neutral-900 transition-colors">{link}</a></li>
              ))}
            </ul>
          </div>

          {/* Column 4: Brands */}
          <div className="md:col-span-1">
            <h4 className="font-bold text-[13px] text-neutral-900 mb-4">Brands</h4>
            <ul className="flex flex-col gap-2.5 text-[12px] text-neutral-500">
              {brandsLinks.map((link, idx) => (
                <li key={link}>
                  <a href="#" className={`hover:text-neutral-900 transition-colors ${idx === brandsLinks.length - 1 ? 'font-bold text-neutral-900' : ''}`}>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5: My Account & BBB */}
          <div className="md:col-span-1 flex flex-col justify-between">
            <div>
              <h4 className="font-bold text-[13px] text-neutral-900 mb-4">My Account</h4>
              <ul className="flex flex-col gap-2.5 text-[12px] text-neutral-500">
                {accountLinks.map(link => (
                  <li key={link}><a href="#" className="hover:text-neutral-900 transition-colors">{link}</a></li>
                ))}
              </ul>
            </div>
            
            {/* BBB Badge Placeholder */}
            <div className="mt-12 lg:mt-auto self-start border-[1.5px] border-[#005587] p-2 flex items-center justify-center cursor-pointer">
              <div className="text-[#005587] font-black text-2xl px-2 flex items-center gap-1">
                <span className="text-sm font-bold flex flex-col leading-none text-center">
                  <span>BBB</span>
                  <span className="text-[6px]">ACCREDITED</span>
                  <span className="text-[6px]">BUSINESS</span>
                </span>
                A+
                <span className="text-sm font-bold ml-1">rating</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 text-[11px] text-neutral-500">
          <div>© 2026 SteadyGrid Solar.</div>
          
          <div className="flex items-center gap-4 opacity-70 grayscale">
            {/* Payment Icons placehoder text or simple SVGs, using text for now to match structure */}
            <span className="font-black italic">AMEX</span>
            <span className="font-bold">DISCOVER</span>
            <span className="font-bold">MasterCard</span>
            <span className="font-bold italic text-blue-800">PayPal</span>
            <span className="font-black italic text-blue-900 tracking-tighter">VISA</span>
          </div>

          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-neutral-900 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-neutral-900 transition-colors">Legal</a>
            <a href="#" className="hover:text-neutral-900 transition-colors">Cookies Policy</a>
          </div>
        </div>
        
      </div>
    </footer>
  );
}