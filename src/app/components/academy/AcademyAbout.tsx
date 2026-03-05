import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BookOpen, Globe } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const mountains = [
    {
        icon: BookOpen,
        label: "The Academic Mountain",
        headline: "See beyond the surface of subjects.",
        body: "We bring Cambridge scholars from across every discipline — directly into Chinese classrooms. The goal isn't to teach university syllabi. It's to help students see what a subject truly is, why it matters, and what it can do for the world. At an age when most students are making life-shaping choices with limited information, we give them a clearer view of the landscape.",
        accent: "#D85C3C",
    },
    {
        icon: Globe,
        label: "The Cultural Mountain",
        headline: "See beyond the boundaries of backgrounds.",
        body: "People from different countries, different cultures, different life paths — all gathering in one place to learn from each other. Not through textbooks or tourism, but through real conversations, shared experiences, and genuine human connection. This is a two-way exchange: you share your world, and you get to see theirs from the inside.",
        accent: "#1A4D2E",
    },
];

export default function AcademyAbout() {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.utils.toArray<HTMLElement>(".acad-about-reveal").forEach((el) => {
                gsap.from(el, {
                    y: 40,
                    opacity: 0,
                    duration: 1,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: el,
                        start: "top 85%",
                        toggleActions: "play none none none",
                    },
                });
            });
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="bg-[#FDFBF7] text-[#0A0A0A] py-24 md:py-32 overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24">
                {/* Eyebrow */}
                <div className="acad-about-reveal flex items-center gap-6 mb-8">
                    <div className="h-[1px] w-12 bg-[#0F2E18]/30" />
                    <span className="text-[#0F2E18]/60 tracking-[0.2em] font-sans text-xs md:text-sm font-semibold uppercase">
                        About Jianshan
                    </span>
                </div>

                {/* Philosophy */}
                <div className="acad-about-reveal mb-20 max-w-[800px]">
                    <h2 className="text-4xl md:text-6xl lg:text-7xl font-sans font-bold text-[#0A0A0A] tracking-tighter leading-[1.05] mb-8">
                        Seeing the Mountain.
                    </h2>
                    <p className="text-lg md:text-xl text-[#0A0A0A]/60 leading-relaxed font-light">
                        The name "Jianshan" (见山) means "Seeing the Mountain." It comes from a Zen parable:{" "}
                        <span className="font-serif italic text-[#0A0A0A]/80">
                            First, we see mountains as mountains. Then, mountains are no longer mountains. Finally, mountains are truly mountains again.
                        </span>{" "}
                        It describes a journey from surface-level perception, through critical questioning, to a deeper, more authentic understanding of the world. That journey is what Jianshan is built on.
                    </p>
                </div>

                {/* Two Mountains Intro */}
                <div className="acad-about-reveal mb-12">
                    <p className="text-base md:text-lg text-[#0A0A0A]/50 font-light max-w-[600px]">
                        Jianshan was founded by a group of Cambridge alumni with a simple mission: to help the next generation build two mountains early in life.
                    </p>
                </div>

                {/* Mountain Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-20">
                    {mountains.map((m) => {
                        const Icon = m.icon;
                        return (
                            <div
                                key={m.label}
                                className="acad-about-reveal group relative bg-white rounded-2xl p-8 md:p-10 border border-[#0A0A0A]/5 shadow-[0_4px_24px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_40px_rgba(0,0,0,0.08)] transition-shadow duration-500"
                            >
                                <div
                                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
                                    style={{ backgroundColor: `${m.accent}12` }}
                                >
                                    <Icon size={22} style={{ color: m.accent }} strokeWidth={1.5} />
                                </div>
                                <span className="text-[10px] tracking-[0.2em] uppercase font-semibold text-[#0A0A0A]/40 mb-3 block">
                                    {m.label}
                                </span>
                                <h3 className="text-2xl md:text-3xl font-sans font-bold text-[#0A0A0A] tracking-tight leading-tight mb-4">
                                    {m.headline}
                                </h3>
                                <p className="text-base text-[#0A0A0A]/55 leading-relaxed font-light">
                                    {m.body}
                                </p>
                            </div>
                        );
                    })}
                </div>

                {/* What is Jianshan Academy */}
                <div className="acad-about-reveal max-w-[800px] border-l-2 border-[#1A4D2E]/20 pl-8 md:pl-12">
                    <p className="text-base md:text-lg text-[#0A0A0A]/60 leading-relaxed font-light">
                        Jianshan Academy is incubated by CAMCapy, a Cambridge University student society, and is where these two mountains come to life. We bring Cambridge scholars — from every corner of the world and every academic discipline — into Chinese schools to co-create a vibrant "micro-university ecosystem." Here, every subject passion finds a home. Every conversation opens a new door.
                    </p>
                </div>
            </div>
        </section>
    );
}
