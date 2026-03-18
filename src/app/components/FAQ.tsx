"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

interface FAQItem {
    question: string;
    answer: React.ReactNode;
}

interface FAQSection {
    title: string;
    items: FAQItem[];
}

interface FAQProps {
    variant?: "home" | "trip";
}

const homeFaqSections: FAQSection[] = [
    {
        title: "About the Programme",
        items: [
            {
                question: "What is the Jianshan Scholarship?",
                answer: (
                    <>
                        The Jianshan Scholarship is a fully funded cultural and academic exchange programme run by CamCAPY society in partnership with Jianshan Academy and affiliated partner schools in China. Selected scholars are invited to design and lead teaching or cultural sessions at Jianshan Academy, and to join a guided trip across China to explore the country's history, culture, and people. Selected scholars will participate the Capy China Trip with the full package fee waived.
                        <br />
                        <br />
                        During the whole trip, the group will be accompanied by [number of programme leaders to be confirmed] programme leader. For the China trip, the group will also be accompanied by a professional guide during the tours.
                    </>
                ),
            },
            {
                question: "Is this programme run every year?",
                answer: "Yes, the Jianshan Scholarship is offered annually. Application timelines and trip dates may vary each year, so we recommend checking the website regularly or following our updates for the latest information.",
            },
            {
                question: "How many scholars are selected each year?",
                answer: "We select a small cohort of scholars each cycle to ensure a high-quality and intimate experience for everyone. The exact number may vary depending on the year. For the 2026 summer cohort, we will be welcoming one group of 14 scholars.",
            },
        ],
    },
    {
        title: "Eligibility and Application Process",
        items: [
            {
                question: "Who is eligible to apply?",
                answer: "Applicants must be current students at the University of Cambridge with a valid CRSiD email address at the time of application.",
            },
            {
                question: "Do I need to be studying or working in a particular subject area?",
                answer: "No specific subject is required. In fact, we actively seek scholars from a wide range of disciplines, as subject diversity is essential to the programme's design. That said, we aim to achieve a balance of subjects across the cohort, so the competitiveness of an application may vary depending on the mix of applicants in a given cycle.",
            },
            {
                question: "What preparation is needed for the video interview?",
                answer: "The video interview is an opportunity for us to understand your communication style and the passion behind your application. If you proceed to the 2nd round, you will be invited to submit a short 1-3 minute video. No professional editing or formal presentation is required. The goal is to see how you articulate your ideas and to gauge the personal warmth and energy you would bring to the Jianshan community.",
            },
            {
                question: "Can I apply as part of a pair or small group?",
                answer: "The Jianshan Scholarship is an individual programme. So each application is considered independently, and scholars are expected to design and deliver their own individual teaching or cultural session. That said, once the cohort is confirmed, there will be plenty of opportunity to collaborate, share ideas, and support one another throughout both the Jianshan Academy and the China Trip.",
            },
            {
                question: "What do I need to do once I get an offer?",
                answer: "Detailed information will be provided in your offer letter if your application is successful. Please note that a deposit of £350 is required within the timeframe specified in your letter to secure your spot. This deposit is held as a commitment to the programme and will be fully refunded to you upon the successful completion of the trip.",
            },
            {
                question: "Is it possible to withdraw after accepting the offer?",
                answer: "Please understand that logistical arrangements are made immediately after the cohort is confirmed, and withdrawal from the programme creates significant coordination challenges for our partners. For this reason, we are unable to offer a refund of the deposit once you have confirmed your participation. We encourage you to consider your commitment thoroughly before accepting.",
            },
            {
                question: "Is there a waitlist?",
                answer: "If you are placed on the waitlist, it means your application was of a high standard, but we were unable to offer a spot in the initial round. You will be contacted if a place becomes available due to a withdrawal, and we will also notify all waitlisted applicants once the scholarship spots are fully confirmed.",
            },
            {
                question: "Who should I contact if I have more questions after being accepted?",
                answer: "Once you have accepted your offer, you will be added to a WhatsApp group where you can reach the programme team and your fellow scholars. You can also contact us via Instagram or email at any time.",
            },
        ],
    },
    {
        title: "The Scholarship and What is Covered",
        items: [
            {
                question: "What does the scholarship cover?",
                answer: "The scholarship covers two things: costs associated with your participation in the Jianshan Academy teaching programme, and the full cost of the China Trip package (valued at £1,499). This includes accommodation, in-country transport, meals, and group activities as outlined in the trip itinerary. Any extra purchases, e.g. shopping, transport during free days, are NOT included.",
            },
            {
                question: "Is the scholarship paid in cash?",
                answer: "No. The scholarship is not paid as a cash sum. Instead, your costs are covered directly, meaning you will not be charged for Capy China Trip package fee.",
            },
            {
                question: "Are flights included?",
                answer: "The Capy China Trip package covers all domestic travel, though international transport to and from China is not included. You are responsible for booking and funding your own flights. To ensure a seamless start to your journey, we will coordinate group pick-ups from designated airports within specific time windows. Detailed arrival guidance and flight options will be shared afterwards.",
            },
            {
                question: "Is travel insurance included?",
                answer: "Travel insurance is not included in the package. All participants are required to arrange their own travel insurance prior to departure. Please refer to the \"What's Included\" section of our website for full details of what is and is not covered.",
            },
        ],
    },
    {
        title: "About Jianshan Academy",
        items: [
            {
                question: "What age group are the students I will be teaching?",
                answer: "You will be teaching international high school students aged mostly between 14 and 18 years old.",
            },
            {
                question: "What language should my session be delivered in?",
                answer: "All sessions are delivered in English. You are not expected to have any knowledge of Chinese, and no language preparation is required on your part.",
            },
            {
                question: "What is the daily schedule at Jianshan Academy?",
                answer: "Teaching sessions begin at 9:00 am and run through to the afternoon. On certain days, there are also after-hours activities following dinner, which conclude no later than 9:00 pm.",
            },
            {
                question: "How long does the academy last?",
                answer: "The Jianshan academy lasts 7 days in total.",
            },
            {
                question: "How much preparation is expected?",
                answer: "After receiving your offer and confirming your participation, we will provide detailed guidance to support your session design. We recommend setting aside a few hours before the journey to structure your materials; the goal is to create an engaging experience that inspires through your unique perspective rather than a professional teaching package. To ensure the quality and impact of every academic session, the committee will review your materials to provide support and alignment if needed.",
            },
            {
                question: "Will supporting materials and equipment be provided?",
                answer: "If you believe specific materials or equipment would meaningfully improve your session, please get in touch with us in advance and we will do our best to accommodate your request.",
            },
            {
                question: "Do I need a teaching qualification?",
                answer: "No formal teaching qualification or certification is required. All participants will be asked to sign a code of conduct prior to joining the trip, which sets out expectations for appropriate behaviour when working with young people.",
            },
            {
                question: "Can I propose a session jointly with another scholar?",
                answer: "To ensure a diverse and balanced academic landscape, each scholar is expected to design and lead two independent academic sessions. However, once the cohort is finalized, scholars are welcome to explore collaborative elements specifically for the sharing sessions, of subjects including colleges, university societies, and culture.",
            },
            {
                question: "Is there a dress code?",
                answer: "For your teaching sessions at Jianshan Academy, we ask that scholars dress in appropriate attire out of respect for the school environment. For the China Trip, casual and comfortable clothing is perfectly appropriate, though we recommend dressing modestly when visiting temples, heritage sites, or other cultural landmarks. Specific guidance will be shared in your pre-departure information pack.",
            },
            {
                question: "Will my session be observed or assessed?",
                answer: "Sessions may be observed by school staff, Jianshan team members, or fellow scholars who are interested in your topic. There is no formal assessment, but we do expect scholars to deliver their sessions with care and to adapt and improve their approach over the course of their time at Jianshan Academy.",
            },
        ],
    },
    {
        title: "About Capy China Trip",
        items: [
            {
                question: "What does the China Trip itinerary include?",
                answer: "The trip takes you across multiple cities in China, combining cultural highlights, historical landmarks, and authentic local experiences. All activities are carefully planned and are a core part of the programme. Full details of the itinerary can be found on the China Trip page of our website.",
            },
            {
                question: "Do I need to plan anything myself for the trip?",
                answer: "Aside from our curated experiences, we have included one free day in both Shanghai and Beijing. Pre-planning and making necessary bookings will help you make the most of your time. You can choose to explore individually, join other groups, or plan as a group with your fellow trip members. We recommend checking the main itinerary in each city to avoid redundancies. While you explore in your own way, we always have your back.",
            },
            {
                question: "What type of accommodation is provided?",
                answer: "You will stay in comfortable hotel rooms in central locations close to key attractions. You will normally need to share the room with another trip member. All accommodation is pre-arranged and included in the package.",
            },
            {
                question: "How will we travel between cities and around each location?",
                answer: "Travel between cities is by private coach or high-speed rail (reaching speeds of up to 350 km/h). City tours use a private coach, and we will also provide guidance for using local metro systems where relevant. Full details are available in the \"Practical Information\" section of the website.",
            },
            {
                question: "Do I have to follow the group itinerary at all times?",
                answer: "We strongly encourage all scholars to follow the planned itinerary. Every activity has been thoughtfully selected to offer an authentic and memorable experience of China, and the group dynamic is an important part of what makes the programme special. Sufficient free time is built into the schedule for personal exploration. If you have an exceptional circumstance, you may raise it with the trip leader during the trip. Please note that the programme team cannot be held responsible for anything that occurs outside of group activities.",
            },
            {
                question: "Can I extend my stay in China before or after the programme?",
                answer: "This will depend on your visa status. Please note that we are unable to provide logistical support for any travel beyond the China Trip itinerary.",
            },
            {
                question: "Should I bring cash with me, and are bank cards widely accepted?",
                answer: "We recommend bringing a small amount of local cash for incidentals. However, digital payment is the standard across China. Setting up Alipay or WeChat Pay with a linked international bank card is essential and will work smoothly in most situations. We will provide detailed guidance on this before departure.",
            },
            {
                question: "What is the food like, and can dietary requirements be accommodated?",
                answer: "Chinese cuisine varies wonderfully across regions, and you can expect a diverse and exciting range of meals throughout the trip. Dietary requirements such as vegetarian, vegan, halal, and certain specific allergies can be accommodated. We kindly ask that you state your dietary requirements clearly in your application so that we can make the necessary arrangements in advance.",
            },
        ],
    },
    {
        title: "Practical Matters",
        items: [
            {
                question: "What should I do before applying?",
                answer: "We strongly encourage you to confirm your visa requirements before signing up. It is each participant's full responsibility to ensure they have the correct entry and stay permissions for China. If you have any questions, please do not hesitate to contact us.",
            },
            {
                question: "Will I get support for visa application if needed?",
                answer: "While many may qualify for visa-free entry, we provide comprehensive support for those who require a formal visa to enter China. We will provide an official letter of invitation from our partner institutions in China to support your application. Please note that it remains your personal responsibility to manage the application process and ensure all documents meet the requirements to secure your entry permissions.",
            },
            {
                question: "Do I need a visa to enter China?",
                answer: (
                    <>
                        China has expanded its visa-free entry policies significantly in recent years, and scholars from a number of countries may be able to enter without a visa. Countries currently included in China's visa-free arrangements include the United Kingdom, France, Germany, Italy, Spain, the Netherlands, Switzerland, Ireland, Hungary, Austria, Belgium, and several others. Nationals of these countries may enter China for a limited period without prior visa application, though the exact conditions and permitted length of stay vary by country.
                        <br />
                        <br />
                        Regardless of your nationality, we strongly recommend that you read the current visa-free policy carefully and confirm whether it applies to your specific situation, as policies can change. If you are not eligible for visa-free entry, please refer to our guidance on the standard visa application process and the support we provide.
                    </>
                ),
            },
            {
                question: "Do I need any vaccinations to enter China?",
                answer: "At the time of writing, China does not require proof of vaccination for entry, but requirements can change. We recommend checking the latest guidance from your national health authority and the Chinese embassy or consulate in your country before travelling.",
            },
            {
                question: "Will I be able to access my usual apps and social media in China?",
                answer: "Many Western applications, including Google services and social media platforms, are restricted in mainland China. However, VPN services and international eSIM cards function properly and can give you access to your usual apps.",
            },
        ],
    },
];

