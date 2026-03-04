import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollProgress } from '../../hooks/useAnimations';
import { Plane, Menu, X } from 'lucide-react';

const navLinks = [
    { label: 'Башкы', href: '#hero' },
    { label: 'Модулдар', href: '#modules' },
    { label: 'Баалар', href: '#pricing' },
    { label: 'Устат', href: '#instructor' },
    { label: 'FAQ', href: '#faq' },
];

const progressSteps = [
    { icon: '📋', label: 'Анкета' },
    { icon: '📎', label: 'Документтер' },
    { icon: '🏛', label: 'Тапшыруу' },
    { icon: '✅', label: 'Одобрено!' },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const progress = useScrollProgress();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const currentStep = Math.min(Math.floor(progress / 25), 3);

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
                        ? 'glass shadow-lg shadow-black/20'
                        : 'bg-transparent'
                    }`}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16 lg:h-20">
                        {/* Logo */}
                        <a href="#hero" className="flex items-center gap-2 group">
                            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300">
                                <Plane className="w-5 h-5 text-navy-900" />
                            </div>
                            <div>
                                <span className="text-lg font-bold gradient-text">ВИЗА АДИСИ</span>
                            </div>
                        </a>

                        {/* Desktop Links */}
                        <div className="hidden md:flex items-center gap-1">
                            {navLinks.map((link) => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    className="relative px-4 py-2 text-sm font-medium text-white/70 hover:text-white transition-colors duration-300 group"
                                >
                                    {link.label}
                                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-gold-400 to-gold-600 group-hover:w-3/4 transition-all duration-300 rounded-full" />
                                </a>
                            ))}
                            <a
                                href="#pricing"
                                className="ml-4 btn-glow text-sm px-6 py-2.5 rounded-lg"
                            >
                                Катталуу
                            </a>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setMobileOpen(!mobileOpen)}
                            className="md:hidden p-2 text-white/70 hover:text-white transition-colors"
                        >
                            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>

                {/* Visa Progress Bar */}
                <div className="visa-progress">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex items-center gap-1 py-1">
                            {progressSteps.map((step, i) => (
                                <div key={i} className="flex items-center flex-1">
                                    <div
                                        className={`flex items-center gap-1 text-xs transition-all duration-500 ${i <= currentStep ? 'text-gold-400' : 'text-white/20'
                                            }`}
                                    >
                                        <span>{step.icon}</span>
                                        <span className="hidden sm:inline">{step.label}</span>
                                    </div>
                                    {i < progressSteps.length - 1 && (
                                        <div className="flex-1 h-0.5 mx-2 rounded-full bg-white/5 overflow-hidden">
                                            <div
                                                className="h-full visa-progress-fill rounded-full transition-all duration-500"
                                                style={{
                                                    width: i < currentStep ? '100%' : i === currentStep ? `${(progress % 25) * 4}%` : '0%',
                                                }}
                                            />
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed inset-0 z-40 glass pt-24 px-6"
                    >
                        <div className="flex flex-col items-center gap-6">
                            {navLinks.map((link) => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setMobileOpen(false)}
                                    className="text-2xl font-semibold text-white/80 hover:text-gold-400 transition-colors"
                                >
                                    {link.label}
                                </a>
                            ))}
                            <a
                                href="#pricing"
                                onClick={() => setMobileOpen(false)}
                                className="btn-glow text-lg px-8 py-3 mt-4"
                            >
                                Катталуу
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
