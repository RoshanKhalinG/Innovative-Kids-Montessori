import { motion } from 'framer-motion';

interface TeacherProps {
  name: string;
  subject: string;
  image: string;
}

export default function TeacherCard({ name, subject, image }: TeacherProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-white shadow-xl rounded-2xl overflow-hidden text-center transition-all duration-300 border"
    >
      <img src={image} alt={name} className="w-full h-64 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-bold text-green-700">{name}</h3>
        <p className="text-gray-600">{subject}</p>
      </div>
    </motion.div>
  );
}
