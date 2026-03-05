import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
    {
        quote: "The contrast between the ancient temples in Hangzhou and the absolute futuristic feel of Shanghai was mind-blowing. Our local guides made everything effortless.",
        name: "Sarah Jenkins",
        info: "Trinity College · 2024 Participant",
    },
    {
        quote: "I thought I knew what to expect from China, but this trip completely shifted my perspective. The people we met, the food we ate, the scale of the cities... it’s an experience you can't get from a textbook.",
        name: "David Chen",
        info: "St John's College · 2024 Participant",
    },
    {
        quote: "Traveling with a crew of other Cambridge students was the best part. We were all experiencing this massive culture shock and adventure together. The community aspect is unmatched.",
        name: "Emma Williams",
        info: "King's College · 2024 Participant",
    },
];

export default function ChinaTripTestimonials() {
    return (
        <section className="bg-[#1A4D2E] py-24 md:py-32 relative z-10 overflow-hidden text-[#FDFBF7]">
            {/* Background Texture/Pattern */}
            <div className="absolute inset-0 opacity-10 pointer-events-none"
                style={{
                    backgroundImage: 'radial-gradient(circle at 2px 2px, #FDFBF7 1px, transparent 0)',
                    backgroundSize: '40px 40px'
                }}
            />

            <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24 relative z-10 border-b border-rose-900 border-opacity-0">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16 md:mb-24"
                >
                    <span className="text-[#FDFBF7]/60 font-mono text-xs tracking-[0.2em] uppercase block mb-4">
                        What they say
                    </span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-sans font-bold tracking-tighter leading-tight">
                        Don't just take <span className="font-serif italic font-normal text-[#D85C3C]">our word</span> for it.
                    </h2>
                </motion.div>

                {/* Horizontal Scrolling or Grid of Testimonials */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((t, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: i * 0.1 }}
                            className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 md:p-10 rounded-3xl flex flex-col justify-between"
                        >
                            <div>
                                <Quote className="w-10 h-10 text-[#D85C3C]/40 mb-6" />
                                <p className="text-lg md:text-xl font-serif italic text-[#FDFBF7]/90 leading-relaxed mb-8">
                                    "{t.quote}"
                                </p>
                            </div>
                            <div>
                                <h4 className="font-sans font-bold text-lg tracking-tight mb-1">{t.name}</h4>
                                <p className="text-xs font-mono tracking-widest uppercase text-[#FDFBF7]/50">{t.info}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
