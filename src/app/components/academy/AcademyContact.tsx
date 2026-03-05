import { Instagram, Mail } from "lucide-react";

export default function AcademyContact() {
    return (
        <section className="bg-[#FDFBF7] text-[#0A0A0A] py-24 md:py-32">
            <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24">
                <h2 className="text-3xl md:text-4xl font-sans font-bold text-[#0A0A0A] tracking-tight mb-12">
                    Stay in the loop.
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[800px]">
                    {/* Instagram */}
                    <a
                        href="https://instagram.com/camcapysoc"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-start gap-5 p-6 rounded-2xl border border-[#0A0A0A]/5 hover:border-[#0A0A0A]/15 hover:shadow-[0_4px_24px_rgba(0,0,0,0.06)] transition-all duration-300"
                    >
                        <div className="w-12 h-12 rounded-xl bg-[#0F2E18]/5 flex items-center justify-center shrink-0">
                            <Instagram size={20} className="text-[#0F2E18]" strokeWidth={1.5} />
                        </div>
                        <div>
                            <h3 className="text-base font-sans font-bold tracking-tight mb-1 group-hover:text-[#0F2E18] transition-colors">
                                @camcapysoc
                            </h3>
                            <p className="text-sm text-[#0A0A0A]/50 font-light leading-relaxed">
                                Follow for behind-the-scenes, scholar stories, and updates.
                            </p>
                        </div>
                    </a>

                    {/* Email */}
                    <a
                        href="mailto:camcapy@cambridgesu.co.uk"
                        className="group flex items-start gap-5 p-6 rounded-2xl border border-[#0A0A0A]/5 hover:border-[#0A0A0A]/15 hover:shadow-[0_4px_24px_rgba(0,0,0,0.06)] transition-all duration-300"
                    >
                        <div className="w-12 h-12 rounded-xl bg-[#0F2E18]/5 flex items-center justify-center shrink-0">
                            <Mail size={20} className="text-[#0F2E18]" strokeWidth={1.5} />
                        </div>
                        <div>
                            <h3 className="text-base font-sans font-bold tracking-tight mb-1 group-hover:text-[#0F2E18] transition-colors">
                                camcapy@cambridgesu.co.uk
                            </h3>
                            <p className="text-sm text-[#0A0A0A]/50 font-light leading-relaxed">
                                Questions? Reach us anytime.
                            </p>
                        </div>
                    </a>
                </div>
            </div>
        </section>
    );
}
