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

export default function Gallery() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [zoom, setZoom] = useState(1);
  const [isMaximized, setIsMaximized] = useState(false);

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
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % images.length);
      setZoom(1);
    }
  };

  const prevImage = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + images.length) % images.length);
      setZoom(1);
    }
  };

  const zoomIn = () => setZoom((z) => Math.min(z + 0.25, 3));
  const zoomOut = () => setZoom((z) => Math.max(z - 0.25, 1));
  const toggleMaximize = () => setIsMaximized((m) => !m);

  return (
    <section className="py-16 px-4 sm:px-6 bg-white rounded-lg min-h-screen scroll-mt-24" id="gallery">
      <div className="max-w-screen-xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold text-center mb-10 text-blue-900"
        >
          {/* Life at Montessori */}
         Cherished Memories
          <span className="block w-60 h-1 bg-red-500 mt-3 mx-auto rounded-full"></span>
        </motion.h2>

        <motion.div
          ref={ref}
          className="grid grid-cols-2 gap-1.5 sm:grid-cols-2 md:grid-cols-4 md:gap-6"
        >
          {images.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: index * 0.05, duration: 0.3 }}
              className="overflow-hidden rounded-[20px] sm:rounded-[20px] md:rounded-2xl shadow-md group cursor-pointer"
              onClick={() => openLightbox(index)}
            >
              <img
                src={src}
                alt={`Gallery image ${index + 1}`}
                className="w-full h-28 sm:h-32 md:h-48 object-cover transform group-hover:scale-105 transition-transform duration-300"
              />
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-14">
          <a
            href="#full-gallery"
            className="inline-block px-8 py-3 text-white text-base font-semibold bg-red-600 hover:bg-red-700 rounded-full transition"
          >
            View Gallery
          </a>
        </div>

        <div className="text-center mt-6 text-blue-900 font-semibold text-base">
          See Our Montessori Photo Gallery!
        </div>
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
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
              src={images[lightboxIndex]}
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