const tripFaqSections: FAQSection[] = [
    {
        title: "China Trip FAQ",
        items: [
            {
                question: "What does the China Trip itinerary include?",
                answer: "The trip takes you across multiple cities in China, combining cultural highlights, historical landmarks, and authentic local experiences. All activities are carefully planned and are a core part of the programme. Full details of the itinerary can be found on the China Trip page of our website.",
            },
            {
                question: "Do I need to plan anything myself for the trip?",
                answer: "Aside from our curated experiences, we have included one free day in both Shanghai and Beijing. Pre-planning and making necessary bookings will help you make the most of your time. You can choose to explore individually, join other groups, or plan as a group with your fellow trip members. We recommend checking the main itinerary in each city to avoid redundancies. While you explore in your own way, we always have your back.",
            },
            {
                question: "Are flights included?",
                answer: "The Capy China Trip package covers all domestic travel, though international transport to and from China is not included. You are responsible for booking and funding your own flights. To ensure a seamless start to your journey, we will coordinate group pick-ups from designated airports within specific time windows. Detailed arrival guidance and flight options will be shared afterwards.",
            },
            {
                question: "Is travel insurance included?",
                answer: "Travel insurance is not included in the package. All participants are advised to arrange their own travel insurance prior to departure.",
            },
            {
                question: "What should I do before signing up?",
                answer: "We strongly encourage you to confirm your visa requirements before signing up. It is each participant's full responsibility to ensure they have the correct entry and stay permissions for China. If you have any questions, please do not hesitate to contact us.",
            },
            {
                question: "Will I get support for visa application if needed?",
                answer: "While many may qualify for visa-free entry, we provide comprehensive support for those who require a formal visa to enter China. We will supply the necessary documentation, including your confirmed hotel bookings and itinerary. Please note that it remains your personal responsibility to manage the application process and ensure all documents meet the requirements to secure your entry permissions.",
            },
            {
                question: "What type of accommodation is provided?",
                answer: "You will stay in comfortable hotel rooms in central locations close to key attractions. You will normally need to share the room with another trip member. All accommodation is pre-arranged and included in the package.",
            },
            {
                question: "How will we travel between cities and around each location?",
                answer: "Travel between cities is by private coach or high-speed rail (reaching speeds of up to 350 km/h). City tours use a private coach, and we will also provide guidance for using local metro systems where relevant. Full details are available in the \"Practical Information\" section of the website.",
            },
            {
                question: "Do I have to follow the group itinerary at all times?",
                answer: "We strongly encourage all scholars to follow the planned itinerary. Every activity has been thoughtfully selected to offer an authentic and memorable experience of China, and the group dynamic is an important part of what makes the programme special. Sufficient free time is built into the schedule for personal exploration. If you have an exceptional circumstance, you may raise it with the trip leader during the trip. Please note that the programme team cannot be held responsible for anything that occurs outside of group activities.",
            },
            {
                question: "Can I extend my stay in China before or after the programme?",
                answer: "This will depend on your visa status. Please note that we are unable to provide logistical support for any travel beyond the China Trip itinerary.",
            },
            {
                question: "Should I bring cash with me, and are bank cards widely accepted?",
                answer: "We recommend bringing a small amount of local cash for incidentals. However, digital payment is the standard across China. Setting up Alipay or WeChat Pay with a linked international bank card is essential and will work smoothly in most situations. We will provide detailed guidance on this before departure.",
            },
            {
                question: "What is the food like, and can dietary requirements be accommodated?",
                answer: "Chinese cuisine varies wonderfully across regions, and you can expect a diverse and exciting range of meals throughout the trip. Dietary requirements such as vegetarian, vegan, halal, and certain specific allergies can be accommodated. We kindly ask that you state your dietary requirements clearly in your application so that we can make the necessary arrangements in advance.",
            },
        ],
    },
];

