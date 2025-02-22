import  { useState, useEffect } from "react";
import { motion } from "framer-motion"; 
import inverterimg from "../assets/men.jpg";
import men from "../assets/inverter.jpg";
import inverter from "../assets/me.jpg";
import work from "../assets/work.jpg";

function SectionA() {
  const images = [inverterimg, men, inverter, work];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length); 
    }, 6000); 

    return () => clearInterval(interval); 
  }, [images.length]);

  return (
    <div className="flex justify-center items-center -mt-24 pb-10">
   
      <div className="md:hidden w-full max-w-sm px-4">
        <motion.div
          key={currentImageIndex} 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }} 
          className="relative w-full h-64 overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 group"
          style={{
            background: "linear-gradient(45deg, #36689E, #4F8EC9)",
            padding: "4px",
          }}
        >
          <img
            src={images[currentImageIndex]} 
            alt="Inverter"
            className="w-full h-full object-cover rounded-lg"
          />
        
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30 rounded-lg"></div>
       
          <div className="absolute inset-0 border-2 border-white/20 rounded-lg pointer-events-none"></div>
        </motion.div>
      </div>


      <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
        {images.map((image, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -50 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="relative w-full h-64 overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 group"
            style={{
              background: "linear-gradient(45deg, #36689E, #4F8EC9)",
              padding: "4px", 
            }}
          >
            <img
              src={image}
              alt="Inverter"
              className="w-full h-full object-cover rounded-lg"
            />
           
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30 rounded-lg"></div>
           
            <div className="absolute inset-0 border-2 border-white/20 rounded-lg pointer-events-none"></div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default SectionA;