import { motion, Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  FaChalkboardTeacher,
  FaBus,
  FaUtensils,
  FaMicroscope,
  FaSmileBeam,
  FaChild,
} from 'react-icons/fa';
import whyChooseBg from '../../assets/4.jpg';

const features = [
  {
    title: 'Montessori-Centered Learning',
    description:
      'Children engage in self-directed activities that foster independence and a love for learning.',
    icon: <FaMicroscope size={28} />,
  },
  {
    title: 'Trained Teachers',
    description:
      'All teachers are trained by Montessori experts and child psychologists for holistic care.',
    icon: <FaChalkboardTeacher size={28} />,
  },
  {
    title: 'Focused on Child Psychology',
    description:
      'Teaching follows developmentally appropriate practices focused on emotional and mental growth.',
    icon: <FaChild size={28} />,
  },
  {
    title: 'Stage & Confidence Building',
    description:
      'Kids get public speaking opportunities and stage performances to build confidence.',
    icon: <FaSmileBeam size={28} />,
  },
  {
    title: 'Nutritious Superfoods',
    description:
      'Three hygienic, balanced meals a day that promote healthy eating and independence.',
    icon: <FaUtensils size={28} />,
  },
  {
    title: 'Safe & Comfortable Transport',
    description:
      'Door-to-door van service with AC/heater and friendly caretakers for a secure ride.',
    icon: <FaBus size={28} />,
  },
];

// Framer Motion card animation variants
const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
    scale: 0.95,
  },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: custom * 0.15,
      duration: 0.5,
      type: 'spring',
      stiffness: 50,
    },
  }),
  hover: {
    scale: 1.05,
    boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
    transition: {
      duration: 0.3,
    },
  },
};

export default function WhyChoose() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      className="relative py-20 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${whyChooseBg})` }}
      id="why-choose"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-orange-100/60 via-white/30 to-green-100/60 backdrop-blur-sm z-0"></div>

      <div className="relative z-10 container mx-auto px-4">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <h2 className="text-4xl font-bold text-center mb-12 text-green-900">
            Why Choose Innovative?
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                whileHover="hover"
                className="bg-white/30 backdrop-blur-lg border border-white/30 text-green-900 p-6 rounded-2xl shadow-lg cursor-pointer"
              >
                <div className="flex items-center gap-4 mb-4 text-orange-600">
                  <div className="bg-white/40 p-3 rounded-full">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold">{feature.title}</h3>
                </div>
                <p className="text-green-800">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
