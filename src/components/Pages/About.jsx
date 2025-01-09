import React from 'react'
import NavBar from '../NavBar'
import Contact_sect from './Contact_sect'
import Footer from '../Footer'
const About = () => {
  return (
    <>
      <NavBar/>
      <div className='container flex flex-col items-center justify-center'>
      <h1 className=' section-title flex justify-center text-center '>About</h1>
      <div>
        <p className='p-32 text-[var(--blackish_col)] text-lg'>Book||NapCat is a comprehensive library website designed to provide readers and institutions with a seamless book management and discovery experience. The platform offers key features, including a Review Page where users can read and write detailed reviews, share insights, and rate books they’ve read. This creates a vibrant community for book lovers to engage and explore.
The Categorization Page helps users efficiently search for books by genre, author, or topic, offering easy access to categorized collections or the full catalog of available books. Additionally, the Ratings Page allows users to view and contribute star ratings, helping others make informed reading choices based on community feedback.
With its intuitive design and robust tools, Book||NapCat makes organizing, searching, and reviewing books a breeze, catering to the needs of both avid readers and library administrators.</p>
      </div>
      </div>
      <Contact_sect/>
      <Footer/>
      </>
  )
}

export default About  
