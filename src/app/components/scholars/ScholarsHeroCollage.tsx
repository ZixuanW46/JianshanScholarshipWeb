"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const quotes = [
    { text: "It changed the way I see the world.", author: "Sarah, '24" },
    { text: "A collision of ancient history and hyper-modern ambition.", author: "David, '24" },
    { text: "We walked out of the classroom and stepped into reality.", author: "Emma, '25" },
];

// Reusing testimonial images for the collage effect
const backgroundImages = [
    "/trip_ins/IMG_6807.jpg",
    "/trip_ins/IMG_6808.jpg",
    "/trip_ins/IMG_6809.jpg",
    "/trip_ins/IMG_6810.jpg",
    "/trip_ins/IMG_6812.jpg",
];

export default function ScholarsHeroCollage() {
    const [currentQuote, setCurrentQuote] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentQuote((prev) => (prev + 1) % quotes.length);
        }, 5000); // Change quote every 5 seconds
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative min-h-screen flex items-center justify-center bg-[#0A0A0A] overflow-hidden pt-28 pb-16">

            {/* Sliding Portrait Wall Background */}
            <div className="absolute inset-0 z-0 opacity-20 pointer-events-none flex items-center overflow-hidden">
                <motion.div
                    animate={{ x: [0, -1000] }}
                    transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
                    className="flex gap-4 px-4 h-full items-center"
                >
                    {/* Double the array for seamless infinite scrolling */}
                    {[...backgroundImages, ...backgroundImages, ...backgroundImages].map((src, i) => (
                        <div key={i} className="relative w-[30vh] h-[40vh] shrink-0 rounded-xl overflow-hidden grayscale opacity-70">
                            <img src={src} alt="" className="w-full h-full object-cover" />
                        </div>
                    ))}
                </motion.div>
                {/* Gradient Masks for blending the edges */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-transparent to-[#0A0A0A] w-full h-full" />
                <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-transparent to-[#0A0A0A] w-full h-full" />
                {/* Green/Red Color Wash overlay */}
                <div className="absolute inset-0 bg-[#1A4D2E]/30 mix-blend-color" />
            </div>

            {/* Foreground Content */}
            <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6 text-center flex flex-col items-center">

                <h1 className="text-5xl md:text-7xl lg:text-8xl font-sans font-bold text-[#FDFBF7] tracking-tighter leading-tight mb-8">
                    The <span className="font-serif italic font-normal text-[#D85C3C]">Jianshan</span> Scholars
                </h1>

                {/* Fading Quotes */}
                <div className="h-[120px] md:h-[100px] w-full max-w-2xl relative flex items-center justify-center mb-12">
                    {quotes.map((quote, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{
                                opacity: currentQuote === idx ? 1 : 0,
                                y: currentQuote === idx ? 0 : -10,
                                zIndex: currentQuote === idx ? 10 : 0
                            }}
                            transition={{ duration: 0.8, ease: "easeInOut" }}
                            className="absolute inset-0 flex flex-col items-center justify-center"
                        >
                            <p className="text-xl md:text-3xl font-serif italic text-[#FDFBF7]/90 leading-relaxed text-center">
                                "{quote.text}"
                            </p>
                            <span className="mt-4 text-[#FDFBF7]/50 font-mono text-xs tracking-widest uppercase">
                                — {quote.author}
                            </span>
                        </motion.div>
                    ))}
                </div>

                {/* Minimalist Badge Stats */}
                <div className="flex gap-3 mt-8">
                    {[
                        { label: "Founded", value: "2024" },
                        { label: "Scholars", value: "50+" },
                        { label: "Countries", value: "15+" },
                        { label: "Disciplines", value: "30+" },
                    ].map((stat) => (
                        <div key={stat.label} className="px-4 py-2 rounded border border-white/20 bg-black/40 backdrop-blur-md flex items-baseline gap-2">
                            <span className="text-[#FDFBF7] font-bold font-sans">{stat.value}</span>
                            <span className="text-[#FDFBF7]/50 font-mono text-[10px] uppercase tracking-widest">{stat.label}</span>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
