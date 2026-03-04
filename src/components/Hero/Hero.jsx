import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import Lottie from 'lottie-react';
import flightAnimation from '../../assets/flight-loader.json';
import heroPhoto from '../../assets/images/hero-photo.png';

const stamps = ['APPROVED', 'ВИЗА', '✓ ACCEPTED', 'VISA OK'];

const floatingFlags = ['🇰🇬', '🇩🇪', '🇺🇸', '🇦🇪', '🇨🇳', '🇪🇺', '🇬🇧', '🇨🇭'];

export default function Hero() {
    const [showStamp, setShowStamp] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setShowStamp(true), 1800);
        return () => clearTimeout(timer);
    }, []);

    return (
        <section
            id="hero"
            className="relative min-h-screen flex items-center overflow-hidden pt-20 sm:pt-24 pb-8 sm:pb-12"
        >
            {/* Animated Background Gradient */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900" />
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold-400/5 rounded-full blur-3xl animate-float" />
                <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-royal-500/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />
                <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-gold-400/3 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }} />
            </div>

            {/* Floating Flags */}
            {floatingFlags.map((flag, i) => (
                <motion.div
                    key={i}
                    className="absolute text-2xl sm:text-3xl opacity-20 pointer-events-none select-none"
                    style={{
                        top: `${15 + Math.random() * 70}%`,
                        left: `${5 + Math.random() * 90}%`,
                    }}
                    animate={{
                        y: [0, -30, 0],
                        rotate: [0, 10, -10, 0],
                    }}
                    transition={{
                        duration: 5 + Math.random() * 4,
                        repeat: Infinity,
                        delay: i * 0.5,
                        ease: 'easeInOut',
                    }}
                >
                    {flag}
                </motion.div>
            ))}

            {/* Dotted Flight Path SVG */}
            <svg
                className="absolute inset-0 w-full h-full pointer-events-none opacity-10"
                xmlns="http://www.w3.org/2000/svg"
            >
                <motion.path
                    d="M 0 400 Q 300 200 600 350 T 1200 250 T 1800 300"
                    fill="none"
                    stroke="#D4A843"
                    strokeWidth="2"
                    strokeDasharray="8 8"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 3, ease: 'easeInOut' }}
                />
            </svg>

            {/* Split Layout: Text Left + Image Right */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 flex flex-col lg:flex-row items-center gap-6 sm:gap-8 lg:gap-4">

                {/* Left: Text Content */}
                <div className="flex-1 text-center lg:text-left">
                    {/* Lottie Flight Animation */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.6 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.1 }}
                        className="mx-auto lg:mx-0 w-20 h-20 sm:w-24 sm:h-24 mb-4"
                    >
                        <Lottie
                            animationData={flightAnimation}
                            loop
                            autoplay
                            style={{ filter: 'invert(1) sepia(1) saturate(3) hue-rotate(10deg) brightness(0.9)' }}
                        />
                    </motion.div>

                    {/* Top Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="inline-flex items-center gap-2 glass-gold rounded-full px-5 py-2 mb-6"
                    >
                        <span className="w-2 h-2 bg-gold-400 rounded-full animate-pulse" />
                        <span className="text-gold-400 text-sm font-medium tracking-wide">
                            8 Модуль · 1 Ай · Онлайн & Офлайн
                        </span>
                    </motion.div>

                    {/* Main Heading */}
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-tight mb-4 sm:mb-6"
                    >
                        <span className="gradient-text">ВИЗА</span>
                        <br />
                        <span className="text-white">АДИСИ</span>
                    </motion.h1>

                    {/* Subtitle */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.7 }}
                        className="text-base sm:text-lg md:text-xl text-white/60 max-w-xl mb-3 sm:mb-4 leading-relaxed"
                    >
                        Авиа бизнестен визага чейин —{' '}
                        <span className="text-gold-400 font-semibold">нольдон профиге чейин</span>{' '}
                        үйрөтөбүз
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.9 }}
                        className="text-base text-white/40 mb-8"
                    >
                        Анарбаева Мухлиса тарабынан
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 1.1 }}
                        className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-3 sm:gap-4 mb-6 sm:mb-8"
                    >
                        <a href="#pricing" className="btn-glow text-base sm:text-lg px-8 sm:px-10 py-3 sm:py-4 rounded-xl w-full sm:w-auto text-center">
                            Курска катталуу
                        </a>
                        <a
                            href="#modules"
                            className="group flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-xl border border-white/10 text-white/70 hover:text-white hover:border-gold-400/30 transition-all duration-300 w-full sm:w-auto"
                        >
                            Программаны көрүү
                            <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
                        </a>
                    </motion.div>

                    {/* Visa Stamp */}
                    {showStamp && (
                        <motion.div
                            initial={{ scale: 3, opacity: 0, rotate: -15 }}
                            animate={{ scale: 1, opacity: 0.85, rotate: -15 }}
                            transition={{
                                type: 'spring',
                                stiffness: 300,
                                damping: 15,
                            }}
                            className="visa-stamp inline-block text-xl sm:text-2xl"
                        >
                            ✅ APPROVED
                        </motion.div>
                    )}
                </div>

                {/* Right: Hero Image */}
                <motion.div
                    initial={{ opacity: 0, x: 60, scale: 0.9 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    transition={{ type: 'spring', stiffness: 60, damping: 18, delay: 0.5 }}
                    className="relative flex-shrink-0"
                >
                    <div className="relative w-60 sm:w-72 md:w-80 lg:w-[380px] xl:w-[420px]">
                        {/* Glow behind */}
                        <div className="absolute -inset-8 rounded-full bg-gold-400/8 blur-3xl z-0" />

                        {/* Card */}
                        <div className="hero-card relative rounded-2xl overflow-hidden z-[1]">
                            {/* Gold accent bar */}
                            <div className="h-1 bg-gradient-to-r from-gold-400 via-gold-300 to-gold-400" />

                            {/* Image inside card */}
                            <div className="relative">
                                <img
                                    src={heroPhoto}
                                    alt="Анарбаева Мухлиса"
                                    className="w-full h-auto object-cover"
                                />
                                {/* Gradient fade at bottom of image */}
                                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-navy-800/95 to-transparent" />
                            </div>

                            {/* Card bottom content */}
                            <div className="relative bg-gradient-to-b from-navy-800/95 to-navy-900 px-6 pb-6 pt-2">
                                {/* Grid pattern */}
                                <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, #D4A843 1px, transparent 1px)', backgroundSize: '20px 20px' }} />

                                <div className="relative z-10 text-center">
                                    <h3 className="text-white font-bold text-lg sm:text-xl mb-1">Анарбаева Мухлиса</h3>
                                    <p className="text-gold-400/80 text-sm tracking-wider uppercase">Виза Адиси · Основатель</p>

                                    {/* Stats */}
                                    <div className="flex items-center justify-center gap-4 mt-4 pt-4 border-t border-white/5">
                                        <div className="text-center">
                                            <span className="text-gold-400 font-bold text-sm">3+</span>
                                            <p className="text-white/40 text-[10px] uppercase tracking-wider">Жыл</p>
                                        </div>
                                        <div className="w-px h-6 bg-white/10" />
                                        <div className="text-center">
                                            <span className="text-gold-400 font-bold text-sm">100+</span>
                                            <p className="text-white/40 text-[10px] uppercase tracking-wider">Кейс</p>
                                        </div>
                                        <div className="w-px h-6 bg-white/10" />
                                        <div className="text-center">
                                            <span className="text-gold-400 font-bold text-sm">200K+</span>
                                            <p className="text-white/40 text-[10px] uppercase tracking-wider">/Ай</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Floating badges around the card */}
                        <motion.div
                            className="absolute -top-4 -right-3 sm:-top-5 sm:-right-4 z-20 glass-gold rounded-xl px-3 py-1.5 sm:px-4 sm:py-2 shadow-lg shadow-gold-400/10"
                            initial={{ opacity: 0, scale: 0, rotate: 12 }}
                            animate={{ opacity: 1, scale: 1, rotate: 6 }}
                            transition={{ type: 'spring', delay: 1.4 }}
                        >
                            <span className="text-gold-400 text-xs sm:text-sm font-bold tracking-wider">VISA PRO ✈️</span>
                        </motion.div>

                        <motion.div
                            className="absolute top-1/3 -left-5 sm:-left-7 z-20 glass-gold rounded-xl px-3 py-1.5 sm:px-4 sm:py-2 shadow-lg shadow-gold-400/10"
                            initial={{ opacity: 0, scale: 0, rotate: -12 }}
                            animate={{ opacity: 1, scale: 1, rotate: -4 }}
                            transition={{ type: 'spring', delay: 1.7 }}
                        >
                            <span className="text-gold-400 text-xs sm:text-sm font-bold tracking-wider">✅ APPROVED</span>
                        </motion.div>

                        <motion.div
                            className="absolute bottom-16 -right-4 sm:-right-5 z-20 glass-gold rounded-xl px-3 py-1.5 sm:px-4 sm:py-2 shadow-lg shadow-gold-400/10"
                            initial={{ opacity: 0, scale: 0, rotate: 8 }}
                            animate={{ opacity: 1, scale: 1, rotate: 3 }}
                            transition={{ type: 'spring', delay: 2.0 }}
                        >
                            <span className="text-gold-400 text-xs sm:text-sm font-bold tracking-wider">29+ 🌍</span>
                        </motion.div>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
            >
                <div className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center pt-2">
                    <div className="w-1.5 h-3 bg-gold-400 rounded-full" />
                </div>
            </motion.div>
        </section>
    );
}
