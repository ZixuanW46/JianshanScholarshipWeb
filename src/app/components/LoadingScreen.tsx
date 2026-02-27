import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";

const IMAGES = [
    "/polaroid/polaroid-01.webp",
    "/polaroid/polaroid-02.webp",
    "/polaroid/polaroid-03.webp",
    "/polaroid/polaroid-04.webp",
    "/polaroid/polaroid-05.webp",
    "/polaroid/polaroid-06.webp",
    "/trail/Frame%2010.webp",
    "/trail/Frame%2011.webp",
    "/trail/Frame%2012.webp",
    "/trail/Frame%2013.webp",
    "/trail/Frame%2014.webp",
    "/trail/Frame%2015.webp",
    "/trail/Frame%2016.webp",
    "/trail/Frame%2017.webp",
    "/trail/Frame%2018.webp",
    "/trail/Frame%2019.webp",
    "/trail/Frame%2020.webp",
    "/trail/Frame%2022.webp",
    "/trail/Frame%2024.webp",
    "/trail/Frame%2026.webp",
    "/trail/Frame%2028.webp",
];

const MIN_LOADING_MS = 2000;
const MAX_WAIT_MS = 12000;
const INTRO_BALL_MS = 300;

const shuffle = (items: number[]) => {
    const arr = [...items];
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
};

const LoadingScreen: React.FC = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [loadedIndices, setLoadedIndices] = useState<number[]>([]);
    const containerRef = useRef<HTMLDivElement>(null);
    const overlayRef = useRef<HTMLDivElement>(null);
    const bagRef = useRef<number[]>([]);
    const lastImageIndexRef = useRef<number | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isIntroBallDone, setIsIntroBallDone] = useState(false);
    const showImages = isIntroBallDone && loadedIndices.length > 0;

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
        bagRef.current = [];
    }, [loadedIndices]);

    useEffect(() => {
        const introTimerId = window.setTimeout(() => {
            setIsIntroBallDone(true);
        }, INTRO_BALL_MS);

        return () => {
            window.clearTimeout(introTimerId);
        };
    }, []);

    useEffect(() => {
        if (!isLoading || !showImages || !overlayRef.current) return;

        gsap.fromTo(
            overlayRef.current,
            { opacity: 0.95 },
            { opacity: 0, duration: MIN_LOADING_MS / 1000, ease: "power2.out" }
        );
    }, [isLoading, showImages]);

    useEffect(() => {
        // Lock scroll during loading
        document.body.style.overflow = "hidden";

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
        if (!isLoading || !showImages) return;

        const getNextImageIndex = () => {
            if (bagRef.current.length === 0) {
                const nextBag = shuffle(loadedIndices);
                if (nextBag.length > 1 && nextBag[0] === lastImageIndexRef.current) {
                    const first = nextBag.shift();
                    if (first !== undefined) nextBag.push(first);
                }
                bagRef.current = nextBag;
            }

            const next = bagRef.current.shift();
            const nextIndex = next ?? loadedIndices[0];
            lastImageIndexRef.current = nextIndex;
            return nextIndex;
        };

        const intervalId = window.setInterval(() => {
            setCurrentImageIndex(getNextImageIndex());
        }, 150);

        return () => {
            clearInterval(intervalId);
        };
    }, [isLoading, loadedIndices, showImages]);

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
                {!showImages ? (
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="h-3 w-3 rounded-full bg-[#FDFBF7] animate-[loading_ball_0.6s_ease-in-out_infinite]" />
                    </div>
                ) : (
                    <>
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
                    </>
                )}
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

                @keyframes loading_ball {
                    0%, 100% { transform: translateY(0); opacity: 0.8; }
                    50% { transform: translateY(-12px); opacity: 1; }
                }
            `}} />
        </div>
    );
};

export default LoadingScreen;
