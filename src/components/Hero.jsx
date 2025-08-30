import React, { useState, useEffect } from "react";
import hero1 from '../assets/images/hero1.jpg';
import hero2 from '../assets/images/hero2.jpg';
import hero3 from '../assets/images/hero3.png';

const Hero = () => {
  const heroImages = [hero1, hero2, hero3];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    // This interval will loop through the images forward (0 -> 1 -> 2 -> 0 -> ...)
    const interval = setInterval(() => {
      setIndex(prevIndex => (prevIndex + 1) % heroImages.length);
    }, 4000); // slide every 4 seconds

    // Clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, [heroImages.length]); // Rerun effect if the number of images changes

  return (
  <section className="relative w-full overflow-hidden h-[30vh] md:h-[75vh]">
      {/* Sliding images container */}
      <div
        className="h-full flex transition-transform overflow-hidden duration-1000 ease-in-out"
        style={{
          width: `${heroImages.length * 100}%`,
          transform: `translateX(-${index * (100 / heroImages.length)}%)`,
        }}
      >
        {heroImages.map((img, i) => (
          <div key={i} className="h-full flex-shrink-0" style={{ width: `${100 / heroImages.length}%` }}>
            <img
              src={img}
              alt={`hero-${i}`}
              className="w-full h-full object-cover object-center"
              style={{ minHeight: '100%', minWidth: '100%' }}
            />
          </div>
        ))}
      </div>

      {/* Overlay */}
      <div className="pointer-events-none absolute inset-0 bg-black/30 z-10"></div>

      {/* Text */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-white text-center px-2 md:px-4">
        <h1 className="text-2xl md:text-6xl font-extrabold mb-1 md:mb-2 leading-tight">
          Welcome to <br />
          <span>Fruto Foods</span>
        </h1>
        <p className="text-xs md:text-xl max-w-xs md:max-w-3xl">
          India's premium supplier of Natural Food Powders & Ingredients
        </p>
      </div>
    </section>
  );
};

export default Hero;