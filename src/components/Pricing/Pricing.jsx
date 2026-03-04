import { motion } from 'framer-motion';
import { courseData } from '../../data/courseData';
import { Check, Star, Zap, Crown } from 'lucide-react';

function PricingCard({ plan, isPopular, isVip, delay = 0 }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 80, damping: 16, delay }}
            className={`relative rounded-3xl overflow-hidden ${isPopular
                ? 'boarding-pass animate-pulse-glow'
                : isVip
                    ? 'boarding-pass border-2 border-gold-400/30'
                    : 'glass'
                }`}
        >
            {/* Popular Badge */}
            {isPopular && (
                <div className="absolute top-4 right-4 z-10">
                    <div className="flex items-center gap-1.5 bg-gradient-to-r from-gold-400 to-gold-600 text-navy-900 text-xs font-bold px-3 py-1.5 rounded-full">
                        <Star className="w-3 h-3" />
                        ПОПУЛЯРДУУ
                    </div>
                </div>
            )}
            {isVip && (
                <div className="absolute top-4 right-4 z-10">
                    <div className="flex items-center gap-1.5 bg-gradient-to-r from-amber-400 to-amber-600 text-navy-900 text-xs font-bold px-3 py-1.5 rounded-full">
                        <Crown className="w-3 h-3" />
                        ПРЕМИУМ
                    </div>
                </div>
            )}

            <div className="p-5 sm:p-6 md:p-8">
                {/* Plan Name */}
                <div className="mb-6">
                    <div className="flex items-center gap-2 mb-2">
                        <div
                            className={`w-10 h-10 rounded-xl flex items-center justify-center ${isPopular || isVip
                                ? 'bg-gradient-to-br from-gold-400 to-gold-600'
                                : 'bg-white/5 border border-white/10'
                                }`}
                        >
                            {isVip ? (
                                <Crown className="w-5 h-5 text-navy-900" />
                            ) : isPopular ? (
                                <Zap className="w-5 h-5 text-navy-900" />
                            ) : (
                                <Zap className="w-5 h-5 text-white/50" />
                            )}
                        </div>
                        <h3 className="text-xl font-bold">{plan.label}</h3>
                    </div>
                </div>

                {/* Price */}
                <div className="mb-6 sm:mb-8">
                    <div className="flex items-baseline gap-2">
                        <span
                            className={`text-4xl sm:text-5xl md:text-6xl font-black ${isPopular || isVip ? 'gradient-text' : 'text-white'
                                }`}
                        >
                            {plan.price}
                        </span>
                        <span className="text-white/40 text-lg">{plan.currency}</span>
                    </div>
                </div>

                {/* Tear line */}
                <div className="relative my-6">
                    <div
                        className="absolute left-0 right-0"
                        style={{
                            height: '2px',
                            borderTop: `2px dashed ${isPopular || isVip ? 'rgba(212, 168, 67, 0.3)' : 'rgba(255, 255, 255, 0.08)'}`,
                        }}
                    />
                    {/* Circle cutouts */}
                    <div
                        className="absolute -left-4 -top-3 w-6 h-6 rounded-full"
                        style={{ background: '#0A1628' }}
                    />
                    <div
                        className="absolute -right-4 -top-3 w-6 h-6 rounded-full"
                        style={{ background: '#0A1628' }}
                    />
                </div>

                {/* Features */}
                <ul className="space-y-3 mt-8 mb-8">
                    {plan.features.map((feature, i) => (
                        <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.05 }}
                            className="flex items-start gap-3 text-sm"
                        >
                            <div
                                className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${isPopular || isVip
                                    ? 'bg-gold-400/20 text-gold-400'
                                    : 'bg-white/5 text-white/40'
                                    }`}
                            >
                                <Check className="w-3 h-3" />
                            </div>
                            <span className="text-white/70">{feature}</span>
                        </motion.li>
                    ))}
                </ul>

                {/* CTA Button */}
                <a
                    href="#contact"
                    className={`block text-center py-4 rounded-xl font-bold text-lg transition-all duration-300 ${isPopular || isVip
                        ? 'btn-glow w-full'
                        : 'border border-white/10 text-white/70 hover:border-gold-400/30 hover:text-white'
                        }`}
                >
                    Катталуу
                </a>
            </div>
        </motion.div>
    );
}

export default function Pricing() {
    return (
        <section id="pricing" className="relative py-14 sm:py-20 md:py-28 scroll-mt-24">
            <div className="max-w-5xl mx-auto px-4 sm:px-6">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-xs font-semibold tracking-widest text-gold-400 uppercase mb-3 block">
                        Баалар
                    </span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4">
                        <span className="gradient-text">Тарифтер</span>
                    </h2>
                    <p className="text-white/40 text-lg max-w-xl mx-auto">
                        Өзүңүзгө ылайыктуу форматты тандаңыз
                    </p>
                </motion.div>

                {/* Pricing Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
                    <PricingCard plan={courseData.pricing.base} isPopular={false} isVip={false} delay={0} />
                    <PricingCard plan={courseData.pricing.standard} isPopular={true} isVip={false} delay={0.1} />
                    <PricingCard plan={courseData.pricing.vip} isPopular={false} isVip={true} delay={0.2} />
                </div>
            </div>
        </section>
    );
}
