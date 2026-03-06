import { motion } from "framer-motion";
import { CalendarClock } from "lucide-react";

interface TimelineEvent {
    step: string;
    title: string;
    date: string;
    description: string;
}

const events: TimelineEvent[] = [
    {
        step: "01",
        title: "Registration Opens",
        date: "TBC",
        description: "Sign up on our platform and secure your spot on a first-come, first-served basis.",
    },
    {
        step: "02",
        title: "Registration Closes",
        date: "TBC",
        description: "Final deadline for all sign-ups. Documentation and initial payments are due.",
    },
    {
        step: "03",
        title: "Pre-trip Briefing",
        date: "TBC",
        description: "An online session covering logistics, packing essentials, and visa preparation.",
    },
    {
        step: "04",
        title: "Departure",
        date: "July – August 2026",
        description: "Your 11-day China adventure officially begins!",
    },
];

export default function ChinaTripTimeline() {
    return (
        <section className="bg-[#FDFBF7] py-24 md:py-32 relative z-10 overflow-hidden">
            <div className="max-w-[1000px] mx-auto px-6 md:px-12">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="mb-16 md:mb-24 text-center"
                >
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#1A4D2E]/10 text-[#1A4D2E] mb-6">
                        <CalendarClock className="w-6 h-6" />
                    </div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-sans font-bold text-[#0A0A0A] tracking-tighter leading-tight mb-4">
                        Your Journey <span className="font-serif italic text-[#D85C3C] font-normal">Timeline</span>
                    </h2>
                    <p className="text-[#0A0A0A]/50 font-light text-lg max-w-lg mx-auto">
                        Dates are currently being finalized for the 2026 cohort.
                    </p>
                </motion.div>

                {/* Vertical Timeline */}
                <div className="relative">
                    {/* Line */}
                    <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[2px] bg-[#1A1A1A]/10 -translate-x-1/2 md:translate-x-0" />

                    {events.map((event, i) => (
                        <motion.div
                            key={event.step}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, delay: i * 0.1 }}
                            className={`relative flex items-center justify-between w-full mb-16 last:mb-0 ${i % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"
                                }`}
                        >
                            {/* Empty space for alternating layout on desktop */}
                            <div className="hidden md:block w-5/12" />

                            {/* Node connecting to line */}
                            <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#1A4D2E] border-4 border-[#FDFBF7] z-10 shadow-[0_0_0_4px_rgba(26,77,46,0.1)]" />

                            {/* Content */}
                            <div className="w-full md:w-5/12 pl-14 md:pl-0">
                                <div className={`flex flex-col ${i % 2 === 0 ? "md:items-start md:text-left" : "md:items-end md:text-right"}`}>
                                    <div className="flex items-center gap-3 mb-2">
                                        <span className="text-xs font-bold tracking-widest text-[#1A4D2E] bg-[#1A4D2E]/10 px-3 py-1 rounded-full uppercase">
                                            Step {event.step}
                                        </span>
                                    </div>
                                    <h3 className="text-2xl font-sans font-bold text-[#0A0A0A] tracking-tight mb-1">
                                        {event.title}
                                    </h3>
                                    <span className="text-[#D85C3C] font-mono text-sm tracking-wider uppercase mb-3 block">
                                        {event.date}
                                    </span>
                                    <p className="text-[#0A0A0A]/60 font-light leading-relaxed">
                                        {event.description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
