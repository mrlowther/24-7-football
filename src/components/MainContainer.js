import React, { useState } from 'react';
import Nav from './Nav';
import Home from './Home';
// import Signup from './pages/Signup';
import About from './About';
import Contact from './Contact';
import { Typography } from '@material-ui/core';

export default function MainContainer() {
  // const [currentPage, setCurrentPage] = useState('Home');

  // // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  // const renderPage = () => {

  //   console.log(currentPage);

  //   if (currentPage === 'Home') {
  //     return <Home />;
  //   }
  //   // if (currentPage === 'Signup') {
  //   //   return <Signup />;
  //   // }
  //   if (currentPage === 'About') {
  //     return <About />;
  //   }
  //   return <Contact />;
  // };

  // const handlePageChange = (page) => setCurrentPage(page);

  return (
    <>
    <Typography
        variant="h2"
        align="center"
        gutterBottom
    >
        24/7 Football for Kids
     </Typography>
    <Nav />
    </>
  );
}
