import { useState } from 'react';
import { Mail, ArrowLeft, MailCheck } from 'lucide-react';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';
import { Link } from 'react-router-dom';

const Eyebrow = ({ children }: { children: React.ReactNode }) => (
    <span className="text-xs font-bold uppercase tracking-widest text-gray-500">{children}</span>
);

const inputWrapClasses =
    'flex items-center gap-2 border border-gray-200 rounded-md px-4 py-3 focus-within:border-[#0B1525] transition-colors duration-150';
const inputClasses = 'w-full text-sm text-[#0B1525] placeholder:text-gray-400 focus:outline-none';

export default function ForgotPassword() {
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [submitting, setSubmitting] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitting(true);
        // Replace with real "send reset link" logic
        setTimeout(() => {
            setSubmitting(false);
            setSubmitted(true);
        }, 700);
    };

    return (
        <div className="min-h-screen bg-white font-sans flex flex-col">
            <Navbar />

            <main className="flex-1 max-w-[1440px] w-full mx-auto px-4 md:px-6 py-8 md:py-12">
                <div className="border border-gray-200 rounded-md overflow-hidden flex flex-col lg:flex-row min-h-0 lg:min-h-[520px]">

                    {/* ── Image panel ── */}
                    <div className="hidden lg:block lg:w-1/2 relative">
                        <img
                            src="https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=1200&q=80"
                            alt="EcoFlow power station charging on the road"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-[#0B1525]/30" />
                        <div className="absolute bottom-8 left-8 right-8">
                            <p className="text-white text-xl md:text-2xl font-black tracking-tight leading-snug">
                                Locked out happens to everyone.
                            </p>
                            <p className="text-white/80 text-sm mt-2">
                                Enter your email and we'll send you a link to get back in.
                            </p>
                        </div>
                    </div>

                    {/* ── Form panel ── */}
                    <div className="w-full lg:w-1/2 p-6 sm:p-10 md:p-12 flex flex-col justify-center">
                        {submitted ? (
                            <div className="flex flex-col items-start gap-4">
                                <Eyebrow>Check your inbox</Eyebrow>
                                <h1 className="inline-flex items-center gap-2 text-2xl md:text-3xl font-black text-[#0B1525] tracking-tight">
                                    Reset link sent <MailCheck className="w-6 h-6 text-green-600" />
                                </h1>
                                <p className="text-sm text-gray-500 leading-relaxed">
                                    If an account exists, you'll receive an email with a link to reset your password.
                                </p>
                                <button
                                    onClick={() => {
                                        setSubmitted(false);
                                        setEmail('');
                                    }}
                                    className="text-xs font-bold uppercase tracking-widest text-[#0B1525] underline underline-offset-2 mt-2"
                                >
                                    Use a different email
                                </button>
                                <Link
                                    to="/auth/login"
                                    className="inline-flex items-center gap-2 text-sm font-bold text-[#0B1525] hover:gap-3 transition-all duration-150 mt-4"
                                >
                                    <ArrowLeft className="w-4 h-4" />
                                    Back to sign in
                                </Link>
                            </div>
                        ) : (
                            <>
                                <Eyebrow>Forgot password</Eyebrow>
                                <h1 className="text-2xl md:text-3xl font-black text-[#0B1525] tracking-tight mt-3 mb-2">
                                    Reset your password
                                </h1>
                                <p className="text-sm text-gray-500 mb-8">
                                    Enter the email address associated with your account and we'll send you a
                                    link to reset your password.
                                </p>

                                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                                    <label className="flex flex-col gap-2">
                                        <span className="text-xs font-bold uppercase tracking-widest text-gray-500">
                                            Email address
                                        </span>
                                        <div className={inputWrapClasses}>
                                            <Mail className="w-4 h-4 text-gray-400 flex-shrink-0" />
                                            <input
                                                type="email"
                                                required
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                placeholder="you@company.com"
                                                className={inputClasses}
                                            />
                                        </div>
                                    </label>

                                    <button
                                        type="submit"
                                        disabled={submitting}
                                        className="bg-[#0B1525] text-white text-sm font-bold py-3 rounded-md hover:bg-[#1a2d4a] transition-colors duration-150 disabled:opacity-60"
                                    >
                                        {submitting ? 'Sending…' : 'Send reset link'}
                                    </button>
                                </form>

                                <Link to="/auth/login"
                                    className="inline-flex items-center gap-2 text-sm font-bold text-[#0B1525] hover:gap-3 transition-all duration-150 mt-8"
                                >
                                    <ArrowLeft className="w-4 h-4" />
                                    Back to sign in
                                </Link>
                            </>
                        )}
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}