import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { UtensilsCrossed, Hotel, Train, CreditCard, Wifi, ChevronDown } from "lucide-react";

interface InfoItem {
    icon: React.ReactNode;
    title: string;
    content: string;
}

const infoItems: InfoItem[] = [
    {
        icon: <UtensilsCrossed className="w-5 h-5" />,
        title: "Food",
        content: "China's food scene is extraordinarily diverse — from Peking duck in Beijing to xiaolongbao in Shanghai. We'll guide you to the best local restaurants and street food. Vegetarian, vegan, and halal options are available — just let us know your dietary needs.",
    },
    {
        icon: <Hotel className="w-5 h-5" />,
        title: "Accommodation",
        content: "Comfortable hotel rooms (twin-sharing) in central locations near key attractions. All accommodation is pre-arranged and included in the package — just show up with your luggage.",
    },
    {
        icon: <Train className="w-5 h-5" />,
        title: "Transportation",
        content: "High-speed rail between cities (up to 350 km/h!), private coach for city tours, and local metro guidance. All in-country transport is included — you won't need to figure out logistics.",
    },
    {
        icon: <CreditCard className="w-5 h-5" />,
        title: "Payment",
        content: "China is nearly cashless — most payments are via QR code (Alipay/WeChat Pay). We'll help you set up mobile payments before the trip. Some international cards are accepted at hotels and larger establishments.",
    },
    {
        icon: <Wifi className="w-5 h-5" />,
        title: "Internet",
        content: "We'll provide guidance on VPN setup and local SIM card options so you can stay connected to your usual apps and services throughout the trip. Free Wi-Fi is available at all hotels.",
    },
];

export default function ChinaTripPracticalInfo() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    return (
        <section className="bg-[#FDFBF7] py-24 md:py-32 relative z-10">
            <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-[#1A1A1A]/10 pb-8"
                >
                    <div>
                        <span className="text-[#1A4D2E] font-mono text-xs tracking-[0.2em] uppercase block mb-4">
                            Good to know
                        </span>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#1A1A1A] tracking-tighter leading-tight">
                            Practical{" "}
                            <span className="italic text-[#1A1A1A]/50">Information</span>
                        </h2>
                    </div>
                    <p className="text-[#1A1A1A]/50 font-light text-lg max-w-md">
                        Everything you need to know about daily life during the trip.
                    </p>
                </motion.div>

                {/* Accordion Items */}
                <div className="flex flex-col">
                    {infoItems.map((item, index) => {
                        const isActive = activeIndex === index;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.5, delay: index * 0.08 }}
                                className="group border-b border-[#1A1A1A]/10"
                            >
                                <button
                                    onClick={() => setActiveIndex(isActive ? null : index)}
                                    className="w-full py-7 flex items-center gap-5 text-left focus:outline-none"
                                >
                                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors duration-300 ${isActive ? "bg-[#1A4D2E]/10 text-[#1A4D2E]" : "bg-[#0F2E18]/5 text-[#0F2E18]/60 group-hover:bg-[#0F2E18]/8"}`}>
                                        {item.icon}
                                    </div>
                                    <h3 className={`flex-1 text-xl md:text-2xl font-sans font-bold tracking-tight transition-colors duration-300 ${isActive ? "text-[#1A4D2E]" : "text-[#1A1A1A] group-hover:text-[#1A1A1A]/70"}`}>
                                        {item.title}
                                    </h3>
                                    <div className={`flex-shrink-0 w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-300 ${isActive ? "border-[#1A4D2E]/30 bg-[#1A4D2E]/5 text-[#1A4D2E] rotate-180" : "border-[#1A1A1A]/20 text-[#1A1A1A] group-hover:bg-[#1A1A1A]/5 rotate-0"}`}>
                                        <ChevronDown className="w-4 h-4" />
                                    </div>
                                </button>

                                <AnimatePresence initial={false}>
                                    {isActive && (
                                        <motion.div
                                            key="content"
                                            initial="collapsed"
                                            animate="open"
                                            exit="collapsed"
                                            variants={{
                                                open: { opacity: 1, height: "auto", marginBottom: 32 },
                                                collapsed: { opacity: 0, height: 0, marginBottom: 0 }
                                            }}
                                            transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                                            className="overflow-hidden"
                                        >
                                            <div className="pl-15 pr-4 md:pr-16 ml-[60px]">
                                                <p className="text-[#1A1A1A]/70 font-sans leading-relaxed text-base md:text-lg">
                                                    {item.content}
                                                </p>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
