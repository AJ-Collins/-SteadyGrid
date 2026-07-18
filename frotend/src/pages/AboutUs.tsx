import { useState, useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';
import {
    BatteryCharging,
    Sun,
    Fuel,
    Thermometer,
    MapPin,
    Mail,
} from 'lucide-react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import PageHeader from '../components/common/PageHeader';

const stats = [
    { value: 2017, label: 'Founded', suffix: '' },
    { value: 5, label: 'Users worldwide', suffix: 'M+' },
    { value: 150, label: 'Regions served', suffix: '+' },
    { value: 3, label: 'Global headquarters', suffix: '' },
];

const values = [
    { letter: 'F', word: 'Flexible', description: 'Power that adapts to home, outdoor, and off-grid life.' },
    { letter: 'I', word: 'Innovative', description: 'Self-developed battery and software technology.' },
    { letter: 'R', word: 'Reliable', description: 'Engineered for real-world, everyday dependability.' },
    { letter: 'S', word: 'Simple', description: 'Straightforward setup, control, and everyday use.' },
    { letter: 'T', word: 'Thorough', description: 'Complete systems, from solar input to last-mile output.' },
];

const ecosystem = [
    {
        icon: BatteryCharging,
        title: 'Portable power stations',
        description: 'RIVER, DELTA, and TRAIL series covering everyday backup to whole-home power.',
    },
    {
        icon: Sun,
        title: 'Solar panels',
        description: 'Portable, rigid, and bifacial panels from 45W to 400W for any setup.',
    },
    {
        icon: Fuel,
        title: 'Smart generators',
        description: 'Dual-fuel backup generators with real-time app monitoring and alerts.',
    },
    {
        icon: Thermometer,
        title: 'Off-grid living',
        description: 'GLACIER coolers and WAVE air conditioning built for outdoor and mobile life.',
    },
];

const offices = [
    { country: 'United States', role: 'Global headquarters' },
    { country: 'Germany', role: 'European headquarters' },
    { country: 'Japan', role: 'Asia-Pacific headquarters' },
];

function useCountUp(target: number, inView: boolean, duration = 1400) {
    const [value, setValue] = useState(0);
    useEffect(() => {
        if (!inView) return;
        let start: number | null = null;
        let frame: number;
        const step = (t: number) => {
            if (start === null) start = t;
            const progress = Math.min((t - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setValue(Math.round(eased * target));
            if (progress < 1) frame = requestAnimationFrame(step);
        };
        frame = requestAnimationFrame(step);
        return () => cancelAnimationFrame(frame);
    }, [inView, target, duration]);
    return value;
}

const StatCard = ({
  stat,
  inView,
  index,
  total,
}: {
  stat: (typeof stats)[number];
  inView: boolean;
  index: number;
  total: number;
}) => {
  const count = useCountUp(stat.value, inView);

  return (
    <div
      className={`
        bg-white p-6 md:p-8 flex flex-col gap-1
        ${
          index === 0
            ? "rounded-t-md lg:rounded-t-none lg:rounded-l-md"
            : index === total - 1
            ? "rounded-b-md lg:rounded-b-none lg:rounded-r-md"
            : ""
        }
      `}
    >
      <span className="text-3xl md:text-4xl font-black text-[#0B1525] tracking-tight tabular-nums">
        {count}
        {stat.suffix}
      </span>

      <span className="text-xs md:text-sm text-gray-500">
        {stat.label}
      </span>
    </div>
  );
};

const Eyebrow = ({ children }: { children: React.ReactNode }) => (
    <span className="text-xs font-bold uppercase tracking-widest text-gray-500">{children}</span>
);

export default function AboutUs() {
    const statsRef = useRef(null);
    const statsInView = useInView(statsRef, { once: true, margin: '-100px' });

    return (
        <div className="min-h-screen bg-white font-sans flex flex-col">
            <Navbar />

            <PageHeader
                title="About Us"
                breadcrumbs={[
                    { label: 'Home', href: '/' },
                    { label: 'About' }
                ]}
                imageUrl="https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=1600&q=80"
            />

            <main className="flex-1 max-w-[1440px] w-full mx-auto px-4 md:px-6 py-8 md:py-12 flex flex-col gap-8">

                {/* ── Mission statement ── */}
                <section className="border border-gray-200 bg-white px-6 md:px-12 py-10 md:py-16 rounded-md">
                    <div className="max-w-3xl">
                        <Eyebrow>Since 2017</Eyebrow>
                        <h1 className="text-3xl md:text-5xl font-black text-[#0B1525] tracking-tight mt-3 mb-6 leading-tight">
                            Power a new world.
                        </h1>
                        <p className="text-sm md:text-base text-gray-500 leading-relaxed">
                            EcoFlow is a leading provider of eco-friendly energy solutions. What began as a
                            commitment to be the first in flexible, innovative, reliable, simple, and thorough
                            power has grown into a global energy company serving individuals and families at
                            home, outdoors, and on the go.
                        </p>
                    </div>
                </section>

                {/* ── Stats strip ── */}
                <section
                    ref={statsRef}
                    className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-gray-200 border border-gray-200 rounded-md overflow-hidden"
                    >
                    {stats.map((stat, index) => (
                        <StatCard
                        key={stat.label}
                        stat={stat}
                        inView={statsInView}
                        index={index}
                        total={stats.length}
                        />
                    ))}
                </section>

                {/* ── Narrative + image ── */}
                <section className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-stretch">
                    <div className="flex-1 border border-gray-200 p-6 md:p-10 flex flex-col justify-center rounded-md">
                        <Eyebrow>Who we are</Eyebrow>
                        <h2 className="text-xl md:text-2xl font-black text-[#0B1525] tracking-tight mt-3 mb-4">
                            A trusted energy company, built for the real world.
                        </h2>
                        <p className="text-sm md:text-base text-gray-500 leading-relaxed">
                            EcoFlow has become a reliable and trusted energy company for individuals and
                            families across the world, providing accessible and renewable power solutions
                            for homes, outdoors, and off-grid living. With operational headquarters in the
                            USA, Germany, and Japan, EcoFlow has empowered more than 5 million users in
                            over 150 regions worldwide.
                        </p>
                    </div>
                    <div className="flex-1 min-h-[280px] lg:min-h-0">
                        <img
                            src="https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1200&q=80"
                            alt="Home powered by EcoFlow energy solutions at dusk"
                            className="w-full h-full object-cover rounded-md"
                        />
                    </div>
                </section>

                {/* ── Values ── */}
                <section className="border border-gray-200 bg-white px-6 md:px-10 py-8 md:py-10 rounded-md">
                    <Eyebrow>What guides us</Eyebrow>
                    <h2 className="text-xl md:text-2xl font-black text-[#0B1525] tracking-tight mt-3 mb-6">
                        First to be F.I.R.S.T.
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-px bg-gray-200 border border-gray-200">
                        {values.map((v) => (
                            <div key={v.word} className="bg-white p-5 flex flex-col gap-2">
                                <span className="text-2xl font-black text-[#0B1525]">{v.letter}</span>
                                <span className="text-sm font-bold text-[#0B1525]">{v.word}</span>
                                <p className="text-xs text-gray-500 leading-relaxed">{v.description}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* ── Product ecosystem ── */}
                <section>
                    <div className="mb-4">
                        <Eyebrow>What we build</Eyebrow>
                        <h2 className="text-xl md:text-2xl font-black text-[#0B1525] tracking-tight mt-3">
                            One ecosystem, every kind of power.
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-gray-200 border border-gray-200">
                        {ecosystem.map(({ icon: Icon, title, description }) => (
                            <div key={title} className="bg-white p-6 flex flex-col gap-4">
                                <div className="w-10 h-10 bg-[#0B1525] flex items-center justify-center flex-shrink-0">
                                    <Icon className="w-5 h-5 text-white" />
                                </div>
                                <div>
                                    <h3 className="text-sm font-bold text-[#0B1525] mb-1">{title}</h3>
                                    <p className="text-xs text-gray-500 leading-relaxed">{description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* ── Global presence ── */}
                <section className="border border-gray-200 bg-white px-6 md:px-10 py-8 md:py-10 rounded-md">
                    <Eyebrow>Where we operate</Eyebrow>
                    <h2 className="text-xl md:text-2xl font-black text-[#0B1525] tracking-tight mt-3 mb-6">
                        Headquartered across three continents.
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-gray-200 border border-gray-200">
                        {offices.map((office) => (
                            <div key={office.country} className="bg-white p-6 flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-[#0B1525] flex-shrink-0 mt-0.5" />
                                <div>
                                    <p className="text-sm font-bold text-[#0B1525]">{office.country}</p>
                                    <p className="text-xs text-gray-500 mt-0.5">{office.role}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* ── Contact CTA ── */}
                <section className="border border-gray-200 rounded-md bg-gray-50 px-6 md:px-10 py-8 md:py-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                    <div>
                        <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">
                            Become our partner
                        </p>
                        <h2 className="text-lg md:text-xl font-black text-[#0B1525] tracking-tight">
                            Let's power a new world, together.
                        </h2>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-3">
                        <a
                            href="mailto:sales.rest@ecoflow.com"
                            className="inline-flex items-center justify-center gap-2 bg-[#0B1525] text-white text-xs font-bold py-3 px-6 hover:bg-[#1a2d4a] transition-colors duration-150"
                        >
                            <Mail className="w-4 h-4" />
                            sales.rest@ecoflow.com
                        </a>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}