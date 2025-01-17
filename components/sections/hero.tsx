import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="relative bg-black rounded-3xl overflow-hidden aspect-[21/9] flex items-center">
          {/* Content */}
          <div className="relative z-10 w-full py-16 md:py-24 px-8 md:px-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl"
            >
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Your AI-Powered<br />
                <span className="bg-gradient-to-r from-purple-500 to-purple-600 bg-clip-text text-transparent">Design</span> Assistant
              </h1>
              <p className="text-lg text-neutral-400 mb-8 max-w-xl">
                Unlock your creative potential. Seamlessly generate, customize, and perfect your designs with cutting-edge AI technology.
              </p>
              <div className="flex flex-col sm:flex-row items-start gap-4">
                <Button
                  size="lg"
                  className="bg-white text-black hover:bg-white/90 transition-colors w-full sm:w-auto text-lg py-6 px-8 rounded-xl"
                >
                  Get Started
                </Button>
                <Button
                  size="lg"
                  variant="ghost"
                  className="text-white border-white/20 hover:bg-white/10 transition-colors w-full sm:w-auto text-lg py-6 px-8 rounded-xl"
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
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500 via-purple-600 to-purple-700 rounded-full opacity-70 blur-3xl -translate-x-full scale-150" />
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-600 to-purple-800 rounded-full opacity-50 blur-3xl translate-x-1/2 -translate-y-1/2" />
            </div></motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
