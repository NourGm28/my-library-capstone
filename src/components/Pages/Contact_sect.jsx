import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Contact_form from '../Contact_form';
import Image from '../images/contact_us.png';
const contact_sect = () => {
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);


  return (
    <div className='container w-full max-w-full relative bg-[var(--light-blue-col)] mx-auto lg:px-28 '>
    <div id='contact_us'  className='flex flex-col relative md:flex items-start p-5 lg:mt-10 w-full max-w-full'>
        <div className=" flex flex-col relative md:flex items-start  w-full">
        <div className=" md:text-left">
          <h2 className="text-[var(--blackish-col)]  flex justify-center md:justify-start lg:justify-start font-bold text-2xl md:text-2xl lg:text-4xl">
            Contact Us
              </h2>
<p className='text-[var(--sec-bg-cl)] flex justify-start p-2 lg:text-left text-center'>To receive book updates and to recive customized book recommendation.</p>
</div>
<div className="mt-4 flex justify-start md:justify-start">
        <Contact_form />
        </div>
        </div>
          </div>
        <div className="mt-10 hidden lg:flex md:flex justify-end  lg:items-center lg:max-w-full pr-10">
          <img
            src={Image}
            alt="Person reading a book"
            className=" lg:mt-10  lg:w-4/8 md:3/4 "
          />
        </div>
  </div>
  )
}

export default contact_sect