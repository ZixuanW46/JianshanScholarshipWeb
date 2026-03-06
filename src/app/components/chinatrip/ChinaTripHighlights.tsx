"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

// ============================================================
// SHARED DATA
// ============================================================
type CategoryType =
    | "Culture & Heritage"
    | "Nature & Scenery"
    | "Cultural Experience"
    | "Art & Local Life"
    | "City Landmark"
    | "Modern Tech"
    | "Local Life";

interface Attraction {
    name: string;
    englishName: string;
    description: string;
    category: CategoryType;
    imageUrl: string;
}

interface CityData {
    id: string;
    name: string;
    englishName: string;
    subtitle: string;
    intro: string;
    heroImage: string;
    attractions: Attraction[];
}

const itineraryData: CityData[] = [
    {
        id: "beijing",
        name: "北京",
        englishName: "Beijing",
        subtitle: "The Imperial Capital",
        intro: "The historic heart of China. Experience the monumental scale of ancient empires alongside vibrant local traditions.",
        heroImage: "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?q=80&w=1920&auto=format&fit=crop",
        attractions: [
            { name: "长城", englishName: "The Great Wall", description: "Trek the ancient sections, marveling at human engineering set against breathtaking mountain vistas.", category: "Nature & Scenery", imageUrl: "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?q=80&w=1920&auto=format&fit=crop" },
            { name: "故宫", englishName: "The Forbidden City", description: "Stand inside the heart of 600 years of imperial rule in this sprawling complex of palaces.", category: "Culture & Heritage", imageUrl: "https://images.unsplash.com/photo-1718248336966-70d17f2dbfd7?q=80&w=1080&auto=format&fit=crop" },
            { name: "天坛", englishName: "Temple of Heaven", description: "An imperial complex of religious buildings where emperors prayed for good harvests.", category: "Culture & Heritage", imageUrl: "https://images.unsplash.com/photo-1583274246988-db452145326c?q=80&w=1080&auto=format&fit=crop" },
            { name: "京剧", englishName: "Peking Opera", description: "Immerse yourself in traditional Chinese theater, known for its elaborate costumes and distinct vocal styles.", category: "Cultural Experience", imageUrl: "https://images.unsplash.com/photo-1582294101905-ebbd8397a6e1?q=80&w=1080&auto=format&fit=crop" },
            { name: "包饺子", englishName: "Dumpling Making", description: "Get hands-on experience making traditional Chinese dumplings, a staple of local life.", category: "Cultural Experience", imageUrl: "https://images.unsplash.com/photo-1563245372-f21724e3856d?q=80&w=1080&auto=format&fit=crop" },
            { name: "学太极", englishName: "Tai Chi Masterclass", description: "Learn the ancient martial art of Tai Chi, focusing on slow, deliberate movements.", category: "Cultural Experience", imageUrl: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1080&auto=format&fit=crop" },
            { name: "胡同游", englishName: "Hutong Tour", description: "Explore the narrow, historic alleyways of old Beijing and glimpse traditional local life.", category: "Local Life", imageUrl: "https://images.unsplash.com/photo-1552554746-92864bdf6bf0?q=80&w=1080&auto=format&fit=crop" },
        ]
    },
    {
        id: "hangzhou",
        name: "杭州",
        englishName: "Hangzhou",
        subtitle: "The Poetic Paradise",
        intro: "A city of poetry and tea. Discover mist-covered hills, ancient pagodas, and centuries of artistic heritage.",
        heroImage: "/westlake.webp",
        attractions: [
            { name: "西湖", englishName: "West Lake", description: "Stroll along the poetic shores that have inspired Chinese artists and writers for over a millennium.", category: "Nature & Scenery", imageUrl: "/westlake.webp" },
            { name: "灵隐寺", englishName: "Lingyin Temple", description: "A tranquil, 1,700-year-old Buddhist monastery nestled deep in the lush, misty mountains.", category: "Culture & Heritage", imageUrl: "https://images.unsplash.com/photo-1610312278520-bcc893a3ff1d?q=80&w=1080&auto=format&fit=crop" },
            { name: "大运河", englishName: "The Grand Canal", description: "Explore the longest artificial river in the world, a marvel of ancient engineering and trade.", category: "Culture & Heritage", imageUrl: "https://images.unsplash.com/photo-1561053428-fb4eb461dffa?q=80&w=1080&auto=format&fit=crop" },
            { name: "龙井采茶", englishName: "Longjing Tea Picking", description: "Visit the emerald-green hillside tea fields and experience picking world-famous Longjing green tea.", category: "Cultural Experience", imageUrl: "https://images.unsplash.com/photo-1601362772596-fdd28b8acc22?q=80&w=1080&auto=format&fit=crop" },
            { name: "茶叶博物馆", englishName: "National Tea Museum", description: "Dive deep into the history, culture, and varieties of Chinese tea.", category: "Cultural Experience", imageUrl: "https://images.unsplash.com/photo-1576086430364-bb20ccf3cb29?q=80&w=1080&auto=format&fit=crop" },
            { name: "竹编", englishName: "Bamboo Weaving", description: "Learn traditional bamboo weaving techniques from local artisans.", category: "Cultural Experience", imageUrl: "https://images.unsplash.com/photo-1618645511304-44ed5b367fc9?q=80&w=1080&auto=format&fit=crop" },
        ]
    },
    {
        id: "shanghai",
        name: "上海",
        englishName: "Shanghai",
        subtitle: "The Future Metropolis",
        intro: "Where the East meets the West, and history meets the future. Experience China's vibrant, cosmopolitan megacity.",
        heroImage: "/shanghai.webp",
        attractions: [
            { name: "外滩", englishName: "The Bund", description: "Walk the historic waterfront promenade lined with colonial-era architecture facing the futuristic skyline.", category: "City Landmark", imageUrl: "/shanghai.webp" },
            { name: "豫园", englishName: "Yu Garden", description: "An extensive Chinese garden dating back to the Ming Dynasty, featuring classical pavilions and ponds.", category: "Culture & Heritage", imageUrl: "https://images.unsplash.com/photo-1542618956-fce11c97aabd?q=80&w=1080&auto=format&fit=crop" },
            { name: "静安寺", englishName: "Jing'an Temple", description: "A stunning golden Buddhist temple standing in stark contrast to the modern skyscrapers.", category: "Culture & Heritage", imageUrl: "https://images.unsplash.com/photo-1621644781488-842245fba1bb?q=80&w=1080&auto=format&fit=crop" },
            { name: "田子坊", englishName: "Tianzifang", description: "Wander through an arts and crafts enclave developed from a renovated traditional residential area.", category: "Art & Local Life", imageUrl: "https://images.unsplash.com/photo-1658428172922-c42fe1b82ef4?q=80&w=1080&auto=format&fit=crop" },
            { name: "高铁体验", englishName: "High-Speed Rail", description: "Experience the sleek efficiency of China's modern infrastructure at unprecedented speeds.", category: "Modern Tech", imageUrl: "https://images.unsplash.com/photo-1522079088629-67980cdb8988?q=80&w=1080&auto=format&fit=crop" },
        ]
    }
];

const getCategoryColor = (category: CategoryType) => {
    switch (category) {
        case "Culture & Heritage": return "bg-[#8B4513]/80 text-white border-[#8B4513]/30";
        case "Nature & Scenery": return "bg-[#2E8B57]/80 text-white border-[#2E8B57]/30";
        case "Cultural Experience": return "bg-[#D85C3C]/80 text-white border-[#D85C3C]/30";
        case "Art & Local Life": return "bg-[#9370DB]/80 text-white border-[#9370DB]/30";
        case "City Landmark": return "bg-[#4682B4]/80 text-white border-[#4682B4]/30";
        case "Modern Tech": return "bg-[#4B0082]/80 text-white border-[#4B0082]/30";
        case "Local Life": return "bg-[#DAA520]/80 text-white border-[#DAA520]/30";
        default: return "bg-black/60 text-white border-white/20";
    }
};

// ============================================================
// MAIN PAGE EXPORT
// ============================================================
export default function ChinaTripHighlights() {
    const [activeIdx, setActiveIdx] = useState(0);
    const [selectedSpot, setSelectedSpot] = useState<Attraction | null>(null);

    const city = itineraryData[activeIdx];
    // Background dynamic logic: show attraction bg if selected, else city hero bg
    const bgImage = selectedSpot ? selectedSpot.imageUrl : city.heroImage;

    // Handlers for switching cities
    const handleSwitchCity = (idx: number) => {
        if (idx === activeIdx) return;
        setActiveIdx(idx);
        setSelectedSpot(null); // Reset selection when jumping cities
    };

    return (
        <section className="bg-[#FDFBF7] pt-24 md:pt-32 relative text-[#0A0A0A]">

            {/* ====== OUTSIDE SECTION TITLE (Uncoupled from the full-screen hero) ====== */}
            <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24 mb-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-6 mb-8"
                >
                    <div className="h-[1px] w-12 bg-[#1A4D2E]/30" />
                    <span className="text-[#1A4D2E]/70 tracking-[0.2em] font-sans text-xs md:text-sm font-semibold uppercase">
                        Curated Itinerary
                    </span>
                </motion.div>
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
                    <div>
                        <h2 className="text-4xl md:text-6xl lg:text-7xl font-sans font-bold tracking-tighter text-[#0A0A0A] leading-[1.05] mb-6">
                            Journey <br className="hidden md:block" />
                            <span className="font-serif italic font-normal text-[#1A4D2E]">Highlights.</span>
                        </h2>
                        <p className="text-base md:text-lg text-[#0A0A0A]/50 font-light max-w-xl leading-relaxed">
                            Three distinct cities. Three unique rhythms of China. Explore the historic, the poetic, and the futuristic.
                        </p>
                    </div>
                </div>
            </div>

            {/* ====== FULL WIDTH CAROUSEL COMPONENT ====== */}
            <div className="relative w-full h-[85vh] min-h-[700px] overflow-hidden bg-[#0A0A0A]">

                {/* ====== DYNAMIC BACKGROUND ====== */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={bgImage}
                        initial={{ opacity: 0, scale: 1.05 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.98 }}
                        transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
                        className="absolute inset-0"
                    >
                        <img src={bgImage} alt={city.englishName} className="absolute inset-0 w-full h-full object-cover" />
                    </motion.div>
                </AnimatePresence>

                {/* Gradient Overlays for Readability */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/60 via-transparent to-[#0A0A0A]/90 pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A]/80 via-[#0A0A0A]/40 to-transparent pointer-events-none" />

                {/* ====== PROMINENT CITY SWITCHER (Left Side, Moved Up) ====== */}
                <div className="absolute left-4 right-4 md:right-auto md:left-12 lg:left-24 top-[5%] md:top-[12%] z-30 pointer-events-auto">
                    <div className="flex flex-row md:flex-col justify-between md:justify-start gap-0 md:gap-6 w-full pb-2 md:pb-0">
                        {itineraryData.map((c, i) => {
                            const isActive = i === activeIdx;
                            return (
                                <button
                                    key={c.id}
                                    onClick={() => handleSwitchCity(i)}
                                    className={`group flex flex-col md:flex-row items-center md:items-center gap-1.5 md:gap-6 transition-all duration-300 flex-1 md:flex-none text-center md:text-left py-2 min-w-0`}
                                >
                                    {/* Active Line indicator (Horizontal on Mobile, Vertical on Desktop) */}
                                    <div className={`transition-all duration-300 ${isActive ? 'bg-white' : 'bg-white/20 group-hover:bg-white/50'} h-[2px] w-10 md:w-0.5 md:h-12`} />

                                    <div className="flex flex-col items-center md:items-start min-w-0 w-full">
                                        <span className={`block text-lg sm:text-2xl md:text-5xl font-serif tracking-tight transition-colors duration-300 truncate w-full ${isActive ? 'text-white' : 'text-white/40 group-hover:text-white/70'}`}>
                                            {c.englishName}
                                        </span>
                                        <span className={`hidden md:block text-sm tracking-[0.2em] font-sans uppercase transition-colors duration-300 ${isActive ? 'text-white/80' : 'text-white/0 group-hover:text-white/40'}`}>
                                            {c.subtitle}
                                        </span>
                                    </div>
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* ====== DYNAMIC BOTTOM CONTENT ====== */}
                <div className="absolute inset-0 flex flex-col justify-end z-20 px-6 md:px-12 lg:px-24 pb-8 md:pb-12 pointer-events-none">
                    <div className="max-w-[1400px] mx-auto w-full flex flex-col md:items-end pointer-events-auto">

                        {/* Dynamic Text Box (aligned to the right to avoid overlapping with left nav) */}
                        <div className="w-full md:w-[60%] lg:w-[50%] mb-6 md:mb-10 text-left md:text-right flex flex-col md:items-end">
                            <AnimatePresence mode="wait">
                                {selectedSpot ? (
                                    // ==== SELECTED ATTRACTION INFO ====
                                    <motion.div
                                        key={`spot-${selectedSpot.name}`}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -20 }}
                                        transition={{ duration: 0.5 }}
                                        className="md:text-right"
                                    >
                                        <div className="flex flex-wrap md:justify-end items-center gap-2 md:gap-3 mb-2 md:mb-4">
                                            <span className="text-white/60 text-[10px] md:text-xs tracking-widest uppercase font-sans hidden md:inline-block">
                                                {city.englishName}
                                            </span>
                                            <span className={`text-[10px] md:text-xs px-2 py-0.5 md:px-3 md:py-1 rounded-full border backdrop-blur-md ${getCategoryColor(selectedSpot.category)}`}>
                                                {selectedSpot.category.toUpperCase()}
                                            </span>
                                        </div>
                                        <h3 className="text-3xl md:text-5xl lg:text-6xl font-serif text-white leading-[1.1] tracking-tight mb-2 md:mb-4 drop-shadow-lg">
                                            {selectedSpot.englishName}
                                            <span className="block text-lg md:text-2xl lg:text-3xl font-sans font-light text-white/50 mt-1">{selectedSpot.name}</span>
                                        </h3>
                                        <p className="text-sm md:text-lg text-white/80 font-light leading-relaxed max-w-md md:ml-auto drop-shadow-md line-clamp-3 md:line-clamp-none">
                                            {selectedSpot.description}
                                        </p>
                                    </motion.div>
                                ) : (
                                    // ==== DEFAULT CITY INFO ====
                                    <motion.div
                                        key={`city-${city.id}`}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -20 }}
                                        transition={{ duration: 0.5 }}
                                    >
                                        <span className="text-white/60 text-[10px] md:text-sm tracking-[0.25em] uppercase font-sans mb-1 md:mb-3 block drop-shadow-md">
                                            Overview
                                        </span>
                                        <h3 className="text-4xl md:text-7xl lg:text-8xl font-serif text-white leading-[0.9] tracking-tight mb-2 md:mb-4 drop-shadow-lg">
                                            {city.name}
                                        </h3>
                                        <p className="text-sm md:text-lg text-white/80 font-light leading-relaxed max-w-md md:ml-auto drop-shadow-md line-clamp-3 md:line-clamp-none">
                                            {city.intro}
                                        </p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        {/* ATTRACTION CAPSULES (Horizontal Scroll with Arrows) */}
                        <div className="w-full relative">
                            {/* Left Arrow */}
                            <button
                                onClick={() => {
                                    const el = document.getElementById(`capsules-${city.id}`);
                                    if (el) el.scrollBy({ left: -200, behavior: 'smooth' });
                                }}
                                className="hidden md:flex absolute -left-2 top-1/2 -translate-y-1/2 z-20 w-8 h-8 items-center justify-center rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-white/70 hover:text-white hover:bg-black/60 transition-all duration-200"
                                aria-label="Scroll left"
                            >
                                <ChevronLeft size={16} />
                            </button>

                            <motion.div
                                id={`capsules-${city.id}`}
                                key={city.id + "-capsules"}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="w-full flex flex-row gap-2 md:gap-3 overflow-x-auto overflow-y-visible [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] py-2 md:px-10"
                            >
                                {city.attractions.map((spot) => {
                                    const isSelected = selectedSpot?.name === spot.name;
                                    return (
                                        <button
                                            key={spot.name}
                                            onClick={() => setSelectedSpot(isSelected ? null : spot)}
                                            className={`group relative px-3 py-2 md:px-4 md:py-2.5 rounded-2xl border backdrop-blur-md transition-all duration-300 cursor-pointer overflow-hidden shrink-0
                                                ${isSelected
                                                    ? 'bg-white/20 border-white/60 shadow-[0_0_20px_rgba(255,255,255,0.15)] scale-[1.03]'
                                                    : 'bg-white/5 border-white/20 hover:bg-white/10 hover:border-white/40 hover:-translate-y-1'
                                                }`}
                                        >
                                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-[shimmer_2s_infinite]" />

                                            <div className="flex items-center gap-2 md:gap-3 relative z-10">
                                                <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg overflow-hidden shrink-0">
                                                    <img src={spot.imageUrl} alt={spot.englishName} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                                </div>
                                                <div className="text-left pr-1 md:pr-2">
                                                    <span className={`text-xs md:text-sm font-medium block leading-tight transition-colors ${isSelected ? 'text-white' : 'text-white/80 group-hover:text-white'}`}>
                                                        {spot.englishName}
                                                    </span>
                                                    <span className={`text-[9px] md:text-[10px] tracking-wider transition-colors mt-0.5 block ${isSelected ? 'text-white/90' : 'text-white/40 group-hover:text-white/60'}`}>
                                                        {spot.name}
                                                    </span>
                                                </div>
                                            </div>
                                        </button>
                                    );
                                })}
                            </motion.div>

                            {/* Right Arrow */}
                            <button
                                onClick={() => {
                                    const el = document.getElementById(`capsules-${city.id}`);
                                    if (el) el.scrollBy({ left: 200, behavior: 'smooth' });
                                }}
                                className="hidden md:flex absolute -right-2 top-1/2 -translate-y-1/2 z-20 w-8 h-8 items-center justify-center rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-white/70 hover:text-white hover:bg-black/60 transition-all duration-200"
                                aria-label="Scroll right"
                            >
                                <ChevronRight size={16} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Keyboard / Screen Reader Instructions */}
            <div className="sr-only">
                Use the city list links on the left to switch cities. Click the attraction cards at the bottom to explore specific locations within each city.
            </div>
        </section>
    );
}
