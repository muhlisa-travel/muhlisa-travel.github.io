import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

// Import all slides
import slide1 from '../../assets/images/slide_1.png';
import slide2 from '../../assets/images/slide_2.png';
import slide3 from '../../assets/images/slide_3.png';
import slide4 from '../../assets/images/slide_4.png';
import slide5 from '../../assets/images/slide_5.png';
import slide6 from '../../assets/images/slide_6.png';
import slide7 from '../../assets/images/slide_7.png';
import slide8 from '../../assets/images/slide_8.png';
import slide9 from '../../assets/images/slide_9.png';
import slide10 from '../../assets/images/slide_10.png';
import slide11 from '../../assets/images/slide_11.png';
import slide12 from '../../assets/images/slide_12.png';
import slide13 from '../../assets/images/slide_13.png';
import slide14 from '../../assets/images/slide_14.png';

const slides = [
    slide1, slide2, slide3, slide4, slide5, slide6, slide7,
    slide8, slide9, slide10, slide11, slide12, slide13, slide14,
];

const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => Math.abs(offset) * velocity;

export default function SlideGallery() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [lightbox, setLightbox] = useState(false);
    const [[page, direction], setPage] = useState([0, 0]);

    const paginate = (newDirection) => {
        const newIndex =
            newDirection === 1
                ? (currentIndex + 1) % slides.length
                : (currentIndex - 1 + slides.length) % slides.length;
        setCurrentIndex(newIndex);
        setPage([page + newDirection, newDirection]);
    };

    const variants = {
        enter: (dir) => ({
            x: dir > 0 ? 300 : -300,
            opacity: 0,
            scale: 0.95,
        }),
        center: {
            x: 0,
            opacity: 1,
            scale: 1,
        },
        exit: (dir) => ({
            x: dir < 0 ? 300 : -300,
            opacity: 0,
            scale: 0.95,
        }),
    };

    return (
        <section className="relative py-20 sm:py-28">
            <div className="section-divider mb-16" />
            <div className="max-w-6xl mx-auto px-4">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <span className="text-xs font-semibold tracking-widest text-gold-400 uppercase mb-3 block">
                        Курс материалдары
                    </span>
                    <h2 className="text-4xl sm:text-5xl font-black mb-4">
                        <span className="gradient-text">Слайддар</span>
                    </h2>
                    <p className="text-white/40 text-lg">
                        Курстун визуалдык программасы
                    </p>
                </motion.div>

                {/* Carousel */}
                <div className="relative max-w-sm mx-auto">
                    {/* Main Image */}
                    <div
                        className="relative aspect-[1080/1350] rounded-2xl overflow-hidden glass cursor-pointer"
                        onClick={() => setLightbox(true)}
                    >
                        <AnimatePresence initial={false} custom={direction}>
                            <motion.img
                                key={page}
                                src={slides[currentIndex]}
                                custom={direction}
                                variants={variants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{
                                    x: { type: 'spring', stiffness: 300, damping: 30 },
                                    opacity: { duration: 0.2 },
                                }}
                                className="absolute inset-0 w-full h-full object-cover"
                                drag="x"
                                dragConstraints={{ left: 0, right: 0 }}
                                dragElastic={1}
                                onDragEnd={(e, { offset, velocity }) => {
                                    const swipe = swipePower(offset.x, velocity.x);
                                    if (swipe < -swipeConfidenceThreshold) paginate(1);
                                    else if (swipe > swipeConfidenceThreshold) paginate(-1);
                                }}
                            />
                        </AnimatePresence>
                    </div>

                    {/* Navigation Buttons */}
                    <button
                        onClick={() => paginate(-1)}
                        className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full glass flex items-center justify-center text-white/70 hover:text-white transition-colors z-10"
                    >
                        <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                        onClick={() => paginate(1)}
                        className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full glass flex items-center justify-center text-white/70 hover:text-white transition-colors z-10"
                    >
                        <ChevronRight className="w-5 h-5" />
                    </button>

                    {/* Counter */}
                    <div className="text-center mt-4">
                        <span className="text-sm text-white/40 font-mono">
                            {String(currentIndex + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
                        </span>
                    </div>

                    {/* Dots */}
                    <div className="flex justify-center gap-1.5 mt-3">
                        {slides.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => {
                                    setPage([i, i > currentIndex ? 1 : -1]);
                                    setCurrentIndex(i);
                                }}
                                className={`h-1.5 rounded-full transition-all duration-300 ${i === currentIndex
                                        ? 'w-6 bg-gold-400'
                                        : 'w-1.5 bg-white/20 hover:bg-white/40'
                                    }`}
                            />
                        ))}
                    </div>
                </div>
            </div>

            {/* Lightbox */}
            <AnimatePresence>
                {lightbox && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
                        onClick={() => setLightbox(false)}
                    >
                        <button
                            onClick={() => setLightbox(false)}
                            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                        >
                            <X className="w-5 h-5" />
                        </button>
                        <motion.img
                            initial={{ scale: 0.9 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.9 }}
                            src={slides[currentIndex]}
                            className="max-h-[90vh] max-w-[90vw] object-contain rounded-xl"
                            onClick={(e) => e.stopPropagation()}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
