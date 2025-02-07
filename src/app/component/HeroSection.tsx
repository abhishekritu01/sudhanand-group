// const HeroSection = () => {
//   return (
//     <div className="bg-white">
//       <main>
//         {/* Hero section */}
//         <div className="relative isolate overflow-hidden bg-gray-900 pb-16 pt-14 sm:pb-20">
//           <img
//             alt=""
//             // src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2830&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
//             src="/"
//             className="absolute inset-0 -z-10 size-full object-cover brightness-10 "
//           />
//           <div
//             aria-hidden="true"
//             className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
//           >
//             <div
//               style={{
//                 clipPath:
//                   'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
//               }}
//               className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
//             />
//           </div>
//           <div className="mx-auto max-w-7xl px-6 lg:px-8">
//             <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
//               <div className="hidden sm:mb-8 sm:flex sm:justify-center">
//                 <div className="relative rounded-full px-3 py-1 text-sm/6 text-gray-400 ring-1 ring-white/10 hover:ring-white/20">
//                   Welcome to Sudhanand Group.{' '}
//                   <a href="#" className="font-semibold text-white">
//                     <span aria-hidden="true" className="absolute inset-0" />
//                     Read more <span aria-hidden="true">&rarr;</span>
//                   </a>
//                 </div>
//               </div>
//               <div className="text-center">
//                 <h1 className="text-balance text-5xl font-semibold tracking-tight text-white sm:text-7xl">
//                   Building a Healthier & Better Future
//                 </h1>
//                 <p className="mt-8 text-pretty text-lg font-medium text-gray-400 sm:text-xl/8">
//                   We are a group of companies that are dedicated to providing the best services to our customers. We
//                   believe in building a healthier and better future for everyone.

//                 </p>
//                 <div className="mt-10 flex items-center justify-center gap-x-6">
//                   <a
//                     href="#"
//                     className="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
//                   >
//                     Get started
//                   </a>
//                   <a href="#" className="text-sm/6 font-semibold text-white">
//                     Learn more <span aria-hidden="true">→</span>
//                   </a>
//                 </div>
//               </div>
//             </div>
//             {/* Logo cloud */}
//             <div className="mx-auto grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
//               <img
//                 alt="Transistor"
//                 src="https://tailwindui.com/plus/img/logos/158x48/transistor-logo-white.svg"
//                 width={158}
//                 height={48}
//                 className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
//               />
//               <img
//                 alt="Reform"
//                 src="https://tailwindui.com/plus/img/logos/158x48/reform-logo-white.svg"
//                 width={158}
//                 height={48}
//                 className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
//               />
//               <img
//                 alt="Tuple"
//                 src="https://tailwindui.com/plus/img/logos/158x48/tuple-logo-white.svg"
//                 width={158}
//                 height={48}
//                 className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
//               />
//               <img
//                 alt="SavvyCal"
//                 src="https://tailwindui.com/plus/img/logos/158x48/savvycal-logo-white.svg"
//                 width={158}
//                 height={48}
//                 className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
//               />
//               <img
//                 alt="Statamic"
//                 src="https://tailwindui.com/plus/img/logos/158x48/statamic-logo-white.svg"
//                 width={158}
//                 height={48}
//                 className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
//               />
//             </div>
//           </div>
//           <div
//             aria-hidden="true"
//             className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
//           >
//             <div
//               style={{
//                 clipPath:
//                   'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
//               }}
//               className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
//             />
//           </div>
//         </div>
//       </main>
//     </div>
//   )
// }
// export default HeroSection



// "use client";
// import { motion } from "framer-motion";

// const HeroSection = () => {
//   return (
//     <div className="bg-white">
//       <main>
//         {/* Hero section */}
//         <div className="relative isolate overflow-hidden bg-gray-900 pb-16 pt-14 sm:pb-20">
//           {/* Background Image with Fade-In Effect */}
//           <motion.img
//             initial={{ opacity: 0, scale: 1.1 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 1 }}
//             src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2830&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
//             className="absolute inset-0 -z-10 size-full object-cover brightness-10"
//             alt=""
//           />

//           {/* Floating Gradient Animation */}
//           <motion.div
//             aria-hidden="true"
//             className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
//             initial={{ opacity: 0, y: -50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1.5, ease: "easeOut" }}
//           >
//             <div
//               style={{
//                 clipPath:
//                   "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
//               }}
//               className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
//             />
//           </motion.div>

