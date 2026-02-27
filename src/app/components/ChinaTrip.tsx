import { ExpandingPanelAccordion } from "./ui/ExpandingPanelAccordion";
import { ChinaTripLinkBlock } from "./ChinaTripLinkBlock";
import CommunitySupportBento from "./CommunitySupportBento";

export default function ChinaTrip() {
  const tripPanels = [
    {
      id: "architecture",
      title: "The Echo of the Ancient",
      subtitle: "Architecture & History",
      description: "Walk through history in centuries-old temples and palaces.",
      imageUrl: "https://images.unsplash.com/photo-1718248336966-70d17f2dbfd7?q=80&w=1080&auto=format&fit=crop"
    },
    {
      id: "landscape",
      title: "Breathtaking Landscapes",
      subtitle: "Geography & Nature",
      description: "From misty mountains to serene rivers, witness nature's art.",
      imageUrl: "https://images.unsplash.com/photo-1750610133141-c5cd9da6bfc7?q=80&w=1080&auto=format&fit=crop"
    },
    {
      id: "cyberpunk",
      title: "The Real-life Cyberpunk",
      subtitle: "Modern Cities",
      description: "Experience the neon-lit futuristic energy of modern China.",
      imageUrl: "https://images.unsplash.com/photo-1690177396781-1d6609f06046?q=80&w=1080&auto=format&fit=crop"
    }
  ];

  return (
    <section id="china-trip" className="bg-[#FDFBF7] relative py-32 overflow-hidden z-10 w-full">
      <div className="mb-20 px-6 md:px-12 lg:px-24 mx-auto max-w-[1400px]">
        <div className="flex items-center gap-6 mb-8">
          <div className="h-[1px] w-12 bg-[#0F2E18]/30" />
          <span className="text-[#0F2E18]/60 tracking-[0.2em] font-sans text-xs md:text-sm font-semibold uppercase">
            The Jianshan Experience
          </span>
        </div>

        <h2 className="text-5xl md:text-7xl lg:text-8xl flex flex-col gap-1 md:gap-2 text-left">
          <span className="font-sans font-bold text-[#0F2E18] tracking-tighter">
            Part Two: China Trip
          </span>
          <span className="text-4xl md:text-5xl lg:text-6xl font-serif italic text-[#D85C3C] tracking-tight pr-4">
            where the journey begins.
          </span>
        </h2>

        <p className="text-xl text-[#0F2E18]/80 max-w-2xl font-light text-left mt-10">
          The best immersive and authentic China experience you can expect.
        </p>
      </div>

      <div className="w-full">
        <ExpandingPanelAccordion panels={tripPanels} />
      </div>

      <ChinaTripLinkBlock />

      <CommunitySupportBento />
    </section>
  );
}

