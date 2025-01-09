import { Link } from 'react-router-dom';
import NavBar from '../NavBar';
import SearchForm from '../SearchForm';
import Footer from '../Footer';

const Categories = () => {
  return (
    <>
      <NavBar/>
      <div className='container min-h-96 flex flex-col flex-grow-1 items-center justify-center p-10'>
      <h1 className=' section-title flex justify-center text-center flex-grow-1 '>Categories</h1>
      <div className='text-center max-w-2xl flex-grow-1  md:max-w-2xl lg:max-w-4xl mx-auto lg:p-28 md:p-32'>
        <SearchForm/>
        </div>
        <div className='container  flex flex-grow-1 lg:flex-row flex-col items-center justify-around w-full max-w-full md:max-w-2xl lg:max-w-3xl mx-auto lg:-mt-20 -mt-40 p-32'>
        <div className=' grid grid-cols-2 gap-4  w-full max-w-full md:max-w-2xl mx-auto lg:max-w-3xl'>
        <div className=' bg-white border-solid border-[1px] border-stone-300 rounded-sm py-4 px-10 lg:py-4 lg:px-16'> 
          <button className='font-semibold'><Link to='/bookList'>All Books</Link></button>
        </div>
        <div className=' bg-white border-solid border-[1px] border-stone-300 rounded-sm py-4 px-10 lg:py-4 lg:px-16'> 
          <button className='font-semibold'><Link to='/fantacy'>Fantacy</Link></button>
        </div>
        <div className=' bg-white border-solid border-[1px] border-stone-300 rounded-sm py-4 px-10 lg:py-4 lg:px-16'> 
          <button className='font-semibold'><Link to='/fiction'>Fiction</Link></button>
        </div>
        <div className=' bg-white border-solid border-[1px] border-stone-300 rounded-sm py-4 px-10 lg:py-4 lg:px-16'> 
          <button className='font-semibold'><Link to='/classic'>Classic</Link></button>
        </div>
        <div className=' bg-white border-solid border-[1px] border-stone-300 rounded-sm py-4 px-10 lg:py-4 lg:px-16'> 
          <button className='font-semibold'><Link to='/children'>Children</Link></button>
        </div>
        <div className=' bg-white border-solid border-[1px] border-stone-300 rounded-sm py-4 px-10 lg:py-4 lg:px-16'> 
          <button className='font-semibold'><Link to='/self_help'>Self-Help</Link></button>
        </div>
        </div>
        </div>
      </div>
      <Footer/>
      </>
  )
}

export default Categories  
