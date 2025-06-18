// import React from 'react';
import mapImage from '../assets/map.jpg'; // Make sure this path is correct

export default function Map() {
  return (
    <section className="w-full bg-gray-100">
      {/* Hero Banner with consistent padding */}
      <div className="max-w-screen-xl mx-auto px-6">
        <div
          className="relative w-full h-64 md:h-80 lg:h-96 flex items-center justify-center bg-cover bg-center overflow-hidden"
          style={{ backgroundImage: `url(${mapImage})` }}
        >
          <h1 className="text-white font-bold text-3xl md:text-4xl lg:text-5xl text-center drop-shadow-lg max-w-3xl z-10">
            More than just a school
          </h1>
          <button className="absolute bottom-6 md:bottom-8 lg:bottom-12 bg-gradient-to-r from-[#3ddf97] to-[#128a57] text-white hover:from-[#128a57] hover:to-[#3ddf97] hover:shadow-lg px-6 py-2 rounded-full font-semibold shadow-lg transition duration-300 transform hover:scale-105 z-10">
            Enroll your kid
          </button>
        </div>
      </div>
      {/* Google Map Section – directly after hero without gap */}
      <div className="max-w-screen-xl mx-auto px-6 py-0 md:py-0"> {/* Removed vertical padding */}
        <div className="w-full h-60 md:h-72 lg:h-80 overflow-hidden shadow-md">
          <iframe
            title="Sano Paila Montessori Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1931.546783670616!2d85.3253030561735!3d27.64576310624829!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb176fec5ccac7%3A0x6e5eac7b38e65fd9!2sInnovative%20Kids%20Montesory!5e0!3m2!1sen!2snp!4v1750049965373!5m2!1sen!2snp"            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>

     {/* Contact Info Section */}
<div className="max-w-screen-xl mx-auto px-6 pb-12 pt-4 text-gray-800">
  <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
    {/* Address */}
    <div className="bg-gradient-to-tr from-blue-100 to-blue-50 p-6 rounded-xl shadow-lg hover:scale-[1.03] transition-transform duration-300 border-t-4 border-blue-500">
      <div className="flex items-center mb-3">
        <div className="bg-blue-500 text-white p-2 rounded-full mr-3">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
          </svg>
        </div>
        <h3 className="font-semibold text-lg text-blue-700">Address</h3>
      </div>
      <p className="leading-relaxed text-sm">
        Dhapakhel-23, Lalitpur,<br />
        Bagmati Province, Nepal
      </p>
    </div>

    {/* Email */}
    <div className="bg-gradient-to-tr from-green-100 to-green-50 p-6 rounded-xl shadow-lg hover:scale-[1.03] transition-transform duration-300 border-t-4 border-green-500">
      <div className="flex items-center mb-3">
        <div className="bg-green-500 text-white p-2 rounded-full mr-3">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
          </svg>
        </div>
        <h3 className="font-semibold text-lg text-green-700">Email</h3>
      </div>
      <p className="text-sm">innovativekidsm@gmail.com</p>
    </div>

    {/* Phone */}
    <div className="bg-gradient-to-tr from-purple-100 to-purple-50 p-6 rounded-xl shadow-lg hover:scale-[1.03] transition-transform duration-300 border-t-4 border-purple-500">
      <div className="flex items-center mb-3">
        <div className="bg-purple-500 text-white p-2 rounded-full mr-3">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
          </svg>
        </div>
        <h3 className="font-semibold text-lg text-purple-700">Phone No</h3>
      </div>
      <p className="text-sm">
        +977-9818736621
      </p>
    </div>

    {/* Business Hours */}
    <div className="bg-gradient-to-tr from-yellow-100 to-yellow-50 p-6 rounded-xl shadow-lg hover:scale-[1.03] transition-transform duration-300 border-t-4 border-yellow-500">
      <div className="flex items-center mb-3">
        <div className="bg-yellow-500 text-white p-2 rounded-full mr-3">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
          </svg>
        </div>
        <h3 className="font-semibold text-lg text-yellow-700">Business Hours</h3>
      </div>
      <p className="text-sm">
        Weekdays - 9 AM to 3 PM<br />
        Weekends - OFF
      </p>
    </div>
  </div>
</div>

    </section>
  );
}