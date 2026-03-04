import { motion } from 'framer-motion';
import { Plane, Instagram, MessageCircle, Phone } from 'lucide-react';
import { courseData } from '../../data/courseData';

export default function Footer() {
    const { contact } = courseData;

    return (
        <footer id="contact" className="relative pt-14 sm:pt-20 pb-6 sm:pb-8">
            <div className="section-divider mb-10 sm:mb-16" />

            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                {/* CTA Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <div className="boarding-pass max-w-2xl mx-auto p-6 sm:p-8 md:p-12">
                        <div className="text-4xl sm:text-5xl mb-3 sm:mb-4">✈️</div>
                        <h3 className="text-2xl sm:text-3xl md:text-4xl font-black mb-3">
                            <span className="gradient-text">Учууга даярсызбы?</span>
                        </h3>
                        <p className="text-white/50 mb-3 sm:mb-4 max-w-md mx-auto text-sm sm:text-base">
                            Визадан жана авиа бизнестен туруктуу доход табууну баштаңыз.
                            Курска азыр катталыңыз!
                        </p>
                        <p className="text-gold-400 font-semibold text-base sm:text-lg mb-6 sm:mb-8">
                            {contact.phone}
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <a
                                href={contact.whatsappUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-glow flex items-center justify-center gap-2 text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-xl w-full sm:w-auto"
                            >
                                <MessageCircle className="w-5 h-5" />
                                WhatsApp аркылуу катталуу
                            </a>
                            <a
                                href={contact.instagramUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-xl border border-white/10 text-white/70 hover:text-white hover:border-gold-400/30 transition-all duration-300 w-full sm:w-auto"
                            >
                                <Instagram className="w-5 h-5" />
                                Instagram
                            </a>
                        </div>
                    </div>
                </motion.div>

                {/* Footer Bottom */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-white/5">
                    {/* Logo */}
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center">
                            <Plane className="w-4 h-4 text-navy-900" />
                        </div>
                        <span className="font-bold gradient-text">ВИЗА АДИСИ</span>
                    </div>

                    {/* Copyright */}
                    <p className="text-sm text-white/30">
                        © 2026 Виза Адиси — Анарбаева Мухлиса. Бардык укуктар корголгон.
                    </p>

                    {/* Social */}
                    <div className="flex items-center gap-3">
                        <a
                            href={contact.whatsappUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center text-white/40 hover:text-gold-400 hover:bg-white/10 transition-all duration-300"
                        >
                            <MessageCircle className="w-4 h-4" />
                        </a>
                        <a
                            href={contact.instagramUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center text-white/40 hover:text-gold-400 hover:bg-white/10 transition-all duration-300"
                        >
                            <Instagram className="w-4 h-4" />
                        </a>
                        <a
                            href={`tel:${contact.phone}`}
                            className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center text-white/40 hover:text-gold-400 hover:bg-white/10 transition-all duration-300"
                        >
                            <Phone className="w-4 h-4" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
