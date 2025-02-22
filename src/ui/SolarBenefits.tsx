import React from 'react';
import { FaUserCheck, FaUsers, FaTrophy, FaComments } from 'react-icons/fa';

const SolarBenefits = () => {
  return (
    <div className="bg-gray-50 py-12">
        <h2 className=" text-xl md:text-3xl font-bold text-center mb-8">Why Choose Us for Solar Solutions?</h2>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
     
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <FaUserCheck className="text-4xl text-green-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Experience Matters</h3>
            <p className="text-gray-600">
              Our engineers bring combined expertise to every project.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <FaUsers className="text-4xl text-green-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Customer-Centric Approach</h3>
            <p className="text-gray-600">
              We prioritize your needs and goals, ensuring a seamless experience.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <FaTrophy className="text-4xl text-green-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Proven Track Record</h3>
            <p className="text-gray-600">
              Countless successful installations have earned us the trust of homeowners and businesses.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <FaComments className="text-4xl text-green-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Transparent Communication</h3>
            <p className="text-gray-600">
              We explain every step of the process so you know exactly what to expect.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolarBenefits;