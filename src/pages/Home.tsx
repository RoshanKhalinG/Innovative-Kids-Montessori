// src/pages/Home.tsx
import Hero from '../components/Hero';
import Features from '../components/Features';
import About from '../components/About/About';
import KeyInfo from '../components/About/KeyInfo';
import Mission from '../components/About/Mission';
import Faq from '../components/Faq';
import Gallery from '../components/Gallery';
import Map from '../components/Map';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <Features />
      <About />
      <KeyInfo />
      <Mission />
      <Faq />
      <Gallery />
      <Map />
      <Contact />
    </main>
  );
}
