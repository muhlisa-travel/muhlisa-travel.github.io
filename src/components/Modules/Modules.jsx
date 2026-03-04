import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { courseData } from '../../data/courseData';
import { ChevronDown, Target, Wrench, Award, BookOpen } from 'lucide-react';

function Barcode() {
    const bars = Array.from({ length: 30 }, () => Math.random() * 20 + 10);
    return (
        <div className="barcode">
            {bars.map((h, i) => (
                <span key={i} style={{ height: `${h}px` }} />
            ))}
        </div>
    );
}

function ModuleCard({ module, index }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60, y: 20 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ type: 'spring', stiffness: 80, damping: 18, delay: index * 0.08 }}
            className="boarding-pass holographic group"
        >
            {/* Top Section - Boarding Pass Header */}
            <div
                className="p-5 sm:p-6 cursor-pointer"
                onClick={() => setIsOpen(!isOpen)}
            >
                <div className="flex items-start justify-between mb-4">
                    {/* Left: Gate + Module */}
                    <div className="flex items-center gap-4">
                        <div className="text-4xl">{module.icon}</div>
                        <div>
                            <div className="flex items-center gap-2 mb-1">
                                <span className="text-[10px] tracking-widest text-white/30 uppercase">
                                    Gate
                                </span>
                                <span className="text-xs font-mono font-bold text-gold-400">
                                    {module.gate}
                                </span>
                                <span className="text-[10px] tracking-widest text-white/30 uppercase ml-2">
                                    Module
                                </span>
                                <span className="text-xs font-mono font-bold text-gold-400">
                                    {String(module.id).padStart(2, '0')}
                                </span>
                            </div>
                            <h3 className="text-base sm:text-lg font-bold text-white leading-tight">
                                {module.title}
                            </h3>
                        </div>
                    </div>

                    {/* Right: Expand */}
                    <motion.div
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0 mt-1"
                    >
                        <ChevronDown className="w-4 h-4 text-white/50" />
                    </motion.div>
                </div>

                {/* Goal */}
                <div className="flex items-center gap-2 text-sm text-white/50">
                    <Target className="w-3.5 h-3.5 text-gold-400" />
                    <span>
                        <span className="text-white/30">Максат:</span> {module.goal}
                    </span>
                </div>
            </div>

            {/* Expanded Content */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: 'easeInOut' }}
                        className="overflow-hidden"
                    >
                        {/* Tear Line */}
                        <div className="boarding-pass-tear mx-5 sm:mx-6" style={{ position: 'relative' }}>
                            <div
                                style={{
                                    position: 'absolute',
                                    left: '-8px',
                                    right: '-8px',
                                    height: '2px',
                                    borderTop: '2px dashed rgba(212, 168, 67, 0.3)',
                                }}
                            />
                        </div>

                        <div className="p-5 sm:p-6 pt-6 space-y-5">
                            {/* Lessons */}
                            <div>
                                <div className="flex items-center gap-2 mb-3">
                                    <BookOpen className="w-4 h-4 text-royal-500" />
                                    <span className="text-xs font-semibold tracking-wider text-white/40 uppercase">
                                        Сабактар
                                    </span>
                                </div>
                                <ul className="space-y-2">
                                    {module.lessons.map((lesson, i) => (
                                        <motion.li
                                            key={i}
                                            initial={{ opacity: 0, x: -10 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: i * 0.05 }}
                                            className="flex items-start gap-3 text-sm text-white/70"
                                        >
                                            <span className="text-gold-400 mt-0.5 text-xs">▸</span>
                                            {lesson}
                                        </motion.li>
                                    ))}
                                </ul>
                            </div>

                            {/* Practice */}
                            {module.practice && (
                                <div>
                                    <div className="flex items-center gap-2 mb-3">
                                        <Wrench className="w-4 h-4 text-emerald-400" />
                                        <span className="text-xs font-semibold tracking-wider text-white/40 uppercase">
                                            Практика
                                        </span>
                                    </div>
                                    <ul className="space-y-2">
                                        {module.practice.map((item, i) => (
                                            <li key={i} className="flex items-start gap-3 text-sm text-emerald-300/70">
                                                <span className="text-emerald-400 mt-0.5 text-xs">✦</span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {/* Instruments */}
                            {module.instruments && (
                                <div>
                                    <div className="flex items-center gap-2 mb-3">
                                        <Wrench className="w-4 h-4 text-purple-400" />
                                        <span className="text-xs font-semibold tracking-wider text-white/40 uppercase">
                                            Инструменттер
                                        </span>
                                    </div>
                                    <ul className="space-y-2">
                                        {module.instruments.map((item, i) => (
                                            <li key={i} className="flex items-start gap-3 text-sm text-purple-300/70">
                                                <span className="text-purple-400 mt-0.5 text-xs">◆</span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {/* Bonus */}
                            {module.bonus && (
                                <div>
                                    <div className="flex items-center gap-2 mb-3">
                                        <Award className="w-4 h-4 text-amber-400" />
                                        <span className="text-xs font-semibold tracking-wider text-white/40 uppercase">
                                            Бонус
                                        </span>
                                    </div>
                                    <ul className="space-y-2">
                                        {module.bonus.map((item, i) => (
                                            <li key={i} className="flex items-start gap-3 text-sm text-amber-300/70">
                                                <span className="text-amber-400 mt-0.5 text-xs">★</span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {/* Barcode */}
                            <div className="flex items-end justify-between pt-3">
                                <Barcode />
                                <span className="text-[10px] font-mono text-white/15 tracking-wider">
                                    VISA-ADISI-M{String(module.id).padStart(2, '0')}
                                </span>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}

export default function Modules() {
    return (
        <section id="modules" className="relative py-14 sm:py-20 md:py-28 scroll-mt-24">
            <div className="max-w-4xl mx-auto px-4 sm:px-6">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-xs font-semibold tracking-widest text-gold-400 uppercase mb-3 block">
                        Курстун программасы
                    </span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4">
                        <span className="gradient-text">8 Модуль</span>
                    </h2>
                    <p className="text-white/40 text-lg max-w-xl mx-auto">
                        Авиа бизнестен визага чейин — толук программа
                    </p>
                </motion.div>

                {/* Module Cards */}
                <div className="space-y-4">
                    {courseData.modules.map((module, i) => (
                        <ModuleCard key={module.id} module={module} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
}
