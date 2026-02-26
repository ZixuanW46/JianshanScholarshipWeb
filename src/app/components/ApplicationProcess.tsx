"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const timelineSteps = [
    {
        phase: "1st Round",
        date: "Closes Mar 27",
        title: "Initial Application",
        details: [
            "We'd love to bring interesting and passionate individuals to Jianshan Academy. Let us know about you.",
            "Indicate your Jianshan Academy location preference and time availability.",
            "Select as many date options as possible to increase your chances of admittance.",
        ],
    },
    {
        phase: "2nd Round",
        date: "Rolling basis",
        title: "Session Design & Video",
        details: [
            "Shortlisted candidates show their thoughts on the design of academic sessions.",
            "Submit a 1-3 min video introducing yourself and your sessions. No fancy editing needed! Just a way for us to see your communication style.",
        ],
    },
    {
        phase: "Result",
        date: "By Apr 10",
        title: "Final Confirmation",
        details: [
            "Successful scholars will receive their official invitation with confirmed camp details.",
            "The result will be updated in the portal and notified through email.",
        ],
    },
    {
        phase: "Next Steps",
        date: "Summer 2026",
        title: "Future Activities",
        details: [
            "Past Jianshan scholar gathering and Q&A session.",
            "Jianshan Scholar 2026 training session (multiple time options).",
            "Pre-trip gathering.",
        ],
    },
];

export default function ApplicationProcess() {
    const sectionRef = useRef<HTMLElement>(null);
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const progressBarRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            if (!scrollContainerRef.current || !sectionRef.current) return;

            const scrollContainer = scrollContainerRef.current;
            const scrollWidth = scrollContainer.scrollWidth;
            const viewportWidth = window.innerWidth;
            const scrollDistance = scrollWidth - viewportWidth;

            // Horizontal Scroll Animation
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    pin: true,
                    scrub: 1,
                    start: "top top",
                    end: () => `+=${scrollDistance}`,
                },
            });

            tl.to(scrollContainer, {
                x: -scrollDistance,
                ease: "none",
            });

            // The Glowing Progress Bar (pinned to viewport width growth)
            if (progressBarRef.current) {
                gsap.to(progressBarRef.current, {
                    scaleX: 1,
                    ease: "none",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        scrub: 1,
                        start: "top top",
                        end: () => `+=${scrollDistance}`,
                    },
                });
            }

            // Staggered Cards Entrance (Triggers when entering viewport horizontally)
            const cards = gsap.utils.toArray(".timeline-card") as HTMLElement[];
            cards.forEach((card) => {
                gsap.fromTo(
                    card,
                    { opacity: 0.2, scale: 0.9, y: 30, filter: "blur(4px)" },
                    {
                        opacity: 1,
                        scale: 1,
                        y: 0,
                        filter: "blur(0px)",
                        duration: 1.5,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: card,
                            containerAnimation: tl, // Watch out: containerAnimation is a premium GSAP feature (ScrollTrigger)
                            start: "left 85%", // when left of card hits 85% of viewport
                            end: "left 40%",
                            scrub: true,
                        },
                    }
                );
            });

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="bg-[#0A0A0A] text-[#FDFBF7] h-screen overflow-hidden flex flex-col relative w-full selection:bg-[#E8F3E8] selection:text-[#0A0A0A]"
        >
            {/* Header: Absolute positioned, stays fixed during pin */}
            <div className="absolute top-24 left-6 md:left-12 lg:left-24 z-30 pointer-events-none">
                <div className="mb-6">
                    <span className="inline-block text-[#E8F3E8] text-[10px] md:text-xs uppercase tracking-[0.3em] md:tracking-[0.4em] font-medium border border-[#E8F3E8]/20 bg-[#E8F3E8]/5 px-4 md:px-5 py-2 md:py-2.5 rounded-full backdrop-blur-md shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] whitespace-nowrap">
                        Application Process
                    </span>
                </div>
                <h2 className="text-5xl md:text-7xl lg:text-[5.5rem] font-serif tracking-tight leading-[0.95] text-white">
                    The Journey <br />
                    <span className="italic text-[#8AC1A6] font-light">Begins</span>
                </h2>
            </div>

            {/* Glowing Path Background Element */}
            <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent z-0 hidden md:block -translate-y-1/2" />

            {/* Active Glowing Path (Progress Bar) */}
            <div className="absolute top-1/2 left-0 w-full h-[2px] z-10 hidden md:block -translate-y-1/2 mix-blend-screen overflow-hidden pointer-events-none">
                <div
                    ref={progressBarRef}
                    className="h-full w-full bg-gradient-to-r from-transparent via-[#8AC1A6] to-white transform origin-left scale-x-0"
                    style={{
                        boxShadow: "0 0 30px 4px rgba(138, 193, 166, 0.8), 0 0 60px 10px rgba(255, 255, 255, 0.3)",
                    }}
                />
            </div>

            {/* Ambient Background Glow matching the path */}
            <div className="absolute top-1/2 left-1/4 w-[500px] h-[300px] -translate-y-1/2 bg-[#8AC1A6]/5 rounded-full blur-[120px] pointer-events-none opacity-50 mix-blend-screen" />

            {/* Horizontal Scroll Content */}
            <div className="flex-1 flex items-center relative z-20 w-full overflow-visible">
                <div
                    ref={scrollContainerRef}
                    className="flex gap-8 md:gap-24 px-6 md:px-24 pt-48 md:pt-32 pb-12 items-center flex-nowrap w-[max-content] h-full"
                >
                    {/* Spacer to push first card away from left edge of screen */}
                    <div className="w-[10vw] shrink-0" />

                    {timelineSteps.map((step, index) => (
                        <div
                            key={index}
                            className="timeline-card relative w-[320px] md:w-[420px] shrink-0 bg-[#111111]/80 backdrop-blur-xl border border-white/[0.08] p-8 md:p-12 rounded-[2rem] shadow-[0_30px_60px_rgba(0,0,0,0.6)] flex flex-col gap-6 group hover:border-white/[0.15] transition-colors duration-500 overflow-hidden"
                        >
                            {/* Inner ambient card glow */}
                            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                            <div className="flex flex-col gap-2 relative z-10">
                                <span className="text-[#8AC1A6] font-mono text-[10px] md:text-xs tracking-[0.2em] md:tracking-[0.3em] uppercase block mb-1">
                                    {step.phase}
                                </span>
                                <h3 className="text-3xl md:text-4xl lg:text-[2.5rem] font-serif text-white tracking-tight leading-tight">
                                    {step.title}
                                </h3>
                                <p className="text-white/40 font-mono text-xs tracking-wider uppercase mt-1">
                                    {step.date}
                                </p>
                            </div>

                            <div className="w-full h-px bg-white/[0.08] relative z-10" />

                            <div className="flex flex-col gap-4 relative z-10">
                                {step.details.map((detail, dIdx) => (
                                    <p
                                        key={dIdx}
                                        className="text-sm md:text-[0.95rem] text-white/50 font-sans font-light leading-relaxed group-hover:text-white/70 transition-colors duration-300"
                                    >
                                        {detail}
                                    </p>
                                ))}
                            </div>
                        </div>
                    ))}

                    {/* End spacer for smooth scrolling all the way through */}
                    <div className="w-[30vw] md:w-[50vw] shrink-0" />
                </div>
            </div>
        </section>
    );
}
