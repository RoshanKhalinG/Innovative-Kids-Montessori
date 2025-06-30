import image10 from '../assets/images/10.jpg';
import image11 from '../assets/images/11.jpg';
import image12 from '../assets/images/12.jpg';
import image13 from '../assets/images/13.jpg';
import image14 from '../assets/images/14.jpg';
import image15 from '../assets/images/15.jpg';
import image16 from '../assets/images/16.jpg';

export interface NewsArticle {
  id: string;
  title: string;
  date: string;
  image: string;
  excerpt: string;
  content: string;
  author: string;
  category: string;
  commentsCount: number;
}

export const newsData: NewsArticle[] = [
  {
    id: '1',
    title: 'Why Montessori Education Is Gaining Popularity in Nepal',
    date: '2025-06-30',
    image: image10,
    excerpt: 'Montessori education is becoming increasingly popular among Nepali parents. But what sets it apart from traditional teaching methods?',
    content: `Montessori education, developed by Dr. Maria Montessori, is a child-centered approach that emphasizes independence, hands-on learning, and respect for a child's natural psychological development.\n\nUnlike traditional education systems that rely on rote memorization, fixed seating, and standardized teaching, Montessori allows children to choose their activities, work at their own pace, and learn through specially designed materials.\n\nIn Nepal, more parents are choosing Montessori because it fosters curiosity, self-discipline, and confidence in children. Montessori classrooms here are peaceful, engaging, and filled with age-appropriate resources that reflect our local culture and values. As a result, Nepali children are becoming more independent thinkers and problem-solvers—qualities that are essential in today's changing world.`,
    author: 'Admin',
    category: 'Blog',
    commentsCount: 0,
  },
  {
    id: '2',
    title: 'The Importance of Nature and Outdoor Play in Montessori',
    date: '2025-06-25',
    image: image11,
    excerpt: 'Nature is a core part of Montessori education. In Nepal, this approach connects beautifully with our environment, plants, and festivals.',
    content: `Montessori education emphasizes nature and outdoor learning as key to a child's development. At Innovative Kids Montessori, children participate in gardening, explore the outdoors, and engage in activities that stimulate all their senses.\n\nOur students care for school plants, go on nature walks, and even collect leaves or stones to create their own nature collages. This connection with nature nurtures responsibility, patience, and a sense of wonder.\n\nIn the Nepali context, this means exploring our native flora, experiencing all four seasons, and celebrating festivals like Tihar and Holi outdoors. Nature becomes a living classroom—one that changes, surprises, and teaches in ways textbooks cannot.`,
    author: 'Admin',
    category: 'Blog',
    commentsCount: 0,
  },
  {
    id: '3',
    title: 'Montessori Success Stories from Our School',
    date: '2025-06-20',
    image: image12,
    excerpt: 'Our Montessori graduates are thriving in new environments. Hear what parents and students have to say about their journey.',
    content: `At Innovative Kids Montessori, we've witnessed countless success stories of children who transitioned smoothly into primary schools and beyond. Their ability to adapt, concentrate, and engage meaningfully with learning stands out.\n\nOne parent shared, "My son joined Montessori at age 2. By the time he turned 5, he was confidently reading short sentences and solving basic math problems. He's now thriving in a mainstream school, thanks to the foundation laid at Innovative."\n\nAnother parent said, "The teachers not only taught our child academics but also kindness, respect, and responsibility. We are forever grateful."\n\nThese stories reflect the power of Montessori education—not just academically, but socially and emotionally.`,
    author: 'Admin',
    category: 'Blog',
    commentsCount: 0,
  },
  {
    id: '4',
    title: 'Starting Montessori at Age 2 or 3: Is It Too Early?',
    date: '2025-06-15',
    image: image13,
    excerpt: "Parents often wonder if Montessori is suitable for toddlers. The answer is yes—and here's why the early years are the most important.",
    content: `The first six years of life are the most formative in a child's development. Montessori education recognizes this sensitive period and provides a nurturing, structured, and stimulating environment for even the youngest learners.\n\nStarting at age 2 or 3 might feel early, but it's the ideal time to build independence, coordination, language, and social skills. In a Montessori toddler class, children are encouraged to do things for themselves—pour water, put away toys, and express needs politely.\n\nAt Innovative Kids Montessori, we help toddlers thrive through a calm, respectful, and purposeful routine that builds their confidence from the very beginning. If you're wondering whether your child is ready, know this: Montessori doesn't rush children—it meets them where they are and supports their natural growth.`,
    author: 'Admin',
    category: 'Blog',
    commentsCount: 0,
  },
  {
    id: '5',
    title: 'Montessori Annual Sports Day 2025',
    date: '2025-02-10',
    image: image14,
    excerpt: 'Our Annual Sports Day was a huge success! Children participated in various fun and educational games, fostering teamwork and sportsmanship.',
    content: `The Annual Sports Day at Innovative Kids Montessori was filled with excitement and joy. Children, parents, and teachers came together to celebrate the spirit of sportsmanship. The event included races, team games, and a special parent-child relay. Everyone enjoyed healthy snacks and cheered for their teams. Congratulations to all participants!`,
    author: 'Admin',
    category: 'Blog',
    commentsCount: 0,
  },
  {
    id: '6',
    title: 'New Art & Craft Workshop Announced',
    date: '2025-01-25',
    image: image15,
    excerpt: 'We are excited to announce a new Art & Craft workshop for our students, encouraging creativity and self-expression.',
    content: `Our upcoming Art & Craft workshop will introduce children to new techniques and materials. Guided by experienced instructors, students will create their own masterpieces to take home. The workshop aims to boost confidence and artistic skills in a fun, supportive environment.`,
    author: 'Admin',
    category: 'Blog',
    commentsCount: 0,
  },
  {
    id: '7',
    title: 'Parent-Teacher Meeting Highlights',
    date: '2025-01-15',
    image: image16,
    excerpt: 'Thank you to all parents who attended our recent Parent-Teacher Meeting. Here are some highlights and key takeaways.',
    content: `The Parent-Teacher Meeting provided a valuable opportunity for open communication. Teachers shared student progress, upcoming curriculum plans, and answered parent questions. We appreciate the feedback and look forward to continued collaboration for our students' growth.`,
    author: 'Admin',
    category: 'Blog',
    commentsCount: 0,
  },
]; 