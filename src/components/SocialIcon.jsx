import React from 'react';

const SocialIcon = ({ imgSrc, alt = "icon", link = "#", w = 5, h = 5, sw = 3, sh = 3 }) => (
  <a
    href={link}
    className="w-10 h-10  text-green-700 rounded-full flex items-center justify-center"
  >
    <img src={imgSrc} alt={alt} className={`md:w-${w} md:h-${h} w-${sw} h-${sh}`} />
  </a>
);

export default SocialIcon;
