import React from 'react';
import { motion } from 'framer-motion';

const SocialIcon = ({ imgSrc, alt = "icon", link = "#", w = 5, h = 5, sw = 3, sh = 3 }) => (
  <motion.a
    href={link}
    className="w-10 h-10  text-green-700 rounded-full flex items-center justify-center"
    whileHover={{ scale: 1.2, rotate: 5 }}
    whileTap={{ scale: 0.9 }}
    transition={{ duration: 0.2 }}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={`Visit our ${alt} page`}
  >
    <motion.img 
      src={imgSrc} 
      alt={`${alt} social media icon`} 
      className={`md:w-${w} md:h-${h} w-${sw} h-${sh}`}
      whileHover={{ rotate: 10 }}
      transition={{ duration: 0.2 }}
    />
  </motion.a>
);

export default SocialIcon;
