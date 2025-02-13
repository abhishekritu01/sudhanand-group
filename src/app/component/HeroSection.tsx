import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const HeroSection = () => {
  const words = ["Innovation", "Technology", "Healthcare"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative bg-white">
      <main>
        <div className="relative isolate overflow-hidden bg-gray-900 pb-24 pt-14 sm:pb-28">
          {/* Background Image with Parallax Effect */}
          <motion.img
            alt="Background"
            src="/1.jpeg"
            className="absolute inset-0 -z-10 h-full w-full object-cover brightness-50"
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
            transition={{ duration: 4, ease: "easeInOut" }}
          />

          {/* Gradient Overlay */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-b from-gray-900/50 to-gray-900/90"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />

          <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl py-36 sm:py-48 lg:py-56 text-center">
              
              {/* Animated Hero Title */}
              <motion.h1
                className="text-5xl font-bold tracking-tight text-white sm:text-7xl"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, delay: 0.2 }}
                whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
              >
                Building a <span className="text-indigo-400">{words[index]}</span> Future
              </motion.h1>

              {/* Hero Description */}
              <motion.p
                className="mt-6 text-lg font-medium text-gray-300 sm:text-xl/8"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, delay: 0.4 }}
              >
                We are a group of companies dedicated to providing the best services. Our goal is to shape a brighter tomorrow.
              </motion.p>

              {/* Scroll Down Indicator */}
              <motion.div
                className="mt-14 flex justify-center"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
              >
                <span className="text-gray-300 text-sm">Scroll Down</span>
                <motion.div
                  className="ml-2 w-6 h-6 border-b-2 border-r-2 border-gray-300 rotate-45"
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
              </motion.div>

            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HeroSection;


