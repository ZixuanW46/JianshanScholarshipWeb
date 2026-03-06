import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BookOpen, Globe } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function AcademyAbout() {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // General reveal
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

            // Parallax effect for Z-Shape images
            gsap.utils.toArray<HTMLElement>(".parallax-bg").forEach((bg) => {
                gsap.to(bg, {
                    y: "20%",
                    ease: "none",
                    scrollTrigger: {
                        trigger: bg.parentElement,
                        start: "top bottom",
                        end: "bottom top",
                        scrub: true,
                    },
                });
            });
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="bg-[#FDFBF7] text-[#0A0A0A] overflow-hidden">
            <div className="py-24 md:py-32">
                <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24">

                    {/* Philosophy Intro (from Option 5) */}
                    <div className="mb-24 text-center max-w-[900px] mx-auto">
                        <span className="acad-about-reveal text-[#0F2E18]/60 tracking-[0.2em] font-sans text-xs md:text-sm font-semibold uppercase block mb-6">
                            About Jianshan
                        </span>
                        <h2 className="acad-about-reveal text-4xl md:text-6xl lg:text-7xl font-sans font-bold text-[#0A0A0A] tracking-tighter leading-[1.05] mb-8">
                            Seeing the Mountain.
                        </h2>
                        <p className="acad-about-reveal text-xl md:text-2xl font-serif italic text-[#0A0A0A]/80 mb-8">
                            "First, we see mountains as mountains. Then, mountains are no longer mountains. Finally, mountains are truly mountains again."
                        </p>
                        <p className="acad-about-reveal text-lg md:text-xl text-[#0A0A0A]/60 leading-relaxed font-light">
                            Based on the Zen parable of returning to authentic understanding, Jianshan Academy was founded by Cambridge alumni to help the next generation “seeing” two mountains: the academic and the cultural.
                        </p>

                    </div>

                    {/* Z-Shape Mountains (from Option 2) */}
                    <div className="space-y-24 md:space-y-32 max-w-[1200px] mx-auto">
                        {/* Academic Mountain */}
                        <div className="acad-about-reveal flex flex-col md:flex-row items-center gap-10 lg:gap-20">
                            <div className="w-full md:w-[60%] rounded-[2rem] overflow-hidden aspect-[4/3] md:aspect-auto md:h-[600px] relative shadow-[0_8px_40px_rgba(0,0,0,0.06)]">
                                <div className="parallax-bg w-full h-[120%] absolute top-[-10%] left-0">
                                    <img src="/teaching.webp" alt="Academic Mountain" className="w-full h-full object-cover" />
                                </div>
                            </div>
                            <div className="w-full md:w-[40%]">
                                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6" style={{ backgroundColor: "#D85C3C12" }}>
                                    <BookOpen size={22} style={{ color: "#D85C3C" }} strokeWidth={1.5} />
                                </div>
                                <span className="text-[10px] tracking-[0.2em] uppercase font-semibold text-[#D85C3C] mb-4 block">The Academic Mountain</span>
                                <h3 className="text-3xl md:text-4xl lg:text-5xl font-sans font-bold text-[#0A0A0A] tracking-[-0.02em] leading-[1.1] mb-6">
                                    See beyond the surface of subjects.
                                </h3>
                                <p className="text-lg text-[#0A0A0A]/60 leading-relaxed font-light">
                                    We bring Cambridge scholars from across every discipline — directly into Chinese classrooms. The goal isn't to teach university syllabi. It's to help students see what a subject truly is, why it matters, and what it can do for the world. At an age when most students are making life-shaping choices with limited information, we give them a clearer view of the landscape.
                                </p>
                            </div>
                        </div>

                        {/* Cultural Mountain */}
                        <div className="acad-about-reveal flex flex-col md:flex-row-reverse items-center gap-10 lg:gap-20">
                            <div className="w-full md:w-[60%] rounded-[2rem] overflow-hidden aspect-[4/3] md:aspect-auto md:h-[600px] relative shadow-[0_8px_40px_rgba(0,0,0,0.06)]">
                                <div className="parallax-bg w-full h-[120%] absolute top-[-10%] left-0">
                                    <img src="/cultural.webp" alt="Cultural Mountain" className="w-full h-full object-cover" />
                                </div>
                            </div>
                            <div className="w-full md:w-[40%]">
                                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6" style={{ backgroundColor: "#1A4D2E12" }}>
                                    <Globe size={22} style={{ color: "#1A4D2E" }} strokeWidth={1.5} />
                                </div>
                                <span className="text-[10px] tracking-[0.2em] uppercase font-semibold text-[#1A4D2E] mb-4 block">The Cultural Mountain</span>
                                <h3 className="text-3xl md:text-4xl lg:text-5xl font-sans font-bold text-[#0A0A0A] tracking-[-0.02em] leading-[1.1] mb-6">
                                    See beyond the boundaries of backgrounds.
                                </h3>
                                <p className="text-lg text-[#0A0A0A]/60 leading-relaxed font-light">
                                    People from different countries, different cultures, different life paths — all gathering in one place to learn from each other. Not through textbooks or tourism, but through real conversations, shared experiences, and genuine human connection. This is a two-way exchange: you share your world, and you get to see theirs from the inside.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
