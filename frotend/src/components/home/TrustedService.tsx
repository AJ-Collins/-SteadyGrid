import { motion } from 'framer-motion';
import { ArrowUpRight, Sun, Factory, BatteryCharging, Wind } from 'lucide-react';
import { Link } from '@inertiajs/react';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.55, delay },
});

export default function TrustedService() {
  const services = [
    { num: '01', title: 'Solar panels for home', icon: <Sun className="w-5 h-5 text-primary" />, desc: 'Efficient residential solar systems tailored for every roof.' },
    { num: '02', title: 'Solar panels for industry', icon: <Factory className="w-5 h-5 text-primary" />, desc: 'Large-scale installations reducing operational costs by up to 40%.' },
    { num: '03', title: 'Solar panels for chargers', icon: <BatteryCharging className="w-5 h-5 text-primary" />, desc: 'EV-ready charging infrastructure powered entirely by solar.' },
    { num: '04', title: 'Wind power generator', icon: <Wind className="w-5 h-5 text-primary" />, desc: 'Onshore and offshore turbines with predictive maintenance.' },
  ];

  return (
    <section className="py-12 md:py-16 bg-white rounded-xl shadow-sm">
      <div className="max-w-[1280px] mx-auto px-4 md:px-6 lg:px-10 flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
        {/* Left column */}
        <div className="w-full lg:w-1/2">
          <motion.span {...fadeUp()} className="inline-block text-primary text-sm font-semibold tracking-wider uppercase mb-4">
            What We Do
          </motion.span>
          <motion.h2
            {...fadeUp(0.1)}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-heading mb-5"
          >
            Trusted service,{' '}
            <span className="text-text-muted font-normal">
              for your
              <br />
              various needs
            </span>
          </motion.h2>

          <motion.p {...fadeUp(0.15)} className="text-text-muted leading-relaxed mb-8 max-w-md">
            Whether you need residential panels or industrial wind turbines, our engineers design,
            install, and maintain systems that perform for decades.
          </motion.p>

          <motion.div {...fadeUp(0.2)} className="mb-8">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-primary-text font-bold py-3 px-6 rounded-lg transition-all shadow-sm"
            >
              Get in touch
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {services.map((s, i) => (
              <motion.div
                key={i}
                {...fadeUp(0.08 * i)}
                className="p-5 md:p-6 rounded-xl border border-border/50 hover:border-primary/50 hover:bg-primary/5 transition-all group cursor-pointer"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs text-text-muted font-mono">{s.num}</span>
                  <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    {s.icon}
                  </div>
                </div>
                <h3 className="text-base md:text-lg font-bold text-text-heading mb-2 leading-snug group-hover:text-primary transition-colors">
                  {s.title}
                </h3>
                <p className="text-xs text-text-muted leading-relaxed mb-4">{s.desc}</p>
                <Link
                  href={`/services/${s.num}`}
                  className="text-xs font-semibold text-text-heading underline decoration-1 underline-offset-4 group-hover:text-primary transition-colors"
                >
                  View Details
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right column — image */}
        <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7 }}
            className="relative rounded-xl overflow-hidden h-[300px] md:h-[400px] lg:h-[500px]"
          >
            <img
              src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=2072&auto=format&fit=crop"
              alt="Worker carrying solar panel"
              className="w-full h-full object-cover"
            />
            {/* Floating stat badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-md"
            >
              <span className="text-2xl md:text-3xl font-bold text-text-heading block">98%</span>
              <span className="text-xs text-text-muted">Client satisfaction rate</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
