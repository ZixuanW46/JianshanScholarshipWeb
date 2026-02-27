import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";

const IMAGES = [
    "/polaroid/polaroid-01.jpg",
    "/polaroid/polaroid-02.jpg",
    "/polaroid/polaroid-03.jpg",
    "/polaroid/polaroid-04.jpg",
    "/polaroid/polaroid-05.jpg",
    "/polaroid/polaroid-06.jpg",
];

const LoadingScreen: React.FC = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);
    const overlayRef = useRef<HTMLDivElement>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Lock scroll during loading
        document.body.style.overflow = "hidden";

        // Cycle images rapidly
        const intervalId = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % IMAGES.length);
        }, 150); // Change image every 150ms

        // Fade out the dark overlay over the loading duration to make images get brighter
        if (overlayRef.current) {
            gsap.fromTo(
                overlayRef.current,
                { opacity: 0.95 },
                { opacity: 0, duration: 2.5, ease: "power2.out" }
            );
        }

        // End loading instantly after 2.5s and render the normal page
        const timeoutId = setTimeout(() => {
            clearInterval(intervalId); // Stop cycling

            if (containerRef.current) {
                gsap.to(containerRef.current, {
                    opacity: 0,
                    duration: 0.4, // Quick fade out instead of sliding up
                    ease: "power2.inOut",
                    onComplete: () => {
                        setIsLoading(false);
                        document.body.style.overflow = ""; // Unlock scroll
                    },
                });
            }
        }, 2500);

        return () => {
            clearInterval(intervalId);
            clearTimeout(timeoutId);
            document.body.style.overflow = "";
        };
    }, []);

    if (!isLoading) return null;

    return (
        <div
            ref={containerRef}
            className="fixed inset-0 z-[100] bg-[#050505] flex flex-col items-center justify-center pointer-events-none overflow-hidden"
        >
            {/* Ambient Background Glow to make it less boring */}
            <div className="absolute inset-0 flex items-center justify-center opacity-40">
                <div className="w-[80vw] h-[80vw] md:w-[40vw] md:h-[40vw] bg-[#1A4D2E] rounded-full blur-[120px] mix-blend-screen" />
            </div>

            {/* TV Scanlines Effect overlay applied to the whole background behind images */}
            <div className="absolute inset-0 opacity-[0.15] bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.5)_50%)] bg-[length:100%_4px] pointer-events-none z-0"></div>

            {/* Smaller, square image container */}
            <div className="relative w-48 h-48 md:w-[280px] md:h-[280px] z-10 overflow-hidden rounded-sm filter contrast-125 sepia-[0.3]">
                {IMAGES.map((src, index) => (
                    <img
                        key={src}
                        src={src}
                        alt={`Loading Frame ${index + 1}`}
                        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-75 ${index === currentImageIndex ? "opacity-100" : "opacity-0"
                            }`}
                    />
                ))}

                {/* Dark overlay mask that becomes brighter (opacity decreases via GSAP) */}
                <div ref={overlayRef} className="absolute inset-0 bg-[#050505] mix-blend-multiply" />

                {/* Vintage TV Flicker/Scanline element specifically over the image */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0),rgba(255,255,255,0.05)_50%,rgba(255,255,255,0))] bg-[length:100%_4px] mix-blend-overlay animate-[tv_infinite_8s_linear]"></div>
            </div>

            <div className="mt-12 text-white/40 text-sm tracking-[0.3em] uppercase font-serif z-10">
                Loading
            </div>

            {/* Inline style for the custom TV scanline animation if not in tailwind config */}
            <style dangerouslySetInnerHTML={{
                __html: `
                @keyframes tv {
                    from { background-position: 0 0; }
                    to { background-position: 0 100vh; }
                }
            `}} />
        </div>
    );
};

export default LoadingScreen;
