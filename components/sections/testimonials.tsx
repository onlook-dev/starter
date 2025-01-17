import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Creative Director",
    company: "Design Studio",
    image: "https://picsum.photos/seed/testimonial1/200/200",
    quote: "Najm AI has revolutionized our design workflow. The AI-powered suggestions are incredibly accurate and save us countless hours.",
    rating: 5
  },
  {
    name: "Michael Chen",
    role: "Product Designer",
    company: "Tech Innovations",
    image: "https://picsum.photos/seed/testimonial2/200/200",
    quote: "The ability to generate and iterate on designs quickly has been a game-changer for our team. Najm AI understands our brand perfectly.",
    rating: 5
  },
  {
    name: "Emma Davis",
    role: "UI/UX Designer",
    company: "Creative Labs",
    image: "https://picsum.photos/seed/testimonial3/200/200",
    quote: "I was skeptical about AI design tools, but Najm has proven to be an invaluable assistant in my creative process.",
    rating: 5
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

export const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What Our Users Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how Najm AI is transforming the design process for creative professionals worldwide.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <motion.div
            animate={{ x: `-${currentIndex * 100}%` }}
            transition={{ type: "spring", damping: 20 }}
            className="flex"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={item}
                className="w-full flex-shrink-0 px-4"
              >
                <div className="bg-purple-50 rounded-2xl p-8 relative">
                  <div className="flex items-center mb-6">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600">{testimonial.role} at {testimonial.company}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-6">{testimonial.quote}</p>
                  <div className="flex items-center">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentIndex ? "bg-purple-600" : "bg-purple-200"
                }`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
