"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const timelineSteps = [
    {
        phase: "Step 01",
        date: "Rolling basis",
        title: "Initial Application 📝",
        details: [
            <>We'd love to bring interesting and passionate individuals to Jianshan Academy. The first round is just a <span className="text-white font-medium">short application form</span>.</>,
            <>It won't take long! We mainly want to learn a bit about your <span className="text-white font-medium">background</span>, your <span className="text-white font-medium">motivations</span>, and what kind of person you are through a few simple questions.</>,
        ],
    },
    {
        phase: "Step 02",
        date: "Rolling basis",
        title: "Session Design 💡",
        details: [
            <>If you're shortlisted, we'll invite you to share some of your initial thoughts on <span className="text-white font-medium">designing an academic session</span>.</>,
            <>We are really looking for people who have <span className="text-white font-medium">genuine passion</span> and the capability to share their subjects and interests with others.</>,
        ],
    },
    {
        phase: "Step 03",
        date: "Within 1 mo",
        title: "Final Confirmation ✨",
        details: [
            <>You can expect to hear back from us typically <span className="text-white font-medium">within a month</span> after submitting your application.</>,
            <>Successful scholars will receive their <span className="text-white font-medium">official invitation</span>, and your confirmed details will be updated in the portal.</>,
        ],
    },
    {
        phase: "Step 04",
        date: "May 2026 onwards",
        title: "Pre-departure 🤝",
        details: [
            <>Once confirmed, the journey has already begun! We will organize <span className="text-white font-medium">casual gatherings</span> where you can chat with past Jianshan scholars to hear their stories.</>,
            <>We'll also host <span className="text-white font-medium">pre-departure briefings</span> and training sessions so you are fully prepared for the upcoming adventure.</>,
        ],
    },
];

const postTripStep = {
    phase: "The Future",
    date: "Post-Trip onwards",
    title: "Jianshan Family 🎉",
    details: [
        <>The journey doesn't end in China. Back in Cambridge, you officially become part of the <span className="text-white font-medium">Jianshan alumni network</span>.</>,
        <>We regularly host <span className="text-white font-medium">formal halls, gatherings, and events</span> to keep this amazing community connected and growing.</>,
    ],
};

const finalTripStep = {
    phase: "The Destination",
    date: "July - August 2026",
    title: "Your China Trip ✈️",
    details: [
        <>This is it! You'll embark on the signature <span className="text-white font-medium drop-shadow-md pb-0.5 border-b border-white/30">18-day immersive journey</span> across multiple incredible Chinese cities.</>,
        <>Get ready to explore breathtaking landscapes, deep historical roots, and real-life cyberpunk cities with the <span className="text-white font-medium drop-shadow-md">coolest Cambridge crew</span>.</>,
    ],
};

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

            // We scroll the full container width minus one viewport width.
            // A 50vw spacer at the end of the container will naturally push the last
            // card into the center of the screen when we reach the end of this scroll.
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
                            className="timeline-card relative w-[340px] md:w-[480px] shrink-0 bg-[#111111]/80 backdrop-blur-xl border border-white/[0.08] p-8 md:p-12 rounded-[2rem] shadow-[0_30px_60px_rgba(0,0,0,0.6)] flex flex-col gap-6 group hover:border-[#8AC1A6]/30 transition-colors duration-500 overflow-hidden"
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

                    {/* Wider spacer before the final distinct card */}
                    <div className="w-[6vw] md:w-[8vw] shrink-0" />

                    {/* Distinct 5th Card: The China Trip */}
                    <div className="timeline-card relative w-[340px] md:w-[480px] shrink-0 bg-gradient-to-br from-[#1A4D2E]/90 to-[#0A2E1A]/90 backdrop-blur-2xl border border-[#E8F3E8]/30 p-8 md:p-12 rounded-[2rem] shadow-[0_0_60px_rgba(26,77,46,0.6)] flex flex-col gap-6 group hover:border-[#E8F3E8]/60 transition-all duration-500 overflow-hidden transform hover:-translate-y-2">
                        {/* Shimmer glare */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-[#E8F3E8]/10 to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                        <div className="flex flex-col gap-2 relative z-10">
                            <span className="text-[#E8F3E8] font-mono text-[10px] md:text-xs tracking-[0.2em] md:tracking-[0.3em] uppercase block mb-1">
                                {finalTripStep.phase}
                            </span>
                            <h3 className="text-3xl md:text-4xl lg:text-[2.5rem] font-serif text-white tracking-tight leading-tight drop-shadow-lg">
                                {finalTripStep.title}
                            </h3>
                            <p className="text-[#E8F3E8] font-mono text-xs tracking-wider uppercase mt-1 opacity-80">
                                {finalTripStep.date}
                            </p>
                        </div>

                        <div className="w-full h-px bg-[#E8F3E8]/20 relative z-10" />

                        <div className="flex flex-col gap-4 relative z-10">
                            {finalTripStep.details.map((detail, dIdx) => (
                                <p
                                    key={dIdx}
                                    className="text-sm md:text-[0.95rem] text-white/80 font-sans font-light leading-relaxed group-hover:text-white transition-colors duration-300"
                                >
                                    {detail}
                                </p>
                            ))}
                        </div>
                    </div>

                    {/* Spacer connecting China Trip to Post Trip */}
                    <div className="w-[6vw] md:w-[8vw] shrink-0" />

                    {/* Distinct 6th Card: Post-Trip / Cambridge Community */}
                    <div className="timeline-card relative w-[340px] md:w-[480px] shrink-0 bg-[#111111]/80 backdrop-blur-xl border border-white/[0.08] p-8 md:p-12 rounded-[2rem] shadow-[0_30px_60px_rgba(0,0,0,0.6)] flex flex-col gap-6 group hover:border-[#8AC1A6]/30 transition-colors duration-500 overflow-hidden">
                        {/* Inner ambient card glow */}
                        <div className="absolute inset-0 bg-gradient-to-br from-white/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                        <div className="flex flex-col gap-2 relative z-10">
                            <span className="text-[#8AC1A6] font-mono text-[10px] md:text-xs tracking-[0.2em] md:tracking-[0.3em] uppercase block mb-1">
                                {postTripStep.phase}
                            </span>
                            <h3 className="text-3xl md:text-4xl lg:text-[2.5rem] font-serif text-white tracking-tight leading-tight">
                                {postTripStep.title}
                            </h3>
                            <p className="text-white/40 font-mono text-xs tracking-wider uppercase mt-1">
                                {postTripStep.date}
                            </p>
                        </div>

                        <div className="w-full h-px bg-white/[0.08] relative z-10" />

                        <div className="flex flex-col gap-4 relative z-10">
                            {postTripStep.details.map((detail, dIdx) => (
                                <p
                                    key={dIdx}
                                    className="text-sm md:text-[0.95rem] text-white/50 font-sans font-light leading-relaxed group-hover:text-white/70 transition-colors duration-300"
                                >
                                    {detail}
                                </p>
                            ))}
                        </div>
                    </div>

                    {/* 
                      End spacer to position the last card in the center of the screen.
                      Since we scroll by (scrollWidth - 100vw), adding a 50vw spacer at the end 
                      ensures that when we reach the end of the scroll, the last element is 50vw 
                      away from the right edge, effectively centering it.
                    */}
                    <div className="w-[20vw] shrink-0" />
                </div>
            </div>
        </section>
    );
}
