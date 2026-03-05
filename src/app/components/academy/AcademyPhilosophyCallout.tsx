export default function AcademyPhilosophyCallout() {
    return (
        <section className="bg-[#0F2E18] text-[#FDFBF7] py-24 md:py-32 relative overflow-hidden">
            {/* Subtle glow */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#2E8B57]/10 rounded-full blur-[120px]" />
            </div>

            <div className="max-w-[900px] mx-auto px-6 md:px-12 lg:px-24 text-center relative z-10">
                <div className="mb-8">
                    <span className="text-[10px] tracking-[0.3em] uppercase text-[#FDFBF7]/30 font-semibold">
                        The Jianshan Promise
                    </span>
                </div>

                <blockquote className="text-2xl md:text-4xl lg:text-5xl font-serif italic text-[#FDFBF7]/90 leading-snug tracking-tight mb-8">
                    "It's not just about knowledge — it's about inspiration and perspective. It's not just about English or Mandarin — it's about bonding and exchange."
                </blockquote>

                <div className="w-12 h-[1px] bg-[#FDFBF7]/20 mx-auto" />
            </div>
        </section>
    );
}
