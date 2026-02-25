import { motion } from "motion/react";

export default function About() {
  return (
    <section id="about" className="bg-[#0F2E18] text-[#FDFBF7] w-full relative overflow-hidden">
      <div className="grid md:grid-cols-2 min-h-screen">
        {/* Left Image - 1/2 */}
        <div className="h-[50vh] md:h-auto md:min-h-screen relative overflow-hidden order-1 md:order-1">
          <motion.img
            initial={{ scale: 1.1 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 1.5 }}
            src="https://images.unsplash.com/photo-1762114974411-6e2921da522c?q=80&w=1080&auto=format&fit=crop"
            alt="Misty Mountain"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/20" />
        </div>

        {/* Right Content - 1/2 */}
        <div className="flex flex-col justify-center p-8 md:p-20 lg:p-24 order-2 md:order-2">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[#E8F3E8]/80 text-sm uppercase tracking-widest font-semibold mb-6 block">
              About Jianshan
            </span>
            <h2 className="text-4xl md:text-6xl font-serif text-[#FDFBF7] mb-8 leading-tight">
              "Seeing the Mountain"
            </h2>
            
            <div className="space-y-6 text-lg md:text-xl text-[#FDFBF7]/80 font-light leading-relaxed">
              <p>
                The name "Jianshan" (见山), which literally translates to "Seeing the Mountain," 
                comes from a well-known Zen Buddhist parable of Zen master Qingyuan Weixin:
              </p>
              
              <blockquote className="border-l-4 border-[#FDFBF7]/30 pl-6 italic text-[#FDFBF7] my-10 text-2xl font-serif">
                "First, we see mountains as mountains. Then, mountains are no longer mountains. 
                Finally, mountains are truly mountains again."
              </blockquote>
              
              <p>
                This parable describes a path to understanding: from a superficial view to critical 
                questioning, and ultimately to a richer, more nuanced appreciation of the world.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
