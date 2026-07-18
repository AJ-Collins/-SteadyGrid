import { useState } from 'react';
import {
    Phone,
    Mail,
    MapPin,
    Send,
    CheckCircle2,
} from 'lucide-react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import PageHeader from '../components/common/PageHeader';

const contactMethods = [
    {
        icon: Phone,
        title: 'Call us',
        detail: '903-441-2090',
        href: 'tel:903-441-2090',
        note: 'US-based support team',
    },
    {
        icon: Mail,
        title: 'Email us',
        detail: 'sales.rest@ecoflow.com',
        href: 'mailto:sales.rest@ecoflow.com',
        note: 'Sales and partnership enquiries',
    },
    {
        icon: MapPin,
        title: 'Visit online',
        detail: 'ecoflow.com/me-ar',
        href: 'https://www.ecoflow.com/me-ar',
        note: 'Full product catalogue',
    },
];

const offices = [
    { country: 'United States', role: 'Global headquarters' },
    { country: 'Germany', role: 'European headquarters' },
    { country: 'Japan', role: 'Asia-Pacific headquarters' },
];

const subjects = ['Product enquiry', 'Order support', 'Warranty & returns', 'Partnership', 'Other'];

const Eyebrow = ({ children }: { children: React.ReactNode }) => (
    <span className="text-xs font-bold uppercase tracking-widest text-gray-500">{children}</span>
);

const Field = ({
    label,
    children,
}: {
    label: string;
    children: React.ReactNode;
}) => (
    <label className="flex flex-col gap-2">
        <span className="text-xs font-bold uppercase tracking-widest text-gray-500">{label}</span>
        {children}
    </label>
);

const inputClasses =
    'w-full border border-gray-200 rounded-md px-4 py-3 text-sm text-[#0B1525] placeholder:text-gray-400 focus:outline-none focus:border-[#0B1525] transition-colors duration-150';

