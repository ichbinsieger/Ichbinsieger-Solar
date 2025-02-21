import React from "react";
import { motion } from "framer-motion"; // Import Framer Motion for animations
import inverterimg from "../assets/men.jpg";
import men from "../assets/inverter.jpg";
import inverter from "../assets/me.jpg";
import work from '../assets/work.jpg'

function SectionA() {
  return (
    <div className="flex justify-center items-center -mt-24 pb-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
        {/* Image 1 with Gradient Border and Animation */}
        <motion.div
          initial={{ opacity: 0, y: 50 }} // Initial animation state
          whileInView={{ opacity: 1, y: 0 }} // Animate when in view
          transition={{ duration: 0.8, delay: 0.2 }} // Animation duration and delay
          viewport={{ once: true }} // Animate only once
          className="relative w-full h-64 overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 group"
          style={{
            background: "linear-gradient(45deg, #36689E, #4F8EC9)", // Gradient border
            padding: "4px", // Border width
          }}
        >
          <img
            src={inverterimg}
            alt="Inverter"
            className="w-full h-full object-cover rounded-lg"
          />
      
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30 rounded-lg"></div>
       
          <div className="absolute inset-0 border-2 border-white/20 rounded-lg pointer-events-none"></div>
        </motion.div>

    
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="relative w-full h-64 overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 group"
          style={{
            background: "linear-gradient(45deg, #36689E, #4F8EC9)", // Gradient border
            padding: "4px", // Border width
          }}
        >
          <img
            src={men}
            alt="Inverter"
            className="w-full h-full object-cover rounded-lg"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30 rounded-lg"></div>
          {/* Inner Glow Effect */}
          <div className="absolute inset-0 border-2 border-white/20 rounded-lg pointer-events-none"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="relative w-full h-64 overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 group"
          style={{
            background: "linear-gradient(45deg, #36689E, #4F8EC9)", // Gradient border
            padding: "4px", // Border width
          }}
        >
          <img
            src={inverter}
            alt="Inverter"
            className="w-full h-full object-cover rounded-lg"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30 rounded-lg"></div>
          {/* Inner Glow Effect */}
          <div className="absolute inset-0 border-2 border-white/20 rounded-lg pointer-events-none"></div>
        </motion.div>

        {/* Image 4 with Gradient Border and Animation */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="relative w-full h-64 overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 group"
          style={{
            background: "linear-gradient(45deg, #36689E, #4F8EC9)", // Gradient border
            padding: "4px", // Border width
          }}
        >
          <img
            src={work}
            alt="work"
            className="w-full h-full object-cover rounded-lg"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30 rounded-lg"></div>
          {/* Inner Glow Effect */}
          <div className="absolute inset-0 border-2 border-white/20 rounded-lg pointer-events-none"></div>
        </motion.div>
      </div>
    </div>
  );
}

export default SectionA;