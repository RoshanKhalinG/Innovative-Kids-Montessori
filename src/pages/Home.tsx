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
import { newsData } from './newsData';
import { Link } from 'react-router-dom';
import { FaUser, FaCalendarAlt, FaListAlt, FaComments } from 'react-icons/fa';

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
      {/* Featured News Section */}
      <section className="max-w-5xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">Latest News & Articles</h2>
        <div className="grid gap-8 md:grid-cols-2">
          {newsData.slice(0, 2).map(article => (
            <Link
              to={`/news/${article.id}`}
              key={article.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col hover:shadow-2xl transition group"
              style={{ textDecoration: 'none' }}
            >
              <img src={article.image} alt={article.title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
              <div className="p-6 flex flex-col flex-1">
                {/* Meta Info Bar */}
                <div className="flex flex-wrap items-center text-gray-400 text-xs mb-2 gap-3">
                  <span className="flex items-center gap-1"><FaUser /> {article.author}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1"><FaCalendarAlt /> {new Date(article.date).toLocaleDateString()}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1"><FaListAlt /> {article.category}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1"><FaComments /> {article.commentsCount} Comments</span>
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-2 group-hover:text-[#fe6d16] transition">{article.title}</h3>
                <p className="text-gray-700 mb-4 flex-1">{article.excerpt}</p>
                <span className="mt-auto inline-block px-6 py-2 bg-[#fe6d16] text-white font-semibold rounded-full hover:bg-orange-600 transition w-max self-center">Read More</span>
              </div>
            </Link>
          ))}
        </div>
      </section>
      <Map />
      <Contact />
    </main>
  );
}
