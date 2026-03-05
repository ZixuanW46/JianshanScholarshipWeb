import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, X } from "lucide-react";

interface CityInfo {
    id: string;
    name: string;
    nameCn: string;
    description: string;
    highlights: string[];
    imageUrl: string;
    // SVG map position (percentage)
    x: number;
    y: number;
}

const cities: CityInfo[] = [
    {
        id: "beijing",
        name: "Beijing",
        nameCn: "北京",
        description: "The ancient capital and political heart of China. A city where 3,000 years of history meets contemporary dynamism.",
        highlights: [
            "The Forbidden City & Tiananmen Square",
            "The Great Wall (Mutianyu Section)",
            "Temple of Heaven",
            "Hutong alleys & traditional culture",
            "Peking duck experience",
        ],
        imageUrl: "https://images.unsplash.com/photo-1718248336966-70d17f2dbfd7?q=80&w=800&auto=format&fit=crop",
        x: 67,
        y: 22,
    },
    {
        id: "shanghai",
        name: "Shanghai",
        nameCn: "上海",
        description: "China's dazzling metropolis — where Art Deco meets futuristic skyscrapers and the world's best street food scene thrives.",
        highlights: [
            "The Bund waterfront promenade",
            "Yu Garden & Old City",
            "Pudong skyline & Oriental Pearl Tower",
            "Nanjing Road shopping",
            "Street food scene",
        ],
        imageUrl: "/shanghai.webp",
        x: 72,
        y: 50,
    },
    {
        id: "hangzhou",
        name: "Hangzhou",
        nameCn: "杭州",
        description: "\"Above there is heaven, below there are Hangzhou and Suzhou.\" A poetic city of lakes, tea, and natural beauty.",
        highlights: [
            "West Lake boat cruise",
            "Lingyin Temple",
            "Longjing tea village",
            "Grand Canal heritage",
            "Impression West Lake show",
        ],
        imageUrl: "/westlake.webp",
        x: 71,
        y: 55,
    },
];

