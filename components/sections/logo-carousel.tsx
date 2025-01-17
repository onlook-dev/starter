import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const logos = [
  { name: "Logoipsum 1", src: "/images/logoipsum-1.svg" },
  { name: "Logoipsum 2", src: "/images/logoipsum-1.svg" },
  { name: "Logoipsum 3", src: "/images/logoipsum-1.svg" },
  { name: "Logoipsum 4", src: "/images/logoipsum-1.svg" },
  { name: "Logoipsum 5", src: "/images/logoipsum-1.svg" },
  { name: "Logoipsum 6", src: "/images/logoipsum-1.svg" },
  { name: "Logoipsum 7", src: "/images/logoipsum-1.svg" },
  { name: "Logoipsum 8", src: "/images/logoipsum-1.svg" },
  { name: "Logoipsum 9", src: "/images/logoipsum-1.svg" },
  { name: "Logoipsum 10", src: "/images/logoipsum-1.svg" },
];

// Duplicate logos for seamless infinite scroll
const duplicatedLogos = [...logos, ...logos];

export const LogoCarousel = () => {
  return (
    <div className="w-full bg-black py-20">
      <div className="max-w-7xl mx-auto px-4 overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <motion.div
            animate={{
              x: [0, -150 * duplicatedLogos.length],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 50,
                ease: "linear",
              },
            }}
            className="flex items-center space-x-24"
          >
            {duplicatedLogos.map((logo, index) => (
              <div
                key={index}
                className="relative w-48 h-16 flex-shrink-0 grayscale opacity-40 hover:opacity-80 hover:grayscale-0 transition-all duration-300"
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
