'use client';
import { motion } from "framer-motion";

const WhyChooseUs = () => {
  return (
    <div className="bg-gray-50 py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.h2
          className="text-4xl font-bold text-center text-gray-900 sm:text-5xl"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Why Choose Us?
        </motion.h2>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-12 text-center">
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="text-indigo-600 text-3xl">✅</div>
            <p className="text-xl font-semibold text-gray-800">Quality You Can Trust</p>
            <p className="text-lg text-gray-600">We prioritize excellence in everything we do.</p>
          </motion.div>

          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <div className="text-indigo-600 text-3xl">✅</div>
            <p className="text-xl font-semibold text-gray-800">Personalized Solutions</p>
            <p className="text-lg text-gray-600">Tailored services to fit your lifestyle and goals.</p>
          </motion.div>

          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <div className="text-indigo-600 text-3xl">✅</div>
            <p className="text-xl font-semibold text-gray-800">Exceptional Support</p>
            <p className="text-lg text-gray-600">We’re here for you every step of the way.</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
