import { motion } from 'framer-motion';
import imageSrc from '../assets/3.jpg';

export default function Hero() {
  return (
    <section
      id="home" // ✅ This is the key fix
      className="relative overflow-hidden min-h-screen bg-[#ccf4f4] pt-32 md:pt-40"
    >
      {/* Abstract SVG Shape */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
        <svg
          viewBox="0 0 470 260"
          className="absolute -top-10 left-0 w-full h-auto"
          preserveAspectRatio="none"
        >
          <path
            fill="#b6e6e6"
            fillOpacity="1"
            d="M0,96L48,122.7C96,149,192,203,288,218.7C384,235,480,213,576,202.7C672,192,768,192,864,186.7C960,181,1056,171,1152,170.7C1248,171,1344,181,1392,186.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 md:px-9 z-10 relative flex flex-col-reverse md:flex-row justify-center items-end gap-5">
        {/* Left Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 flex flex-col items-start gap-4 pb-5"
        >
          <div>
            <h2 className="text-base font-semibold uppercase tracking-widest text-gray-700">
              Play. Learn. & Grow. Together
            </h2>
            <h1 className="text-5xl md:text-6xl font-extrabold text-[#1bad6f] leading-tight">
              Welcome To<br />
            </h1>
            <h1 className="text-5xl md:text-6xl font-extrabold text-[#fe6d16] leading-tight">
              Innovative Kids Montessori
            </h1>
            <p className="text-gray-700 text-xl leading-relaxed max-w-2xl">
              A nurturing space where young minds explore, create, and grow with curiosity and confidence.
            </p>
          </div>
          <button className="bg-gradient-to-r from-[#3ddf97] to-[#128a57] text-white px-6 py-2 rounded-full font-semibold transition-all duration-300 shadow-md hover:from-[#128a57] hover:to-[#3ddf97] hover:shadow-lg ml-8">
            Enroll Now
          </button>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 flex justify-center items-center mt-8 mb-6 md:my-0"
        >
          <img
            src={imageSrc}
            alt="Child smiling"
            className="rounded-3xl shadow-2xl w-[500px] h-[500px] object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
