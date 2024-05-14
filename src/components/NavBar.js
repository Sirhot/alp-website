import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from "../images/mainlogo.jpg"

const NavBar = () => {
    const [activeSection, setActiveSection] = useState('');

    return (
        <header className='header'>
            <div className='logo'>
                <img src={logo} alt="logo" width="80px" height="80px" />
            </div>
            <nav className='navbar'>
                <NavLink exact to="/"
                    className={"nav-link " + (activeSection === 'home' ? 'active' : '')}
                    onClick={() => setActiveSection('home')}>Home</NavLink>
                <NavLink to="/about" className={"nav-link " + (activeSection === 'about' ? 'active' : '')}
                    onClick={() => setActiveSection('about')}>About</NavLink>
                <NavLink to="/portfolio" className={"nav-link " + (activeSection === 'portfolio' ? 'active' : '')}
                    onClick={() => setActiveSection('portfolio')}>Portfolio</NavLink>
                <NavLink to="/blog" className={"nav-link " + (activeSection === 'blog' ? 'active' : '')}
                    onClick={() => setActiveSection('blog')}>Blog</NavLink>
            </nav>
        </header >
    );
};

export default NavBar;
