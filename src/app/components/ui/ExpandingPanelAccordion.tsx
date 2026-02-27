import { useState, useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";

export interface AccordionPanelData {
    id: string;
    title: string;
    subtitle?: string;
    description: string;
    imageUrl: string;
}

interface ExpandingPanelAccordionProps {
    panels: AccordionPanelData[];
}

function parseHighlights(text: string) {
    if (!text.includes('**')) return text;

    const parts = text.split(/(\*\*.*?\*\*)/g);
    return (
        <>
            {parts.map((part, i) => {
                if (part.startsWith('**') && part.endsWith('**')) {
                    return (
                        <span key={i} className="text-[#FDFBF7] font-medium drop-shadow-md">
                            {part.slice(2, -2)}
                        </span>
                    );
                }
                return <span key={i}>{part}</span>;
            })}
        </>
    );
}

function truncateForMobile(text: string, maxLength: number) {
    const cleanText = text.replace(/\*\*/g, '');
    if (cleanText.length <= maxLength) return text;

    let currentCleanLength = 0;
    let cutoffIndex = text.length;
    let insideHighlights = false;

    for (let i = 0; i < text.length; i++) {
        if (text[i] === '*' && text[i + 1] === '*') {
            insideHighlights = !insideHighlights;
            i++;
            continue;
        }
        currentCleanLength++;
        if (currentCleanLength === maxLength) {
            cutoffIndex = i + 1;
            break;
        }
    }

    let truncated = text.slice(0, cutoffIndex).trimEnd();
    if (insideHighlights) {
        truncated += '**';
    }
    return truncated;
}

export function ExpandingPanelAccordion({ panels }: ExpandingPanelAccordionProps) {
    // activePanel is null initially so all panels share equal width (flex: 1)
    const [activePanel, setActivePanel] = useState<string | null>(null);
    const [expandedDescriptions, setExpandedDescriptions] = useState<Record<string, boolean>>({});
    const containerRef = useRef<HTMLDivElement>(null);
    const [isDesktop, setIsDesktop] = useState(false);

    // Custom cursor state for the accordion container
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(min-width: 768px)");
        const updateIsDesktop = () => setIsDesktop(mediaQuery.matches);

        updateIsDesktop();
        mediaQuery.addEventListener("change", updateIsDesktop);
        return () => mediaQuery.removeEventListener("change", updateIsDesktop);
    }, []);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePos({ x: e.clientX, y: e.clientY });
        };
        if (isHovering && isDesktop) {
            window.addEventListener("mousemove", handleMouseMove);
        } else {
            window.removeEventListener("mousemove", handleMouseMove);
        }
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [isHovering, isDesktop]);

    return (
        <div
            className="relative w-full h-[80vh] flex overflow-hidden cursor-default md:cursor-none"
            onMouseEnter={() => {
                if (isDesktop) setIsHovering(true);
            }}
            onMouseLeave={() => setIsHovering(false)}
            ref={containerRef}
        >
            {/* Custom Cursor */}
            {isDesktop && isHovering && (
                <>
                    {/* Central Dot */}
                    <div
                        className="fixed top-0 left-0 w-3 h-3 bg-[#C4F1B3] rounded-full pointer-events-none z-[100] shadow-[0_0_15px_rgba(196,241,179,0.8)]"
                        style={{ transform: `translate3d(${mousePos.x - 6}px, ${mousePos.y - 6}px, 0)` }}
                    />
                    {/* Outer Ring with Text */}
                    <div
                        className="fixed top-0 left-0 w-24 h-24 border border-[#C4F1B3]/50 bg-[#C4F1B3]/10 backdrop-blur-sm rounded-full pointer-events-none z-[100] transition-transform duration-100 ease-out flex items-center justify-center"
                        style={{ transform: `translate3d(${mousePos.x - 48}px, ${mousePos.y - 48}px, 0)` }}
                    >
                        <span className="text-[10px] sm:text-xs font-mono tracking-widest text-[#C4F1B3] uppercase opacity-90 drop-shadow-md pb-6 pl-12 whitespace-nowrap">
                            Explore
                        </span>
                    </div>
                </>
            )}

            {panels.map((panel, index) => {
                // Evaluate active status - if activePanel is null, all are inactive (shows vertical text, equal width)
                const isActive = activePanel === panel.id;
                const isDescriptionExpanded = expandedDescriptions[panel.id] ?? false;

                return (
                    <div
                        key={panel.id}
                        className={`relative h-full transition-all duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)] overflow-hidden border-r border-[#FDFBF7]/10 last:border-r-0 group`}
                        style={{
                            flex: isActive ? 4 : 1, // Smoothly grows to 4x width if active, else 1
                        }}
                        onMouseEnter={() => {
                            if (isDesktop) setActivePanel(panel.id);
                        }}
                        onClick={() => {
                            if (!isDesktop) {
                                setActivePanel(activePanel === panel.id ? null : panel.id);
                            }
                        }}
                    >
                        {/* Background Image */}
                        <div
                            className="absolute inset-0 w-full h-full bg-cover bg-center transition-all duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
                            style={{
                                backgroundImage: `url(${panel.imageUrl})`,
                                filter: isActive ? 'grayscale(0%) brightness(80%)' : 'grayscale(100%) brightness(30%)',
                                transform: isActive ? 'scale(1)' : 'scale(1.1)', // Subtle zoom out when active
                            }}
                        />

                        {/* Dark gradient overlay from bottom */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent pointer-events-none" />

                        {/* Content Container */}
                        <div className="absolute inset-0 flex flex-col justify-end text-[#FDFBF7]">

                            {/* Collapsed State Content - Centered vertically with Rotated Text */}
                            <div
                                className={`absolute inset-0 flex flex-col items-center pt-8 md:pt-12 transition-all duration-[800ms] ease-in-out ${isActive ? 'opacity-0 pointer-events-none translate-y-4' : 'opacity-100 translate-y-0'}`}
                            >
                                {/* Number Indicator */}
                                <div className="font-mono text-xl md:text-2xl font-light text-[#FDFBF7]">
                                    {String(index + 1).padStart(2, '0')}
                                </div>

                                {/* Vertical Divider */}
                                <div className="w-px h-12 md:h-16 bg-[#FDFBF7]/40 my-6" />

                                {/* Vertical Title Container */}
                                <div className="flex-1 relative w-full flex justify-center pb-12">
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-90 whitespace-nowrap text-2xl md:text-3xl lg:text-4xl font-serif tracking-widest text-[#FDFBF7] drop-shadow-md">
                                        {panel.title}
                                    </div>
                                </div>
                            </div>

                            {/* Expanded State Content */}
                            <div
                                className={`relative flex flex-col justify-end p-6 md:p-10 transition-all duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12 pointer-events-none'}`}
                            >
                                <div className="font-mono text-xs md:text-sm mb-3 text-[#FDFBF7]/80 tracking-[0.2em] uppercase origin-left">
                                    {panel.subtitle || `Section ${String(index + 1).padStart(2, '0')}`}
                                </div>

                                <h3 className="text-3xl md:text-5xl lg:text-6xl font-serif mb-4 md:mb-6 leading-tight max-w-2xl drop-shadow-md">
                                    {panel.title}
                                </h3>

                                <div className="max-w-4xl mb-4 md:mb-10">
                                    {!isDesktop && !isDescriptionExpanded ? (
                                        <p className="text-base text-[#FDFBF7]/90 font-light leading-relaxed drop-shadow-sm">
                                            {parseHighlights(truncateForMobile(panel.description, 150))}
                                            {panel.description.replace(/\*\*/g, '').length > 150 && (
                                                <>
                                                    ...{" "}
                                                    <button
                                                        onClick={(e) => {
                                                            e.stopPropagation();
                                                            setExpandedDescriptions((prev) => ({
                                                                ...prev,
                                                                [panel.id]: true
                                                            }));
                                                        }}
                                                        className="inline text-xs tracking-[0.2em] uppercase font-mono text-[#C4F1B3] hover:text-[#E0FFD5] transition-colors align-baseline"
                                                    >
                                                        more
                                                    </button>
                                                </>
                                            )}
                                        </p>
                                    ) : (
                                        <p className="text-base md:text-xl text-[#FDFBF7]/90 font-light leading-relaxed drop-shadow-sm line-clamp-none">
                                            {parseHighlights(panel.description)}
                                        </p>
                                    )}
                                </div>

                                <div>
                                    <button className="flex items-center gap-3 text-xs md:text-sm tracking-[0.2em] uppercase font-mono group/btn bg-[#FDFBF7]/10 hover:bg-[#FDFBF7]/20 px-6 py-4 rounded-full backdrop-blur-md transition-all border border-[#FDFBF7]/30 text-[#FDFBF7]">
                                        LEARN MORE <ArrowRight size={16} className="transform group-hover/btn:translate-x-2 transition-transform duration-300" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
