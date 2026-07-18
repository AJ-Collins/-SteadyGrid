import { useState } from 'react';
import { User, Mail, Lock, Eye, EyeOff, Check } from 'lucide-react';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';
import { Link } from 'react-router-dom';

const GoogleIcon = () => (
    <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
        <path
            fill="#4285F4"
            d="M17.64 9.2c0-.64-.06-1.25-.16-1.84H9v3.48h4.84a4.14 4.14 0 0 1-1.8 2.72v2.26h2.9c1.7-1.57 2.7-3.87 2.7-6.62z"
        />
        <path
            fill="#34A853"
            d="M9 18c2.43 0 4.47-.8 5.96-2.18l-2.9-2.26c-.8.54-1.84.86-3.06.86-2.35 0-4.34-1.59-5.05-3.72H.95v2.33A9 9 0 0 0 9 18z"
        />
        <path
            fill="#FBBC05"
            d="M3.95 10.7A5.4 5.4 0 0 1 3.66 9c0-.59.1-1.17.29-1.7V4.97H.95A9 9 0 0 0 0 9c0 1.45.35 2.83.95 4.03l3-2.33z"
        />
        <path
            fill="#EA4335"
            d="M9 3.58c1.32 0 2.51.46 3.44 1.35l2.58-2.58C13.46.89 11.43 0 9 0A9 9 0 0 0 .95 4.97l3 2.33C4.66 5.17 6.65 3.58 9 3.58z"
        />
    </svg>
);

const Eyebrow = ({ children }: { children: React.ReactNode }) => (
    <span className="text-xs font-bold uppercase tracking-widest text-gray-500">{children}</span>
);

const perks = [
    'Check out faster',
    'Save multiple shipping addresses',
    'Access your order history',
    'Track new orders',
    'Save items to your wish list',
];

const inputWrapClasses =
    'flex items-center gap-2 border border-gray-200 rounded-md px-4 py-3 focus-within:border-[#0B1525] transition-colors duration-150';
const inputClasses = 'w-full text-sm text-[#0B1525] placeholder:text-gray-400 focus:outline-none';

export default function Register() {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [form, setForm] = useState({ name: '', email: '', password: '', confirmPassword: '' });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Replace with real account-creation logic
        console.log('Registration submitted', form);
    };

    return (
        <div className="min-h-screen bg-white font-sans flex flex-col">
            <Navbar />

            <main className="flex-1 max-w-[1440px] w-full mx-auto px-4 md:px-6 py-8 md:py-12">
                <div className="border border-gray-200 rounded-md overflow-hidden flex flex-col lg:flex-row min-h-0 lg:min-h-[640px]">

                    {/* ── Image panel ── */}
                    <div className="hidden lg:block lg:w-1/2 relative">
                        <img
                            src="https://images.unsplash.com/photo-1509395176047-4a66953fd231?w=1200&q=80"
                            alt="Solar panels powering an off-grid home"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-[#0B1525]/30" />
                        <div className="absolute bottom-8 left-8 right-8">
                            <p className="text-white text-xl md:text-2xl font-black tracking-tight leading-snug">
                                Join 5 million+ users worldwide.
                            </p>
                            <p className="text-white/80 text-sm mt-2">
                                Create an account to unlock faster checkout and order tracking.
                            </p>
                        </div>
                    </div>

                    {/* ── Form panel ── */}
                    <div className="w-full lg:w-1/2 p-6 sm:p-10 md:p-12 flex flex-col justify-center">
                        <Eyebrow>New customer?</Eyebrow>
                        <h1 className="text-2xl md:text-3xl font-black text-[#0B1525] tracking-tight mt-3 mb-2">
                            Create your account
                        </h1>
                        <p className="text-sm text-gray-500 mb-6">Create an account with us and you'll be able to:</p>

                        <ul className="flex flex-col gap-2 mb-8">
                            {perks.map((perk) => (
                                <li key={perk} className="flex items-center gap-2 text-sm text-gray-600">
                                    <Check className="w-4 h-4 text-[#0B1525] flex-shrink-0" />
                                    {perk}
                                </li>
                            ))}
                        </ul>                        

                        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                            <label className="flex flex-col gap-2">
                                <span className="text-xs font-bold uppercase tracking-widest text-gray-500">
                                    Full name
                                </span>
                                <div className={inputWrapClasses}>
                                    <User className="w-4 h-4 text-gray-400 flex-shrink-0" />
                                    <input
                                        type="text"
                                        required
                                        value={form.name}
                                        onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
                                        placeholder="Jane Doe"
                                        className={inputClasses}
                                    />
                                </div>
                            </label>

                            <label className="flex flex-col gap-2">
                                <span className="text-xs font-bold uppercase tracking-widest text-gray-500">
                                    Email address
                                </span>
                                <div className={inputWrapClasses}>
                                    <Mail className="w-4 h-4 text-gray-400 flex-shrink-0" />
                                    <input
                                        type="email"
                                        required
                                        value={form.email}
                                        onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
                                        placeholder="you@company.com"
                                        className={inputClasses}
                                    />
                                </div>
                            </label>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                <label className="flex flex-col gap-2">
                                    <span className="text-xs font-bold uppercase tracking-widest text-gray-500">
                                        Password
                                    </span>
                                    <div className={inputWrapClasses}>
                                        <Lock className="w-4 h-4 text-gray-400 flex-shrink-0" />
                                        <input
                                            type={showPassword ? 'text' : 'password'}
                                            required
                                            value={form.password}
                                            onChange={(e) => setForm((p) => ({ ...p, password: e.target.value }))}
                                            placeholder="Create a password"
                                            className={inputClasses}
                                        />
                                        <button
                                            type="button"
                                            onClick={() => setShowPassword((s) => !s)}
                                            aria-label={showPassword ? 'Hide password' : 'Show password'}
                                            className="text-gray-400 hover:text-[#0B1525] transition-colors duration-150 flex-shrink-0"
                                        >
                                            {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                                        </button>
                                    </div>
                                </label>

                                <label className="flex flex-col gap-2">
                                    <span className="text-xs font-bold uppercase tracking-widest text-gray-500">
                                        Confirm password
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
                                            placeholder="Re-enter password"
                                            className={inputClasses}
                                        />
                                        <button
                                            type="button"
                                            onClick={() => setShowConfirmPassword((s) => !s)}
                                            aria-label={showConfirmPassword ? 'Hide password' : 'Show password'}
                                            className="text-gray-400 hover:text-[#0B1525] transition-colors duration-150 flex-shrink-0"
                                        >
                                            {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                                        </button>
                                    </div>
                                </label>
                            </div>

                            <button
                                type="submit"
                                className="bg-[#0B1525] text-white text-sm font-bold py-3 rounded-md hover:bg-[#1a2d4a] transition-colors duration-150"
                            >
                                Create account
                            </button>

                            <div className="flex items-center gap-4 my-6">
                                <div className="flex-1 h-px bg-gray-200" />
                                <span className="text-xs uppercase tracking-widest text-gray-400">or</span>
                                <div className="flex-1 h-px bg-gray-200" />
                            </div>

                            <button
                                type="button"
                                className="w-full flex items-center justify-center gap-3 border border-gray-200 rounded-md py-3 text-sm font-bold text-[#0B1525] hover:bg-gray-50 transition-colors duration-150"
                            >
                                <GoogleIcon />
                                Sign up with Google
                            </button>                        
                        </form>

                        <p className="text-xs text-gray-500 mt-8">
                            Already have an account?{' '}
                            <Link to="/auth/login" className="font-bold text-[#0B1525] hover:underline">
                                Sign in
                            </Link>
                        </p>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}