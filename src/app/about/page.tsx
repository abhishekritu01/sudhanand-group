// 'use client'


// // Welcome to Sudhanand Group
// // Building a Healthier & Better Future

// // Who We Are
// // Founded in 2010 by Rtn. Dr. Arjun Sachidanand, Sudhanand Group is dedicated to transforming lives through affordable and accessible healthcare services. Over the years, we have expanded our reach into diverse sectors, including healthcare, hospitality, education, IT & BPO, organic farming, and sports. Guided by a commitment to innovation and excellence, we strive to create meaningful impact, improve communities, and drive positive change through our integrated solutions and quality-driven approach.
// // Our Vision
// // To provide affordable, accessible, inclusive, and quality healthcare services to five million rural and urban poor by 2025.
// // Our Mission
// // To serve the underserved by developing integrated healthcare infrastructure and implementing suitable healthcare schemes while maintaining a strong beneficiary focus.

// // Why Choose Us?
// // Quality You Can Trust – We prioritize excellence in everything we do.
// // Personalized Solutions – Tailored services to fit your lifestyle and goals.
// // Exceptional Support – We’re here for you every step of the way
// // Our Portfolio
// // We take pride in our diverse range of businesses, each dedicated to excellence and social impact:

// // Sudhanand Health Care Solutions Pvt. Ltd.
// // Sudhanand Business Solutions Pvt. Ltd.
// // Sudhanand Pharmacies Pvt. Ltd.
// // Tiameds Technologies Pvt. Ltd.
// // Sudhanand Hospitality Pvt. Ltd.
// // ARC Sportzone
// // Dr. M. D. Sachidananda Murthy Memorial Educational Trust ®
// // Sudhanand Farms

// // Our Team
// // Dr. Arjun Sachidanand - Managing Director 
// // Dr. Sini Arjun - Director
// // Capt. Raghu Das - COO
// // Vijay Asrani VP - Internal Finance
// // Abhinandan S. Rao VP - New Initiatives & Investments 
// // Meghana Jagadeesh VP - Pharma Division
// // Srinivas C. Head - Operations
// // Keshava Murthy C. Head - Internal Audits




// import { useState } from 'react'
// import { Dialog, DialogPanel } from '@headlessui/react'
// import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
// import {
//   AcademicCapIcon,
//   CheckCircleIcon,
//   HandRaisedIcon,
//   RocketLaunchIcon,
//   SparklesIcon,
//   SunIcon,
//   UserGroupIcon,
// } from '@heroicons/react/20/solid'

