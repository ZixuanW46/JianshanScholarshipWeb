"use client";

import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

interface FAQItem {
    question: string;
    answer: React.ReactNode;
}

const faqData: FAQItem[] = [
    {
        question: "What should I do before I apply?",
        answer: (
            <>
                We strongly encourage you to determine your visa requirements before signing up for the trip. It is the trip participants’ full responsibility to ensure they have the correct entry and stay permissions for China.<br /><br />
                We are here to provide guidance and support where possible. If you have any questions, please don't hesitate to contact us!
            </>
        )
    },
    {
        question: "How much time should I invest in preparation?",
        answer: "As a Jianshan Scholar, your main preparation will involve designing and refining the academic or cultural session you plan to share. We recommend setting aside a few hours before the trip to ensure your materials are engaging and ready to present. During the trip, simply bring your curiosity and open mind!"
    },
    {
        question: "What visa support do you provide?",
        answer: "While we cannot apply for a visa on your behalf, we provide an official letter of invitation from our partner institutions in China to support your application. We will also share a comprehensive guide mapping out the standard visa application processes for major jurisdictions."
    }
];

export default function FAQ() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const toggleAccordion = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section
            className="w-full bg-[#FDFBF7] py-24 md:py-32 relative z-10"
        >
            <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">

                {/* Header Subtitle & Title */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-[#1A1A1A]/10 pb-8"
                >
                    <div>
                        <span className="text-[#1A4D2E] font-mono text-xs tracking-[0.2em] uppercase block mb-4">
                            Inquiries
                        </span>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#1A1A1A] tracking-tighter leading-tight">
                            Frequently Asked <br /><span className="italic text-[#1A1A1A]/50">Questions</span>
                        </h2>
                    </div>
                </motion.div>

                {/* Accordion List */}
                <div className="flex flex-col">
                    {faqData.map((item, index) => {
                        const isActive = activeIndex === index;

                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
                                className="group border-b border-[#1A1A1A]/10"
                            >
                                <button
                                    onClick={() => toggleAccordion(index)}
                                    className="w-full py-8 flex items-center justify-between text-left focus:outline-none"
                                >
                                    <h3
                                        className={`text-xl md:text-2xl font-serif tracking-tight pr-8 transition-colors duration-300 ${isActive ? 'text-[#1A4D2E]' : 'text-[#1A1A1A] group-hover:text-[#1A1A1A]/70'}`}
                                    >
                                        {item.question}
                                    </h3>

                                    <div
                                        className={`flex-shrink-0 w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-300 ${isActive ? 'border-[#1A4D2E]/30 bg-[#1A4D2E]/5 text-[#1A4D2E] rotate-180' : 'border-[#1A1A1A]/20 text-[#1A1A1A] group-hover:bg-[#1A1A1A]/5 rotate-0'}`}
                                    >
                                        {isActive ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
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
                                                open: { opacity: 1, height: "auto", marginBottom: 40 },
                                                collapsed: { opacity: 0, height: 0, marginBottom: 0 }
                                            }}
                                            transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                                            className="overflow-hidden"
                                        >
                                            <div className="pr-4 md:pr-16">
                                                <p className="text-[#1A1A1A]/70 font-sans leading-relaxed text-base md:text-lg">
                                                    {item.answer}
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
