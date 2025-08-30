import React from "react";
import worldmap from "../assets/images/World_Map.png";
import star from "../assets/images/star.png";
import frutoLogo from "../assets/images/logo_large.png";

const About = () => (
  <section
    id="about-us"
    className="relative bg-[#C4EBB3] overflow-hidden"
  >
    {/* Background White Watermark (World Map) */}
    <img
      src={worldmap}
      alt="World Map"
      className="absolute inset-0 w-full h-full object-contain object-center brightness-800 mix-blend-screen z-0"
    />

    {/* Content */}
    <div className="relative pt-2 z-20 container mx-auto px-4">
      <div className="md:text-7xl text-3xl font-semibold ml-3">Fruto Foods</div>
      <div className="md:text-4xl text-lg font-medium mt-2 md:ml-60 ml-15">
        ~ Nature’s Goodness in Every Spoon
      </div>

      {/* Heading */}
      <div className="flex items-center text-6xl leading-none mt-6">
        <img src={star} alt="Star" className="inline-block mr-2 w-7 md:w-auto" />
        <h2 className="md:text-6xl text-3xl font-medium leading-none">
          <span className="md:border-b-4 border-b-3 border-[#7B2D26] pb-1 inline-block">
            Who We
          </span>{" "}
          Are?
        </h2>
      </div>

      {/* Text + Logo */}
      <div className="flex flex-col md:flex-row items-start md:items-center mt-2">
        {/* Text Section */}
        <div className="w-full md:w-1/2 text-left text-gray-900 pr-6">
          <p className="mb-2 md:text-2xl text-lg font-sans">
            Fruto Foods International are the manufacturer and supplier of
            natural plant-based food ingredients, Nutraceuticals supplier to
            food, Beverages, Cosmetics, Tea and Capsule industries.
          </p>
          <div className="flex flex-row gap-1">
          <p className="mb-2 md:text-2xl text-lg font-sans">
            We are committed to providing authentic, high-quality food products
            and ingredients, ensuring excellent packaging, timely delivery, and
            efficient after-sales service to achieve the highest level of
            customer satisfaction worldwide.
            </p>
            <img
            src={frutoLogo}
            alt="Fruto Foods Logo"
            className=" md:hidden w-30 object-contain"
          />
            </div>
        </div>

        {/* Logo Section */}
        <div className="w-full md:w-1/2 flex justify-end  pr-8">
          <img
            src={frutoLogo}
            alt="Fruto Foods Logo"
            className="hidden md:block min-w-sm lg:max-w-md object-contain"
          />
        </div>
      </div>
    </div>
  </section>
);

export default About;
