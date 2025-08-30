import React, { useState } from "react";
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
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 ">
        {/* Top Section: Title, Image, and Content */}
        <div className="flex justify-center mb-12">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
              {title}
            </h1>
            <span className="block w-40 h-1 bg-[#C33E2F] mx-auto"></span>
          </div>
          <img src={title_Icon} alt={title} className="ml-2 w-12 h-12 md:w-18 md:h-18 inline-block object-cover" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-12">
          <img
            src={title_Image}
            alt={title}
            className="rounded-2xl shadow-xl border-2  w-full h-auto object-cover aspect-video"
          />
          <p className="text-gray-800 leading-relaxed text-justify text-lg md:text-2xl">
            {content}
          </p>
        </div>

        {/* Divider */}
        {/* <div className="border-t-2 border-[#C33E2F] mb-12"></div> */}

        {/* Tab Buttons: Benefits & Applications */}
        <div className="flex mt-14 items-center gap-4 mb-4">
          <button
            onClick={() => setActiveTab("benefits")}
            className={getTabClassName("benefits")}
          >
            Benefits
          </button>
          <button
            onClick={() => setActiveTab("applications")}
            className={getTabClassName("applications")}
          >
            Applications
          </button>

        </div>
        <div className="border-t-3 ml-20 border-[#C33E2F] mb-4"></div>

        {/* Content Area: Displays content based on the active tab */}
        <div className=" relative overflow-hidden p-8  min-h-[300px]">
          <img src={bg_img} alt="Background" className="absolute inset-0 w-auto h-auto object-cover   z-0" />
          {/* Conditional rendering for Benefits */}
          {activeTab === "benefits" && (
            <div className="relative z-20 ">
              <h3 className="md:text-3xl text-2xl font-bold text-gray-800 mb-6">
                Medical Benefits of {title}
              </h3>
              <ul className="space-y-4 text-gray-800">
                {benefits.map((item, index) => {
                  const benefitTitle = Object.values(item)[0];
                  const explanation = item.explanation;
                  return (
                    <li key={index} className="flex items-start text-lg md:text-2xl">
                      <span className="text-[#C33E2F] text-xl mr-3 mt-1">❖</span>
                      <p>
                        <b className="text-gray-800">{benefitTitle}</b> – {explanation}
                      </p>
                    </li>
                  );
                })}
              </ul>
            </div>
          )}

          {/* Conditional rendering for Applications */}
          {activeTab === "applications" && (
            <div className="relative z-20">
              <h3 className="text-3xl font-bold text-gray-800 mb-6">
                Common Applications of {title}
              </h3>
              <ul className="space-y-4 text-gray-800">
                {applications && applications.length > 0 ? (
                  applications.map((item, index) => {
                    const appTitle = Object.values(item)[0];
                    const explanation = item.explanation;
                    return (
                      <li key={index} className="flex items-start text-2xl">
                        <span className="text-[#C33E2F]  mr-3 mt-1">✓</span>
                        <p>
                          <b className="text-gray-800">{appTitle}</b> – {explanation}
                        </p>
                      </li>
                    );
                  })
                ) : (
                  <p className="text-gray-500">Applications information is coming soon...</p>
                )}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
export default ProductsPage;