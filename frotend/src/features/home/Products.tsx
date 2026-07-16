import { motion } from 'framer-motion';
import { ShoppingCart, Zap, Battery, Sun, ArrowRight } from 'lucide-react';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-40px' },
  transition: { duration: 0.5, delay },
});

export default function Products() {
  const products = [
    {
      id: 'sg-pro-400',
      name: 'SteadyGrid Pro 400W',
      category: 'Solar Panel',
      price: '$299',
      image: 'https://images.unsplash.com/photo-1509391366360-1f9509eebadf?q=80&w=2070&auto=format&fit=crop',
      features: [
        { icon: <Sun className="w-4 h-4 text-primary" />, text: '22% Efficiency' },
        { icon: <Zap className="w-4 h-4 text-primary" />, text: '400W Output' }
      ]
    },
    {
      id: 'sg-max-600',
      name: 'SteadyGrid Max 600W',
      category: 'Commercial Panel',
      price: '$449',
      image: 'https://images.unsplash.com/photo-1613665813446-82a78c468a1d?q=80&w=2058&auto=format&fit=crop',
      features: [
        { icon: <Sun className="w-4 h-4 text-primary" />, text: '24% Efficiency' },
        { icon: <Zap className="w-4 h-4 text-primary" />, text: '600W Output' }
      ]
    },
    {
      id: 'sg-powerwall',
      name: 'SteadyGrid PowerBank',
      category: 'Home Storage',
      price: '$4,500',
      image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2070&auto=format&fit=crop',
      features: [
        { icon: <Battery className="w-4 h-4 text-primary" />, text: '10kWh Capacity' },
        { icon: <Zap className="w-4 h-4 text-primary" />, text: 'Smart Grid Sync' }
      ]
    },
    {
      id: 'sg-inverter',
      name: 'Hybrid Smart Inverter',
      category: 'Inverter',
      price: '$1,200',
      image: 'https://images.unsplash.com/photo-1559056961-1f4dbbf9d36a?q=80&w=2070&auto=format&fit=crop',
      features: [
        { icon: <Zap className="w-4 h-4 text-primary" />, text: '98% Conversion' },
        { icon: <Battery className="w-4 h-4 text-primary" />, text: 'Battery Ready' }
      ]
    }
  ];

  return (
    <section className="py-12 md:py-16 bg-background">
      <div className="max-w-[1280px] mx-auto px-4 md:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row items-end justify-between gap-6 mb-10 md:mb-12">
          <motion.div {...fadeUp()} className="max-w-2xl">
            <span className="inline-block text-primary text-sm font-semibold tracking-wider uppercase mb-3">
              Top Selling Products
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-text-heading">
              Power your future with our <br className="hidden md:block" />
              premium hardware
            </h2>
          </motion.div>
          <motion.button 
            {...fadeUp(0.1)}
            className="flex items-center gap-2 text-text-heading font-semibold hover:text-primary transition-colors border-b-2 border-transparent hover:border-primary pb-1"
          >
            View full catalog <ArrowRight className="w-4 h-4" />
          </motion.button>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {products.map((product, index) => (
            <motion.div 
              key={product.id}
              {...fadeUp(0.1 * index)}
              className="bg-white rounded-xl overflow-hidden group hover:shadow-lg transition-all duration-300 border border-border/40 flex flex-col h-full"
            >
              {/* Product Image */}
              <div className="relative h-48 overflow-hidden bg-surface-low">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider text-text-heading">
                  {product.category}
                </div>
              </div>

              {/* Product Info */}
              <div className="p-5 flex flex-col flex-1">
                <h3 className="font-bold text-lg text-text-heading mb-1 group-hover:text-primary transition-colors">
                  {product.name}
                </h3>
                <div className="text-xl font-bold text-text-heading mb-4">
                  {product.price}
                </div>

                {/* Features list */}
                <div className="space-y-2 mb-6 flex-1">
                  {product.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-text-muted">
                      {feature.icon}
                      <span>{feature.text}</span>
                    </div>
                  ))}
                </div>

                {/* Add to cart btn */}
                <button className="w-full py-2.5 rounded-lg border border-border text-text-heading font-medium text-sm flex items-center justify-center gap-2 hover:bg-primary hover:border-primary hover:text-primary-text transition-all">
                  <ShoppingCart className="w-4 h-4" />
                  Add to Cart
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
