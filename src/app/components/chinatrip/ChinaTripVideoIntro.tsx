import { Play } from "lucide-react";

const stats = [
    { value: "11", label: "Days" },
    { value: "3", label: "Cities" },
    { value: "20+", label: "Experiences" },
    { value: "10–20", label: "Per Cohort" },
];

export default function ChinaTripVideoIntro() {
    return (
        <section className="bg-[#0A0A0A] text-[#FDFBF7] py-24 md:py-32">
            <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24">
                {/* Video Embed */}
                <div className="relative w-full max-w-[960px] mx-auto aspect-[16/9] bg-[#111] rounded-2xl overflow-hidden shadow-[0_0_60px_rgba(0,0,0,0.5)] border border-white/10 mb-16">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#1A1A1A] to-[#0A0A0A] pointer-events-none z-10" />
                    <div className="absolute inset-0 flex flex-col items-center justify-center z-20 gap-4">
                        <button className="px-6 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center gap-3 hover:bg-white/20 hover:scale-105 transition-all duration-300 cursor-pointer">
                            <Play className="w-5 h-5 fill-white text-white" />
                            <span className="text-sm font-bold tracking-widest uppercase">Play Video</span>
                        </button>
                        <p className="text-sm text-white/40 font-serif italic tracking-wide">
                            "A glimpse into the Capy China Trip experience."
                        </p>
                    </div>
                </div>

                {/* Stats Bar */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4 mb-16 max-w-[960px] mx-auto">
                    {stats.map((stat) => (
                        <div key={stat.label} className="text-center">
                            <div className="text-3xl md:text-4xl font-sans font-bold text-[#FDFBF7] tracking-tight mb-1">
                                {stat.value}
                            </div>
                            <div className="text-[10px] md:text-xs tracking-[0.15em] uppercase text-[#FDFBF7]/40 font-medium">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Body Copy */}
                <div className="max-w-[700px] mx-auto text-center">
                    <p className="text-lg md:text-xl text-[#FDFBF7]/60 leading-relaxed font-light">
                        The best immersive and authentic China experience you can expect — ancient temples, breathtaking landscapes, and neon-lit skylines, all in one journey.
                    </p>
                    <p className="text-lg md:text-xl text-[#FDFBF7]/80 leading-relaxed font-light mt-6">
                        Travel with Cambridge peers. Guided by locals. Powered by curiosity.
                    </p>
                </div>
            </div>
        </section>
    );
}
