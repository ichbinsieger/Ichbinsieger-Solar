import React from 'react'
import { motion } from "framer-motion";
function Hero() {
  return (
    <div>
         <div className="bg-[url('./assets/roof2.jpg')] bg-cover relative h-[100vh] bg-center">
 
         <div className="absolute inset-0 bg-black/50"></div>
         <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-white text-3xl md:text-5xl leading-relaxed font-bold"
          >
            Efficient Solar Energy Starts Here <br />
            Power Smarter, Live{" "}
            <span className="text-green-500">Greener</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="text-white mt-4 md:mt-6 text-lg md:text-xl"
          >
            Harness the power of the sun with our solar solutions.
          </motion.p>
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="mt-6 md:mt-8 bg-green-500 text-white font-semibold px-6 py-3 rounded-lg hover:bg-green-600 transition-colors"
          >
              <a href="#contact"c className='cursor-pointer'>   Get a free quote </a>
          </motion.button>
         </div>
          </div>

</div>
  )
}

export default Hero