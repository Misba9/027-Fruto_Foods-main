import React from "react";
import { motion } from 'framer-motion';
import branches from "../assets/images/branches.png"; // branches PNG
import process from "../assets/images/process.png"; // process diagram PNG
import star from "../assets/images/star.png";

const Process = () => (
  <motion.div 
    id="process" 
    className="relative md:py-16 py-8 overflow-hidden bg-white"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
  >
    {/* Branches Background */}
    <img
      src={branches}
      alt="Natural branches background decoration"
      className="absolute inset-0 w-full h-full md:object-cover object-center z-0"
      loading="lazy"
    />

    {/* Gray Overlay */}
    {/* <div className="absolute inset-0 bg-gray-200/40 z-0"></div> */}

    {/* Content */}
    <div className=" px-6 leading-none z-10 ">
      <motion.div 
        className="flex items-center md:ml-12 md:text-6xl font-medium md:mb-6"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <motion.img 
          src={star} 
          alt="Decorative star icon" 
          className="inline-block"
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.5 }}
        />

        <h2 className="md:text-6xl text-3xl ml-1 leading-none">
          <span className="md:border-b-4 border-b-3 border-[#7B2D26]">Our Proc</span>ess</h2>
      </motion.div>
      <motion.p 
        className="md:ml-14 ml-5 md:text-3xl text-lg mx-auto text-gray-800 md:mb-8 mt-2 md:mt-0"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
      >
        “From handpicking fresh harvests to careful cleaning, gentle drying, fine grinding, and secure packaging — our process preserves nature’s purity and delivers wholesome goodness straight to you.”
      </motion.p>
      <motion.div 
        className="flex justify-center"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        viewport={{ once: true }}
      >
        <motion.img 
          src={process} 
          alt="Detailed process diagram showing our quality manufacturing steps" 
          className="w-full max-w-4xl h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          loading="lazy"
        />
      </motion.div>
    </div>
  </motion.div>
);

export default Process;
