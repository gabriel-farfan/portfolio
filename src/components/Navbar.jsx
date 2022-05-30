import React, { useState } from 'react';
import {
  FaBars,
  FaTimes,
} from 'react-icons/fa';
import Logo from '../assets/logo.png';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#031526] text-white'>
      <div>
        <img src={Logo} alt='Logo' style={{ width: '50px' }} className= 'hover:border-2 hover:border-[#d8fc37]' />
      </div>

      {/* menu */}
      {/* The "link to" goes to the Name tag of each main div of each component. */}
      <ul className='hidden md:flex'>
        <li>
          <Link to='home' smooth={true} duration={500} >
            <p className="hover:text-[#d8fc37]" >Home</p>
          </Link>
        </li>
        <li>
          <Link to='about' smooth={true} duration={500}>
            <p className='hover:text-[#d8fc37]'>About</p>
            
          </Link>
        </li>
        <li>
          <Link to='work' smooth={true} duration={500}>
            <p className='hover:text-[#d8fc37]'>Work </p>
          </Link>
        </li>
        <li>
          <Link to='skills' smooth={true} duration={500}>
             <p className='hover:text-[#d8fc37]'>Skills</p>
          </Link>
        </li>
        <li>
          <Link to='contact' smooth={true} duration={500}>
             <p className='hover:text-[#d8fc37]'>Contact</p>
          </Link>
        </li>
        <li>
          <a href='https://drive.google.com/drive/folders/1W02HL9h6_m_mizb9C2yIInmxUvwiprK7?usp=sharing' target="_blank" rel="noreferrer">
             <p className='text-[#d8fc37] font-bold hover:text-blue-400 '>CV Download</p>
          </a>
        </li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? 'hidden'
            : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'
        }
      >
        <li className='py-6 text-4xl '>
          <Link onClick={handleClick} to='home' smooth={true} duration={500} >
            <span className='hover:text-[#d8fc37]'>Home</span> 
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='about' smooth={true} duration={500}>
             <span className='hover:text-[#d8fc37]'>About</span>
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='work' smooth={true} duration={500}>
             <span className='hover:text-[#d8fc37]'>Work</span>
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='skills' smooth={true} duration={500}>
             <span className='hover:text-[#d8fc37]'>Skills</span>
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='contact' smooth={true} duration={500}>
             <span className='hover:text-[#d8fc37]'>Contact</span>
          </Link>
        </li>
      </ul>

    </div>
  );
};

export default Navbar;
