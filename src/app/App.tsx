import { Routes, Route } from "react-router";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Academy from "./components/Academy";
import ChinaTrip from "./components/ChinaTrip";
import ScholarGains from "./components/ScholarGains";
import ScholarshipInfo from "./components/ScholarshipInfo";
import Options2026 from "./components/Options2026";
import ApplicationProcess from "./components/ApplicationProcess";
import CTA from "./components/CTA";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import SectionTransition from "./components/ui/SectionTransition";
import LoadingScreen from "./components/LoadingScreen";
import AcademyPage from "./components/academy/AcademyPage";
import ChinaTripPage from "./components/chinatrip/ChinaTripPage";

function LandingPage() {
  return (
    <>
      <LoadingScreen />
      <Header />
      <main>
        <Hero />
        <SectionTransition fromColor="#0F2E18" toColor="#0A0A0A" />
        <About />
        <SectionTransition fromColor="#0A0A0A" toColor="#E8F3E8" />
        <Experience />
        <SectionTransition fromColor="#E8F3E8" toColor="#1A1A1A" />
        <Academy />
        <SectionTransition fromColor="#1A1A1A" toColor="#FDFBF7" />
        <ChinaTrip />
        <SectionTransition fromColor="#FDFBF7" toColor="#0A0A0A" />
        <ScholarGains />
        <SectionTransition fromColor="#0A0A0A" toColor="#F9FAFB" />
        <ScholarshipInfo />
        <Options2026 />
        <SectionTransition fromColor="#FDFBF7" toColor="#0A0A0A" />
        <ApplicationProcess />
        <CTA />
        <SectionTransition
          fromColor="#1A4D2E"
          toColor="#FDFBF7"
          fromNoiseOpacity={0.12}
          fromGlowColor="#2E8B57"
          fromGlowOpacity={0.18}
          fromGlowSize="85%"
        />
        <FAQ />
        <SectionTransition fromColor="#FDFBF7" toColor="#0A0A0A" />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <div className="bg-[#FDFBF7] min-h-screen font-sans selection:bg-[#1A4D2E] selection:text-[#FDFBF7]">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/academy" element={<AcademyPage />} />
        <Route path="/chinatrip" element={<ChinaTripPage />} />
      </Routes>
    </div>
  );
}
