import { motion } from 'framer-motion';
import { useCountUp } from '../../hooks/useAnimations';
import { BookOpen, Globe, Clock, Users, Award } from 'lucide-react';

const stats = [
    { icon: BookOpen, value: 8, suffix: '', label: 'Модуль' },
    { icon: Globe, value: 29, suffix: '+', label: 'Өлкө' },
    { icon: Award, value: 100, suffix: '+', label: 'Кейс' },
    { icon: Users, value: 3, suffix: '', label: 'Тариф' },
];

function StatItem({ icon: Icon, value, suffix, label }) {
    const { count, ref } = useCountUp(value, 1500);

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 40, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 100, damping: 15 }}
            className="flex flex-col items-center gap-1 sm:gap-2 p-3 sm:p-6"
        >
            <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-gradient-to-br from-gold-400/10 to-gold-600/5 border border-gold-400/10 flex items-center justify-center mb-1 sm:mb-2">
                <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-gold-400" />
            </div>
            <div className="text-2xl sm:text-4xl md:text-5xl font-black gradient-text">
                {count}
                {suffix}
            </div>
            <div className="text-white/50 text-sm font-medium tracking-wide uppercase">
                {label}
            </div>
        </motion.div>
    );
}

export default function Stats() {
    return (
        <section className="relative py-12 sm:py-16 md:py-20">
            <div className="section-divider mb-10 sm:mb-16" />
            <div className="max-w-5xl mx-auto px-4">
                <div className="glass rounded-2xl sm:rounded-3xl p-3 sm:p-6 md:p-8">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4">
                        {stats.map((stat, i) => (
                            <StatItem key={i} {...stat} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
