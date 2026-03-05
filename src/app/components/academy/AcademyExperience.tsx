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
    { id: "academic", label: "Academic Exploration", icon: GraduationCap },
    { id: "sharing", label: "Sharing & Mentorship", icon: MessageCircle },
    { id: "fun", label: "After Hours", icon: Music },
] as const;

type PillarId = typeof pillars[number]["id"];

export default function AcademyExperience() {
    const [activePillar, setActivePillar] = useState<PillarId>("academic");
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.utils.toArray<HTMLElement>(".acad-exp-reveal").forEach((el) => {
                gsap.from(el, {
                    y: 40,
                    opacity: 0,
                    duration: 1,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: el,
                        start: "top 85%",
                        toggleActions: "play none none none",
                    },
                });
            });
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="bg-[#0A0A0A] text-[#FDFBF7] py-24 md:py-32 overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24">
                {/* Header */}
                <div className="acad-exp-reveal mb-6">
                    <div className="flex items-center gap-6 mb-8">
                        <div className="h-[1px] w-12 bg-[#FDFBF7]/30" />
                        <span className="text-[#FDFBF7]/50 tracking-[0.2em] font-sans text-xs md:text-sm font-semibold uppercase">
                            The Jianshan Academy Experience
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-6xl lg:text-7xl font-sans font-bold text-[#FDFBF7] tracking-tighter leading-[1.05] mb-4">
                        Three pillars shape every
                        <br />
                        <span className="font-serif italic text-[#D85C3C] tracking-tight font-normal">Jianshan Academy.</span>
                    </h2>
                    <p className="text-base md:text-lg text-[#FDFBF7]/50 font-light max-w-[600px]">
                        As a Jianshan Scholar, your role spans academic exploration, personal sharing, and genuine human connection.
                    </p>
                </div>

                {/* Pillar Tabs */}
                <div className="acad-exp-reveal flex flex-wrap gap-3 mb-12 mt-12">
                    {pillars.map((p) => {
                        const Icon = p.icon;
                        const isActive = activePillar === p.id;
                        return (
                            <button
                                key={p.id}
                                onClick={() => setActivePillar(p.id)}
                                className={`flex items-center gap-2.5 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer border ${isActive
                                        ? "bg-[#FDFBF7] text-[#0A0A0A] border-[#FDFBF7]"
                                        : "bg-transparent text-[#FDFBF7]/60 border-[#FDFBF7]/15 hover:border-[#FDFBF7]/40 hover:text-[#FDFBF7]/90"
                                    }`}
                            >
                                <Icon size={16} strokeWidth={1.5} />
                                {p.label}
                            </button>
                        );
                    })}
                </div>

                {/* Content Panels */}
                <div className="min-h-[600px]">
                    {activePillar === "academic" && <AcademicPanel />}
                    {activePillar === "sharing" && <SharingPanel />}
                    {activePillar === "fun" && <FunPanel />}
                </div>
            </div>
        </section>
    );
}

