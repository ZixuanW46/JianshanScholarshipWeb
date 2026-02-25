import { ExpandingPanelAccordion } from "./ui/ExpandingPanelAccordion";

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
      <div className="mb-16 px-6 md:px-12 lg:px-24 mx-auto max-w-[1400px]">
        <h2 className="text-5xl md:text-7xl lg:text-8xl font-serif text-[#0F2E18] mb-6 text-left">
          Part Two: <br />Capy China Trip
        </h2>
        <div className="h-1 w-24 bg-[#1A4D2E] mb-8" />

        <p className="text-xl text-[#0F2E18]/80 max-w-2xl font-light text-left">
          The best immersive and authentic China experience you can expect.
          You have time to self-explore while we as a family, have your back!
        </p>
      </div>

      <div className="w-full">
        <ExpandingPanelAccordion panels={tripPanels} />
      </div>
    </section>
  );
}
