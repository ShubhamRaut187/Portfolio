import React,{useState} from 'react';

// import { NavLink,Link } from 'react-router-dom';
import {HashLink as Link} from 'react-router-hash-link'
import {CodeIcon,HamburgetMenuClose,HamburgetMenuOpen} from './Icon'

import './Styles/Navbar.css'
function Navbar(props) {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    
    
    return (
        <div className="navbar">
            <div className="nav-container">
                <Link to="#home" className="nav-logo" smooth>
                    <span>Shubham Raut</span>
                    {/* <i className="fas fa-code"></i> */}
                    <span className="icon">
                    {/* <CodeIcon /> */}
                    </span>
                </Link>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link
                // exact
                to="#home"
                smooth
                // activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                // exact
                to="#about"
                smooth
                // activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                // exact
                to="#skills"
                smooth
                // activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Skills
              </Link>
            </li>
            <li className="nav-item">
              <Link
                // exact
                to="/project"
                // activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link
                // exact
                to="/contact"
                // activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Contact me
              </Link>
            </li>
            <li className="nav-item">
              <Link
                // exact
                to="/contact"
                // activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Resume
              </Link>
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