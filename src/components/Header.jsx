import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import logo from '../assets/images/logo_small.png';
import { NavLink, Link } from 'react-router-dom';
import PagesData from '../Data/PagesData.js';

// SVG Icons are small and only used here, so they can stay in this file.
const MenuIcon = (props) => (
  <svg {...props} stroke="currentColor" fill="currentColor" strokeWidth="1" viewBox="0 0 24 24" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg"><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path></svg>
);
const CloseIcon = (props) => (
  <svg {...props} stroke="currentColor" fill="currentColor" strokeWidth="1" viewBox="0 0 24 24" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path></svg>
);

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const navLinks = [
    { name: "Home", to: "/" }, 
    { name: "About", to: "/about" }, 
    { name: "Safety & Quality", to: "/safety-quality" },
    { name: "Our Team", to: "/our-team" }, 
    { name: "Contact", to: "/contact" }
  ];

  return (
    <header className="bg-[#B0D79F] shadow-md  top-0 z-50  ">
      <nav className="container  px-4 py-2">
        <div className="flex justify-between items-center mb-1">
          <Link to="/" className="flex flex-col items-center group">
            <motion.img 
              src={logo} 
              alt="Fruto Foods Logo - Premium Natural Food Powders" 
              className="md:h-20 h-15 ml-1 transition-transform duration-300 group-hover:scale-105" 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            />
            <p className='text-xs md:text-sm ml-2 font-semibold group-hover:text-green-700 transition-colors duration-300'><i>we build trust</i></p>
          </Link>
         <div className="hidden md:flex items-center space-x-7">
  {navLinks.map((link, index) => (
    <>
      {/* Render nav link */}
      <motion.div key={link.name} whileHover={{ y: -2 }} whileTap={{ y: 0 }}>
        <NavLink
          to={link.to}
          className={({ isActive }) =>
            `px-2 py-2 text-black text-xl font-sans font-semibold rounded-lg transition-all duration-300 ease-in-out hover:border-2 hover:shadow-lg hover:bg-green-50 ${
              isActive ? "border-2 shadow-lg bg-green-100" : ""
            }`
          }
        >
          {link.name}
        </NavLink>
      </motion.div>

      {/* Insert Products dropdown after "About" */}
      {link.name === "About" && (
        <div
          className="relative"
          onMouseEnter={() => setIsProductsOpen(true)}
          onMouseLeave={() => setIsProductsOpen(false)}
        >
          <motion.button
            className="px-2 py-2 text-black text-xl font-sans font-semibold rounded-lg transition-all duration-300 ease-in-out hover:border-2 hover:shadow-lg hover:bg-green-50 flex items-center gap-1"
            whileHover={{ y: -2 }}
            whileTap={{ y: 0 }}
          >
            Products
            <motion.div
              animate={{ rotate: isProductsOpen ? 180 : 0 }}
              transition={{ duration: 0.2 }}
            >
              <ChevronDown size={16} />
            </motion.div>
          </motion.button>

          <AnimatePresence>
            {isProductsOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50"
              >
                {PagesData.map((product) => (
                  <Link
                    key={product.id}
                    to={`/products/${product.id}`}
                    className="flex items-center px-4 py-3 hover:bg-green-50 transition-colors duration-200 group"
                  >
                    <img
                      src={product.title_Icon}
                      alt={`${product.title} icon`}
                      className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform duration-200"
                    />
                    <span className="text-gray-700 group-hover:text-green-700 transition-colors duration-200">
                      {product.title}
                    </span>
                  </Link>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}
    </>
  ))}
</div>

          
          <div className="md:hidden">
            <motion.button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-black focus:outline-none"
              whileTap={{ scale: 0.95 }}
            >
              {isOpen ? <CloseIcon size={32} /> : <MenuIcon size={32} />}
            </motion.button>
          </div>
        </div>
        
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden mt-4 overflow-hidden"
            >
            <ul className="flex flex-col items-center space-y-2">
              {navLinks.map(link => (
                <li key={link.name}>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <NavLink
                    to={link.to}
                    className={({ isActive }) =>
                      `block px-4 py-2 text-black font-semibold font-sans rounded transition-all duration-300 ${isActive ? 'bg-green-700 text-white' : 'hover:bg-green-300'}`
                    }
                    onClick={() => setIsOpen(false)}
                    >
                    {link.name}
                    </NavLink>
                  </motion.div>
                </li>
              ))}
              
              {/* Mobile Products Menu */}
              <li className="w-full">
                <motion.button
                  onClick={() => setIsProductsOpen(!isProductsOpen)}
                  className="w-full px-4 py-2 text-black font-semibold font-sans rounded hover:bg-green-300 transition-all duration-300 flex items-center justify-center gap-1"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Products
                  <motion.div
                    animate={{ rotate: isProductsOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown size={16} />
                  </motion.div>
                </motion.button>
                
                <AnimatePresence>
                  {isProductsOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="mt-2 space-y-1 overflow-hidden"
                    >
                      {PagesData.map((product) => (
                        <Link
                          key={product.id}
                          to={`/products/${product.id}`}
                          className="flex items-center px-6 py-2 text-gray-700 hover:bg-green-100 transition-colors duration-200"
                          onClick={() => {
                            setIsOpen(false);
                            setIsProductsOpen(false);
                          }}
                        >
                          <img 
                            src={product.title_Icon} 
                            alt={`${product.title} icon`}
                            className="w-4 h-4 mr-2" 
                          />
                          <span className="text-sm">{product.title}</span>
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Header;