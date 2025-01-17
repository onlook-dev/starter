import React from "react";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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
          <Accordion type="single" collapsible>
            {faqs.map((faq, index) => (
              <motion.div key={index} variants={item}>
                <AccordionItem value={`item-${index}`}>
                  <AccordionTrigger className="text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent>
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
