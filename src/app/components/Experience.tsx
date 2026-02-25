import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Section } from "./ui/Section";

export default function Experience() {
  return (
    <Section className="bg-[#E8F3E8]/30 py-32 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto"
      >
        <span className="text-[#1A4D2E] text-sm uppercase tracking-widest font-semibold mb-4 block">
          The Jianshan Experience
        </span>
        <h2 className="text-3xl md:text-5xl font-serif text-[#0F2E18] leading-tight">
          And we infuse this philosophy into a two-part experience designed to challenge and inspire.
        </h2>
      </motion.div>
    </Section>
  );
}