//           {/* Hero Content */}
//           <div className="mx-auto max-w-7xl px-6 lg:px-8">
//             <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56 text-center">
//               <motion.h1
//                 className="text-balance text-5xl font-semibold tracking-tight text-white sm:text-7xl"
//                 initial={{ opacity: 0, y: 30 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.2, duration: 1 }}
//               >
//                 Building a Healthier & Better Future
//               </motion.h1>
//               <motion.p
//                 className="mt-8 text-pretty text-lg font-medium text-gray-400 sm:text-xl/8"
//                 initial={{ opacity: 0, y: 30 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.4, duration: 1 }}
//               >
//                 We are a group of companies dedicated to providing the best services to our customers.
//               </motion.p>

//               {/* Buttons with Hover Animation */}
//               <motion.div
//                 className="mt-10 flex items-center justify-center gap-x-6"
//                 initial={{ opacity: 0, y: 30 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.6, duration: 1 }}
//               >
//                 <motion.a
//                   href="#"
//                   className="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
//                   whileHover={{ scale: 1.1 }}
//                 >
//                   Get started
//                 </motion.a>
//                 <motion.a
//                   href="#"
//                   className="text-sm/6 font-semibold text-white"
//                   whileHover={{ scale: 1.1 }}
//                 >
//                   Learn more <span aria-hidden="true">→</span>
//                 </motion.a>
//               </motion.div>
//             </div>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default HeroSection;





// 'use client';
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <div className="relative bg-white">
      <main>
        {/* Hero section */}
        <div className="relative isolate overflow-hidden bg-gray-900 pb-16 pt-14 sm:pb-20">
          
          {/* Background Image with Parallax Effect */}
          <motion.img
            alt="Background"
            src="/1.jpeg"
            className="absolute inset-0 -z-10 h-full w-full object-cover brightness-10 "
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
            transition={{ duration: 3, ease: "easeInOut" }}
          />

          {/* Gradient Overlay */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-b from-gray-900/60 to-gray-900/90"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />

          <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56 text-center">
              
              {/* Animated Badge */}
              <motion.div
                className="hidden sm:mb-8 sm:flex sm:justify-center"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              >
                <div className="relative rounded-full bg-white/10 px-3 py-1 text-sm/6 text-gray-300 ring-1 ring-white/20 hover:ring-white/40">
                  Welcome to Sudhanand Group.
                  <a href="#" className="font-semibold text-white">
                    <span aria-hidden="true" className="absolute inset-0" />
                    Read more <span aria-hidden="true">&rarr;</span>
                  </a>
                </div>
              </motion.div>

              {/* Hero Title */}
              <motion.h1
                className="text-5xl font-bold tracking-tight text-white sm:text-7xl"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, delay: 0.2 }}
              >
                Building a Healthier & Better Future
              </motion.h1>

              {/* Hero Description */}
              <motion.p
                className="mt-8 text-lg font-medium text-gray-400 sm:text-xl/8"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, delay: 0.4 }}
              >
                We are a group of companies dedicated to providing the best services. We
                believe in building a healthier and better future for everyone.
              </motion.p>

              {/* Call to Action Buttons */}
              <motion.div
                className="mt-10 flex items-center justify-center gap-x-6"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, delay: 0.6 }}
              >
                <motion.a
                  href="#"
                  className="rounded-md bg-indigo-500 px-6 py-3 text-lg font-semibold text-white shadow-lg hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get started
                </motion.a>
                <motion.a
                  href="#"
                  className="text-lg font-semibold text-white underline decoration-indigo-500"
                  whileHover={{ scale: 1.1 }}
                >
                  Learn more <span aria-hidden="true">→</span>
                </motion.a>
              </motion.div>
            </div>

            {/* Floating Logo Cloud Animation */}
            <motion.div
              className="mx-auto grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5, delay: 0.8 }}
            >
              {[
                "https://tailwindui.com/plus/img/logos/158x48/transistor-logo-white.svg",
                "https://tailwindui.com/plus/img/logos/158x48/reform-logo-white.svg",
                "https://tailwindui.com/plus/img/logos/158x48/tuple-logo-white.svg",
                "https://tailwindui.com/plus/img/logos/158x48/savvycal-logo-white.svg",
                "https://tailwindui.com/plus/img/logos/158x48/statamic-logo-white.svg",
              ].map((src, index) => (
                <motion.img
                  key={index}
                  alt="Company Logo"
                  src={src}
                  width={158}
                  height={48}
                  className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                  initial={{ y: 0 }}
                  animate={{ y: [0, -8, 0] }}
                  transition={{
                    repeat: Infinity,
                    duration: 3,
                    ease: "easeInOut",
                    delay: index * 0.3,
                  }}
                />
              ))}
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HeroSection;
