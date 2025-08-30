import React from 'react';
import SocialIcon from './SocialIcon';
import star from '../assets/images/star.png';
import logo_large from '../assets/images/logo_large.png';
import call from '../assets/images/call_icon.png';
import mail from '../assets/images/mail_icon.png';
import location from '../assets/images/location_icon.png';
import whatsapp from '../assets/images/whatsapp_icon.png';
import facebook from '../assets/images/facebook_icon.png';
import linkedin from '../assets/images/linkedin_icon.png';
import instagram from '../assets/images/instagram_icon.png';
import { Link } from 'react-router-dom';

const Footer = () => {
  const QuickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Safety & Quality', href: '/safety-quality' },
    { name: 'Contact', href: '/contact' },
    { name: 'Our Team', href: '/our-team' },
    { name: 'Privacy Policy', href: '/privacy-policy' }
  ];
  return (
    <footer className="bg-[#B0D79F] text-gray-700">
      <div className="container mx-auto px-1 pt-3 pb-3 md:px-6 md:pt-8 md:pb-8">
        <div className="grid grid-cols-3 gap-2 md:gap-8 text-center md:text-left">
          {/* Quick Links */}
          <div className="px-1">
            <h4 className="font-bold text-xs md:text-3xl mb-1 md:mb-4 text-green-800 flex items-center justify-start">
              <img src={star} alt="Star Icon" className="inline-block mr-1 w-4 h-4 md:w-8 md:h-8" />
              <span className="md:border-b-3 border-b-2 border-[#7B2D26]">Quick L</span>inks
            </h4>
            <ul className="space-y-0.5 md:space-y-2 mx-auto ml-2 md:ml-0 md:mx-0">
              {QuickLinks.map((link, index) => (
                <li key={index} className="flex items-center  justify-start">
                  <img src={star} alt="Star Icon" className="inline-block mr-1 w-2 h-2 md:w-4 md:h-4" />
                  <Link to={link.href} className="hover:text-green-700 text-xs md:text-lg">{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          {/* Logo & Socials */}
          <div className="flex flex-col items-center justify-center px-1">
            <img src={logo_large} alt="Fruto Foods Logo" className="mb-1 w-12 h-12 md:w-60 md:h-60" />
            <div className="flex flex-row space-x-0 md:space-x-4">
              <SocialIcon imgSrc={facebook} alt="Facebook" link="https://facebook.com" w={4} h={4} />
              <SocialIcon imgSrc={linkedin} alt="LinkedIn" link="https://linkedin.com" w={4} h={4} />
              <span className="hidden md:block">
                <SocialIcon imgSrc={whatsapp} alt="WhatsApp" link="https://whatsapp.com" w={7} h={7} sw={4} sh={4} />
              </span>
              <SocialIcon imgSrc={instagram} alt="Instagram" link="https://instagram.com" w={4} h={4} />
            </div>
          </div>
          {/* Contacts */}
          <div className="md:text-left text-center md:ml-12 px-1">
            <h4 className="font-bold text-xs md:text-3xl mb-1 md:mb-4 text-green-800 flex items-center justify-center md:justify-start">
              <img src={star} alt="Fruto Foods Logo" className="inline-block mr-1 w-4 h-4 md:w-8 md:h-8 align-middle" />
              <span className="border-b-4 border-[#7B2D26]">Our Con</span>tacts
            </h4>
            <div className="mt-0.5 md:mt-4 md:ml-8 inline-block text-left w-full">
              <ul className="space-y-1 md:space-y-4 text-xs md:text-lg break-words">
                <li className="flex items-center justify-center md:justify-start">
                  <img src={call} alt="Call Icon" className="mr-1 w-4 h-4 md:w-7 md:h-7" />
                  <span className="truncate">+91 98765 43210</span>
                </li>
                <li className="flex items-center justify-center md:justify-start">
                  <img src={mail} alt="Mail Icon" className="mr-1 w-4 h-4 md:w-7 md:h-7" />
                  <span className="truncate">info@frutofoods.com</span>
                </li>
                
                <li className="flex md:items-center justify-center md:justify-start">
                  <img src={location} alt="Location Icon" className="mr-1 w-3 h-3 md:w-5 md:h-5" />
                  <span className="break-words">#12-13-418/4, Street.no.1, Tarnaka, Hyderabad 5000017, Telangana state, India</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
  <div className="mt-4 md:mt-12 pt-2 border-t-3 border-[#C33E2F] text-center text-[10px] md:text-sm text-gray-800 flex flex-col md:flex-row items-center md:justify-between gap-1 overflow-x-auto">
          <p>Copyright © 2025 <span className='inline-block text-[#C33E2F] border-b-2 border-[#C33E2F]'><a href="#">Fruto Foods</a></span>. All Rights Reserved.</p>
          <p>Designed & Developed <span className='inline-block text-[#C33E2F] border-b-2 border-[#C33E2F]'><a href="#">TechFusion Hustlers</a></span></p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;