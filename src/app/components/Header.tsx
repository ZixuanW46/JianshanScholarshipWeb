import { motion, useScroll, useMotionValueEvent } from "motion/react";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  const links = [
    { name: "About", href: "#about" },
    { name: "Academy", href: "#academy" },
    { name: "China Trip", href: "#china-trip" },
  ];

  return (
    <motion.header
      className={`fixed left-1/2 -translate-x-1/2 z-50 transition-all duration-500 rounded-[2rem] px-6 md:px-8 py-3 w-[95%] max-w-5xl flex justify-between items-center ${
        isScrolled 
          ? "top-4 bg-[#FDFBF7]/60 backdrop-blur-md border border-[#0F2E18]/10 shadow-[0_8px_32px_rgba(0,0,0,0.05)]" 
          : "top-6 bg-transparent border border-transparent"
      }`}
    >
      <a href="#" className={`text-2xl font-serif font-bold transition-colors ${
        isScrolled ? "text-[#0F2E18]" : "text-[#FDFBF7]"
      }`}>
        Jianshan.
      </a>

      {/* Desktop Nav */}
      <nav className="hidden md:flex items-center gap-8">
        {links.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className={`font-medium transition-colors ${
              isScrolled ? "text-[#0F2E18] hover:text-[#1A4D2E]" : "text-[#FDFBF7] hover:text-[#FDFBF7]/70"
            }`}
          >
            {link.name}
          </a>
        ))}
        <a
          href="#apply"
          className={`px-5 py-2 rounded-full transition-colors font-medium text-sm ${
             isScrolled 
               ? "bg-[#0F2E18] text-[#FDFBF7] hover:bg-[#1A4D2E]" 
               : "bg-[#FDFBF7] text-[#0F2E18] hover:bg-[#FDFBF7]/90"
          }`}
        >
          Apply Now
        </a>
      </nav>

      {/* Mobile Menu Button */}
      <button
        className={isScrolled ? "text-[#0F2E18]" : "text-[#FDFBF7]"}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <motion.div
           initial={{ opacity: 0, y: -20, scale: 0.95 }}
           animate={{ opacity: 1, y: 0, scale: 1 }}
           className="absolute top-16 left-0 right-0 bg-[#FDFBF7] shadow-lg md:hidden p-4 flex flex-col gap-4 border border-[#0F2E18]/10 rounded-2xl"
        >
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[#0F2E18] font-medium py-2 px-4 hover:bg-[#E8F3E8] rounded-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#apply"
            className="w-full text-center py-3 bg-[#0F2E18] text-[#FDFBF7] rounded-lg font-medium"
            onClick={() => setIsMenuOpen(false)}
          >
            Apply Now
          </a>
        </motion.div>
      )}
    </motion.header>
  );
}
