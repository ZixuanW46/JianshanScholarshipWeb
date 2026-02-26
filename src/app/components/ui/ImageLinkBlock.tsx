import React, { useRef, useState, useEffect } from 'react';
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

interface TextLinkBlockProps {
    title: string;
    linkHref: string;
    subtitle?: string;
    accentColor?: string; // e.g., text-[#D85C3C]
    bgClass?: string;     // e.g., bg-[#1A1A1A] or bg-[#FDFBF7]
    textClass?: string;   // e.g., text-[#FDFBF7] or text-[#1A1A1A]
}

// Option A: The Magnetic Arrow Minimalist Banner
export const TextLinkOptionA: React.FC<TextLinkBlockProps> = ({
    title, linkHref, subtitle, bgClass = "bg-[#1A1A1A]", textClass = "text-[#FDFBF7]"
}) => {
    return (
        <a href={linkHref} className={`group flex flex-col justify-center w-full py-24 px-6 md:px-12 lg:px-24 border-t border-current/10 ${bgClass} block relative overflow-hidden transition-colors duration-500 hover:bg-current/5`}>
            <div className="max-w-[1400px] mx-auto w-full flex flex-col md:flex-row md:items-end justify-between gap-12">
                <div className="flex flex-col gap-6 relative z-10">
                    {subtitle && (
                        <span className={`text-xs md:text-sm tracking-[0.2em] font-mono uppercase opacity-50 ${textClass}`}>
                            {subtitle}
                        </span>
                    )}
                    <h3 className={`text-5xl md:text-7xl lg:text-8xl font-serif leading-none tracking-tight ${textClass} group-hover:italic group-hover:text-[#D85C3C] transition-all duration-500`}>
                        {title}
                    </h3>
                </div>

                {/* "Magnetic" Arrow Button Container */}
                <div className={`relative z-10 flex-shrink-0 w-20 h-20 md:w-32 md:h-32 rounded-full border border-current/20 flex items-center justify-center ${textClass} group-hover:border-[#D85C3C] transition-colors duration-500 overflow-hidden`}>
                    <div className="absolute inset-0 bg-[#D85C3C] transform scale-0 group-hover:scale-100 transition-transform duration-500 ease-out rounded-full origin-center" />
                    <ArrowRight className="w-8 h-8 md:w-10 md:h-10 relative z-10 transform group-hover:translate-x-2 group-hover:text-[#FDFBF7] transition-all duration-500" />
                </div>
            </div>
        </a>
    );
};

// Option B: The Staggered Outline Text
export const TextLinkOptionB: React.FC<TextLinkBlockProps> = ({
    title, linkHref, subtitle, bgClass = "bg-[#1A1A1A]", textClass = "text-[#FDFBF7]"
}) => {
    // Split title into words if possible, or just use letters. Let's just use the whole title for simplicity.
    return (
        <a href={linkHref} className={`group flex flex-col items-center justify-center w-full py-32 px-6 ${bgClass} block relative overflow-hidden`}>
            {subtitle && (
                <span className={`text-sm tracking-[0.3em] font-sans font-bold uppercase mb-8 opacity-60 ${textClass}`}>
                    {subtitle}
                </span>
            )}

            <div className="relative cursor-pointer">
                {/* Stroke Outline (Default State) */}
                <h3
                    className="text-6xl md:text-8xl lg:text-[9rem] font-sans font-black uppercase tracking-tighter leading-none text-transparent"
                    style={{ WebkitTextStroke: `1px ${textClass.includes('FDFBF7') ? 'rgba(253, 251, 247, 0.3)' : 'rgba(26, 26, 26, 0.3)'}` }}
                >
                    {title}
                </h3>

                {/* Solid Fill (Hover State) */}
                <h3
                    className="absolute top-0 left-0 w-full text-6xl md:text-8xl lg:text-[9rem] font-sans font-black uppercase tracking-tighter leading-none text-[#D85C3C] whitespace-nowrap overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] w-[0%] group-hover:w-[100%]"
                >
                    {title}
                </h3>

                <div className={`absolute -right-12 md:-right-24 bottom-4 md:bottom-8 opacity-0 group-hover:opacity-100 transform -translate-x-8 group-hover:translate-x-0 transition-all duration-500 delay-100 ${textClass}`}>
                    <ArrowRight className="w-8 h-8 md:w-12 md:h-12 text-[#D85C3C]" />
                </div>
            </div>
        </a>
    );
};

