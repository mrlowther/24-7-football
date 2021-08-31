import React, { useState } from 'react';
import Nav from './Nav';
import Home from './pages/Home';
// import Signup from './pages/Signup';
import About from './pages/About';
import Contact from './pages/Contact';
import { Typography } from '@material-ui/core';

export default function MainContainer() {
  const [currentPage, setCurrentPage] = useState('Home');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
    // if (currentPage === 'Signup') {
    //   return <Signup />;
    // }
    if (currentPage === 'About') {
      return <About />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <>
    <Typography
        variant="h2"
        align="center"
        gutterBottom
    >
        [App Logo Here]
    </Typography>
      <div>
        {/* We are passing the currentPage from state and the function to update it */}
        <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
        {/* Here we are calling the renderPage method which will return a component  */}
        {renderPage()}
      </div>
    </>
  );
}
