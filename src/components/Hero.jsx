import React, { useState, useEffect } from "react";
import { motion } from 'framer-motion';
import hero1 from '../assets/images/hero1.jpg';
import hero2 from '../assets/images/hero2.jpg';
import hero3 from '../assets/images/hero3.png';

const Hero = () => {
  const heroImages = [hero1, hero2, hero3];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    // This interval will loop through the images forward (0 -> 1 -> 2 -> 0 -> ...)
    const interval = setInterval(() => {
      setIndex(prevIndex => (prevIndex + 1) % heroImages.length);
    }, 4000); // slide every 4 seconds

    // Clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, [heroImages.length]); // Rerun effect if the number of images changes

  return (
  <section className="relative w-full overflow-hidden h-[30vh] md:h-[75vh]" role="banner">
      {/* Sliding images container */}
      <motion.div
        className="h-full flex transition-transform overflow-hidden duration-1000 ease-in-out"
        style={{
          width: `${heroImages.length * 100}%`,
          transform: `translateX(-${index * (100 / heroImages.length)}%)`,
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {heroImages.map((img, i) => (
          <div key={i} className="h-full flex-shrink-0" style={{ width: `${100 / heroImages.length}%` }}>
            <img
              src={img}
              alt={`Fruto Foods natural products showcase ${i + 1}`}
              className="w-full h-full object-cover object-center"
              style={{ minHeight: '100%', minWidth: '100%' }}
              loading={i === 0 ? "eager" : "lazy"}
            />
          </div>
        ))}
      </motion.div>

      {/* Overlay */}
      <div className="pointer-events-none absolute inset-0 bg-black/30 z-10"></div>

      {/* Text */}
      <motion.div 
        className="absolute inset-0 z-20 flex flex-col items-center justify-center text-white text-center px-2 md:px-4"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <motion.h1 
          className="text-2xl md:text-6xl font-extrabold mb-1 md:mb-2 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          Welcome to <br />
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            Fruto Foods
          </motion.span>
        </motion.h1>
        <motion.p 
          className="text-xs md:text-xl max-w-xs md:max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          India's premium supplier of Natural Food Powders & Ingredients
        </motion.p>
      </motion.div>
    </section>
  );
};

export default Hero;