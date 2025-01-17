import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-neutral-950 py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="relative bg-neutral-900 rounded-3xl overflow-hidden aspect-[16/9] flex items-center">
          {/* Content */}
          <div className="relative z-10 w-full py-16 md:py-20 px-6 md:px-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-5xl mx-auto text-center"
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-8">
                Your <span className="text-purple-500">AI-Powered</span><br />
                Design Assistant
              </h1>
              <p className="text-xl md:text-2xl text-neutral-400 mb-12 max-w-3xl mx-auto">
                Unlock your creative potential. Seamlessly generate, customize, and perfect your designs with cutting-edge AI technology.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <Button
                  size="lg"
                  className="bg-purple-600 text-white hover:bg-purple-700 transition-colors w-full sm:w-auto text-lg py-6 px-8"
                >
                  Get Started
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-white border-neutral-800 hover:bg-neutral-800 transition-colors w-full sm:w-auto text-lg py-6 px-8"
                >
                  More Templates
                </Button>
              </div>
            </motion.div>
          </div>

          {/* Purple design element */}
          <motion.div
            className="absolute -bottom-1/4 -right-1/4 w-3/4 h-full"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500 via-purple-600 to-purple-800 rounded-tl-full opacity-80 blur-3xl" /></motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
