"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

const testimonialImages = [
    "/trip_ins/IMG_6807.jpg",
    "/trip_ins/IMG_6808.jpg",
    "/trip_ins/IMG_6809.jpg",
    "/trip_ins/IMG_6810.jpg",
    "/trip_ins/IMG_6812.jpg",
    "/trip_ins/IMG_6813.jpg",
    "/trip_ins/IMG_6814.jpg",
    "/trip_ins/IMG_6815.jpg",
    "/trip_ins/IMG_6816.jpg",
];

export default function ChinaTripTestimonials() {
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const updateScroll = () => {
            if (scrollRef.current) {
                const container = scrollRef.current;
                const targetChild = container.children[3] as HTMLElement; // [0] is spacer, [1] is 1st image, [2] is 2nd, [3] is 3rd image
                if (targetChild) {
                    const scrollPos = targetChild.offsetLeft - (container.clientWidth / 2) + (targetChild.clientWidth / 2);
                    container.scrollTo({ left: scrollPos, behavior: "instant" });
                }
            }
        };

        updateScroll();
        const timeout = setTimeout(updateScroll, 50);
        return () => clearTimeout(timeout);
    }, []);

    return (
        <section className="bg-[#1A4D2E] py-24 md:py-32 relative z-10 overflow-hidden text-[#FDFBF7]">
            {/* Background Texture/Pattern */}
            <div className="absolute inset-0 opacity-10 pointer-events-none"
                style={{
                    backgroundImage: 'radial-gradient(circle at 2px 2px, #FDFBF7 1px, transparent 0)',
                    backgroundSize: '40px 40px'
                }}
            />

            {/* Title Container */}
            <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16 md:mb-24"
                >
                    <span className="text-[#FDFBF7]/60 font-mono text-xs tracking-[0.2em] uppercase block mb-4">
                        What they say
                    </span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-sans font-bold tracking-tighter leading-tight">
                        Don't just take <span className="font-serif italic font-normal text-[#D85C3C]">our word</span> for it.
                    </h2>
                </motion.div>
            </div>

            {/* Full-width Carousel Container */}
            <div className="w-full relative z-10">
                <div
                    ref={scrollRef}
                    className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
                >
                    {/* Leading spacer to match max-w container alignment */}
                    <div className="flex-none w-6 md:w-12 lg:w-[max(6rem,calc((100vw-1400px)/2+6rem))]" />

                    {testimonialImages.map((src, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: (Math.min(i, 5)) * 0.1 }}
                            className="flex-none snap-center"
                        >
                            <img
                                src={src}
                                alt={`Participant quote ${i + 1}`}
                                className="h-[400px] sm:h-[450px] md:h-[500px] lg:h-[600px] w-auto rounded-3xl border border-white/10 shadow-2xl hover:border-white/30 transition-all duration-300 hover:scale-[1.02] object-contain"
                                loading="lazy"
                            />
                        </motion.div>
                    ))}

                    {/* Trailing spacer */}
                    <div className="flex-none w-6 md:w-12 lg:w-[max(6rem,calc((100vw-1400px)/2+6rem))]" />
                </div>
            </div>
        </section>
    );
}
