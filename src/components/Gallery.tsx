import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  FaChevronLeft,
  FaChevronRight,
  FaSearchPlus,
  FaSearchMinus,
  FaExpand,
  FaCompress,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

import image1 from '../assets/images/11.jpg';
import image2 from '../assets/2.jpg';
import image3 from '../assets/3.jpg';
import image4 from '../assets/4.jpg';
import image5 from '../assets/5.jpg';
import image6 from '../assets/6.jpg';
import image7 from '../assets/7.jpg';
import image8 from '../assets/images/8.jpg';
import image9 from '../assets/images/9.jpg';
import image10 from '../assets/images/10.jpg';
import image11 from '../assets/images/11.jpg';
import image12 from '../assets/images/12.jpg';
import image13 from '../assets/images/13.jpg';
import image14 from '../assets/images/14.jpg';
import image15 from '../assets/images/15.jpg';
import image16 from '../assets/images/16.jpg';

const images = [
  image1, image2, image3, image4, image5,
  image6, image7, image8, image9, image10, 
  image11, image12, image13, image14, image15, image16,
];

const categories = [
  { key: 'all', label: 'All' },
  { key: 'play', label: 'Play Session' },
  { key: 'learning', label: 'Learning Session' },
  { key: 'fieldtrips', label: 'Field Trips' },
];

const categorizedImages = {
  all: images,
  play: [],
  learning: [],
  fieldtrips: [],
};

