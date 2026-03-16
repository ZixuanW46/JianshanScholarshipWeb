import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

const Options2026 = () => {
    const slotRef = useRef<HTMLDivElement>(null);
    const tlRef = useRef<gsap.core.Timeline | null>(null);
    const [isHovered, setIsHovered] = useState(false);

    const cities = ["Shanghai", "Beijing", "Shenzhen", "Hangzhou", "Chengdu", "Shanghai"];

    useEffect(() => {
        if (!slotRef.current) return;

        tlRef.current = gsap.timeline({ repeat: -1, paused: false });
        tlRef.current.to(slotRef.current, {
            y: "-5.5em", // Move up exactly 5 items (5 * 1.1em) to loop seamlessly
            duration: 4,
            ease: "none",
        });

        return () => {
            tlRef.current?.kill();
        };
    }, []);

    useEffect(() => {
        if (tlRef.current) {
            gsap.to(tlRef.current, {
                timeScale: isHovered ? 0.15 : 1,
                duration: 0.8,
                ease: "power2.out"
            });
        }
    }, [isHovered]);

    return (
        <section
            className="py-24 relative bg-[#FDFBF7] overflow-hidden flex flex-col items-center justify-center min-h-[70vh] px-6 md:px-12 lg:px-24 group"
        >
            <div className="max-w-[1400px] mx-auto w-full flex flex-col items-center">

                {/* Intro Text Group (Stacked above) */}
                <div className="w-full max-w-3xl mb-16 md:mb-20 text-center">
                    <p className="text-xl md:text-2xl font-serif text-[#1A1A1A] leading-relaxed">
                        Every summer, we host 7-day academies in 1 of the 5 hub cities we operate at.
                    </p>
                </div>

                {/* Equation Typography Group */}
                <div
                    className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif text-[#1A1A1A] leading-tight tracking-tight w-full flex flex-col items-center cursor-default"
                >
                    {/* First bracket group */}
                    <div className="flex flex-wrap items-center justify-center gap-x-2 md:gap-x-4 mb-2 md:mb-4">
                        <span className="text-[#1A1A1A]/40">[</span>
                        <span>7 Days in</span>

                        {/* Slot Machine Area - Widened & Restricted Hover */}
                        <div
                            className="relative mt-2 md:mt-0 h-[1.1em] overflow-hidden flex items-center justify-center min-w-[180px] sm:min-w-[240px] md:min-w-[280px] border-b-[2px] sm:border-b-[3px] border-[#1A1A1A] cursor-ew-resize transition-colors duration-300 hover:border-[#1A4D2E]"
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                        >
                            <div ref={slotRef} className="absolute top-0 left-0 w-full flex flex-col items-center">
                                {cities.map((city, idx) => (
                                    <div key={idx} className="h-[1.1em] flex items-center justify-center font-medium italic text-[#1A4D2E]">
                                        {city}
                                    </div>
                                ))}
                            </div>
                        </div>
                        <span className="text-[#1A1A1A]/40">]</span>
                    </div>

                    {/* Plus symbol */}
                    <div className="font-sans font-light text-xl md:text-3xl text-[#1A1A1A]/30 my-3 md:my-0">
                        +
                    </div>

                    {/* Second bracket group */}
                    <div className="flex flex-wrap items-center justify-center gap-x-2 md:gap-x-4 mb-2 md:mb-4">
                        <span className="text-[#1A1A1A]/40">[</span>
                        <span className="relative">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1A1A1A] to-[#606060]">
                                11-Day Epic Trip
                            </span>
                        </span>
                        <span className="text-[#1A1A1A]/40">]</span>
                    </div>

                    {/* Equals symbol */}
                    <div className="font-sans font-light text-xl md:text-3xl text-[#1A1A1A]/30 mt-6 mb-3">
                        =
                    </div>

                    {/* Result */}
                    <div className="flex flex-col items-center justify-center text-center w-full">
                        <div className="flex items-center justify-center text-[#1A4D2E] italic font-medium">
                            Your Jianshan Experience
                        </div>
                        
                        {/* 2026 Itinerary Ticket Widget */}
                        <div className="w-full max-w-3xl flex flex-col md:flex-row bg-white border border-[#1A1A1A]/10 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow font-sans mt-8 md:mt-12">
                            {/* Year / Tagline */}
                            <div className="bg-[#1A4D2E] text-white p-6 md:p-8 flex flex-col justify-center items-center md:items-start min-w-[140px] relative overflow-hidden">
                                {/* Subtle background texture/pattern */}
                                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '12px 12px' }}></div>
                                <span className="text-[10px] md:text-xs font-semibold tracking-[0.2em] uppercase opacity-80 mb-2 z-10">Confirmed</span>
                                <span className="text-4xl md:text-5xl font-serif italic z-10 leading-none">2026</span>
                            </div>
                            
                            {/* Details Grid */}
                            <div className="flex-1 flex flex-col sm:flex-row p-6 md:p-8 gap-6 sm:gap-0 relative">
                                {/* Vertical Divider for desktop */}
                                <div className="hidden sm:block absolute top-[20%] bottom-[20%] left-1/2 w-px bg-[#1A1A1A]/10"></div>
                                
                                {/* Part 1: Academy */}
                                <div className="flex-1 flex flex-col sm:pr-8 text-left">
                                    <div className="flex items-center gap-2 mb-3">
                                        <div className="w-1.5 h-1.5 rounded-full border border-[#1A4D2E]"></div>
                                        <span className="text-[10px] font-semibold tracking-widest text-[#1A1A1A]/50 uppercase">The Academy</span>
                                    </div>
                                    <div className="text-xl md:text-2xl font-serif text-[#1A1A1A] mb-1">
                                        Hangzhou
                                    </div>
                                    <div className="text-sm text-[#1A1A1A]/60 flex items-center gap-1.5 mt-auto pt-3">
                                        <svg className="w-4 h-4 opacity-70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                        </svg>
                                        August 2 — 8
                                    </div>
                                </div>
                                
                                {/* Horizontal Divider for mobile */}
                                <div className="w-full h-px bg-[#1A1A1A]/5 sm:hidden"></div>

                                {/* Part 2: Trip */}
                                <div className="flex-1 flex flex-col sm:pl-8 text-left">
                                    <div className="flex items-center gap-2 mb-3">
                                        <div className="w-1.5 h-1.5 rounded-full bg-[#1A4D2E]"></div>
                                        <span className="text-[10px] font-semibold tracking-widest text-[#1A1A1A]/50 uppercase">The Trip</span>
                                    </div>
                                    <div className="text-xl md:text-2xl font-serif text-[#1A1A1A] mb-1">
                                        HZ <span className="text-[#1A1A1A]/30 font-sans mx-1">→</span> SH <span className="text-[#1A1A1A]/30 font-sans mx-1">→</span> BJ
                                    </div>
                                    {/* Small explanation of HZ/SH/BJ */}
                                    <div className="text-xs text-[#1A1A1A]/40 mb-1 leading-tight">
                                        Hangzhou, Shanghai, Beijing
                                    </div>
                                    <div className="text-sm text-[#1A1A1A]/60 flex items-center gap-1.5 mt-auto pt-1 sm:pt-3">
                                        <svg className="w-4 h-4 opacity-70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                        </svg>
                                        August 8 — 18
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Ambient Background Elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-[#E8F3E8]/50 to-transparent rounded-full blur-3xl -z-10 opacity-50 transition-transform duration-1000 ease-out group-hover:scale-105 pointer-events-none"></div>
        </section>
    );
};

export default Options2026;
