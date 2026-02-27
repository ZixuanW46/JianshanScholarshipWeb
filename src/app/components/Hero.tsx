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

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24" ref={textRef}>
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
            <Button
              size="lg"
              className="group w-full sm:w-auto text-lg px-8 bg-[#FDFBF7] text-[#0F2E18] hover:bg-[#E8F3E8] rounded-full transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:scale-[1.03] hover:gap-4 hover:px-10"
            >
              Apply Now
              <ArrowRight
                size={20}
                className="transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:translate-x-1 group-hover:scale-110"
              />
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="relative overflow-hidden group w-full sm:w-auto text-lg px-8 border-none text-[#FDFBF7] bg-transparent rounded-full transition-all duration-500"
            >
              {/* Default Border */}
              <div className="absolute inset-0 border border-[#FDFBF7]/30 rounded-full pointer-events-none transition-opacity duration-500 group-hover:opacity-0" />

              {/* Rotating Shimmer Layer */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none overflow-hidden rounded-full">
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] aspect-square animate-[spin_2.5s_linear_infinite] bg-[conic-gradient(from_0deg,transparent_0_270deg,rgba(253,251,247,0.8)_360deg)]" />
              </div>

              {/* Inner Cap to create the border effect */}
              <div className="absolute inset-[1px] rounded-full bg-[#0a2010] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <span className="relative z-10 flex items-center justify-center gap-2">
                Meet the Scholars
                <Users
                  size={20}
                  className="transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:-translate-y-[3px] group-hover:drop-shadow-[0_2px_8px_rgba(253,251,247,0.6)]"
                />
              </span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
