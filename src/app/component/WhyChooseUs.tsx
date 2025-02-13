'use client';
import { motion } from "framer-motion";

const WhyChooseUs = () => {
  return (
    <section className="bg-gray-100 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-12 items-center">
          {/* Left Side - Title & Description */}
          <motion.div 
            className="lg:col-span-5 text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-5xl font-bold text-gray-900">
              Why Choose <span className="text-blue-600">Sudhanand Group?</span>
            </h2>
            <p className="mt-6 text-lg text-gray-600">
              We bring decades of experience, cutting-edge innovation, and a client-first approach 
              to help businesses grow and thrive in a competitive landscape.
            </p>
          </motion.div>

          {/* Right Side - Feature Cards */}
          <div className="mt-12 lg:mt-0 lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-8">
            {/* Feature 1 */}
            <motion.div
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition transform hover:-translate-y-2"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <div className="text-blue-600 text-5xl mb-4">🏆</div>
              <h3 className="text-2xl font-semibold text-gray-800">Unmatched Expertise</h3>
              <p className="text-lg text-gray-600 mt-2">
                Over 10 years of experience delivering world-class solutions across industries.
              </p>
            </motion.div>

            {/* Feature 2 */}
            <motion.div
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition transform hover:-translate-y-2"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <div className="text-blue-600 text-5xl mb-4">🚀</div>
              <h3 className="text-2xl font-semibold text-gray-800">Innovative Solutions</h3>
              <p className="text-lg text-gray-600 mt-2">
                We utilize state-of-the-art technology to create game-changing solutions.
              </p>
            </motion.div>

            {/* Feature 3 */}
            <motion.div
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition transform hover:-translate-y-2"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              <div className="text-blue-600 text-5xl mb-4">🤝</div>
              <h3 className="text-2xl font-semibold text-gray-800">Client-Centric Approach</h3>
              <p className="text-lg text-gray-600 mt-2">
                Our solutions are designed to cater to your specific needs and goals.
              </p>
            </motion.div>

            {/* Feature 4 */}
            <motion.div
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition transform hover:-translate-y-2"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              <div className="text-blue-600 text-5xl mb-4">🌍</div>
              <h3 className="text-2xl font-semibold text-gray-800">Global Impact</h3>
              <p className="text-lg text-gray-600 mt-2">
                Serving businesses across the globe with tailored, scalable solutions.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
