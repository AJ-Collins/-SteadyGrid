import { useState } from 'react';
import { Lock, Eye, EyeOff, ArrowLeft, CheckCircle2, Check, X } from 'lucide-react';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';
import { Link } from 'react-router-dom';

const Eyebrow = ({ children }: { children: React.ReactNode }) => (
    <span className="text-xs font-bold uppercase tracking-widest text-gray-500">{children}</span>
);

const inputWrapClasses =
    'flex items-center gap-2 border border-gray-200 rounded-md px-4 py-3 focus-within:border-[#0B1525] transition-colors duration-150';
const inputClasses = 'w-full text-sm text-[#0B1525] placeholder:text-gray-400 focus:outline-none';

const requirements = [
    { label: 'At least 8 characters', test: (v: string) => v.length >= 8 },
    { label: 'One uppercase letter', test: (v: string) => /[A-Z]/.test(v) },
    { label: 'One number', test: (v: string) => /[0-9]/.test(v) },
];

export default function ResetPassword() {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [form, setForm] = useState({ password: '', confirmPassword: '' });
    const [submitted, setSubmitted] = useState(false);
    const [submitting, setSubmitting] = useState(false);

    const passwordsMatch = form.password.length > 0 && form.password === form.confirmPassword;
    const allRequirementsMet = requirements.every((r) => r.test(form.password));

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!allRequirementsMet || !passwordsMatch) return;
        setSubmitting(true);
        // Replace with real "set new password" logic
        setTimeout(() => {
            setSubmitting(false);
            setSubmitted(true);
        }, 700);
    };

    return (
        <div className="min-h-screen bg-white font-sans flex flex-col">
            <Navbar />

            <main className="flex-1 max-w-[1440px] w-full mx-auto px-4 md:px-6 py-8 md:py-12">
                <div className="border border-gray-200 rounded-md overflow-hidden flex flex-col lg:flex-row min-h-0 lg:min-h-[560px]">

                    {/* ── Image panel ── */}
                    <div className="hidden lg:block lg:w-1/2 relative">
                        <img
                            src="https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=1200&q=80"
                            alt="EcoFlow power station set up outdoors"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-[#0B1525]/30" />
                        <div className="absolute bottom-8 left-8 right-8">
                            <p className="text-white text-xl md:text-2xl font-black tracking-tight leading-snug">
                                Almost back in.
                            </p>
                            <p className="text-white/80 text-sm mt-2">
                                Choose a strong new password to secure your account.
                            </p>
                        </div>
                    </div>

                    {/* ── Form panel ── */}
                    <div className="w-full lg:w-1/2 p-6 sm:p-10 md:p-12 flex flex-col justify-center">
                        {submitted ? (
                            <div className="flex flex-col items-start gap-4">
                                <Eyebrow>All set</Eyebrow>
                                <h1 className="inline-flex items-center gap-2 text-2xl md:text-3xl font-black text-[#0B1525] tracking-tight">
                                    Password reset
                                    <CheckCircle2 className="w-6 h-6 text-green-600" />
                                </h1>
                                <p className="text-sm text-gray-500 leading-relaxed">
                                    Your password has been updated. You can now sign in with your new
                                    password.
                                </p>
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
                                <Eyebrow>Reset password</Eyebrow>
                                <h1 className="text-2xl md:text-3xl font-black text-[#0B1525] tracking-tight mt-3 mb-2">
                                    Set a new password
                                </h1>
                                <p className="text-sm text-gray-500 mb-8">
                                    Your new password must be different from previously used passwords.
                                </p>

                                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                                    <label className="flex flex-col gap-2">
                                        <span className="text-xs font-bold uppercase tracking-widest text-gray-500">
                                            New password
                                        </span>
                                        <div className={inputWrapClasses}>
                                            <Lock className="w-4 h-4 text-gray-400 flex-shrink-0" />
                                            <input
                                                type={showPassword ? 'text' : 'password'}
                                                required
                                                value={form.password}
                                                onChange={(e) =>
                                                    setForm((p) => ({ ...p, password: e.target.value }))
                                                }
                                                placeholder="Enter new password"
                                                className={inputClasses}
                                            />
                                            <button
                                                type="button"
                                                onClick={() => setShowPassword((s) => !s)}
                                                aria-label={showPassword ? 'Hide password' : 'Show password'}
                                                className="text-gray-400 hover:text-[#0B1525] transition-colors duration-150 flex-shrink-0"
                                            >
                                                {showPassword ? (
                                                    <EyeOff className="w-4 h-4" />
                                                ) : (
                                                    <Eye className="w-4 h-4" />
                                                )}
                                            </button>
                                        </div>
                                    </label>

                                    {form.password.length > 0 && (
                                        <ul className="flex flex-col gap-1.5 -mt-2">
                                            {requirements.map((req) => {
                                                const met = req.test(form.password);
                                                return (
                                                    <li
                                                        key={req.label}
                                                        className={`flex items-center gap-2 text-xs ${
                                                            met ? 'text-[#0B1525]' : 'text-gray-400'
                                                        }`}
                                                    >
                                                        {met ? (
                                                            <Check className="w-3.5 h-3.5" />
                                                        ) : (
                                                            <X className="w-3.5 h-3.5" />
                                                        )}
                                                        {req.label}
                                                    </li>
                                                );
                                            })}
                                        </ul>
                                    )}

                                    <label className="flex flex-col gap-2">
                                        <span className="text-xs font-bold uppercase tracking-widest text-gray-500">
                                            Confirm new password
                                        </span>
                                        <div className={inputWrapClasses}>
                                            <Lock className="w-4 h-4 text-gray-400 flex-shrink-0" />
                                            <input
                                                type={showConfirmPassword ? 'text' : 'password'}
                                                required
                                                value={form.confirmPassword}
                                                onChange={(e) =>
                                                    setForm((p) => ({ ...p, confirmPassword: e.target.value }))
                                                }
                                                placeholder="Re-enter new password"
                                                className={inputClasses}
                                            />
                                            <button
                                                type="button"
                                                onClick={() => setShowConfirmPassword((s) => !s)}
                                                aria-label={showConfirmPassword ? 'Hide password' : 'Show password'}
                                                className="text-gray-400 hover:text-[#0B1525] transition-colors duration-150 flex-shrink-0"
                                            >
                                                {showConfirmPassword ? (
                                                    <EyeOff className="w-4 h-4" />
                                                ) : (
                                                    <Eye className="w-4 h-4" />
                                                )}
                                            </button>
                                        </div>
                                    </label>
                                    {form.confirmPassword.length > 0 && !passwordsMatch && (
                                        <p className="text-xs text-red-500 -mt-3">Passwords don't match.</p>
                                    )}

                                    <button
                                        type="submit"
                                        disabled={submitting || !allRequirementsMet || !passwordsMatch}
                                        className="bg-[#0B1525] text-white text-sm font-bold py-3 rounded-md hover:bg-[#1a2d4a] transition-colors duration-150 disabled:opacity-40"
                                    >
                                        {submitting ? 'Resetting…' : 'Reset password'}
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