import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Marquee } from './components/Marquee';
import { Services } from './components/Services';
import { Values } from './components/Values';
import { GoldenRules } from './components/GoldenRules';
import { Process } from './components/Process';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';
import ServiceSection from './components/ServiceSection';
import { BIMServiceDetail } from './components/BIMServiceDetail';
import { ProjectPopup } from './components/ProjectPopup';
import { ScrollProgress } from './components/ScrollProgress';

function App() {
  return (
    <div className="relative min-h-screen bg-ink-50">
      <ScrollProgress />
      <ProjectPopup />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <ServiceSection />
        <BIMServiceDetail />
        <Services />
        <Values />
        <GoldenRules />
        <Process />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
