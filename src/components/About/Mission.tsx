import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import img1 from '../../assets/7.jpg';

const Mission: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'vision' | 'mission'>('vision');
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  const visionText = `Our vision at Kids Montessori is to cultivate a generation of confident and compassionate individuals who are equipped to thrive in an ever-changing world. We strive to foster a love for learning, encourage curiosity, and instill values of empathy and resilience in every child who walks through our doors.`;

  const missionText = `Our mission is to unlock every child’s potential through joyful, hands-on learning experiences rooted in play. We are committed to providing a safe, nurturing environment that supports holistic development and inspires a lifelong love for learning.`;

  return (
    <div ref={ref} className="bg-gray-100 py-16 px-4 md:px-16">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
      >
        {/* Left Image */}
        <div className="flex justify-center">
          <img
            src={img1}
            alt="Kid Playing"
            className="rounded-2xl shadow-lg object-cover w-full max-w-[650px] h-auto"
          />
        </div>

        {/* Right Content */}
        <div className="text-center md:text-left space-y-4">
          <p className="text-[#fe6d17] font-semibold text-lg tracking-widest uppercase">
            Our Value
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-blue-900 leading-snug">
            Building a Brighter Future <br className="hidden md:block" /> through Play
          </h2>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            At <span className="font-semibold text-orange-600">Innovative Kids Montessori</span>, 
            every child’s journey is fueled by creativity, curiosity, and care. We believe in the 
            power of play to unlock potential and shape a confident future.
          </p>

          {/* Buttons */}
          <div className="flex gap-4 justify-center md:justify-start mb-4 mt-6">
            <button
              onClick={() => setActiveTab('vision')}
              className={`px-6 py-2 rounded-full font-semibold border-2 transition duration-300 ${
                activeTab === 'vision'
                  ? 'bg-teal-800 text-white border-teal-800'
                  : 'text-teal-800 border-teal-800 hover:bg-teal-800 hover:text-white'
              }`}
            >
              Vision
            </button>
            <button
              onClick={() => setActiveTab('mission')}
              className={`px-6 py-2 rounded-full font-semibold border-2 transition duration-300 ${
                activeTab === 'mission'
                  ? 'bg-orange-600 text-white border-orange-600'
                  : 'text-orange-600 border-orange-600 hover:bg-orange-600 hover:text-white'
              }`}
            >
              Mission
            </button>
          </div>

          {/* Animated Text */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className={`rounded-lg px-4 py-5 md:py-6 text-md md:text-lg leading-relaxed font-medium shadow-md transition-all ${
              activeTab === 'vision'
                ? 'bg-teal-50 text-teal-900 border-l-4 border-teal-600'
                : 'bg-orange-50 text-orange-900 border-l-4 border-orange-600'
            }`}
          >
            {activeTab === 'vision' ? visionText : missionText}
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Mission;
