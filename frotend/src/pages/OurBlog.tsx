import { useState } from 'react';
import { Calendar, Clock, ArrowRight, Mail } from 'lucide-react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import PageHeader from '../components/common/PageHeader';

const categories = ['All posts', 'Product updates', 'Off-grid living', 'Solar tips', 'Company news'];

const posts = [
    {
        title: 'Inside the DELTA Pro Ultra: month-long power security for your home',
        excerpt:
            'With up to 30kWh of expandable capacity and 6900W output, DELTA Pro Ultra is built to cover every appliance during extended outages.',
        category: 'Product updates',
        date: 'Jul 14, 2026',
        readTime: '6 min read',
        image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80',
        featured: true,
    },
    {
        title: 'How much solar panel do you actually need? A practical sizing guide',
        excerpt:
            'From the 45W portable panel to the 400W rigid panel, here is how to match panel wattage to your power station and daily needs.',
        category: 'Solar tips',
        date: 'Jul 8, 2026',
        readTime: '5 min read',
        image: 'https://images.unsplash.com/photo-1509395176047-4a66953fd231?w=800&q=80',
    },
    {
        title: '5 ways to keep your home running during a grid outage',
        excerpt:
            'Pairing a RIVER 3 series power station with fast UPS switchover keeps routers, fridges, and medical devices online automatically.',
        category: 'Off-grid living',
        date: 'Jun 30, 2026',
        readTime: '4 min read',
        image: 'https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=800&q=80',
    },
    {
        title: 'EcoFlow crosses 5 million users across 150 regions',
        excerpt:
            'A look back at how EcoFlow grew from a 2017 startup into a trusted energy company with headquarters in the USA, Germany, and Japan.',
        category: 'Company news',
        date: 'Jun 22, 2026',
        readTime: '3 min read',
        image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&q=80',
    },
    {
        title: 'GLACIER Classic: keeping food cold from -20°C to 20°C, anywhere',
        excerpt:
            'A dual-zone compressor cooler with a built-in battery means your food and drinks stay cold long after you leave the wall socket behind.',
        category: 'Product updates',
        date: 'Jun 15, 2026',
        readTime: '4 min read',
        image: 'https://images.unsplash.com/photo-1476234251651-f353703a034d?w=800&q=80',
    },
    {
        title: 'Charging on the road: getting the most from your 800W alternator charger',
        excerpt:
            'Top up 1kWh in just 1.3 hours while you drive. Here is how the 3-in-1 charger, maintainer, and booster keeps your battery in mint condition.',
        category: 'Off-grid living',
        date: 'Jun 4, 2026',
        readTime: '5 min read',
        image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800&q=80',
    },
    {
        title: 'Dual fuel, quiet power: what makes Smart Generator 3000/4000 different',
        excerpt:
            'Real-time CO, temperature, and fuel alerts, paired with app control, make backup generators safer and easier to live with.',
        category: 'Product updates',
        date: 'May 27, 2026',
        readTime: '5 min read',
        image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80',
    },
];

const Eyebrow = ({ children }: { children: React.ReactNode }) => (
    <span className="text-xs font-bold uppercase tracking-widest text-gray-500">{children}</span>
);

const CategoryBadge = ({ category }: { category: string }) => (
    <span className="inline-block text-[11px] font-bold uppercase tracking-widest text-[#0B1525] bg-gray-100 rounded-md px-2.5 py-1">
        {category}
    </span>
);

