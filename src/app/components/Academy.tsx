import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Section } from "./ui/Section";
import { Button } from "./ui/Button";

const Feature = ({ 
  title, 
  children, 
  image, 
  reverse = false 
}: { 
  title: string; 
  children: React.ReactNode; 
  image: string; 
  reverse?: boolean; 
}) => (
  <div className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 md:gap-24 items-center py-12`}>
    <div className="w-full md:w-1/2">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl"
      >
        <img src={image} alt={title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
      </motion.div>
    </div>
    <div className="w-full md:w-1/2 space-y-6">
      <motion.div
        initial={{ opacity: 0, x: reverse ? -30 : 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h3 className="text-3xl md:text-4xl font-serif text-[#0F2E18] mb-4">{title}</h3>
        <div className="text-lg text-[#0F2E18]/70 space-y-4 leading-relaxed">
          {children}
        </div>
      </motion.div>
    </div>
  </div>
);

export default function Academy() {
  return (
    <Section id="academy" className="bg-[#FDFBF7]">
      <div className="mb-20">
        <h2 className="text-5xl md:text-7xl font-serif text-[#0F2E18] mb-6">Part One: <br/>Jianshan Academy</h2>
        <div className="h-1 w-24 bg-[#1A4D2E]" />
      </div>

      <div className="space-y-12">
        <Feature 
          title="Academic Exploration" 
          image="https://images.unsplash.com/photo-1557734864-c78b6dfef1b1?q=80&w=1080&auto=format&fit=crop"
        >
          <p>
            Share your passion and perspective to inspire a new generation of students.
          </p>
          <p>
            We don't set constraints, students can explore whatever and <span className="underline decoration-[#1A4D2E] underline-offset-4">however</span> they want. 
            In Jianshan Academy, even raw knowledge itself is secondary. It's your passion that truly ignites curiosity and possibility.
          </p>
        </Feature>

        <Feature 
          title="Cultural Exchange" 
          image="https://images.unsplash.com/photo-1758270705657-f28eec1a5694?q=80&w=1080&auto=format&fit=crop"
          reverse
        >
          <p>
            Share your cultural background while the students share theirs.
          </p>
          <p>
            We know the best way to learn about a culture is from real people. In Jianshan Academy, 
            you meet people with different backgrounds. They can be your Cambridge peers, Chinese students, 
            and even cool Chinese content creators!
          </p>
        </Feature>
      </div>

      {/* Link Block */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mt-24 relative rounded-3xl overflow-hidden h-96 group cursor-pointer"
      >
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1764032760214-bbf340016105?q=80&w=1080&auto=format&fit=crop" 
            alt="Academy Experience" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-[#0F2E18]/60 group-hover:bg-[#0F2E18]/50 transition-colors" />
        </div>
        
        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center p-8">
          <h3 className="text-3xl md:text-5xl font-serif text-[#FDFBF7] mb-8">
            Learn more about the experience of Jianshan Academy
          </h3>
          <Button variant="outline" className="border-[#FDFBF7] text-[#FDFBF7] hover:bg-[#FDFBF7] hover:text-[#0F2E18]">
            Explore Academy <ArrowRight />
          </Button>
        </div>
      </motion.div>
    </Section>
  );
}
