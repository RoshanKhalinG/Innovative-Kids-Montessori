import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const navigate = useNavigate();

  // Handle smooth scroll when on Home page
  const scrollToHash = (hash: string) => {
    const el = document.getElementById(hash.replace('#', ''));
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate(`/#${hash.replace('#', '')}`);
    }
  };

  // Track current hash
  const [activeHash, setActiveHash] = useState(window.location.hash || '#home');

  useEffect(() => {
    setActiveHash(window.location.hash || '#home');
    const handleHashChange = () => {
      setActiveHash(window.location.hash || '#home');
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <nav className="fixed w-full z-50 bg-white/95 backdrop-blur-sm shadow-lg">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center py-4 sm:py-6">
          {/* Logo */}
          <a href="/" className="flex items-center space-x-3">
            <img src="/img/logo.png" alt="Logo" className="w-20 h-20 object-contain" />
            <div>
              <h1 className="text-2xl font-extrabold text-orange-500">Innovative</h1>
              <p className="text-sm -mt-1 text-green-600">Kids Montessori</p>
            </div>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex flex-1 items-center justify-between">
            <div className="flex justify-center space-x-8 flex-1 text-gray-700 text-lg">
              <NavLink href="#home" isActive={activeHash === '#home'} scrollToHash={scrollToHash}>Home</NavLink>

              {/* About Dropdown */}
              <div className="relative group">
                <NavLink href="#about" isActive={activeHash.startsWith('#about')} scrollToHash={scrollToHash}>About</NavLink>
                <div className="absolute left-0 mt-2 w-48 bg-white border rounded-lg shadow-lg opacity-0 group-hover:opacity-100 group-hover:translate-y-1 transition-all duration-300 z-50">
                  <Link to="/about-innovative" className="block px-4 py-2 text-gray-700 hover:bg-green-100">
                    About Innovative
                  </Link>
                  <a href="#about-teachers" className="block px-4 py-2 text-gray-700 hover:bg-green-100" onClick={(e) => { e.preventDefault(); scrollToHash('#about-teachers'); }}>
                    Teachers
                  </a>
                  <a href="#about-principal" className="block px-4 py-2 text-gray-700 hover:bg-green-100" onClick={(e) => { e.preventDefault(); scrollToHash('#about-principal'); }}>
                    Principal Speech
                  </a>
                </div>
              </div>

              <NavLink href="#blog" isActive={activeHash === '#blog'} scrollToHash={scrollToHash}>News & Article</NavLink>
              <NavLink href="#gallery" isActive={activeHash === '#gallery'} scrollToHash={scrollToHash}>Gallery</NavLink>
              <NavLink href="#faq" isActive={activeHash === '#faq'} scrollToHash={scrollToHash}>Faq</NavLink>
              <NavLink href="#contact" isActive={activeHash === '#contact'} scrollToHash={scrollToHash}>Contact</NavLink>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-green-400 to-green-600 text-white px-6 py-2 rounded-full font-semibold transition-all shadow hover:from-green-600 hover:to-green-400"
            >
              Enroll now
            </motion.button>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
            <div className="w-6 h-0.5 bg-green-500 mb-1.5"></div>
            <div className="w-6 h-0.5 bg-green-500 mb-1.5"></div>
            <div className="w-6 h-0.5 bg-green-500"></div>
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden"
            >
              <div className="py-4 space-y-4">
                <MobileNavLink href="#home" onClick={() => setIsOpen(false)} scrollToHash={scrollToHash}>Home</MobileNavLink>
                
                <div>
                  <button
                    onClick={() => setAboutOpen(!aboutOpen)}
                    className="block w-full text-left text-gray-800 font-medium py-2"
                  >
                    About {aboutOpen ? '▲' : '▼'}
                  </button>
                  {aboutOpen && (
                    <div className="pl-4 space-y-2">
                      <Link
                        to="/about-innovative"
                        onClick={() => setIsOpen(false)}
                        className="block text-gray-800 hover:text-green-600 font-medium"
                      >
                        About Innovative
                      </Link>
                      <MobileNavLink href="#about-teachers" onClick={() => setIsOpen(false)} scrollToHash={scrollToHash}>Teachers</MobileNavLink>
                      <MobileNavLink href="#about-principal" onClick={() => setIsOpen(false)} scrollToHash={scrollToHash}>Principal Speech</MobileNavLink>
                    </div>
                  )}
                </div>

                <MobileNavLink href="#blog" onClick={() => setIsOpen(false)} scrollToHash={scrollToHash}>News & Article</MobileNavLink>
                <MobileNavLink href="#gallery" onClick={() => setIsOpen(false)} scrollToHash={scrollToHash}>Gallery</MobileNavLink>
                <MobileNavLink href="#faq" onClick={() => setIsOpen(false)} scrollToHash={scrollToHash}>Faq</MobileNavLink>
                <MobileNavLink href="#contact" onClick={() => setIsOpen(false)} scrollToHash={scrollToHash}>Contact</MobileNavLink>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}

// Desktop NavLink
function NavLink({
  href,
  children,
  isActive,
  scrollToHash,
}: {
  href: string;
  children: React.ReactNode;
  isActive?: boolean;
  scrollToHash: (hash: string) => void;
}) {
  return (
    <motion.a
      href={href}
      onClick={(e) => {
        e.preventDefault();
        scrollToHash(href);
      }}
      whileHover={{ scale: 1.05 }}
      className={`font-medium cursor-pointer transition duration-200 ${
        isActive ? 'text-green-600 font-bold' : 'text-gray-800 hover:text-green-600'
      }`}
    >
      {children}
    </motion.a>
  );
}

// Mobile NavLink
function MobileNavLink({
  href,
  onClick,
  children,
  scrollToHash,
}: {
  href: string;
  onClick: () => void;
  children: React.ReactNode;
  scrollToHash: (hash: string) => void;
}) {
  return (
    <a
      href={href}
      onClick={(e) => {
        e.preventDefault();
        scrollToHash(href);
        onClick();
      }}
      className="block text-gray-800 hover:text-green-600 transition font-medium"
    >
      {children}
    </a>
  );
}
