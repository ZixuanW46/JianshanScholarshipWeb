"use client";

import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { GraduationCap, MessageCircle, Music } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

/* ─── Data ─── */

const pastSessions = {
    "Natural Science": [
        "How Can Einstein Possibly Be Right?",
        "Why XX And XY Don't Tell The Whole Story",
        "Dreams: Your Brain's Playground or Chaos?",
        "The Magic of Invisible Coatings",
    ],
    "Engineering & Tech": [
        "Making Games: Intro to Software Dev",
        "Manufacturing: How Are Products Made?",
        "Biomimetic Design: Nature Inspiring Tech",
        "Why Can't My Shoes Charge My Phone?",
    ],
    "Social Science & Economics": [
        "Would You Rather Own a Toilet in London or a Castle in Scotland?",
        "Shrinking Pocket Money: Where Has It Gone?",
        "How Should We Slice the Pie?",
        "If You Could Introduce Any Law, What Would It Be?",
    ],
    "Humanities & Arts": [
        "Becoming Sherlock: Crime Scenes & Sources",
        "Why Do We Remember Some Things?",
        "The True Renaissance: AI and Art",
        "Who's in Charge? Finding the Head of Words",
    ],
};

const tracks = [
    { name: "The Bones", sub: "Engineering & Science", desc: "Build the foundations — energy systems, transport algorithms, biotech solutions.", color: "#D85C3C" },
    { name: "The Pulse", sub: "Society & Economics", desc: "Design the rules — resource allocation, policy frameworks, economic models.", color: "#1A4D2E" },
    { name: "The Spirit", sub: "Humanities & Arts", desc: "Guard the soul — mental health, ethics, architecture, cultural memory.", color: "#4A6FA5" },
];

const sharingTypes = [
    { title: "College Life", desc: "What's it really like studying at Cambridge? The highs, the lows, the weird traditions. Share your honest experience of university life." },
    { title: "Society & Interests", desc: "What do you do outside the lecture hall? Whether it's robotics, rowing, theatre, or chess — show students what a \"full\" life looks like." },
    { title: "Culture & Identity", desc: "Where are you from, and what shaped you? In a room full of students who've rarely met people from other countries, your personal story is incredibly powerful." },
];

const funActivities = [
    { name: "Dodgeball", desc: "Team spirit meets friendly chaos. Prepare for the students' surprisingly accurate throws." },
    { name: "Karaoke Night", desc: "Sing your heart out. Bonus points if you let the students teach you a Chinese hit." },
    { name: "Movie Night", desc: "Outdoor screenings, curated picks, post-film debates. Think The Martian, Inside Out." },
    { name: "Board Games", desc: "Codenames, Dixit, Werewolf — discover who's secretly a strategic genius (or a terrible bluffer)." },
    { name: "Cultural Exchange", desc: "Teach them your traditions. Learn calligraphy. Swap stories about bizarre customs back home." },
];

const pillars = [
    { id: "academic", label: "Academic Exploration", icon: GraduationCap, color: "#D85C3C" },
    { id: "sharing", label: "Sharing & Mentorship", icon: MessageCircle, color: "#4A6FA5" },
    { id: "fun", label: "After Hours", icon: Music, color: "#2E8B57" },
] as const;

