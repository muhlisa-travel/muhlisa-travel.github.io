import { useMousePosition } from './hooks/useAnimations';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Stats from './components/Stats/Stats';
import Modules from './components/Modules/Modules';
import Pricing from './components/Pricing/Pricing';
import Instructor from './components/Instructor/Instructor';
import FAQ from './components/FAQ/FAQ';
import Footer from './components/Footer/Footer';
import { Plane } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Lottie from 'lottie-react';
import flightAnimation from './assets/flight-loader.json';

function CursorGlow() {
    const { x, y } = useMousePosition();

    return (
        <div
            className="fixed w-64 h-64 rounded-full pointer-events-none z-30 opacity-[0.03] transition-transform duration-100 ease-out hidden lg:block"
            style={{
                background: 'radial-gradient(circle, #D4A843 0%, transparent 70%)',
                left: x - 128,
                top: y - 128,
            }}
        />
    );
}

const flights = [
    { id: 1, className: 'flight-path-1', size: 'w-5 h-5', opacity: 0.06 },
    { id: 2, className: 'flight-path-2', size: 'w-4 h-4', opacity: 0.04 },
    { id: 3, className: 'flight-path-3', size: 'w-3 h-3', opacity: 0.05 },
    { id: 4, className: 'flight-path-4', size: 'w-6 h-6', opacity: 0.03 },
];

function FlyingPlanes() {
    return (
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
            {/* Lottie flight animation — top right, subtle */}
            <div className="absolute top-[10%] right-[5%] w-40 h-40 sm:w-56 sm:h-56 opacity-[0.06]">
                <Lottie animationData={flightAnimation} loop autoplay style={{ filter: 'invert(1)' }} />
            </div>
            {/* Lottie flight — bottom left */}
            <div className="absolute bottom-[15%] left-[3%] w-32 h-32 sm:w-44 sm:h-44 opacity-[0.04] rotate-45">
                <Lottie animationData={flightAnimation} loop autoplay style={{ filter: 'invert(1)' }} />
            </div>

            {/* Dotted trail paths */}
            <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <path className="flight-trail flight-trail-1" d="M -100 200 Q 400 50 800 300 T 1600 150 T 2400 250" fill="none" stroke="#D4A843" strokeWidth="1" strokeDasharray="4 8" />
                <path className="flight-trail flight-trail-2" d="M -100 500 Q 300 350 700 550 T 1400 400 T 2200 500" fill="none" stroke="#2563EB" strokeWidth="1" strokeDasharray="4 8" />
                <path className="flight-trail flight-trail-3" d="M -100 800 Q 500 600 900 750 T 1700 650 T 2500 700" fill="none" stroke="#D4A843" strokeWidth="1" strokeDasharray="3 10" />
            </svg>

            {/* Flying planes */}
            {flights.map((f) => (
                <div key={f.id} className={`absolute ${f.className}`} style={{ opacity: f.opacity }}>
                    <Plane className={`${f.size} text-gold-400 -rotate-45`} />
                </div>
            ))}
        </div>
    );
}

/* Lottie flight divider between sections */
function FlightDivider() {
    return (
        <div className="relative flex items-center justify-center py-4 sm:py-6">
            <div className="absolute inset-x-0 top-1/2 h-px bg-gradient-to-r from-transparent via-gold-400/20 to-transparent" />
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative z-10 w-16 h-16 sm:w-20 sm:h-20"
            >
                <Lottie animationData={flightAnimation} loop autoplay style={{ filter: 'invert(1) sepia(1) saturate(3) hue-rotate(10deg) brightness(0.85)', opacity: 0.6 }} />
            </motion.div>
        </div>
    );
}

/* Parallax wrapper for scroll-driven movement */
function ParallaxSection({ children, offset = 50 }) {
    const { scrollYProgress } = useScroll();
    const y = useTransform(scrollYProgress, [0, 1], [offset, -offset]);

    return (
        <motion.div style={{ y }}>
            {children}
        </motion.div>
    );
}

/* Snap wrapper for each section */
function SnapSection({ children, className = '' }) {
    return (
        <div className={`snap-section ${className}`}>
            {children}
        </div>
    );
}

export default function App() {
    return (
        <div className="relative min-h-screen bg-navy-900">
            <FlyingPlanes />
            <CursorGlow />
            <Navbar />
            <main>
                <SnapSection>
                    <Hero />
                </SnapSection>
                <SnapSection>
                    <Stats />
                </SnapSection>
                <FlightDivider />
                <SnapSection>
                    <Modules />
                </SnapSection>
                <FlightDivider />
                <SnapSection>
                    <ParallaxSection offset={30}>
                        <Pricing />
                    </ParallaxSection>
                </SnapSection>
                <FlightDivider />
                <SnapSection>
                    <Instructor />
                </SnapSection>
                <FlightDivider />
                <SnapSection>
                    <FAQ />
                </SnapSection>
                <SnapSection>
                    <Footer />
                </SnapSection>
            </main>
        </div>
    );
}
