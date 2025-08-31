import React from 'react'
import { motion } from 'framer-motion';
import SEOHead from '../components/SEOHead';
import commitment_safety from '../assets/images/commitment_safety.png';
import vista_labs from '../assets/images/vista_labs.png';
import fssai from '../assets/images/fssai.png';
import msme from '../assets/images/msme.png';
import apeda from '../assets/images/apeda.png';
import rotary from '../assets/images/rotary.png';
function Safety_Quality() {
  return (
    <div className="bg-gray-50 text-gray-800 px-6 md:px-20 py-12 space-y-16">
      <SEOHead 
        title="Safety & Quality - FSSAI Certified | Fruto Foods"
        description="Fruto Foods maintains highest safety and quality standards. FSSAI certified, APEDA approved, MSME recognized. Lab-tested natural food powders."
        keywords="FSSAI certified, food safety, quality assurance, APEDA approved, natural food powders safety"
      />
      
      {/* Heading Section */}
      <motion.section 
        className="text-center space-y-4"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-3xl md:text-4xl font-bold text-red-700">⚜️ Safety & Quality</h1>
        <p className="italic text-lg max-w-3xl mx-auto">
          “We are committed to delivering only natural and safe products that meet 
          the highest quality standards. Every batch is lab-tested and government-approved, 
          ensuring purity, nutrition, and trust in every pack.”
        </p>
      </motion.section>

      {/* Commitment to Safety */}
      <motion.section 
        className="grid md:grid-cols-2 gap-8 items-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <motion.img
          src={commitment_safety}
          alt="Safety commitment illustration showing quality assurance"
          className="w-48 mx-auto"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.1 }}
          loading="lazy"
        />
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-semibold text-red-700">⚜️ Our Commitment to Safety</h2>
          <p className="mt-4">
            Your health and trust mean everything to us, which is why we make safety our 
            top priority. From carefully selecting raw materials to the final packaging, 
            every step is done with cleanliness and care. We follow strict hygienic 
            practices to keep our products fresh, natural, and free from contamination. 
            Each batch is checked for quality and purity so you and your family can enjoy 
            our products with complete confidence.
          </p>
        </motion.div>
      </motion.section>

      {/* Quality Assurance */}
      <motion.section 
        className="grid md:grid-cols-2 gap-8 items-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-semibold text-red-700">⚜️ Our Quality Assurance</h2>
          <p className="mt-4">
            Quality is at the heart of everything we do. From sourcing the finest natural 
            ingredients to using careful processing methods, we ensure that every product 
            retains its freshness, taste, and nutrition. Our team follows strict quality 
            checks at every stage to make sure only the best reaches you. Each pack is 
            crafted with consistency and care, so you and your family can enjoy products 
            that are safe, pure, and reliable.
          </p>
        </motion.div>
        <motion.img 
          src={vista_labs} 
          alt="Vista Labs certification logo" 
          className="w-40 mx-auto"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.1 }}
          loading="lazy"
        />
      </motion.section>

      {/* Government Approved */}
      <motion.section 
        className="grid md:grid-cols-2 gap-8 items-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <motion.img 
          src={fssai} 
          alt="FSSAI certification logo - Food Safety and Standards Authority of India" 
          className="w-40 mx-auto"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.1 }}
          loading="lazy"
        />
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-semibold text-red-700">
            ⚜️ Government Approved & FSSAI Certified
          </h2>
          <p className="mt-4">
            All our products are FSSAI certified and approved by recognized government 
            bodies, ensuring the highest standards of safety and purity. From sourcing 
            to packaging, every step is monitored to meet strict legal and quality 
            requirements. This certification guarantees that our powders and ingredients 
            are safe, hygienic, and trustworthy for everyday use.
          </p>
        </motion.div>
      </motion.section>

      {/* MSME Recognition */}
      <motion.section 
        className="grid md:grid-cols-2 gap-8 items-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-semibold text-red-700">⚜️ Recognized by MSME – Govt. of India</h2>
          <p className="mt-4">
            Our products are also recognized by the Ministry of MSME, Government of India. 
            This certification reflects our credibility, ensuring that our powders and 
            ingredients are hygienic, safe, and trustworthy for everyday use.
          </p>
        </motion.div>
        <motion.img 
          src={msme} 
          alt="MSME Government of India recognition logo" 
          className="w-40 mx-auto"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.1 }}
          loading="lazy"
        />
      </motion.section>

      {/* APEDA Standards */}
      <motion.section 
        className="grid md:grid-cols-2 gap-8 items-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <motion.img 
          src={apeda} 
          alt="APEDA certification logo - Agricultural and Processed Food Products Export Development Authority" 
          className="w-40 mx-auto"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.1 }}
          loading="lazy"
        />
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-semibold text-red-700">⚜️ APEDA Approved Standards</h2>
          <p className="mt-4">
            Fruto Foods is registered with APEDA (Agriculture and Processed Food Products 
            Export Development Authority), Govt. of India. This ensures our products follow 
            strict safety, hygiene, and quality standards for both domestic and international 
            markets. With APEDA approval, we are committed to safe sourcing, careful processing, 
            and delivering naturally healthy products you can trust.
          </p>
        </motion.div>
      </motion.section>

      {/* Rotary Association */}
      <motion.section 
        className="grid md:grid-cols-2 gap-8 items-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-semibold text-red-700">
            ⚜️ Associated with Rotary International
          </h2>
          <p className="mt-4">
            Fruto Foods is proudly associated with Rotary International, a global organization 
            dedicated to community service, ethics, and social responsibility. This reflects our 
            commitment not only to safe and healthy food practices but also to contributing 
            positively to society. Through Rotary's values, we ensure honesty, fairness, and 
            responsibility in every step of our business.
          </p>
        </motion.div>
        <motion.img 
          src={rotary} 
          alt="Rotary International association logo" 
          className="w-40 mx-auto"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.1 }}
          loading="lazy"
        />
      </motion.section>
    </div>
  )
}

export default Safety_Quality