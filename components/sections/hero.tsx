import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="relative bg-neutral-900 rounded-3xl overflow-hidden aspect-video flex items-center">
          {/* Content */}
          <div className="relative z-10 w-full py-16 md:py-24 px-8 md:px-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-5xl mx-auto text-center"
            >
              <h1 className="text-7xl md:text-8xl lg:text-9xl 2xl:text-9xl font-bold text-white mb-10 leading-tight">
                Your AI-Powered<br />
                <span className="bg-gradient-to-r from-purple-500 to-purple-600 bg-clip-text text-transparent">Design</span> Assistant
              </h1>
              <p className="text-xl md:text-2xl text-neutral-400 mb-12 max-w-3xl mx-auto">
                Unlock your creative potential. Seamlessly generate, customize, and perfect your designs with cutting-edge AI technology.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button
                  size="lg"
                  className="bg-purple-500 text-white hover:bg-purple-600 transition-colors w-full sm:w-auto text-lg py-6 px-8 rounded-xl"
                >
                  Get Started
                </Button>
                <Button
                  size="lg"
                  variant="ghost"
                  className="text-white hover:bg-white/10 transition-colors w-full sm:w-auto text-lg py-6 px-8 rounded-xl"
                >
                  More Templates
                </Button>
              </div>
            </motion.div>
          </div>

          {/* Purple design element */}
          <motion.div
            className="absolute -bottom-1/3 -right-1/4 w-4/5 h-4/5"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ 
              opacity: 1, 
              scale: 1,
              y: [0, -20, 0]
            }}
            transition={{ 
              opacity: { duration: 1 },
              scale: { duration: 1 },
              y: {
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }}
          >
            <div>
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500 via-purple-600 to-purple-700 rounded-full opacity-70 blur-3xl transform -translate-x-1/3 scale-125" />
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-600 to-purple-800 rounded-full opacity-50 blur-3xl transform translate-x-1/4 -translate-y-1/4 scale-110" />
            </div></motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
