import React, { useState } from 'react';
import { Button } from './Button';
import Link  from 'next/link';
import { FaBars, FaTimes, FaAngleDown } from "react-icons/fa";
import Dropdown from './Dropdown';

function Navbar() {
  const [ click, setClick ] = useState(false);
  const [ dropdown, setDropdown ] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
    <>
      <nav className='navbar'>
        <Link href='/' className='navbar-logo' onClick={closeMobileMenu}>
          EPIC
          {/* <i class='fab fa-firstdraft' /> */}
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? <FaBars/> : <FaTimes/> } />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link href='/' className='nav-links' onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li
            className='nav-item'
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link
              href='/services'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              <a href=""> Services <FaAngleDown /> </a>
            </Link>
            {dropdown && <Dropdown />}
          </li>
          <li className='nav-item'>
            <Link
              href='/portfolio'
              className='nav-links'
              onClick={closeMobileMenu}
            >
             Portfolio
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              href='/contact'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Contact Us
            </Link>
          </li>
          {/* <li>
            <Link
              href='/signup'
              className='nav-links-mobile'
              onClick={closeMobileMenu}
            >
              Sign Up
            </Link>
          </li> */}
        </ul>
        <Button />
      </nav>
    </>
  );
}

export default Navbar;