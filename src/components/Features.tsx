import { useInView } from 'react-intersection-observer';
import bg1 from '../assets/1.jpg';
import bg2 from '../assets/2.jpg';
import bg3 from '../assets/3.jpg';

const sectionBg = bg1;

// Add matching background colors here
const colorMap: Record<string, string> = {
  'border-orange-400': 'bg-orange-400',
  'border-green-400': 'bg-green-400',
  'border-teal-400': 'bg-teal-400',
  'border-yellow-400': 'bg-yellow-400',
};

const features = [
  {
    title: 'Learning & Fun',
    description: 'Wide range of extracurricular activities for holistic development',
    icon: '🧩',
    bg: bg1,
    color: 'border-orange-400',
  },
  {
    title: 'Healthy Meals',
    description: 'Nutritious, balanced menu crafted by experts',
    icon: '🍎',
    bg: bg2,
    color: 'border-green-400',
  },
  {
    title: 'Children Safety',
    description: 'Secure facilities with trained staff on standby',
    icon: '🛡️',
    bg: bg3,
    color: 'border-teal-400',
  },
  {
    title: 'Homely Environment',
    description: 'Warm, nurturing spaces that feel like home',
    icon: '🏡',
    bg: bg1,
    color: 'border-yellow-400',
  },
];

export default function Features() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="relative py-20" id="features">
      {/* Section Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${sectionBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.2,
        }}
      />
      <div className="absolute inset-0 bg-black/30 z-0" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => {
            const bgColorClass = colorMap[feature.color] || 'bg-gray-200';
            const buttonBgClass = bgColorClass.replace('bg-', 'bg-');
            const hoverBgClass = bgColorClass.replace('bg-', 'hover:bg-') + '500';
            const borderClass = feature.color;

            return (
              <div key={index} className="w-full aspect-square [perspective:1000px]">
                <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group hover:[transform:rotateY(180deg)]">

                  {/* Front Face */}
                  <div
                    className={`absolute w-full h-full rounded-full overflow-hidden border-4 ${feature.color} [backface-visibility:hidden]`}
                    style={{
                      backgroundImage: `url(${feature.bg})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                  >
                    <div className="absolute inset-0 bg-black/40 backdrop-blur-sm flex flex-col items-center justify-center text-white p-4">
                      <span className="text-3xl mb-2">{feature.icon}</span>
                      <h3 className="text-xl font-bold text-center">{feature.title}</h3>
                    </div>
                  </div>

                  {/* Back Face */}
                  <div className={`absolute w-full h-full rounded-full ${bgColorClass} text-white border-4 border-dashed border-white [backface-visibility:hidden] [transform:rotateY(180deg)] flex flex-col items-center justify-center text-center p-6 shadow-lg`}>
                    <span className="text-3xl mb-2">{feature.icon}</span>
                    <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                    <p className="text-sm">{feature.description}</p>

                    {/* Enhanced Button with Circle Border */}
                    <button
                      className={`
                        mt-4 px-4 py-2 rounded-full
                        ${buttonBgClass} text-white shadow-xl
                        border-2 border-${borderClass} // Add circle border
                        transform transition-all duration-300 ease-in-out
                        hover:shadow-2xl hover:scale-105
                        active:scale-95
                      `}
                    >
                      Read More
                    </button>
                  </div>

                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}





// import { motion } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';

// const features = [
//   {
//     title: 'Academic Excellence',
//     description: 'Comprehensive curriculum focused on developing critical thinking and creativity',
//     icon: '🎓',
//     bgColor: 'bg-blue-600',
//     dashedBorder: 'border-blue-400',
//   },
//   {
//     title: 'Sports & Activities',
//     description: 'Wide range of extracurricular activities for holistic development',
//     icon: '⚽',
//     bgColor: 'bg-green-600',
//     dashedBorder: 'border-green-400',
//   },
//   {
//     title: 'Expert Faculty',
//     description: 'Experienced teachers dedicated to student success',
//     icon: '👩‍🏫',
//     bgColor: 'bg-purple-600',
//     dashedBorder: 'border-purple-400',
//   },
// ];

// export default function Features() {
//   const [ref, inView] = useInView({
//     triggerOnce: true,
//     threshold: 0.1,
//   });

//   return (
//     <section className="py-20 bg-accent-papaya" id="features">
//       <div className="container mx-auto px-4">
//         <motion.div
//           ref={ref}
//           className="grid grid-cols-1 md:grid-cols-3 gap-8"
//         >
//           {features.map((feature, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 30 }}
//               animate={inView ? { opacity: 1, y: 0 } : {}}
//               transition={{ delay: index * 0.2, duration: 0.5 }}
//               className={`p-6 rounded-full ${feature.bgColor} border-2 border-dashed ${feature.dashedBorder} text-white shadow-lg hover:scale-105 transition-transform duration-300 relative overflow-hidden`}
//             >
//               {/* Background overlay */}
//               <div className="absolute inset-0 bg-black/20"></div>

//               {/* Content */}
//               <div className="relative z-10 flex flex-col items-center text-center">
//                 <div className="text-5xl mb-4">{feature.icon}</div>
//                 <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
//                 <p className="text-sm text-white/90">{feature.description}</p>
//               </div>
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   );
// }