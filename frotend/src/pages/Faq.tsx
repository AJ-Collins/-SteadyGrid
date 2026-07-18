import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Truck, RefreshCcw, ShieldCheck, MessageCircle } from 'lucide-react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import PageHeader from '../components/common/PageHeader';
import { faqData, type FaqItem } from './faqData';

const AccordionItem = ({
    item,
    isOpen,
    onClick,
}: {
    item: FaqItem;
    isOpen: boolean;
    onClick: () => void;
}) => (
    <div className="border-b border-gray-200 last:border-0">
        <button
            onClick={onClick}
            className="w-full flex justify-between items-center py-4 text-left group focus:outline-none"
        >
            <span
                className={`text-sm md:text-base font-semibold transition-colors duration-150 ${
                    isOpen
                        ? 'text-[#0B1525]'
                        : 'text-gray-700 group-hover:text-[#0B1525]'
                }`}
            >
                {item.question}
            </span>
            <ChevronDown
                className={`ml-4 flex-shrink-0 w-5 h-5 text-gray-400 transition-transform duration-300 ${
                    isOpen ? 'rotate-180 text-[#0B1525]' : 'group-hover:text-[#0B1525]'
                }`}
            />
        </button>
        <AnimatePresence initial={false}>
            {isOpen && (
                <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: 'easeInOut' }}
                    className="overflow-hidden"
                >
                    <p className="pb-5 pr-8 text-sm md:text-base text-gray-500 leading-relaxed">
                        {item.answer}
                    </p>
                </motion.div>
            )}
        </AnimatePresence>
    </div>
);

// ─── Highlight Card ──────────────────────────────────────────────────────────────
const HighlightCard = ({
    icon: Icon,
    title,
    description,
}: {
    icon: React.ElementType;
    title: string;
    description: string;
}) => (
    <div className="flex items-start gap-4 border border-gray-200 bg-white p-5">
        <div className="flex-shrink-0 w-10 h-10 bg-[#0B1525] flex items-center justify-center">
            <Icon className="w-5 h-5 text-white" />
        </div>
        <div>
            <h3 className="text-sm font-bold text-[#0B1525] mb-1">{title}</h3>
            <p className="text-xs text-gray-500 leading-relaxed">{description}</p>
        </div>
    </div>
);

export default function Faq() {
    const [openCategory, setOpenCategory] = useState<string>(faqData[0].title);
    const [openItems, setOpenItems] = useState<Record<string, string | null>>({
        [faqData[0].title]: faqData[0].items[0].question,
    });

    const toggleItem = (categoryTitle: string, question: string) => {
        setOpenItems(prev => ({
            ...prev,
            [categoryTitle]: prev[categoryTitle] === question ? null : question,
        }));
    };

    return (
        <div className="min-h-screen bg-white font-sans flex flex-col">
            <Navbar />

            <PageHeader
                title="Support & FAQ"
                breadcrumbs={[
                    { label: 'Home', href: '/' },
                    { label: 'Support' },
                ]}
                imageUrl="https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=1600&q=80"
            />

            <main className="flex-1 max-w-[1440px] w-full mx-auto px-4 md:px-6 py-8 md:py-12 flex flex-col gap-8">

                {/* Highlights strip */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-gray-200 border border-gray-200">
                    <HighlightCard
                        icon={Truck}
                        title="Fast Shipping"
                        description="1–3 business day processing for all in-stock products."
                    />
                    <HighlightCard
                        icon={RefreshCcw}
                        title="Easy Returns"
                        description="90-day return window for new and unused products."
                    />
                    <HighlightCard
                        icon={ShieldCheck}
                        title="Secure Warranty"
                        description="Coverage backed by licensed installation professionals."
                    />
                    <HighlightCard
                        icon={MessageCircle}
                        title="US-Based Support"
                        description="In-house technical support team ready to help you."
                    />
                </div>

                {/* FAQ Body — sidebar + accordion */}
                <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-start">

                    {/* ── Category Sidebar ── */}
                    <aside className="w-full lg:w-[240px] shrink-0 lg:sticky lg:top-24">
                        <div className="border border-gray-200">
                            <div className="px-4 py-3 border-b border-gray-200 bg-gray-50">
                                <span className="text-xs font-bold uppercase tracking-widest text-gray-500">
                                    Categories
                                </span>
                            </div>
                            <nav className="flex flex-col">
                                {faqData.map((category) => (
                                    <button
                                        key={category.title}
                                        onClick={() => {
                                            setOpenCategory(category.title);
                                            if (!openItems[category.title]) {
                                                setOpenItems(prev => ({
                                                    ...prev,
                                                    [category.title]: category.items[0].question,
                                                }));
                                            }
                                            if (window.innerWidth < 1024) {
                                                document
                                                    .getElementById('faq-content')
                                                    ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                                            }
                                        }}
                                        className={`text-left px-4 py-3 text-sm font-medium transition-colors duration-150 border-b border-gray-100 last:border-0 ${
                                            openCategory === category.title
                                                ? 'bg-[#0B1525] text-white'
                                                : 'text-gray-600 hover:bg-gray-50 hover:text-[#0B1525]'
                                        }`}
                                    >
                                        {category.title}
                                    </button>
                                ))}
                            </nav>
                        </div>

                        {/* Contact CTA */}
                        <div className="mt-4 border border-gray-200 bg-gray-50 p-4">
                            <p className="text-xs font-bold text-[#0B1525] mb-1">Still have questions?</p>
                            <p className="text-xs text-gray-500 mb-3">
                                Our experts are ready to help you find the right solution.
                            </p>
                            <a
                                href="tel:903-441-2090"
                                className="block w-full text-center bg-[#0B1525] text-white text-xs font-bold py-2 px-4 hover:bg-[#1a2d4a] transition-colors duration-150"
                            >
                                903-441-2090
                            </a>
                        </div>
                    </aside>

                    {/* ── Accordion Panel ── */}
                    <div id="faq-content" className="flex-1 min-w-0">
                        <AnimatePresence mode="wait">
                            {faqData.map(category => {
                                if (category.title !== openCategory) return null;
                                return (
                                    <motion.div
                                        key={category.title}
                                        initial={{ opacity: 0, y: 8 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -8 }}
                                        transition={{ duration: 0.2 }}
                                        className="border border-gray-200 bg-white"
                                    >
                                        {/* Panel header */}
                                        <div className="px-6 py-4 border-b border-gray-200 bg-gray-50">
                                            <h2 className="text-base md:text-lg font-black text-[#0B1525] tracking-tight">
                                                {category.title}
                                            </h2>
                                            <p className="text-xs text-gray-400 mt-0.5">
                                                {category.items.length} topic{category.items.length !== 1 ? 's' : ''}
                                            </p>
                                        </div>

                                        {/* Accordion items */}
                                        <div className="px-6">
                                            {category.items.map(item => (
                                                <AccordionItem
                                                    key={item.question}
                                                    item={item}
                                                    isOpen={openItems[category.title] === item.question}
                                                    onClick={() => toggleItem(category.title, item.question)}
                                                />
                                            ))}
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </AnimatePresence>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}