"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Instagram, Mail, ArrowUpRight } from 'lucide-react';

export default function Contact() {
    const containerRef = useRef<HTMLDivElement>(null);

    // Parallax effect for the background / content reveal
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end 75%"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["-20%", "0%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.3, 0.65], [0, 0.5, 1]);

    return (
        <section
            ref={containerRef}
            className="w-full min-h-screen bg-[#0A0A0A] relative z-0 flex items-center justify-center overflow-hidden pt-24 pb-72 md:pb-80"
        >

            {/* Parallax Content Container */}
            <motion.div
                style={{ y, opacity }}
                className="w-full max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24 grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-8 items-center relative z-10"
            >
                {/* Left Side: Text & Links */}
                <div className="flex flex-col justify-center h-full">
                    <span className="text-[#8AC1A6] font-mono text-xs tracking-[0.2em] uppercase block mb-6">
                        Stay Connected
                    </span>
                    <h2 className="text-5xl md:text-7xl lg:text-[5.5rem] font-serif leading-[0.95] text-[#FDFBF7] tracking-tighter mb-8">
                        Join the <br />
                        <span className="italic text-[#8AC1A6]">Family.</span>
                    </h2>
                    <p className="text-white/60 font-sans text-lg mb-12 max-w-md leading-relaxed">
                        Follow our Cambridge partner CAMCapy on Instagram to learn more about past Jianshan Scholar experiences. Have more questions? Contact CAMCapy via email or DM on Instagram.
                    </p>

                    <div className="flex flex-col gap-6">
                        <a
                            href="https://www.instagram.com/camcapysoc"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center justify-between p-6 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors duration-300 backdrop-blur-sm"
                        >
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-[#1A1A1A] flex items-center justify-center border border-white/10 group-hover:border-[#8AC1A6]/50 transition-colors">
                                    <Instagram className="w-5 h-5 text-white group-hover:text-[#8AC1A6] transition-colors" />
                                </div>
                                <div>
                                    <p className="text-white font-medium text-lg tracking-tight">@camcapysoc</p>
                                    <p className="text-white/40 text-xs font-mono uppercase tracking-wider">Follow for updates</p>
                                </div>
                            </div>
                            <ArrowUpRight className="w-5 h-5 text-white/30 group-hover:text-white transition-colors" />
                        </a>

                        <a
                            href="mailto:camcapy@cambridgesu.co.uk"
                            className="group flex items-center justify-between p-6 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors duration-300 backdrop-blur-sm"
                        >
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-[#1A1A1A] flex items-center justify-center border border-white/10 group-hover:border-[#8AC1A6]/50 transition-colors">
                                    <Mail className="w-5 h-5 text-white group-hover:text-[#8AC1A6] transition-colors" />
                                </div>
                                <div>
                                    <p className="text-white font-medium text-lg tracking-tight">camcapy@cambridgesu.co.uk</p>
                                    <p className="text-white/40 text-xs font-mono uppercase tracking-wider">Have more questions?</p>
                                </div>
                            </div>
                            <ArrowUpRight className="w-5 h-5 text-white/30 group-hover:text-white transition-colors" />
                        </a>
                    </div>
                </div>

                {/* Right Side: Giant QR Code */}
                <div className="flex justify-center items-center">
                    <motion.div
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                        className="relative group perspective-[1000px]"
                    >
                        {/* Decorative scan frame */}
                        <motion.div
                            animate={{
                                opacity: [0.2, 0.8, 0.2],
                                scale: [0.95, 1.05, 0.95]
                            }}
                            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -inset-8 border-2 border-[#8AC1A6]/40 rounded-[3rem] block"
                        />

                        <motion.div
                            animate={{
                                boxShadow: [
                                    "0 0 40px rgba(138,193,166,0.1)",
                                    "0 0 100px rgba(138,193,166,0.6)",
                                    "0 0 40px rgba(138,193,166,0.1)"
                                ]
                            }}
                            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                            className="relative w-64 h-64 md:w-80 md:h-80 bg-white p-4 rounded-3xl overflow-hidden"
                        >
                            {/* Inner Corners */}
                            <div className="absolute top-2 left-2 w-8 h-8 border-t-2 border-l-2 border-[#1A1A1A] rounded-tl-xl" />
                            <div className="absolute top-2 right-2 w-8 h-8 border-t-2 border-r-2 border-[#1A1A1A] rounded-tr-xl" />
                            <div className="absolute bottom-2 left-2 w-8 h-8 border-b-2 border-l-2 border-[#1A1A1A] rounded-bl-xl" />
                            <div className="absolute bottom-2 right-2 w-8 h-8 border-b-2 border-r-2 border-[#1A1A1A] rounded-br-xl" />

                            <img
                                src="/ins_qr.png"
                                alt="CAMCapy Instagram QR code"
                                className="w-full h-full rounded-2xl object-contain"
                            />
                        </motion.div>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
}
