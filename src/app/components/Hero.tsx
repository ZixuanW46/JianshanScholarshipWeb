import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ArrowRight, Users } from "lucide-react";
import { Button } from "./ui/button";
import ImageTrail from "./ImageTrail";

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(".hero-stagger", {
        y: 60,
        opacity: 0,
        duration: 1.4,
        stagger: 0.15,
        ease: "power3.out",
        delay: 0.2
      });
    }, textRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[100dvh] flex items-end justify-start overflow-hidden bg-[#0F2E18] pb-12 md:pb-24 pt-32"
    >
      {/* Background Image & Gradient */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1470115636492-6d2b56f9146d?q=80&w=2000&auto=format&fit=crop"
          alt="Dark Forest"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F2E18] via-[#0F2E18]/60 to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F2E18]/80 via-[#0F2E18]/40 to-transparent pointer-events-none" />
      </div>

      {/* Cursor Effect */}
      <ImageTrail containerRef={containerRef} />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-8" ref={textRef}>
        <div className="max-w-5xl">
          <div className="hero-stagger mb-8">
            <span className="inline-block py-1.5 px-4 rounded-full bg-[#FDFBF7]/10 backdrop-blur-md border border-[#FDFBF7]/20 text-[#FDFBF7] text-sm font-medium tracking-widest uppercase">
              Join the 2026 Cohort
            </span>
          </div>

          <h1 className="hero-stagger text-5xl md:text-7xl lg:text-8xl font-sans font-bold text-[#FDFBF7] tracking-tight leading-[1] mb-2">
            Go to inspire.
          </h1>
          <h2 className="hero-stagger text-6xl md:text-8xl lg:text-[110px] xl:text-[130px] font-serif italic text-[#FDFBF7] tracking-tight leading-[0.9] mb-10 md:whitespace-nowrap">
            Return inspired.
          </h2>

          <p className="hero-stagger text-xl md:text-2xl text-[#FDFBF7]/70 mb-12 font-light max-w-xl">
            A fully-funded journey from Cambridge into the heart of China —— adventure, discovery and real connections.
          </p>

          <div className="hero-stagger flex flex-col sm:flex-row items-start gap-4">
            <Button size="lg" className="w-full sm:w-auto text-lg px-8 bg-[#FDFBF7] text-[#0F2E18] hover:bg-[#E8F3E8] rounded-full">
              Apply Now <ArrowRight size={20} />
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto text-lg px-8 border-[#FDFBF7]/30 text-[#FDFBF7] hover:bg-[#FDFBF7]/10 rounded-full">
              Meet the Scholars <Users size={20} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
