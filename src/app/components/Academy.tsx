import { ExpandingPanelAccordion } from "./ui/ExpandingPanelAccordion";

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
      <div className="mb-16 px-6 md:px-12 lg:px-24 mx-auto max-w-[1400px]">
        <h2 className="text-5xl md:text-7xl lg:text-8xl font-serif text-[#FDFBF7] mb-6 text-left">
          Part One: <br />Jianshan Academy
        </h2>
        <div className="h-1 w-24 bg-[#E8F3E8] opacity-50" />
      </div>

      <div className="w-full">
        <ExpandingPanelAccordion panels={academyPanels} />
      </div>
    </section>
  );
}

