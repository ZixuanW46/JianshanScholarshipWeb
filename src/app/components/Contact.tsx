"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Instagram, Mail, ArrowUpRight } from 'lucide-react';

export default function Contact() {
    const containerRef = useRef<HTMLDivElement>(null);

    // Parallax effect for the background / content reveal
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end end"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["-20%", "0%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.5, 1]);

    return (
        <section
            ref={containerRef}
            className="w-full min-h-screen bg-[#0A0A0A] relative z-0 flex items-center justify-center overflow-hidden pt-24 pb-72 md:pb-80"
        >

            {/* Parallax Content Container */}
            <motion.div
                style={{ y, opacity }}
                className="w-full max-w-[1400px] mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-8 items-center relative z-10"
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
                            href="https://instagram.com/camcapysoc"
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
                    <div className="relative group perspective-[1000px]">
                        {/* Decorative scan frame */}
                        <div className="absolute -inset-8 border border-white/10 rounded-[3rem] opacity-50 block" />

                        <div className="relative w-64 h-64 md:w-80 md:h-80 bg-white p-4 rounded-3xl overflow-hidden shadow-[0_0_100px_rgba(138,193,166,0.15)] group-hover:shadow-[0_0_120px_rgba(138,193,166,0.25)] transition-shadow duration-500">
                            {/* Inner Corners */}
                            <div className="absolute top-2 left-2 w-8 h-8 border-t-2 border-l-2 border-[#1A1A1A] rounded-tl-xl" />
                            <div className="absolute top-2 right-2 w-8 h-8 border-t-2 border-r-2 border-[#1A1A1A] rounded-tr-xl" />
                            <div className="absolute bottom-2 left-2 w-8 h-8 border-b-2 border-l-2 border-[#1A1A1A] rounded-bl-xl" />
                            <div className="absolute bottom-2 right-2 w-8 h-8 border-b-2 border-r-2 border-[#1A1A1A] rounded-br-xl" />

                            {/* QR Code Placeholder - Wait, we don't have a component for this yet, so using a stylized block */}
                            {/* For a real QR code you'd use next/image here */}
                            <div className="w-full h-full bg-[#1A1A1A] rounded-2xl flex items-center justify-center relative overflow-hidden">
                                <div className="absolute inset-x-0 h-[200%] bg-gradient-to-b from-transparent via-white/10 to-transparent top-[-100%] animate-[scan_3s_ease-in-out_infinite]" />
                                <div className="text-white/20 text-center px-6 font-mono text-sm leading-relaxed">
                                    [ Insert QR Code Here ]<br />
                                    <span className="text-[10px] uppercase mt-4 block text-[#8AC1A6]">Scan with phone</span>
                                </div>

                                {/* Faux QR Grid lines */}
                                <div className="absolute inset-0 grid grid-cols-6 grid-rows-6 gap-2 p-6 opacity-20">
                                    {Array.from({ length: 36 }).map((_, i) => (
                                        <div key={i} className={"bg-white rounded-[2px] " + (Math.random() > 0.5 ? 'opacity-100' : 'opacity-0')} />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>

            <style dangerouslySetInnerHTML={{
                __html: `
            @keyframes scan {
                0%, 100% { transform: translateY(0); }
                50% { transform: translateY(80%); }
                }
            `}} />
        </section>
    );
}
