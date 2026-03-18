"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search } from "lucide-react";
import {
    PAST_SCHOLAR_FILTERS,
    type PastScholar,
    type ScholarFilterYear,
} from "../../data/pastScholars";

const SCHOLARSHIP_APPLICATION_URL = "https://portal.jianshanacademy.com";

interface ScholarsListProps {
    scholars: PastScholar[];
}

export default function ScholarsList({ scholars }: ScholarsListProps) {
    const [activeFilter, setActiveFilter] = useState<ScholarFilterYear>("All");
    const [searchQuery, setSearchQuery] = useState("");

    const filteredScholars = scholars.filter((scholar: PastScholar) => {
        const matchesFilter = activeFilter === "All" || scholar.year === activeFilter;
        if (!matchesFilter) return false;

        if (!searchQuery.trim()) return true;

        const q = searchQuery.toLowerCase();
        return (
            scholar.name.toLowerCase().includes(q) ||
            scholar.university.toLowerCase().includes(q) ||
            scholar.college.toLowerCase().includes(q) ||
            scholar.subject.toLowerCase().includes(q) ||
            (scholar.nationality && scholar.nationality.toLowerCase().includes(q)) ||
            (scholar.postDaySessions && scholar.postDaySessions.some(topic => topic.toLowerCase().includes(q)))
        );
    });

    return (
        <section className="bg-white py-24 relative z-10 border-t border-[#0A0A0A]/10">
            <div className="max-w-[1400px] mx-auto px-6">
                {/* Header & Filters */}
                <div className="flex flex-col mb-20">
                    <motion.div>
                        <h3 className="text-5xl lg:text-7xl font-sans font-light text-[#0A0A0A] tracking-tight mb-12">
                            Meet the <span className="font-serif italic text-[#1A4D2E]">Scholars</span>
                        </h3>
                    </motion.div>

                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 justify-between border-y border-[#0A0A0A]/10 py-6">
                        <div className="flex flex-wrap gap-6">
                            {PAST_SCHOLAR_FILTERS.map((pill) => (
                                <button
                                    key={pill}
                                    onClick={() => setActiveFilter(pill)}
                                    className={`text-sm tracking-wide font-sans transition-all duration-300 ${activeFilter === pill
                                        ? "text-[#0A0A0A] font-medium"
                                        : "text-[#0A0A0A]/40 hover:text-[#0A0A0A]"
                                        }`}
                                >
                                    {pill === "All" ? "All Cohorts" : `'${pill.slice(-2)}`}
                                </button>
                            ))}
                        </div>
                        <div className="relative w-full sm:w-72">
                            <input
                                type="text"
                                placeholder="Search profiles..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pr-4 py-2 bg-transparent border-b border-[#0A0A0A]/20 focus:outline-none focus:border-[#0A0A0A] transition-all text-sm font-serif italic text-[#0A0A0A]"
                            />
                            <Search className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 text-[#0A0A0A]/40" />
                        </div>
                    </div>
                </div>

                {/* Grid or Empty State */}
                <div className="relative min-h-[400px]">
                    <AnimatePresence mode="popLayout">
                        {filteredScholars.length > 0 ? (
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
                                {filteredScholars.map((scholar, index) => (
                                    <motion.div
                                        layout
                                        initial={{ opacity: 0, y: 40 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, scale: 0.95 }}
                                        transition={{ delay: index * 0.05, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                                        key={scholar.id}
                                        className="flex flex-col md:flex-row gap-8 items-start group"
                                    >
                                        {/* Portrait */}
                                        <div className="w-full md:w-2/5 shrink-0 relative">
                                            <div className="absolute top-4 left-4 z-10 bg-white/90 backdrop-blur-sm px-3 py-1.5 border border-[#0A0A0A]/10 text-xs font-serif italic text-[#0A0A0A] shadow-sm">
                                                Class of '{scholar.year.slice(-2)}
                                            </div>
                                            {!scholar.hasCustomProfileImage && (
                                                <div className="absolute top-4 right-4 z-10 bg-[#0A0A0A] px-3 py-1.5 border border-white/10 text-[10px] font-sans tracking-[0.24em] uppercase text-white shadow-sm">
                                                    Photo Needed
                                                </div>
                                            )}
                                            <div className="w-full aspect-[3/4] overflow-hidden bg-[#FDFBF7]">
                                                {scholar.hasCustomProfileImage ? (
                                                    <img
                                                        src={scholar.profileImage.path}
                                                        alt={scholar.name}
                                                        className="w-full h-full object-cover filter grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
                                                    />
                                                ) : (
                                                    <div className="w-full h-full bg-[#050505] text-white flex items-end p-6 md:p-8">
                                                        <div>
                                                            <div className="text-[10px] font-sans uppercase tracking-[0.32em] text-white/50 mb-3">
                                                                Portrait Pending
                                                            </div>
                                                            <div className="text-2xl font-serif leading-tight max-w-[12ch]">
                                                                {scholar.name}
                                                            </div>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        </div>

                                        {/* Editorial Details */}
                                        <div className="flex flex-col w-full md:w-3/5 justify-center">
                                            <div className="mb-6">
                                                <h4 className="text-3xl lg:text-4xl font-serif text-[#0A0A0A] mb-2">{scholar.name}</h4>
                                                <div className="text-sm font-sans tracking-wide text-[#0A0A0A]/60 flex items-center gap-1 mt-3">
                                                    {scholar.degreeLevel && (
                                                        <span className="capitalize">{scholar.degreeLevel}</span>
                                                    )}
                                                    {scholar.degreeLevel && <span>in</span>}
                                                    <span>{scholar.subject}</span>
                                                </div>
                                            </div>

                                            <div className="flex flex-row gap-20 border-l border-[#0A0A0A]/10 pl-6 mb-8 mt-2">
                                                <div>
                                                    <div className="text-[10px] uppercase tracking-widest font-sans text-[#0A0A0A]/40 mb-1">College</div>
                                                    <div className="text-base font-medium text-[#0A0A0A]">{scholar.college.replace(/\s*College$/, '')}</div>
                                                </div>

                                                {scholar.nationality && (
                                                    <div>
                                                        <div className="text-[10px] uppercase tracking-widest font-sans text-[#0A0A0A]/40 mb-1">Nationality</div>
                                                        <div className="text-base font-medium text-[#0A0A0A]">{scholar.nationality}</div>
                                                    </div>
                                                )}
                                            </div>

                                            {/* Appendix: Hosted Curriculum */}
                                            {scholar.postDaySessions && scholar.postDaySessions.length > 0 && (
                                                <div className="pt-6 border-t border-[#0A0A0A]/10 mt-auto">
                                                    <div className="text-xs uppercase tracking-widest font-sans text-[#0A0A0A]/40 mb-3">Lectures & Sessions</div>
                                                    <ul className="space-y-1.5">
                                                        {scholar.postDaySessions.map((session, i) => (
                                                            <li key={i} className="text-[13px] font-mono text-[#0A0A0A]/80 leading-relaxed flex items-start gap-3">
                                                                <span className="text-[#0A0A0A]/30 mt-0.5">{(i + 1).toString().padStart(2, '0')}</span>
                                                                <span>{session}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            )}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        ) : activeFilter === "2026" ? (
                            <motion.div
                                layout
                                initial={{ opacity: 0, y: 40 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                                className="w-full flex justify-center py-20"
                            >
                                <div className="max-w-xl w-full border border-[#0A0A0A]/10 p-12 md:p-16 flex flex-col items-center text-center bg-[#FDFBF7]">
                                    <div className="text-[#1A4D2E] text-6xl font-serif leading-none mb-6 opacity-40">“</div>
                                    <h4 className="text-3xl font-serif text-[#0A0A0A] mb-4">Class of '26 is Forming</h4>
                                    <p className="text-sm font-sans text-[#0A0A0A]/60 leading-relaxed mb-10 max-w-sm">
                                        The 2026 scholar applications are currently in progress. We look forward to welcoming the next generation of visionary thinkers.
                                    </p>
                                    <a
                                        href={SCHOLARSHIP_APPLICATION_URL}
                                        className="inline-flex items-center justify-center border border-[#0A0A0A] px-6 py-3 text-sm font-sans tracking-widest uppercase transition-colors hover:bg-[#0A0A0A] hover:text-white"
                                    >
                                        Apply Now
                                    </a>
                                </div>
                            </motion.div>
                        ) : (
                            <motion.div
                                layout
                                initial={{ opacity: 0, y: 40 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                                className="w-full flex justify-center py-32"
                            >
                                <p className="font-serif italic text-[#0A0A0A]/40 text-lg">No scholars found matching your criteria.</p>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}
