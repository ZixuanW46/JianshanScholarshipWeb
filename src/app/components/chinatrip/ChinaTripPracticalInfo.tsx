import { useState, type ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    UtensilsCrossed,
    Hotel,
    Train,
    CreditCard,
    Wifi,
    ChevronDown,
    Leaf,
    Beef,
    Utensils,
    AlertCircle,
    BedDouble,
    Users,
    WalletCards,
    Smartphone,
    ShieldCheck,
} from "lucide-react";

interface DetailItem {
    label: string;
    description: string;
    icon?: ReactNode;
}

interface InfoItem {
    icon: ReactNode;
    title: string;
    summary: string;
    intro: string[];
    details?: DetailItem[];
    note?: string;
    image?: {
        src: string;
        alt: string;
        eyebrow: string;
        caption: string;
    };
}

const infoItems: InfoItem[] = [
    {
        icon: <UtensilsCrossed className="w-5 h-5" />,
        title: "Food",
        summary: "Diverse, exciting, and usually very affordable, with advance planning for dietary needs.",
        intro: [
            "Food in China is incredibly varied from city to city, and one of the joys of the trip is discovering how different each region tastes. In general, meals are also relatively affordable, so even outside the programme there is plenty of room to explore local favourites without spending much.",
            "At the same time, Chinese dining culture is often built around shared dishes and local cooking traditions, so it may not always be the most straightforward environment for highly specific dietary requirements. That said, there is no need to worry. If you tell us your needs in advance, we will do our best to plan accordingly and communicate clearly throughout the trip.",
        ],
        details: [
            {
                label: "Vegetarian / Vegan",
                description: "We accommodate vegetarian and vegan dietary requirements.",
                icon: <Leaf className="w-4 h-4" />,
            },
            {
                label: "Special Meat Preference",
                description: "We can accommodate specific meat preferences, such as avoiding pork or beef.",
                icon: <Beef className="w-4 h-4" />,
            },
            {
                label: "Halal",
                description: "Due to halal meat's limited availability in our destination cities, we cannot promise halal meat meals at all times. Halal meat is typically limited to designated halal restaurants only. If unavailable, we will provide vegetarian or vegan choices.",
                icon: <Utensils className="w-4 h-4" />,
            },
            {
                label: "Other Dietary Requirements",
                description: "If you have any other food allergies, intolerances, or dietary requirements, please let us know before you sign up. We will assess our ability to accommodate your specific requirements.",
                icon: <AlertCircle className="w-4 h-4" />,
            },
        ],
        image: {
            src: "/pratical_info/food.jpg",
            alt: "Food in China",
            eyebrow: "At the table",
            caption: "Meals are a big part of the experience, with regional variety, shared dishes, and plenty to discover across the trip.",
        },
    },
    {
        icon: <Hotel className="w-5 h-5" />,
        title: "Accommodation",
        summary: "Twin hotel rooms by default, with same-sex random allocation unless stated otherwise.",
        intro: [
            "Our default accommodation standard is a twin hotel room. Unless stated otherwise, roommates are randomly allocated with someone of the same sex, and all accommodation is arranged in advance as part of the programme.",
            "If you require special arrangements, please contact us as early as possible. While availability may vary by city and hotel, advance notice gives us the best chance of finding a workable option.",
        ],
        details: [
            {
                label: "Room Type",
                description: "Twin-sharing hotel rooms are the default across the trip.",
                icon: <BedDouble className="w-4 h-4" />,
            },
            {
                label: "Room Allocation",
                description: "Roommates are randomly assigned with another participant of the same sex unless stated otherwise.",
                icon: <Users className="w-4 h-4" />,
            },
        ],
        note: "Please flag any accessibility, medical, or rooming-related requests before departure so we can review them properly.",
        image: {
            src: "/pratical_info/hotel.jpg",
            alt: "Hotel accommodation",
            eyebrow: "Where you'll stay",
            caption: "Accommodation is pre-arranged so you can focus on the journey, with comfortable hotel stays throughout the programme.",
        },
    },
    {
        icon: <Train className="w-5 h-5" />,
        title: "Transportation",
        summary: "Fast, modern, and easy to navigate, from metro systems to 350 km/h high-speed rail.",
        intro: [
            "China's public transportation is a strong showcase of modern engineering and efficiency, from extensive underground networks in major cities to the country's high-speed rail system. The bullet trains can reach speeds of up to 350 km/h, covering the roughly 1,200 km between Shanghai and Beijing in about 4.5 hours.",
            "Within cities, taxis are widely available and generally budget-friendly. In many places, a short ride starts from around RMB 15. You can book them through apps such as Didi, find them at designated taxi stands, or hail them on the street depending on the city and location.",
        ],
        details: [
            {
                label: "High-Speed Rail",
                description: "An efficient way to move between major cities, with journeys that would take much longer by road.",
            },
            {
                label: "Urban Travel",
                description: "Metro systems are extensive and easy to use in major cities, especially with local guidance.",
            },
            {
                label: "Taxis & Didi",
                description: "Available 24/7 in most cities, with payment typically handled through Alipay or WeChat Pay.",
            },
        ],
        image: {
            src: "/pratical_info/transportation.jpg",
            alt: "Transportation in China",
            eyebrow: "On the move",
            caption: "Expect some of the smoothest intercity travel in the world, with sleek stations and fast journeys between programme stops.",
        },
    },
    {
        icon: <CreditCard className="w-5 h-5" />,
        title: "Payment",
        summary: "China is largely cashless, with Alipay and WeChat Pay handling most day-to-day spending.",
        intro: [
            "China has largely transitioned into a cashless society, and locals overwhelmingly use digital payment tools such as Alipay and WeChat Pay. Cash is still accepted in principle, but in everyday life it is much less common than mobile payment.",
            "The good news is that these platforms have become much easier for foreign visitors to use, including support for linking international bank cards. We will share clear setup guidance before departure so you can arrive ready to pay smoothly.",
        ],
        details: [
            {
                label: "What to Use",
                description: "Alipay and WeChat Pay are the main payment tools you should expect to rely on day to day.",
                icon: <WalletCards className="w-4 h-4" />,
            },
            {
                label: "Visitor Setup",
                description: "International bank cards can usually be linked ahead of time for convenient QR-code payments.",
                icon: <Smartphone className="w-4 h-4" />,
            },
        ],
        note: "Bringing a small amount of cash can still be useful as a backup, but most purchases will be easier by phone.",
        image: {
            src: "/pratical_info/payment.png",
            alt: "Digital payment in China",
            eyebrow: "Cashless by default",
            caption: "QR-code payments are part of everyday life, from taxis and cafes to convenience stores and attractions.",
        },
    },
    {
        icon: <Wifi className="w-5 h-5" />,
        title: "Internet",
        summary: "Some foreign apps are restricted on local Wi-Fi, but access can often be restored with an eSIM or VPN.",
        intro: [
            "Access to certain foreign websites and apps, including services such as WhatsApp and Google, is restricted on local Wi-Fi networks in China. This can be surprising if it is your first visit, but it is also a very normal part of travel planning for international visitors.",
            "In many cases, access can be regained through an eSIM or VPN solution. We will share more detailed guidance closer to departure so you can choose the option that best matches your phone setup and travel habits.",
        ],
        details: [
            {
                label: "Local Wi-Fi",
                description: "Hotel and venue Wi-Fi may not provide normal access to all foreign platforms and apps.",
                icon: <Wifi className="w-4 h-4" />,
            },
            {
                label: "Staying Connected",
                description: "An eSIM or VPN can often help restore access to the services you normally use.",
                icon: <ShieldCheck className="w-4 h-4" />,
            },
        ],
        image: {
            src: "/pratical_info/internet.jpg",
            alt: "Internet access in China",
            eyebrow: "Stay connected",
            caption: "A little preparation goes a long way when it comes to access, roaming, and the apps you rely on most.",
        },
    },
];

