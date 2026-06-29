import { motion } from 'framer-motion';
import { ArrowRight, LayoutGrid, Users, Zap, ShieldCheck } from 'lucide-react';
import { Link } from '@inertiajs/react';

const stats = [
  { icon: LayoutGrid, value: '10+',  label: 'Projects Completed' },
  { icon: Users,      value: '50+',  label: 'Happy Clients' },
  { icon: Zap,        value: '1MW+', label: 'Energy Delivered' },
  { icon: ShieldCheck,value: '100%', label: 'Commitment to Quality' },
];

export default function Hero() {
  return (
    <section
      className="relative w-full overflow-hidden mt-20"
      style={{ minHeight: '500px', maxHeight: '800px', height: 'calc(100vh - 80px)' }}
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2072&auto=format&fit=crop")',
        }}
      />

      {/* Dark left overlay for text legibility */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/10 to-black/6" />

      {/* Content wrapper */}
      <div className="relative h-full flex flex-col justify-between max-w-[1280px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16">

        {/* ── Hero copy — vertically centred in upper 80% ── */}
        <div className="flex-1 flex flex-col justify-center pt-6 pb-4">

          {/* Eyebrow */}
          <motion.p
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            style={{
              color: 'var(--primary)',        /* green from theme */
              margin: '0 0 14px 0',
              fontSize: 'clamp(10px, 1.2vw, 13px)',
              fontWeight: 700,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
            }}
          >
            Powering Today. Sustaining Tomorrow.
          </motion.p>

          {/* Headline */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.12 }}
          >
            <h1
              style={{
                margin: 0,
                lineHeight: 1.05,
                letterSpacing: '-0.03em',
                fontSize: 'clamp(42px, 7.5vw, 88px)',
                fontWeight: 900,
                textShadow: '0 2px 24px rgba(0,0,0,0.5)',
              }}
            >
              <span style={{ color: '#ffffff' }}>Smart Energy</span>
              <br />
              <span style={{ color: 'var(--primary)' }}>Sustainable Future</span>
            </h1>
          </motion.div>

          {/* Supporting text */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.28 }}
            style={{
              color: 'rgba(255,255,255,0.75)',
              margin: 'clamp(14px,2vw,22px) 0 clamp(22px,3vw,36px)',
              maxWidth: '420px',
              lineHeight: 1.65,
              fontSize: 'clamp(13px, 1.5vw, 15px)',
              textShadow: '0 1px 8px rgba(0,0,0,0.5)',
            }}
          >
            We deliver reliable, affordable and clean energy solutions
            for homes, businesses and industries.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.42 }}
            className="flex flex-wrap items-center gap-3 sm:gap-4"
          >
            <Link
              href="/services"
              className="sg-btn-primary inline-flex items-center gap-2"
              style={{ fontSize: '13px', padding: '13px 28px', borderRadius: '4px' }}
            >
              Our Solutions
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/projects"
              className="inline-flex items-center gap-2 font-bold"
              style={{
                fontSize: '13px',
                padding: '11px 26px',
                borderRadius: '4px',
                border: '2px solid rgba(255,255,255,0.8)',
                color: '#ffffff',
                background: 'transparent',
                letterSpacing: '0.01em',
                transition: 'border-color 0.2s, color 0.2s',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'var(--primary)';
                e.currentTarget.style.color = 'var(--primary)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.8)';
                e.currentTarget.style.color = '#ffffff';
              }}
            >
              Explore Projects
            </Link>
          </motion.div>
        </div>

        {/* ── Stats bar — pinned to bottom ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.6 }}
          className="flex flex-wrap items-center gap-0 mb-6 sm:mb-8"
          style={{
            background: 'rgba(10,20,30,0.72)',
            backdropFilter: 'blur(12px)',
            borderTop: '1px solid rgba(255,255,255,0.08)',
            borderRadius: '6px',
            overflow: 'hidden',
          }}
        >
          {stats.map(({ icon: Icon, value, label }, i) => (
            <div
              key={i}
              className="flex items-center gap-3 flex-1 min-w-[140px]"
              style={{
                padding: 'clamp(14px,2vw,20px) clamp(16px,2.5vw,28px)',
                borderRight: i < stats.length - 1 ? '1px solid rgba(255,255,255,0.1)' : 'none',
              }}
            >
              <Icon
                style={{ color: 'var(--primary)', flexShrink: 0 }}
                className="w-5 h-5 sm:w-6 sm:h-6"
              />
              <div>
                <p style={{ color: '#ffffff', fontWeight: 800, fontSize: 'clamp(18px,2.5vw,26px)', margin: 0, lineHeight: 1.1 }}>
                  {value}
                </p>
                <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: 'clamp(10px,1.1vw,12px)', margin: 0, marginTop: '2px' }}>
                  {label}
                </p>
              </div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}