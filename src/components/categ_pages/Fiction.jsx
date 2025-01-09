import React from 'react'
import NavBar from '../NavBar'
import Footer from '../Footer'
import { Link } from 'react-router-dom'
import { FaAngleLeft } from "react-icons/fa6";

const Fiction = () => {
  return (
    <>
    <NavBar />
    <div className='px-56'>
    <Link to="/categories" ><FaAngleLeft  className='text-white bg-[var(--sec-bg-cl)] flex justify-start text-left' size={35}/></Link>
    </div>
    <div className="container">
      <div className='flex'>
        <div className='flex'>
      <h1 className=' section-title flex align-center justifiy-center items-center '>Fiction{" "}Books</h1>
      </div>
    </div>
    </div>
    <Footer />
  </>
  )
}
export default Fiction