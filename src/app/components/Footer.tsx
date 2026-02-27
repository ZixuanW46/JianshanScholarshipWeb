export default function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-[#FDFBF7] pt-20 md:pt-32 pb-8 px-6 md:px-12 lg:px-24 rounded-t-[4rem] relative z-20 -mt-24">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-start mb-24 gap-16 lg:gap-10">
          <div className="max-w-md">
            <h2 className="text-4xl md:text-5xl font-serif mb-6 text-[#FDFBF7]">Jianshan<br />Scholarship</h2>
            <p className="text-[#FDFBF7]/60 text-lg font-light leading-relaxed">
              Empowering the next generation of global thinkers through adventure, discovery, and real connections.
            </p>
          </div>

          <div className="flex gap-16 md:gap-24 text-sm font-mono items-start">
            <div className="flex flex-col gap-5">
              <span className="text-[#1A4D2E] uppercase tracking-widest font-bold mb-2">Explore</span>
              <a href="#about" className="text-[#FDFBF7]/70 hover:text-[#FDFBF7] transition-colors">About</a>
              <a href="#academy" className="text-[#FDFBF7]/70 hover:text-[#FDFBF7] transition-colors">Academy</a>
              <a href="#china-trip" className="text-[#FDFBF7]/70 hover:text-[#FDFBF7] transition-colors">China Trip</a>
            </div>
            <div className="flex flex-col gap-5">
              <span className="text-[#1A4D2E] uppercase tracking-widest font-bold mb-2">Connect</span>
              <a href="#" className="text-[#FDFBF7]/70 hover:text-[#FDFBF7] transition-colors">Instagram</a>
              <a href="#" className="text-[#FDFBF7]/70 hover:text-[#FDFBF7] transition-colors">LinkedIn</a>
              <a href="#" className="text-[#FDFBF7]/70 hover:text-[#FDFBF7] transition-colors">Contact</a>
            </div>
          </div>
        </div>

        <div className="border-t border-[#FDFBF7]/10 pt-8 flex flex-col md:flex-row justify-between items-center text-[#FDFBF7]/40 text-xs font-mono gap-6 md:gap-0">
          <div className="flex items-center gap-3">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-green-500 tracking-widest uppercase">System.Operational</span>
          </div>

          <p className="order-last md:order-none">© 2026 Jianshan Scholarship.</p>

          <div className="flex gap-6 md:gap-8">
            <a href="#" className="hover:text-[#FDFBF7] transition-colors">Privacy</a>
            <a href="#" className="hover:text-[#FDFBF7] transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
