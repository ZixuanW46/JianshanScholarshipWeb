import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Play } from 'lucide-react';
import { Section } from './ui/Section';

gsap.registerPlugin(ScrollTrigger);

const phrasesData = [
    <span className="uppercase font-bold tracking-tight">What's it like to be a Jianshan Scholar?</span>,
    <span className="font-bold tracking-tight">Hop on one of the <span className="font-serif italic font-normal text-white drop-shadow-lg tracking-normal">best cultural and academic immersive experiences</span> out there.</span>,
    <span className="font-bold tracking-tight">Being an ambassador that bridges cultures and <span className="font-serif italic font-normal text-white drop-shadow-lg tracking-normal">dreams of new generations</span>.</span>,
    <span className="font-bold tracking-tight">Being a part of a <span className="font-serif italic font-normal text-white drop-shadow-lg tracking-normal">brilliant, wholesome community</span> that extends far beyond the trip itself.</span>
];

const floatingCards = [
    {
        id: 1,
        title: "Cashing in on The Creator Economy",
        date: "17.09.2024",
        position: "left",
        offsetX: "-left-12 lg:-left-4", // Slightly overflowing screen on the left
        rotation: "-rotate-6",
        delayOffset: 0
    },
    {
        id: 2,
        title: "Bridging dreams of new generations",
        date: "23.12.2024",
        position: "right",
        offsetX: "-right-6 lg:right-10",
        rotation: "rotate-3",
        delayOffset: 1.5
    },
    {
        id: 3,
        title: "A community that extends beyond",
        date: "12.08.2024",
        position: "left",
        offsetX: "left-10 lg:left-24", // More centered
        rotation: "rotate-2",
        delayOffset: 3
    },
    {
        id: 4,
        title: "Academic immersion at its finest",
        date: "05.07.2024",
        position: "right",
        offsetX: "-right-16 lg:-right-8", // Overflowing on the right
        rotation: "-rotate-4",
        delayOffset: 4.5
    },
    {
        id: 5,
        title: "Representing Cambridge globally",
        date: "20.01.2024",
        position: "left",
        offsetX: "-left-8 lg:left-8",
        rotation: "-rotate-2",
        delayOffset: 6
    },
    {
        id: 6,
        title: "The Jianshan Experience 2026",
        date: "14.02.2025",
        position: "right",
        offsetX: "right-12 lg:right-32", // More inset
        rotation: "rotate-6",
        delayOffset: 7.5
    }
];

