import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';
import classroomImage from '../../assets/1.jpg';

export default function About() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.3 });
  const [experience, setExperience] = useState(0);

  useEffect(() => {
    if (inView) {
      controls.start('visible');
      let count = 0;
      setExperience(0);
      const interval = setInterval(() => {
        count += 1;
        setExperience(count);
        if (count >= 10) clearInterval(interval);
      }, 150);
      return () => clearInterval(interval);
    } else {
      controls.start('hidden');
      setExperience(0);
    }
  }, [inView, controls]);

  // Define tag list and their corresponding gradient colors
  const tags = ['Play', 'Creativity', 'Fun', 'Learning'] as const;
  type Tag = typeof tags[number];

  const tagColors: Record<Tag, string> = {
    Play: 'from-pink-400 to-pink-600',
    Creativity: 'from-yellow-400 to-yellow-600',
    Fun: 'from-purple-400 to-purple-600',
    Learning: 'from-green-400 to-green-600',
  };

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
      }}
      className="py-16 bg-gray-50"
      id="about"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: 0 }}
            animate={controls}
            variants={{
              hidden: { opacity: 0, x: -20 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
            }}
          >
            <h2 className="text-lg font-bold text-red-600">About Innovative Kids</h2>
            <h1 className="text-3xl sm:text-4xl font-extrabold mt-2 text-green-700">
              Inspiring Little Minds to Blossom
            </h1>
            <p className="mt-4 text-gray-700 text-base sm:text-lg">
              At Innovative Kids Montessori, every child is nurtured in a safe, joyful, and
              enriching space designed to spark curiosity and build confidence.
            </p>

            {/* Animated Tags */}
            <div className="mt-6 flex flex-wrap gap-3">
              {tags.map((tag) => (
                <motion.button
                  key={tag}
                  whileHover={{ scale: 1.1, rotate: 1 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-5 py-2 rounded-full text-white text-sm sm:text-base font-medium shadow-md bg-gradient-to-r ${tagColors[tag]} transition-all duration-300 ease-in-out`}
                >
                  {tag}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Right Side - Image + Experience Box */}
          <motion.div
            initial={{ opacity: 0, x: 0 }}
            animate={controls}
            variants={{
              hidden: { opacity: 0, x: 20 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
            }}
            className="relative w-full"
          >
            <img
              src={classroomImage}
              alt="Classroom"
              className="w-full h-auto rounded-2xl shadow-xl object-cover"
            />

            {/* Experience Box */}
            <motion.div
              className="absolute top-[30px] left-[-32px] p-4 bg-white border-4 border-dashed border-red-500 rounded-b-xl rounded-t-md shadow-md flex flex-col items-center justify-center text-center"
              initial={{ opacity: 0, y: -20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-red-500 leading-none">
                {experience}+
              </h2>
              <p className="text-sm font-medium text-gray-700 mt-1">
                Years of Experience
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
