import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HashLink } from 'react-router-hash-link';
import { useLocation } from 'react-router-dom';

export default function Navigation() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('/#home');

  useEffect(() => {
    const fullPath = location.pathname + location.hash;
    setActiveLink(fullPath || '/#home');
  }, [location]);

  return (
    <nav className="fixed w-full z-50 bg-white/95 backdrop-blur-sm shadow-lg">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center py-4 sm:py-6">
          {/* Logo & Branding */}
          <HashLink to="/#home" className="flex items-center space-x-3" scroll={el => el && el.scrollIntoView({ behavior: 'smooth', block: 'start' })}>
            <img src="/logo.png" alt="innovative logo" className="w-20 h-20 sm:h-24 object-contain" />
            <div>
              <h1 className="text-2xl font-extrabold" style={{ color: '#fe6d16' }}>Innovative</h1>
              <p className="text-sm -mt-1" style={{ color: '#1bad6f' }}>Kids Montessori</p>
            </div>
          </HashLink>

          {/* Desktop Menu */}
          <div className="hidden md:flex flex-1 items-center justify-between">
            <div className="flex justify-center space-x-8 flex-1 text-gray-500 text-lg">
              <NavLink to="/#home" isActive={activeLink === '/#home'}>Home</NavLink>

              {/* Dropdown for About */}
              <div className="relative group">
                <NavLink
                  to="/about-innovative"
                  isActive={activeLink.startsWith('/about-innovative') || activeLink === '/teachers' || activeLink === '/principal-speech'}
                >
                  About
                </NavLink>
                <div className="absolute left-0 mt-2 w-56 bg-white border rounded-lg shadow-lg opacity-0 group-hover:opacity-100 group-hover:translate-y-1 transition-all duration-300 z-50">
                  <HashLink to="/about-innovative#about" className="block px-4 py-2 text-gray-700 hover:bg-green-100" scroll={el => el && el.scrollIntoView({ behavior: 'smooth', block: 'start' })}>About Innovative</HashLink>
                  <HashLink to="/teachers" className="block px-4 py-2 text-gray-700 hover:bg-green-100" scroll={el => el && el.scrollIntoView({ behavior: 'smooth', block: 'start' })}>Team</HashLink>
                  <HashLink to="/principal-speech" className="block px-4 py-2 text-gray-700 hover:bg-green-100" scroll={el => el && el.scrollIntoView({ behavior: 'smooth', block: 'start' })}>Principal Messaage</HashLink>
                </div>
              </div>

              <NavLink to="/news" isActive={activeLink === '/news'}>News & Articles</NavLink>
              <NavLink to="/gallery" isActive={activeLink === '/gallery'}>Gallery</NavLink>
              <NavLink to="/#faq" isActive={activeLink === '/#faq'}>Faq</NavLink>
              <NavLink to="/#contact" isActive={activeLink === '/#contact'}>Contact</NavLink>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-[#3ddf97] to-[#128a57] text-white px-6 py-2 rounded-full font-semibold transition-all duration-300 shadow-md hover:from-[#128a57] hover:to-[#3ddf97] hover:shadow-lg ml-8"
            >
              Enroll now
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            <div className="w-6 h-0.5 bg-[#3ddf97] mb-1.5"></div>
            <div className="w-6 h-0.5 bg-[#3ddf97] mb-1.5"></div>
            <div className="w-6 h-0.5 bg-[#3ddf97]"></div>
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
                <MobileNavLink to="/#home" onClick={() => setIsOpen(false)}>Home</MobileNavLink>

                {/* About Dropdown in Mobile */}
                <div>
                  <button
                    onClick={() => setAboutOpen(!aboutOpen)}
                    className="block w-full text-left text-gray-800 font-medium py-2"
                  >
                    About {aboutOpen ? '▲' : '▼'}
                  </button>
                  {aboutOpen && (
                    <div className="pl-4 space-y-2">
                      <MobileNavLink to="/about-innovative#about" onClick={() => setIsOpen(false)}>About Innovative</MobileNavLink>
                      <MobileNavLink to="/teachers" onClick={() => setIsOpen(false)}>Team</MobileNavLink>
                      <MobileNavLink to="/principal-speech" onClick={() => setIsOpen(false)}>Principal Message</MobileNavLink>
                    </div>
                  )}
                </div>

                <MobileNavLink to="/news" onClick={() => setIsOpen(false)}>News & Articles</MobileNavLink>
                <MobileNavLink to="/gallery" onClick={() => setIsOpen(false)}>Gallery</MobileNavLink>
                <MobileNavLink to="/#faq" onClick={() => setIsOpen(false)}>Faq</MobileNavLink>
                <MobileNavLink to="/#contact" onClick={() => setIsOpen(false)}>Contact</MobileNavLink>

                <div className="flex justify-center">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-[#3ddf97] to-[#128a57] text-white px-10 py-2 rounded-full font-semibold transition-all duration-300 shadow-md hover:from-[#128a57] hover:to-[#3ddf97] hover:shadow-lg"
                  >
                    Enroll now
                  </motion.button>
                </div>
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
  to,
  children,
  isActive,
}: {
  to: string;
  children: React.ReactNode;
  isActive?: boolean;
}) {
  return (
    <HashLink
      smooth
      to={to}
      scroll={el => el && el.scrollIntoView({ behavior: 'smooth', block: 'start' })}
      className={`font-medium cursor-pointer transition-all duration-200 hover:font-bold ${
        isActive ? 'text-green-600 font-bold' : 'text-gray-800 hover:text-green-600'
      }`}
    >
      {children}
    </HashLink>
  );
}

// Mobile NavLink
function MobileNavLink({
  to,
  onClick,
  children,
}: {
  to: string;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <HashLink
      smooth
      to={to}
      onClick={onClick}
      scroll={el => el && el.scrollIntoView({ behavior: 'smooth', block: 'start' })}
      className="block text-gray-800 hover:text-green-600 transition-colors font-medium"
    >
      {children}
    </HashLink>
  );
}
