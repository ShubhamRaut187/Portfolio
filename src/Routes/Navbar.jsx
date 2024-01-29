import React,{useState} from 'react';

import { NavLink } from 'react-router-dom';
import {CodeIcon,HamburgetMenuClose,HamburgetMenuOpen} from './Icon'

import './Styles/Navbar.css'
function Navbar(props) {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    
    
    return (
        <div className="navbar">
            <div className="nav-container">
                <NavLink exact to="/" className="nav-logo">
                    <span>Shubham Raut</span>
                    {/* <i className="fas fa-code"></i> */}
                    <span className="icon">
                    {/* <CodeIcon /> */}
                    </span>
                </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/about"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/skills"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Skills
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/project"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Projects
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/contact"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Contact me
              </NavLink>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            {/* <i className={click ? "fas fa-times" : "fas fa-bars"}></i> */}

            {click ? (
              <span className="icon">
                <HamburgetMenuClose />{" "}
              </span>
            ) : (
              <span className="icon">
                <HamburgetMenuOpen />
              </span>
            )}
          </div>
        </div>
        </div>
        
    );
}

export default Navbar;