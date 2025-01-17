import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const logos = [
  { name: "Adobe", src: "/images/adobe.svg" },
  { name: "Figma", src: "/images/figma.svg" },
  { name: "Sketch", src: "/images/sketch.svg" },
  { name: "Framer", src: "/images/framer.svg" },
  { name: "Photoshop", src: "/images/photoshop.svg" },
  { name: "Illustrator", src: "/images/illustrator.svg" },
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

export const Integrations = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Seamless Integrations
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Connect with your favorite design tools and enhance your workflow with our powerful integrations.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8"
        >
          {logos.map((logo, index) => (
            <motion.div
              key={index}
              variants={item}
              className="flex items-center justify-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="relative w-24 h-12">
                <Image
                  src={logo.src}
                  alt={`${logo.name} logo`}
                  fill
                  className="object-contain"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Integrations;
