import React from 'react'
import Header from '../Header'
import Intro_Categories from './Intro_Categories';
import Books_showcase from './Books_showcase';
import Contact_sect from './Contact_sect';
import Footer from '../Footer';
import { Outlet } from 'react-router-dom';
    const HomePage = () => {
  return (
    <>
      <Header />
      <Intro_Categories />
      <Books_showcase />
      <Contact_sect />
      <Footer />
      <Outlet />
      </>
  )
}
export default HomePage;