// const navigation = [
//   { name: 'Product', href: '#' },
//   { name: 'Features', href: '#' },
//   { name: 'Marketplace', href: '#' },
//   { name: 'Company', href: '#' },
// ]
// const stats = [
//   { label: 'Business was founded', value: '2012' },
//   { label: 'People on the team', value: '120+' },
//   { label: 'Users on the platform', value: '250k' },
//   { label: 'Paid out to creators', value: '$70M' },
// ]
// const values = [
//   {
//     name: 'Innovative',
//     description: 'We’re committed to delivering the best results for our clients by thinking outside the box.',
//     icon: SparklesIcon,
//   },
//   {
//     name: 'Transparent',
//     description: 'We believe in open communication and honesty to build trust with our clients.',
//     icon: SunIcon,
//   },
//   {
//     name: 'Collaborative',
//     description: 'We work together to achieve the best results for our clients and our company.',
//     icon: UserGroupIcon,
//   },
//   {
//     name: 'Passionate',
//     description: 'We love what we do and we’re passionate about delivering the best results for our clients.',
//     icon: HandRaisedIcon,
//   },
//   {
//     name: 'Educational',
//     description: 'We believe in sharing knowledge and educating our clients to help them achieve their goals.',
//     icon: AcademicCapIcon,
//   },
//   {
//     name: 'Results-driven',
//     description: 'We’re focused on delivering results that help our clients achieve their goals.',
//     icon: RocketLaunchIcon,
//   },
// ]
// const team = [
//   {
//     name: 'Jane Cooper',
//     role: 'Paradigm Representative',
//     location: 'San Francisco',
//     imageUrl:
//       'https://images.unsplash.com/photo-1550525811-e5869dd03032?auto=format&fit=crop&w=64&h=64&q=80',
//   },
//   {
//     name: 'Jane Cooper',
//     role: 'Paradigm Representative',
//     location: 'San Francisco',
//     imageUrl:
//       'https://images.unsplash.com/photo-1550525811-e5869dd03032?auto=format&fit=crop&w=64&h=64&q=80',
//   },
//   {
//     name: 'Jane Cooper',
//     role: 'Paradigm Representative',
//     location: 'San Francisco',
//     imageUrl:
//       'https://images.unsplash.com/photo-1550525811-e5869dd03032?auto=format&fit=crop&w=64&h=64&q=80',
//   },
//   {
//     name: 'Jane Cooper',
//     role: 'Paradigm Representative',
//     location: 'San Francisco',
//     imageUrl:
//       'https://images.unsplash.com/photo-1550525811-e5869dd03032?auto=format&fit=crop&w=64&h=64&q=80',
//   },
//   {
//     name: 'Jane Cooper',
//     role: 'Paradigm Representative',
//     location: 'San Francisco',
//     imageUrl:
//       'https://images.unsplash.com/photo-1550525811-e5869dd03032?auto=format&fit=crop&w=64&h=64&q=80',
//   },
//   {
//     name: 'Jane Cooper',
//     role: 'Paradigm Representative',
//     location: 'San Francisco',
//     imageUrl:
//       'https://images.unsplash.com/photo-1550525811-e5869dd03032?auto=format&fit=crop&w=64&h=64&q=80',
//   },
//   {
//     name: 'Jane Cooper',
//     role: 'Paradigm Representative',
//     location: 'San Francisco',
//     imageUrl:
//       'https://images.unsplash.com/photo-1550525811-e5869dd03032?auto=format&fit=crop&w=64&h=64&q=80',
//   },
//   {
//     name: 'Jane Cooper',
//     role: 'Paradigm Representative',
//     location: 'San Francisco',
//     imageUrl:
//       'https://images.unsplash.com/photo-1550525811-e5869dd03032?auto=format&fit=crop&w=64&h=64&q=80',    
//   },      
// ]
// const benefits = [
//   {
//     name: 'Competitive salary',
//     description: 'We offer competitive salaries and benefits to help you grow and thrive in your career.',
//     icon: CheckCircleIcon,
//   },
//   {
//     name: 'Remote work',
//     description: 'Work from anywhere in the world and enjoy the flexibility of remote work.',
//     icon: CheckCircleIcon,
//   },
//   {
//     name: 'Professional development',
//     description: 'We invest in your growth and development to help you achieve your career goals.',
//     icon: CheckCircleIcon,
//   },
//   {
//     name: 'Health and wellness',
//     description: 'We care about your well-being and offer health and wellness programs to support you.',
//     icon: CheckCircleIcon,
//   },
// ]


// export default function Example() {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

//   return (
//     <div className="bg-gray-900">
//       {/* Header */}
//       <header className="absolute inset-x-0 top-0 z-50">
//         <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
//           <div className="flex lg:flex-1">
//             <a href="#" className="-m-1.5 p-1.5">
//               <span className="sr-only">Your Company</span>
//               <img
//                 alt=""
//                 src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=500"
//                 className="h-8 w-auto"
//               />
//             </a>
//           </div>
//           <div className="flex lg:hidden">
//             <button
//               type="button"
//               onClick={() => setMobileMenuOpen(true)}
//               className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400"
//             >
//               <span className="sr-only">Open main menu</span>
//               <Bars3Icon aria-hidden="true" className="size-6" />
//             </button>
//           </div>
//           <div className="hidden lg:flex lg:gap-x-12">
//             {navigation.map((item) => (
//               <a key={item.name} href={item.href} className="text-sm/6 font-semibold text-white">
//                 {item.name}
//               </a>
//             ))}
//           </div>
//           <div className="hidden lg:flex lg:flex-1 lg:justify-end">
//             <a href="#" className="text-sm/6 font-semibold text-white">
//               Log in <span aria-hidden="true">&rarr;</span>
//             </a>
//           </div>
//         </nav>
//         <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
//           <div className="fixed inset-0 z-50" />
//           <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white/10">
//             <div className="flex items-center justify-between">
//               <a href="#" className="-m-1.5 p-1.5">
//                 <span className="sr-only">Your Company</span>
//                 <img
//                   alt=""
//                   src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=500"
//                   className="h-8 w-auto"
//                 />
//               </a>
//               <button
//                 type="button"
//                 onClick={() => setMobileMenuOpen(false)}
//                 className="-m-2.5 rounded-md p-2.5 text-gray-400"
//               >
//                 <span className="sr-only">Close menu</span>
//                 <XMarkIcon aria-hidden="true" className="size-6" />
//               </button>
//             </div>
//             <div className="mt-6 flow-root">
//               <div className="-my-6 divide-y divide-gray-500/25">
//                 <div className="space-y-2 py-6">
//                   {navigation.map((item) => (
//                     <a
//                       key={item.name}
//                       href={item.href}
//                       className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-gray-800"
//                     >
//                       {item.name}
//                     </a>
//                   ))}
//                 </div>
//                 <div className="py-6">
//                   <a
//                     href="#"
//                     className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-white hover:bg-gray-800"
//                   >
//                     Log in
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </DialogPanel>
//         </Dialog>
//       </header>

