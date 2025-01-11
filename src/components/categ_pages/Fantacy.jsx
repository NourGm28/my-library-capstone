import React from 'react'
import NavBar from '../NavBar'
import Footer from '../Footer'
import { Link } from 'react-router-dom'
import { FaAngleLeft } from "react-icons/fa6";
import BookCategory from '../data_store/BookCategory';
const Fantacy = () => {
  return (
    <>
    <NavBar />
    <div className='px-56'>
    <Link to="/categories" ><FaAngleLeft  className='text-white bg-[var(--sec-bg-cl)] flex justify-start text-left' size={35}/></Link>
    </div>
    <div className="container flex flex-col items-center justify-center">
      <div className='flex'>
        <div className='flex'>
      <h1 className=' section-title flex align-center justifiy-center items-center '>Fantacy{" "}Books</h1>
      </div>
    </div>
    <div>
        < BookCategory />
      </div>
    </div>
    <Footer />
  </>
  )
}
export default Fantacy