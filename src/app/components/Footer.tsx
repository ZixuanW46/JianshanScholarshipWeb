import { Section } from "./ui/Section";

export default function Footer() {
  return (
    <footer className="bg-[#0F2E18] text-[#FDFBF7] py-20">
      <Section className="py-0 md:py-0">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-20 gap-10">
          <div className="max-w-md">
            <h2 className="text-4xl font-serif mb-6">Jianshan Scholarship</h2>
            <p className="text-[#FDFBF7]/60 text-lg">
              Empowering the next generation of global thinkers through adventure, discovery, and family.
            </p>
          </div>
          
          <div className="flex gap-12 text-lg">
            <div className="flex flex-col gap-4">
              <span className="text-[#FDFBF7]/40 uppercase text-sm tracking-widest mb-2">Explore</span>
              <a href="#about" className="hover:text-[#E8F3E8] transition-colors">About</a>
              <a href="#academy" className="hover:text-[#E8F3E8] transition-colors">Academy</a>
              <a href="#china-trip" className="hover:text-[#E8F3E8] transition-colors">China Trip</a>
            </div>
            <div className="flex flex-col gap-4">
              <span className="text-[#FDFBF7]/40 uppercase text-sm tracking-widest mb-2">Connect</span>
              <a href="#" className="hover:text-[#E8F3E8] transition-colors">Instagram</a>
              <a href="#" className="hover:text-[#E8F3E8] transition-colors">LinkedIn</a>
              <a href="#" className="hover:text-[#E8F3E8] transition-colors">Contact</a>
            </div>
          </div>
        </div>

        <div className="border-t border-[#FDFBF7]/10 pt-8 flex flex-col md:flex-row justify-between items-center text-[#FDFBF7]/40 text-sm">
          <p>© 2026 Jianshan Scholarship. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-[#FDFBF7]">Privacy Policy</a>
            <a href="#" className="hover:text-[#FDFBF7]">Terms of Service</a>
          </div>
        </div>
      </Section>
    </footer>
  );
}
