import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <div className='container bg-[var(--main-fo-cl)] flex flex-col text-center align-middle justify-center items-center mx-auto lg:p-10 '>
      <div className='justify-center items-center p-5'>
        <div className='text-white text-sm'>contact@mypage.com</div>
        <div className='text-white text-sm'>Tel: +2 000-000-000-00{" "}Fax: +2 000-000-00</div> 
        <div className='text-white text-sm'>Main Street, place Street </div>
      </div>
      <div className=' flex flex-row justify-center items-center '>
      <FaTwitter size={25} style={{ color: "#fff" }} />
      <FaFacebookF className="ml-5" size={25} style={{ color: "#fff" }} />
      <AiFillInstagram className="ml-5" size={25} style={{ color: "#fff" }} />
      </div>
      <div className='text-white text-sm'>©All rights reserved to My Page 2025.</div>

    </div>
  )
}

export default Footer