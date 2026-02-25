import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Section } from "./ui/Section";
import { Button } from "./ui/Button";

const FeatureItem = ({ title, image, description }: { title: string, image: string, description?: string }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="group cursor-pointer"
  >
    <div className="aspect-[3/4] overflow-hidden rounded-xl mb-6 relative">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
      />
      <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
    </div>
    <h4 className="text-2xl font-serif text-[#0F2E18] mb-2">{title}</h4>
    {description && <p className="text-[#0F2E18]/70">{description}</p>}
  </motion.div>
);

export default function ChinaTrip() {
  return (
    <Section id="china-trip" className="bg-[#FDFBF7]">
      <div className="mb-20">
        <h2 className="text-5xl md:text-7xl font-serif text-[#0F2E18] mb-6">Part Two: <br/>Capy China Trip</h2>
        <div className="h-1 w-24 bg-[#1A4D2E]" />
        
        <p className="mt-8 text-xl text-[#0F2E18]/70 max-w-2xl">
          The best immersive and authentic China experience you can expect. 
          You have time to self-explore while we as a family, have your back!
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-24">
        <FeatureItem 
          title="The Echo of the Ancient" 
          image="https://images.unsplash.com/photo-1718248336966-70d17f2dbfd7?q=80&w=1080&auto=format&fit=crop"
          description="Walk through history in centuries-old temples and palaces."
        />
        <FeatureItem 
          title="Breathtaking Landscapes" 
          image="https://images.unsplash.com/photo-1750610133141-c5cd9da6bfc7?q=80&w=1080&auto=format&fit=crop"
          description="From misty mountains to serene rivers, witness nature's art."
        />
        <FeatureItem 
          title="The Real-life Cyberpunk" 
          image="https://images.unsplash.com/photo-1690177396781-1d6609f06046?q=80&w=1080&auto=format&fit=crop"
          description="Experience the neon-lit futuristic energy of modern China."
        />
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
        <div className="relative aspect-video rounded-2xl overflow-hidden">
          <img 
             src="https://images.unsplash.com/photo-1758272959994-f1a4beffa257?q=80&w=1080&auto=format&fit=crop" 
             alt="Travel Crew"
             className="w-full h-full object-cover"
          />
        </div>
        <div className="space-y-6">
           <h3 className="text-3xl md:text-4xl font-serif text-[#0F2E18]">The coolest travel crew out there</h3>
           <p className="text-lg text-[#0F2E18]/70 leading-relaxed">
             Cambridge peers just like you! Travel, laugh, and explore with a group of like-minded scholars who will become your lifelong friends.
           </p>
        </div>
      </div>

      {/* Link Block */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mt-12 relative rounded-3xl overflow-hidden h-96 group cursor-pointer"
      >
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1765338915293-12cbbb7140d5?q=80&w=1080&auto=format&fit=crop" 
            alt="Trip Experience" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-[#0F2E18]/60 group-hover:bg-[#0F2E18]/50 transition-colors" />
        </div>
        
        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center p-8">
          <h3 className="text-3xl md:text-5xl font-serif text-[#FDFBF7] mb-8">
            Learn more about the experience of Capy China Trip
          </h3>
          <Button variant="outline" className="border-[#FDFBF7] text-[#FDFBF7] hover:bg-[#FDFBF7] hover:text-[#0F2E18]">
            Explore the Trip <ArrowRight />
          </Button>
        </div>
      </motion.div>
    </Section>
  );
}
