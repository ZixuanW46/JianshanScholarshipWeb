import React from 'react';

export default function CommunitySupportBento() {
    return (
        <section className="bg-[#FDFBF7] relative py-12 md:py-24 overflow-hidden z-10 w-full">
            <div className="px-6 md:px-12 lg:px-24 mx-auto max-w-[1400px]">

                <div className="flex flex-col md:flex-row gap-6 md:gap-8 min-h-[400px]">

                    {/* Community Block (2/3 width) */}
                    <div
                        className="group relative flex-[2] min-w-0 bg-[#E8F3E8] rounded-3xl p-8 md:p-12 overflow-hidden flex flex-col justify-between items-start border border-[#1A4D2E]/10"
                    >
                        {/* Background Pattern effect on hover */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-700 pointer-events-none"
                            style={{
                                backgroundImage: 'radial-gradient(circle at 2px 2px, #1A4D2E 1px, transparent 0)',
                                backgroundSize: '24px 24px'
                            }}
                        />

                        <div className="relative z-10">
                            <span className="text-[#1A4D2E]/80 tracking-[0.2em] font-sans text-xs md:text-sm font-semibold uppercase mb-6 block">
                                Community
                            </span>
                            <h3 className="text-[clamp(2rem,5.1vw,4.8rem)] font-sans font-bold text-[#0F2E18] tracking-tighter leading-[1.06] mb-4 max-w-full line-clamp-2">
                                <span className="text-[0.9em]">The coolest travel crew </span>
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1A4D2E] to-[#4A7D5E]">out there.</span>
                            </h3>
                        </div>

                        <p className="text-xl md:text-2xl font-serif italic text-[#1A4D2E] relative z-10 mt-12 md:max-w-lg leading-snug">
                            Each cohort consists of 10-20 Cambridge members, accompanied by Chinese Cambridge students who will act as your travel guides.
                        </p>

                        {/* Decorative organic shapes */}
                        <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-white/40 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-1000 ease-out" />
                    </div>

                    {/* Support / Free Time Block (1/3 width) */}
                    <div
                        className="group relative flex-[1] bg-[#1A4D2E] rounded-3xl p-8 md:p-12 overflow-hidden flex flex-col justify-between items-start text-[#FDFBF7] shadow-lg"
                    >
                        <div className="relative z-10 w-full">
                            <div className="flex justify-between items-center w-full mb-8">
                                <span className="text-[#FDFBF7]/70 tracking-[0.2em] font-sans text-xs md:text-sm font-semibold uppercase">
                                    Support
                                </span>
                                <span className="text-[#D85C3C] text-2xl font-serif">✽</span>
                            </div>

                            <h3 className="text-3xl md:text-4xl lg:text-5xl font-sans font-bold tracking-tight leading-[1.1] mb-6">
                                Explore freely.<br />
                                <span className="font-serif italic text-[#E8F3E8] font-normal">We've got your back.</span>
                            </h3>
                        </div>

                        <p className="text-[#FDFBF7]/80 font-light text-base md:text-lg leading-relaxed relative z-10 mt-8">
                            You will have allocated time to self-explore while we as locals, ensure you're fully supported.
                        </p>

                        {/* Hover glow effect */}
                        <div className="absolute inset-0 bg-gradient-to-br from-[#D85C3C]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                    </div>

                </div>
            </div>
        </section>
    );
}
