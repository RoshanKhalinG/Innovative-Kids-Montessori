
import { motion } from 'framer-motion';
import principalImage from '../../assets/images/principal.jpg'; // Make sure the image path is correct

export default function PrincipalSpeech() {
  return (
    <section className="py-20 px-6 md:px-12 lg:px-32 bg-gradient-to-b from-white to-green-50">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="flex-shrink-0"
        >
          <img
            src={principalImage}
            alt="Principal"
            className="w-72 h-72 object-cover rounded-2xl shadow-lg border-4 border-green-200"
          />
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="text-center md:text-left"
        >
          <h2 className="text-4xl font-bold text-green-700 mb-4">Principal's Message</h2>
          <p className="text-gray-700 text-lg leading-relaxed max-w-xl">
            Welcome to <span className="font-semibold text-green-700">Innovative Kids Montessori</span>!
            We believe every child is unique and full of potential. Our goal is to provide a nurturing,
            creative, and inclusive environment that encourages children to explore and grow with confidence.
            Thank you for trusting us with your child’s educational journey.
          </p>

          <div className="mt-6 font-semibold text-gray-800">
            – Ms. Lila Limbu<br />
            <span className="text-green-600">Principal</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
