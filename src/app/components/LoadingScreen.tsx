import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";

const IMAGES = [
    "/polaroid/polaroid-01.webp",
    "/polaroid/polaroid-02.webp",
    "/polaroid/polaroid-03.webp",
    "/polaroid/polaroid-04.webp",
    "/polaroid/polaroid-05.webp",
    "/polaroid/polaroid-06.webp",
];

const MIN_LOADING_MS = 2000;
const MAX_WAIT_MS = 12000;

const LoadingScreen: React.FC = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [loadedIndices, setLoadedIndices] = useState<number[]>([]);
    const containerRef = useRef<HTMLDivElement>(null);
    const overlayRef = useRef<HTMLDivElement>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        let mounted = true;
        const loaded = new Set<number>();

        IMAGES.forEach((src, index) => {
            const img = new Image();
            img.decoding = "async";
            img.onload = () => {
                loaded.add(index);
                if (!mounted) return;
                const nextLoaded = Array.from(loaded).sort((a, b) => a - b);
                setLoadedIndices(nextLoaded);
                setCurrentImageIndex((prev) => (loaded.has(prev) ? prev : nextLoaded[0]));
            };
            img.src = src;
        });

        return () => {
            mounted = false;
        };
    }, []);

    useEffect(() => {
        // Lock scroll during loading
        document.body.style.overflow = "hidden";

        // Fade out the dark overlay over the loading duration to make images get brighter
        if (overlayRef.current) {
            gsap.fromTo(
                overlayRef.current,
                { opacity: 0.95 },
                { opacity: 0, duration: MIN_LOADING_MS / 1000, ease: "power2.out" }
            );
        }

        let isMinTimeElapsed = false;
        let isPageReady = false;
        let hasStartedExit = false;

        const endLoading = () => {
            if (hasStartedExit) return;
            if (!isMinTimeElapsed || !isPageReady) return;
            hasStartedExit = true;

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
                return;
            }

            setIsLoading(false);
            document.body.style.overflow = "";
        };

        const onPageReady = () => {
            isPageReady = true;
            endLoading();
        };

        const minTimerId = window.setTimeout(() => {
            isMinTimeElapsed = true;
            endLoading();
        }, MIN_LOADING_MS);

        // Wait for the page resources to finish loading.
        if (document.readyState === "complete") {
            onPageReady();
        } else {
            window.addEventListener("load", onPageReady, { once: true });
        }

        // Fallback: never block forever if a resource hangs.
        const fallbackTimerId = window.setTimeout(() => {
            onPageReady();
        }, MAX_WAIT_MS);

        return () => {
            window.clearTimeout(minTimerId);
            window.clearTimeout(fallbackTimerId);
            window.removeEventListener("load", onPageReady);
            document.body.style.overflow = "";
        };
    }, []);

    useEffect(() => {
        if (!isLoading || loadedIndices.length === 0) return;

        const intervalId = window.setInterval(() => {
            setCurrentImageIndex((prev) => {
                const currentPos = loadedIndices.indexOf(prev);
                const nextPos = currentPos >= 0
                    ? (currentPos + 1) % loadedIndices.length
                    : 0;
                return loadedIndices[nextPos];
            });
        }, 150);

        return () => {
            clearInterval(intervalId);
        };
    }, [isLoading, loadedIndices]);

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
                        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-75 ${index === currentImageIndex && loadedIndices.includes(index) ? "opacity-100" : "opacity-0"
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
