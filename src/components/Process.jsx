import React from "react";
import branches from "../assets/images/branches.png"; // branches PNG
import process from "../assets/images/process.png"; // process diagram PNG
import star from "../assets/images/star.png";

const Process = () => (
  <div id="process" className="relative md:py-16 py-8 overflow-hidden bg-white">
    {/* Branches Background */}
    <img
      src={branches}
      alt="Branches Background"
      className="absolute inset-0 w-full h-full md:object-cover object-center z-0"
    />

    {/* Gray Overlay */}
    {/* <div className="absolute inset-0 bg-gray-200/40 z-0"></div> */}

    {/* Content */}
    <div className=" px-6 leading-none z-10 ">
      <div className="flex  items-center md:ml-12 md:text-6xl  font-medium md:mb-6">
        <img src={star} alt="Star Icon" className=" inline-block " />

        <h2 className="md:text-6xl text-3xl ml-1 leading-none">
          <span className="md:border-b-4 border-b-3 border-[#7B2D26]">Our Proc</span>ess</h2>
      </div>
      <p className="md:ml-14 ml-5 md:text-3xl text-lg mx-auto text-gray-800 md:mb-8 mt-2 md:mt-0">
        “From handpicking fresh harvests to careful cleaning, gentle drying, fine grinding, and secure packaging — our process preserves nature’s purity and delivers wholesome goodness straight to you.”
      </p>
      <div className="flex justify-center">
        <img src={process} alt="Our Process Diagram" className="md:w-200 md:h-200 w-full h-100" />
      </div>
    </div>
  </div>
);

export default Process;
