"use client";

import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "motion/react";
import type { CSSProperties } from "react";
import { useState, useEffect } from "react";
import JianshanLogo from "./JianshanLogo";

const NAV_LINKS = [
  { href: "#academy", label: "Academy" },
  { href: "#china-trip", label: "China Trip" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.header
        className={`fixed left-1/2 -translate-x-1/2 z-50 transition-all duration-500 rounded-[2rem] px-4 md:px-8 py-3 w-[95%] max-w-5xl flex items-center justify-between ${isScrolled
          ? "top-4 bg-[#FDFBF7]/60 backdrop-blur-md border border-[#0F2E18]/10 shadow-[0_8px_32px_rgba(0,0,0,0.05)]"
          : "top-6 bg-transparent border border-transparent"
          }`}
      >
        {/* Left section: Logo */}
        <a
          href="#"
          className={`flex items-center gap-2 md:gap-3 text-[1.05rem] min-[380px]:text-lg md:text-2xl font-serif font-bold transition-colors shrink-0 ${isScrolled ? "text-[#0F2E18]" : "text-[#FDFBF7]"
            }`}
          style={
            {
              "--logo-muted": isScrolled ? "#2A4F36" : "#E7E0D6",
            } as CSSProperties
          }
        >
          <JianshanLogo className="h-6 min-[380px]:h-7 md:h-8 w-auto shrink-0" />
          <span>Jianshan Scholarship</span>
        </a>

        {/* Middle section: Navigation (desktop only) */}
        <nav className="hidden md:flex items-center justify-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`font-medium transition-colors whitespace-nowrap ${isScrolled ? "text-[#0F2E18] hover:text-[#1A4D2E]" : "text-[#FDFBF7] hover:text-[#FDFBF7]/70"
                }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right section */}
        <div className="flex items-center gap-2 min-[380px]:gap-3 shrink-0">
          {/* Apply Now button (always visible) */}
          <a
            href="#apply"
            className={`px-3 min-[380px]:px-4 md:px-5 py-2 rounded-full transition-colors font-medium text-[13px] min-[380px]:text-sm whitespace-nowrap ${isScrolled
              ? "bg-[#0F2E18] text-[#FDFBF7] hover:bg-[#1A4D2E]"
              : "bg-[#FDFBF7] text-[#0F2E18] hover:bg-[#FDFBF7]/90"
              }`}
          >
            Apply Now
          </a>

          {/* Hamburger button (mobile only) */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden flex flex-col justify-center items-center w-8 h-8 min-[380px]:w-9 min-[380px]:h-9 shrink-0 rounded-full transition-colors ${isScrolled ? "hover:bg-[#0F2E18]/10" : "hover:bg-[#FDFBF7]/10"
              }`}
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            <span
              className={`block w-[18px] min-[380px]:w-5 h-[2px] rounded-full transition-all duration-300 ${isScrolled ? "bg-[#0F2E18]" : "bg-[#FDFBF7]"
                } ${isMobileMenuOpen ? "rotate-45 translate-y-[3px]" : ""}`}
            />
            <span
              className={`block w-[18px] min-[380px]:w-5 h-[2px] rounded-full transition-all duration-300 mt-[4px] ${isScrolled ? "bg-[#0F2E18]" : "bg-[#FDFBF7]"
                } ${isMobileMenuOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block w-[18px] min-[380px]:w-5 h-[2px] rounded-full transition-all duration-300 mt-[4px] ${isScrolled ? "bg-[#0F2E18]" : "bg-[#FDFBF7]"
                } ${isMobileMenuOpen ? "-rotate-45 -translate-y-[9px]" : ""}`}
            />
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/20 backdrop-blur-md z-40 md:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Menu Panel */}
            <motion.nav
              initial={{ opacity: 0, scale: 0.95, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -10 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="fixed top-24 left-1/2 -translate-x-1/2 w-[95%] max-w-sm z-50 md:hidden
                bg-[#FDFBF7]/80 backdrop-blur-xl rounded-[2rem] border border-[#0F2E18]/10
                shadow-[0_8px_32px_rgba(0,0,0,0.05)] overflow-hidden p-2"
            >
              <div className="flex flex-col gap-1">
                {NAV_LINKS.map((link, index) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={handleNavClick}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 + 0.1, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="px-6 py-4 text-[#0F2E18] font-medium text-[1.1rem] text-center
                      rounded-[1.5rem] hover:bg-[#0F2E18]/5 active:bg-[#0F2E18]/10 transition-colors"
                  >
                    {link.label}
                  </motion.a>
                ))}
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
