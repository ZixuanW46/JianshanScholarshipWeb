import YouTubeVideoCard from "../ui/YouTubeVideoCard";

const stats = [
    { value: "56", label: "Cambridge Scholars" },
    { value: "21", label: "Countries" },
    { value: "33", label: "Disciplines" },
    { value: "112", label: "Unique Courses" },
    { value: "400+", label: "Students" },
];

const ACADEMY_VIDEO_ID = "dKzVdWw9Zn0";

export default function AcademyVideoIntro() {
    return (
        <section className="bg-[#0A0A0A] text-[#FDFBF7] py-24 md:py-32">
            <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24">
                {/* Video Embed */}
                <YouTubeVideoCard
                    videoId={ACADEMY_VIDEO_ID}
                    title="Academy Program Film"
                    quote='"Last Summer, We Sparked Something."'
                    posterSrc="/video_thumbnail/academy_1.jpg"
                    wrapperClassName="mx-auto mb-16 max-w-[960px]"
                    dialogContentClassName="sm:max-w-[960px]"
                />

                {/* Stats Bar */}
                <div className="mx-auto mb-16 flex max-w-[960px] flex-wrap justify-center gap-6 md:grid md:grid-cols-5 md:gap-4">
                    {stats.map((stat) => (
                        <div key={stat.label} className="w-[calc(33.333%-1rem)] min-w-[110px] text-center md:w-auto">
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
                        Since the first program in 2024, we have brought 56 Cambridge scholars from 21 countries to China to create something extraordinary — 112 unique courses across 33 disciplines, and 400+ high school students who left with new passions, new friendships, and new ways of seeing the world.
                    </p>
                    <p className="text-lg md:text-xl text-[#FDFBF7]/80 leading-relaxed font-light mt-6">
                        This summer, we're doing it again — only bigger, bolder, and better.
                    </p>
                </div>
            </div>
        </section>
    );
}
