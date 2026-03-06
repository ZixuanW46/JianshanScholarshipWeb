import { useEffect } from "react";
import Header from "../Header";
import Footer from "../Footer";
import SectionTransition from "../ui/SectionTransition";
import ChinaTripHero from "./ChinaTripHero";
import ChinaTripVideoIntro from "./ChinaTripVideoIntro";
import ChinaTripHighlights from "./ChinaTripHighlights";
import ChinaTripCrew from "./ChinaTripCrew";
import ChinaTripCities from "./ChinaTripCities";
import ChinaTripPracticalInfo from "./ChinaTripPracticalInfo";
import ChinaTripPricing from "./ChinaTripPricing";
import ChinaTripTimeline from "./ChinaTripTimeline";
import ChinaTripTestimonials from "./ChinaTripTestimonials";
import ChinaTripCTA from "./ChinaTripCTA";
import FAQ from "../FAQ";
import AcademyContact from "../academy/AcademyContact";

export default function ChinaTripPage() {
    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Header />
            <main>
                <ChinaTripHero />
                <ChinaTripVideoIntro />
                <SectionTransition fromColor="#0A0A0A" toColor="#FDFBF7" />

                {/* Highlights */}
                <ChinaTripHighlights />

                {/* Crew */}
                <ChinaTripCrew />

                {/* Practical Info & Pricing */}

                <ChinaTripPracticalInfo />
                <SectionTransition fromColor="#FDFBF7" toColor="#0A0A0A" />
                <ChinaTripPricing />

                {/* Timeline */}
                <SectionTransition fromColor="#0A0A0A" toColor="#FDFBF7" />
                <ChinaTripTimeline />
                <SectionTransition fromColor="#FDFBF7" toColor="#1A4D2E" />

                {/* Testimonials */}
                <ChinaTripTestimonials />
                <SectionTransition fromColor="#1A4D2E" toColor="#0A0A0A" />

                {/* CTA */}
                <ChinaTripCTA />
                <SectionTransition
                    fromColor="#0A0A0A"
                    toColor="#FDFBF7"
                    fromNoiseOpacity={0.12}
                    fromGlowColor="#D85C3C"
                    fromGlowOpacity={0.15}
                    fromGlowSize="60%"
                />

                {/* FAQ & Contact (Reused components) */}
                <FAQ />
                <AcademyContact />
            </main>
            <Footer />
        </>
    );
}
