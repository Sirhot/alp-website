import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from "../images/mainlogo.jpg"

const NavBar = () => {
    return (
        <nav>
            <img src={logo} alt="logo" width="90px" height="90px" />
            <ul>
                <li><NavLink exact to="/" className="nav-link">Home</NavLink></li>
                <li><NavLink to="/about" className="nav-link">About</NavLink></li>
                <li><NavLink to="/contact" className="nav-link">Contact</NavLink></li>
            </ul>
        </nav >
    );
};

export default NavBar;
