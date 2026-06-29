import { Link } from '@inertiajs/react';
import { Search, ShoppingCart, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Features', href: '/features' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8 lg:px-16">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-xl bg-primary flex items-center justify-center text-primary-text font-bold text-xl group-hover:shadow-[0_0_15px_var(--accent-glow)] transition-all">
              S
            </div>
            <span className="font-heading font-bold text-xl text-text-heading">SteadyGrid</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className="text-text-muted hover:text-primary font-medium transition-colors text-sm"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <button className="p-2 text-text-muted hover:text-primary transition-colors">
              <Search className="w-5 h-5" />
            </button>
            <button className="p-2 text-text-muted hover:text-primary transition-colors">
              <ShoppingCart className="w-5 h-5" />
            </button>
            <div className="w-px h-6 bg-border mx-2"></div>
            <Link href="/login" className="text-text-heading font-medium hover:text-primary transition-colors px-2">
              Login
            </Link>
            <Link href="/register" className="sg-btn-primary rounded-full px-6 py-2 text-sm">
              Get in touch
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-4">
             <button className="p-2 text-text-muted">
              <ShoppingCart className="w-5 h-5" />
            </button>
            <button 
              className="p-2 text-text-heading"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="lg:hidden absolute top-20 left-0 right-0 bg-white border-b border-border shadow-lg"
          >
            <div className="flex flex-col px-4 py-6 gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-text-heading font-medium text-lg px-4 py-2 hover:bg-background rounded-xl transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="h-px bg-border my-2"></div>
              <div className="flex items-center justify-between px-4">
                <Link href="/login" className="text-text-heading font-medium">Login</Link>
                <Link href="/register" className="sg-btn-primary rounded-full px-6 py-2">Get in touch</Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}