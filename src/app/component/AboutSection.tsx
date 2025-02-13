import React from 'react';
import LogoComponent from './LogoComponent'; // Import LogoComponent

const AboutUs = () => {
  return (
    <section className="bg-gray-50 py-20 sm:py-28 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Header Section */}
        <h2 className="text-5xl font-extrabold text-gray-900 sm:text-6xl mb-10">
          About <span className="text-blue-600">Sudhanand Group</span>
        </h2>
        
        <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
          Founded in 2010 by <strong>Rtn. Dr. Arjun Sachidanand</strong>, Sudhanand Group is committed to making a lasting impact across multiple sectors. 
          Our mission is to foster innovation and deliver sustainable solutions in healthcare, education, IT, hospitality, and more.
        </p>

        {/* Company Values Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-16">
          <div className="bg-white shadow-lg rounded-xl p-8 transition-transform hover:scale-105">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Story</h3>
            <p className="text-gray-600">
              Established with the vision of accessible and affordable healthcare, we have expanded into diverse industries while staying true to our core mission of social betterment.
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-xl p-8 transition-transform hover:scale-105">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h3>
            <p className="text-gray-600">
              To develop innovative solutions that enhance quality of life, ensuring accessibility and sustainability in every service we provide.
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-xl p-8 transition-transform hover:scale-105">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Vision</h3>
            <p className="text-gray-600">
              To become a globally recognized leader in industries that drive positive change, shaping a better future for communities worldwide.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-300 my-16 w-3/4 mx-auto"></div>

        {/* Logo Section */}
        <div className="mt-16">
          <h3 className="text-3xl font-semibold text-gray-800 mb-8">Our Brands</h3>
          <LogoComponent />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
