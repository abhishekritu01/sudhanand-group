'use client';
import { motion } from "framer-motion";

const VisionMission = () => {
  return (
    <div className="bg-white py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.h2
          className="text-4xl font-bold text-center text-gray-900 sm:text-5xl"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Our Vision & Our Mission
        </motion.h2>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-16 text-center">
          {/* Vision */}
          <div>
            <motion.h3
              className="text-2xl font-semibold text-gray-800"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              Our Vision
            </motion.h3>
            <motion.p
              className="text-lg text-gray-600"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              To provide affordable, accessible, inclusive, and quality healthcare services to five million rural and urban poor by 2025.
            </motion.p>
          </div>

          {/* Mission */}
          <div>
            <motion.h3
              className="text-2xl font-semibold text-gray-800"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              Our Mission
            </motion.h3>
            <motion.p
              className="text-lg text-gray-600"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              To serve the underserved by developing integrated healthcare infrastructure and creating effective healthcare schemes, ensuring we remain focused on our beneficiaries’ needs.
            </motion.p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisionMission;
