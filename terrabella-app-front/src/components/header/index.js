import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

export const Header = () => {

const [isVisible, setIsVisible] = useState(false);


const toggleMenu = () => {
    if (isVisible) {
        setIsVisible(false);
    } else {
        setIsVisible(true);
    }
}

    return(
        <header className="header">
        <div className="container">
            <h1>Guesthouse Terrabella</h1>
            <h2>Welcome to Kyrgyzstan</h2>
            <button className="burger" onClick={toggleMenu}>
                <span/>
                <span/>
                <span/>
            </button>
            <nav id="menu" className={`${isVisible ? 'visible' : ''}`}>
                <ul>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/services">Services</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                    <li><NavLink to="/subscribe">Subscribe</NavLink></li>
                    <li><NavLink to="login">Login</NavLink></li>
                </ul>
                {/* <!--Button burger--> */}
                <div className="hide-menu">
                    <button onClick={toggleMenu}>Close 🅇</button>
                </div>
            </nav>
        </div>
    </header>
    )
}