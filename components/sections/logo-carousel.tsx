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

// Duplicate logos for seamless infinite scroll
const duplicatedLogos = [...logos, ...logos];

export const LogoCarousel = () => {
  return (
    <div className="w-full bg-neutral-950 py-16">
      <div className="max-w-7xl mx-auto px-4 overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <motion.div
            animate={{
              x: [0, -50 * duplicatedLogos.length],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 20,
                ease: "linear",
              },
            }}
            className="flex items-center space-x-16"
          >
            {duplicatedLogos.map((logo, index) => (
              <div
                key={index}
                className="relative w-40 h-12 flex-shrink-0 grayscale opacity-50 hover:opacity-100 hover:grayscale-0 transition-all duration-300"
              >
                <Image
                  src={logo.src}
                  alt={logo.name}
                  fill
                  className="object-contain"
                />
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default LogoCarousel;
