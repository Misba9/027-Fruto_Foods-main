import React from 'react';
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
    <div id="products" className=" md:py-16 py-8  bg-[#C4EBB3BF]">

      <div className="container mx-auto z-10">
        <div className="flex  items-center md:ml-8 ml-4 text-6xl font-medium md:mb-6">
          <img src={star} alt="Star Icon" className=" inline-block " />

          <h2 className="md:text-6xl text-3xl ml-1 leading-none">
            <span className="md:border-b-4 border-b-3 border-[#7B2D26]">
              Our Prod</span>
            ucts
          </h2>
        </div>
        <p className="md:ml-14 ml-8 md:mt-8 mt-4 mx-auto md:text-2xl text-lg  text-gray-800 md:mb-12 ">"We bring you a wide range of natural powders made from fresh harvests — including fruit, vegetable, and herbal powders, each processed with utmost care to promise authentic taste, rich nutrition, and uncompromised quality."</p>
        <div className='md:mx-10 mx-8   relative overflow-hidden'>
          <div className='md:mt-20 mt-8'>
            <img src={tree} alt="Tree Background" className="absolute inset-0 w-full h-full object-cover z-0" />
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 md:gap-10 gap-5 relative z-10">
              {productList.map((product, index) => (
                <Link to={product.path} key={index}>
                  <div className=" rounded-lg shadow-lg  overflow-hidden group transform hover:-translate-y-2 transition-transform duration-300 border">
                    <img src={product.image} alt={product.name} className="md:w-full  md:h-56 h-full object-cover" />
                    <div className="md:p-4 p-1  text-center  font-semibold md:text-lg text-sm group-hover:bg-green-800 transition-colors">
                      <h3>{product.name}</h3>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;