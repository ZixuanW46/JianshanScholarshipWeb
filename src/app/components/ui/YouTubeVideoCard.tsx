import { Play } from "lucide-react";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "./dialog";

type YouTubeVideoCardProps = {
    videoId: string;
    title: string;
    quote?: string;
    posterSrc?: string;
    buttonLabel?: string;
    wrapperClassName?: string;
    previewClassName?: string;
    buttonClassName?: string;
    titleClassName?: string;
    dialogContentClassName?: string;
};

function buildYouTubeEmbedUrl(videoId: string) {
    const params = new URLSearchParams({
        autoplay: "1",
        rel: "0",
    });

    return `https://www.youtube-nocookie.com/embed/${videoId}?${params.toString()}`;
}

export default function YouTubeVideoCard({
    videoId,
    title,
    quote,
    posterSrc,
    buttonLabel = "Play Video",
    wrapperClassName = "",
    previewClassName = "",
    buttonClassName = "",
    titleClassName = "",
    dialogContentClassName = "",
}: YouTubeVideoCardProps) {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <button
                    type="button"
                    className={`group relative block w-full cursor-pointer text-left ${wrapperClassName}`}
                    aria-label={`Play ${title}`}
                >
                    <div
                        className={`relative w-full aspect-[16/9] overflow-hidden rounded-2xl border border-white/10 bg-[#111] shadow-[0_0_60px_rgba(0,0,0,0.5)] ${previewClassName}`}
                    >
                        {posterSrc ? (
                            <img
                                src={posterSrc}
                                alt={title}
                                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                            />
                        ) : (
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(216,92,60,0.28),_transparent_35%),linear-gradient(135deg,_#222_0%,_#0A0A0A_100%)]" />
                        )}

                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/45" />
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_rgba(0,0,0,0.2)_55%,_rgba(0,0,0,0.68)_100%)]" />

                        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-4 px-6 text-center">
                            <div
                                className={`flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-6 py-3 backdrop-blur-md transition-all duration-300 group-hover:scale-105 group-hover:bg-white/20 ${buttonClassName}`}
                            >
                                <Play className="h-5 w-5 fill-white text-white" />
                                <span className="text-sm font-bold uppercase tracking-widest text-white">
                                    {buttonLabel}
                                </span>
                            </div>

                            <div className="space-y-2">
                                <p className={`text-base font-medium text-white/92 md:text-lg ${titleClassName}`}>
                                    {title}
                                </p>
                                {quote ? (
                                    <p className="text-sm font-serif italic tracking-wide text-white/55">
                                        {quote}
                                    </p>
                                ) : null}
                            </div>
                        </div>
                    </div>
                </button>
            </DialogTrigger>

            <DialogContent className={`w-[calc(100vw-1.5rem)] max-w-[calc(100vw-1.5rem)] border-white/10 bg-[#050505] p-1 shadow-[0_24px_120px_rgba(0,0,0,0.7)] sm:p-2 ${dialogContentClassName}`}>
                <DialogTitle className="sr-only">{title}</DialogTitle>
                <div className="overflow-hidden rounded-xl border border-white/10 bg-black">
                    <div className="aspect-[16/9] w-full">
                        <iframe
                            className="h-full w-full"
                            src={buildYouTubeEmbedUrl(videoId)}
                            title={title}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                        />
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
}
