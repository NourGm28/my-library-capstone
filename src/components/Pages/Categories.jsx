import { Link } from 'react-router-dom'; 
import NavBar from '../NavBar';
import SearchForm from '../SearchForm';
import Footer from '../Footer';

const Categories = () => {
  return (
    <>
      <NavBar />
      <div className='container min-h-screen flex flex-col flex-grow-1 items-center justify-center lg:p-10 z-0'>
        <div className='section-title flex justify-center text-center flex-grow-1 mx-auto p-10'>
          <h1>Categories</h1>
        </div>
        <div className='flex justify-center items-center text-center max-w-2xl flex-grow-1 p-32 md:max-w-2xl lg:max-w-4xl mx-auto lg:p-28 md:p-32'>
          <SearchForm />
        </div>
        <div className='container flex flex-grow-1 lg:flex-row flex-col items-center justify-around w-full max-w-full md:max-w-2xl lg:max-w-3xl mx-auto lg:-mt-20 -mt-40 p-32'>
          <div className='grid grid-cols-2 gap-4 w-full max-w-full md:max-w-2xl mx-auto lg:max-w-3xl'>
            <div className='bg-white border-solid border-[1px] border-stone-300 rounded-sm py-4 px-10 lg:py-4 lg:px-16'>
              <button className='font-semibold'>
                <Link to='/BookList'>All Books</Link>
              </button>
            </div>
            <div className='bg-white border-solid border-[1px] border-stone-300 rounded-sm py-4 px-10 lg:py-4 lg:px-16'>
              <button className='font-semibold'>
                <Link to='/categories/fantacy'>Fantasy</Link>
              </button>
            </div>
            <div className='bg-white border-solid border-[1px] border-stone-300 rounded-sm py-4 px-10 lg:py-4 lg:px-16'>
              <button className='font-semibold'>
                <Link to='/categories/fiction'>Fiction</Link>
              </button>
            </div>
            <div className='bg-white border-solid border-[1px] border-stone-300 rounded-sm py-4 px-10 lg:py-4 lg:px-16'>
              <button className='font-semibold'>
                <Link to='/categories/classic'>Classic</Link>
              </button>
            </div>
            <div className='bg-white border-solid border-[1px] border-stone-300 rounded-sm py-4 px-10 lg:py-4 lg:px-16'>
              <button className='font-semibold'>
                <Link to='/categories/children'>Children</Link>
              </button>
            </div>
            <div className='bg-white border-solid border-[1px] border-stone-300 rounded-sm py-4 px-10 lg:py-4 lg:px-16'>
              <button className='font-semibold'>
                <Link to='/categories/self-help'>Self-Help</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Categories;
