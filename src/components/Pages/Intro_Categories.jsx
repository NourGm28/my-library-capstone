import { Link } from 'react-router-dom'
import  Image  from '../images/Education-Interest--Streamline-Ux.png'
const Intro_Categories = () => {
  return (
    <div className='container bg-[var(--main-fo-cl)] relative mx-auto px-4 my-10 max-w-full  '>
      <div className='section-title text-white text-xl font-bold relative'>
      <h2 className='text-white   '>CATEGORIES </h2>
      <span className="absolute bottom-0 left-0 right-0 mx-auto border-b-2 border-white w-10" ></span>
      </div>
      <div>
        <div className="md:flex items-center mt-10">
        <div className="text-white text-center md:text-left">
          <h1 className="text-white flex justify-center font-bold text-2xl md:text-l lg:text-2xl">
            Explore
              </h1>
<p className='text-white p-5 text-center'>Browse Various Book Categories</p>
</div>
        </div>
        <div className="mt-4 flex justify-center md:justify-center">
          <Link to="/categories">
          <button className="bg-[var(--sec-bg-cl)] text-white font-bold text-xs  px-4 py-2 rounded  ">Browse Categories</button>
          </Link>
        </div>
          </div>
        <div className="mt-10 hidden md:flex justify-end">
          <img
            src={Image}
            alt="Person reading a book"
            className=" mt-10 lg:-mr-20 lg:w-3/4 md:w-2/3 "
          />
        </div>
    </div>
  )
}

export default Intro_Categories
