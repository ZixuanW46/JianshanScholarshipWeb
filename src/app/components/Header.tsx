"use client";

import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "motion/react";
import type { CSSProperties } from "react";
import { useState, useEffect } from "react";
import JianshanLogo from "./JianshanLogo";

const NAV_LINKS = [
  { href: "#academy", label: "Jianshan Academy" },
  { href: "#china-trip", label: "China Trip" },
  { href: "#scholars", label: "Past Scholars" },
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
        className={`fixed inset-x-0 z-50 transition-all duration-500 ${isScrolled || isMobileMenuOpen ? "top-4" : "top-6"}`}
      >
        <div className="mx-auto w-full max-w-[1200px] px-6 md:px-12 lg:px-24">
          <div
            className={`rounded-[2rem] px-5 md:pl-8 md:pr-4 py-3 flex items-center justify-between transition-all duration-500 ${isScrolled || isMobileMenuOpen
              ? "bg-[#FDFBF7]/65 backdrop-blur-md border border-[#0F2E18]/10 shadow-[0_8px_32px_rgba(0,0,0,0.05)]"
              : "bg-transparent border border-transparent"
              }`}
          >
            {/* Left section: Logo */}
            <a
              href="#"
              className={`flex items-center gap-2 md:gap-3 text-[1.05rem] min-[380px]:text-lg md:text-2xl font-serif font-medium transition-colors shrink-0 ${isScrolled || isMobileMenuOpen ? "text-[#0F2E18]" : "text-[#FDFBF7]"
                }`}
              style={
                {
                  "--logo-muted": (isScrolled || isMobileMenuOpen) ? "#2A4F36" : "#E7E0D6",
                } as CSSProperties
              }
            >
              <JianshanLogo className="h-6 min-[380px]:h-7 md:h-8 w-auto shrink-0" />
              <span>Jianshan Scholarship</span>
            </a>

            {/* Middle section: Navigation (desktop only) */}
            <nav className="hidden md:flex items-center justify-center gap-10">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`group relative text-sm font-medium tracking-wide transition-colors whitespace-nowrap ${isScrolled ? "text-[#0F2E18]/80 hover:text-[#0F2E18]" : "text-[#FDFBF7]/80 hover:text-[#FDFBF7]"
                    }`}
                >
                  {link.label}
                  <span
                    className={`absolute -bottom-1.5 left-0 w-full h-[1.5px] origin-right scale-x-0 transition-transform duration-300 ease-out group-hover:origin-left group-hover:scale-x-100 ${isScrolled ? "bg-[#0F2E18]" : "bg-[#FDFBF7]"
                      }`}
                  />
                </a>
              ))}
            </nav>

            {/* Right section */}
            <div className="flex items-center gap-3 shrink-0">
              {/* Apply Now button (desktop only) */}
              <a
                href="#apply"
                className={`hidden md:inline-flex px-5 py-2 rounded-full transition-colors font-medium text-sm whitespace-nowrap ${isScrolled
                  ? "bg-[#0F2E18] text-[#FDFBF7] hover:bg-[#1A4D2E]"
                  : "bg-[#FDFBF7] text-[#0F2E18] hover:bg-[#FDFBF7]/90"
                  }`}
              >
                Apply Now
              </a>

              {/* Hamburger button (mobile only) */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`md:hidden flex flex-col justify-center items-center w-9 h-9 shrink-0 rounded-full transition-colors ${isScrolled || isMobileMenuOpen ? "hover:bg-[#0F2E18]/10" : "hover:bg-[#FDFBF7]/10"}`}
                aria-label="Toggle menu"
                aria-expanded={isMobileMenuOpen}
              >
                <span
                  className={`block w-6 h-[2px] rounded-full transition-all duration-300 ${isScrolled || isMobileMenuOpen ? "bg-[#0F2E18]" : "bg-[#FDFBF7]"} ${isMobileMenuOpen ? "rotate-45 translate-y-[6px]" : ""}`}
                />
                <span
                  className={`block w-6 h-[2px] rounded-full transition-all duration-300 mt-[4px] ${isScrolled || isMobileMenuOpen ? "bg-[#0F2E18]" : "bg-[#FDFBF7]"} ${isMobileMenuOpen ? "opacity-0" : ""}`}
                />
                <span
                  className={`block w-6 h-[2px] rounded-full transition-all duration-300 mt-[4px] ${isScrolled || isMobileMenuOpen ? "bg-[#0F2E18]" : "bg-[#FDFBF7]"} ${isMobileMenuOpen ? "-rotate-45 -translate-y-[6px]" : ""}`}
                />
              </button>
            </div>
          </div>
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
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 md:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98, y: -10 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="fixed inset-x-0 top-24 z-50 md:hidden"
            >
              <motion.nav
                className="mx-auto w-full max-w-[1400px] px-6 md:px-12 lg:px-24"
              >
                <div className="bg-[#FDFBF7] rounded-3xl border border-[#0F2E18]/10 shadow-[0_20px_60px_rgba(0,0,0,0.15)] overflow-hidden p-6">
                  <div className="flex flex-col gap-1">
                    {NAV_LINKS.map((link, index) => (
                      <motion.a
                        key={link.href}
                        href={link.href}
                        onClick={handleNavClick}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 + 0.1, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="py-4 text-[#0F2E18] font-medium text-lg min-[380px]:text-xl
                      hover:bg-[#0F2E18]/5 active:bg-[#0F2E18]/10 transition-colors rounded-xl px-2"
                      >
                        {link.label}
                      </motion.a>
                    ))}

                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: NAV_LINKS.length * 0.05 + 0.1, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      className="mt-4"
                    >
                      <a
                        href="#apply"
                        onClick={handleNavClick}
                        className="w-full flex items-center justify-center py-4 rounded-xl bg-[#0F2E18] text-[#FDFBF7]
                      font-medium text-[1.1rem] hover:bg-[#1A4D2E] active:bg-[#1A4D2E]/90 transition-colors"
                      >
                        Apply Now
                      </a>
                    </motion.div>
                  </div>
                </div>
              </motion.nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
