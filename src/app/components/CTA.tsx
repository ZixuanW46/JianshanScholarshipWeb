"use client";

import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useTransform, useSpring, AnimatePresence } from 'framer-motion';
import { ArrowRight, Sparkles, MapPin, Users, Calendar, Award } from 'lucide-react';

export default function CTA() {
    const cardRef = useRef<HTMLDivElement>(null);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Custom cursor state for the Apply Now stub
    const [stubHover, setStubHover] = useState(false);
    const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

    // Enhanced 3D Tilt — wider rotation for more pronounced movement
    const rotateX = useTransform(mouseY, [-0.5, 0.5], [15, -15]);
    const rotateY = useTransform(mouseX, [-0.5, 0.5], [-15, 15]);
    const springX = useSpring(rotateX, { stiffness: 150, damping: 20, mass: 0.4 });
    const springY = useSpring(rotateY, { stiffness: 150, damping: 20, mass: 0.4 });

    // Shimmer position driven by mouse
    const shimmerX = useTransform(mouseX, [-0.5, 0.5], ['-120%', '120%']);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        mouseX.set(x);
        mouseY.set(y);
    };

    const handleMouseLeave = () => {
        mouseX.set(0);
        mouseY.set(0);
    };

    // Track cursor position globally for the custom cursor
    const handleSectionMouseMove = (e: React.MouseEvent) => {
        setCursorPos({ x: e.clientX, y: e.clientY });
    };

    const highlights = [
        { icon: Users, value: '15+', label: 'Travel companions' },
        { icon: MapPin, value: '3+', label: 'Cities explored' },
        { icon: Award, value: '100%', label: 'Fully funded' },
        { icon: Calendar, value: '18', label: 'Days of immersion' },
    ];

    return (
        <section
            className="w-full bg-[#1A4D2E] py-32 md:py-40 relative flex items-center justify-center overflow-hidden"
            onMouseMove={handleSectionMouseMove}
        >
            {/* Custom airplane cursor follower */}
            <AnimatePresence>
                {stubHover && (
                    <motion.div
                        className="fixed z-[9999] pointer-events-none"
                        initial={{ opacity: 0, scale: 0.3 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.3 }}
                        transition={{ duration: 0.2, ease: 'easeOut' }}
                        style={{
                            left: cursorPos.x - 16,
                            top: cursorPos.y - 16,
                        }}
                    >
                        <svg
                            width="32"
                            height="32"
                            viewBox="0 0 24 24"
                            fill="white"
                            xmlns="http://www.w3.org/2000/svg"
                            style={{ filter: 'drop-shadow(0 0 8px rgba(138,193,166,0.6))' }}
                        >
                            <path d="M21 16v-2l-8-5V3.5A1.5 1.5 0 0 0 11.5 2 1.5 1.5 0 0 0 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
                        </svg>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Background ambient glow — stays section-level */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-[#2E8B57]/15 rounded-full blur-[150px] pointer-events-none" />
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.12] mix-blend-overlay pointer-events-none" />

            <div className="relative z-10 w-full max-w-[1400px] px-6 md:px-12 lg:px-24 flex flex-col items-center">

                {/* Header */}
                <div className="text-center mb-16 md:mb-20">
                    <span className="text-xs tracking-[0.3em] font-medium text-[#FDFBF7]/50 uppercase flex items-center justify-center gap-4 mb-6">
                        <div className="w-8 h-[1px] bg-[#FDFBF7]/30" />
                        Application Open
                        <div className="w-8 h-[1px] bg-[#FDFBF7]/30" />
                    </span>
                    <h2 className="text-5xl md:text-7xl lg:text-[5.5rem] font-serif leading-[0.95] text-[#FDFBF7] tracking-tighter">
                        Your Summer 2026, <br />
                        <span className="italic text-[#8AC1A6]">starts here.</span>
                    </h2>
                </div>

                {/* 3D Card — perspective scoped to this wrapper only */}
                <div
                    className="w-full flex justify-center"
                    style={{ perspective: '1200px' }}
                >
                    <motion.div
                        ref={cardRef}
                        onMouseMove={handleMouseMove}
                        onMouseLeave={handleMouseLeave}
                        style={{
                            rotateX: springX,
                            rotateY: springY,
                            transformStyle: "preserve-3d",
                        }}
                        className="w-full max-w-[1400px] bg-[#0A0A0A]/80 backdrop-blur-3xl rounded-[2rem] border border-white/[0.08] p-1 md:p-1.5 relative shadow-[0_50px_100px_rgba(0,0,0,0.7)] cursor-pointer group overflow-hidden"
                    >
                        {/* Shimmer glare — scoped inside the card via overflow-hidden above */}
                        <motion.div
                            className="absolute inset-0 z-20 pointer-events-none opacity-30 rounded-[2rem] mix-blend-overlay"
                            style={{
                                background: 'linear-gradient(105deg, transparent 20%, rgba(255,255,255,0.5) 25%, rgba(138,193,166,0.5) 28%, transparent 35%)',
                                x: shimmerX,
                            }}
                        />

                        {/* Inner Card */}
                        <div
                            className="rounded-[1.75rem] border border-white/5 bg-gradient-to-br from-[#1A1A1A] to-[#0D0D0D] flex flex-col md:flex-row relative z-10 overflow-hidden"
                            style={{ transform: "translateZ(50px)" }}
                        >

                            {/* Left Side: Impact & Highlights */}
                            <div className="w-full md:w-8/12 p-8 md:p-12 border-b md:border-b-0 md:border-r border-dashed border-white/15 flex flex-col relative overflow-hidden">

                                {/* Header row */}
                                <div className="flex items-center justify-between mb-12 relative z-10">
                                    <div>
                                        <span className="text-[#8AC1A6] font-mono text-[10px] tracking-widest block mb-1">PROGRAM</span>
                                        <span className="text-white font-medium tracking-widest text-sm">JIANSHAN SCHOLARSHIP · 2026</span>
                                    </div>
                                    <div className="w-9 h-9 rounded-full border border-white/10 bg-white/5 flex items-center justify-center">
                                        <Sparkles className="w-4 h-4 text-[#8AC1A6]" />
                                    </div>
                                </div>

                                {/* Destination */}
                                <div className="relative z-10 mb-12">
                                    <span className="text-white/40 font-mono text-xs tracking-widest mb-3 block">DESTINATION</span>
                                    <h3 className="text-6xl md:text-7xl font-serif text-white tracking-tight leading-none">China</h3>
                                </div>

                                {/* Highlight Stats Grid */}
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 relative z-10">
                                    {highlights.map(({ icon: Icon, value, label }) => (
                                        <div key={label} className="group/stat">
                                            <div className="flex items-center gap-2 mb-2">
                                                <Icon className="w-3.5 h-3.5 text-[#8AC1A6]/70" />
                                                <span className="text-2xl md:text-3xl font-serif text-white font-medium">{value}</span>
                                            </div>
                                            <span className="text-[11px] text-white/40 font-mono uppercase tracking-wider leading-tight block">{label}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Right Side: CTA Button — custom cursor zone */}
                            <div
                                className="w-full md:w-4/12 flex flex-col justify-center items-center p-8 md:p-12 relative bg-[#111111] overflow-hidden group-hover:bg-[#141414] transition-colors duration-500"
                                style={stubHover ? { cursor: 'none' } : undefined}
                                onMouseEnter={() => setStubHover(true)}
                                onMouseLeave={() => setStubHover(false)}
                            >
                                {/* Animated scan line */}
                                <div className="absolute inset-x-0 h-[100px] bg-gradient-to-b from-transparent via-[#8AC1A6]/8 to-transparent top-0 animate-[scan_4s_ease-in-out_infinite]" />

                                <div className="flex flex-col items-center justify-center gap-5 relative z-10">
                                    <div className="w-16 h-16 rounded-full bg-[#1A4D2E] text-[#FDFBF7] flex items-center justify-center shadow-[0_0_40px_rgba(26,77,46,0.5)] group-hover:scale-110 group-hover:shadow-[0_0_60px_rgba(138,193,166,0.6)] transition-all duration-500">
                                        <ArrowRight className="w-6 h-6 -rotate-45 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-500" />
                                    </div>

                                    <div className="text-center">
                                        <h4 className="text-2xl font-sans font-semibold text-white tracking-tight mb-1.5">Apply Now</h4>
                                        <p className="text-white/40 text-[10px] font-mono uppercase tracking-widest">Cohort 2026</p>
                                    </div>
                                </div>

                                {/* Decorative barcode */}
                                <div className="absolute bottom-5 w-full px-12 flex justify-between items-end opacity-15">
                                    <div className="w-1 h-8 bg-white" />
                                    <div className="w-2 h-6 bg-white" />
                                    <div className="w-0.5 h-8 bg-white" />
                                    <div className="w-3 h-5 bg-white" />
                                    <div className="w-1.5 h-8 bg-white" />
                                    <div className="w-1 h-7 bg-white" />
                                    <div className="w-2.5 h-8 bg-white" />
                                </div>
                            </div>

                        </div>
                    </motion.div>
                </div>

                <style dangerouslySetInnerHTML={{
                    __html: `
                    @keyframes scan {
                        0%, 100% { transform: translateY(-100%); opacity: 0; }
                        50% { transform: translateY(300%); opacity: 1; }
                    }
                `}} />
            </div>
        </section>
    );
}
