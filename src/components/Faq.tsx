import React, { useState } from "react";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

const Faq = () => {
  const [activeId, setActiveId] = useState<number | null>(1);

  const faqs: FaqItem[] = [
    {
      id: 1,
      question: "Where Can I Find Information?",
      answer:
        "You can find comprehensive information about Innovative Kids Montessori on our website, or feel free to reach out to our administrative office for assistance.",
    },
    {
      id: 2,
      question: "Do you provide meals and snacks for the children?",
      answer:
        "Yes, we offer nutritious meals and snacks prepared on-site, accommodating dietary restrictions and promoting healthy eating habits.",
    },
    {
      id: 3,
      question: "What ages do you accept for enrollment?",
      answer: "We accept children aged 2 to 6 years old.",
    },
    {
      id: 4,
      question: "How do you handle safety and security at your facility?",
      answer:
        "We have strict security measures in place, including controlled access, surveillance cameras, and regular safety drills.",
    },
    {
      id: 5,
      question: "What is the student-to-teacher ratio in your classrooms?",
      answer:
        "Our student-to-teacher ratio is 10:1 to ensure personalized attention.",
    },
    {
      id: 6,
      question: "What is your approach to discipline and behavior management?",
      answer:
        "We use positive reinforcement and gentle guidance to encourage good behavior and resolve conflicts peacefully.",
    },
    {
      id: 7,
      question: "How do you support children with special needs?",
      answer:
        "We provide individualized learning plans and collaborate with specialists to meet the unique needs of each child.",
    },
    {
      id: 8,
      question: "What extracurricular activities do you offer?",
      answer:
        "We offer a range of enriching extracurricular activities such as music, art, sports, and language classes, providing additional opportunities for exploration and skill development beyond the core curriculum.",
    },
  ];

  const FaqCard: React.FC<{ faq: FaqItem }> = ({ faq }) => {
    const isActive = activeId === faq.id;

    return (
      <div
        onClick={() => setActiveId(isActive ? null : faq.id)}
        className={`cursor-pointer p-5 rounded-xl shadow-md transition-all duration-300 mb-4 ${
          isActive ? "bg-red-600 text-white" : "bg-gray-100 text-blue-900"
        }`}
      >
        <div className="flex justify-between items-center font-bold text-lg">
          <span>{faq.question}</span>
          <span className="text-xl">{isActive ? "📌" : "❓"}</span>
        </div>

        <AnimatePresence>
          {isActive && (
            <motion.p
              key="answer"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden mt-4 text-white text-sm leading-relaxed"
            >
              {faq.answer}
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    );
  };

  const leftFaqs = faqs.filter((_, index) => index % 2 === 0);
  const rightFaqs = faqs.filter((_, index) => index % 2 !== 0);

  // Scroll animation controls
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);

  return (
    <motion.div
      id="faq"  // <-- Added this id for hash navigation
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, ease: "easeOut" },
        },
      }}
      className="bg-white py-16"
    >
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2
          className="font-bold uppercase tracking-wide"
          style={{ color: "#fe6d16" }}
        >
          FAQ’S
        </h2>
        <h1 className="text-4xl font-extrabold text-blue-800 mt-2 mb-4">
          Popular Questions
        </h1>
          <span className="block w-64 h-1 bg-red-500 mt-3 mb-3 mx-auto rounded-full"></span>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Your Questions Answered: Delve Into Our Comprehensive FAQs Section for
          In-Depth Information and Insights on All Things Related to Divine Kiddos
          Montessori.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-12 flex flex-col md:flex-row gap-6">
        <div className="flex-1">
          {leftFaqs.map((faq) => (
            <FaqCard key={faq.id} faq={faq} />
          ))}
        </div>
        <div className="flex-1">
          {rightFaqs.map((faq) => (
            <FaqCard key={faq.id} faq={faq} />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Faq;