export default function OurBlog() {
    const [activeCategory, setActiveCategory] = useState('All posts');

    const filteredPosts = posts.filter(
        (post) => activeCategory === 'All posts' || post.category === activeCategory
    );
    const featuredPost = posts.find((post) => post.featured);
    const restPosts = filteredPosts.filter((post) => !post.featured);

    return (
        <div className="min-h-screen bg-white font-sans flex flex-col">
            <Navbar />

            <PageHeader
                title="Our Blog"
                breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Blog' }]}
                imageUrl="https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1600&q=80"
            />

            <main className="flex-1 max-w-[1440px] w-full mx-auto px-4 md:px-6 py-8 md:py-12 flex flex-col gap-8">

                {/* ── Intro ── */}
                <section className="max-w-3xl">
                    <Eyebrow>Stories & guides</Eyebrow>
                    <h1 className="text-3xl md:text-5xl font-black text-[#0B1525] tracking-tight mt-3 mb-4 leading-tight">
                        Power, explained.
                    </h1>
                    <p className="text-sm md:text-base text-gray-500 leading-relaxed">
                        Product deep dives, solar sizing guides, and stories from the EcoFlow team — everything
                        you need to get the most out of your power system.
                    </p>
                </section>

                {/* ── Category filter ── */}
                <section className="flex flex-wrap gap-2">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-md border transition-colors duration-150 ${
                                activeCategory === category
                                    ? 'bg-[#0B1525] text-white border-[#0B1525]'
                                    : 'bg-white text-gray-600 border-gray-200 hover:border-[#0B1525] hover:text-[#0B1525]'
                            }`}
                        >
                            {category}
                        </button>
                    ))}
                </section>

                {/* ── Featured post ── */}
                {featuredPost && activeCategory === 'All posts' && (
                    <section className="border border-gray-200 rounded-md overflow-hidden flex flex-col lg:flex-row">
                        <div className="lg:w-1/2 h-64 lg:h-auto">
                            <img
                                src={featuredPost.image}
                                alt={featuredPost.title}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="lg:w-1/2 p-6 md:p-10 flex flex-col justify-center gap-4">
                            <div className="flex items-center gap-3">
                                <CategoryBadge category={featuredPost.category} />
                                <span className="text-xs text-gray-400">Featured</span>
                            </div>
                            <h2 className="text-xl md:text-2xl font-black text-[#0B1525] tracking-tight leading-snug">
                                {featuredPost.title}
                            </h2>
                            <p className="text-sm text-gray-500 leading-relaxed">{featuredPost.excerpt}</p>
                            <div className="flex items-center gap-4 text-xs text-gray-400">
                                <span className="flex items-center gap-1.5">
                                    <Calendar className="w-3.5 h-3.5" />
                                    {featuredPost.date}
                                </span>
                                <span className="flex items-center gap-1.5">
                                    <Clock className="w-3.5 h-3.5" />
                                    {featuredPost.readTime}
                                </span>
                            </div>
                            <a
                                href="#"
                                className="inline-flex items-center gap-2 text-sm font-bold text-[#0B1525] hover:gap-3 transition-all duration-150 w-fit"
                            >
                                Read article <ArrowRight className="w-4 h-4" />
                            </a>
                        </div>
                    </section>
                )}

                {/* ── Post grid ── */}
                <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {restPosts.map((post) => (
                        <a
                            key={post.title}
                            href="#"
                            className="group border border-gray-200 rounded-md overflow-hidden flex flex-col hover:border-[#0B1525] transition-colors duration-150"
                        >
                            <div className="h-44 overflow-hidden">
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                            <div className="p-5 flex flex-col gap-3 flex-1">
                                <CategoryBadge category={post.category} />
                                <h3 className="text-sm md:text-base font-bold text-[#0B1525] leading-snug group-hover:underline">
                                    {post.title}
                                </h3>
                                <p className="text-xs text-gray-500 leading-relaxed flex-1">{post.excerpt}</p>
                                <div className="flex items-center gap-4 text-xs text-gray-400 pt-1">
                                    <span className="flex items-center gap-1.5">
                                        <Calendar className="w-3.5 h-3.5" />
                                        {post.date}
                                    </span>
                                    <span className="flex items-center gap-1.5">
                                        <Clock className="w-3.5 h-3.5" />
                                        {post.readTime}
                                    </span>
                                </div>
                            </div>
                        </a>
                    ))}
                </section>

                {restPosts.length === 0 && (
                    <section className="border border-gray-200 rounded-md bg-gray-50 p-10 text-center">
                        <p className="text-sm text-gray-500">No posts in this category yet — check back soon.</p>
                    </section>
                )}

                {/* ── Newsletter CTA ── */}
                <section className="border border-gray-200 rounded-md bg-gray-50 px-6 md:px-10 py-8 md:py-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                    <div>
                        <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">
                            Stay in the loop
                        </p>
                        <h2 className="text-lg md:text-xl font-black text-[#0B1525] tracking-tight">
                            Get new posts in your inbox.
                        </h2>
                    </div>
                    <form className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                        <input
                            type="email"
                            required
                            placeholder="you@company.com"
                            className="border border-gray-200 rounded-md px-4 py-3 text-sm text-[#0B1525] placeholder:text-gray-400 focus:outline-none focus:border-[#0B1525] transition-colors duration-150 w-full sm:w-64"
                        />
                        <button
                            type="submit"
                            className="inline-flex items-center justify-center gap-2 bg-[#0B1525] text-white text-xs font-bold py-3 px-6 rounded-md hover:bg-[#1a2d4a] transition-colors duration-150"
                        >
                            <Mail className="w-4 h-4" />
                            Subscribe
                        </button>
                    </form>
                </section>
            </main>

            <Footer />
        </div>
    );
}