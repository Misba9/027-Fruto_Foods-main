import React from "react";
import { motion } from 'framer-motion';
import worldmap from "../assets/images/World_Map.png";
import star from "../assets/images/star.png";
import frutoLogo from "../assets/images/logo_large.png";

const About = () => (
  <motion.section
    id="about-us"
    className="relative bg-[#C4EBB3] overflow-hidden"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
  >
    {/* Background White Watermark (World Map) */}
    <img
      src={worldmap}
      alt="World map background showing global reach of Fruto Foods"
      className="absolute inset-0 w-full h-full object-contain object-center brightness-800 mix-blend-screen z-0"
      loading="lazy"
    />

    {/* Content */}
    <div className="relative pt-2 z-20 container mx-auto px-4">
      <motion.div 
        className="md:text-7xl text-3xl font-semibold ml-3"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        Fruto Foods
      </motion.div>
      <motion.div 
        className="md:text-4xl text-lg font-medium mt-2 md:ml-60 ml-15"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
      >
        ~ Nature’s Goodness in Every Spoon
      </motion.div>

      {/* Heading */}
      <motion.div 
        className="flex items-center text-6xl leading-none mt-6"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        viewport={{ once: true }}
      >
        <motion.img 
          src={star} 
          alt="Decorative star icon" 
          className="inline-block mr-2 w-7 md:w-auto"
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.5 }}
        />
        <h2 className="md:text-6xl text-3xl font-medium leading-none">
          <span className="md:border-b-4 border-b-3 border-[#7B2D26] pb-1 inline-block">
            Who We
          </span>{" "}
          Are?
        </h2>
      </motion.div>

      {/* Text + Logo */}
<div className="flex flex-col-reverse md:flex-row items-start md:items-center mt-2">
  {/* Text Section */}
  <motion.div 
    className="w-full md:w-1/2 text-left text-gray-900 pr-6"
    initial={{ opacity: 0, x: -30 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8, delay: 0.8 }}
    viewport={{ once: true }}
  >
    <p className="mb-2 md:text-2xl text-lg font-sans">
      Fruto Foods International are the manufacturer and supplier of
      natural plant-based food ingredients, Nutraceuticals supplier to
      food, Beverages, Cosmetics, Tea and Capsule industries.
    </p>
    <p className="mb-2 md:text-2xl text-lg font-sans">
      We are committed to providing authentic, high-quality food products
      and ingredients, ensuring excellent packaging, timely delivery, and
      efficient after-sales service to achieve the highest level of
      customer satisfaction worldwide.
    </p>
  </motion.div>

  {/* Logo Section */}
  <motion.div 
    className="w-full md:w-1/2 flex justify-center md:justify-end pr-8 mb-4 md:mb-0"
    initial={{ opacity: 0, x: 30 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8, delay: 1 }}
    viewport={{ once: true }}
  >
    <motion.img
      src={frutoLogo}
      alt="Fruto Foods company logo"
      className="w-40 md:w-auto md:max-w-md object-contain"
      whileHover={{ scale: 1.05, rotate: 2 }}
      transition={{ duration: 0.3 }}
    />
  </motion.div>
</div>

    </div>
  </motion.section>
);

export default About;
