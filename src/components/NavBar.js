import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import "./Navbar.css"

const NavBar = () => {
    const [activeSection, setActiveSection] = useState('');
    const [activeDrop, setActiveDrop] = useState(false);

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        // Add event listener for window resize
        window.addEventListener('resize', handleResize);

        // Remove event listener on cleanup
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        if (windowWidth >= 820) {
            setActiveDrop(false);
        }
    }, [windowWidth]);

    return (
        <header className='header'>
            <div className='logo'>
                <img src="/assets/images/main-images/mainlogo.jpg" alt="logo" width="80px" height="80px" />
            </div>
            <div className={'dropdown ' + (activeDrop === true ? 'activeDropdown' : '')}>
                <nav className={(activeDrop === true ? 'dropdown-navbar' : 'navbar')}>
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
                <i class='bx bx-menu bx-md' onClick={() => setActiveDrop(!activeDrop)}></i>
            </div>
        </header >
    );
};

export default NavBar;
