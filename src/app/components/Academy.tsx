import { ExpandingPanelAccordion } from "./ui/ExpandingPanelAccordion";
import { AcademyLinkBlock } from "./AcademyLinkBlock";
import { Pointer } from "lucide-react";

export default function Academy() {
  const academyPanels = [
    {
      id: "exploration",
      title: "Academic Exploration",
      subtitle: "Passion & Perspective",
      description: "Share your passion and understanding of subjects you love, and pass that spark on to these kids. Think back to your favourite teacher growing up — the one who made you fall in love with a subject. **Now you have the chance to be that person for someone else.** A small moment of inspiration today could shape a child's path for years to come.",
      imageUrl: "/teaching.webp"
    },
    {
      id: "exchange",
      title: "Cultural Exchange",
      subtitle: "Real Connections",
      description: "This isn't a one-way street. You'll share your own cultural background with the students, and in return, you'll live alongside locals day and night — the most authentic way to experience a culture. **It's a genuine, two-way exchange that no textbook or tourist trip could ever replicate.**",
      imageUrl: "/cultural.webp"
    }
  ];

  return (
    <section id="academy" className="bg-[#1A1A1A] relative py-32 overflow-hidden z-10 w-full">
      {/* Intro text */}
      <div className="mb-20 px-6 md:px-12 lg:px-24 mx-auto max-w-[1400px]">
        <div className="flex items-center gap-6 mb-8">
          <div className="h-[1px] w-12 bg-[#FDFBF7]/40" />
          <span className="text-[#FDFBF7]/60 tracking-[0.2em] font-sans text-xs md:text-sm font-semibold uppercase">
            The Jianshan Experience
          </span>
        </div>

        <h2 className="text-5xl md:text-7xl lg:text-8xl flex flex-col gap-1 md:gap-2 text-left">
          <span className="font-sans font-bold text-[#FDFBF7] tracking-tighter">
            Part One:{" "}
            <br className="md:hidden" />
            <span className="whitespace-nowrap">Jianshan&nbsp;Academy</span>
          </span>
          <span className="text-4xl md:text-5xl lg:text-6xl font-serif italic text-[#D85C3C] tracking-tight pr-4">
            where minds connect.
          </span>
        </h2>
      </div>

      <div className="w-full">
        <div className="md:hidden flex items-center justify-center gap-4 mb-6 px-6 text-[#FDFBF7]/60">
          <Pointer size={16} className="animate-pulse -rotate-12" />
          <span className="text-[10px] uppercase tracking-[0.2em] font-mono">Tap panels to expand</span>
        </div>
        <ExpandingPanelAccordion panels={academyPanels} />
      </div>

      <AcademyLinkBlock />
    </section>
  );
}
