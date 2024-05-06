import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from "../images/mainlogo.jpg"

const NavBar = () => {
    return (
        <header className='header'>
            <div className='logo'>
                <img src={logo} alt="logo" width="80px" height="80px" />
            </div>
            <nav className='navbar'>
                <NavLink exact to="/" className="nav-link active">Home</NavLink>
                <NavLink to="/about" className="nav-link">About</NavLink>
                <NavLink to="/portfolio" className="nav-link">Portfolio</NavLink>
                <NavLink to="/blog" className="nav-link">Blog</NavLink>
                <NavLink to="/contact" className="nav-link">Contact</NavLink>
            </nav>
        </header >
    );
};

export default NavBar;
