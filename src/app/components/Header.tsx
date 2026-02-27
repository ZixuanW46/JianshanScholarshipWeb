import { motion, useScroll, useMotionValueEvent } from "motion/react";
import type { CSSProperties } from "react";
import { useState } from "react";
import JianshanLogo from "./JianshanLogo";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  return (
    <motion.header
      className={`fixed left-1/2 -translate-x-1/2 z-50 transition-all duration-500 rounded-[2rem] px-6 md:px-8 py-3 w-[95%] max-w-5xl grid grid-cols-3 items-center ${isScrolled
        ? "top-4 bg-[#FDFBF7]/60 backdrop-blur-md border border-[#0F2E18]/10 shadow-[0_8px_32px_rgba(0,0,0,0.05)]"
        : "top-6 bg-transparent border border-transparent"
        }`}
    >
      {/* Left section: Logo */}
      <div className="flex justify-start">
        <a
          href="#"
          className={`flex items-center gap-3 text-2xl font-serif font-bold transition-colors ${isScrolled ? "text-[#0F2E18]" : "text-[#FDFBF7]"
            }`}
          style={
            {
              "--logo-muted": isScrolled ? "#2A4F36" : "#E7E0D6",
            } as CSSProperties
          }
        >
          <JianshanLogo className="h-8 w-auto shrink-0" />
          <span>Jianshan Scholarship</span>
        </a>
      </div>

      {/* Middle section: Navigation */}
      <nav className="hidden md:flex items-center justify-center gap-8 md:pl-40">
        <a
          href="#academy"
          className={`font-medium transition-colors whitespace-nowrap ${isScrolled ? "text-[#0F2E18] hover:text-[#1A4D2E]" : "text-[#FDFBF7] hover:text-[#FDFBF7]/70"
            }`}
        >
          Academy
        </a>
        <a
          href="#china-trip"
          className={`font-medium transition-colors whitespace-nowrap ${isScrolled ? "text-[#0F2E18] hover:text-[#1A4D2E]" : "text-[#FDFBF7] hover:text-[#FDFBF7]/70"
            }`}
        >
          China Trip
        </a>
      </nav>

      {/* Right section: Action Button */}
      <div className="flex justify-end">
        <a
          href="#apply"
          className={`px-5 py-2 rounded-full transition-colors font-medium text-sm ${isScrolled
            ? "bg-[#0F2E18] text-[#FDFBF7] hover:bg-[#1A4D2E]"
            : "bg-[#FDFBF7] text-[#0F2E18] hover:bg-[#FDFBF7]/90"
            }`}
        >
          Apply Now
        </a>
      </div>
    </motion.header>
  );
}
