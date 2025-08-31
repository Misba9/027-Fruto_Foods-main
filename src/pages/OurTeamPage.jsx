import React from 'react'
import { motion } from 'framer-motion';
import SEOHead from '../components/SEOHead';
import logo_large from '../assets/images/logo_large.png';

function OurTeamPage() {
  return (
    <div className=' md:m-12 m-8 '>
      <SEOHead 
        title="Our Team - Fruto Foods | Experienced Leadership"
        description="Meet the Fruto Foods team led by Mr. K. V. Prasad with 30+ years industry experience. Dedicated team of professionals committed to quality."
        keywords="fruto foods team, K V Prasad, food industry experience, natural food manufacturer team"
      />
      
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
              <h2 className='text-4xl md:text-7xl'><span className='border-b-3 border-[#c33E2F]'>Fruto Foo</span>ds</h2>
              <p className='mt-2 md:ml-64 ml-20 text-xltext-gray-600 md:text-2xl'> ~Natures goodness in every spoon</p>
      </motion.div>
      <motion.div 
        className='flex flex-col md:flex-row justify-center items-center gap-2'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
              <h3 className='text-xl md:text-3xl mt-10 text-gray-800 mb-6 leading-none md:leading-snug'>“We are committed to providing authentic, high-quality food products and ingredients, ensuring excellent packaging, timely delivery, and efficient after-sales service to achieve the highest level of customer satisfaction worldwide.”</h3>
              <motion.img 
                src={logo_large} 
                alt="Fruto Foods company logo" 
                className="mb-4 w-60 h-60 md:w-100 md:h-100 md:mr-10"
                whileHover={{ scale: 1.05, rotate: 2 }}
                transition={{ duration: 0.3 }}
                loading="lazy"
              />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
              <h2 className='text-3xl md:text-5xl mt-8 md:mt-12 leading-none '><span className='text-[#c33E2F]'>❖</span><span className='border-b-3 border-[#c33E2F] ml-1'>Our Tea</span>m</h2>
              <p className='mt-4 ml-4 text-lg md:text-3xl md:mt-8 text-gray-800 leading-none font-sans md:leading-snug'>At Fruto Foods, we are led by <b>Mr. K. V. Prasad</b>, a highly experienced professional with over 30 years of expertise in the industry. Backed by a dedicated team of ten skilled members, we specialize in Manufacturing, Supplying, Sales, Marketing, and After-Sales Service, working together to deliver quality and trust at every step.</p>
      </motion.div>
    </div>
  )
}

export default OurTeamPage