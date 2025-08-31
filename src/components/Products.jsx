import React from 'react';
import { motion } from 'framer-motion';
import star from '../assets/images/star.png';
import tree from '../assets/images/tree.png';
import moringa from '../assets/images/moringa.png';
import raw_banana from '../assets/images/raw_banana.png';
import turmeric from '../assets/images/turmeric.png';
import garlic from '../assets/images/garlic.png';
import ginger from '../assets/images/ginger.png';
import ashwagandha from '../assets/images/ashwagandha.png';
import grains from '../assets/images/grains.png';
import pulses from '../assets/images/pulses.png';
import millets from '../assets/images/millets.png';
import { Link } from 'react-router-dom';

const Products = () => {
  const productList = [
    { name: 'Moringa Powder', image: moringa,path:"/products/1" },
    { name: 'Raw Banana Powder', image: raw_banana,path:"/products/2" },
    { name: 'Turmeric Powder', image: turmeric,path:"/products/3" },
    { name: 'Garlic Powder', image: garlic,path:"/products/4" },
    { name: 'Ginger Powder', image: ginger,path:"/products/5" },
    { name: 'Grains', image: grains,path:"/products/7" },
    { name: 'Pulses', image: pulses,path:"/products/8" },
    { name: 'Millets', image: millets, path: "/products/9" },
    { name: 'Ashwagandha Powder', image: ashwagandha,path:"/products/6" },

  ];

  return (
    <motion.div 
      id="products" 
      className="md:py-16 py-8 bg-[#C4EBB3BF]"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >

      <div className="container mx-auto z-10">
        <motion.div 
          className="flex items-center md:ml-8 ml-4 text-6xl font-medium md:mb-6"
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
            <span className="md:border-b-4 border-b-3 border-[#7B2D26]">
              Our Prod</span>
            ucts
          </h2>
        </motion.div>
        <motion.p 
          className="md:ml-14 ml-8 md:mt-8 mt-4 mx-auto md:text-2xl text-lg text-gray-800 md:mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          "We bring you a wide range of natural powders made from fresh harvests — including fruit, vegetable, and herbal powders, each processed with utmost care to promise authentic taste, rich nutrition, and uncompromised quality."
        </motion.p>
        <div className='md:mx-10 mx-8   relative overflow-hidden'>
          <div className='md:mt-20 mt-8'>
            <img 
              src={tree} 
              alt="Natural tree background decoration" 
              className="absolute inset-0 w-full h-full object-cover z-0"
              loading="lazy"
            />
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 md:gap-10 gap-5 relative z-10">
              {productList.map((product, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link to={product.path}>
                    <div className="rounded-lg shadow-lg overflow-hidden group transition-all duration-300 border hover:shadow-2xl hover:border-green-500">
                      <motion.img 
                        src={product.image} 
                        alt={`${product.name} - Premium natural powder from Fruto Foods`} 
                        className="md:w-full md:h-56 h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="md:p-4 p-1 text-center font-semibold md:text-lg text-sm group-hover:bg-green-800 group-hover:text-white transition-all duration-300">
                      <h3>{product.name}</h3>
                    </div>
                  </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Products;