import { Navbar } from "./components/Navbar";
import { ScrollProgress } from "./components/ScrollProgress";
import { BackToTop } from "./components/BackToTop";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { TrustSection } from "./components/TrustSection";
import { WhyChooseUs } from "./components/WhyChooseUs";
import { Highlights } from "./components/Highlights";
import { Gallery } from "./components/Gallery";
import { CTA } from "./components/CTA";
import { FAQ } from "./components/FAQ";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-base">
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <TrustSection />
        <WhyChooseUs />
        <Highlights />
        <Gallery />
        <CTA />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;