//       <main className="relative isolate">
//         {/* Background */}
//         <div
//           aria-hidden="true"
//           className="absolute inset-x-0 top-4 -z-10 flex transform-gpu justify-center overflow-hidden blur-3xl"
//         >
//           <div
//             style={{
//               clipPath:
//                 'polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)',
//             }}
//             className="aspect-[1108/632] w-[69.25rem] flex-none bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-25"
//           />
//         </div>

//         {/* Header section */}
//         <div className="px-6 pt-14 lg:px-8">
//           <div className="mx-auto max-w-2xl pt-24 text-center sm:pt-40">
//             <h1 className="text-5xl font-semibold tracking-tight text-white sm:text-7xl">Welcome to Sudhanand Group</h1>
//             <p className="mt-8 text-pretty text-lg font-medium text-gray-400 sm:text-xl/8">
//               Building a Healthier & Better Future for All Communities
//             </p>
//           </div>
//         </div>

//         {/* Content section */}
//         <div className="mx-auto mt-20 max-w-7xl px-6 lg:px-8">
//           <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
//             <div className="grid max-w-xl grid-cols-1 gap-8 text-base/7 text-gray-300 lg:max-w-none lg:grid-cols-2">
//               <div>
//                 <p>
//                   Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet
//                   vitae sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra tellus varius sit neque
//                   erat velit. Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris
//                   semper sed amet vitae sed turpis id.
//                 </p>
//                 <p className="mt-8">
//                   Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis odio id et. Id blandit molestie
//                   auctor fermentum dignissim. Lacus diam tincidunt ac cursus in vel. Mauris varius vulputate et ultrices
//                   hac adipiscing egestas.
//                 </p>
//               </div>
//               <div>
//                 <p>
//                   Erat pellentesque dictumst ligula porttitor risus eget et eget. Ultricies tellus felis id dignissim
//                   eget. Est augue maecenas risus nulla ultrices congue nunc tortor. Enim et nesciunt doloremque nesciunt
//                   voluptate.
//                 </p>
//                 <p className="mt-8">
//                   Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis odio id et. Id blandit molestie
//                   auctor fermentum dignissim. Lacus diam tincidunt ac cursus in vel. Mauris varius vulputate et ultrices
//                   hac adipiscing egestas. Iaculis convallis ac tempor et ut. Ac lorem vel integer orci.
//                 </p>
//               </div>
//             </div>
//             <dl className="mt-16 grid grid-cols-1 gap-x-8 gap-y-12 sm:mt-20 sm:grid-cols-2 sm:gap-y-16 lg:mt-28 lg:grid-cols-4">
//               {stats.map((stat, statIdx) => (
//                 <div key={statIdx} className="flex flex-col-reverse gap-y-3 border-l border-white/20 pl-6">
//                   <dt className="text-base/7 text-gray-300">{stat.label}</dt>
//                   <dd className="text-3xl font-semibold tracking-tight text-white">{stat.value}</dd>
//                 </div>
//               ))}
//             </dl>
//           </div>
//         </div>

//         {/* Image section */}
//         <div className="mt-32 sm:mt-40 xl:mx-auto xl:max-w-7xl xl:px-8">
//           <img
//             alt=""
//             src="/sudhanand.png"
//             className="aspect-[9/4] w-full object-cover xl:rounded-3xl"
//           />
//         </div>

