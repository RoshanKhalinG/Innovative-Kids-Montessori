import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from 'react-icons/fa';
import { HashLink as Link } from 'react-router-hash-link';

export default function Footer() {
  return (
    <footer className="bg-white text-gray-700 border-t">
      <div className="max-w-screen-xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo and Description */}
        <div>
          <Link to="/" className="flex items-center space-x-4 mb-4 cursor-pointer">
            <img
              src="/logo.png"
              alt="Innovative Logo"
              className="w-16 h-16"
            />
            <div className="text-blue-900 font-bold text-lg leading-tight">
              <span className="text-[#fe6d16]">Innovative</span>
              <br />
              <span className="text-[#1bad6f]"> Kids Montessori</span>
            </div>
          </Link>
          <p>
            Nurturing curious minds and fostering a love for learning at Divine Kiddos Montessori.
          </p>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="text-lg font-bold mb-0 text-blue-900">Useful Links</h3>
          <span className="block w-24 h-1 bg-[#fe6d16] mt-0.5 mb-2 rounded-full"></span>
          <ul className="space-y-2">
            <li><Link smooth to="/">Home</Link></li>
            <li><Link smooth to="/#about">About</Link></li>
            <li><Link to="/about-innovative">News & Article</Link></li>
            <li><Link smooth to="/#gallery">Gallery</Link></li>
            <li><Link smooth to="/#faq">FAQ</Link></li>
            <li><Link smooth to="/#contact">Contact</Link></li>
          </ul>
        </div>

        {/* Contact Information */}
        <div>
          <h3 className="text-lg font-bold mb-0 text-blue-900">Contact Us</h3>
          <span className="block w-20 h-1 bg-[#fe6d16] mt-0.5 mb-2 rounded-full"></span>
          <p className="mb-2">📍 Dhapakhel, Lalitpur, Nepal</p>
          <p className="mb-2">📧 innovativekidsm@gmail.com</p>
          <p>📞 +977 9818736621</p>
        </div>

        {/* Follow Us */}
        <div>
          <h3 className="text-lg font-bold mb-0 text-blue-900">Follow Us</h3>
          <span className="block w-20 h-1 bg-[#fe6d16] mt-0.5 mb-2 rounded-full"></span>
          <p>Stay connected through our social media platforms.</p>
          <div className="flex space-x-4 mt-4 text-[#fe6d16]">
            <a href="https://www.facebook.com/lilalimbu123.inoo"><FaFacebookF className="h-6 w-6 hover:text-red-700" /></a>
            <a href="#"><FaInstagram className="h-6 w-6 hover:text-red-700" /></a>
            <a href="#"><FaTwitter className="h-6 w-6 hover:text-red-700" /></a>
            <a href="#"><FaYoutube className="h-6 w-6 hover:text-red-700" /></a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="bg-[#fe6d16] text-white text-center py-4">
        © 2025 Innovative Kids Montessori | All rights reserved | Developed by{' '}
        <a
          href="https://your-portfolio-url.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-900 font-bold hover:text-purple-100"
        >
          Roshan Rai
        </a>
      </div>
    </footer>
  );
}