/* ─── Academic Panel ─── */
function AcademicPanel() {
    return (
        <div className="space-y-16 animate-[fadeIn_0.5s_ease-out]">
            {/* Intro */}
            <div className="max-w-[800px]">
                <h3 className="text-2xl md:text-3xl font-sans font-bold tracking-tight mb-4">
                    Help students see what your subject <span className="font-serif italic font-normal text-[#D85C3C]">really</span> is.
                </h3>
                <p className="text-base md:text-lg text-[#FDFBF7]/55 leading-relaxed font-light">
                    You'll design and deliver academic sessions for Chinese high school students. But this isn't about dumping knowledge. Every session you create should aim to do three things: help students understand what a subject is actually about and why anyone studies it; show what value that subject brings to the real world; and spark curiosity — help a student discover something they didn't know they cared about.
                </p>
            </div>

            {/* Theme 2026 */}
            <div className="bg-[#111] rounded-2xl p-8 md:p-10 border border-white/5">
                <span className="text-[10px] tracking-[0.2em] uppercase font-semibold text-[#FDFBF7]/40 mb-4 block">
                    This Year's Connective Thread
                </span>
                <h4 className="text-xl md:text-2xl font-sans font-bold tracking-tight mb-4">
                    Project 2050: <span className="font-serif italic font-normal">The Future City</span>
                </h4>
                <p className="text-base text-[#FDFBF7]/50 leading-relaxed font-light mb-8 max-w-[700px]">
                    To ground every session in something tangible and to reveal how disciplines connect, we've designed a unifying theme: building a city for 2050. A city is the most complex system humanity has ever built — it's engineering, economics, psychology, philosophy, art, and everything in between. When you design your sessions, we'll ask you to anchor your content within this world.
                </p>

                {/* Three Tracks */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {tracks.map((t) => (
                        <div
                            key={t.name}
                            className="rounded-xl p-6 border border-white/5"
                            style={{ backgroundColor: `${t.color}08` }}
                        >
                            <div className="text-sm font-bold tracking-tight mb-1" style={{ color: t.color }}>
                                {t.name}
                            </div>
                            <div className="text-[10px] tracking-[0.15em] uppercase text-[#FDFBF7]/30 mb-3">
                                {t.sub}
                            </div>
                            <p className="text-sm text-[#FDFBF7]/45 leading-relaxed font-light">{t.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* A/B Types */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Type A */}
                <div className="bg-[#111] rounded-2xl p-8 border border-white/5">
                    <div className="flex items-center gap-3 mb-4">
                        <span className="text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full bg-[#D85C3C]/15 text-[#D85C3C]">
                            Type A
                        </span>
                        <span className="text-sm text-[#FDFBF7]/40">3-hour sessions</span>
                    </div>
                    <h4 className="text-xl font-sans font-bold tracking-tight mb-2">
                        PBL Sessions — <span className="font-serif italic font-normal">Deep Dive</span>
                    </h4>
                    <p className="text-sm text-[#FDFBF7]/50 leading-relaxed font-light mb-6">
                        Project-based learning sessions where students tackle a real challenge head-on. You guide them through using your discipline's toolkit to solve a concrete problem within the Future City theme.
                    </p>
                    <div className="space-y-3">
                        <p className="text-xs tracking-[0.15em] uppercase text-[#FDFBF7]/30 font-semibold">Examples</p>
                        {[
                            "Engineering — Design a \"sponge city\" drainage system using fluid dynamics.",
                            "Computer Science — Train an AI emotion-recognition agent with Python.",
                            "History — Curate a \"lost civilisation museum\" from archaeological fragments.",
                        ].map((ex, i) => (
                            <p key={i} className="text-sm text-[#FDFBF7]/45 leading-relaxed pl-4 border-l border-[#D85C3C]/20">
                                {ex}
                            </p>
                        ))}
                    </div>
                </div>

                {/* Type B */}
                <div className="bg-[#111] rounded-2xl p-8 border border-white/5">
                    <div className="flex items-center gap-3 mb-4">
                        <span className="text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full bg-[#1A4D2E]/20 text-[#2E8B57]">
                            Type B
                        </span>
                        <span className="text-sm text-[#FDFBF7]/40">1-hour workshops</span>
                    </div>
                    <h4 className="text-xl font-sans font-bold tracking-tight mb-2">
                        Mind Tool Workshops — <span className="font-serif italic font-normal">Wide Lens</span>
                    </h4>
                    <p className="text-sm text-[#FDFBF7]/50 leading-relaxed font-light mb-6">
                        Shorter workshops that teach transferable thinking frameworks — mental models that students can apply across any subject, any context.
                    </p>
                    <div className="space-y-3">
                        <p className="text-xs tracking-[0.15em] uppercase text-[#FDFBF7]/30 font-semibold">Examples</p>
                        {[
                            "Economics — Master cost-benefit analysis for smarter decision-making.",
                            "Psychology — Apply game theory to navigate complex social scenarios.",
                            "Philosophy — Practice First Principles thinking to get to the root of any problem.",
                        ].map((ex, i) => (
                            <p key={i} className="text-sm text-[#FDFBF7]/45 leading-relaxed pl-4 border-l border-[#2E8B57]/20">
                                {ex}
                            </p>
                        ))}
                    </div>
                </div>
            </div>

            {/* Past Session Examples */}
            <div>
                <h4 className="text-lg font-sans font-bold tracking-tight mb-6">
                    Past Session Examples
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                    {Object.entries(pastSessions).map(([category, titles]) => (
                        <div key={category}>
                            <p className="text-xs tracking-[0.15em] uppercase text-[#FDFBF7]/30 font-semibold mb-3">
                                {category}
                            </p>
                            <div className="space-y-2">
                                {titles.map((title) => (
                                    <p key={title} className="text-sm text-[#FDFBF7]/50 leading-relaxed font-light">
                                        "{title}"
                                    </p>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

/* ─── Sharing Panel ─── */
function SharingPanel() {
    return (
        <div className="space-y-12 animate-[fadeIn_0.5s_ease-out]">
            <div className="max-w-[800px]">
                <h3 className="text-2xl md:text-3xl font-sans font-bold tracking-tight mb-4">
                    Beyond the classroom — <span className="font-serif italic font-normal text-[#D85C3C]">share your world.</span>
                </h3>
                <p className="text-base md:text-lg text-[#FDFBF7]/55 leading-relaxed font-light">
                    Alongside academic sessions, you'll lead informal sharing sessions that give students a window into life beyond school. These aren't lectures — they're conversations, stories, and honest reflections.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {sharingTypes.map((s) => (
                    <div
                        key={s.title}
                        className="bg-[#111] rounded-2xl p-8 border border-white/5 hover:border-white/10 transition-colors duration-300"
                    >
                        <h4 className="text-lg font-sans font-bold tracking-tight mb-3">{s.title}</h4>
                        <p className="text-sm text-[#FDFBF7]/45 leading-relaxed font-light">{s.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

/* ─── Fun Panel ─── */
function FunPanel() {
    return (
        <div className="space-y-12 animate-[fadeIn_0.5s_ease-out]">
            <div className="max-w-[800px]">
                <h3 className="text-2xl md:text-3xl font-sans font-bold tracking-tight mb-4">
                    By day, you're a scholar. By night, <span className="font-serif italic font-normal text-[#D85C3C]">you're family.</span>
                </h3>
                <p className="text-base md:text-lg text-[#FDFBF7]/55 leading-relaxed font-light">
                    The best connections don't happen in classrooms. They happen over dodgeball, karaoke, and midnight board games. These moments build the trust and belonging that make everything else possible.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {funActivities.map((a) => (
                    <div
                        key={a.name}
                        className="group bg-[#111] rounded-xl p-6 border border-white/5 hover:border-white/15 hover:bg-[#151515] transition-all duration-300"
                    >
                        <h4 className="text-base font-sans font-bold tracking-tight mb-2 group-hover:text-[#D85C3C] transition-colors duration-300">
                            {a.name}
                        </h4>
                        <p className="text-sm text-[#FDFBF7]/40 leading-relaxed font-light">{a.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
