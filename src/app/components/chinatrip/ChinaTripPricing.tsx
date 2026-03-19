"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, X, ArrowRight, UtensilsCrossed, Plane, FileText } from "lucide-react";
import { Button } from "../ui/button";
import SelfFundRegistrationDialog from "./SelfFundRegistrationDialog";
import {
    SCHOLARSHIP_APPLICATION_URL,
} from "./selfFundRegistration";
import { useSelfFundRegistrationGate } from "./useSelfFundRegistrationGate";

const includedItems = [
    "Accommodation (10 nights, twin-sharing)",
    "Attraction tickets & activity fees",
    "Cultural experiences & expert guides",
    "In-country transportation (High-speed rail & Private Coach)",
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

const additionalInfoList = [
    {
        icon: <UtensilsCrossed className="w-5 h-5 text-white/70 group-hover:text-[#D85C3C] transition-colors duration-300" />,
        title: "Dining",
        description: (
            <>
                China is known for its delicious and affordable cuisine. You can enjoy excellent meals at very reasonable prices. Expect to spend around £4-8 per person for a substantial dinner.
            </>
        ),
    },
    {
        icon: <Plane className="w-5 h-5 text-white/70 group-hover:text-[#D85C3C] transition-colors duration-300" />,
        title: "Flight & Arrival",
        description: (
            <>
                You are responsible for arranging your own flights to and from China. For this year's trip, <strong className="text-[#FDFBF7] font-medium">Jianshan Scholars must arrive in Hangzhou on August 1st</strong>, while <strong className="text-[#FDFBF7] font-medium">self-funded participants arrive on August 8th</strong>. All participants will <strong className="text-[#FDFBF7] font-medium">depart from Beijing on August 18th</strong>. Please research your international flights prices in advance.
            </>
        ),
    },
    {
        icon: <FileText className="w-5 h-5 text-white/70 group-hover:text-[#D85C3C] transition-colors duration-300" />,
        title: "Visa",
        description: (
            <>
                It is your sole responsibility to ensure you have the right to enter China. Please check if you meet <strong className="text-[#FDFBF7] font-medium">visa-free entry requirements</strong> and duration. If not, you must apply for a visa yourself and bear the application costs. We can provide an invitation letter if needed.
            </>
        ),
    }
];

export default function ChinaTripPricing() {
    const [showDialog, setShowDialog] = useState(false);
    const { isLocked, opensAtLabel, registrationUrl } = useSelfFundRegistrationGate();

    return (
        <>
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
                                Pricing
                            </span>
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-sans font-bold text-[#FDFBF7] tracking-tighter leading-tight mb-6">
                                Immerse yourself.<br />
                                <span className="font-serif italic text-[#D85C3C] font-normal text-3xl md:text-4xl lg:text-5xl">We handle the rest.</span>
                            </h2>

                            <div className="flex items-baseline gap-2 mb-8">
                                <span className="text-6xl md:text-8xl font-sans font-bold tracking-tighter">£1,499</span>
                                <span className="text-lg text-[#FDFBF7]/50 font-medium">/ person</span>
                            </div>

                            <p className="text-lg text-[#FDFBF7]/70 font-light mb-10 max-w-md">
                                Everything you need for an immersive 11-day journey is covered in one straightforward package.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4">
                                {isLocked || !registrationUrl ? (
                                    <Button
                                        size="lg"
                                        className="group w-full rounded-full bg-[#D85C3C] px-8 text-base text-white transition-all duration-300 hover:bg-[#C44A2D] sm:w-auto"
                                        onClick={() => setShowDialog(true)}
                                    >
                                        Register Now
                                    </Button>
                                ) : (
                                    <Button
                                        asChild
                                        size="lg"
                                        className="group w-full rounded-full bg-[#D85C3C] px-8 text-base text-white transition-all duration-300 hover:bg-[#C44A2D] sm:w-auto"
                                    >
                                        <a href={registrationUrl} target="_blank" rel="noopener noreferrer">
                                            Register Now
                                        </a>
                                    </Button>
                                )}
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
                                    asChild
                                    variant="outline"
                                    className="group w-full sm:w-auto rounded-full border-white/20 text-white hover:bg-white hover:text-[#1A4D2E] transition-colors whitespace-nowrap"
                                >
                                    <a href={SCHOLARSHIP_APPLICATION_URL}>
                                        Apply for Scholarship
                                        <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
                                    </a>
                                </Button>
                            </div>
                        </motion.div>
                    </div>

                    {/* Important Information Cards */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="mt-20 md:mt-28 pt-16 md:pt-20 border-t border-white/10"
                    >
                        <div className="text-center mb-12 md:mb-16">
                            <h3 className="text-2xl md:text-3xl lg:text-4xl font-sans font-bold text-[#FDFBF7] tracking-tight mb-4">
                                Important Information
                            </h3>
                            <p className="text-[#FDFBF7]/60 font-light max-w-2xl mx-auto text-[15px] md:text-base">
                                Extra details to help you prepare for the journey and understand what's required before you arrive.
                            </p>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                            {additionalInfoList.map((info, i) => (
                                <div 
                                    key={i} 
                                    className="bg-[#111] border border-white/10 rounded-3xl p-8 md:p-10 hover:bg-[#151515] hover:border-white/20 hover:-translate-y-1 transition-all duration-300 group flex flex-col"
                                >
                                    <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-8 group-hover:bg-[#D85C3C]/10 group-hover:border-[#D85C3C]/20 transition-all duration-300">
                                        {info.icon}
                                    </div>
                                    <h4 className="text-xl md:text-2xl font-bold font-sans text-[#FDFBF7] mb-4">
                                        {info.title}
                                    </h4>
                                    <p className="text-[#FDFBF7]/60 font-light leading-relaxed text-[15px] md:text-base flex-1">
                                        {info.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            <SelfFundRegistrationDialog
                open={showDialog}
                onOpenChange={setShowDialog}
                opensAtLabel={opensAtLabel}
            />
        </>
    );
}
