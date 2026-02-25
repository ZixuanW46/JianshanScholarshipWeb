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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-[#FDFBF7]/90 backdrop-blur-md py-4 shadow-sm" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-between items-center">
        <a href="#" className="text-2xl font-serif font-bold text-[#0F2E18]">
          Jianshan.
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[#0F2E18] font-medium hover:text-[#1A4D2E] transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#apply"
            className="px-5 py-2 rounded-full bg-[#0F2E18] text-[#FDFBF7] hover:bg-[#1A4D2E] transition-colors font-medium text-sm"
          >
            Apply Now
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-[#0F2E18]"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 right-0 bg-[#FDFBF7] shadow-lg md:hidden p-4 flex flex-col gap-4 border-t border-[#0F2E18]/10"
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
