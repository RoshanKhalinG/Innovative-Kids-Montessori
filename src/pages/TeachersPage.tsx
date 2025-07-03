import teacher1 from '../assets/teachers/teacher1.jpg';
import teacher2 from '../assets/teachers/teacher2.jpg';
import teacher3 from '../assets/teachers/teacher3.jpg';
import teacher4 from '../assets/teachers/teacher4.jpg';
import teacher5 from '../assets/teachers/teacher5.jpg';
import teacher6 from '../assets/teachers/teacher6.jpg';
import teacher7 from '../assets/teachers/teacher7.jpg';
import teacher8 from '../assets/teachers/teacher8.jpg';
import teacher9 from '../assets/teachers/teacher9.avif';
import teacher10 from '../assets/teachers/teacher10.jpg';
import teacher11 from '../assets/teachers/teacher11.jpg';
import teacher12 from '../assets/teachers/teacher12.jpg';

import TeacherCard from '../components/TeacherCard';

export default function TeachersPage() {
  const teachers = [
    { name: 'Lila Limbu', subject: 'Founder/Principal', image: teacher1 },
    { name: 'Kusum KC', subject: 'Coordinator', image: teacher2 },
    { name: 'Pabitra Limbu', subject: 'Teacher', image: teacher3 },
    { name: 'Manisha Limbu', subject: 'Teacher', image: teacher4 },
    { name: 'Jiya Limbu', subject: 'Assistant Teacher', image: teacher5 },
    { name: 'Soniya Limbu', subject: 'Assistant Teacher', image: teacher6 },
    { name: 'Reshma Moktan', subject: 'Assistant Teacher', image: teacher7},
    { name: 'Menuka Sanjel', subject: 'Dance Teacher', image: teacher8 },
    { name: 'Lal Bikram Limbu', subject: 'Music Teacher', image: teacher9 },
    { name: 'Mina Thapa Magar', subject: 'Helper', image: teacher10 },
    { name: 'Sangita Rokka ', subject: 'Helper', image: teacher11 },
    { name: 'Anita Gahatraj', subject: 'Kitchen Head', image: teacher12 },
  ];

  return (
    <section className="min-h-screen pt-40 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-white to-green-50">

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
        <h2 className="font-bold uppercase tracking-wide" style={{ color: "#fe6d16" }}>
          FAQ’S
        </h2>
        <h2 className="text-4xl font-extrabold text-blue-900 mb-4">Meet Our Teams</h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Meet our dedicated team of educators, guiding and inspiring young minds every step of the way.
        </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
          {teachers.map((teacher, index) => (
            <TeacherCard
              key={index}
              name={teacher.name}
              subject={teacher.subject}
              image={teacher.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