export default function Gallery({ showViewGalleryButton = true }: { showViewGalleryButton?: boolean }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [zoom, setZoom] = useState(1);
  const [isMaximized, setIsMaximized] = useState(false);
  const [activeCategory, setActiveCategory] = useState<'all' | 'play' | 'learning' | 'fieldtrips'>('all');

  useEffect(() => {
    document.body.style.overflow = lightboxIndex !== null ? 'hidden' : 'auto';
    return () => { document.body.style.overflow = 'auto'; };
  }, [lightboxIndex]);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setZoom(1);
    setIsMaximized(false);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
    setZoom(1);
    setIsMaximized(false);
  };

  const nextImage = () => {
    const imgs = categorizedImages[activeCategory];
    if (lightboxIndex !== null && imgs.length > 0) {
      setLightboxIndex((lightboxIndex + 1) % imgs.length);
      setZoom(1);
    }
  };

  const prevImage = () => {
    const imgs = categorizedImages[activeCategory];
    if (lightboxIndex !== null && imgs.length > 0) {
      setLightboxIndex((lightboxIndex - 1 + imgs.length) % imgs.length);
      setZoom(1);
    }
  };

  const zoomIn = () => setZoom((z) => Math.min(z + 0.25, 3));
  const zoomOut = () => setZoom((z) => Math.max(z - 0.25, 1));
  const toggleMaximize = () => setIsMaximized((m) => !m);

  // Get images for the current category
  const currentImages = categorizedImages[activeCategory];

  return (
    <section className="py-16 px-4 sm:px-6 bg-white rounded-lg min-h-screen scroll-mt-24" id="gallery">
      <div className="max-w-screen-xl mx-auto">
        {/* Custom Header and Description */}
        <div className="text-center mb-8">
          <div className="text-red-500 text-lg font-semibold mb-2">Photo Gallery</div>
          <h2 className="text-4xl sm:text-5xl font-bold text-blue-900 mb-2" style={{ fontFamily: 'cursive' }}>
            An environment for learning
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            A nurturing environment where learning flourishes.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-col items-center mb-6">
          {/* Tabs row for mobile: All, Play Session, Learning Session */}
          <div className="flex gap-2 sm:gap-6 overflow-x-auto no-scrollbar w-full max-w-xs sm:max-w-none px-1 md:flex-row md:justify-center">
            {categories.filter(cat => cat.key !== 'fieldtrips').map((cat) => (
              <button
                key={cat.key}
                className={`min-w-max px-2 sm:px-4 py-1 sm:py-2 text-base sm:text-xl font-semibold pb-1 border-b-4 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 ${
                  activeCategory === cat.key
                    ? 'text-purple-700 border-yellow-400'
                    : 'text-blue-900 border-transparent hover:text-purple-700'
                }`}
                style={{ borderRadius: 4 }}
                onClick={() => {
                  setActiveCategory(cat.key as 'all' | 'play' | 'learning' | 'fieldtrips');
                  setLightboxIndex(null);
                }}
              >
                {cat.label}
              </button>
            ))}
            {/* Field Trips tab for desktop (md and up) */}
            <button
              className={`hidden md:inline min-w-max px-2 sm:px-4 py-1 sm:py-2 text-base sm:text-xl font-semibold pb-1 border-b-4 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 ${
                activeCategory === 'fieldtrips'
                  ? 'text-purple-700 border-yellow-400'
                  : 'text-blue-900 border-transparent hover:text-purple-700'
              }`}
              style={{ borderRadius: 4 }}
              onClick={() => {
                setActiveCategory('fieldtrips');
                setLightboxIndex(null);
              }}
            >
              Field Trips
            </button>
          </div>
          {/* Field Trips tab for mobile only */}
          <div className="mt-2 flex justify-center w-full md:hidden">
            <button
              className={`min-w-max px-2 sm:px-4 py-1 sm:py-2 text-base sm:text-xl font-semibold pb-1 border-b-4 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 ${
                activeCategory === 'fieldtrips'
                  ? 'text-purple-700 border-yellow-400'
                  : 'text-blue-900 border-transparent hover:text-purple-700'
              }`}
              style={{ borderRadius: 4 }}
              onClick={() => {
                setActiveCategory('fieldtrips');
                setLightboxIndex(null);
              }}
            >
              Field Trips
            </button>
          </div>
        </div>

        {/* Gallery Grid */}
        <motion.div
          ref={ref}
          className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-6 mb-2"
        >
          {currentImages.length === 0 ? (
            <div className="col-span-2 md:col-span-4 text-center text-gray-400 py-16 text-xl">No images in this category yet.</div>
          ) : (
            currentImages.map((src, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: index * 0.05, duration: 0.3 }}
                className="overflow-hidden rounded-2xl shadow-md group cursor-pointer aspect-[4/3] bg-gray-100"
                onClick={() => openLightbox(index)}
                style={{ minHeight: 0 }}
              >
                <img
                  src={src}
                  alt={`Gallery image ${index + 1}`}
                  className="w-full h-full object-cover rounded-2xl group-hover:scale-105 transition-transform duration-300"
                  draggable={false}
                />
              </motion.div>
            ))
          )}
        </motion.div>

        {showViewGalleryButton && (
          <div className="text-center mt-14">
            <Link
              to="/gallery"
              className="inline-block px-8 py-3 text-white text-base font-semibold bg-red-600 hover:bg-red-700 rounded-full transition"
            >
              View Gallery
            </Link>
          </div>
        )}
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && currentImages.length > 0 && (
        <div className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-md flex flex-col items-center justify-center z-50 p-4">
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white text-3xl font-bold hover:text-red-500 z-50"
            aria-label="Close"
          >
            &times;
          </button>

          {/* Image */}
          <div className={`flex items-center justify-center ${isMaximized ? 'w-full h-full' : 'max-w-4xl max-h-[80vh]'} overflow-hidden`}>
            <img
              src={currentImages[lightboxIndex]}
              alt={`Lightbox image ${lightboxIndex + 1}`}
              style={{ transform: `scale(${zoom})` }}
              className={`transition-transform duration-300 select-none object-contain 
                          ${isMaximized ? 'w-full h-full' : 'max-w-full max-h-full'}`}
              draggable={false}
            />
          </div>

          {/* Controls */}
          <div className="flex space-x-4 mt-6 text-white z-40">
            <button onClick={prevImage} className="bg-red-600 hover:bg-red-700 p-3 rounded-lg">
              <FaChevronLeft size={20} />
            </button>
            <button onClick={nextImage} className="bg-red-600 hover:bg-red-700 p-3 rounded-lg">
              <FaChevronRight size={20} />
            </button>
            <button onClick={zoomIn} disabled={zoom >= 3} className="bg-red-600 hover:bg-red-700 p-3 rounded-lg disabled:opacity-50">
              <FaSearchPlus size={20} />
            </button>
            <button onClick={zoomOut} disabled={zoom <= 1} className="bg-red-600 hover:bg-red-700 p-3 rounded-lg disabled:opacity-50">
              <FaSearchMinus size={20} />
            </button>
            <button onClick={toggleMaximize} className="bg-red-600 hover:bg-red-700 p-3 rounded-lg">
              {isMaximized ? <FaCompress size={20} /> : <FaExpand size={20} />}
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
