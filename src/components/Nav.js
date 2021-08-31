import React from 'react';

export default function Nav() {
    const linkStyle = { border: '1px black', padding: '5px' };

    return (
        <header>
            <div class="topnav">
            <h1 className="name-border">24/7 Football</h1>
                <div class="search-container">
                <form action="/action_page.php">
                    <input type="text" placeholder="Search.." name="search">
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
        </header>
    );
}