//         {/* Values section */}
//         <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
//           <div className="mx-auto max-w-2xl lg:mx-0">
//             <h2 className="text-pretty text-4xl font-semibold tracking-tight text-white sm:text-5xl">Our values</h2>
//             <p className="mt-6 text-lg/8 text-gray-300">
//               Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste
//               dolor cupiditate blanditiis.
//             </p>
//           </div>
//           <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 text-base/7 text-gray-300 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-16">
//             {values.map((value) => (
//               <div key={value.name} className="relative pl-9">
//                 <dt className="inline font-semibold text-white">
//                   <value.icon aria-hidden="true" className="absolute left-1 top-1 size-5 text-indigo-500" />
//                   {value.name}
//                 </dt>{' '}
//                 <dd className="inline">{value.description}</dd>
//               </div>
//             ))}
//           </dl>
//         </div>

//         {/* Team section */}
//         <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
//           <div className="mx-auto max-w-2xl lg:mx-0">
//             <h2 className="text-pretty text-4xl font-semibold tracking-tight text-white sm:text-5xl">Our team</h2>
//             <p className="mt-6 text-lg/8 text-gray-300">
//               We’re a dynamic group of individuals who are passionate about what we do and dedicated to delivering the
//               best results for our clients.
//             </p>
//           </div>
//           <ul
//             role="list"
//             className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 xl:grid-cols-4"
//           >
//             {team.map((person) => (
//               <li key={person.name}>
//                 <img alt="" src={person.imageUrl} className="aspect-[14/13] w-full rounded-2xl object-cover" />
//                 <h3 className="mt-6 text-lg/8 font-semibold tracking-tight text-white">{person.name}</h3>
//                 <p className="text-base/7 text-gray-300">{person.role}</p>
//                 <p className="text-sm/6 text-gray-500">{person.location}</p>
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* CTA section */}
//         <div className="relative isolate -z-10 mt-32 sm:mt-40">
//           <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
//             <div className="mx-auto flex max-w-2xl flex-col gap-16 bg-white/5 px-6 py-16 ring-1 ring-white/10 sm:rounded-3xl sm:p-8 lg:mx-0 lg:max-w-none lg:flex-row lg:items-center lg:py-20 xl:gap-x-20 xl:px-20">
//               <img
//                 alt=""
//                 src="https://images.unsplash.com/photo-1519338381761-c7523edc1f46?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
//                 className="h-96 w-full flex-none rounded-2xl object-cover shadow-xl lg:aspect-square lg:h-auto lg:max-w-sm"
//               />
//               <div className="w-full flex-auto">
//                 <h2 className="text-pretty text-4xl font-semibold tracking-tight text-white sm:text-5xl">
//                   Join our team
//                 </h2>
//                 <p className="mt-6 text-pretty text-lg/8 text-gray-300">
//                   Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis
//                   in accusamus quisquam.
//                 </p>
//                 <ul
//                   role="list"
//                   className="mt-10 grid grid-cols-1 gap-x-8 gap-y-3 text-base/7 text-white sm:grid-cols-2"
//                 >
//                   {benefits.map((benefit) => (
//                     <li key={benefit.name} className="flex gap-x-3">
//                       <CheckCircleIcon aria-hidden="true" className="h-7 w-5 flex-none" />
//                       <div>
//                         <benefit.icon aria-hidden="true" className="h-7 w-5 flex-none" />
//                         <div>
//                           <p className="font-semibold">{benefit.name}</p>
//                           <p>{benefit.description}</p>
//                         </div>
//                       </div>
//                     </li>
//                   ))}
//                 </ul>
//                 <div className="mt-10 flex">
//                   <a href="#" className="text-sm/6 font-semibold text-indigo-400">
//                     See our job postings <span aria-hidden="true">&rarr;</span>
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div
//             aria-hidden="true"
//             className="absolute inset-x-0 -top-16 -z-10 flex transform-gpu justify-center overflow-hidden blur-3xl"
//           >
//             <div
//               style={{
//                 clipPath:
//                   'polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)',
//               }}
//               className="aspect-[1318/752] w-[82.375rem] flex-none bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-25"
//             />
//           </div>
//         </div>
//       </main>

//       {/* Footer */}
    
//     </div>
//   )
// }



import React from 'react'

const page = () => {
  return (
    <div>page</div>
  )
}

export default page