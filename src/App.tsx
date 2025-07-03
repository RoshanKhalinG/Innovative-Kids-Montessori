// src/App.tsx
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Features from './components/Features';
import About from './components/About/About';
import KeyInfo from './components/About/KeyInfo';
import Mission from './components/About/Mission';
import Faq from './components/Faq';
import Gallery from './components/Gallery';
import Map from './components/Map';
import Contact from './components/Contact';
import Footer from './components/Footer';

import AboutPage from './pages/AboutPage';
import PrincipalSpeechPage from './pages/PrincipalSpeechPage';
import TeachersPage from './pages/TeachersPage'; // ✅ New import
import NewsAndArticlesPage from './pages/NewsAndArticlesPage';
import NewsArticleDetailPage from './pages/NewsArticleDetailPage';
import GalleryPage from './pages/GalleryPage'; // Import GalleryPage

function App() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Features />
              <About />
              <KeyInfo />
              <Mission />
              <Faq />
              <Gallery />
              <Map />
              <Contact />
            </>
          }
        />

        {/* About Subpages */}
        <Route path="/about-innovative" element={<AboutPage />} />
        <Route path="/principal-speech" element={<PrincipalSpeechPage />} />
        <Route path="/teachers" element={<TeachersPage />} /> {/* ✅ New route */}
        <Route path="/news" element={<NewsAndArticlesPage />} />
        <Route path="/news/:id" element={<NewsArticleDetailPage />} />
        <Route path="/gallery" element={<GalleryPage />} /> {/* New Gallery route */}
      </Routes>
      <Footer />
    </main>
  );
}

export default App;
