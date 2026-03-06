import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ArrowDown } from "lucide-react";

export default function AcademyHero() {
    const textRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".acad-hero-stagger", {
                y: 60,
                opacity: 0,
                duration: 1.4,
                stagger: 0.15,
                ease: "power3.out",
                delay: 0.3,
            });
        }, textRef);
        return () => ctx.revert();
    }, []);

    return (
        <section className="relative min-h-[100dvh] flex items-end 2xl:items-center justify-start overflow-hidden bg-[#0A0A0A] pb-12 md:pb-24 2xl:pb-6 pt-32">
            {/* Background */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/teaching.webp"
                    alt="Jianshan Academy session"
                    className="w-full h-full object-cover opacity-40"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/60 to-transparent pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A]/80 via-[#0A0A0A]/40 to-transparent pointer-events-none" />
            </div>

            <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24" ref={textRef}>
                <div className="max-w-5xl">
                    <div className="acad-hero-stagger mb-8">
                        <span className="inline-block py-1.5 px-4 rounded-full bg-[#FDFBF7]/10 backdrop-blur-md border border-[#FDFBF7]/20 text-[#FDFBF7] text-sm font-medium tracking-widest uppercase">
                            Jianshan Academy 2026
                        </span>
                    </div>

                    <h1 className="acad-hero-stagger text-5xl md:text-7xl lg:text-8xl font-sans font-bold text-[#FDFBF7] tracking-tight leading-[1] mb-2">
                        Where Minds
                    </h1>
                    <h2 className="acad-hero-stagger text-6xl md:text-8xl lg:text-[110px] xl:text-[130px] font-serif italic text-[#FDFBF7] tracking-tight leading-[0.9] mb-10">
                        Connect.
                    </h2>

                    <p className="acad-hero-stagger text-xl md:text-2xl text-[#FDFBF7]/70 mb-6 font-light max-w-3xl">
                        A borderless micro-university built by you and Cambridge scholars from around the world.
                    </p>

                    <div className="acad-hero-stagger flex flex-wrap items-center gap-3 mb-12">
                        {["Academic Exploration", "Cultural Exchange", "Real Connections"].map((tag) => (
                            <span
                                key={tag}
                                className="text-xs tracking-widest uppercase text-[#FDFBF7]/50 border border-[#FDFBF7]/15 rounded-full px-4 py-1.5"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>

                    <div className="acad-hero-stagger w-full flex justify-center md:justify-start mt-4 md:mt-0">
                        <button
                            onClick={() => {
                                window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
                            }}
                            className="group flex flex-col md:flex-row items-center gap-2 md:gap-3 text-[#FDFBF7]/70 hover:text-[#FDFBF7] transition-colors duration-300"
                        >
                            <span className="text-sm tracking-widest uppercase font-medium">Explore</span>
                            <ArrowDown size={18} className="animate-bounce" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
