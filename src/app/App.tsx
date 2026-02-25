import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Academy from "./components/Academy";
import ChinaTrip from "./components/ChinaTrip";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="bg-[#FDFBF7] min-h-screen font-sans selection:bg-[#1A4D2E] selection:text-[#FDFBF7]">
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Academy />
        <ChinaTrip />
      </main>
      <Footer />
    </div>
  );
}
