import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { styles } from '../styles';
import { logo, menu, close, github, linkedin } from '../assets';
import { navLinks } from "../constants";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-app-background`} >
      <div className="flex items-center justify-between w-full max-w-7xl mx-auto">
        <Link to="/" className="flex items-center" onClick={() => { 
          setActive("");
          window.scrollTo(0, 0);
        }}>
          <img src={logo} alt="logo" className="w-10 h-10 object-contain invert mr-2" />
          <p className='text-white text-[18px] font-bold cursor-pointer flex'> 
            Geoffrey0pv &nbsp; 
            <span className='sm:block hidden'> | &nbsp; Portfolio </span>
          </p>
        </Link>

        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link, index) => (
            <li key={link.id} className={`${active === link.title ? "text-white" : "text-secondary"} hover:text-white text-[18px] font-medium cursor-pointer`} onClick={() => setActive(link.title)}>
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
          <li className="flex items-center">
            <a href="https://github.com/Geoffrey0pv" target="_blank" rel="noopener noreferrer">
              <img src={github} alt="GitHub" className="w-6 h-6 object-contain mr-4" />
            </a>
            <a href="https://www.linkedin.com/in/geoffrey-pasaje-vidal-585108267/" target="_blank" rel="noopener noreferrer">
              <img src={linkedin} alt="LinkedIn" className="w-6 h-6 object-contain" />
            </a>
          </li>
        </ul>

        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img src={toggle ? close : menu} alt="menu" className='w-[28px] h-[28px] object-contain cursor-pointer' onClick={() => setToggle(!toggle)} />
          <div className={`${!toggle ? 'hidden' : 'flex'} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w[140px] z-10 rounded-xl`}>
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {navLinks.map((link, index) => (
                <li key={link.id} className={`${active === link.title ? "text-white" : "text-secondary"} font-poppins font-medium cursor-pointer text-[15px]`} onClick={() => { 
                  setToggle(!toggle);
                  setActive(link.title);
                }}>
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
              <li className="flex items-center">
                <a href="https://github.com/Geoffrey0pv" target="_blank" rel="noopener noreferrer">
                  <img src={github} alt="GitHub" className="w-6 h-6 object-contain mr-4" />
                </a>
                <a href="https://www.linkedin.com/in/geoffrey-pasaje-vidal-585108267/" target="_blank" rel="noopener noreferrer">
                  <img src={linkedin} alt="LinkedIn" className="w-6 h-6 object-contain" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
