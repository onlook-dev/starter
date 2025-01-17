import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const blogPosts = [
  {
    title: "The Future of AI in Design",
    excerpt: "Explore how artificial intelligence is revolutionizing the design industry and shaping creative workflows.",
    image: "https://picsum.photos/seed/blog1/800/600",
    date: "Jan 15, 2024",
    readTime: "5 min read"
  },
  {
    title: "Mastering Design Automation",
    excerpt: "Learn how to leverage AI tools to automate repetitive design tasks and focus on creativity.",
    image: "https://picsum.photos/seed/blog2/800/600",
    date: "Jan 12, 2024",
    readTime: "4 min read"
  },
  {
    title: "AI Design Best Practices",
    excerpt: "Discover the essential guidelines for working effectively with AI-powered design tools.",
    image: "https://picsum.photos/seed/blog3/800/600",
    date: "Jan 10, 2024",
    readTime: "6 min read"
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

export const Blog = () => {
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
            Latest Insights
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest trends and insights in AI-powered design.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {blogPosts.map((post, index) => (
            <motion.div
              key={index}
              variants={item}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="relative h-48">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-600 mb-3">
                  <span>{post.date}</span>
                  <span className="mx-2">•</span>
                  <span>{post.readTime}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {post.excerpt}
                </p>
                <Button
                  variant="ghost"
                  className="text-purple-600 hover:text-purple-700"
                >
                  Read More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;