export default function ChinaTripCities() {
    const [activeCity, setActiveCity] = useState<string | null>(null);
    const selectedCity = cities.find((c) => c.id === activeCity);

    return (
        <section className="bg-[#0A0A0A] text-[#FDFBF7] py-24 md:py-32 relative overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="mb-16 md:mb-24"
                >
                    <span className="text-[#FDFBF7]/40 font-mono text-xs tracking-[0.2em] uppercase block mb-4">
                        Destinations
                    </span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-sans font-bold text-[#FDFBF7] tracking-tighter leading-tight">
                        Three iconic cities,{" "}
                        <span className="font-serif italic text-[#D85C3C] font-normal">one unforgettable journey.</span>
                    </h2>
                    <p className="text-lg text-[#FDFBF7]/50 font-light mt-4 max-w-2xl">
                        Click on a city to explore what awaits you. Exact itinerary may vary by cohort.
                    </p>
                </motion.div>

                {/* Map + City Cards */}
                <div className="flex flex-col lg:flex-row gap-10 items-start">
                    {/* Interactive Map Area */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="flex-1 relative w-full aspect-[4/3] bg-[#111] rounded-3xl border border-white/10 overflow-hidden"
                    >
                        {/* Simplified China map background — gradient silhouette */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <svg viewBox="0 0 100 80" className="w-full h-full opacity-15 text-white" fill="currentColor">
                                {/* Simplified China outline */}
                                <path d="M30,10 L45,5 L60,8 L75,12 L82,18 L80,25 L78,30 L82,38 L80,45 L75,50 L78,58 L72,62 L65,60 L60,55 L55,58 L48,55 L42,50 L38,42 L35,38 L30,35 L25,30 L22,22 L25,15 Z" />
                            </svg>
                        </div>

                        {/* City Pins */}
                        {cities.map((city) => (
                            <button
                                key={city.id}
                                onClick={() => setActiveCity(activeCity === city.id ? null : city.id)}
                                className={`absolute group cursor-pointer z-10 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${activeCity === city.id ? "scale-125" : "hover:scale-110"}`}
                                style={{ left: `${city.x}%`, top: `${city.y}%` }}
                            >
                                <div className={`relative flex flex-col items-center gap-1`}>
                                    <div className={`w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all duration-300 ${activeCity === city.id
                                        ? "bg-[#D85C3C] shadow-[0_0_20px_rgba(216,92,60,0.5)]"
                                        : "bg-white/15 backdrop-blur-md border border-white/30 group-hover:bg-white/25"
                                        }`}>
                                        <MapPin size={18} className={`${activeCity === city.id ? "text-white" : "text-white/80"}`} />
                                    </div>
                                    <span className={`text-xs font-bold tracking-wide whitespace-nowrap transition-all duration-300 ${activeCity === city.id ? "text-[#D85C3C]" : "text-white/60 group-hover:text-white/90"}`}>
                                        {city.name}
                                    </span>
                                </div>
                                {/* Pulse ring */}
                                {activeCity !== city.id && (
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-white/20 animate-ping pointer-events-none" />
                                )}
                            </button>
                        ))}
                    </motion.div>

                    {/* City Detail Panel */}
                    <div className="flex-1 w-full min-h-[400px] lg:min-h-0">
                        <AnimatePresence mode="wait">
                            {selectedCity ? (
                                <motion.div
                                    key={selectedCity.id}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.4, ease: "easeOut" }}
                                    className="bg-[#111] rounded-3xl border border-white/10 overflow-hidden"
                                >
                                    {/* City Image */}
                                    <div className="relative aspect-[16/9] overflow-hidden">
                                        <img
                                            src={selectedCity.imageUrl}
                                            alt={selectedCity.name}
                                            className="w-full h-full object-cover"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#111] to-transparent" />
                                        <button
                                            onClick={() => setActiveCity(null)}
                                            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center text-white/70 hover:text-white hover:bg-black/70 transition-all"
                                        >
                                            <X size={16} />
                                        </button>
                                        <div className="absolute bottom-4 left-6">
                                            <p className="text-3xl font-serif text-white/30">{selectedCity.nameCn}</p>
                                        </div>
                                    </div>

                                    {/* City Info */}
                                    <div className="p-6 md:p-8">
                                        <h3 className="text-2xl md:text-3xl font-sans font-bold text-[#FDFBF7] tracking-tight mb-2">
                                            {selectedCity.name}
                                        </h3>
                                        <p className="text-[#FDFBF7]/50 font-light text-sm leading-relaxed mb-6">
                                            {selectedCity.description}
                                        </p>

                                        <div className="space-y-3">
                                            {selectedCity.highlights.map((h, i) => (
                                                <div key={i} className="flex items-center gap-3">
                                                    <div className="w-6 h-6 rounded-full bg-[#D85C3C]/15 flex items-center justify-center shrink-0">
                                                        <span className="text-xs font-bold text-[#D85C3C]">{i + 1}</span>
                                                    </div>
                                                    <span className="text-sm text-[#FDFBF7]/70 font-light">{h}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="placeholder"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="h-full flex items-center justify-center p-12 bg-[#111] rounded-3xl border border-white/5 min-h-[400px]"
                                >
                                    <div className="text-center">
                                        <MapPin size={32} className="text-white/20 mx-auto mb-4" />
                                        <p className="text-[#FDFBF7]/30 text-sm tracking-widest uppercase font-medium">
                                            Select a city to explore
                                        </p>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>

                {/* Mobile City Cards (fallback for small screens) */}
                <div className="lg:hidden mt-10 flex flex-col gap-4">
                    {cities.map((city) => (
                        <button
                            key={city.id}
                            onClick={() => setActiveCity(city.id)}
                            className={`text-left p-5 rounded-2xl border transition-all duration-300 ${activeCity === city.id
                                ? "border-[#D85C3C]/50 bg-[#D85C3C]/10"
                                : "border-white/10 bg-white/5 hover:border-white/20"
                                }`}
                        >
                            <div className="flex items-center gap-3">
                                <MapPin size={16} className={activeCity === city.id ? "text-[#D85C3C]" : "text-white/50"} />
                                <span className="font-bold text-lg">{city.name}</span>
                                <span className="text-white/30 font-serif">{city.nameCn}</span>
                            </div>
                        </button>
                    ))}
                </div>
            </div>
        </section>
    );
}
