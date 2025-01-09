import React from 'react'
import NavBar from '../components/NavBar'
import SearchForm from './SearchForm'
import Footer from './Footer'
import The_list from './data_store/The_list'

const BookList = () => {

  return (
    <>
    <NavBar />
    <div className="container flex flex-col items-center justify-center mx-auto px-4">
        <div className='flex items-center justify-center my-10 py-5 '>
      <h1 className=' section-title absolute flex justify-center text-center '>All Books List</h1>
      </div>
      <SearchForm/>
      </div>
      <div className='lg:-mt-20'>
    <The_list />
      </div>
    <Footer />
  </>
  )
}

export default BookList  
