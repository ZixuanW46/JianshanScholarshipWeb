import { motion } from "framer-motion";
import { Landmark, Mountain, Cpu } from "lucide-react";

interface HighlightExample {
    name: string;
    description: string;
}

interface HighlightPillar {
    icon: React.ReactNode;
    label: string;
    title: string;
    subtitle: string;
    examples: HighlightExample[];
    imageUrl: string;
    imageAlt: string;
}

const pillars: HighlightPillar[] = [
    {
        icon: <Landmark className="w-5 h-5" />,
        label: "History & Culture",
        title: "The Echo of the Ancient",
        subtitle: "Walk through millennia of living history.",
        imageUrl: "https://images.unsplash.com/photo-1718248336966-70d17f2dbfd7?q=80&w=1080&auto=format&fit=crop",
        imageAlt: "The Forbidden City, Beijing",
        examples: [
            { name: "The Forbidden City", description: "Standing inside the heart of 600 years of imperial rule." },
            { name: "The Great Wall", description: "Trek one of the world's most iconic UNESCO heritage sites." },
            { name: "Lingyin Temple", description: "A 1,700-year-old Buddhist monastery nestled in Hangzhou's misty hills." },
        ],
    },
    {
        icon: <Mountain className="w-5 h-5" />,
        label: "Nature & Landscapes",
        title: "Breathtaking Landscapes",
        subtitle: "From serene lakesides to misty mountain ranges — nature's masterpiece.",
        imageUrl: "/westlake.webp",
        imageAlt: "West Lake, Hangzhou",
        examples: [
            { name: "West Lake, Hangzhou", description: "Poetic landscapes that inspired artists for a thousand years." },
            { name: "The Bund at Sunset", description: "Where old-world charm meets futuristic grandeur." },
            { name: "Longjing Tea Plantations", description: "Walk through emerald-green hillside tea fields." },
        ],
    },
    {
        icon: <Cpu className="w-5 h-5" />,
        label: "Technology & Modern Life",
        title: "The Real-life Cyberpunk",
        subtitle: "Experience a society running on cutting-edge tech and boundless energy.",
        imageUrl: "/shanghai.webp",
        imageAlt: "Shanghai skyline at night",
        examples: [
            { name: "Cashless Society", description: "QR payments, AI-powered stores, and smart cities everywhere." },
            { name: "Shanghai's Neon Skyline", description: "Pudong's futuristic towers lighting up the night." },
            { name: "High-speed Rail", description: "350 km/h trains connecting cities in hours, not days." },
        ],
    },
];

export default function ChinaTripHighlights() {
    return (
        <section id="ct-highlights" className="bg-[#FDFBF7] py-24 md:py-32 relative z-10 overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="mb-20"
                >
                    <div className="flex items-center gap-6 mb-8">
                        <div className="h-[1px] w-12 bg-[#0F2E18]/30" />
                        <span className="text-[#0F2E18]/60 tracking-[0.2em] font-sans text-xs md:text-sm font-semibold uppercase">
                            Highlights
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-sans font-bold text-[#0F2E18] tracking-tighter leading-[1.05]">
                        Three pillars.{" "}
                        <span className="font-serif italic text-[#D85C3C] font-normal">One unforgettable experience.</span>
                    </h2>
                </motion.div>

                {/* Pillars */}
                <div className="flex flex-col gap-24 md:gap-32">
                    {pillars.map((pillar, i) => (
                        <motion.div
                            key={pillar.label}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-80px" }}
                            transition={{ duration: 0.7, delay: 0.1 }}
                            className={`flex flex-col ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-10 md:gap-16 items-center`}
                        >
                            {/* Image */}
                            <div className="flex-1 w-full">
                                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                                    <img
                                        src={pillar.imageUrl}
                                        alt={pillar.imageAlt}
                                        className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />
                                </div>
                            </div>

                            {/* Text Content */}
                            <div className="flex-1 w-full">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-9 h-9 rounded-lg bg-[#0F2E18]/8 flex items-center justify-center text-[#0F2E18]">
                                        {pillar.icon}
                                    </div>
                                    <span className="text-xs tracking-[0.2em] uppercase font-semibold text-[#0F2E18]/50">
                                        {pillar.label}
                                    </span>
                                </div>

                                <h3 className="text-3xl md:text-4xl lg:text-5xl font-sans font-bold text-[#0F2E18] tracking-tight leading-[1.1] mb-3">
                                    {pillar.title}
                                </h3>
                                <p className="text-lg text-[#0F2E18]/60 font-light mb-8">
                                    {pillar.subtitle}
                                </p>

                                {/* Example Cards */}
                                <div className="flex flex-col gap-4">
                                    {pillar.examples.map((ex, j) => (
                                        <div
                                            key={j}
                                            className="group flex items-start gap-4 p-5 rounded-2xl border border-[#0F2E18]/8 hover:border-[#0F2E18]/20 hover:shadow-[0_4px_24px_rgba(0,0,0,0.05)] transition-all duration-300 bg-white/50"
                                        >
                                            <div className="w-8 h-8 rounded-full bg-[#D85C3C]/10 flex items-center justify-center shrink-0 mt-0.5">
                                                <span className="text-sm font-bold text-[#D85C3C]">{j + 1}</span>
                                            </div>
                                            <div>
                                                <h4 className="text-base font-sans font-bold text-[#0F2E18] tracking-tight mb-1 group-hover:text-[#1A4D2E] transition-colors">
                                                    {ex.name}
                                                </h4>
                                                <p className="text-sm text-[#0F2E18]/50 font-light leading-relaxed">
                                                    {ex.description}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
