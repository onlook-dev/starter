import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const plans = [
  {
    name: "FREE",
    price: "0",
    period: "m",
    tagline: "Free forever",
    features: [
      "Basic AI-generated designs",
      "Access to customization tools",
      "Standard templates library",
      "5 projects per month"
    ]
  },
  {
    name: "BASIC",
    price: "14.99",
    period: "m",
    tagline: "Billed Monthly",
    features: [
      "Advanced AI-generated designs",
      "Full access to customization tools",
      "Premium templates library",
      "Unlimited projects",
      "Real-time collaboration",
      "Priority email support"
    ]
  },
  {
    name: "PRO",
    price: "29.99",
    period: "m",
    tagline: "Billed Monthly",
    features: [
      "All features included in Pro Plan",
      "Dedicated account manager",
      "Custom AI solutions and designs",
      "Onboarding and training sessions",
      "24/7 priority support",
      "Advanced analytics and reporting",
      "Secure cloud storage"
    ]
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

export const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);

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
            Affordable Plans for Every Need
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the perfect plan for your design projects, from startups to enterprises. Our pricing tiers are designed to offer flexibility and value.
          </p>
          
          <div className="flex items-center justify-center mt-8 space-x-4">
            <span className={`text-sm ${!isYearly ? 'text-purple-600 font-semibold' : 'text-gray-600'}`}>Monthly</span>
            <button
              onClick={() => setIsYearly(!isYearly)}
              className="relative w-14 h-7 bg-purple-600 rounded-full transition-colors duration-200 focus:outline-none"
            >
              <motion.div
                className="absolute w-5 h-5 bg-white rounded-full top-1"
                animate={{ left: isYearly ? "calc(100% - 24px)" : "4px" }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            </button>
            <span className={`text-sm ${isYearly ? 'text-purple-600 font-semibold' : 'text-gray-600'}`}>Yearly</span>
          </div>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              variants={item}
              className="bg-white p-8 rounded-2xl shadow-lg"
            >
              <div className="text-center mb-8">
                <h3 className="text-lg font-semibold text-purple-600 mb-4">{plan.name}</h3>
                <div className="text-4xl font-bold text-gray-900 mb-2">
                  ${isYearly ? (Number(plan.price) * 10).toFixed(2) : plan.price}
                  <span className="text-lg font-normal text-gray-600">/{plan.period}</span>
                </div>
                <p className="text-gray-600">{plan.tagline}</p>
              </div>
              
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-gray-700">
                    <Check className="w-5 h-5 text-purple-600 mr-2 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button
                className="w-full"
                variant={index === 1 ? "default" : "outline"}
              >
                Get Started
              </Button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
