import React from "react";
import { motion } from "framer-motion";
import { Upload, Wand2, Paintbrush } from "lucide-react";

const features = [
  {
    icon: <Upload className="w-6 h-6 text-purple-600" />,
    title: "Upload Brief",
    description: "Share your project details and let our AI grasp your vision."
  },
  {
    icon: <Wand2 className="w-6 h-6 text-purple-600" />,
    title: "Generate Designs",
    description: "Watch as our AI crafts unique design ideas tailored to you."
  },
  {
    icon: <Paintbrush className="w-6 h-6 text-purple-600" />,
    title: "Refine Creation",
    description: "Perfect your chosen concept with easy-to-use AI tools."
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export const Features = () => {
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
            Unleash Your Creativity
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how our AI-Powered Design Assistant transforms your ideas into stunning designs effortlessly. Follow these simple steps to turn your vision into reality.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={item}
              className="flex flex-col items-center p-6 bg-purple-50 rounded-2xl"
            >
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-4 shadow-sm">
                {feature.icon}
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h4>
              <p className="text-gray-600 text-center">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
