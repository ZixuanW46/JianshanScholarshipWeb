import YouTubeVideoCard from "../ui/YouTubeVideoCard";

const stats = [
    { value: "11", label: "Days" },
    { value: "3", label: "Cities" },
    { value: "20+", label: "Experiences" },
    { value: "10–20", label: "Per Cohort" },
];

const CHINA_TRIP_VIDEO_ID = "YQWtGsSn2tg";

export default function ChinaTripVideoIntro() {
    return (
        <section className="bg-[#0A0A0A] text-[#FDFBF7] py-24 md:py-32">
            <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24">
                {/* Video Embed */}
                <YouTubeVideoCard
                    videoId={CHINA_TRIP_VIDEO_ID}
                    title="China Trip Film"
                    quote='"This is our story. Summer 2024."'
                    posterSrc="/video_thumbnail/china_trip.jpg"
                    wrapperClassName="mx-auto mb-16 max-w-[960px]"
                    dialogContentClassName="sm:max-w-[960px]"
                />

                {/* Stats Bar */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4 mb-16 max-w-[960px] mx-auto">
                    {stats.map((stat) => (
                        <div key={stat.label} className="text-center">
                            <div className="text-3xl md:text-4xl font-sans font-bold text-[#FDFBF7] tracking-tight mb-1">
                                {stat.value}
                            </div>
                            <div className="text-[10px] md:text-xs tracking-[0.15em] uppercase text-[#FDFBF7]/40 font-medium">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Body Copy */}
                <div className="max-w-[700px] mx-auto text-center">
                    <p className="text-lg md:text-xl text-[#FDFBF7]/60 leading-relaxed font-light">
                        The best immersive and authentic China experience you can expect — ancient temples, breathtaking landscapes, and neon-lit skylines, all in one journey.
                    </p>
                    <p className="text-lg md:text-xl text-[#FDFBF7]/80 leading-relaxed font-light mt-6">
                        Travel with Cambridge peers. Guided by locals. Powered by curiosity.
                    </p>
                </div>
            </div>
        </section>
    );
}
