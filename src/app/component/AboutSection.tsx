import React from 'react';

const AboutUs = () => {
  return (
    <div className="bg-gray-50 py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-900 sm:text-5xl">
          About Sudhanand Group
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {/* Overview Section */}
          <div className="flex flex-col items-center justify-center bg-white shadow-lg p-6 rounded-lg">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Story</h3>
            <p className="text-lg text-gray-600 text-center">
              Founded in 2010 by <strong>Rtn. Dr. Arjun Sachidanand</strong>, Sudhanand Group is dedicated to transforming lives through
              <strong> affordable, accessible healthcare</strong> and creating a positive impact across diverse sectors.
            </p>
          </div>

          {/* Mission Section */}
          <div className="flex flex-col items-center justify-center bg-white shadow-lg p-6 rounded-lg">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h3>
            <p className="text-lg text-gray-600 text-center">
              We aim to improve communities through innovative solutions in healthcare, education, IT, hospitality, and more.
            </p>
          </div>

          {/* Vision Section */}
          <div className="flex flex-col items-center justify-center bg-white shadow-lg p-6 rounded-lg">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Vision</h3>
            <p className="text-lg text-gray-600 text-center">
              To be a global leader in delivering affordable healthcare and services that drive positive change and better living standards.
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <h3 className="text-3xl font-semibold text-gray-800 mb-6">What We Do</h3>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Over the years, Sudhanand Group has diversified into multiple sectors, including healthcare, hospitality, education, IT & BPO, organic farming, and sports. We focus on integrated solutions that promote sustainability, community well-being, and access to quality services for all.
          </p>
        </div>

        {/* List of Sectors */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="flex flex-col items-center justify-center bg-white shadow-lg p-6 rounded-lg">
            <h4 className="text-xl font-semibold text-gray-800 mb-4">Healthcare</h4>
            <p className="text-gray-600 text-center">
              Affordable healthcare solutions that aim to improve the quality of life in communities.
            </p>
          </div>

          <div className="flex flex-col items-center justify-center bg-white shadow-lg p-6 rounded-lg">
            <h4 className="text-xl font-semibold text-gray-800 mb-4">Hospitality</h4>
            <p className="text-gray-600 text-center">
              Providing high-quality hospitality services to ensure comfort and satisfaction.
            </p>
          </div>

          <div className="flex flex-col items-center justify-center bg-white shadow-lg p-6 rounded-lg">
            <h4 className="text-xl font-semibold text-gray-800 mb-4">Education</h4>
            <p className="text-gray-600 text-center">
              Empowering communities through quality education and skill development initiatives.
            </p>
          </div>

          <div className="flex flex-col items-center justify-center bg-white shadow-lg p-6 rounded-lg">
            <h4 className="text-xl font-semibold text-gray-800 mb-4">IT & BPO</h4>
            <p className="text-gray-600 text-center">
              Delivering innovative IT solutions and business process outsourcing services.
            </p>
          </div>

          <div className="flex flex-col items-center justify-center bg-white shadow-lg p-6 rounded-lg">
            <h4 className="text-xl font-semibold text-gray-800 mb-4">Organic Farming</h4>
            <p className="text-gray-600 text-center">
              Promoting sustainable agriculture to improve food security and environmental health.
            </p>
          </div>

          <div className="flex flex-col items-center justify-center bg-white shadow-lg p-6 rounded-lg">
            <h4 className="text-xl font-semibold text-gray-800 mb-4">Sports</h4>
            <p className="text-gray-600 text-center">
              Supporting physical well-being through sports initiatives and community engagement.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
