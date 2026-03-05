import { useEffect } from "react";
import Header from "../Header";
import Footer from "../Footer";
import SectionTransition from "../ui/SectionTransition";
import AcademyHero from "./AcademyHero";
import AcademyVideoIntro from "./AcademyVideoIntro";
import AcademyAbout from "./AcademyAbout";
import AcademyExperience from "./AcademyExperience";
import AcademyPhilosophyCallout from "./AcademyPhilosophyCallout";
import AcademyInterviews from "./AcademyInterviews";
import AcademyCTA from "./AcademyCTA";
import AcademyContact from "./AcademyContact";

export default function AcademyPage() {
    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Header />
            <main>
                <AcademyHero />
                <AcademyVideoIntro />
                <SectionTransition fromColor="#0A0A0A" toColor="#FDFBF7" />
                <AcademyAbout />
                <SectionTransition fromColor="#FDFBF7" toColor="#0A0A0A" />
                <AcademyExperience />
                <SectionTransition fromColor="#0A0A0A" toColor="#0F2E18" />
                <AcademyPhilosophyCallout />
                <SectionTransition fromColor="#0F2E18" toColor="#FDFBF7" />
                <AcademyInterviews />
                <SectionTransition fromColor="#FDFBF7" toColor="#0A0A0A" />
                <AcademyCTA />
                <SectionTransition fromColor="#0A0A0A" toColor="#FDFBF7" />
                <AcademyContact />
            </main>
            <Footer />
        </>
    );
}
