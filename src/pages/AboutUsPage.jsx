import React from "react";
import { motion } from 'framer-motion';
import SEOHead from '../components/SEOHead';
import logo from "../assets/images/logo_large.png";
import leafImg from "../assets/images/leaf.png";

function AboutUsPage() {
  return (
    <div className="bg-white text-gray-800 font-sans">
      <SEOHead 
        title="About Us - Fruto Foods | Natural Food Ingredients Manufacturer"
        description="Learn about Fruto Foods - India's trusted manufacturer of natural food powders and ingredients. 30+ years experience, FSSAI certified, APEDA approved."
        keywords="about fruto foods, natural food manufacturer, FSSAI certified, APEDA approved, food ingredients supplier"
      />
      
      {/* Header */}
      <motion.header 
        className="py-12 border-b border-gray-200 bg-white"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
  <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center px-6">
    
    {/* Left Side Text */}
    <motion.div 
      className="text-left flex flex-col justify-center"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <h1 className="text-4xl font-bold text-green-800">Fruto Foods</h1>
      <p className="italic text-gray-600 mt-2">
        ~ Nature’s Goodness in Every Spoon
      </p>
      <blockquote className="mt-4 text-lg italic font-semibold text-gray-700">
        “We are committed to providing authentic, high-quality food products and
        ingredients, ensuring excellent packaging, timely delivery, and efficient
        after-sales service to achieve the highest level of customer satisfaction
        worldwide.”
      </blockquote>
    </motion.div>

    {/* Right Side Logo */}
    <motion.div 
      className="flex justify-center md:justify-end"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
    >
      <motion.img
        src={logo}
        alt="Fruto Foods company logo"
        className="w-40 md:w-56"
        whileHover={{ scale: 1.05, rotate: 2 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>

  </div>
      </motion.header>




      {/* About Us Section */}
      <motion.section 
        className="max-w-6xl mx-auto px-6 py-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl font-bold text-red-700 mb-4">❖ About Us</h2>

<div className="grid md:grid-cols-2 gap-10 items-center">
  {/* Image - Left Side */}
  <motion.div 
    className="flex justify-center md:justify-start"
    initial={{ opacity: 0, x: -50 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8, delay: 0.2 }}
    viewport={{ once: true }}
  >
    <motion.img 
      src={leafImg} 
      alt="Natural leaf illustration representing organic products" 
      className="w-48 md:w-64"
      whileHover={{ scale: 1.1, rotate: 5 }}
      transition={{ duration: 0.3 }}
      loading="lazy"
    />
  </motion.div>

  {/* Text - Right Side */}
  <motion.div 
    className="text-left"
    initial={{ opacity: 0, x: 50 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8, delay: 0.4 }}
    viewport={{ once: true }}
  >
    <p className="mb-4">
      At <span className="font-semibold">Fruto Foods</span>, we believe that nature holds the secret 
      to true health and wellness. Our journey began with a simple vision – to bring natural, safe, 
      and high-quality food powders and ingredients to people everywhere.
    </p>
    <p className="mb-4">
      We specialize in crafting a wide range of products including fruit powders, vegetable powders, 
      spices, grains, pulses, and millets – all processed with care to preserve their natural taste 
      and nutrition. From handpicking the freshest produce to following strict hygienic practices, 
      every step of our process is designed to maintain purity and quality. With advanced processing 
      methods like drying and grinding, we ensure that our products remain rich in nutrients and flavor.
    </p>
    <p>
      At Fruto Foods, quality and safety are not just promises but values we live by. Every product goes 
      through thorough checks for consistency, freshness, and taste before reaching you. Driven by innovation 
      and guided by integrity, we strive to be a brand that families can always rely on. With Fruto Foods, 
      you don’t just get food – you get a promise of health, purity, and care.
    </p>
  </motion.div>
</div>

      </motion.section>

      {/* Mission & Vision Section */}
      <motion.section 
        className="bg-gray-50 py-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 px-6">
          {/* Mission */}
          <motion.div 
            className="border p-6 rounded-2xl shadow-md bg-white"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02, shadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" }}
          >
            <h3 className="text-xl font-bold text-red-700 mb-2">❖ Our Mission</h3>
            <p>
              Our Mission is to deliver World-Class Products and Services with excellence in Quality, 
              Packaging, Delivery, and Customer Care – ensuring the utmost Satisfaction of people Worldwide.
            </p>
          </motion.div>

          {/* Vision */}
          <motion.div 
            className="border p-6 rounded-2xl shadow-md bg-white"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02, shadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" }}
          >
            <h3 className="text-xl font-bold text-red-700 mb-2">❖ Our Vision</h3>
            <p>
              To build Trust among people, we EnVision becoming the industry’s leading producer, 
              recognizing for our commitment to delivering high-quality products that truly meet people’s needs.
            </p>
          </motion.div>
        </div>
      </motion.section>

    </div>
  );
}

export default AboutUsPage;