export default function ContactUs() {
    const [form, setForm] = useState({ name: '', email: '', subject: subjects[0], message: '' });
    const [submitted, setSubmitted] = useState(false);
    const [submitting, setSubmitting] = useState(false);

    const handleChange = (field: keyof typeof form) => (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        setForm((prev) => ({ ...prev, [field]: e.target.value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitting(true);
        // Replace with real submission logic (API call, form service, etc.)
        setTimeout(() => {
            setSubmitting(false);
            setSubmitted(true);
        }, 700);
    };

    return (
        <div className="min-h-screen bg-white font-sans flex flex-col">
            <Navbar />

            <PageHeader
                title="Contact Us"
                breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Contact' }]}
                imageUrl="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1600&q=80"
            />

            <main className="flex-1 max-w-[1440px] w-full mx-auto px-4 md:px-6 py-8 md:py-12 flex flex-col gap-8">

                {/* ── Intro ── */}
                <section className="max-w-3xl">
                    <Eyebrow>Get in touch</Eyebrow>
                    <h1 className="text-3xl md:text-5xl font-black text-[#0B1525] tracking-tight mt-3 mb-4 leading-tight">
                        We're here to help.
                    </h1>
                    <p className="text-sm md:text-base text-gray-500 leading-relaxed">
                        Whether you have a question about a product, need support with an order, or want to
                        explore a partnership, our team is ready to help you find the right solution.
                    </p>
                </section>

                {/* ── Contact methods ── */}
                <section className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-gray-200 border border-gray-200 rounded-md overflow-hidden">
                    {contactMethods.map(
                        ({ icon: Icon, title, detail, href, note }, index) => (
                        <a
                            key={title}
                            href={href}
                            target={href.startsWith("http") ? "_blank" : undefined}
                            rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                            className={`
                            bg-white p-6 flex flex-col gap-3
                            group hover:bg-gray-50 transition-colors duration-150
                            ${
                                index === 0
                                ? "rounded-t-md sm:rounded-t-none sm:rounded-l-md"
                                : index === contactMethods.length - 1
                                ? "rounded-b-md sm:rounded-b-none sm:rounded-r-md"
                                : ""
                            }
                            `}
                        >
                            <div className="w-10 h-10 bg-[#0B1525] flex items-center justify-center flex-shrink-0">
                            <Icon className="w-5 h-5 text-white" />
                            </div>

                            <div>
                            <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-1">
                                {title}
                            </p>

                            <p className="text-sm font-bold text-[#0B1525] group-hover:underline">
                                {detail}
                            </p>

                            <p className="text-xs text-gray-400 mt-1">{note}</p>
                            </div>
                        </a>
                        )
                    )}
                    </section>

                {/* ── Form + offices ── */}
                <section className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-start">

                    {/* Form */}
                    <div className="flex-1 w-full border rounded-md border-gray-200 p-6 md:p-10">
                        <Eyebrow>Send a message</Eyebrow>
                        <h2 className="text-xl md:text-2xl font-black text-[#0B1525] tracking-tight mt-3 mb-6">
                            Tell us what you need.
                        </h2>

                        {submitted ? (
                            <div className="flex flex-col items-start gap-3 border border-gray-200 bg-gray-50 p-6">
                                <CheckCircle2 className="w-8 h-8 text-[#0B1525]" />
                                <p className="text-sm font-bold text-[#0B1525]">Message sent</p>
                                <p className="text-xs text-gray-500">
                                    Thanks for reaching out — our team will get back to you within 1–2
                                    business days.
                                </p>
                                <button
                                    onClick={() => {
                                        setSubmitted(false);
                                        setForm({ name: '', email: '', subject: subjects[0], message: '' });
                                    }}
                                    className="mt-2 text-xs font-bold uppercase tracking-widest text-[#0B1525] underline underline-offset-2"
                                >
                                    Send another message
                                </button>
                            </div>
                        ) : (
                                <form
                                    onSubmit={handleSubmit}
                                    className="flex flex-col gap-5"
                                >
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                        <Field label="Full name">
                                            <input
                                                type="text"
                                                required
                                                value={form.name}
                                                onChange={handleChange('name')}
                                                placeholder="Jane Doe"
                                                className={inputClasses}
                                            />
                                        </Field>
                                        <Field label="Email address">
                                            <input
                                                type="email"
                                                required
                                                value={form.email}
                                                onChange={handleChange('email')}
                                                placeholder="jane@company.com"
                                                className={inputClasses}
                                            />
                                        </Field>
                                    </div>

                                    <Field label="Subject">
                                        <select
                                            value={form.subject}
                                            onChange={handleChange('subject')}
                                            className={`${inputClasses} bg-white`}
                                        >
                                            {subjects.map((s) => (
                                                <option key={s} value={s}>
                                                    {s}
                                                </option>
                                            ))}
                                        </select>
                                    </Field>

                                    <Field label="Message">
                                        <textarea
                                            required
                                            rows={5}
                                            value={form.message}
                                            onChange={handleChange('message')}
                                            placeholder="How can we help?"
                                            className={`${inputClasses} resize-none`}
                                        />
                                    </Field>

                                    <button
                                        type="submit"
                                        disabled={submitting}
                                        className="self-start inline-flex items-center gap-2 bg-[#0B1525] text-white text-xs rounded-md font-bold py-3 px-6 hover:bg-[#1a2d4a] transition-colors duration-150 disabled:opacity-60"
                                    >
                                        <Send className="w-4 h-4" />
                                        {submitting ? 'Sending…' : 'Send message'}
                                    </button>
                                </form>
                        )}
                    </div>

                    {/* Offices + social sidebar */}
                    <aside className="w-full lg:w-[320px] shrink-0 flex flex-col gap-6">
                        <div className="border border-gray-200 rounded-md">
                            <div className="px-5 py-3 border-b border-gray-200 rounded-t-md bg-gray-50">
                                <Eyebrow>Our offices</Eyebrow>
                            </div>
                            {offices.map((office) => (
                                <div
                                    key={office.country}
                                    className="flex items-start gap-3 px-5 py-4 border-b border-gray-100 last:border-0"
                                >
                                    <MapPin className="w-4 h-4 text-[#0B1525] flex-shrink-0 mt-0.5" />
                                    <div>
                                        <p className="text-sm font-bold text-[#0B1525]">{office.country}</p>
                                        <p className="text-xs text-gray-500 mt-0.5">{office.role}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </aside>
                </section>
            </main>

            <Footer />
        </div>
    );
}