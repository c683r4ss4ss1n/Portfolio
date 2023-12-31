import React, { useState } from 'react';
import navImage from './images/navbar/navImage.gif';
import { BsFacebook, BsInstagram } from 'react-icons/bs';
import { SiYoutubemusic } from 'react-icons/si';
import { SlSocialLinkedin } from 'react-icons/sl';

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 py-4 text-lg text-gray-700 shadow-xl ${isMenuOpen ? 'bg-gray-200' : 'bg-transparent'}`}>
      <div className="container mx-auto flex justify-between items-center">
        <div className="lg:visible sm:invisible">
          <img src={navImage} className="w-8" alt="navImage" />
        </div>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          id="menu-button"
          className="h-6 w-6 cursor-pointer md:hidden block sm:mr-7"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          onClick={toggleMenu}
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>

        <div className={`hidden md:flex md:items-center ${isMenuOpen ? 'block' : 'hidden'}`} id="menu">
          <ul className="flex flex-col md:flex-row md:items-center md:space-x-4">
            <li>
              <a id='#' className="font-semibold text-violet-700 hover:text-cyan-300 hover:font-bold" href="/">
                Home
              </a>
            </li>
            <li>
              <a id='#about' className="font-semibold text-violet-700 hover:text-cyan-300 hover:font-bold" href="/">
                About
              </a>
            </li>
            <li>
              <a id='#services' className="font-semibold text-violet-700 hover:text-cyan-300 hover:font-bold" href="/">
                Services
              </a>
            </li>
            <li>
              <a id='#skill' className="font-semibold text-violet-700 hover:text-cyan-300 hover:font-bold" href="/">
                Skill
              </a>
            </li>
            <li>
              <a id='#education' className="font-semibold text-violet-700 hover:text-cyan-300 hover:font-bold" href="/">
                Eduation
              </a>
            </li>
            <li>
              <a id='#experience' className="font-semibold text-violet-700 hover:text-cyan-300 hover:font-bold" href="/">
                Experience
              </a>
            </li>
            <li>
              <a id='projects' className="font-semibold text-violet-700 hover:text-cyan-300 hover:font-bold" href="/">
                Projects
              </a>
            </li>
            <li>
              <a id='#about' className="font-semibold text-violet-700 hover:text-cyan-300 hover:font-bold" href="/">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div className='flex flex-row gap-3'>
          <ul className='flex flex-row gap-3'>
            <li className='hover:animate-pulse cursor-pointer'>
              <BsFacebook color='#316FF6' size={24} />
            </li>
            <li className='hover:animate-pulse cursor-pointer'>
              <SiYoutubemusic color='#CD201F' size={24} />
            </li>
            <li className='hover:animate-pulse cursor-pointer'>
              <SlSocialLinkedin color='black' size={26} style={{ border: '1px', borderRadius: '38%', padding: '6px', background: '#0077b5' }} />
            </li>
            <li className='hover:animate-pulse cursor-pointer'>
              <BsInstagram style={{ background: 'linear-gradient(180deg, #fccc63, #fbad50, #cd486b, #4c68d7)', borderRadius: '50%' }} size={24} />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
