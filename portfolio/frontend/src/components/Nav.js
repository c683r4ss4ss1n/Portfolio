import React, { useState } from 'react';
import navImage from './images/navbar/navImage.gif';
import { BsFacebook, BsInstagram } from 'react-icons/bs';
import { SiYoutubemusic  } from 'react-icons/si';
import { SlSocialLinkedin  } from 'react-icons/sl';

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex flex-wrap items-center lg:justify-between sm:justify-center  w-full py-4 md:py-0 px-32 text-lg text-gray-700 bg-gray-200 sticky border-2 border-b-gray-300 shadow-lg shadow-gray-300">
      <div className='lg:visible sm:invisible'>
        <img src={navImage} className="flex justify-center items-center w-8" alt="navImage" />
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

      <div className={`w-full md:flex md:items-center md:w-auto ${isMenuOpen ? 'block' : 'hidden'}`} id="menu">
        <ul className="pt-4 text-base text-gray-700 md:flex md:justify-between md:pt-0 font-bold">
          <li>
            <a id='#' className="md:p-4 py-2 block hover:text-emerald-700 text-center" href="/">Home</a>
          </li>
          <li>
            <a id='#about' className="md:p-4 py-2 block hover:text-emerald-700 text-center" href="/">About</a>
          </li>
          <li>
            <a id='#services' className="md:p-4 py-2 block hover:text-emerald-700 text-center" href="/">Services</a>
          </li>
          <li>
            <a id='#skill' className="md:p-4 py-2 block hover:text-emerald-700 text-center" href="/">Skill</a>
          </li>
          <li>
            <a id='#education' className="md:p-4 py-2 block hover:text-emerald-700 text-center" href="/">Eduation</a>
          </li>
          <li>
            <a id='#experience' className="md:p-4 py-2 block hover:text-emerald-700 text-center" href="/">Experience</a>
          </li>
          <li>
            <a id='projects' className="md:p-4 py-2 block hover:text-emerald-700 text-center" href="/">Projects</a>
          </li>
          <li>
            <a id='#about' className="md:p-4 py-2 block hover:text-emerald-700 text-center" href="/">Contact</a>
          </li>
        </ul>
      </div>
      <div className='flex flex-row '>
        <ul className='flex flex-row gap-3'>
            <li className='hover:animate-pulse cursor-pointer'><BsFacebook color='#316FF6' size={24}/></li>
            <li className='hover:animate-pulse cursor-pointer'><SiYoutubemusic  color='#CD201F' size={24}/></li>
            <li className='hover:animate-pulse cursor-pointer'><SlSocialLinkedin  color='black' size={26} style={{ border:'1px', borderRadius:'38%', padding:'6px', background:'#0077b5'}}/></li>
            <li className='hover:animate-pulse cursor-pointer'><BsInstagram style={{ background: 'linear-gradient(180deg, #fccc63, #fbad50, #cd486b, #4c68d7)', borderRadius:'50%'}} size={24}/></li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
