import { ExpandingPanelAccordion } from "./ui/ExpandingPanelAccordion";
import { AcademyLinkBlock } from "./AcademyLinkBlock";

export default function Academy() {
  const academyPanels = [
    {
      id: "exploration",
      title: "Academic Exploration",
      subtitle: "Passion & Perspective",
      description: "Share your passion and perspective to inspire a new generation of students. We don't set constraints, students can explore whatever and however they want. In Jianshan Academy, even raw knowledge itself is secondary.",
      imageUrl: "https://images.unsplash.com/photo-1557734864-c78b6dfef1b1?q=80&w=1080&auto=format&fit=crop"
    },
    {
      id: "exchange",
      title: "Cultural Exchange",
      subtitle: "Real Connections",
      description: "Share your cultural background while the students share theirs. We know the best way to learn about a culture is from real people. In Jianshan Academy, you meet people with different backgrounds. They can be your Cambridge peers, Chinese students, and even cool Chinese content creators!",
      imageUrl: "https://images.unsplash.com/photo-1758270705657-f28eec1a5694?q=80&w=1080&auto=format&fit=crop"
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
            Part One: Academy
          </span>
          <span className="text-4xl md:text-5xl lg:text-6xl font-serif italic text-[#D85C3C] tracking-tight pr-4">
            where minds connect.
          </span>
        </h2>
      </div>

      <div className="w-full">
        <ExpandingPanelAccordion panels={academyPanels} />
      </div>

      <AcademyLinkBlock />
    </section>
  );
}