export default function ChinaTripPracticalInfo() {
    const [activeIndex, setActiveIndex] = useState<number | null>(0);

    return (
        <section className="bg-[#FDFBF7] py-24 md:py-32 relative z-10">
            <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24">
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
                            Practical <span className="italic text-[#1A1A1A]/50">Information</span>
                        </h2>
                    </div>
                    <p className="text-[#1A1A1A]/50 font-light text-lg max-w-md">
                        Everyday logistics, expectations, and useful context before you travel.
                    </p>
                </motion.div>

                <div className="flex flex-col">
                    {infoItems.map((item, index) => {
                        const isActive = activeIndex === index;

                        return (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.5, delay: index * 0.08 }}
                                className="group border-b border-[#1A1A1A]/10"
                            >
                                <button
                                    onClick={() => setActiveIndex(isActive ? null : index)}
                                    className="w-full py-7 flex items-start gap-5 text-left focus:outline-none"
                                >
                                    <div
                                        className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors duration-300 ${
                                            isActive
                                                ? "bg-[#1A4D2E]/10 text-[#1A4D2E]"
                                                : "bg-[#0F2E18]/5 text-[#0F2E18]/60 group-hover:bg-[#0F2E18]/8"
                                        }`}
                                    >
                                        {item.icon}
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <h3
                                            className={`text-xl md:text-2xl font-sans font-bold tracking-tight transition-colors duration-300 ${
                                                isActive
                                                    ? "text-[#1A4D2E]"
                                                    : "text-[#1A1A1A] group-hover:text-[#1A1A1A]/70"
                                            }`}
                                        >
                                            {item.title}
                                        </h3>
                                        <p className="mt-2 max-w-3xl text-sm md:text-base text-[#1A1A1A]/55 leading-relaxed">
                                            {item.summary}
                                        </p>
                                    </div>
                                    <div
                                        className={`mt-1 flex-shrink-0 w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-300 ${
                                            isActive
                                                ? "border-[#1A4D2E]/30 bg-[#1A4D2E]/5 text-[#1A4D2E] rotate-180"
                                                : "border-[#1A1A1A]/20 text-[#1A1A1A] group-hover:bg-[#1A1A1A]/5 rotate-0"
                                        }`}
                                    >
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
                                                collapsed: { opacity: 0, height: 0, marginBottom: 0 },
                                            }}
                                            transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                                            className="overflow-hidden"
                                        >
                                            <div className="ml-[60px] pr-4 md:pr-16 pb-1">
                                                <div className="rounded-[28px] border border-[#1A1A1A]/10 bg-white/70 backdrop-blur-sm overflow-hidden">
                                                    <div className={`grid gap-0 ${item.image ? "lg:grid-cols-[minmax(0,1.25fr)_360px]" : "grid-cols-1"}`}>
                                                        <div className="p-6 md:p-8 lg:p-10">
                                                            <div className="space-y-4">
                                                                {item.intro.map((paragraph) => (
                                                                    <p
                                                                        key={paragraph}
                                                                        className="text-[#1A1A1A]/75 font-sans leading-relaxed text-base md:text-lg"
                                                                    >
                                                                        {paragraph}
                                                                    </p>
                                                                ))}
                                                            </div>

                                                            {item.details && (
                                                                <div className="mt-8 grid gap-3 md:grid-cols-2">
                                                                    {item.details.map((detail) => (
                                                                        <div
                                                                            key={detail.label}
                                                                            className="rounded-2xl border border-[#1A1A1A]/10 bg-[#F7F2E8] p-4 md:p-5"
                                                                        >
                                                                            <div className="flex items-center gap-2 text-[#1A4D2E] mb-2">
                                                                                {detail.icon && (
                                                                                    <span className="shrink-0">
                                                                                        {detail.icon}
                                                                                    </span>
                                                                                )}
                                                                                <h4 className="text-sm md:text-base font-semibold tracking-tight text-[#1A1A1A]">
                                                                                    {detail.label}
                                                                                </h4>
                                                                            </div>
                                                                            <p className="text-sm md:text-[15px] leading-relaxed text-[#1A1A1A]/70">
                                                                                {detail.description}
                                                                            </p>
                                                                        </div>
                                                                    ))}
                                                                </div>
                                                            )}

                                                            {item.note && (
                                                                <div className="mt-8 rounded-2xl border border-dashed border-[#1A4D2E]/25 bg-[#1A4D2E]/[0.04] px-4 py-4 md:px-5">
                                                                    <p className="text-sm md:text-[15px] leading-relaxed text-[#1A1A1A]/70">
                                                                        <span className="font-semibold text-[#1A4D2E]">Helpful note:</span>{" "}
                                                                        {item.note}
                                                                    </p>
                                                                </div>
                                                            )}
                                                        </div>

                                                        {item.image && (
                                                            <div className="relative min-h-[260px] lg:min-h-full border-t lg:border-t-0 lg:border-l border-[#1A1A1A]/10 bg-[#EFE7D8]">
                                                                <img
                                                                    src={item.image.src}
                                                                    alt={item.image.alt}
                                                                    className="absolute inset-0 w-full h-full object-cover"
                                                                />
                                                                <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/72 via-[#111111]/18 to-transparent" />
                                                                <div className="absolute left-0 right-0 bottom-0 p-6 md:p-8 text-white">
                                                                    <span className="block text-[11px] tracking-[0.22em] uppercase text-white/75 mb-3">
                                                                        {item.image.eyebrow}
                                                                    </span>
                                                                    <p className="text-sm md:text-base leading-relaxed text-white/90 max-w-sm">
                                                                        {item.image.caption}
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
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
