import {
  AppBar, IconButton, Toolbar,  Drawer} from "@material-ui/core";
import NextLink from "next/link";
import { useState } from "react";
import { FaBars, FaBattleNet, FaTimes, FaAngleDown } from "react-icons/fa";
import { Button } from "./Button";
import Dropdown from "./Dropdown";
import useStyles from "./NavbarStyle";





const Navbar = () => {

  const classes = useStyles();

  const [ dropdown, setDropdown ] = useState(false);

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


  // mobile menu
  const [ mobileMenu, setMobileMenu ] = useState(null);

  const openMobileMenuOpen = (event) => {
    setMobileMenu(true);
  };
  const closeMobileMenu = () => {
    setMobileMenu(null);
  };

  const [ drawerOpen, setDraweropen ] = useState(false);


  return (
    <>
      <Drawer style={{ width: 400, }} className={classes.mobilemeuDesign} open={drawerOpen} onClose={() => setDraweropen(false)}>
        <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '10px', }}>
          <li className={classes.nabarItem} >
            <NextLink href="/" >
              <a  > <FaBattleNet className={classes.logo} /> </a>
            </NextLink>
          </li>
          <IconButton onClick={() => setDraweropen(false)} >
            <FaTimes />
          </IconButton>
        </div>
        <div className={classes.drawer}>
          <ul>
            <li
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
            >
              <NextLink
                href='/services'
              >
                <a > SERVICES</a>
              </NextLink>
            </li>
            <li  >
              <NextLink onClick={() => setDraweropen(false)} href="/portfolio" >
                <a> PORTFOLIO </a>
              </NextLink>
            </li>
            <li  >
              <NextLink onClick={() => setDraweropen(false)} href="/team" >
                <a> OUR TEAM </a>
              </NextLink>
            </li>
            <li  >
              <NextLink onClick={() => setDraweropen(false)} href="/aboutus" >
                <a> ABOUT US </a>
              </NextLink>
            </li>
            <li  >
              <NextLink onClick={() => setDraweropen(false)} href="/contact" >
                <a> CONTACT </a>
              </NextLink>
            </li>
            <li onClick={() => setDraweropen(false)} >
              <Button  >
                SING UP
              </Button>
            </li>
          </ul>
        </div>
      </Drawer>
      {/* main app bar */}
      <AppBar position="fixed" className={classes.navbar} >
        <Toolbar>
          <div className={classes.mainbar} >
            <li className={classes.nabarItem} >
              <NextLink href="/" >
                <a  > <FaBattleNet className={classes.logo} /> </a>
              </NextLink>
            </li>
          </div>
          <div className={classes.sectionDesktop}>
            <ul style={{ display: 'flex', listStyle: 'none', justifyContent: 'center', alignItems: 'center', }} >
              <li
                className='nav-item'
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
              >
                <NextLink
                  href='/services'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  <a > SERVICES<FaAngleDown className={classes.dropdownIcon} /> </a>
                </NextLink>
                {dropdown && <Dropdown />}
              </li>
              <li >
                <NextLink href="/portfolio" >
                  <a> PORTFOLIO </a>
                </NextLink>
              </li>
              <li  >
                <NextLink href="/team" >
                  <a> OUR TEAM </a>
                </NextLink>
              </li>
              <li  >
                <NextLink href="/aboutus" >
                  <a> ABOUT US </a>
                </NextLink>
              </li>
              <li  >
                <NextLink href="/contact" >
                  <a> CONTACT </a>
                </NextLink>
              </li>
              <li  >
                <Button>
                  SING UP
                </Button>
              </li>
            </ul>
          </div>
          <div className={classes.mobileDesktop}>
            <IconButton onClick={() => setDraweropen(true)} >
              <FaBars className={classes.mobilemenu} />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
