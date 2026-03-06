import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";

const highlights = [
    "100% Cambridge All-Star Faculty",
    "A/B Dual-Track Curriculum",
    "PBL Real-World Practice",
    "Immersive Cross-Cultural Environment",
    "Fully-Funded Scholarship",
    "Project 2050 Future City Sandbox",
];

export default function AcademyCTA() {
    return (
        <section className="bg-[#0A0A0A] text-[#FDFBF7] py-24 md:py-32 relative overflow-hidden">
            {/* Background glow */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#1A4D2E]/15 rounded-full blur-[100px]" />
            </div>

            <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24 relative z-10">
                {/* Scrolling Marquee */}
                <div className="mb-16 overflow-hidden relative">
                    <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#0A0A0A] to-transparent z-10 pointer-events-none" />
                    <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#0A0A0A] to-transparent z-10 pointer-events-none" />
                    <div className="flex animate-[marquee_30s_linear_infinite] whitespace-nowrap">
                        {[...highlights, ...highlights].map((h, i) => (
                            <span
                                key={i}
                                className="text-sm tracking-widest uppercase text-[#FDFBF7]/25 font-medium mx-8 shrink-0"
                            >
                                {h}
                            </span>
                        ))}
                    </div>
                </div>

                {/* CTA Content */}
                <div className="text-center">
                    <h2 className="text-5xl md:text-7xl lg:text-8xl font-sans font-bold text-[#FDFBF7] tracking-tighter leading-[1] mb-4">
                        Leave a mark.
                    </h2>
                    <h3 className="text-5xl md:text-7xl lg:text-8xl font-serif italic text-[#FDFBF7] tracking-tight leading-[0.9] mb-8">
                        Shape a mind.
                    </h3>
                    <p className="text-lg md:text-xl text-[#FDFBF7]/50 font-light max-w-[600px] mx-auto mb-12">
                        Ignite curiosity, share your passion, <br className="hidden md:block" /> and experience China authentically.
                    </p>

                    <Button
                        size="lg"
                        className="group text-lg px-10 py-6 bg-[#FDFBF7] text-[#0A0A0A] hover:bg-[#E8F3E8] rounded-full transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:scale-[1.03] hover:gap-4 hover:px-12"
                    >
                        Apply for Jianshan Scholarship
                        <ArrowRight
                            size={20}
                            className="transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:translate-x-1 group-hover:scale-110"
                        />
                    </Button>
                </div>
            </div>
        </section>
    );
}
