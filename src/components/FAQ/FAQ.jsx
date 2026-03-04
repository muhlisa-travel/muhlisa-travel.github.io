import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { faqData } from '../../data/courseData';
import { ChevronDown } from 'lucide-react';

function FAQItem({ item, index, isOpen, onToggle }) {
    return (
        <motion.div
            initial={{ opacity: 0, x: -30, y: 10 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 100, damping: 18, delay: index * 0.08 }}
            className="glass rounded-2xl overflow-hidden"
        >
            <button
                onClick={onToggle}
                className="w-full flex items-center justify-between p-5 sm:p-6 text-left"
            >
                <span className="text-base sm:text-lg font-semibold text-white/90 pr-4">
                    {item.question}
                </span>
                <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0"
                >
                    <ChevronDown className="w-4 h-4 text-gold-400" />
                </motion.div>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="overflow-hidden"
                    >
                        <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-0">
                            <div className="h-px bg-white/5 mb-4" />
                            <p className="text-white/50 leading-relaxed">{item.answer}</p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState(null);

    return (
        <section id="faq" className="relative py-14 sm:py-20 md:py-28 scroll-mt-24">
            <div className="section-divider mb-10 sm:mb-16" />
            <div className="max-w-3xl mx-auto px-4 sm:px-6">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-xs font-semibold tracking-widest text-gold-400 uppercase mb-3 block">
                        Суроолор
                    </span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4">
                        <span className="gradient-text">FAQ</span>
                    </h2>
                    <p className="text-white/40 text-lg">
                        Көп берилген суроолор
                    </p>
                </motion.div>

                {/* FAQ Items */}
                <div className="space-y-3">
                    {faqData.map((item, i) => (
                        <FAQItem
                            key={i}
                            item={item}
                            index={i}
                            isOpen={openIndex === i}
                            onToggle={() => setOpenIndex(openIndex === i ? null : i)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
