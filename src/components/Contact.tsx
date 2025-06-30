import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faSpinner } from '@fortawesome/free-solid-svg-icons';

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);

    const formData = new FormData(e.currentTarget);
    
    try {
      const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setSuccess(true);
        e.currentTarget.reset();
      } else {
        setError('Failed to send message. Please try again.');
      }
    } catch (err) {
      console.error('Form submission error:', err);
      setError('Failed to send message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative py-16 bg-gradient-to-br from-orange-50 via-white to-green-50 overflow-hidden scroll-mt-24"
    >
      {/* Decorative SVG Background */}
      <svg
        className="absolute top-0 left-0 w-full h-full pointer-events-none z-0"
        viewBox="0 0 1440 320"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          fill="#60A5FA" // Soft Blue
          fillOpacity="0.4"
          d="M0,192 C360,320 1080,0 1440,160 L1440,320 L0,320 Z"
        ></path>
        <path
          fill="#34D399" // Mint Green
          fillOpacity="0.3"
          d="M0,160 C480,320 960,0 1440,192 L1440,320 L0,320 Z"
        ></path>
        <path
          fill="#FDE68A" // Light Yellow highlight
          fillOpacity="0.2"
          d="M0,120 C360,280 1080,40 1440,140 L1440,320 L0,320 Z"
        ></path>
      </svg>

      {/* Content Wrapper */}
      <div className="relative z-10 max-w-lg mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold sm:text-4xl text-center text-blue-900">
            Get in Touch
          </h2>
          <span className="block w-36 h-1 bg-red-500 mt-1 mx-auto rounded-full"></span>
          <p className="mt-4 text-gray-600">
            Have any questions or want to get in touch? We'd love to hear from you.
          </p>
        </div>

        {/* Success Message */}
        {success && (
          <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
            <p className="font-semibold">Message sent successfully!</p>
            <p>We'll get back to you soon.</p>
          </div>
        )}

        {/* Error Message */}
        {error && (
          <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
            <p className="font-semibold">Error!</p>
            <p>{error}</p>
          </div>
        )}

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-2xl shadow-2xl border border-gray-100 space-y-6 transition duration-300"
        >
          {/* Full Name and Phone Number */}
          <div className="flex flex-col md:flex-row gap-6">
            <div className="w-full md:w-1/2">
              <label
                htmlFor="name"
                className="block text-sm font-bold text-blue-900 mb-1"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition duration-200"
                required
              />
            </div>

            <div className="w-full md:w-1/2">
              <label
                htmlFor="phone"
                className="block text-sm font-bold text-blue-900 mb-1"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Your Number"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition duration-200"
                required
              />
            </div>
          </div>

          {/* Email and Subject */}
          <div className="flex flex-col md:flex-row gap-6">
            <div className="w-full md:w-1/2">
              <label
                htmlFor="email"
                className="block text-sm font-bold text-blue-900 mb-1"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition duration-200"
                required
              />
            </div>

            <div className="w-full md:w-1/2">
              <label
                htmlFor="subject"
                className="block text-sm font-bold text-blue-900 mb-1"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="How can we help?"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition duration-200"
                required
              />
            </div>
          </div>

          {/* Message */}
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-bold text-blue-900 mb-1"
            >
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              placeholder="Write your message here..."
              className="w-full px-4 py-3 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition duration-200"
              required
            ></textarea>
          </div>

          {/* Submit Button with FontAwesome */}
          <button
            type="submit"
            disabled={loading}
            style={{ backgroundColor: 'rgb(16, 185, 129)' }}
            className="w-full hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:shadow-lg transform transition duration-200 hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2 disabled:opacity-50"
          >
            {loading ? (
              <FontAwesomeIcon icon={faSpinner} spin />
            ) : (
              <>
                Send Message <FontAwesomeIcon icon={faPaperPlane} />
              </>
            )}
          </button>
        </form>
      </div>
    </section>
  );
}
