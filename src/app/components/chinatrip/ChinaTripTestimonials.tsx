"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight, Instagram } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

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
    const sectionRef = useRef<HTMLElement>(null);
    const trackRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            if (!sectionRef.current || !trackRef.current) return;

            const track = trackRef.current;

            const getScrollAmount = () => {
                const trackWidth = track.scrollWidth;
                return Math.max(trackWidth - window.innerWidth, 0);
            };

            gsap.to(track, {
                x: () => -getScrollAmount(),
                ease: "none",
                scrollTrigger: {
                    id: "china-trip-testimonials",
                    trigger: sectionRef.current,
                    pin: true,
                    scrub: 1,
                    start: "top top",
                    end: () => `+=${getScrollAmount()}`,
                    invalidateOnRefresh: true,
                },
            });

            const handleImageLoad = () => {
                ScrollTrigger.refresh();
            };

            const images = track.querySelectorAll("img");
            images.forEach((img) => {
                if (img.complete) {
                    handleImageLoad();
                } else {
                    img.addEventListener("load", handleImageLoad);
                }
            });

            return () => {
                images.forEach((img) => {
                    img.removeEventListener("load", handleImageLoad);
                });
            };
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="bg-[#1A4D2E] h-screen relative z-10 overflow-hidden text-[#FDFBF7]"
        >
            <div
                className="absolute inset-0 opacity-10 pointer-events-none"
                style={{
                    backgroundImage: "radial-gradient(circle at 2px 2px, #FDFBF7 1px, transparent 0)",
                    backgroundSize: "40px 40px",
                }}
            />

            <div className="h-full flex flex-col justify-center">
                <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24 relative z-10 w-full">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-8 md:mb-12"
                    >
                        <span className="text-[#FDFBF7]/60 font-mono text-xs tracking-[0.2em] uppercase block mb-4">
                            What they say
                        </span>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-sans font-bold tracking-tighter leading-tight">
                            Don't just take <span className="font-serif italic font-normal text-[#D85C3C]">our word</span> for it.
                        </h2>
                    </motion.div>
                </div>

                <div className="w-full relative z-10 overflow-hidden">
                    <div
                        ref={trackRef}
                        className="flex gap-8 pt-2 md:pt-8 pb-16 will-change-transform"
                    >
                        <div className="flex-none w-6 md:w-12 lg:w-[max(6rem,calc((100vw-1400px)/2+6rem))]" />

                        {testimonialImages.map((src, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.6, delay: Math.min(i, 5) * 0.1 }}
                                className="flex-none"
                            >
                                <img
                                    src={src}
                                    alt={`Participant quote ${i + 1}`}
                                    className="h-[400px] sm:h-[450px] md:h-[500px] lg:h-[600px] w-auto rounded-3xl border border-white/10 shadow-2xl hover:border-white/30 transition-all duration-300 hover:scale-110 object-contain hover:shadow-[0_30px_60px_rgba(0,0,0,0.6)] z-20 relative hover:z-30 pointer-events-none"
                                    loading="lazy"
                                />
                            </motion.div>
                        ))}

                        <motion.a
                            href="https://www.instagram.com/camcapysoc"
                            target="_blank"
                            rel="noreferrer"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="flex-none w-[320px] sm:w-[360px] md:w-[420px] lg:w-[460px] h-[400px] sm:h-[450px] md:h-[500px] lg:h-[600px] rounded-3xl border border-white/15 bg-white/8 backdrop-blur-md p-8 md:p-10 flex flex-col justify-between text-left hover:bg-white/12 hover:border-white/30 transition-all duration-300 group"
                        >
                            <div>
                                <div className="w-14 h-14 rounded-2xl bg-[#D85C3C] text-white flex items-center justify-center mb-8 shadow-lg">
                                    <Instagram className="w-7 h-7" />
                                </div>
                                <span className="text-[#FDFBF7]/60 font-mono text-xs tracking-[0.2em] uppercase block mb-4">
                                    Keep Exploring
                                </span>
                                <h3 className="text-3xl md:text-4xl lg:text-5xl font-serif leading-[1.05] text-white mb-5">
                                    More stories <br />on Instagram
                                </h3>
                                <p className="text-sm md:text-base text-white/75 leading-relaxed max-w-sm">
                                    Follow CAMCapy for more moments, memories, and behind-the-scenes snapshots from past Jianshan scholar journeys.
                                </p>
                            </div>

                            <div className="flex items-center justify-between pt-6 border-t border-white/10">
                                <span className="text-lg md:text-xl font-medium text-white">
                                    @camcapysoc
                                </span>
                                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300">
                                    <ArrowUpRight className="w-5 h-5" />
                                </div>
                            </div>
                        </motion.a>

                        <div className="flex-none w-6 md:w-12 lg:w-[max(6rem,calc((100vw-1400px)/2+6rem))]" />
                    </div>
                </div>
            </div>
        </section>
    );
}
