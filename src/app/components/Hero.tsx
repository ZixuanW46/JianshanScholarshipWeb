import { motion } from "motion/react";
import { ArrowRight, Users } from "lucide-react";
import { useRef } from "react";
import { Button } from "./ui/Button";
import ImageTrail from "./ImageTrail";

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#FDFBF7] pt-20"
    >
      {/* Background Subtle Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#FDFBF7] via-[#FDFBF7] to-[#E8F3E8]/30 pointer-events-none" />

      {/* Cursor Effect */}
      <ImageTrail containerRef={containerRef} />

      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-[#E8F3E8] text-[#0F2E18] text-sm font-medium tracking-wide mb-6">
            Join the 2026 Cohort
          </span>
          
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif font-medium text-[#0F2E18] tracking-tight leading-[0.9] mb-8">
            Jianshan <br /> Scholarship
          </h1>
          
          <p className="text-xl md:text-2xl text-[#0F2E18]/70 max-w-2xl mx-auto mb-10 font-light">
            It's about adventure, discovery and family. <br className="hidden md:block" />
            Empowering the next generation of global thinkers.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="w-full sm:w-auto text-lg px-8">
              Apply Now <ArrowRight size={20} />
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto text-lg px-8">
              Meet the Scholars <Users size={20} />
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Decorative Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#FDFBF7] to-transparent pointer-events-none" />
    </section>
  );
}
