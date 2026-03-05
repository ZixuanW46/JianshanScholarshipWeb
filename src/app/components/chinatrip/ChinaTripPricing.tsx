import { motion } from "framer-motion";
import { Check, X, ArrowRight } from "lucide-react";
import { Button } from "../ui/button";

const includedItems = [
    "Accommodation (11 nights, twin-sharing)",
    "Attraction tickets & activity fees",
    "Cultural experiences & expert guides",
    "In-country transportation (Flights & High-speed rail)",
    "Private coach for all city tours",
    "Breakfast at hotels + select group dinners",
];

const notIncludedItems = [
    "International flights to/from China",
    "Visa application fees",
    "Daily lunches & most dinners",
    "Personal expenses & souvenirs",
    "Travel insurance",
];

export default function ChinaTripPricing() {
    return (
        <section className="bg-[#0A0A0A] text-[#FDFBF7] py-24 md:py-32 relative overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">

                    {/* Price & CTA Left Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                        className="flex-[1] w-full"
                    >
                        <span className="text-[#FDFBF7]/40 font-mono text-xs tracking-[0.2em] uppercase block mb-4">
                            Investment
                        </span>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-sans font-bold text-[#FDFBF7] tracking-tighter leading-tight mb-6">
                            Clear pricing.<br />
                            <span className="font-serif italic text-[#D85C3C] font-normal">No hidden costs.</span>
                        </h2>

                        <div className="flex items-baseline gap-2 mb-8">
                            <span className="text-6xl md:text-8xl font-sans font-bold tracking-tighter">£1,299</span>
                            <span className="text-lg text-[#FDFBF7]/50 font-medium">/ person</span>
                        </div>

                        <p className="text-lg text-[#FDFBF7]/70 font-light mb-10 max-w-md">
                            Everything you need for an immersive 11-day journey is covered in one straightforward package.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button
                                size="lg"
                                className="group text-base px-8 bg-[#D85C3C] hover:bg-[#C44A2D] text-white rounded-full transition-all duration-300 w-full sm:w-auto"
                            >
                                Register Now
                            </Button>
                        </div>
                    </motion.div>

                    {/* Inclusions Card Right Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex-[1.2] w-full bg-[#111] rounded-3xl border border-white/10 p-8 md:p-12 relative overflow-hidden"
                    >
                        {/* Subtle background glow */}
                        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#1A4D2E]/20 rounded-full blur-[100px] pointer-events-none opacity-50 -translate-y-1/2 translate-x-1/2" />

                        <div className="relative z-10 flex flex-col md:flex-row gap-10 md:gap-16">
                            {/* Included */}
                            <div className="flex-1">
                                <h3 className="text-xl font-sans font-bold tracking-tight mb-6 flex items-center gap-2">
                                    <span className="text-[#1A4D2E]">What's Included</span>
                                </h3>
                                <ul className="space-y-4">
                                    {includedItems.map((item, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <div className="w-5 h-5 rounded-full bg-[#1A4D2E]/20 flex items-center justify-center shrink-0 mt-0.5">
                                                <Check className="w-3 h-3 text-[#2E8B57]" />
                                            </div>
                                            <span className="text-sm text-[#FDFBF7]/80 font-light leading-snug">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Divider on desktop */}
                            <div className="hidden md:block w-[1px] bg-white/10 self-stretch" />
                            {/* Divider on mobile */}
                            <div className="md:hidden h-[1px] w-full bg-white/10" />

                            {/* Not Included */}
                            <div className="flex-1">
                                <h3 className="text-xl font-sans font-bold tracking-tight mb-6 flex items-center gap-2 text-[#FDFBF7]/60">
                                    Not Included
                                </h3>
                                <ul className="space-y-4">
                                    {notIncludedItems.map((item, i) => (
                                        <li key={i} className="flex items-start gap-3 opacity-60">
                                            <div className="w-5 h-5 rounded-full border border-white/20 flex items-center justify-center shrink-0 mt-0.5">
                                                <X className="w-3 h-3 text-white/50" />
                                            </div>
                                            <span className="text-sm text-[#FDFBF7] font-light leading-snug">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Scholarship Callout Banner */}
                        <div className="relative z-10 mt-12 bg-[#1A4D2E] rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4 border border-[#2E8B57]/30">
                            <div>
                                <h4 className="text-lg font-bold font-sans tracking-tight text-white mb-1">
                                    Need financial support?
                                </h4>
                                <p className="text-sm text-white/70 font-light">
                                    The Jianshan Scholarship covers the full trip package.
                                </p>
                            </div>
                            <Button
                                variant="outline"
                                className="group w-full sm:w-auto rounded-full border-white/20 text-white hover:bg-white hover:text-[#1A4D2E] transition-colors whitespace-nowrap"
                            >
                                Apply for Scholarship
                                <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
                            </Button>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
