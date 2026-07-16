import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { Link } from '@inertiajs/react';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.55, delay },
});

export default function CaseStudy() {
  const tabs = [
    { label: 'Electric car charging station', active: true },
    { label: 'Residential resources', active: false },
    { label: 'Wind power for industry', active: false },
  ];

  return (
    <section className="py-12 md:py-16 bg-background">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8 lg:px-16">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-12">
          <motion.span {...fadeUp()} className="inline-block text-primary text-sm font-semibold tracking-wider uppercase mb-4">
            Case Studies
          </motion.span>
          <motion.h2
            {...fadeUp(0.1)}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-heading mb-5"
          >
            See how we solve
            <br />
            problems,{' '}
            <span className="text-text-muted font-normal">right on target</span>
          </motion.h2>
          <motion.p {...fadeUp(0.18)} className="text-text-muted leading-relaxed max-w-xl mx-auto">
            Real-world deployments that transformed our clients' energy infrastructure and bottom line.
          </motion.p>
        </div>

        {/* Main card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7 }}
          className="bg-white rounded-xl p-6 md:p-8 flex flex-col-reverse lg:flex-row gap-8 lg:gap-12 items-center shadow-md"
        >
          {/* Left: testimonial */}
          <div className="w-full lg:w-1/2">
            <div className="flex items-center gap-1 mb-6">
              <Quote className="w-8 h-8 text-primary/30 mr-2" />
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-primary text-primary" />
              ))}
            </div>

            <h3 className="text-2xl md:text-3xl font-bold text-text-heading mb-6">Medtronic</h3>

            <p className="text-base md:text-lg text-text-muted italic leading-relaxed mb-8">
              "We partnered with SteadyGrid to power all of our EV charging stations across three
              continents. Their turnkey solar installations reduced our grid dependency by 85% and
              cut operating costs dramatically. The monitoring dashboard gives us real-time visibility
              into every station."
            </p>

            <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-lg">
                JK
              </div>
              <div>
                <p className="text-sm font-semibold text-text-heading">Jennifer Kennedy</p>
                <p className="text-xs text-text-muted">Chief Technology Officer, Medtronic</p>
              </div>
            </div>

            <Link
              href="/case-studies/medtronic"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-primary-text font-bold py-3 px-6 rounded-lg transition-all shadow-sm"
            >
              View Full Case Study
            </Link>
          </div>

          {/* Right: image + overlay stats */}
          <div className="w-full lg:w-1/2 h-[250px] md:h-[350px] relative mt-6 lg:mt-0">
            <div className="w-full h-full rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1592833159155-c62df1b65634?q=80&w=2070&auto=format&fit=crop"
                alt="Solar canopy structure"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Stats overlay */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="absolute -bottom-4 -right-2 md:bottom-4 md:right-4 bg-white/95 backdrop-blur-sm rounded-xl p-3 md:p-4 shadow-lg flex gap-4"
            >
              <div className="text-center">
                <span className="text-xl md:text-2xl font-bold text-text-heading block">85%</span>
                <span className="text-[10px] md:text-xs text-text-muted">Grid reduction</span>
              </div>
              <div className="w-px bg-border"></div>
              <div className="text-center">
                <span className="text-xl md:text-2xl font-bold text-primary block">3</span>
                <span className="text-[10px] md:text-xs text-text-muted">Continents</span>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Tab-style pagination */}
        <motion.div {...fadeUp(0.2)} className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 mt-10 md:mt-14">
          {tabs.map((tab, i) => (
            <button
              key={i}
              className={`flex flex-col items-center gap-2 group cursor-pointer transition-all ${
                tab.active ? '' : 'opacity-60 hover:opacity-100'
              }`}
            >
              <div
                className={`h-1 w-20 md:w-24 rounded-full transition-colors ${
                  tab.active ? 'bg-primary' : 'bg-border group-hover:bg-primary/40'
                }`}
              ></div>
              <span
                className={`text-xs font-semibold transition-colors ${
                  tab.active ? 'text-text-heading' : 'text-text-muted group-hover:text-text-heading'
                }`}
              >
                {tab.label}
              </span>
            </button>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
