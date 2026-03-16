import { useEffect, useState } from "react";
import Header from "../Header";
import Footer from "../Footer";
import SectionTransition from "../ui/SectionTransition";
import ScholarsHeroCollage from "./ScholarsHeroCollage";
import ScholarsList from "./ScholarsList";
import AcademyContact from "../academy/AcademyContact";
import { PUBLISHED_PAST_SCHOLARS, type PastScholar } from "../../data/pastScholars";

function shuffleScholars(scholars: PastScholar[]) {
    const shuffled = [...scholars];

    for (let index = shuffled.length - 1; index > 0; index -= 1) {
        const randomIndex = Math.floor(Math.random() * (index + 1));
        [shuffled[index], shuffled[randomIndex]] = [shuffled[randomIndex], shuffled[index]];
    }

    return shuffled;
}

export default function PastScholarsPage() {
    const [shuffledScholars] = useState(() => shuffleScholars(PUBLISHED_PAST_SCHOLARS));

    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Header />
            <main className="bg-[#0A0A0A] min-h-screen">
                <ScholarsHeroCollage />
                <SectionTransition fromColor="#0A0A0A" toColor="#FFFFFF" />
                <ScholarsList scholars={shuffledScholars} />

                <AcademyContact />
            </main>
            <Footer />
        </>
    );
}
