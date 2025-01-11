import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LogoImg from '../components/images/logo.png';
import { FaBars } from "react-icons/fa6";
import "../navbar.css";

const NavBar = () => {
  const [menu, setMenu] = useState(false); 
  const handleNavbar = () => { 
    setMenu(!menu); 
  };

  return (
    <nav className=" text-[var(--main-fo-col)] relative flex flex-grow-1 w-full flex-nowrap justify-evenly max-w-full z-50" id="navbar">
      <div className="flex ">
      <div className='hidden mx-auto pl-8 lg:flex '>
      <Link to="/" className="lg:flex -mr-24 items-center hidden">
          <img src={LogoImg} alt="NapCatLogo" className="h-36" />
        </Link>
          </div>
          
        <ul
          className={`text-blue-800 font-semibold list-none justify-evenly text-center max-w-full ${
            menu ? 'flex justify-center flex-col-reverse text-right z-10 items-center absolute right-0 bg-[--main-bg-cl] mt-20 w-1/4 border-solid border-blue-500' : 'hidden'
          } lg:flex lg:ml-32 lg:flex-center lg:items-basline  `}
        >
          <div className=' navbar flex flex-col lg:flex-row lg:items-center lg:justify-between lg:ml-20 lg:mr-20'>
          <li className='flex justify-between items-center py-2 lg:py-0 '>
            <Link to="/about">About</Link>
          </li>
          <li className='flex justify-between items-center py-2 lg:py-0 lg:ml-5'>
            <Link to="/#contact_us">Contact Us</Link>
          </li>
          <li className='flex justify-between items-center py-2 lg:py-0 lg:ml-5'>
            <Link to="/categories">Categories</Link>
          </li>
          <li className='flex justify-between items-center py-2 lg:py-0 lg:ml-5'>
            <Link to="/reviews">Reviews</Link>
          </li>
          <li className='flex justify-between items-center py-2 lg:py-0 lg:ml-5'>
            <Link to="/">Home</Link>
          </li>
            </div>
        </ul>
        
        <button className=" lg:hidden p-5 flex justify-between  absolute right-0 cursor-pointer" type="button" onClick={handleNavbar}>
          <FaBars size={25} style={{ color: "#1e40af" }} />
        </button>
      </div>
        <div className=' p-5 text-left font-bold uppercase lg:static lg:transform-none cursor-pointer lg:text-right lg:flex lg:items-center lg:justify-end lg:p-5 lg:ml-30 absolute left-0'>
            <div className="text-[var(--light-blue-col)] text-xl flex-wrap">
              <Link to="/" className='cursor-pointer'>
              BOOK<span className="text-[var(--sec-bg-cl)] text-3xl">||</span>
              <span className="text-[var(--main-fo-cl)]">NAPCAT</span>
              </Link>
            </div>
          </div>
    </nav>
  );
};

export default NavBar;
