import { ArrowRight } from "lucide-react";
import { Link } from "react-router";
import YouTubeVideoCard from "../ui/YouTubeVideoCard";

const ACADEMY_INTERVIEWS_VIDEO_ID = "ruNYftEiTAc";

export default function AcademyInterviews() {
    return (
        <section className="bg-[#FDFBF7] text-[#0A0A0A] py-24 md:py-32">
            <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24">
                {/* Eyebrow */}
                <div className="flex items-center gap-6 mb-8">
                    <div className="h-[1px] w-12 bg-[#0F2E18]/30" />
                    <span className="text-[#0F2E18]/60 tracking-[0.2em] font-sans text-xs md:text-sm font-semibold uppercase">
                        Hear from Past Scholars
                    </span>
                </div>

                <h2 className="text-4xl md:text-6xl font-sans font-bold text-[#0A0A0A] tracking-tighter leading-[1.05] mb-4">
                    What's it{" "}
                    <span className="font-serif italic font-normal text-[#D85C3C]">actually</span>{" "}
                    like?
                </h2>
                <p className="text-base md:text-lg text-[#0A0A0A]/50 font-light max-w-[500px] mb-12">
                    Don't just take our word for it. Hear directly from Cambridge scholars who've been there.
                </p>

                {/* Video */}
                <YouTubeVideoCard
                    videoId={ACADEMY_INTERVIEWS_VIDEO_ID}
                    title="Past Scholar Stories"
                    quote='"Hear directly from Cambridge scholars who have lived it."'
                    posterSrc="/video_thumbnail/academy_interview.png"
                    wrapperClassName="mb-12 max-w-[960px]"
                    previewClassName="border-[#0A0A0A]/10 shadow-[0_8px_40px_rgba(0,0,0,0.12)]"
                    dialogContentClassName="sm:max-w-[960px]"
                />

                {/* Link to past scholars */}
                <Link
                    to="/scholars"
                    className="group inline-flex items-center gap-3 text-[#0F2E18] font-medium hover:gap-5 transition-all duration-300"
                >
                    Meet more past Jianshan Scholars
                    <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
            </div>
        </section>
    );
}
