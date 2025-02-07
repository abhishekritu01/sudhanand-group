'use client';
import { motion } from "framer-motion";

const Portfolio = () => {
  const industries = [
    { name: "Sudhanand Health Care Solutions Pvt. Ltd.", image: "/industry1.jpg" },
    { name: "Sudhanand Business Solutions Pvt. Ltd.", image: "/industry2.jpg" },
    { name: "Sudhanand Pharmacies Pvt. Ltd.", image: "/industry3.jpg" },
    { name: "Tiameds Technologies Pvt. Ltd.", image: "/industry4.jpg" },
    { name: "Sudhanand Hospitality Pvt. Ltd.", image: "/industry5.jpg" },
    { name: "ARC Sportzone", image: "/industry6.jpg" },
    { name: "Dr. M. D. Sachidananda Murthy Memorial Educational Trust ®", image: "/industry7.jpg" },
    { name: "Sudhanand Farms", image: "/industry8.jpg" },
  ];

  return (
    <div className="bg-white py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.h2
          className="text-4xl font-bold text-center text-gray-900 sm:text-5xl"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Our Portfolio
        </motion.h2>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              className="bg-gray-100 p-6 rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: index * 0.2 }}
            >
              <img
                src={industry.image}
                alt={industry.name}
                className="h-48 w-full object-cover rounded-md"
              />
              <h3 className="mt-4 text-xl font-semibold text-gray-800">{industry.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