export default function AcademyExperience() {
    return (
        <section className="bg-[#0A0A0A] text-[#FDFBF7] py-24 md:py-32">
            <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24">

                {/* Header Section */}
                <div className="mb-24 md:mb-32">
                    <div className="flex items-center gap-6 mb-8">
                        <div className="h-[1px] w-12 bg-[#FDFBF7]/30" />
                        <span className="text-[#FDFBF7]/50 tracking-[0.2em] font-sans text-xs md:text-sm font-semibold uppercase">
                            Inside the Academy
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-6xl lg:text-7xl font-sans font-bold text-[#FDFBF7] tracking-tighter leading-[1.05] mb-6">
                        Teaching, sharing,
                        <br className="hidden md:block" />
                        <span className="font-serif italic text-[#D85C3C] tracking-tight font-normal">and living together.</span>
                    </h2>
                    <p className="text-base md:text-lg text-[#FDFBF7]/50 font-light max-w-[600px]">
                        As a Jianshan Scholar, your role spans academic exploration, personal sharing, and genuine human connection.
                    </p>
                </div>

                <Option1StickyScroll />

            </div>
        </section>
    );
}

/* ─── STICKY SCROLL IMPLEMENTATION ─── */
function Option1StickyScroll() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        let ctx = gsap.context(() => {
            pillars.forEach((p, i) => {
                ScrollTrigger.create({
                    trigger: `#sticky-panel-${p.id}`,
                    start: "top center",
                    end: "bottom center",
                    onToggle: self => {
                        if (self.isActive && self.direction === 1) setActiveIndex(i);
                        if (self.isActive && self.direction === -1) setActiveIndex(i);
                    }
                });
            });
        }, containerRef);
        return () => ctx.revert();
    }, []);

    const scrollToPanel = (id: string, e: React.MouseEvent) => {
        e.preventDefault();
        const el = document.getElementById(`sticky-panel-${id}`);
        if (el) {
            // Calculate a good offset to prevent sticky header overlap
            const y = el.getBoundingClientRect().top + window.scrollY - 100;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    };

    return (
        <div ref={containerRef} className="flex flex-col md:flex-row gap-12 lg:gap-20 relative">
            {/* Left side: Sticky Navigation (25% width) */}
            <div className="w-full md:w-3/12 lg:w-3/12 md:sticky md:top-32 h-fit flex flex-col gap-8 md:gap-10 z-20">
                {pillars.map((p, i) => {
                    const isActive = activeIndex === i;
                    const Icon = p.icon;
                    return (
                        <div
                            key={p.id}
                            onClick={(e) => scrollToPanel(p.id, e)}
                            className={`cursor-pointer transition-all duration-500 ease-out border-l-2 py-2 flex items-start gap-4 ${isActive
                                    ? 'opacity-100 pl-6 lg:pl-8'
                                    : 'opacity-40 border-white/10 hover:opacity-80'
                                }`}
                            style={{
                                borderLeftColor: isActive ? p.color : undefined,
                                transform: isActive ? 'translateX(8px)' : 'translateX(0px)'
                            }}
                        >
                            <div className="mt-1 transition-colors duration-500" style={{ color: isActive ? p.color : '#FDFBF7' }}>
                                <Icon size={24} strokeWidth={1.5} />
                            </div>
                            <div>
                                <p className="text-[10px] md:text-xs font-mono tracking-widest uppercase mb-1 text-[#FDFBF7]/50">0{i + 1}</p>
                                <h3 className="text-xl md:text-2xl font-sans font-bold tracking-tight text-[#FDFBF7]">{p.label}</h3>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Right side: Placed content (75% width) */}
            <div className="w-full md:w-9/12 lg:w-9/12 flex flex-col pb-32">
                {pillars.map((p, i) => {
                    // Determine if this panel is currently active
                    const isActive = activeIndex === i;

                    return (
                        <div
                            key={p.id}
                            id={`sticky-panel-${p.id}`}
                            // Add extra padding-bottom to separate sections greatly, except for the last one
                            className={`scroll-mt-32 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${isActive ? 'opacity-100 scale-100' : 'opacity-20 scale-[0.98]'
                                } ${i !== pillars.length - 1 ? 'pb-40 border-b border-white/5 mb-40' : ''}`}
                        >
                            {p.id === 'academic' && <AcademicPanel />}
                            {p.id === 'sharing' && <SharingPanel />}
                            {p.id === 'fun' && <FunPanel />}
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

/* ─── SHARED PANELS ─── */

function AcademicPanel() {
    return (
        <div className="space-y-16">
            <div className="max-w-[800px]">
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-sans font-bold tracking-tight leading-tight mb-6">
                    Help students see what your subject <span className="font-serif italic font-normal text-[#D85C3C]">really</span> is.
                </h3>
                <p className="text-lg md:text-xl text-[#FDFBF7]/60 leading-relaxed font-light">
                    You'll design and deliver academic sessions for Chinese high school students. But this isn't about dumping knowledge. Every session you create should aim to do three things: help students understand what a subject is actually about; show what value it brings to the real world; and spark curiosity.
                </p>
            </div>

            {/* Theme 2050 */}
            <div className="bg-[#111] rounded-3xl p-8 md:p-12 border border-white/5">
                <span className="text-[10px] tracking-[0.2em] uppercase font-bold text-[#D85C3C] mb-4 block">
                    This Year's Connective Thread
                </span>
                <h4 className="text-3xl md:text-4xl font-sans font-bold tracking-tight mb-6">
                    Project 2050: <span className="font-serif italic font-normal text-[#D85C3C]">The Future City</span>
                </h4>
                <p className="text-base md:text-lg text-[#FDFBF7]/60 leading-relaxed font-light mb-10 max-w-[800px]">
                    To ground every session in something tangible and to reveal how disciplines connect, we've designed a unifying theme: building a city for 2050. A city is the most complex system humanity has ever built. When you design your sessions, we'll ask you to anchor your content within this world.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {tracks.map((t) => (
                        <div
                            key={t.name}
                            className="rounded-2xl p-6 md:p-8 border border-white/5"
                            style={{ backgroundColor: `${t.color}08` }}
                        >
                            <div className="text-lg font-bold tracking-tight mb-2" style={{ color: t.color }}>
                                {t.name}
                            </div>
                            <div className="text-[10px] tracking-[0.15em] uppercase text-[#FDFBF7]/30 mb-4">
                                {t.sub}
                            </div>
                            <p className="text-sm text-[#FDFBF7]/50 leading-relaxed font-light">{t.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* A/B Types */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-[#111] rounded-3xl p-8 md:p-10 border border-white/5">
                    <div className="flex items-center gap-3 mb-6">
                        <span className="text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full bg-[#D85C3C]/15 text-[#D85C3C]">
                            Type A
                        </span>
                        <span className="text-sm text-[#FDFBF7]/40">3-hour sessions</span>
                    </div>
                    <h4 className="text-2xl md:text-3xl font-sans font-bold tracking-tight mb-4">
                        PBL Sessions — <span className="font-serif italic font-normal">Deep Dive</span>
                    </h4>
                    <p className="text-base text-[#FDFBF7]/60 leading-relaxed font-light mb-8">
                        Project-based learning sessions where students tackle a real challenge head-on. You guide them through using your discipline's toolkit to solve a concrete problem.
                    </p>
                    <div className="space-y-4">
                        <p className="text-[10px] tracking-[0.15em] uppercase text-[#FDFBF7]/30 font-semibold border-b border-white/10 pb-2">Examples</p>
                        {[
                            "Engineering — Design a sponge city drainage system.",
                            "Computer Science — Train an AI emotion agent.",
                            "History — Curate a lost civilisation museum.",
                        ].map((ex, i) => (
                            <p key={i} className="text-sm text-[#FDFBF7]/50 leading-relaxed font-light flex items-start gap-4">
                                <span className="text-[#D85C3C] mt-1 text-lg leading-none">&bull;</span>
                                <span>{ex}</span>
                            </p>
                        ))}
                    </div>
                </div>

                <div className="bg-[#111] rounded-3xl p-8 md:p-10 border border-white/5">
                    <div className="flex items-center gap-3 mb-6">
                        <span className="text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full bg-[#4A6FA5]/20 text-[#6B90C7]">
                            Type B
                        </span>
                        <span className="text-sm text-[#FDFBF7]/40">1-hour workshops</span>
                    </div>
                    <h4 className="text-2xl md:text-3xl font-sans font-bold tracking-tight mb-4">
                        Mind Tool Workshops — <span className="font-serif italic font-normal">Wide Lens</span>
                    </h4>
                    <p className="text-base text-[#FDFBF7]/60 leading-relaxed font-light mb-8">
                        Shorter workshops that teach transferable thinking frameworks — mental models that students can apply across any subject, any context.
                    </p>
                    <div className="space-y-4">
                        <p className="text-[10px] tracking-[0.15em] uppercase text-[#FDFBF7]/30 font-semibold border-b border-white/10 pb-2">Examples</p>
                        {[
                            "Economics — Master cost-benefit analysis.",
                            "Psychology — Apply game theory in scenarios.",
                            "Philosophy — Practice First Principles thinking.",
                        ].map((ex, i) => (
                            <p key={i} className="text-sm text-[#FDFBF7]/50 leading-relaxed font-light flex items-start gap-4">
                                <span className="text-[#4A6FA5] mt-1 text-lg leading-none">&bull;</span>
                                <span>{ex}</span>
                            </p>
                        ))}
                    </div>
                </div>
            </div>

            {/* Past Session Examples */}
            <div>
                <h4 className="text-2xl md:text-3xl font-sans font-bold tracking-tight mb-8">
                    Past Session Examples
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                    {Object.entries(pastSessions).map(([category, titles]) => (
                        <div key={category} className="bg-[#111] rounded-3xl p-8 border border-white/5 hover:border-white/10 transition-colors duration-300 relative overflow-hidden">
                            {/* Decorative accent */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-[#D85C3C]/5 rounded-bl-[100px] pointer-events-none" />

                            <div className="flex items-center gap-3 mb-6 relative z-10">
                                <div className="w-1.5 h-1.5 rounded-full bg-[#D85C3C]"></div>
                                <p className="text-[10px] tracking-[0.15em] uppercase text-[#FDFBF7]/70 font-semibold m-0">
                                    {category}
                                </p>
                            </div>

                            <div className="flex flex-col gap-3 relative z-10">
                                {titles.map((title) => (
                                    <div key={title} className="bg-white/[0.03] backdrop-blur-sm rounded-2xl px-5 py-4 border border-white/5 hover:bg-white/[0.05] transition-colors">
                                        <p className="text-[15px] text-[#FDFBF7]/80 font-medium leading-snug">
                                            {title}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

function SharingPanel() {
    return (
        <div className="space-y-12">
            <div className="max-w-[800px]">
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-sans font-bold tracking-tight leading-tight mb-6">
                    Beyond the classroom — <span className="font-serif italic font-normal text-[#4A6FA5]">share your world.</span>
                </h3>
                <p className="text-lg md:text-xl text-[#FDFBF7]/60 leading-relaxed font-light">
                    Alongside academic sessions, you'll lead informal sharing sessions that give students a window into life beyond school. These aren't lectures — they're conversations, stories, and honest reflections.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {sharingTypes.map((s) => (
                    <div
                        key={s.title}
                        className="bg-[#111] rounded-3xl p-8 md:p-10 border border-white/5 hover:border-white/10 transition-colors duration-300 relative overflow-hidden group"
                    >
                        <div className="absolute top-0 left-0 w-1 h-full bg-[#4A6FA5]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <h4 className="text-2xl font-sans font-bold tracking-tight mb-4 relative z-10">{s.title}</h4>
                        <p className="text-base text-[#FDFBF7]/50 leading-relaxed font-light relative z-10">{s.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

function FunPanel() {
    return (
        <div className="space-y-12">
            <div className="max-w-[800px]">
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-sans font-bold tracking-tight leading-tight mb-6">
                    By day, you're a scholar. By night, <span className="font-serif italic font-normal text-[#2E8B57]">you're family.</span>
                </h3>
                <p className="text-lg md:text-xl text-[#FDFBF7]/60 leading-relaxed font-light">
                    The best connections don't happen in classrooms. They happen over dodgeball, karaoke, and midnight board games. These moments build the trust and belonging that make everything else possible.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {funActivities.map((a) => (
                    <div
                        key={a.name}
                        className="group bg-[#111] rounded-3xl p-8 border border-white/5 hover:border-[#2E8B57]/30 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
                    >
                        <h4 className="text-xl font-sans font-bold tracking-tight mb-4 group-hover:text-[#2E8B57] transition-colors duration-300">
                            {a.name}
                        </h4>
                        <p className="text-base text-[#FDFBF7]/50 leading-relaxed font-light">{a.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
