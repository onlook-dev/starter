import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What is Najm AI Design Assistant?",
    answer: "Najm is an advanced AI-powered design assistant that helps you create stunning designs effortlessly. It combines cutting-edge AI technology with intuitive tools to transform your ideas into professional designs."
  },
  {
    question: "How does the AI design process work?",
    answer: "Simply upload your project brief, and our AI analyzes your requirements to generate unique design concepts. You can then refine and customize these designs using our intuitive tools until you achieve your perfect result."
  },
  {
    question: "Can I try Najm before subscribing?",
    answer: "Yes! We offer a free plan that lets you explore our basic features and create up to 5 projects per month. This gives you a hands-on experience with our AI design capabilities."
  },
  {
    question: "What types of designs can I create?",
    answer: "Najm supports a wide range of design projects including logos, marketing materials, social media graphics, website designs, and more. Our AI adapts to your specific design needs."
  },
  {
    question: "Do I need design experience to use Najm?",
    answer: "Not at all! Najm is designed to be user-friendly for everyone, from beginners to professional designers. Our AI guides you through the process and handles the complex design work."
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export const FAQ = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find answers to common questions about Najm AI Design Assistant and how it can transform your design workflow.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          {faqs.map((faq, index) => (
            <FAQItem key={index} faq={faq} variants={item} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const FAQItem = ({ faq, variants }: { faq: { question: string; answer: string }; variants: any }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <motion.div
      variants={variants}
      className="border-b border-gray-200"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-4 flex items-center justify-between text-left font-medium hover:text-purple-600 transition-colors"
      >
        {faq.question}
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown className="h-4 w-4 flex-shrink-0" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="pb-4 text-gray-600">
              {faq.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default FAQ;
