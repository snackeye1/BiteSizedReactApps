import React from 'react';
import Link from './Link';
import './NavBar.scss';

const NavBar = () => {
    // const handleClick = (event) => {
    //     event.preventDefault();
    // };

    return(
        <nav className="nav-bar">
            <h3 className="nav-bar-title">The <span className="title-highlight">Cocktail </span> DB</h3>
            <div className="nav-bar-links">
                <Link href="/">
                    Home
                </Link>
                <Link href="/about">
                    About
                </Link>
                {/* <a onClick={(event) => handleClick(event)} href="/">Home</a>
                <a onClick={(event) => handleClick(event)} href="/about">About</a> */}
            </div>
        </nav>
    );
};

export default NavBar;