import React, { useState } from "react";
import { motion, AnimatePresence } from 'framer-motion';
import SEOHead from '../components/SEOHead';
function ProductsPage({ product }) {

  const { title, title_Image, title_Icon, bg_img, content, benefits, applications } = product;


  const [activeTab, setActiveTab] = useState("benefits");


  const getTabClassName = (tabName) => {
    return `px-6 py-2 text-lg font-semibold rounded-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 ${activeTab === tabName
        ? "bg-green-500 text-white shadow-lg"
        : "bg-gray-100 text-gray-700 hover:bg-green-400"
      }`;
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <SEOHead 
        title={`${title} - Premium Natural Powder | Fruto Foods`}
        description={content.substring(0, 160)}
        keywords={`${title.toLowerCase()}, natural powder, organic, FSSAI certified, health benefits`}
      />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 ">
        {/* Top Section: Title, Image, and Content */}
        <motion.div 
          className="flex justify-center mb-12"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
              {title}
            </h1>
            <motion.span 
              className="block w-40 h-1 bg-[#C33E2F] mx-auto"
              initial={{ width: 0 }}
              animate={{ width: 160 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            />
          </div>
          <motion.img 
            src={title_Icon} 
            alt={`${title} product icon`} 
            className="ml-2 w-12 h-12 md:w-18 md:h-18 inline-block object-cover" 
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={{ rotate: 360 }}
          />
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <motion.img
            src={title_Image}
            alt={`${title} - Premium natural powder product image`}
            className="rounded-2xl shadow-xl border-2  w-full h-auto object-cover aspect-video"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
            loading="lazy"
          />
          <motion.p 
            className="text-gray-800 leading-relaxed text-justify text-lg md:text-2xl"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {content}
          </motion.p>
        </motion.div>

        {/* Divider */}
        {/* <div className="border-t-2 border-[#C33E2F] mb-12"></div> */}

        {/* Tab Buttons: Benefits & Applications */}
        <motion.div 
          className="flex mt-14 items-center gap-4 mb-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <motion.button
            onClick={() => setActiveTab("benefits")}
            className={getTabClassName("benefits")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            Benefits
          </motion.button>
          <motion.button
            onClick={() => setActiveTab("applications")}
            className={getTabClassName("applications")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            Applications
          </motion.button>

        </motion.div>
        <motion.div 
          className="border-t-3 ml-20 border-[#C33E2F] mb-4"
          initial={{ width: 0 }}
          animate={{ width: "calc(100% - 5rem)" }}
          transition={{ duration: 0.8, delay: 1.2 }}
        />

        {/* Content Area: Displays content based on the active tab */}
        <motion.div 
          className="relative overflow-hidden p-8 min-h-[300px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.4 }}
        >
          <img 
            src={bg_img} 
            alt={`${title} decorative background pattern`} 
            className="absolute inset-0 w-auto h-auto object-cover z-0"
            loading="lazy"
          />
          {/* Conditional rendering for Benefits */}
          <AnimatePresence mode="wait">
            {activeTab === "benefits" && (
              <motion.div 
                key="benefits"
                className="relative z-20"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 30 }}
                transition={{ duration: 0.5 }}
              >
              <h3 className="md:text-3xl text-2xl font-bold text-gray-800 mb-6">
                Medical Benefits of {title}
              </h3>
              <ul className="space-y-4 text-gray-800">
                {benefits.map((item, index) => {
                  const benefitTitle = Object.values(item)[0];
                  const explanation = item.explanation;
                  return (
                    <motion.li 
                      key={index} 
                      className="flex items-start text-lg md:text-2xl"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      whileHover={{ x: 10 }}
                    >
                      <span className="text-[#C33E2F] text-xl mr-3 mt-1">❖</span>
                      <p>
                        <b className="text-gray-800">{benefitTitle}</b> – {explanation}
                      </p>
                    </motion.li>
                  );
                })}
              </ul>
              </motion.div>
            )}

          {/* Conditional rendering for Applications */}
            {activeTab === "applications" && (
              <motion.div 
                key="applications"
                className="relative z-20"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 30 }}
                transition={{ duration: 0.5 }}
              >
              <h3 className="text-3xl font-bold text-gray-800 mb-6">
                Common Applications of {title}
              </h3>
              <ul className="space-y-4 text-gray-800">
                {applications && applications.length > 0 ? (
                  applications.map((item, index) => {
                    const appTitle = Object.values(item)[0];
                    const explanation = item.explanation;
                    return (
                      <motion.li 
                        key={index} 
                        className="flex items-start text-2xl"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        whileHover={{ x: 10 }}
                      >
                        <span className="text-[#C33E2F]  mr-3 mt-1">✓</span>
                        <p>
                          <b className="text-gray-800">{appTitle}</b> – {explanation}
                        </p>
                      </motion.li>
                    );
                  })
                ) : (
                  <p className="text-gray-500">Applications information is coming soon...</p>
                )}
              </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}
export default ProductsPage;