export default function ScholarGains() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            // 1. Text Flip Initial States
            gsap.set(".sg-phrase", {
                opacity: 0,
                rotationX: -60,
                y: 60,
                transformPerspective: 1000,
                transformOrigin: "50% 50% -50px"
            });

            // 2. Floating Cards Initial States (starting off-screen bottom)
            gsap.set(".sg-desktop-card", {
                opacity: 0,
                y: "100vh",
                scale: 0.85
            });
            gsap.set(".sg-mobile-card", {
                opacity: 0,
                scale: 0.65
            });

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top top",
                    end: "+=750%", // Extended end explicitly to allow for the CTA extra gap duration
                    pin: true,
                    scrub: true, // Removed 1s smoothing to eliminate slow-to-fast snapping
                }
            });

            const totalPhrases = phrasesData.length;

            // Animate text phrases sequentially
            phrasesData.forEach((_, i) => {
                tl.to(`.sg-phrase-${i}`, {
                    opacity: 1,
                    rotationX: 0,
                    y: 0,
                    duration: 1.5,
                    ease: "power2.out"
                })
                    .to(`.sg-phrase-${i}`, {
                        opacity: 1,
                        duration: 1.5 // reading hold
                    })
                    .to(`.sg-phrase-${i}`, {
                        opacity: 0,
                        rotationX: 60,
                        y: -60,
                        duration: 1.5,
                        ease: "power2.in"
                    });
            });

            // Animate polaroid cards concurrently -> strict linear bottom-to-top traversal (Desktop)
            floatingCards.forEach((card) => {
                // Spread the start times across the whole timeline length
                const startTime = card.delayOffset * 1.5;

                // 1. Vertical linear travel across the screen
                tl.fromTo(`.sg-desktop-card-${card.id}`,
                    { y: "60vh" }, // Start just below screen
                    {
                        y: "-60vh", // Travel to just above screen
                        duration: 12, // long duration for linear smooth scroll
                        ease: "none", // strict linear
                        force3D: true, // Force GPU hardware acceleration
                    },
                    startTime // inject into the main timeline at staggered times
                );

                // 2. Quick fade-in and scale up at the beginning of their travel
                tl.fromTo(`.sg-desktop-card-${card.id}`,
                    { opacity: 0, scale: 0.85 },
                    {
                        opacity: 1,
                        scale: 1,
                        duration: 2, // Fades in quickly 
                        ease: "power2.out"
                    },
                    startTime
                );

                // 3. Fade out explicitly near the end of their own travel
                tl.to(`.sg-desktop-card-${card.id}`, {
                    opacity: 0,
                    duration: 2,
                    ease: "power2.inOut"
                }, startTime + 10); // Fade out 2 units before its travel finishes
            });

            // Animate polaroid cards concurrently -> Horizontal scroll (Mobile)
            floatingCards.forEach((card, index) => {
                const startTime = card.delayOffset * 1.5;
                const isTop = index % 2 === 0;

                tl.fromTo(`.sg-mobile-card-${card.id}`,
                    { x: isTop ? "80vw" : "-80vw" },
                    {
                        x: isTop ? "-80vw" : "80vw", // Travel horizontally
                        duration: 12,
                        ease: "none",
                        force3D: true,
                    },
                    startTime
                );

                tl.fromTo(`.sg-mobile-card-${card.id}`,
                    { opacity: 0, scale: 0.65 },
                    {
                        opacity: 1,
                        scale: 0.75,
                        duration: 2,
                        ease: "power2.out"
                    },
                    startTime
                );

                tl.to(`.sg-mobile-card-${card.id}`, {
                    opacity: 0,
                    duration: 2,
                    ease: "power2.inOut"
                }, startTime + 10);
            });

            // Reveal video AFTER texts disappear
            // total texts duration = totalPhrases * 4.5 = 18 relative units
            const textEndTime = totalPhrases * 4.5;

            tl.fromTo(".sg-video-wrapper",
                {
                    scale: 0.8,
                    y: 40,
                    opacity: 0
                },
                {
                    scale: 1,
                    y: 0,
                    opacity: 1,
                    duration: 2.5,
                    ease: "power3.out"
                },
                textEndTime + 0.5
            );

            // Final Magnetic Circle CTA Reveal Layered Below Video
            tl.fromTo(".sg-cta-wrapper",
                { y: 60, opacity: 0, scale: 0.8 },
                { y: 0, opacity: 1, scale: 1, duration: 2.5, ease: "expo.out" },
                textEndTime + 1.5 // Appears after video is somewhat scaled in
            );

            // Add "empty" gap duration at the very end to prevent abrupt unpinning
            // This forces the timeline to keep scrubbing (and the user scrolling) 
            // for 3 more relative timeline units before unlocking the layout.
            tl.to({}, { duration: 3 });

        }, containerRef);

        return () => ctx.revert();
    }, []);

    const handleMagneticMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const el = e.currentTarget;
        const rect = el.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        // Magnetic pull: move the circle slightly towards the cursor
        gsap.to(el.querySelector('.magnetic-inner'), {
            x: x * 0.4,
            y: y * 0.4,
            duration: 0.6,
            ease: "power3.out"
        });

        // Move the arrow slightly more for a parallax cursor effect
        gsap.to(el.querySelector('.magnetic-text'), {
            x: x * 0.2,
            y: y * 0.2,
            duration: 0.6,
            ease: "power3.out"
        });
    };

    const handleMagneticLeave = (e: React.MouseEvent<HTMLDivElement>) => {
        const el = e.currentTarget;
        gsap.to(el.querySelectorAll('.magnetic-inner, .magnetic-text'), {
            x: 0,
            y: 0,
            duration: 0.7,
            ease: "elastic.out(1, 0.3)"
        });
    };

    return (
        <Section className="bg-[#0A0A0A] text-[#FDFBF7] relative z-30 w-full max-w-none p-0 overflow-hidden h-screen" ref={containerRef}>

            {/* Top Label & Dashed Line Indicator */}
            <div className="absolute top-24 md:top-36 left-0 w-full flex flex-col items-center justify-center z-10">
                <div className="border border-white/20 rounded-full px-5 py-1.5 flex items-center justify-center bg-black/50 backdrop-blur-md">
                    <span className="text-xs tracking-[0.25em] font-medium text-white/90 uppercase">The Gains</span>
                </div>
                <div className="w-[1px] h-12 md:h-16 border-l border-dashed border-white/30 mt-2" />
            </div>

            {/* Desktop Floating Side Polaroids (Continuously Moving with varied Y offsets) */}
            <div className="absolute inset-0 pointer-events-none z-10 hidden md:block">
                <div className="relative w-full h-full max-w-[1400px] mx-auto">
                    {floatingCards.map((card) => (
                        <div
                            key={card.id}
                            className={`sg-desktop-card sg-desktop-card-${card.id} absolute top-1/2 -translate-y-1/2 ${card.offsetX} ${card.rotation} w-[220px] lg:w-[260px] bg-[#FDFBF7] p-3 pb-6 shadow-2xl overflow-hidden hover:z-50 will-change-transform`}
                            style={{
                                boxShadow: "0 20px 40px rgba(0,0,0,0.4), 0 0 100px rgba(255,255,255,0.05)"
                            }}
                        >
                            {/* Image Placeholder (Polaroid screen) */}
                            <div className="w-full aspect-square bg-[#111] mb-3 relative overflow-hidden border border-black/5">
                                <div className="absolute inset-0 bg-white/5" />
                            </div>

                            {/* Caption Content (Handwritten style emulation) */}
                            <div className="px-1 text-center flex flex-col items-center">
                                <h3 className="text-xs font-serif italic text-[#1A1A1A] leading-tight mb-1">
                                    "{card.title}"
                                </h3>
                                <span className="text-[10px] font-sans font-medium tracking-widest text-[#1A1A1A]/40 uppercase">
                                    {card.date}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Mobile Floating Top/Bottom Polaroids (Horizontal Scroll) */}
            <div className="absolute inset-0 pointer-events-none z-10 md:hidden overflow-hidden">
                <div className="relative w-full h-full mx-auto">
                    {floatingCards.map((card, index) => {
                        const isTop = index % 2 === 0;
                        return (
                            <div
                                key={card.id}
                                className={`sg-mobile-card sg-mobile-card-${card.id} absolute left-1/2 ${card.rotation} will-change-transform`}
                                style={{
                                    top: isTop ? '22%' : '65%',
                                    marginLeft: '-90px', // width is 180px -> centers horizontally
                                    width: '180px',
                                    boxShadow: "0 20px 40px rgba(0,0,0,0.4), 0 0 100px rgba(255,255,255,0.05)",
                                    backgroundColor: '#FDFBF7',
                                    padding: '12px 12px 24px 12px',
                                    borderRadius: '2px'
                                }}
                            >
                                {/* Image Placeholder */}
                                <div className="w-full aspect-square bg-[#111] mb-2 relative overflow-hidden border border-black/5">
                                    <div className="absolute inset-0 bg-white/5" />
                                </div>

                                {/* Caption Content */}
                                <div className="px-1 text-center flex flex-col items-center">
                                    <h3 className="text-[10px] font-serif italic text-[#1A1A1A] leading-tight mb-1">
                                        "{card.title}"
                                    </h3>
                                    <span className="text-[8px] font-sans font-medium tracking-widest text-[#1A1A1A]/40 uppercase">
                                        {card.date}
                                    </span>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Center 3D Flipping Text Area */}
            <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none px-4 md:px-32 lg:px-64 mt-24 md:mt-8">
                {phrasesData.map((phrase, i) => (
                    <div key={i} className={`sg-phrase sg-phrase-${i} absolute w-full max-w-[1400px] text-center px-4`}>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-sans leading-[1.15] text-[#A3A3A3] drop-shadow-xl">
                            {phrase}
                        </h2>
                    </div>
                ))}
            </div>

            {/* Video Reveal Area */}
            <div className="absolute inset-0 flex items-center justify-center z-30 pointer-events-none px-4">
                <div className="sg-video-wrapper relative w-full max-w-[800px] aspect-[16/9] bg-[#111] rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-white/10 pointer-events-auto mt-12 md:mt-16">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#1A1A1A] to-[#0A0A0A] pointer-events-none z-10" />

                    <div className="absolute inset-0 flex items-center justify-center z-20">
                        <button className="px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center gap-3 hover:bg-white/20 hover:scale-105 transition-all duration-300">
                            <Play className="w-4 h-4 fill-white text-white" />
                            <span className="text-xs font-bold tracking-widest uppercase">Play Video</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Final Magnetic Circle CTA Layered Below Video */}
            <div className="sg-cta-wrapper absolute bottom-6 md:bottom-12 left-0 w-full flex justify-center z-40 pointer-events-none">
                {/* Interactive Magnetic Hitbox */}
                <div
                    className="relative w-40 h-40 md:w-56 md:h-56 rounded-full flex items-center justify-center cursor-pointer pointer-events-auto group"
                    onMouseMove={handleMagneticMove}
                    onMouseLeave={handleMagneticLeave}
                >
                    {/* The visible circle that moves magnetically */}
                    <div className="magnetic-inner absolute inset-2 bg-[#1A4D2E] rounded-full shadow-[0_0_40px_rgba(26,77,46,0.3)] transition-colors duration-300 group-hover:bg-[#1A4D2E]/90 border border-white/5" />

                    {/* The Text that moves slightly offset */}
                    <div className="magnetic-text relative z-10 flex flex-col items-center justify-center gap-1 pointer-events-none">
                        <span className="text-[#FDFBF7] text-base md:text-xl font-serif italic text-center leading-tight tracking-wide transition-all duration-300">
                            Meet all<br />scholars
                        </span>
                        <svg
                            className="w-5 h-5 md:w-6 md:h-6 text-[#FDFBF7] opacity-60 group-hover:opacity-100 group-hover:translate-y-1 transition-all duration-300 mt-2"
                            viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M12 5V19M12 19L5 12M12 19L19 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                </div>
            </div>

        </Section>
    );
}
