import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";

export default function ChinaTripCTA() {
    return (
        <section className="bg-[#0A0A0A] text-[#FDFBF7] py-24 md:py-32 relative overflow-hidden">
            {/* Background glow */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#D85C3C]/10 rounded-full blur-[100px]" />
            </div>

            <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24 relative z-10">
                {/* CTA Content */}
                <div className="text-center">
                    <h2 className="text-5xl md:text-7xl lg:text-8xl font-sans font-bold text-[#FDFBF7] tracking-tighter leading-[1] mb-4">
                        Your China adventure
                    </h2>
                    <h3 className="text-5xl md:text-7xl lg:text-8xl font-serif italic text-[#FDFBF7] tracking-tight leading-[0.9] mb-8">
                        starts here.
                    </h3>
                    <p className="text-lg md:text-xl text-[#FDFBF7]/50 font-light max-w-[600px] mx-auto mb-12">
                        Secure your spot for Summer 2026. Join other Cambridge students for the journey of a lifetime.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <Button
                            size="lg"
                            className="group text-lg px-10 py-6 bg-[#D85C3C] text-white hover:bg-[#C44A2D] rounded-full transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:scale-[1.03] hover:gap-4 hover:px-12 w-full sm:w-auto"
                        >
                            Register for Capy China Trip
                            <ArrowRight
                                size={20}
                                className="transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:translate-x-1 group-hover:scale-110"
                            />
                        </Button>
                        <a
                            href="/"
                            className="text-[#FDFBF7]/60 hover:text-[#FDFBF7] transition-colors border-b border-white/20 hover:border-white/60 pb-1 text-sm tracking-widest uppercase font-medium"
                        >
                            Or apply for the Jianshan Scholarship →
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
