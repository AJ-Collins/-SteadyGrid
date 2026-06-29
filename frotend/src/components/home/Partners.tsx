import { motion } from 'framer-motion';
import { CheckCircle, Leaf, Zap, Award, TrendingUp } from 'lucide-react';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.55, delay },
});

export default function Partners() {
  const partners = [
    { name: 'Trivago', tagline: 'Hospitality' },
    { name: 'Bina Karya', tagline: 'Construction' },
    { name: 'Business', tagline: 'Enterprise' },
    { name: 'Healthcare', tagline: 'Medical' },
    { name: 'Medtronic', tagline: 'Technology' },
  ];

  const highlights = [
    {
      icon: <Leaf className="w-5 h-5 text-primary" />,
      title: '100% Renewable',
      desc: 'Every project powered by fully renewable energy sources.',
    },
    {
      icon: <Zap className="w-5 h-5 text-primary" />,
      title: 'Fast Deployment',
      desc: 'Average installation completed within 14 business days.',
    },
    {
      icon: <Award className="w-5 h-5 text-primary" />,
      title: 'ISO 9001 Certified',
      desc: 'Internationally recognised quality management systems.',
    },
    {
      icon: <TrendingUp className="w-5 h-5 text-primary" />,
      title: '30% Cost Savings',
      desc: 'Clients reduce energy expenditure by up to 30% year-on-year.',
    },
  ];

  return (
    <section className="py-12 md:py-16 bg-background overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8 lg:px-16">
        {/* Headline + paragraph row */}
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-12 mb-10 md:mb-12">
          <motion.div className="w-full md:w-1/2" {...fadeUp()}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-heading leading-tight">
              Focusing on quality,{' '}
              <span className="text-text-muted font-normal">
                we
                <br />
                maintain customer trust
              </span>
            </h2>
          </motion.div>
          <motion.div className="w-full md:w-1/2" {...fadeUp(0.15)}>
            <p className="text-text-muted leading-relaxed mb-6">
              We ensure that every installation our team does is strictly of excellent quality. We provide
              best durable solutions for an environmentally friendly and renewable future.
            </p>
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              {['10+ year warranty', '24/7 monitoring', 'Custom solutions'].map((tag) => (
                <span key={tag} className="flex items-center gap-2 text-sm text-text-heading font-medium">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Partner circles */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 md:gap-4 mb-12 md:mb-16"
        >
          {partners.map((p, i) => (
            <motion.div
              key={i}
              {...fadeUp(0.08 * i)}
              className="w-[130px] h-[130px] md:w-[150px] md:h-[150px] rounded-xl bg-white flex flex-col items-center justify-center shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 group cursor-pointer"
            >
              <span className="font-heading font-bold text-lg md:text-xl text-text-heading/80 group-hover:text-primary transition-colors">
                {p.name}
              </span>
              <span className="text-xs text-text-muted mt-1">{p.tagline}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Highlight cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {highlights.map((h, i) => (
            <motion.div
              key={i}
              {...fadeUp(0.1 * i)}
              className="bg-white rounded-xl p-5 md:p-6 hover:shadow-md transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                {h.icon}
              </div>
              <h4 className="text-base font-bold text-text-heading mb-2">{h.title}</h4>
              <p className="text-sm text-text-muted leading-relaxed">{h.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
