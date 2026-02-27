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
            className="py-24 relative bg-[#FDFBF7] overflow-hidden flex flex-col items-center justify-center min-h-[70vh] px-4 sm:px-6 lg:px-8 group"
        >
            <div className="max-w-[1400px] mx-auto w-full flex flex-col items-center">

                {/* Intro Text Group (Stacked above) */}
                <div className="w-full max-w-3xl mb-16 md:mb-20 text-center">
                    <p className="text-xl md:text-2xl font-serif text-[#1A1A1A] leading-relaxed">
                        Every summer, we host 7-day academies in 3 of the 5 hub cities we operate at. You bring your schedule, and we match you to the optimal location.
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
                    <div className="flex items-center justify-center text-[#1A4D2E] italic font-medium">
                        Your Jianshan 2026
                    </div>
                </div>
            </div>

            {/* Ambient Background Elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-[#E8F3E8]/50 to-transparent rounded-full blur-3xl -z-10 opacity-50 transition-transform duration-1000 ease-out group-hover:scale-105 pointer-events-none"></div>
        </section>
    );
};

export default Options2026;