// Option C: Sliding Marquee with Floating Pill
export const TextLinkOptionC: React.FC<TextLinkBlockProps> = ({
    title, linkHref, bgClass = "bg-[#1A1A1A]", textClass = "text-[#FDFBF7]"
}) => {
    const isLightBg = bgClass.includes('FDFBF7');
    const textColor = isLightBg ? 'text-[#1A1A1A]' : 'text-[#FDFBF7]';
    const strokeColor = isLightBg ? 'rgba(26,26,26,0.1)' : 'rgba(253,251,247,0.1)';

    // Mouse position state for the floating cursor
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);
    const containerRef = useRef<HTMLAnchorElement>(null);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (containerRef.current) {
                const rect = containerRef.current.getBoundingClientRect();
                setMousePosition({
                    x: e.clientX - rect.left,
                    y: e.clientY - rect.top,
                });
            }
        };

        if (isHovering) {
            window.addEventListener('mousemove', handleMouseMove);
        }

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, [isHovering]);

    return (
        <a
            ref={containerRef}
            href={linkHref}
            className={`group flex items-center w-full h-[160px] md:h-[240px] ${bgClass} relative overflow-hidden cursor-none block`}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
        >
            {/* Infinite scrolling text */}
            <div className="absolute whitespace-nowrap flex animate-marquee group-hover:text-[#D85C3C] transition-colors duration-700">
                {[...Array(4)].map((_, i) => (
                    <span
                        key={i}
                        className={`text-[8rem] md:text-[12rem] font-sans font-bold uppercase tracking-tighter leading-none mx-8 text-transparent`}
                        style={{
                            WebkitTextStroke: `2px ${isHovering ? '#D85C3C' : strokeColor}`,
                            transition: 'all 0.5s ease'
                        }}
                    >
                        {title} •
                    </span>
                ))}
            </div>

            {/* Floating Custom Cursor Pill */}
            <motion.div
                className="absolute top-0 left-0 pointer-events-none z-20 flex items-center justify-center gap-2 bg-[#D85C3C] text-[#FDFBF7] px-6 py-3 rounded-full font-mono text-sm tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-xl whitespace-nowrap"
                animate={{
                    x: mousePosition.x - 90, // offset heavily to center on cursor approx, increased from 75 since text is longer
                    y: mousePosition.y - 24,
                }}
                transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
            >
                <span>Learn More</span>
                <ArrowRight className="w-4 h-4" />
            </motion.div>

            <style dangerouslySetInnerHTML={{
                __html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
        .group:hover .animate-marquee {
          animation-duration: 80s;
        }
      `}} />
        </a>
    );
};

// Option D: Centered Typography with Dashed Dividers
export const TextLinkOptionD: React.FC<TextLinkBlockProps> = ({
    title, linkHref, subtitle, bgClass = "bg-[#1A1A1A]", textClass = "text-[#FDFBF7]"
}) => {
    const isLightBg = bgClass.includes('FDFBF7');
    const borderColor = isLightBg ? 'border-[#1A1A1A]/30' : 'border-[#FDFBF7]/30';
    const buttonBg = isLightBg ? 'bg-[#1A1A1A]/10' : 'bg-[#FDFBF7]/10';
    const buttonHoverBg = isLightBg ? 'hover:bg-[#1A1A1A]' : 'hover:bg-[#FDFBF7]';
    const buttonHoverText = isLightBg ? 'hover:text-[#FDFBF7]' : 'hover:text-[#1A1A1A]';

    return (
        <a href={linkHref} className={`group flex flex-col items-center justify-center w-full py-32 px-6 relative overflow-hidden ${bgClass} transition-colors duration-500 block`}>
            {/* Dashed background lines */}
            <div className="absolute top-1/2 left-0 w-full flex items-center justify-between pointer-events-none -translate-y-1/2 px-4 md:px-12 lg:px-24">
                <div className={`h-[1px] w-[15%] md:w-[25%] border-t border-dashed ${borderColor} transition-all duration-700 group-hover:w-[20%] md:group-hover:w-[30%] opacity-50 group-hover:opacity-100`} />
                <div className={`h-[1px] w-[15%] md:w-[25%] border-t border-dashed ${borderColor} transition-all duration-700 group-hover:w-[20%] md:group-hover:w-[30%] opacity-50 group-hover:opacity-100`} />
            </div>

            <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto transform group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]">
                {subtitle && (
                    <span className={`text-xs md:text-sm tracking-[0.2em] font-mono uppercase mb-6 opacity-60 ${textClass}`}>
                        {subtitle}
                    </span>
                )}
                <h3 className={`text-5xl md:text-7xl lg:text-8xl font-sans font-black uppercase tracking-tighter leading-[0.9] ${textClass} mb-12 max-w-3xl`}>
                    {title}
                </h3>
                <div className={`px-8 py-3 rounded-xl flex items-center justify-center text-sm font-sans font-medium transition-all duration-300 ${buttonBg} ${textClass} ${buttonHoverBg} ${buttonHoverText}`}>
                    Explore section
                </div>
            </div>
        </a>
    );
};
