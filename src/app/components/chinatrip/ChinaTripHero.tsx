import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ArrowDown, GraduationCap } from "lucide-react";
import { Button } from "../ui/button";
import SelfFundRegistrationButton from "./SelfFundRegistrationButton";
import { SCHOLARSHIP_APPLICATION_URL } from "./selfFundRegistration";

export default function ChinaTripHero() {
    const textRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".ct-hero-stagger", {
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
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1508804185872-d7badad00f7d?q=80&w=1920&auto=format&fit=crop"
                    alt="Great Wall of China at sunset"
                    className="w-full h-full object-cover opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/72 via-[#0A0A0A]/38 to-transparent pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A]/58 via-[#0A0A0A]/24 to-transparent pointer-events-none" />
            </div>

            <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24" ref={textRef}>
                <div className="max-w-5xl">
                    <div className="ct-hero-stagger mb-8">
                        <span className="inline-block py-1.5 px-4 rounded-full bg-[#FDFBF7]/10 backdrop-blur-md border border-[#FDFBF7]/20 text-[#FDFBF7] text-sm font-medium tracking-widest uppercase">
                            Capy China Trip 2026
                        </span>
                    </div>

                    <h1 className="ct-hero-stagger text-5xl md:text-7xl lg:text-8xl font-sans font-bold text-[#FDFBF7] tracking-tight leading-[1] mb-2">
                        Your Chapter
                    </h1>
                    <h2 className="ct-hero-stagger text-6xl md:text-8xl lg:text-[110px] xl:text-[130px] font-serif italic text-[#FDFBF7] tracking-tight leading-[0.9] mb-10">
                        in China.
                    </h2>

                    <p className="ct-hero-stagger text-xl md:text-2xl text-[#FDFBF7]/70 mb-6 font-light max-w-3xl">
                        11 days. 3 cities. The China you've heard about — and the one you haven't.
                    </p>

                    <div className="ct-hero-stagger flex flex-wrap items-center gap-3 mb-12">
                        {["History & Culture", "Breathtaking Nature", "Modern China"].map((tag) => (
                            <span
                                key={tag}
                                className="text-xs tracking-widest uppercase text-[#FDFBF7]/50 border border-[#FDFBF7]/15 rounded-full px-4 py-1.5"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>

                    <div className="ct-hero-stagger flex flex-col sm:flex-row items-start gap-4">
                        <SelfFundRegistrationButton
                            label="Register for Capy China Trip"
                            size="lg"
                            className="group w-full sm:w-auto rounded-full bg-[#FDFBF7] px-8 text-lg text-[#0A0A0A] transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:scale-[1.03] hover:gap-4 hover:bg-[#F3EEE6] hover:px-10"
                        />
                        <Button
                            asChild
                            variant="outline"
                            size="lg"
                            className="relative overflow-hidden group w-full sm:w-auto text-lg px-8 border-none text-[#FDFBF7] bg-transparent rounded-full transition-all duration-500"
                        >
                            <a href={SCHOLARSHIP_APPLICATION_URL}>
                                {/* Default Border */}
                                <div className="absolute inset-0 border border-[#FDFBF7]/30 rounded-full pointer-events-none transition-opacity duration-500 group-hover:opacity-0" />

                                {/* Rotating Shimmer Layer */}
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none overflow-hidden rounded-full">
                                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] aspect-square animate-[spin_2.5s_linear_infinite] bg-[conic-gradient(from_0deg,transparent_0_270deg,rgba(253,251,247,0.8)_360deg)]" />
                                </div>

                                {/* Inner Cap to create the border effect */}
                                <div className="absolute inset-[1px] rounded-full bg-[#0A0A0A]/90 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                                <span className="relative z-10 flex items-center justify-center gap-2">
                                    Join via Scholarship
                                    <GraduationCap
                                        size={20}
                                        className="transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:-translate-y-[3px] group-hover:drop-shadow-[0_2px_8px_rgba(253,251,247,0.6)]"
                                    />
                                </span>
                            </a>
                        </Button>
                    </div>

                </div>
            </div>

            <div className="ct-hero-stagger absolute inset-x-0 bottom-8 md:bottom-12 z-10 flex justify-center">
                <button
                    onClick={() => {
                        document.getElementById("ct-highlights")?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="group flex flex-col md:flex-row items-center gap-2 md:gap-3 text-[#FDFBF7]/70 hover:text-[#FDFBF7] transition-colors duration-300"
                >
                    <span className="text-sm tracking-widest uppercase font-medium">Explore</span>
                    <ArrowDown size={18} className="animate-bounce" />
                </button>
            </div>
        </section>
    );
}
