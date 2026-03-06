import { Instagram, Mail, ArrowUpRight } from "lucide-react";

export default function AcademyContact() {
    return (
        <section className="bg-[#FDFBF7] text-[#0A0A0A] pt-24 pb-48 md:pb-[18rem] relative">
            <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 items-start">
                    <div className="md:col-span-5">
                        <h2 className="text-sm tracking-widest font-mono text-[#0A0A0A]/40 uppercase mb-4">
                            Contact
                        </h2>
                        <h3 className="text-4xl lg:text-5xl font-sans font-semibold tracking-tighter text-[#0A0A0A]">
                            Got questions? <br /> Let's talk.
                        </h3>
                    </div>
                    <div className="md:col-span-6 md:col-start-7 flex flex-col gap-6 pt-2">
                        <a
                            href="mailto:camcapy@cambridgesu.co.uk"
                            className="group block border-b border-[#0A0A0A]/10 pb-6 hover:border-[#1A4D2E] transition-colors"
                        >
                            <div className="flex justify-between items-center text-xl font-sans text-[#0A0A0A] group-hover:text-[#1A4D2E] transition-colors">
                                camcapy@cambridgesu.co.uk
                                <ArrowUpRight size={24} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:translate-x-2 group-hover:-translate-y-2 transition-all" />
                            </div>
                            <span className="text-sm text-[#0A0A0A]/40 mt-2 block font-mono">EMAIL SUPPORT</span>
                        </a>
                        <a
                            href="https://instagram.com/camcapysoc"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group block border-b border-[#0A0A0A]/10 pb-6 hover:border-[#1A4D2E] transition-colors"
                        >
                            <div className="flex justify-between items-center text-xl font-sans text-[#0A0A0A] group-hover:text-[#1A4D2E] transition-colors">
                                @camcapysoc
                                <ArrowUpRight size={24} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:translate-x-2 group-hover:-translate-y-2 transition-all" />
                            </div>
                            <span className="text-sm text-[#0A0A0A]/40 mt-2 block font-mono">FOLLOW US</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
