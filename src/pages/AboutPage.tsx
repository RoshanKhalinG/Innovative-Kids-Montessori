import About from '../components/About/About';
import WhyChoose from '../components/About/KeyInfo';
import Mission from '../components/About/Mission';

export default function AboutPage() {
  return (
    <main className="pt-20">
      <About />
      <Mission />
      <WhyChoose />
    </main>
  );
}
