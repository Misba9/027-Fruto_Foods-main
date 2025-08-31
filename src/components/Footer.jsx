import React from 'react';
import { motion } from 'framer-motion';
import SocialIcon from './SocialIcon';
import star from '../assets/images/star.png';
import logo_large from '../assets/images/logo_large.png';
import call from '../assets/images/call_icon.png';
import mail from '../assets/images/mail_icon.png';
import location from '../assets/images/location_icon.png';
import whatsapp from '../assets/images/whatsapp_icon.png';
import facebook from '../assets/images/facebook_icon.png';
import linkedin from '../assets/images/linkedin_icon.png';
import instagram from '../assets/images/instagram_icon.png';
import { Link } from 'react-router-dom';

const Footer = () => {
  const QuickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Safety & Quality', href: '/safety-quality' },
    { name: 'Contact', href: '/contact' },
    { name: 'Our Team', href: '/our-team' },
    { name: 'Privacy Policy', href: '/privacy-policy' }
  ];
  return (
    <motion.footer 
      className="bg-[#B0D79F] text-gray-700"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
    
    
<div className="container mx-auto px-3 pt-6 pb-6 md:px-10 md:pt-10 md:pb-10">
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-center lg:text-left">
    
    {/* Quick Links */}
    <motion.div
      className="px-2"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      viewport={{ once: true }}
    >
      <h4 className="font-bold text-sm sm:text-lg md:text-2xl mb-2 md:mb-4 text-green-800 flex items-center justify-center lg:justify-start">
        <motion.img
          src={star}
          alt="Star"
          className="inline-block mr-2 w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8"
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.5 }}
        />
        <span className="border-b-2 md:border-b-4 border-[#7B2D26]">
          Quick Links
        </span>
      </h4>
      <ul className="space-y-1 md:space-y-3">
        {QuickLinks.map((link, index) => (
          <motion.li
            key={index}
            className="flex items-center justify-center lg:justify-start"
            whileHover={{ x: 5 }}
            transition={{ duration: 0.2 }}
          >
            <motion.img
              src={star}
              alt="Star"
              className="inline-block mr-2 w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4"
              whileHover={{ rotate: 180 }}
              transition={{ duration: 0.3 }}
            />
            <Link
              to={link.href}
              className="hover:text-green-700 hover:underline text-xs sm:text-sm md:text-lg transition-all duration-300"
            >
              {link.name}
            </Link>
          </motion.li>
        ))}
      </ul>
    </motion.div>

    {/* Logo & Socials */}
    <motion.div
      className="flex flex-col items-center justify-center px-2"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      viewport={{ once: true }}
    >
      <motion.img
        src={logo_large}
        alt="Fruto Foods company logo"
        className="mb-2 w-16 h-16 sm:w-28 sm:h-28 md:w-44 md:h-44"
        whileHover={{ scale: 1.05, rotate: 2 }}
        transition={{ duration: 0.3 }}
      />
      <div className="flex flex-row space-x-3 sm:space-x-5 mt-2">
        <SocialIcon imgSrc={facebook} alt="Facebook" link="https://facebook.com" w={5} h={5} />
        <SocialIcon imgSrc={linkedin} alt="LinkedIn" link="https://linkedin.com" w={5} h={5} />
        <SocialIcon imgSrc={whatsapp} alt="WhatsApp" link="https://whatsapp.com" w={6} h={6} />
        <SocialIcon imgSrc={instagram} alt="Instagram" link="https://instagram.com" w={5} h={5} />
      </div>
    </motion.div>

    {/* Contacts */}
    <motion.div
      className="text-center lg:text-left px-2"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.6 }}
      viewport={{ once: true }}
    >
      <h4 className="font-bold text-sm sm:text-lg md:text-2xl mb-2 md:mb-4 text-green-800 flex items-center justify-center lg:justify-start">
        <motion.img
          src={star}
          alt="Star"
          className="inline-block mr-2 w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8"
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.5 }}
        />
        <span className="border-b-2 md:border-b-4 border-[#7B2D26]">Our Contacts</span>
      </h4>
      <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm md:text-lg">
        <motion.li
          className="flex items-center justify-center lg:justify-start"
          whileHover={{ x: 5 }}
          transition={{ duration: 0.2 }}
        >
          <img src={call} alt="Phone" className="mr-2 w-4 h-4 sm:w-5 sm:h-5 md:w-7 md:h-7" />
          <span>+91 98765 43210</span>
        </motion.li>
        <motion.li
          className="flex items-center justify-center lg:justify-start"
          whileHover={{ x: 5 }}
          transition={{ duration: 0.2 }}
        >
          <img src={mail} alt="Mail" className="mr-2 w-4 h-4 sm:w-5 sm:h-5 md:w-7 md:h-7" />
          <span>info@frutofoods.com</span>
        </motion.li>
        <motion.li
          className="flex items-center justify-center lg:justify-start"
          whileHover={{ x: 5 }}
          transition={{ duration: 0.2 }}
        >
          <img src={location} alt="Location" className="mr-2 w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />
          <span className="max-w-xs sm:max-w-md break-words">
            #12-13-418/4, Street.no.1, Tarnaka, Hyderabad 5000017, Telangana, India
          </span>
        </motion.li>
      </ul>
    </motion.div>
  </div>

  {/* Bottom Bar */}
  <motion.div
    className="mt-6 md:mt-10 pt-3 border-t-2 border-[#C33E2F] text-center text-[10px] sm:text-xs md:text-sm text-gray-800 flex flex-col md:flex-row items-center md:justify-between gap-2"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 0.8 }}
    viewport={{ once: true }}
  >
    <p>
      Copyright © 2025{" "}
      <span className="text-[#C33E2F] border-b border-[#C33E2F]">
        <a href="#">Fruto Foods</a>
      </span>
      . All Rights Reserved.
    </p>
    <p>
      Designed & Developed{" "}
      <span className="text-[#C33E2F] border-b border-[#C33E2F]">
        <a href="#">TechFusion Hustlers</a>
      </span>
    </p>
  </motion.div>
</div>


    </motion.footer>
  );
}

export default Footer;