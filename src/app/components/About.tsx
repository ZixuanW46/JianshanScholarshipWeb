import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const philosophicalStages = [
  {
    chinese: "见山是山",
    english: "First, we see mountains as mountains.",
  },
  {
    chinese: "见山不是山",
    english: "Then, mountains are no longer mountains.",
  },
  {
    chinese: "见山还是山",
    english: "Finally, mountains are truly mountains again.",
  }
];

export default function About() {
  const containerRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // 1. Majestic Mountain Image Parallax
      gsap.to(imageRef.current, {
        yPercent: 30, // Move down slightly as we scroll down
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      // 2. Sequential Lighting of the Three Phrases on the left
      const stages = gsap.utils.toArray(".philosophy-stage") as HTMLElement[];

      stages.forEach((stage) => {
        gsap.to(stage, {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: stage,
            // To account for the sticky right column context, we trigger based on center
            start: "top center+=15%",
            end: "top center-=15%",
            scrub: true,
          }
        });
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative bg-[#0A0A0A] text-[#FDFBF7] flex flex-col items-center justify-center">

      {/* Background Image: A Majestic Mountain */}
      {/* 
        CRITICAL FIX: 
        We must NOT put 'overflow-hidden' on the root <section> because any 'overflow: hidden' 
        on an ancestor will completely disable 'position: sticky' for all children inside it. 
        Instead, we apply 'overflow-hidden' explicitly to this absolutely positioned background wrapper 
        so the mountain image doesn't bleed out of the section!
      */}
      <div className="absolute inset-0 -z-10 h-full w-full pointer-events-none overflow-hidden">
        <div className="sticky top-0 h-screen w-full overflow-hidden">
          <img
            ref={imageRef}
            src="https://images.unsplash.com/photo-1454496522488-7a8e488e8606?q=80&w=2676&auto=format&fit=crop"
            alt="Majestic Mountain"
            className="w-full h-[130%] object-cover absolute -top-[15%] opacity-40 grayscale blend-luminosity"
          />
          {/* Gradient masks */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-transparent to-[#0A0A0A] opacity-90" />
          <div className="absolute inset-0 bg-black/40" />
        </div>
      </div>

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24">

        {/* Split Screen Layout container */}
        <div className="relative md:flex md:flex-row">

          {/* Phrases - always in normal flow, provides scroll height */}
          <div ref={leftColRef} className="w-full md:w-1/2 pt-[360px] md:pt-[30vh] pb-[40vh] md:pr-12 lg:pr-24">

            <div className="flex flex-col gap-24 md:gap-64">
              {philosophicalStages.map((stage, index) => (
                <div
                  key={index}
                  className="philosophy-stage opacity-20 transform translate-y-12 flex flex-col items-start group"
                >
                  <h2 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif text-white tracking-widest mb-6 lg:mb-8 font-extralight drop-shadow-2xl whitespace-nowrap">
                    {stage.chinese}
                  </h2>
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-serif italic text-white/70 font-light tracking-tight mb-4">
                    {stage.english}
                  </h3>
                </div>
              ))}
            </div>
          </div>

          {/* Explanation - absolute overlay on mobile (so sticky works), static flex child on desktop */}
          <div className="absolute inset-0 md:static md:w-1/2 pointer-events-none md:pointer-events-auto">
            {/* Added a bottom gradient to the mobile sticky background so text fades out smoothly instead of a harsh cut */}
            <div className="sticky top-0 md:h-[100dvh] flex flex-col md:justify-center pt-24 md:pt-0 pb-8 md:pb-0 pointer-events-auto z-10 before:absolute before:inset-0 before:bg-gradient-to-b before:from-[#0A0A0A] before:via-[#0A0A0A]/95 before:to-transparent before:-z-10 md:before:hidden backdrop-blur-[2px] md:backdrop-blur-none">
              <div className="max-w-md border-l border-white/10 pl-8 md:pl-12 py-4 mx-6 md:mx-0 relative z-20">
                <div className="mb-8">
                  <span className="inline-block text-[#E8F3E8]/50 text-[10px] md:text-sm uppercase tracking-[0.2em] md:tracking-[0.4em] font-medium border border-[#E8F3E8]/10 px-3 md:px-4 py-1.5 md:py-2 rounded-full backdrop-blur-sm shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] whitespace-nowrap">
                    The Meaning of Jianshan
                  </span>
                </div>
                <p className="text-sm md:text-lg text-white/70 leading-relaxed font-sans font-light mb-4 md:mb-6">
                  The name "Jianshan" (见山), which literally translates to "Seeing the Mountain," comes from a well-known three-sentence Zen Buddhist parable of Zen master Qingyuan Weixin shown here.
                </p>
                <p className="text-sm md:text-lg text-white/50 leading-relaxed font-sans font-light">
                  This parable describes a path to understanding: from a superficial view to critical questioning, and ultimately to a richer, more nuanced appreciation of the world.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
