import { motion } from 'framer-motion';
import {
  ShieldCheck,
  Settings,
  Headset,
  BookOpen,
  Truck,
  Cpu,
  ArrowRight,
} from 'lucide-react';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.5, delay },
});

export default function SolutionsGrid() {
  const solutions = [
    {
      icon: <ShieldCheck className="w-6 h-6 text-primary" />,
      title: 'Layered security',
      description:
        'Multi-tier protection systems that safeguard every unit we manufacture and deliver to clients worldwide.',
    },
    {
      icon: <Settings className="w-6 h-6 text-primary" />,
      title: 'Quality control of each part',
      description:
        'Every component passes through 12-point quality inspection before final assembly and dispatch.',
    },
    {
      icon: <Headset className="w-6 h-6 text-primary" />,
      title: 'Reliable customer service',
      description:
        'Our support team is available 24/7 with dedicated account managers for enterprise clients.',
    },
    {
      icon: <BookOpen className="w-6 h-6 text-primary" />,
      title: 'Maintenance manual book',
      description:
        'Comprehensive digital and printed guides so your team can perform routine maintenance independently.',
    },
    {
      icon: <Truck className="w-6 h-6 text-primary" />,
      title: 'Delivered safely',
      description:
        'Climate-controlled logistics and tamper-proof packaging ensure every unit arrives flawless.',
    },
    {
      icon: <Cpu className="w-6 h-6 text-primary" />,
      title: 'Based on artificial intelligence',
      description:
        'Real-time AI monitoring and predictive analytics let you manage every unit from your phone.',
    },
  ];

  return (
    <section className="py-12 md:py-16 bg-background">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8 lg:px-16">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-12">
          <motion.span
            {...fadeUp()}
            className="inline-block text-primary text-sm font-semibold tracking-wider uppercase mb-4"
          >
            Our Capabilities
          </motion.span>
          <motion.h2
            {...fadeUp(0.1)}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-heading mb-5"
          >
            We offer quality,{' '}
            <span className="text-text-muted font-normal">
              with the
              <br />
              best materials and service
            </span>
          </motion.h2>
          <motion.p {...fadeUp(0.2)} className="text-text-muted leading-relaxed max-w-xl mx-auto">
            From raw material sourcing to final delivery, every step is engineered for durability,
            efficiency, and a greener planet.
          </motion.p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {solutions.map((s, i) => (
            <motion.div
              key={i}
              {...fadeUp(0.08 * i)}
              className="bg-white rounded-xl p-6 hover:shadow-md transition-all duration-300 group cursor-pointer"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-7 group-hover:bg-primary/20 transition-colors">
                {s.icon}
              </div>
              <h3 className="text-lg md:text-xl font-bold text-text-heading mb-3 group-hover:text-primary transition-colors">
                {s.title}
              </h3>
              <p className="text-sm text-text-muted leading-relaxed mb-6">{s.description}</p>
              <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-text-heading group-hover:text-primary transition-colors">
                Learn more <ArrowRight className="w-4 h-4" />
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
