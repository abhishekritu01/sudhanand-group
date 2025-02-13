// 'use client';
// import { motion } from "framer-motion";

// const Portfolio = () => {
//   const industries = [
//     { name: "Sudhanand Health Care Solutions Pvt. Ltd.", image: "/industry1.jpg" },
//     { name: "Sudhanand Business Solutions Pvt. Ltd.", image: "/industry2.jpg" },
//     { name: "Sudhanand Pharmacies Pvt. Ltd.", image: "/industry3.jpg" },
//     { name: "Tiameds Technologies Pvt. Ltd.", image: "/industry4.jpg" },
//     { name: "Sudhanand Hospitality Pvt. Ltd.", image: "/industry5.jpg" },
//     { name: "ARC Sportzone", image: "/industry6.jpg" },
//     { name: "Dr. M. D. Sachidananda Murthy Memorial Educational Trust ®", image: "/industry7.jpg" },
//     { name: "Sudhanand Farms", image: "/industry8.jpg" },
//   ];

//   return (
//     <section className="bg-gray-100 py-24">
//       <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
//         {/* Header Section */}
//         <div className="lg:grid lg:grid-cols-12 lg:gap-12 items-center">
//           <motion.div 
//             className="lg:col-span-5 text-center lg:text-left"
//             initial={{ opacity: 0, x: -50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 1 }}
//           >
//             <h2 className="text-5xl font-bold text-gray-900">
//               Our <span className="text-blue-600">Diverse Portfolio</span>
//             </h2>
//             <p className="mt-6 text-lg text-gray-600">
//               At Sudhanand Group, we lead multiple industries, providing innovative solutions 
//               in healthcare, business, hospitality, education, and more.
//             </p>
//           </motion.div>
//         </div>

//         {/* Portfolio Grid */}
//         <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//           {industries.map((industry, index) => (
//             <motion.div
//               key={index}
//               className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition transform hover:-translate-y-2"
//               initial={{ opacity: 0, y: 40 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 1, delay: index * 0.2 }}
//             >
//               <img
//                 src={industry.image}
//                 alt={industry.name}
//                 className="h-48 w-full object-cover rounded-md"
//               />
//               <h3 className="mt-4 text-xl font-semibold text-gray-800 text-center">{industry.name}</h3>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Portfolio;





'use client';
import { motion } from "framer-motion";

const industries = [
  { name: "Sudhanand Health Care Solutions Pvt. Ltd.", image: "/CUREPLUS HOSPITALS.png" },
  { name: "Sudhanand Business Solutions Pvt. Ltd.", image: "/SBPL.png" },
  { name: "Sudhanand Pharmacies Pvt. Ltd.", image: "/CUREPLUS PHARMA.png" },
  { name: "Tiameds Technologies Pvt. Ltd.", image: "/TIAMEDS.png" },
  { name: "Sudhanand Hospitality Pvt. Ltd.", image: "/SHPL.png" },
  { name: "ARC Sportzone", image: "/ARC.png" },
  { name: "Dr. M. D. Sachidananda Murthy Memorial Educational Trust ®", image: "/SSPL.png" },
  { name: "Sudhanand Farms", image: "/FOUR SEASONS.png" },
];

const Portfolio = () => {
  return (
    <section className="bg-gray-100 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="lg:grid lg:grid-cols-12 lg:gap-12 items-center">
          <motion.div 
            className="lg:col-span-5 text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-5xl font-bold text-gray-900">
              Our <span className="text-blue-600">Diverse Portfolio</span>
            </h2>
            <p className="mt-6 text-lg text-gray-600">
              At Sudhanand Group, we lead multiple industries, providing innovative solutions 
              in healthcare, business, hospitality, education, and more.
            </p>
          </motion.div>
        </div>

        {/* Portfolio Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-3 hover:scale-105"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: index * 0.2 }}
            >
              <motion.img
                src={industry.image}
                alt={industry.name}
                className="h-48 w-full object-contain rounded-md transition-all duration-500 hover:opacity-80"
                whileHover={{ scale: 1.05, opacity: 0.9 }}
              />
              <h3 className="mt-6 text-xl font-semibold text-gray-800 text-center transition-colors duration-300 hover:text-blue-600">
                {industry.name}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
