import React, { useState } from 'react';
import logo from '../assets/images/logo_small.png';
import { NavLink } from 'react-router-dom';

// SVG Icons are small and only used here, so they can stay in this file.
const MenuIcon = (props) => (
  <svg {...props} stroke="currentColor" fill="currentColor" strokeWidth="1" viewBox="0 0 24 24" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg"><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path></svg>
);
const CloseIcon = (props) => (
  <svg {...props} stroke="currentColor" fill="currentColor" strokeWidth="1" viewBox="0 0 24 24" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path></svg>
);

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = [{ name: "Home", to: "/" }, { name: "About", to: "/about" }, { name: "Our Team", to: "/our-team" }, { name: "Contact", to: "/contact" }];

  return (
    <header className="bg-[#B0D79F] shadow-md  top-0 z-50  ">
      <nav className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center mb-1">
          <div className="flex flex-col items-center">
            <img src={logo} alt="Fruto Foods" className="md:h-40 h-20 ml-2" />
            <p className='text-xs md:text-sm ml-4 font-semibold'><i>we build trust</i></p>
          </div>
          <div className="hidden md:flex items-center space-x-7">
            {navLinks.map((link, index) => (
              <NavLink
                key={link.name}
                to={link.to}
                className={({ isActive }) =>
                  `px-2 py-2 text-black text-xl font-sans font-semibold
    rounded-lg    transition-all duration-300 ease-in-out
    hover:border-2 hover:shadow-lg
    ${isActive ? 'border-2 shadow-lg' : ''}`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-black focus:outline-none">
              {isOpen ? <CloseIcon size={32} /> : <MenuIcon size={32} />}
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden mt-4">
            <ul className="flex flex-col items-center space-y-2">
              {navLinks.map(link => (
                <li key={link.name}>
                  <NavLink
                    to={link.to}
                    className={({ isActive }) =>
                      `block px-4 py-2 text-black font-semibold font-sans rounded
               ${isActive ? 'bg-green-700' : 'hover:bg-green-300'}`
                    }
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;