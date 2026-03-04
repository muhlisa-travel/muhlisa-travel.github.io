import { motion } from 'framer-motion';
import { courseData } from '../../data/courseData';
import instructorImg from '../../assets/images/instructor.png';
import { Award, Plane, Globe, BookOpen, Users, TrendingUp } from 'lucide-react';

const stamps = [
    { text: 'VISA PRO', color: 'text-gold-400 border-gold-400', rotate: '-12deg', top: '10%', right: '5%' },
    { text: '100+ CASES', color: 'text-emerald-400 border-emerald-400', rotate: '8deg', top: '60%', right: '8%' },
    { text: '3+ YEARS', color: 'text-royal-500 border-royal-500', rotate: '-5deg', top: '35%', left: '5%' },
];

const skills = [
    { icon: Plane, label: 'Авиа бизнес' },
    { icon: Globe, label: 'Шенген & Виза' },
    { icon: BookOpen, label: 'Тур бизнес' },
    { icon: Award, label: 'Наставничество' },
    { icon: Users, label: '100+ кейс' },
    { icon: TrendingUp, label: '200K+ /ай' },
];

export default function Instructor() {
    return (
        <section id="instructor" className="relative py-14 sm:py-20 md:py-28 scroll-mt-24">
            <div className="section-divider mb-10 sm:mb-16" />
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-xs font-semibold tracking-widest text-gold-400 uppercase mb-3 block">
                        Устат
                    </span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4">
                        <span className="gradient-text">Курстун авторуу</span>
                    </h2>
                </motion.div>

                {/* Passport-Style Card */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="relative boarding-pass max-w-4xl mx-auto overflow-visible"
                >
                    {/* Passport-style stamps (decorative) */}
                    {stamps.map((stamp, i) => (
                        <div
                            key={i}
                            className={`absolute hidden lg:block border-2 rounded-lg px-3 py-1.5 text-xs font-bold tracking-wider opacity-20 ${stamp.color}`}
                            style={{
                                transform: `rotate(${stamp.rotate})`,
                                top: stamp.top,
                                right: stamp.right,
                                left: stamp.left,
                            }}
                        >
                            {stamp.text}
                        </div>
                    ))}

                    <div className="p-5 sm:p-6 md:p-10 flex flex-col lg:flex-row items-center gap-6 sm:gap-8 lg:gap-12">
                        {/* Photo */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="relative flex-shrink-0"
                        >
                            {/* Passport photo frame */}
                            <div className="relative w-40 h-52 sm:w-52 sm:h-64 md:w-60 md:h-72 rounded-2xl overflow-hidden border-2 border-gold-400/20">
                                <img
                                    src={instructorImg}
                                    alt={courseData.instructor.name}
                                    className="w-full h-full object-cover"
                                />
                                {/* Passport photo overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/40 to-transparent" />
                            </div>
                            {/* Photo label */}
                            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-navy-800 border border-gold-400/20 rounded-lg px-4 py-1">
                                <span className="text-[10px] font-mono text-gold-400 tracking-wider">
                                    PHOTO ID
                                </span>
                            </div>
                        </motion.div>

                        {/* Info */}
                        <div className="flex-1 text-center lg:text-left">
                            {/* Name header (passport style) */}
                            <div className="mb-6">
                                <p className="text-[10px] tracking-widest text-white/30 uppercase mb-1">
                                    Толук аты / Full Name
                                </p>
                                <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-white">
                                    {courseData.instructor.name}
                                </h3>
                                <p className="text-[10px] tracking-widest text-white/30 uppercase mt-3 mb-1">
                                    Кесип / Position
                                </p>
                                <p className="text-gold-400 font-semibold">
                                    {courseData.instructor.role}
                                </p>
                            </div>

                            {/* Bio */}
                            <p className="text-white/60 text-sm leading-relaxed mb-4">
                                {courseData.instructor.bio}
                            </p>
                            <p className="text-white/50 text-sm leading-relaxed mb-6">
                                {courseData.instructor.background}
                            </p>

                            {/* Skills grid */}
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
                                {skills.map(({ icon: Icon, label }, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.3 + i * 0.1 }}
                                        className="flex items-center gap-2 glass rounded-xl px-4 py-3"
                                    >
                                        <Icon className="w-4 h-4 text-gold-400" />
                                        <span className="text-sm text-white/70">{label}</span>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Barcode */}
                            <div className="flex items-center gap-4 pt-4 border-t border-white/5">
                                <div className="barcode flex-1">
                                    {Array.from({ length: 40 }, (_, i) => (
                                        <span key={i} style={{ height: `${Math.random() * 20 + 10}px` }} />
                                    ))}
                                </div>
                                <span className="text-[10px] font-mono text-white/15 tracking-wider">
                                    KGZ-VISA-ADISI-2026
                                </span>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
