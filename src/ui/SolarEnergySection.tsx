import React from "react";
import { motion } from "framer-motion"; // Import Framer Motion for animations
import { FaCoins, FaLeaf, FaSolarPanel, FaHandHoldingHeart, FaPiggyBank } from "react-icons/fa";


function SolarEnergySection() {
  return (
      <div className="md:px-24 bg-gray-100">
        <div className=" py-20 flex justify-center items-center">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row lg:space-x-0">
      
        <div className="lg:w-1/2">
         
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className=" text-2xl md:text-4xl font-bold text-center md:text-left text-[#36689E] mb-8"
          >
            Power Your Home with Solar Energy
          </motion.h1>


          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-base md:text-xl text-center md:text-left text-gray-700 mb-16"
          >
            Save Money and Reduce Your Carbon Footprint
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            viewport={{ once: true }}
            className="flex items-center md:items-start justify-center md:justify-start mt-16"
          >
            <button className="bg-[#36689E] text-white px-8 py-3 rounded-lg text-base font-semibold hover:bg-[#4F8EC9] transition-colors duration-300">
              CONTACT US
            </button>
          </motion.div>
        </div>

        {/* Right Section: Grid of Benefits */}
        <div className="lg:w-1/2 mt-16 lg:mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Benefit 1: Reduce Electricity Bills */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-lg text-center"
            >
              <div className="text-[#36689E] flex justify-center items-center mb-4">
                <FaCoins className="text-3xl mr-2" />
                <h2 className="text-xl font-bold">Reduce Your Electricity Bills</h2>
              </div>
              <p className="text-gray-600">
                Save money by generating your own clean energy and reducing reliance on the grid.
              </p>
            </motion.div>

            {/* Benefit 2: Reduce Carbon Footprint */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-lg text-center"
            >
              <div className="text-[#36689E] flex justify-center items-center mb-4">
                <FaLeaf className="text-3xl mr-2" />
                <h2 className="text-xl font-bold">Reduce Your Carbon Footprint</h2>
              </div>
              <p className="text-gray-600">
                Lower your environmental impact by using renewable solar energy.
              </p>
            </motion.div>

            {/* Benefit 3: Cleaner Future */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-lg text-center"
            >
              <div className="text-[#36689E] flex justify-center items-center mb-4">
                <FaHandHoldingHeart className="text-3xl mr-2" />
                <h2 className="text-xl font-bold">Cleaner Future for Next Generations</h2>
              </div>
              <p className="text-gray-600">
                Contribute to a sustainable future by adopting solar energy today.
              </p>
            </motion.div>

            {/* Benefit 4: Solar Panels on Roofs */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-lg text-center"
            >
              <div className="text-[#36689E] flex justify-center items-center mb-4">
                <FaSolarPanel className="text-3xl mr-2" />
                <h2 className="text-xl font-bold">Enjoy Solar Panels on Your Roof</h2>
              </div>
              <p className="text-gray-600">
                Harness the power of the sun with sleek and efficient solar panels.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
      </div>
  );
}

export default SolarEnergySection;