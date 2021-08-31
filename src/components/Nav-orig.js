import React from 'react';
import Typography from '@material-ui/core/Typography';
import '@fontsource/roboto';

export default function Nav({ currentPage, handlePageChange }) {

    return (
        <>

        <Typography variant="h2" align="center">[App Logo Here]</Typography>     

        <header>
            <div class="topnav">
            {/* <h1 className="name-border">[24/7 Football logo here]</h1> */}

            <ul className="nav nav-tabs">
                <li className="nav-item">
                    <a
                    href="#home"
                    onClick={() => handlePageChange('Home')}
                    // This is a conditional (ternary) operator that checks to see if the current page is "Home"
                    // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
                    className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
                    >
                    Home
                    </a>
                </li>
                <li className="nav-item">
                    <a
                    href="#signup"
                    //onClick={() => handlePageChange('About')}
                    // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
                    //className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
                    >
                    Sign Up
                    </a>
                </li>
                <li className="nav-item">
                    <a
                    href="#about"
                    onClick={() => handlePageChange('Contact')}
                    // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
                    className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
                    >
                    About
                    </a>
                </li>
                <li className="nav-item">
                    <a
                    href="#contact"
                    onClick={() => handlePageChange('Blog')}
                    // Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
                    className={currentPage === 'Blog' ? 'nav-link active' : 'nav-link'}
                    >
                    Contact Us!
                    </a>
                </li>
                
            </ul>

            <div class="search-container">
                <form action="/">
                    <input type="text" placeholder="Search..." name="search"/>
                    <button type="submit">Submit</button>
                </form>
            </div>

        </div>
        </header>
        </>
    );
}