export default function FAQ({ variant = "home" }: FAQProps) {
    const [expandedSections, setExpandedSections] = useState<string[]>([]);
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const sections = variant === "trip" ? tripFaqSections : homeFaqSections;
    const isFlatTripFaq = variant === "trip";
    const sectionId = variant === "home" ? "faq" : undefined;

    let itemOffset = 0;

    const toggleSection = (title: string, baseIndex: number, itemCount: number) => {
        const isExpanded = expandedSections.includes(title);

        setExpandedSections((current) =>
            isExpanded ? current.filter((sectionTitle) => sectionTitle !== title) : [...current, title]
        );

        if (isExpanded && activeIndex !== null && activeIndex >= baseIndex && activeIndex < baseIndex + itemCount) {
            setActiveIndex(null);
        }
    };

    return (
        <section id={sectionId} className="w-full scroll-mt-28 bg-[#FDFBF7] py-24 md:py-32 relative z-10">
            <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24 relative z-10">
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
                            Frequently Asked <br />
                            <span className="italic text-[#1A1A1A]/50">Questions</span>
                        </h2>
                    </div>
                </motion.div>

                <div className="flex flex-col gap-14 md:gap-16">
                    {sections.map((section, sectionIndex) => {
                        const baseIndex = itemOffset;
                        itemOffset += section.items.length;

                        if (isFlatTripFaq) {
                            return (
                                <div key={section.title} className="flex flex-col">
                                    {section.items.map((item, itemIndex) => {
                                        const absoluteIndex = baseIndex + itemIndex;
                                        const isActive = activeIndex === absoluteIndex;

                                        return (
                                            <motion.div
                                                key={item.question}
                                                initial={{ opacity: 0, y: 20 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                viewport={{ once: true, margin: "-50px" }}
                                                transition={{ duration: 0.5, delay: itemIndex * 0.03, ease: "easeOut" }}
                                                className="group border-b border-[#1A1A1A]/10"
                                            >
                                                <button
                                                    onClick={() => setActiveIndex(isActive ? null : absoluteIndex)}
                                                    className="w-full py-8 flex items-center justify-between text-left focus:outline-none"
                                                >
                                                    <h4
                                                        className={`text-xl md:text-2xl font-serif tracking-tight pr-8 transition-colors duration-300 ${isActive ? "text-[#1A4D2E]" : "text-[#1A1A1A] group-hover:text-[#1A1A1A]/70"}`}
                                                    >
                                                        {item.question}
                                                    </h4>

                                                    <div
                                                        className={`flex-shrink-0 w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-300 ${isActive ? "border-[#1A4D2E]/30 bg-[#1A4D2E]/5 text-[#1A4D2E] rotate-180" : "border-[#1A1A1A]/20 text-[#1A1A1A] group-hover:bg-[#1A1A1A]/5 rotate-0"}`}
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
                                                                collapsed: { opacity: 0, height: 0, marginBottom: 0 },
                                                            }}
                                                            transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                                                            className="overflow-hidden"
                                                        >
                                                            <div className="pr-4 md:pr-16">
                                                                <div className="text-[#1A1A1A]/70 font-sans leading-relaxed text-base md:text-lg">
                                                                    {item.answer}
                                                                </div>
                                                            </div>
                                                        </motion.div>
                                                    )}
                                                </AnimatePresence>
                                            </motion.div>
                                        );
                                    })}
                                </div>
                            );
                        }

                        return (
                            <div key={section.title}>
                                <motion.button
                                    type="button"
                                    onClick={() => toggleSection(section.title, baseIndex, section.items.length)}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{ duration: 0.5, delay: sectionIndex * 0.05, ease: "easeOut" }}
                                    className="mb-5 md:mb-6 w-full flex items-center justify-between gap-6 text-left"
                                >
                                    <h3 className="text-2xl md:text-3xl font-serif tracking-tight text-[#1A4D2E]">
                                        {section.title}
                                    </h3>
                                    <div
                                        className={`flex-shrink-0 w-9 h-9 rounded-full border flex items-center justify-center transition-all duration-300 ${expandedSections.includes(section.title) ? "border-[#1A4D2E]/30 bg-[#1A4D2E]/5 text-[#1A4D2E] rotate-180" : "border-[#1A1A1A]/20 text-[#1A1A1A]"}`}
                                    >
                                        {expandedSections.includes(section.title) ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                                    </div>
                                </motion.button>

                                <AnimatePresence initial={false}>
                                    {expandedSections.includes(section.title) && (
                                        <motion.div
                                            initial="collapsed"
                                            animate="open"
                                            exit="collapsed"
                                            variants={{
                                                open: { opacity: 1, height: "auto" },
                                                collapsed: { opacity: 0, height: 0 },
                                            }}
                                            transition={{ duration: 0.35, ease: [0.04, 0.62, 0.23, 0.98] }}
                                            className="overflow-hidden"
                                        >
                                            <div className="flex flex-col border-t border-[#1A1A1A]/10">
                                                {section.items.map((item, itemIndex) => {
                                                    const absoluteIndex = baseIndex + itemIndex;
                                                    const isActive = activeIndex === absoluteIndex;

                                                    return (
                                                        <motion.div
                                                            key={item.question}
                                                            initial={{ opacity: 0, y: 20 }}
                                                            animate={{ opacity: 1, y: 0 }}
                                                            exit={{ opacity: 0, y: -12 }}
                                                            transition={{ duration: 0.3, delay: itemIndex * 0.03, ease: "easeOut" }}
                                                            className="group border-b border-[#1A1A1A]/10"
                                                        >
                                                            <button
                                                                onClick={() => setActiveIndex(isActive ? null : absoluteIndex)}
                                                                className="w-full py-8 flex items-center justify-between text-left focus:outline-none"
                                                            >
                                                                <h4
                                                                    className={`text-xl md:text-2xl font-serif tracking-tight pr-8 transition-colors duration-300 ${isActive ? "text-[#1A4D2E]" : "text-[#1A1A1A] group-hover:text-[#1A1A1A]/70"}`}
                                                                >
                                                                    {item.question}
                                                                </h4>

                                                                <div
                                                                    className={`flex-shrink-0 w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-300 ${isActive ? "border-[#1A4D2E]/30 bg-[#1A4D2E]/5 text-[#1A4D2E] rotate-180" : "border-[#1A1A1A]/20 text-[#1A1A1A] group-hover:bg-[#1A1A1A]/5 rotate-0"}`}
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
                                                                            collapsed: { opacity: 0, height: 0, marginBottom: 0 },
                                                                        }}
                                                                        transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                                                                        className="overflow-hidden"
                                                                    >
                                                                        <div className="pr-4 md:pr-16">
                                                                            <div className="text-[#1A1A1A]/70 font-sans leading-relaxed text-base md:text-lg">
                                                                                {item.answer}
                                                                            </div>
                                                                        </div>
                                                                    </motion.div>
                                                                )}
                                                            </AnimatePresence>
                                                        </motion.div>
                                                    );
                                                })}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
