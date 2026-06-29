import { Link } from '@inertiajs/react';
import { Globe, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-surface text-white mt-12 overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-4 md:px-6 lg:px-8 pt-12 pb-6">
        
        {/* Top CTA Section */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between pb-10 border-b border-white/10 gap-6">
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              It's time to support zero pollution, with renewable resources
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 text-sm text-secondary">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-success/20 flex items-center justify-center">
                  <div className="w-2.5 h-2.5 rounded-full bg-success"></div>
                </div>
                <span>Experienced for more than 10 years</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-success/20 flex items-center justify-center">
                  <div className="w-2.5 h-2.5 rounded-full bg-success"></div>
                </div>
                <span>Support for the latest technology</span>
              </div>
            </div>
          </div>
          
          <div className="w-full md:w-auto flex flex-col items-start md:items-end gap-4">
            <p className="text-sm text-secondary max-w-sm md:text-right leading-relaxed mb-2">
              By increasing the effectiveness and efficiency of electricity use, the use of renewable resources is very profitable for all industrial services.
            </p>
            <Link href="/contact" className="bg-white text-surface hover:bg-primary transition-colors px-5 py-2.5 rounded-lg font-semibold flex items-center gap-2">
              Get in touch
              <span className="text-xl leading-none">↗</span>
            </Link>
          </div>
        </div>

        {/* Navigation & Social Links */}
        <div className="flex flex-col md:flex-row items-center justify-between py-6 gap-4 border-b border-white/10">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-xl bg-primary flex items-center justify-center text-primary-text font-bold text-xl group-hover:shadow-[0_0_15px_var(--accent-glow)] transition-all">
              S
            </div>
            <span className="font-heading font-bold text-2xl text-white">SteadyGrid</span>
          </Link>

          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
            <Link href="/" className="text-sm text-secondary hover:text-white transition-colors">Home</Link>
            <Link href="/about" className="text-sm text-secondary hover:text-white transition-colors">About Us</Link>
            <Link href="/features" className="text-sm text-secondary hover:text-white transition-colors">Features</Link>
            <Link href="/services" className="text-sm text-secondary hover:text-white transition-colors">Services</Link>
            <Link href="/contact" className="text-sm text-secondary hover:text-white transition-colors">Contact</Link>
          </div>

          <div className="flex items-center gap-3">
            <a href="#" className="w-8 h-8 rounded-lg bg-white/5 hover:bg-primary hover:text-surface transition-all flex items-center justify-center text-white">
              <Globe className="w-4 h-4" />
            </a>
            <a href="#" className="w-8 h-8 rounded-lg bg-white/5 hover:bg-primary hover:text-surface transition-all flex items-center justify-center text-white">
              <Mail className="w-4 h-4" />
            </a>
            <a href="#" className="w-8 h-8 rounded-lg bg-white/5 hover:bg-primary hover:text-surface transition-all flex items-center justify-center text-white">
              <Phone className="w-4 h-4" />
            </a>
            <a href="#" className="w-8 h-8 rounded-lg bg-white/5 hover:bg-primary hover:text-surface transition-all flex items-center justify-center text-white">
              <MapPin className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/40">
          <p>© 2026 SteadyGrid Inc. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}